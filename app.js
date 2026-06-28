/* ============================================================
   DERS DEFTERİ — UYGULAMA MANTIĞI
   - Ana sayfa kartlarını çizer
   - course.html?ders=KOD sayfasını doldurur
   - Tema (koyu/açık) yönetimi
   - LaTeX (MathJax) yeniden işleme
   Bu dosyayı düzenlemene normalde gerek yok; içerik data.js'te.
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
  const btn = document.getElementById("themeBtn");
  if (btn) btn.textContent = next === "light" ? "🌙" : "☀️";
}

/* ---------- LaTeX yeniden işleme ---------- */
function renderMath() {
  if (window.MathJax && MathJax.typesetPromise) {
    MathJax.typesetPromise().catch(err => console.warn("MathJax:", err));
  }
}

/* ---------- Küçük yardımcı ---------- */
const $ = (sel) => document.querySelector(sel);
function setThemeBtnIcon() {
  const btn = document.getElementById("themeBtn");
  if (btn) btn.textContent =
    document.documentElement.getAttribute("data-theme") === "light" ? "🌙" : "☀️";
}

/* ============================================================
   ANA SAYFA
   ============================================================ */
function renderHome() {
  const grid = $("#courseGrid");
  if (!grid) return;

  grid.innerHTML = DERS_SIRASI.map(kod => {
    const d = DERSLER[kod];
    if (!d) return "";
    return `
      <a class="card" style="--card-color:${d.renk}" href="course.html?ders=${kod}">
        <span class="code">${kod}</span>
        <h3>${d.ad}</h3>
        <div class="meta">${d.donem}</div>
        <p class="desc">${d.ozet}</p>
        <span class="go">Derse git →</span>
      </a>`;
  }).join("");
}

/* ============================================================
   DERS DETAY SAYFASI
   ============================================================ */
function renderCourse() {
  const root = $("#courseRoot");
  if (!root) return;

  const kod = new URLSearchParams(location.search).get("ders");
  const d = DERSLER[kod];

  if (!d) {
    root.innerHTML = `<div class="course-head"><h1>Ders bulunamadı</h1>
      <p class="ozet">“${kod || "—"}” kodlu ders <code>data.js</code> içinde tanımlı değil.</p>
      <p style="margin-top:16px"><a class="back-link" href="index.html">← Ana sayfaya dön</a></p></div>`;
    return;
  }

  document.title = `${kod} · ${d.ad} — Ders Defteri`;

  root.innerHTML = `
    ${headBlock(kod, d)}
    ${konularBlock(d)}
    ${galeriBlock(d)}
    ${dokumanlarBlock(d)}
    ${videoBlock(d)}
    ${sorularBlock(d)}
  `;

  bindAccordion();
  bindQuestionFilter();
  renderMath();
}

/* ----- Bölüm üreticileri ----- */
function headBlock(kod, d) {
  return `
    <header class="course-head" style="--accent:${d.renk}">
      <span class="code">${kod} · ${d.donem}</span>
      <h1>${d.ad}</h1>
      <p class="ozet">${d.ozet}</p>
    </header>`;
}

function konularBlock(d) {
  const items = (d.konular || []).map(k => `
    <div class="topic"><h3>${k.baslik}</h3>${k.icerik}</div>`).join("");
  return `<section class="section">
    <h2><span class="idx">01</span> Konu Anlatımı</h2>
    ${items || emptyMsg("Henüz konu eklenmemiş.")}
  </section>`;
}

function galeriBlock(d) {
  const g = d.galeri || [];
  const items = g.map(x => `
    <figure>
      <img src="${x.src}" alt="${x.baslik}" loading="lazy"
           onerror="this.style.opacity=.4;this.alt='Görsel yüklenemedi'">
      <figcaption>${x.baslik}</figcaption>
    </figure>`).join("");
  return `<section class="section">
    <h2><span class="idx">02</span> Medya ve Görseller</h2>
    ${g.length ? `<div class="gallery">${items}</div>` : emptyMsg("Henüz görsel eklenmemiş.")}
  </section>`;
}

function dokumanlarBlock(d) {
  const docs = d.dokumanlar || [];
  const items = docs.map(x => `
    <a class="doc" href="${x.dosya}" target="_blank" rel="noopener">
      <span class="ico">PDF</span>
      <span>
        <span class="doc-name">${x.ad}</span><br>
        <span class="doc-tag">${x.tur} · indir / görüntüle</span>
      </span>
    </a>`).join("");
  return `<section class="section">
    <h2><span class="idx">03</span> Dökümanlar</h2>
    ${docs.length ? `<div class="docs">${items}</div>` : emptyMsg("Henüz doküman eklenmemiş.")}
  </section>`;
}

function videoBlock(d) {
  const vids = d.videolar || [];
  const items = vids.map(v => `
    <figure class="video">
      <div class="frame">
        <iframe src="https://www.youtube-nocookie.com/embed/${v.youtube}"
          title="${v.baslik}" loading="lazy"
          allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen></iframe>
      </div>
      <figcaption>${v.baslik}</figcaption>
    </figure>`).join("");
  return `<section class="section">
    <h2><span class="idx">04</span> Video Kaynakları</h2>
    ${vids.length ? `<div class="videos">${items}</div>` : emptyMsg("Henüz video eklenmemiş.")}
  </section>`;
}

function sorularBlock(d) {
  const qs = d.sorular || [];
  const items = qs.map((q, i) => `
    <div class="acc-item" data-tip="${q.tip || "vize"}">
      <button class="acc-head" type="button">
        <span class="tag ${q.tip === "final" ? "final" : ""}">${q.tip || "vize"}</span>
        Soru ${i + 1}
        <span class="chev">▾</span>
      </button>
      <div class="acc-body"><div class="inner">
        ${q.soru}
        <div class="cozum-label">Çözüm</div>
        ${q.cozum}
      </div></div>
    </div>`).join("");

  return `<section class="section">
    <h2><span class="idx">05</span> Soru Havuzu</h2>
    ${qs.length ? `
      <div class="q-filter">
        <button data-f="all" class="active">Tümü</button>
        <button data-f="vize">Vize</button>
        <button data-f="final">Final</button>
      </div>
      <div class="accordion">${items}</div>
    ` : emptyMsg("Henüz soru eklenmemiş.")}
  </section>`;
}

function emptyMsg(t) { return `<p class="empty">${t}</p>`; }

/* ----- Etkileşimler ----- */
function bindAccordion() {
  document.querySelectorAll(".acc-head").forEach(btn => {
    btn.addEventListener("click", () => {
      const item = btn.closest(".acc-item");
      const body = item.querySelector(".acc-body");
      const isOpen = item.classList.toggle("open");
      body.style.maxHeight = isOpen ? body.scrollHeight + "px" : null;
    });
  });
}

function bindQuestionFilter() {
  const filterBtns = document.querySelectorAll(".q-filter button");
  filterBtns.forEach(b => b.addEventListener("click", () => {
    filterBtns.forEach(x => x.classList.remove("active"));
    b.classList.add("active");
    const f = b.dataset.f;
    document.querySelectorAll(".acc-item").forEach(item => {
      item.style.display = (f === "all" || item.dataset.tip === f) ? "" : "none";
    });
  }));
}

/* ---------- Başlat ---------- */
document.addEventListener("DOMContentLoaded", () => {
  setThemeBtnIcon();
  renderHome();
  renderCourse();
});
