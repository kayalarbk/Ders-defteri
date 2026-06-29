/* ============================================================
   DERS DEFTERİ — UYGULAMA MANTIĞI (app.js)
   - Ana sayfa + ders detay render
   - Formül kartları (flip)
   - Kullanıcı fotoğraf/doküman yükleme (IndexedDB, sunucusuz)
   - İlk 5 önizleme + tam galeri modalı + lightbox
   - Tema + MathJax
   ============================================================ */

/* ---------- Tema ---------- */
(function initTheme() {
  const saved = localStorage.getItem("dd-theme");
  if (saved) document.documentElement.setAttribute("data-theme", saved);
})();
function toggleTheme() {
  const el = document.documentElement;
  const next = el.getAttribute("data-theme") === "light" ? "dark" : "light";
  el.setAttribute("data-theme", next);
  localStorage.setItem("dd-theme", next);
  setThemeBtnIcon();
}
function setThemeBtnIcon() {
  const btn = document.getElementById("themeBtn");
  if (btn) btn.textContent =
    document.documentElement.getAttribute("data-theme") === "light" ? "🌙" : "☀️";
}

/* ---------- LaTeX ---------- */
function renderMath(el) {
  if (window.MathJax && MathJax.typesetPromise) {
    MathJax.typesetPromise(el ? [el] : undefined).catch(e => console.warn("MathJax:", e));
  }
}
const $ = s => document.querySelector(s);
const esc = s => String(s).replace(/[&<>"']/g, c => ({ "&":"&amp;","<":"&lt;",">":"&gt;","\"":"&quot;","'":"&#39;" }[c]));

/* ============================================================
   INDEXEDDB — kullanıcı yüklemeleri (foto / doküman)
   ============================================================ */
const DB_NAME = "DersDefteriDB", STORE = "media";
function openDB() {
  return new Promise((res, rej) => {
    const req = indexedDB.open(DB_NAME, 1);
    req.onupgradeneeded = e => {
      const db = e.target.result;
      if (!db.objectStoreNames.contains(STORE)) {
        const s = db.createObjectStore(STORE, { keyPath: "id", autoIncrement: true });
        s.createIndex("ders", "ders", { unique: false });
      }
    };
    req.onsuccess = e => res(e.target.result);
    req.onerror = e => rej(e.target.error);
  });
}
async function idbAdd(rec) {
  const db = await openDB();
  return new Promise((res, rej) => {
    const tx = db.transaction(STORE, "readwrite");
    tx.objectStore(STORE).add(rec);
    tx.oncomplete = res; tx.onerror = () => rej(tx.error);
  });
}
async function idbByDers(ders) {
  const db = await openDB();
  return new Promise((res, rej) => {
    const tx = db.transaction(STORE, "readonly");
    const req = tx.objectStore(STORE).index("ders").getAll(ders);
    req.onsuccess = () => res(req.result || []);
    req.onerror = () => rej(req.error);
  });
}
async function idbDelete(id) {
  const db = await openDB();
  return new Promise((res, rej) => {
    const tx = db.transaction(STORE, "readwrite");
    tx.objectStore(STORE).delete(id);
    tx.oncomplete = res; tx.onerror = () => rej(tx.error);
  });
}

/* Telefon fotoğraflarını küçült (depo + hız için) */
function shrinkImage(file, maxDim = 1600, quality = 0.85) {
  return new Promise(resolve => {
    if (!file.type.startsWith("image/")) return resolve(file);
    const img = new Image(), url = URL.createObjectURL(file);
    img.onload = () => {
      let w = img.width, h = img.height;
      if (Math.max(w, h) > maxDim) { const s = maxDim / Math.max(w, h); w = Math.round(w*s); h = Math.round(h*s); }
      const c = document.createElement("canvas"); c.width = w; c.height = h;
      c.getContext("2d").drawImage(img, 0, 0, w, h);
      URL.revokeObjectURL(url);
      c.toBlob(b => resolve(b || file), "image/jpeg", quality);
    };
    img.onerror = () => { URL.revokeObjectURL(url); resolve(file); };
    img.src = url;
  });
}

/* ============================================================
   ANA SAYFA
   ============================================================ */
function renderHome() {
  const grid = $("#courseGrid");
  if (!grid) return;
  grid.innerHTML = DERS_SIRASI.map(kod => {
    const d = DERSLER[kod]; if (!d) return "";
    return `
      <a class="card" style="--card-color:${d.renk}" href="course.html?ders=${kod}">
        <span class="code">${kod}</span>
        <h3>${esc(d.ad)}</h3>
        <div class="meta">${esc(d.donem)}</div>
        <p class="desc">${esc(d.ozet)}</p>
        <span class="go">Derse git →</span>
      </a>`;
  }).join("");
}

/* ============================================================
   DERS DETAY
   ============================================================ */
let AKTIF_DERS = null;

function renderCourse() {
  const root = $("#courseRoot");
  if (!root) return;
  const kod = new URLSearchParams(location.search).get("ders");
  const d = DERSLER[kod];
  AKTIF_DERS = kod;

  if (!d) {
    root.innerHTML = `<div class="course-head"><h1>Ders bulunamadı</h1>
      <p class="ozet">“${esc(kod || "—")}” kodu <code>data.js</code> içinde tanımlı değil.</p>
      <p style="margin-top:16px"><a class="back-link" href="index.html">← Ana sayfaya dön</a></p></div>`;
    return;
  }
  document.title = `${kod} · ${d.ad} — Ders Defteri`;

  root.innerHTML = `
    ${headBlock(kod, d)}
    ${konularBlock(d)}
    ${formullerBlock(d)}
    ${medyaBlock(kod, d)}
    ${dokumanBlock(kod, d)}
    ${videoBlock(d)}
    ${sorularBlock(d)}
  `;

  bindAccordion();
  bindQuestionFilter();
  bindFlashcards();
  renderMath();
  loadUploads(kod);   // IndexedDB'den foto + doküman çek
}

/* ----- Başlık ----- */
function headBlock(kod, d) {
  return `<header class="course-head" style="--accent:${d.renk}">
    <span class="code">${kod} · ${esc(d.donem)}</span>
    <h1>${esc(d.ad)}</h1>
    <p class="ozet">${esc(d.ozet)}</p>
  </header>`;
}

/* ----- 01 Konu Anlatımı ----- */
function konularBlock(d) {
  const items = (d.konular || []).map(k =>
    `<div class="topic"><h3>${esc(k.baslik)}</h3>${k.icerik}</div>`).join("");
  return `<section class="section"><h2><span class="idx">01</span> Konu Anlatımı</h2>
    ${items || emptyMsg("Henüz konu eklenmemiş.")}</section>`;
}

/* ----- 02 Formül Kartları (flip) ----- */
function formullerBlock(d) {
  const f = d.formuller || [];
  const cards = f.map(x => `
    <button class="flip" type="button" aria-label="${esc(x.ad)} — çevir">
      <div class="flip-inner">
        <div class="flip-face flip-front">
          <span class="flip-tag">FORMÜL</span>
          <strong>${esc(x.ad)}</strong>
          <span class="flip-hint">çevirmek için dokun</span>
        </div>
        <div class="flip-face flip-back">
          <div class="flip-formula">${x.formul}</div>
          ${x.aciklama ? `<p class="flip-desc">${esc(x.aciklama)}</p>` : ""}
        </div>
      </div>
    </button>`).join("");
  return `<section class="section"><h2><span class="idx">02</span> Formül Kartları</h2>
    ${f.length ? `<div class="cards">${cards}</div>` : emptyMsg("Henüz formül eklenmemiş.")}</section>`;
}

/* ----- 03 Medya ve Görseller (yüklemeli) ----- */
function medyaBlock(kod, d) {
  return `<section class="section"><h2><span class="idx">03</span> Medya ve Görseller</h2>
    <div class="upload-row">
      <button class="btn-upload" type="button" onclick="document.getElementById('fotoInput').click()">📷 Fotoğraf Ekle</button>
      <input id="fotoInput" type="file" accept="image/*" multiple hidden onchange="handleUpload(event,'foto')">
      <span class="upload-note">Dersten çektiğin fotoğrafları ekle · ilk 5'i burada görünür</span>
    </div>
    <div class="preview-grid" id="fotoPreview"><p class="empty">Yükleniyor…</p></div>
    <div id="galleryBtnWrap"></div>
  </section>`;
}

/* ----- 04 Dökümanlar (yüklemeli + sabit) ----- */
function dokumanBlock(kod, d) {
  const sabit = (d.dokumanlar || []).map(x => `
    <a class="doc" href="${esc(x.dosya)}" target="_blank" rel="noopener">
      <span class="ico">PDF</span>
      <span><span class="doc-name">${esc(x.ad)}</span><br>
      <span class="doc-tag">${esc(x.tur)} · görüntüle</span></span>
    </a>`).join("");
  return `<section class="section"><h2><span class="idx">04</span> Dökümanlar</h2>
    <div class="upload-row">
      <button class="btn-upload" type="button" onclick="document.getElementById('dokInput').click()">📄 Doküman Ekle</button>
      <input id="dokInput" type="file" accept=".pdf,image/*" multiple hidden onchange="handleUpload(event,'dok')">
      <span class="upload-note">Ders notu PDF'lerini ekle</span>
    </div>
    <div class="docs" id="dokList">${sabit}</div>
    <div class="docs" id="dokUploaded"><p class="empty">Yükleniyor…</p></div>
  </section>`;
}

/* ----- 05 Video ----- */
function videoBlock(d) {
  const v = d.videolar || [];
  const items = v.map(x => `
    <figure class="video"><div class="frame">
      <iframe src="https://www.youtube-nocookie.com/embed/${esc(x.youtube)}"
        title="${esc(x.baslik)}" loading="lazy"
        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen></iframe>
    </div><figcaption>${esc(x.baslik)}</figcaption></figure>`).join("");
  return `<section class="section"><h2><span class="idx">05</span> Video Kaynakları</h2>
    ${v.length ? `<div class="videos">${items}</div>` : emptyMsg("Henüz video eklenmemiş.")}</section>`;
}

/* ----- 06 Soru Havuzu ----- */
function sorularBlock(d) {
  const q = d.sorular || [];
  const items = q.map((x, i) => `
    <div class="acc-item" data-tip="${x.tip || "vize"}">
      <button class="acc-head" type="button">
        <span class="tag ${x.tip === "final" ? "final" : ""}">${x.tip || "vize"}</span>
        Soru ${i + 1}<span class="chev">▾</span>
      </button>
      <div class="acc-body"><div class="inner">
        ${x.soru}<div class="cozum-label">Çözüm</div>${x.cozum}
      </div></div>
    </div>`).join("");
  return `<section class="section"><h2><span class="idx">06</span> Soru Havuzu</h2>
    ${q.length ? `
      <div class="q-filter">
        <button data-f="all" class="active">Tümü</button>
        <button data-f="vize">Vize</button>
        <button data-f="final">Final</button>
      </div><div class="accordion">${items}</div>
    ` : emptyMsg("Henüz soru eklenmemiş.")}</section>`;
}

function emptyMsg(t) { return `<p class="empty">${t}</p>`; }

/* ============================================================
   YÜKLEME İŞLEMLERİ
   ============================================================ */
async function handleUpload(e, tip) {
  const files = [...e.target.files];
  e.target.value = "";           // aynı dosyayı tekrar seçebilmek için
  if (!files.length || !AKTIF_DERS) return;
  for (const file of files) {
    const blob = tip === "foto" ? await shrinkImage(file) : file;
    await idbAdd({ ders: AKTIF_DERS, tip, ad: file.name, mime: blob.type || file.type, blob });
  }
  loadUploads(AKTIF_DERS);
}

async function loadUploads(kod) {
  const all = await idbByDers(kod);
  renderFotoPreview(kod, all.filter(x => x.tip === "foto"));
  renderDokUploaded(all.filter(x => x.tip === "dok"));
}

/* ilk 5 önizleme + "galeriyi aç" */
function renderFotoPreview(kod, fotos) {
  const grid = $("#fotoPreview"), wrap = $("#galleryBtnWrap");
  if (!grid) return;
  if (!fotos.length) {
    grid.innerHTML = `<p class="empty">Henüz fotoğraf eklenmedi. Yukarıdaki butondan ekleyebilirsin.</p>`;
    wrap.innerHTML = ""; return;
  }
  const ilk5 = fotos.slice(0, 5);
  grid.innerHTML = ilk5.map(f => {
    const url = URL.createObjectURL(f.blob);
    return `<figure class="thumb">
      <img src="${url}" alt="${esc(f.ad)}" loading="lazy" onclick="openLightbox('${url}','${esc(f.ad)}')">
      <button class="del" type="button" title="Sil" onclick="delMedia(${f.id})">×</button>
    </figure>`;
  }).join("");
  wrap.innerHTML = fotos.length > 5
    ? `<button class="more-btn" type="button" onclick="openGallery('${kod}')">🖼 Tüm Galeriyi Aç (${fotos.length} fotoğraf)</button>`
    : `<p class="gallery-count">${fotos.length} fotoğraf</p>`;
}

function renderDokUploaded(docs) {
  const box = $("#dokUploaded");
  if (!box) return;
  if (!docs.length) { box.innerHTML = ""; return; }
  box.innerHTML = docs.map(f => {
    const url = URL.createObjectURL(f.blob);
    return `<div class="doc">
      <a class="doc-link" href="${url}" target="_blank" rel="noopener">
        <span class="ico">${f.mime.includes("pdf") ? "PDF" : "IMG"}</span>
        <span><span class="doc-name">${esc(f.ad)}</span><br>
        <span class="doc-tag">yüklendi · görüntüle</span></span>
      </a>
      <button class="del del-doc" type="button" title="Sil" onclick="delMedia(${f.id})">×</button>
    </div>`;
  }).join("");
}

async function delMedia(id) {
  if (!confirm("Bu öğeyi silmek istediğine emin misin?")) return;
  await idbDelete(id);
  loadUploads(AKTIF_DERS);
  closeOverlay();
}

/* ============================================================
   GALERİ MODALI + LIGHTBOX
   ============================================================ */
function ensureOverlay() {
  let ov = $("#ddOverlay");
  if (!ov) {
    ov = document.createElement("div");
    ov.id = "ddOverlay"; ov.className = "overlay";
    ov.addEventListener("click", e => { if (e.target === ov) closeOverlay(); });
    document.body.appendChild(ov);
  }
  return ov;
}
function closeOverlay() {
  const ov = $("#ddOverlay");
  if (ov) { ov.classList.remove("open"); ov.innerHTML = ""; }
  document.body.style.overflow = "";
}
function openLightbox(url, ad) {
  const ov = ensureOverlay();
  ov.innerHTML = `<div class="lightbox">
    <button class="ov-close" onclick="closeOverlay()" aria-label="Kapat">×</button>
    <img src="${url}" alt="${ad}">
    <p class="ov-cap">${ad}</p>
  </div>`;
  ov.classList.add("open"); document.body.style.overflow = "hidden";
}
async function openGallery(kod) {
  const fotos = (await idbByDers(kod)).filter(x => x.tip === "foto");
  const ov = ensureOverlay();
  const items = fotos.map(f => {
    const url = URL.createObjectURL(f.blob);
    return `<figure class="thumb">
      <img src="${url}" alt="${esc(f.ad)}" loading="lazy" onclick="openLightbox('${url}','${esc(f.ad)}')">
      <button class="del" type="button" title="Sil" onclick="delMedia(${f.id})">×</button>
    </figure>`;
  }).join("");
  ov.innerHTML = `<div class="gallery-modal">
    <div class="gm-head">
      <h3>${kod} · Galeri (${fotos.length})</h3>
      <button class="ov-close" onclick="closeOverlay()" aria-label="Kapat">×</button>
    </div>
    <div class="preview-grid">${items}</div>
  </div>`;
  ov.classList.add("open"); document.body.style.overflow = "hidden";
}
document.addEventListener("keydown", e => { if (e.key === "Escape") closeOverlay(); });

/* ============================================================
   ETKİLEŞİMLER
   ============================================================ */
function bindFlashcards() {
  document.querySelectorAll(".flip").forEach(c =>
    c.addEventListener("click", () => c.classList.toggle("flipped")));
}
function bindAccordion() {
  document.querySelectorAll(".acc-head").forEach(btn =>
    btn.addEventListener("click", () => {
      const item = btn.closest(".acc-item"), body = item.querySelector(".acc-body");
      const open = item.classList.toggle("open");
      body.style.maxHeight = open ? body.scrollHeight + "px" : null;
    }));
}
function bindQuestionFilter() {
  const btns = document.querySelectorAll(".q-filter button");
  btns.forEach(b => b.addEventListener("click", () => {
    btns.forEach(x => x.classList.remove("active"));
    b.classList.add("active");
    const f = b.dataset.f;
    document.querySelectorAll(".acc-item").forEach(it =>
      it.style.display = (f === "all" || it.dataset.tip === f) ? "" : "none");
  }));
}

/* ---------- Başlat ---------- */
document.addEventListener("DOMContentLoaded", () => {
  setThemeBtnIcon();
  renderHome();
  renderCourse();
});
