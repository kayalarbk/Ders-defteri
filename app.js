/* ============================================================
   DERS DEFTERİ — UYGULAMA MANTIĞI (app.js)
   - Ana sayfa + ders detay render
   - Formül kartları (flip)
   - Kullanıcı fotoğraf/doküman yükleme (IndexedDB, sunucusuz)
   - İlk 5 önizleme + tam galeri modalı + lightbox
   - Tema + MathJax
   ============================================================ */

/* ---------- Tema ----------
   Varsayılan AÇIK tema (kağıt); kullanıcı seçimi localStorage'da,
   hiç seçim yapılmadıysa işletim sistemi tercihi kullanılır. */
(function initTheme() {
  const saved = localStorage.getItem("dd-theme");
  const tema = saved || (window.matchMedia &&
    matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
  document.documentElement.setAttribute("data-theme", tema);
})();
function toggleTheme() {
  const el = document.documentElement;
  const next = el.getAttribute("data-theme") === "dark" ? "light" : "dark";
  el.setAttribute("data-theme", next);
  localStorage.setItem("dd-theme", next);
  setThemeBtnIcon();
}
function setThemeBtnIcon() {
  const btn = document.getElementById("themeBtn");
  if (!btn) return;
  const koyu = document.documentElement.getAttribute("data-theme") === "dark";
  btn.textContent = koyu ? "☀️" : "🌙";
  btn.title = koyu ? "Açık temaya geç" : "Koyu temaya geç";
  btn.setAttribute("aria-label", btn.title);
}

/* ---------- LaTeX ---------- */
function renderMath(el) {
  if (window.MathJax && MathJax.typesetPromise) {
    MathJax.typesetPromise(el ? [el] : undefined).catch(e => console.warn("MathJax:", e));
  }
}
const $ = s => document.querySelector(s);
const esc = s => String(s).replace(/[&<>"']/g, c => ({ "&":"&amp;","<":"&lt;",">":"&gt;","\"":"&quot;","'":"&#39;" }[c]));

/* HTML + LaTeX içerikten okunabilir düz metin çıkarır
   (soru başlıklarında önizleme ve aramada kullanılır) */
const _metinKutu = document.createElement("div");
/* Sık kullanılan LaTeX komutları — silmek yerine sembole çevrilir,
   yoksa "X(j\omega)" başlıkta "X(j )" gibi görünüyor. */
const _TEX_SEMBOL = {
  omega:"ω", alpha:"α", beta:"β", gamma:"γ", delta:"δ", epsilon:"ε", theta:"θ",
  lambda:"λ", mu:"μ", pi:"π", rho:"ρ", sigma:"σ", tau:"τ", phi:"φ", psi:"ψ",
  Omega:"Ω", Delta:"Δ", Sigma:"Σ", Phi:"Φ", Gamma:"Γ",
  infty:"∞", int:"∫", sum:"Σ", prod:"Π", partial:"∂", nabla:"∇", sqrt:"√",
  le:"≤", ge:"≥", neq:"≠", approx:"≈", pm:"±", times:"×", cdot:"·",
  to:"→", rightarrow:"→", leftrightarrow:"↔", in:"∈", forall:"∀", exists:"∃",
  equiv:"≡", propto:"∝", sim:"~", ll:"≪", gg:"≫", cup:"∪", cap:"∩",
  subset:"⊂", subseteq:"⊆", setminus:"\\", emptyset:"∅", angle:"∠",
  ldots:"…", cdots:"⋯", dots:"…", oint:"∮", iint:"∬", div:"÷", ast:"*",
  circ:"∘", perp:"⊥", parallel:"∥", degree:"°", ohm:"Ω", varepsilon:"ε",
  varphi:"φ", eta:"η", zeta:"ζ", kappa:"κ", nu:"ν", xi:"ξ", chi:"χ",
  Lambda:"Λ", Theta:"Θ", Psi:"Ψ", Pi:"Π", mid:"|", langle:"⟨", rangle:"⟩"
};
/* Üs/alt indis için Unicode karşılıkları — "e^{-2t}" başlıkta
   "e-2t" olup anlamını yitiriyordu. */
const _UST = { "0":"⁰","1":"¹","2":"²","3":"³","4":"⁴","5":"⁵","6":"⁶","7":"⁷","8":"⁸","9":"⁹",
  "+":"⁺","-":"⁻","n":"ⁿ","i":"ⁱ","t":"ᵗ","k":"ᵏ","x":"ˣ","j":"ʲ","a":"ᵃ","b":"ᵇ","m":"ᵐ" };
const _ALT = { "0":"₀","1":"₁","2":"₂","3":"₃","4":"₄","5":"₅","6":"₆","7":"₇","8":"₈","9":"₉",
  "+":"₊","-":"₋","n":"ₙ","i":"ᵢ","k":"ₖ","x":"ₓ","a":"ₐ","m":"ₘ","t":"ₜ" };
/* Sembolü olmayan ama adı okunabilir olan komutlar: silinince
   "\cos(2\pi t)" başlıkta " (2π t)" gibi anlamsız kalıyordu. */
const _TEX_AD = /^(sin|cos|tan|cot|sec|csc|log|ln|exp|lim|max|min|arg|det|dim|gcd|lcm|mod|bmod|pmod|sinh|cosh|tanh|Re|Im)$/;

/* Karakterleri üst/alt indise çevirir; karşılığı olmayan varsa
   okunabilirlik için "^(...)" biçimine düşer. */
function _kucult(t, tablo) {
  t = String(t);
  if (t && [...t].every(c => tablo[c])) return [...t].map(c => tablo[c]).join("");
  const im = tablo === _UST ? "^" : "_";
  return t.length > 1 ? im + "(" + t + ")" : im + t;
}

function duzMetin(html, max = 90) {
  _metinKutu.innerHTML = String(html || "");
  let s = (_metinKutu.textContent || "")
    .replace(/\\[()[\]]/g, " ")                            // \( \) \[ \]
    .replace(/\$\$?/g, " ")                                // $ ve $$
    // Sadece dizgi biçimi veren sarmalayıcılar: içerik kalsın, komut gitsin
    // ("1\,\text{mA}" başlıkta "1,textmA" oluyordu)
    .replace(/\\(?:text|mathrm|mathbf|mathit|operatorname|hbox|mbox)\s*\{([^{}]*)\}/g, "$1")
    .replace(/\\[,;!:> ]|\\q?quad/g, " ")                  // ince boşluk komutları
    // \frac{a}{b} → (a)/(b) — kesirler başlıkta tamamen kayboluyordu
    .replace(/\\[dt]?frac\s*\{([^{}]*)\}\s*\{([^{}]*)\}/g, "($1)/($2)")
    .replace(/\\sqrt\s*\{([^{}]*)\}/g, "√($1)")
    .replace(/\\(?:hat|bar|vec|tilde|dot)\s*\{([^{}]*)\}/g, "$1")
    .replace(/\\([a-zA-Z]+)/g, (m, c) =>
      _TEX_SEMBOL[c] || (_TEX_AD.test(c) ? c : " "))
    // üs ve alt indis: ^{-2t} ve ^2 biçimlerinin ikisi de
    .replace(/\^\{([^{}]*)\}|\^(\w)/g, (m, a, b) => _kucult(a !== undefined ? a : b, _UST))
    .replace(/_\{([^{}]*)\}|_(\w)/g,   (m, a, b) => _kucult(a !== undefined ? a : b, _ALT))
    .replace(/[{}&\\]/g, "")
    .replace(/\s+/g, " ")
    .replace(/\s+([),.;:])/g, "$1")                        // "X(j )" → "X(j)"
    .replace(/([(])\s+/g, "$1")
    .trim();
  return s.length > max ? s.slice(0, max).trimEnd() + "…" : s;
}

/* Türkçe arama normalizasyonu: "olcum" yazınca "ölçüm" de bulunsun */
const norm = s => String(s).toLocaleLowerCase("tr")
  .replace(/[ıİ]/g, "i").replace(/[şŞ]/g, "s").replace(/[ğĞ]/g, "g")
  .replace(/[üÜ]/g, "u").replace(/[öÖ]/g, "o").replace(/[çÇ]/g, "c");

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
   İLERLEME TAKİBİ (localStorage)
   ============================================================ */
function getProgress(kod) {
  const key = "dd-prog-" + kod;
  // Henüz diske yazılmamış (debounce bekleyen) değer varsa onu kullan
  if (_pendingWrites.has(key)) return _pendingWrites.get(key);
  try { return JSON.parse(localStorage.getItem(key)) || []; }
  catch { return []; }
}
/* Debounce'lu yazma: hızlı ardışık işaretlemelerde tek yazma yapılır,
   sayfa kapanırken bekleyen yazmalar zorla diske aktarılır. */
const _pendingWrites = new Map();
let _writeTimer = null;
function saveDebounced(key, value, delay = 250) {
  _pendingWrites.set(key, value);
  clearTimeout(_writeTimer);
  _writeTimer = setTimeout(flushWrites, delay);
}
function flushWrites() {
  clearTimeout(_writeTimer); _writeTimer = null;
  for (const [k, v] of _pendingWrites) {
    try { localStorage.setItem(k, JSON.stringify(v)); }
    catch (e) { console.warn("Kaydedilemedi:", k, e); }
  }
  _pendingWrites.clear();
}
// Sayfa kapanırken / arka plana alınırken bekleyen veriyi kaydet
window.addEventListener("pagehide", flushWrites);
document.addEventListener("visibilitychange", () => {
  if (document.visibilityState === "hidden") flushWrites();
});

function setProgress(kod, arr) {
  saveDebounced("dd-prog-" + kod, arr);
}
function toggleTopicDone(kod, idx, btn) {
  let done = getProgress(kod);
  if (done.includes(idx)) done = done.filter(i => i !== idx);
  else done.push(idx);
  setProgress(kod, done);
  btn.closest(".topic-item").classList.toggle("done", done.includes(idx));
  updateCourseProgress(kod);
}
function updateCourseProgress(kod) {
  const d = DERSLER[kod]; if (!d) return;
  const total = (d.konular || []).length;
  const done = getProgress(kod).filter(i => i < total).length;
  const pct = total ? Math.round(done / total * 100) : 0;
  const bar = $("#progFill"), label = $("#progLabel");
  if (bar) bar.style.width = pct + "%";
  if (label) label.textContent = `${done}/${total} konu tamamlandı · %${pct}`;

  const yaz = (id, a, b) => {
    const el = document.getElementById(id);
    if (el) {
      el.textContent = `${a}/${b}`;
      el.parentElement.classList.toggle("tam", b > 0 && a === b);
    }
  };
  const f = (d.formuller || []).length;
  const sorular = (d.sorular || []).length;
  const durum = getSoruDurum(kod);
  const cozulen = Object.keys(durum).filter(k => durum[k] === "coz").length;
  yaz("ilrKonu",   done, total);
  yaz("ilrFormul", getFlashBilinen(kod).length, f);
  yaz("ilrSoru",   cozulen, sorular);
  notSayacGuncelle(kod);
}

/* ============================================================
   ANA SAYFA
   ============================================================ */
function renderHome() {
  const grid = $("#courseGrid");
  if (!grid) return;
  // _ayarlar.js yüklenmezse sayfa tamamen boş kalmasın
  const sira = (typeof DERS_SIRASI !== "undefined") ? DERS_SIRASI : Object.keys(DERSLER || {});
  grid.innerHTML = sira.map(kod => {
    const d = DERSLER[kod]; if (!d) return "";
    const total = (d.konular || []).length;
    const done = getProgress(kod).filter(i => i < total).length;
    const pct = total ? Math.round(done / total * 100) : 0;
    /* Kartta yalnızca konu ilerlemesi vardı; formül ve soru çalışması
       ana sayfada hiç görünmüyordu. */
    const fT = (d.formuller || []).length, fD = getFlashBilinen(kod).length;
    const sT = (d.sorular || []).length;
    const durum = getSoruDurum(kod);
    const sD = Object.keys(durum).filter(k => durum[k] === "coz").length;
    const notN = notSayaci(kod);
    return `
      <a class="card${pct === 100 ? " bitti" : ""}" style="--card-color:${d.renk}" href="course.html?ders=${kod}">
        <span class="code">${kod}</span>
        <h3>${esc(d.ad)}</h3>
        <div class="meta">${esc(d.donem)}</div>
        <p class="desc">${esc(d.ozet)}</p>
        <div class="card-prog" title="Konu ilerlemesi">
          <div class="card-prog-fill" style="width:${pct}%"></div>
        </div>
        <div class="card-mini">
          <span title="tamamlanan konu">📖 ${done}/${total}</span>
          <span title="bildiğin formül">🎴 ${fD}/${fT}</span>
          <span title="çözdüğün soru">✎ ${sD}/${sT}</span>
          ${notN ? `<span title="kendi notun olan konu sayısı">📝 ${notN}</span>` : ""}
        </div>
        <div class="card-prog-row">
          <span class="card-prog-label">${pct === 100 ? "konular tamam" : `%${pct} tamamlandı`}</span>
          <span class="go">Derse git →</span>
        </div>
      </a>`;
  }).join("");
  renderTakvim();
  renderOzet();
  renderQuickLinks();
}

/* ============================================================
   AKADEMİK TAKVİM — geri sayım + dönem çubuğu (ana sayfa)
   Veri: data/_ayarlar.js içindeki TAKVIM.
   ============================================================ */
const GUN_MS = 86400000;

/* "YYYY-MM-DD" → yerel gün başlangıcı (UTC kayması olmadan) */
function tvGun(s) {
  const [y, m, d] = String(s).split("-").map(Number);
  return new Date(y, m - 1, d);
}
function tvBugun() {
  const n = new Date();
  return new Date(n.getFullYear(), n.getMonth(), n.getDate());
}
/* Aradaki tam gün sayısı (a → b) */
function tvFark(a, b) { return Math.round((b - a) / GUN_MS); }

const TV_AY = ["Oca","Şub","Mar","Nis","May","Haz","Tem","Ağu","Eyl","Eki","Kas","Ara"];
function tvKisa(d) { return `${d.getDate()} ${TV_AY[d.getMonth()]}`; }
/* "16 – 22 Kas" gibi; aylar farklıysa ikisi de yazılır */
function tvAralik(a, b) {
  return a.getMonth() === b.getMonth()
    ? `${a.getDate()}–${b.getDate()} ${TV_AY[b.getMonth()]}`
    : `${tvKisa(a)} – ${tvKisa(b)}`;
}
function tvGunAdi(n) { return n === 0 ? "bugün" : n === 1 ? "yarın" : `${n} gün`; }

/* Dönemin o anki durumu; takvim tanımlı değilse null */
function takvimDurum(bugun = tvBugun()) {
  if (typeof TAKVIM === "undefined" || !TAKVIM || !TAKVIM.baslangic) return null;
  const bas = tvGun(TAKVIM.baslangic);
  const vB = tvGun(TAKVIM.vize.bas),  vS = tvGun(TAKVIM.vize.bit);
  const fB = tvGun(TAKVIM.final.bas), fS = tvGun(TAKVIM.final.bit);

  let faz, etiket, mesaj, hedef = null;
  if (bugun < bas)       { faz = "oncesi"; etiket = "DÖNEM BAŞLIYOR"; hedef = bas; mesaj = `Derslere ${tvGunAdi(tvFark(bugun, bas))}`; }
  else if (bugun < vB)   { faz = "ders";   etiket = "DERS DÖNEMİ";    hedef = vB;  mesaj = `Vize haftasına ${tvGunAdi(tvFark(bugun, vB))}`; }
  else if (bugun <= vS)  { faz = "vize";   etiket = "VİZE HAFTASI";   hedef = vS;  mesaj = `Son gün ${tvKisa(vS)} · ${tvGunAdi(tvFark(bugun, vS))} kaldı`; }
  else if (bugun < fB)   { faz = "ders2";  etiket = "FİNAL ÖNCESİ";   hedef = fB;  mesaj = `Finallere ${tvGunAdi(tvFark(bugun, fB))}`; }
  else if (bugun <= fS)  { faz = "final";  etiket = "FİNAL DÖNEMİ";   hedef = fS;  mesaj = `Son gün ${tvKisa(fS)} · ${tvGunAdi(tvFark(bugun, fS))} kaldı`; }
  else                   { faz = "bitti";  etiket = "DÖNEM BİTTİ";    mesaj = `${TAKVIM.ad} tamamlandı`; }

  /* Kaçıncı ders haftası (yalnız dönem içindeyken anlamlı) */
  const hafta = bugun >= bas ? Math.floor(tvFark(bas, bugun) / 7) + 1 : 0;
  /* Çubuk için toplam aralık: başlangıç → final bitişi */
  const yuzde = t => Math.max(0, Math.min(100, tvFark(bas, t) / tvFark(bas, fS) * 100));

  return { faz, etiket, mesaj, hedef, hafta, bas, vB, vS, fB, fS, yuzde,
           icinde: bugun >= bas && bugun <= fS, bugun };
}

function renderTakvim() {
  const box = $("#homeTakvim");
  if (!box) return;
  const t = takvimDurum();
  if (!t) { box.hidden = true; return; }

  const seg = (a, b, cls) =>
    `<div class="tv-seg ${cls}" style="left:${t.yuzde(a)}%;width:${Math.max(t.yuzde(b) - t.yuzde(a), 1.2)}%"></div>`;

  box.hidden = false;
  box.innerHTML = `
    <div class="tv-card tv-${t.faz}">
      <div class="tv-head">
        <div class="tv-now">
          <span class="tv-etiket">${t.etiket}</span>
          <span class="tv-mesaj">${t.mesaj}</span>
        </div>
        <span class="tv-donem">${esc(TAKVIM.ad)}${t.icinde && t.faz !== "final" ? ` · ${t.hafta}. hafta` : ""}</span>
      </div>

      <div class="tv-bar" role="img"
           aria-label="Dönem çizelgesi: ${tvKisa(t.bas)} başlangıç, ${tvAralik(t.vB, t.vS)} vize, ${tvAralik(t.fB, t.fS)} final">
        ${t.icinde ? `<div class="tv-gecen" style="width:${t.yuzde(t.bugun)}%"></div>` : ""}
        ${seg(t.vB, t.vS, "tv-seg-vize")}
        ${seg(t.fB, t.fS, "tv-seg-final")}
        ${t.icinde ? `<div class="tv-imlec" style="left:${t.yuzde(t.bugun)}%"></div>` : ""}
      </div>

      <div class="tv-kilo">
        <span class="tv-kilo-it"><b>Başlangıç</b>${tvKisa(t.bas)}</span>
        <span class="tv-kilo-it"><b>Vize</b>${tvAralik(t.vB, t.vS)}</span>
        <span class="tv-kilo-it"><b>Final</b>${tvAralik(t.fB, t.fS)}</span>
      </div>
    </div>`;
}

/* ---------- Genel durum + "kaldığın yer" ---------- */
function dersSirasi() {
  return (typeof DERS_SIRASI !== "undefined") ? DERS_SIRASI : Object.keys(DERSLER || {});
}

function renderOzet() {
  const box = $("#homeOzet");
  if (!box) return;
  let tKonu = 0, tDone = 0, tForm = 0, tBil = 0, tSoru = 0, tCoz = 0, tTakil = 0;
  dersSirasi().forEach(kod => {
    const d = DERSLER[kod]; if (!d) return;
    const k = (d.konular || []).length;
    tKonu += k; tDone += getProgress(kod).filter(i => i < k).length;
    tForm += (d.formuller || []).length;
    tBil  += getFlashBilinen(kod).length;
    tSoru += (d.sorular || []).length;
    const sd = Object.values(getSoruDurum(kod));
    tCoz   += sd.filter(v => v === "coz").length;
    tTakil += sd.filter(v => v === "takil").length;
  });
  const pct = tKonu ? Math.round(tDone / tKonu * 100) : 0;

  /* Kaldığın yer: en son açılan dersteki ilk bitmemiş konu */
  const sonKod = localStorage.getItem("dd-son-ders");
  const son = sonKod && DERSLER[sonKod] ? DERSLER[sonKod] : null;
  let devam = "";
  if (son) {
    const done = getProgress(sonKod);
    const nx = (son.konular || []).findIndex((_, i) => !done.includes(i));
    devam = `
      <a class="ozet-devam" style="--card-color:${son.renk}"
         href="course.html?ders=${sonKod}${nx >= 0 ? "&git=konu-" + nx : ""}">
        <span class="ozet-devam-lbl">${nx >= 0 ? "KALDIĞIN YER" : "TAMAMLANDI"}</span>
        <span class="ozet-devam-ad">${esc(nx >= 0 ? son.konular[nx].baslik : son.ad)}</span>
        <span class="ozet-devam-ders">${sonKod} · ${esc(son.ad)}</span>
        <span class="ozet-devam-git">${nx >= 0 ? "Devam et →" : "Derse git →"}</span>
      </a>`;
  }

  box.innerHTML = `
    <div class="ozet-stats">
      <div class="ozet-stat">
        <span class="ozet-num">${tDone}<span class="ozet-tot">/${tKonu}</span></span>
        <span class="ozet-lbl">konu tamamlandı</span>
        <div class="ozet-bar"><div class="ozet-bar-fill" style="width:${pct}%"></div></div>
      </div>
      <div class="ozet-stat">
        <span class="ozet-num">${tBil}<span class="ozet-tot">/${tForm}</span></span>
        <span class="ozet-lbl">formül biliniyor</span>
        <div class="ozet-bar"><div class="ozet-bar-fill" style="width:${tForm ? tBil/tForm*100 : 0}%"></div></div>
      </div>
      <div class="ozet-stat">
        <span class="ozet-num">${tCoz}<span class="ozet-tot">/${tSoru}</span></span>
        <span class="ozet-lbl">soru çözüldü${tTakil ? ` · ${tTakil} takılınan` : ""}</span>
        <div class="ozet-bar"><div class="ozet-bar-fill" style="width:${tSoru ? tCoz/tSoru*100 : 0}%"></div></div>
      </div>
    </div>
    ${devam}`;
}

/* ============================================================
   ARAMA — tüm derslerdeki konu, formül ve sorularda
   ============================================================ */
let _aramaIndex = null;
function aramaIndex() {
  if (_aramaIndex) return _aramaIndex;
  const idx = [];
  dersSirasi().forEach(kod => {
    const d = DERSLER[kod]; if (!d) return;
    (d.konular || []).forEach((k, i) => idx.push({
      kod, tur: "konu", turAd: "KONU", renk: d.renk,
      ad: k.baslik, ek: duzMetin(k.icerik, 300), hedef: `konu-${i}`
    }));
    (d.formuller || []).forEach((x, i) => idx.push({
      kod, tur: "formul", turAd: "FORMÜL", renk: d.renk,
      ad: x.ad, ek: duzMetin(x.aciklama || "", 160), hedef: `formul-${i}`
    }));
    (d.sorular || []).forEach((x, i) => idx.push({
      kod, tur: "soru", turAd: (x.tip || "vize").toUpperCase(), renk: d.renk,
      ad: duzMetin(x.soru, 90), ek: duzMetin(x.soru, 300), hedef: `soru-${i}`
    }));
  });
  return (_aramaIndex = idx.map(o => ({ ...o, _n: norm(o.ad + " " + o.ek + " " + o.kod) })));
}

function aramaYap(q) {
  const kutu = $("#searchResults");
  if (!kutu) return;
  const t = norm(q).trim();
  if (t.length < 2) { kutu.innerHTML = ""; kutu.classList.remove("open"); return; }
  const kelimeler = t.split(/\s+/);
  const sonuc = aramaIndex()
    .filter(o => kelimeler.every(k => o._n.includes(k)))
    /* Başlıkta geçenler önce gelsin */
    .sort((a, b) => norm(b.ad).includes(kelimeler[0]) - norm(a.ad).includes(kelimeler[0]))
    .slice(0, 25);

  kutu.classList.add("open");
  kutu.innerHTML = sonuc.length ? sonuc.map(o => `
    <a class="sr-item" style="--card-color:${o.renk}" href="course.html?ders=${o.kod}&git=${o.hedef}">
      <span class="sr-tur">${o.turAd}</span>
      <span class="sr-body">
        <span class="sr-ad">${esc(o.ad)}</span>
        <span class="sr-ders">${o.kod} · ${esc(DERSLER[o.kod].ad)}</span>
      </span>
    </a>`).join("")
    : `<p class="sr-bos">"${esc(q)}" için sonuç yok.</p>`;
}

function bindArama() {
  const inp = $("#searchInput");
  if (!inp) return;
  let t = null;
  inp.addEventListener("input", () => {
    clearTimeout(t);
    t = setTimeout(() => aramaYap(inp.value), 120);
  });
  inp.addEventListener("keydown", e => {
    if (e.key === "Escape") { inp.value = ""; aramaYap(""); inp.blur(); }
    if (e.key === "Enter") {
      const ilk = document.querySelector(".sr-item");
      if (ilk) location.href = ilk.href;
    }
  });
  /* Dışarı tıklayınca sonuçları kapat */
  document.addEventListener("click", e => {
    if (!e.target.closest(".search-box")) $("#searchResults")?.classList.remove("open");
  });
  /* "/" ile aramaya odaklan */
  document.addEventListener("keydown", e => {
    if (e.key === "/" && document.activeElement !== inp && !FLASH.acik) {
      e.preventDefault(); inp.focus();
    }
  });
}

function renderQuickLinks() {
  const box = $("#quickLinks");
  if (!box || typeof HIZLI_LINKLER === "undefined") return;
  box.innerHTML = HIZLI_LINKLER.map(l => `
    <a class="ql" href="${esc(l.url)}" target="_blank" rel="noopener" title="${esc(l.aciklama)}">
      <span class="ql-ico">${l.ikon}</span>
      <span class="ql-body">
        <span class="ql-name">${esc(l.ad)}</span>
        <span class="ql-desc">${esc(l.aciklama)}</span>
      </span>
    </a>`).join("");
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
      <p class="ozet">“${esc(kod || "—")}” kodu <code>data/</code> klasöründe tanımlı değil.</p>
      <p style="margin-top:16px"><a class="back-link" href="index.html">← Ana sayfaya dön</a></p></div>`;
    return;
  }
  document.title = `${kod} · ${d.ad} — Ders Defteri`;

  root.innerHTML = `
    ${headBlock(kod, d)}
    ${programBlock(kod, d)}
    ${sectionNav(d)}
    ${konularBlock(kod, d)}
    ${formullerBlock(kod, d)}
    ${medyaBlock(kod, d)}
    ${dokumanBlock(kod, d)}
    ${videoBlock(d)}
    ${linklerBlock(d)}
    ${sorularBlock(kod, d)}
  `;

  bindAccordion();
  bindQuestionFilter();
  bindFlashcards();
  updateCourseProgress(kod);
  updateSoruOzet(kod);
  renderMath();
  loadUploads(kod);   // IndexedDB'den foto + doküman çek

  localStorage.setItem("dd-son-ders", kod);   // ana sayfadaki "kaldığın yer" için
  gotoHedef();                                // ?git=konu-3 gibi doğrudan bağlantılar
}

/* Aramadan / "kaldığın yer" bağlantısından gelen hedefi aç ve vurgula */
function gotoHedef() {
  const h = new URLSearchParams(location.search).get("git");
  if (!h) return;
  const el = document.getElementById(h);
  if (!el) return;
  el.classList.add("hedef-vurgu");
  /* Önce aç, SONRA kaydır: açılan panel ve MathJax yerleşimi
     kaydırma sırasında sayfa yüksekliğini değiştirip hedefi kaçırıyor. */
  const head = el.querySelector(".acc-head");
  if (head && !el.classList.contains("open")) head.click();
  const kaydir = () => el.scrollIntoView({ behavior: "smooth", block: "center" });
  setTimeout(kaydir, 350);    // akordeon açılma animasyonu bitince
  setTimeout(kaydir, 900);    // MathJax yerleşimi oturunca son düzeltme
  setTimeout(() => el.classList.remove("hedef-vurgu"), 3000);
}

/* ----- Başlık ----- */
function headBlock(kod, d) {
  /* Uzun ders özeti ilk ekranı dolduruyordu; iki satırda kırpılıp
     "devamı" ile açılıyor. */
  return `<header class="course-head" style="--accent:${d.renk}">
    <span class="code">${kod} · ${esc(d.donem)}</span>
    <h1>${esc(d.ad)}</h1>
    <p class="ozet" id="dersOzet">${esc(d.ozet)}</p>
    <button class="ozet-ac" type="button" id="ozetAc"
      onclick="ozetToggle(this)">kapsamın tamamını gör</button>
    <div class="prog-bar"><div class="prog-fill" id="progFill"></div></div>
    <p class="prog-label" id="progLabel"></p>
    ${ilerlemeUcluBlock(kod, d)}
  </header>`;
}

function ozetToggle(btn) {
  const p = document.getElementById("dersOzet");
  if (!p) return;
  const acik = p.classList.toggle("acik");
  btn.textContent = acik ? "özeti kısalt" : "kapsamın tamamını gör";
}

/* Ders başında tek bir konu çubuğu vardı; formül ve soru çalışması
   hiç görünmüyordu — öğrenci "bu derste ne kadar hazırım" sorusunun
   cevabını tek bakışta göremiyordu. */
function ilerlemeUcluBlock(kod, d) {
  const kutu = (id, ad, link) =>
    `<a class="ilr" href="#${link}"><span class="ilr-deger" id="${id}">–</span>
       <span class="ilr-ad">${ad}</span></a>`;
  return `<div class="ilr-satir">
    ${kutu("ilrKonu",   "konu",   "sec-konular")}
    ${kutu("ilrFormul", "formül", "sec-formuller")}
    ${kutu("ilrSoru",   "soru",   "sec-sorular")}
    <span class="ilr-not" id="notSayac">henüz not yok</span>
  </div>`;
}

/* ============================================================
   ÇALIŞMA PROGRAMI — takvimden + konu listesinden otomatik üretilir
   Elle plan girilmez: ders dosyasındaki konular değişince program da değişir.
   Kurgu: dönem başı → vize (ilk yarı konular), vize sonrası → final (ikinci yarı);
   her iki bloğun son haftası sınav tekrarına ayrılır.
   ============================================================ */

/* Bir diziyi k parçaya olabildiğince eşit böler (k > uzunluk ise boş parça olur) */
function esitBol(arr, k) {
  const out = Array.from({ length: k }, () => []);
  if (k <= 0) return out;
  const tam = Math.floor(arr.length / k), fazla = arr.length % k;
  let i = 0;
  for (let w = 0; w < k; w++) {
    const adet = tam + (w < fazla ? 1 : 0);
    out[w] = arr.slice(i, i + adet);
    i += adet;
  }
  return out;
}

/* [bas, bit) aralığını 7 günlük dilimlere böler; son dilim bit gününde kapanır */
function haftalar(bas, bit) {
  const out = [];
  for (let g = new Date(bas); g < bit; g.setDate(g.getDate() + 7)) {
    const son = new Date(g); son.setDate(son.getDate() + 6);
    out.push({ bas: new Date(g), bit: son > bit ? new Date(bit.getTime() - GUN_MS) : son });
  }
  return out;
}

function dersProgrami(d) {
  const t = takvimDurum();
  const konular = (d && d.konular) || [];
  if (!t || !konular.length) return null;

  const idx = konular.map((k, i) => ({ i, baslik: k.baslik }));
  const yarim = Math.ceil(idx.length / 2);

  const h1 = haftalar(t.bas, t.vB);                                    // dönem başı → vize
  const h2 = haftalar(new Date(t.vS.getTime() + GUN_MS), t.fB);        // vize sonrası → final

  /* Her bloğun son haftası tekrar haftası; blok tek haftalıksa tekrar ayrılmaz */
  const ders1 = Math.max(h1.length - 1, 1), ders2 = Math.max(h2.length - 1, 1);
  const pay1 = esitBol(idx.slice(0, yarim), ders1);
  const pay2 = esitBol(idx.slice(yarim),    ders2);

  const satirlar = [];
  let no = 0;
  const ekle = (h, konu, tur, ad) => satirlar.push({
    no: tur === "ders" ? ++no : null, bas: h.bas, bit: h.bit, konular: konu || [], tur, ad
  });

  h1.forEach((h, w) => w < ders1 ? ekle(h, pay1[w], "ders") : ekle(h, [], "tekrar", "Vize tekrarı"));
  ekle({ bas: t.vB, bit: t.vS }, [], "sinav", "VİZE HAFTASI");
  h2.forEach((h, w) => w < ders2 ? ekle(h, pay2[w], "ders") : ekle(h, [], "tekrar", "Final tekrarı"));
  ekle({ bas: t.fB, bit: t.fS }, [], "sinav", "FİNAL");

  return { satirlar, bugun: t.bugun, vizeKonu: yarim, finalKonu: idx.length - yarim };
}

/* Tüm program yerine yalnızca bugünün denk geldiği hafta gösterilir:
   uzun liste ders sayfasını gereksiz şişiriyordu. */
function programBlock(kod, d) {
  const p = dersProgrami(d);
  if (!p) return "";
  const done = getProgress(kod);

  /* Bugünün satırı; dönem başlamadıysa ilk hafta "yaklaşan" olarak gösterilir */
  let r = p.satirlar.find(x => p.bugun >= x.bas && p.bugun <= x.bit);
  const yaklasan = !r && p.bugun < p.satirlar[0].bas;
  if (yaklasan) r = p.satirlar[0];
  if (!r) return "";     // dönem bitti

  const etiket = yaklasan ? `${r.no}. HAFTA · YAKLAŞAN`
    : r.tur === "sinav" ? r.ad
    : r.tur === "tekrar" ? r.ad.toUpperCase()
    : "BU HAFTA";
  const alt = r.tur === "ders" ? `${r.no}. hafta · ${tvAralik(r.bas, r.bit)}` : tvAralik(r.bas, r.bit);

  const icerik = r.konular.length
    ? r.konular.map(k => `<a class="bh-konu${done.includes(k.i) ? " ok" : ""}"
          href="course.html?ders=${kod}&git=konu-${k.i}">${esc(k.baslik)}</a>`).join("")
    : `<span class="bh-bos">${r.tur === "sinav" ? "Sınav dönemi"
        : r.tur === "tekrar" ? "Formül turu + çözülmemiş sorular" : "Tekrar ve soru çözümü"}</span>`;

  return `
  <div class="bu-hafta bh-${r.tur}">
    <div class="bh-sol"><span class="bh-etiket">${etiket}</span><span class="bh-tarih">${alt}</span></div>
    <div class="bh-konular">${icerik}</div>
  </div>`;
}

/* ----- Bölüm içi hızlı gezinme ----- */
function sectionNav(d) {
  const items = [
    ["sec-konular",  "Konular"],
    ["sec-formuller","Formüller"],
    ["sec-medya",    "Medya"],
    ["sec-dokuman",  "Dökümanlar"],
    ["sec-video",    "Videolar"],
    ["sec-linkler",  "Kaynaklar"],
    ["sec-sorular",  "Sorular"]
  ];
  return `<nav class="sec-nav" aria-label="Bölümler">
    ${items.map(([id, ad]) => `<a href="#${id}">${ad}</a>`).join("")}
  </nav>`;
}

/* ----- 01 Konu Anlatımı (akordeon + tamamlandı işareti) ----- */
function konularBlock(kod, d) {
  const done = getProgress(kod);
  const items = (d.konular || []).map((k, i) => `
    <div class="topic-item ${done.includes(i) ? "done" : ""}" id="konu-${i}">
      <div class="topic-head">
        <button class="topic-check" type="button" title="Tamamlandı olarak işaretle"
          onclick="toggleTopicDone('${kod}',${i},this)" aria-label="Konuyu tamamlandı işaretle">✓</button>
        <button class="topic-toggle acc-head" type="button">
          <span class="topic-title">${esc(k.baslik)}</span>
          <span class="chev">▾</span>
        </button>
      </div>
      <div class="acc-body"><div class="inner topic-content">
        ${k.icerik}
        ${notBlock(kod, i)}
      </div></div>
    </div>`).join("");
  return `<section class="section" id="sec-konular"><h2><span class="idx">01</span> Konu Anlatımı</h2>
    <p class="section-hint">Konuya tıklayınca içerik açılır · soldaki ✓ ile çalıştığın konuyu işaretle ·
       her konunun altına kendi notunu yazabilirsin</p>
    ${items || emptyMsg("Henüz konu eklenmemiş.")}</section>`;
}

/* ============================================================
   KONU NOTLARI
   Öğrencinin kendi cümlesiyle yazdığı not, konuyu anlatan metinden
   daha kalıcı oluyor; ayrıca "burayı anlamadım" işareti sınav öncesi
   nereye döneceğini söylüyor. Notlar ders bazlı tek bir localStorage
   kaydında ({konuIndex: metin}) tutulur — yedekleme `dd-*` anahtarlarını
   zaten topladığı için dışa aktarmaya kendiliğinden dahil oluyor.
   ============================================================ */
function getNotlar(kod) {
  try { return JSON.parse(localStorage.getItem("dd-not-" + kod)) || {}; }
  catch { return {}; }
}
function notBlock(kod, i) {
  const metin = getNotlar(kod)[i] || "";
  return `<div class="not-kutu${metin ? " dolu" : ""}" id="not-${i}">
    <label class="not-baslik" for="notta-${kod}-${i}">
      <span class="not-ikon">✎</span> Kendi notum
      <span class="not-durum" id="notdurum-${kod}-${i}">${metin ? "kaydedildi" : ""}</span>
    </label>
    <textarea id="notta-${kod}-${i}" class="not-alan" rows="2"
      placeholder="Anlamadığın yeri, hocanın vurguladığı ayrıntıyı ya da kendi özetini buraya yaz…"
      oninput="notYaz('${kod}',${i},this)">${esc(metin)}</textarea>
  </div>`;
}

function notYaz(kod, i, ta) {
  const obj = getNotlar(kod);
  const v = ta.value.trim();
  if (v) obj[i] = v; else delete obj[i];
  /* Anında oku: getNotlar debounce'lu yazımdan önce çağrılabiliyor */
  try { localStorage.setItem("dd-not-" + kod, JSON.stringify(obj)); } catch (e) {
    console.warn("not kaydedilemedi:", e);
  }
  const kutu = ta.closest(".not-kutu");
  if (kutu) kutu.classList.toggle("dolu", !!v);
  const dur = document.getElementById(`notdurum-${kod}-${i}`);
  if (dur) {
    dur.textContent = v ? "kaydedildi" : "";
    dur.classList.add("yanip");
    setTimeout(() => dur.classList.remove("yanip"), 600);
  }
  /* Textarea büyüyünce akordeon yüksekliği yetmiyordu */
  ta.style.height = "auto";
  ta.style.height = ta.scrollHeight + "px";
  const body = ta.closest(".acc-body");
  if (body) olcAkordeon(body);
  notSayacGuncelle(kod);
}

function notSayaci(kod) { return Object.keys(getNotlar(kod)).length; }
function notSayacGuncelle(kod) {
  const el = document.getElementById("notSayac");
  if (!el) return;
  const n = notSayaci(kod);
  el.textContent = n ? `${n} konuda notun var` : "henüz not yok";
}

/* ----- 02 Formül Kartları (flip + çalışma modu) ----- */
function formullerBlock(kod, d) {
  const f = d.formuller || [];
  const bilinen = getFlashBilinen(kod);
  const cards = f.map((x, i) => `
    <button class="flip ${bilinen.includes(i) ? "biliniyor" : ""}" id="formul-${i}"
            type="button" aria-label="${esc(x.ad)} — çevir">
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
  return `<section class="section" id="sec-formuller"><h2><span class="idx">02</span> Formül Kartları</h2>
    ${f.length ? `
      <div class="study-row">
        <button class="study-btn" type="button" onclick="openFlashStudy('${kod}')">
          🎴 Çalışma Modu
        </button>
        <span class="study-note" id="flashOzet">${bilinen.length}/${f.length} formül biliniyor</span>
      </div>
      <div class="cards">${cards}</div>` : emptyMsg("Henüz formül eklenmemiş.")}</section>`;
}

/* ============================================================
   FORMÜL ÇALIŞMA MODU
   Kartlar karıştırılır, tek tek sorulur; "biliyorum" dediklerin
   sonraki turlarda elenir (basit aralıklı tekrar).
   ============================================================ */
const FLASH = { kod: null, list: [], i: 0, acik: false };

function getFlashBilinen(kod) {
  const key = "dd-flash-" + kod;
  if (_pendingWrites.has(key)) return _pendingWrites.get(key);
  try { return JSON.parse(localStorage.getItem(key)) || []; }
  catch { return []; }
}
function setFlashBilinen(kod, arr) { saveDebounced("dd-flash-" + kod, arr); }

function openFlashStudy(kod, sadeceBilinmeyen = false) {
  const f = (DERSLER[kod] || {}).formuller || [];
  if (!f.length) return;
  const bilinen = getFlashBilinen(kod);
  let idx = f.map((_, i) => i);
  if (sadeceBilinmeyen) idx = idx.filter(i => !bilinen.includes(i));
  if (!idx.length) idx = f.map((_, i) => i);          // hepsi biliniyorsa baştan
  for (let i = idx.length - 1; i > 0; i--) {          // Fisher-Yates karıştırma
    const j = Math.floor(Math.random() * (i + 1));
    [idx[i], idx[j]] = [idx[j], idx[i]];
  }
  FLASH.kod = kod; FLASH.list = idx; FLASH.i = 0; FLASH.acik = true;
  ensureOverlay().classList.add("open");
  document.body.style.overflow = "hidden";
  paintFlash();
}

function paintFlash() {
  const ov = $("#ddOverlay");
  if (!ov || !FLASH.acik) return;
  const kod = FLASH.kod, f = DERSLER[kod].formuller || [];
  const bilinen = getFlashBilinen(kod);

  /* Tur bitti ekranı */
  if (FLASH.i >= FLASH.list.length) {
    const kalan = FLASH.list.filter(i => !bilinen.includes(i)).length;
    const bildi = FLASH.list.length - kalan;
    ov.innerHTML = `<div class="flash-modal">
      <div class="flash-head">
        <span class="flash-title">${kod} · TUR BİTTİ</span>
        <button class="ov-close" onclick="closeFlash()" aria-label="Kapat">×</button>
      </div>
      <div class="flash-done">
        <p class="flash-score">${bildi}<span>/${FLASH.list.length}</span></p>
        <p class="flash-done-txt">${kalan
          ? `${kalan} formülü tekrar etmen gerekiyor.`
          : "Bu turdaki tüm formülleri bildin. 👏"}</p>
        <div class="flash-actions">
          ${kalan ? `<button class="flash-ok" onclick="openFlashStudy('${kod}', true)">↻ Bilmediklerimi çalış</button>` : ""}
          <button class="flash-no" onclick="openFlashStudy('${kod}')">🎴 Baştan karıştır</button>
        </div>
      </div>
    </div>`;
    return;
  }

  const gi = FLASH.list[FLASH.i], x = f[gi];
  const pct = Math.round(FLASH.i / FLASH.list.length * 100);
  ov.innerHTML = `<div class="flash-modal">
    <div class="flash-head">
      <span class="flash-title">${kod} · FORMÜL ÇALIŞMA</span>
      <span class="flash-count">${FLASH.i + 1} / ${FLASH.list.length}</span>
      <button class="ov-close" onclick="closeFlash()" aria-label="Kapat">×</button>
    </div>
    <div class="flash-bar"><div class="flash-bar-fill" style="width:${pct}%"></div></div>
    <div class="flash-card">
      <span class="flip-tag">FORMÜL</span>
      <strong class="flash-ad">${esc(x.ad)}</strong>
      <div class="flash-cevap" id="flashCevap" hidden>
        <div class="flip-formula">${x.formul}</div>
        ${x.aciklama ? `<p class="flip-desc">${esc(x.aciklama)}</p>` : ""}
      </div>
      <button class="flash-show" id="flashShow" onclick="flashReveal()">Formülü göster</button>
    </div>
    <div class="flash-actions" id="flashActions" hidden>
      <button class="flash-no" onclick="flashCevapla(false)">↻ Tekrar et</button>
      <button class="flash-ok" onclick="flashCevapla(true)">✓ Biliyorum</button>
    </div>
    <p class="flash-foot">
      ${bilinen.length}/${f.length} biliniyor ·
      <button class="flash-reset" onclick="flashSifirla()">sıfırla</button>
      <span class="flash-keys">boşluk: göster · ← tekrar · → biliyorum</span>
    </p>
  </div>`;
}

function flashReveal() {
  const c = $("#flashCevap"), s = $("#flashShow"), a = $("#flashActions");
  if (!c || c.hidden === false) return;
  c.hidden = false; renderMath(c);
  if (s) s.hidden = true;
  if (a) a.hidden = false;
}
function flashCevapla(biliyor) {
  if ($("#flashCevap") && $("#flashCevap").hidden) return;   // önce göster
  const kod = FLASH.kod, gi = FLASH.list[FLASH.i];
  let b = getFlashBilinen(kod);
  if (biliyor) { if (!b.includes(gi)) b.push(gi); }
  else b = b.filter(i => i !== gi);
  setFlashBilinen(kod, b);
  updateCourseProgress(kod);
  FLASH.i++;
  paintFlash();
}
function flashSifirla() {
  if (!confirm("Bu dersin formül çalışma ilerlemesi sıfırlansın mı?")) return;
  setFlashBilinen(FLASH.kod, []); flushWrites(); paintFlash();
}
function closeFlash() {
  const kod = FLASH.kod;
  FLASH.acik = false; flushWrites(); closeOverlay();
  /* Sayfadaki kart duvarını ve sayacı tazele */
  if (kod && DERSLER[kod]) {
    const bilinen = getFlashBilinen(kod), f = DERSLER[kod].formuller || [];
    document.querySelectorAll("#sec-formuller .flip").forEach((el, i) =>
      el.classList.toggle("biliniyor", bilinen.includes(i)));
    const oz = $("#flashOzet");
    if (oz) oz.textContent = `${bilinen.length}/${f.length} formül biliniyor`;
  }
}

/* Çalışma modunda klavye kısayolları */
document.addEventListener("keydown", e => {
  if (!FLASH.acik) return;
  if (e.key === " " || e.key === "Enter") { e.preventDefault(); flashReveal(); }
  else if (e.key === "ArrowRight") { e.preventDefault(); flashCevapla(true); }
  else if (e.key === "ArrowLeft")  { e.preventDefault(); flashCevapla(false); }
});

/* ----- 03 Medya ve Görseller (yüklemeli) ----- */
function medyaBlock(kod, d) {
  return `<section class="section" id="sec-medya"><h2><span class="idx">03</span> Medya ve Görseller</h2>
    <div class="upload-row">
      <label class="btn-upload">📷 Fotoğraf Ekle
        <input type="file" accept="image/*" multiple class="file-hidden" onchange="handleUpload(event,'foto')">
      </label>
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
  return `<section class="section" id="sec-dokuman"><h2><span class="idx">04</span> Dökümanlar</h2>
    <div class="upload-row">
      <label class="btn-upload">📄 Doküman Ekle
        <input type="file" accept=".pdf,image/*" multiple class="file-hidden" onchange="handleUpload(event,'dok')">
      </label>
      <span class="upload-note">Ders notu PDF'lerini ekle</span>
    </div>
    <div class="docs" id="dokList">${sabit}</div>
    <div class="docs" id="dokUploaded"><p class="empty">Yükleniyor…</p></div>
  </section>`;
}

/* ----- 05 Video (tek video veya playlist) ----- */
function videoBlock(d) {
  const v = d.videolar || [];
  const items = v.map(x => {
    const src = x.playlist
      ? `https://www.youtube-nocookie.com/embed/videoseries?list=${esc(x.playlist)}`
      : `https://www.youtube-nocookie.com/embed/${esc(x.youtube)}`;
    return `
    <figure class="video"><div class="frame">
      <iframe src="${src}"
        title="${esc(x.baslik)}" loading="lazy"
        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen></iframe>
    </div><figcaption>${x.playlist ? `<span class="pl-tag">PLAYLIST</span> ` : ""}${esc(x.baslik)}</figcaption></figure>`;
  }).join("");
  return `<section class="section" id="sec-video"><h2><span class="idx">05</span> Video Kaynakları</h2>
    ${v.length ? `<div class="videos">${items}</div>` : emptyMsg("Henüz video eklenmemiş.")}</section>`;
}

/* ----- 06 Faydalı Kaynaklar (web kısayolları) ----- */
function linklerBlock(d) {
  const l = d.linkler || [];
  const items = l.map(x => `
    <a class="ql" href="${esc(x.url)}" target="_blank" rel="noopener">
      <span class="ql-ico">🔗</span>
      <span class="ql-body">
        <span class="ql-name">${esc(x.ad)}</span>
        <span class="ql-desc">${esc(x.aciklama || "")}</span>
      </span>
    </a>`).join("");
  return `<section class="section" id="sec-linkler"><h2><span class="idx">06</span> Faydalı Kaynaklar</h2>
    ${l.length ? `<div class="ql-grid">${items}</div>` : emptyMsg("Henüz kaynak eklenmemiş.")}</section>`;
}

/* ----- 07 Soru Havuzu -----
   Çözüm soruyla BİRLİKTE açılmaz: önce dene, sonra "Çözümü göster".
   Çözüm görüldükten sonra kendini değerlendir (çözdüm / takıldım). */
function sorularBlock(kod, d) {
  const q = d.sorular || [];
  const durum = getSoruDurum(kod);
  const items = q.map((x, i) => {
    const dr = durum[i] || "";
    return `
    <div class="acc-item q-item ${dr ? "q-" + dr : ""}" id="soru-${i}"
         data-tip="${x.tip || "vize"}" data-durum="${dr}">
      <button class="acc-head" type="button">
        <span class="tag ${x.tip === "final" ? "final" : ""}">${x.tip || "vize"}</span>
        <span class="q-num">${i + 1}</span>
        <span class="q-prev">${esc(duzMetin(x.soru, 84))}</span>
        <span class="q-durum" title="Durum"></span>
        <span class="chev">▾</span>
      </button>
      <div class="acc-body"><div class="inner">
        <div class="q-soru">${x.soru}</div>
        <button class="q-reveal" type="button" onclick="revealCozum(this)">
          Çözümü göster <span class="q-reveal-hint">önce kendin dene</span>
        </button>
        <div class="q-cozum" hidden>
          <div class="cozum-label">Çözüm</div>
          ${x.cozum}
          <div class="q-mark">
            <span class="q-mark-lbl">Kendini değerlendir:</span>
            <button type="button" class="q-mark-ok"
              onclick="setSoruDurum('${kod}',${i},'coz',this)">✓ Çözdüm</button>
            <button type="button" class="q-mark-no"
              onclick="setSoruDurum('${kod}',${i},'takil',this)">↻ Takıldım</button>
          </div>
        </div>
      </div></div>
    </div>`;
  }).join("");
  return `<section class="section" id="sec-sorular"><h2><span class="idx">07</span> Soru Havuzu</h2>
    ${q.length ? `
      <p class="section-hint" id="qOzet"></p>
      <div class="q-filter">
        <button data-f="all" class="active">Tümü</button>
        <button data-f="vize">Vize</button>
        <button data-f="final">Final</button>
        <button data-f="takil" class="q-f-takil">↻ Takıldıklarım</button>
        <button data-f="yeni">Denemediklerim</button>
      </div><div class="accordion">${items}</div>
    ` : emptyMsg("Henüz soru eklenmemiş.")}</section>`;
}

/* Soru durumu: { indeks: 'coz' | 'takil' } */
function getSoruDurum(kod) {
  const key = "dd-soru-" + kod;
  if (_pendingWrites.has(key)) return _pendingWrites.get(key);
  try { return JSON.parse(localStorage.getItem(key)) || {}; }
  catch { return {}; }
}
function setSoruDurum(kod, i, durum, btn) {
  const cur = getSoruDurum(kod);
  if (cur[i] === durum) delete cur[i]; else cur[i] = durum;
  saveDebounced("dd-soru-" + kod, cur);
  const item = btn.closest(".q-item");
  item.classList.remove("q-coz", "q-takil");
  if (cur[i]) item.classList.add("q-" + cur[i]);
  item.dataset.durum = cur[i] || "";
  updateSoruOzet(kod);
  updateCourseProgress(kod);
}
function updateSoruOzet(kod) {
  const el = $("#qOzet");
  if (!el) return;
  const toplam = (DERSLER[kod].sorular || []).length;
  const d = getSoruDurum(kod);
  const coz = Object.values(d).filter(v => v === "coz").length;
  const tak = Object.values(d).filter(v => v === "takil").length;
  el.textContent =
    `${toplam} sorudan ${coz}'i çözüldü · ${tak} takılınan · ${toplam - coz - tak} denenmedi`;
}

/* Çözümü açar, LaTeX'i işler ve akordeon yüksekliğini yeniden ölçer */
function revealCozum(btn) {
  const inner = btn.closest(".inner");
  const coz = inner.querySelector(".q-cozum");
  coz.hidden = false;
  btn.remove();
  renderMath(coz);
  olcAkordeon(inner.closest(".acc-body"));
}
function olcAkordeon(body) {
  if (!body) return;
  const item = body.parentElement;
  const uygula = () => {
    if (item && item.classList.contains("open")) body.style.maxHeight = body.scrollHeight + "px";
  };
  uygula();
  setTimeout(uygula, 500);   // MathJax yerleşimi bitince tekrar ölç
}

function emptyMsg(t) { return `<p class="empty">${t}</p>`; }

/* ============================================================
   YÜKLEME İŞLEMLERİ
   ============================================================ */
async function handleUpload(e, tip) {
  const files = [...e.target.files];
  e.target.value = "";           // aynı dosyayı tekrar seçebilmek için
  if (!files.length || !AKTIF_DERS) return;
  try {
    for (const file of files) {
      const blob = tip === "foto" ? await shrinkImage(file) : file;
      await idbAdd({ ders: AKTIF_DERS, tip, ad: file.name, mime: blob.type || file.type, blob });
    }
    loadUploads(AKTIF_DERS);
  } catch (err) {
    console.error(err);
    alert("Dosya kaydedilemedi. Tarayıcının gizli/özel sekmesindeysen normal sekmede dene. (Detay: " + err + ")");
  }
}

async function loadUploads(kod) {
  try {
    const all = await idbByDers(kod);
    renderFotoPreview(kod, all.filter(x => x.tip === "foto"));
    renderDokUploaded(all.filter(x => x.tip === "dok"));
  } catch (err) {
    console.error(err);
    const grid = $("#fotoPreview"), box = $("#dokUploaded");
    if (grid) grid.innerHTML = `<p class="empty">Depolama açılamadı (gizli sekme olabilir). Normal sekmede dene.</p>`;
    if (box) box.innerHTML = "";
  }
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
  FLASH.acik = false;
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
      const item = btn.closest(".acc-item, .topic-item"), body = item.querySelector(".acc-body");
      const open = item.classList.toggle("open");
      body.style.maxHeight = open ? body.scrollHeight + "px" : null;
      if (open) {
        renderMath(body);   // içerik açılınca LaTeX'i işle
        // MathJax yüksekliği değiştirebilir → yeniden ölç
        setTimeout(() => {
          if (item.classList.contains("open")) body.style.maxHeight = body.scrollHeight + "px";
        }, 500);
      }
    }));
}
function bindQuestionFilter() {
  const btns = document.querySelectorAll(".q-filter button");
  btns.forEach(b => b.addEventListener("click", () => {
    btns.forEach(x => x.classList.remove("active"));
    b.classList.add("active");
    const f = b.dataset.f;
    document.querySelectorAll("#sec-sorular .q-item").forEach(it => {
      const gorunur =
        f === "all"   ? true :
        f === "takil" ? it.dataset.durum === "takil" :
        f === "yeni"  ? !it.dataset.durum :
                        it.dataset.tip === f;
      it.style.display = gorunur ? "" : "none";
    });
  }));
}

/* ============================================================
   POMODORO ZAMANLAYICI (25 dk odak / 5 dk mola)
   ============================================================ */
const POMO = { total: 25 * 60, left: 25 * 60, mode: "odak", timer: null, running: false };

function pomoTogglePanel() {
  const p = $("#pomoPanel");
  if (p) p.classList.toggle("open");
}
function pomoSet(mins, mode) {
  clearInterval(POMO.timer);
  POMO.running = false; POMO.mode = mode;
  POMO.total = POMO.left = mins * 60;
  pomoMiniGoster(false);
  pomoPaint();
}
function pomoStartPause() {
  if (POMO.running) {
    clearInterval(POMO.timer); POMO.running = false;
  } else {
    POMO.running = true;
    pomoMiniGoster(true);       // çalışırken panel küçülüp sürüklenebilir kutuya döner
    POMO.timer = setInterval(() => {
      POMO.left--;
      if (POMO.left <= 0) {
        clearInterval(POMO.timer); POMO.running = false; POMO.left = 0;
        pomoPaint();
        // Odak bitti → molayı öner; mola bitti → odağa dön
        if (POMO.mode === "odak") pomoSet(5, "mola"); else pomoSet(25, "odak");
        document.title = "⏰ Süre doldu! — Ders Defteri";
        return;
      }
      pomoPaint();
    }, 1000);
  }
  pomoPaint();
}
function pomoReset() { pomoSet(POMO.mode === "odak" ? 25 : 5, POMO.mode); }
function pomoPaint() {
  const m = String(Math.floor(POMO.left / 60)).padStart(2, "0");
  const s = String(POMO.left % 60).padStart(2, "0");
  const t = $("#pomoTime"), st = $("#pomoStart"), md = $("#pomoMode"), ring = $("#pomoRing");
  if (t) t.textContent = `${m}:${s}`;
  if (st) st.textContent = POMO.running ? "⏸ Duraklat" : "▶ Başlat";
  if (md) md.textContent = POMO.mode === "odak" ? "ODAK" : "MOLA";
  if (ring) ring.style.setProperty("--pct", (1 - POMO.left / POMO.total) * 100 + "%");
  if (POMO.running) document.title = `${m}:${s} · ${POMO.mode === "odak" ? "Odak" : "Mola"} — Ders Defteri`;

  const mt = $("#pomoMiniTime"), mm = $("#pomoMiniMode"), mb = $("#pomoMiniBtn");
  if (mt) mt.textContent = `${m}:${s}`;
  if (mm) mm.textContent = POMO.mode === "odak" ? "ODAK" : "MOLA";
  if (mb) { mb.textContent = POMO.running ? "⏸" : "▶"; mb.title = POMO.running ? "Duraklat" : "Devam et"; }
  const mini = $("#pomoMini");
  if (mini) mini.classList.toggle("mola", POMO.mode === "mola");
}

/* ---------- Mini pomodoro: çalışırken küçülen, sürüklenebilir kutu ---------- */
function pomoMiniGoster(ac) {
  const mini = $("#pomoMini");
  if (!mini) return;
  mini.hidden = !ac;
  if (ac) { $("#pomoPanel")?.classList.remove("open"); pomoMiniYerlestir(); }
}
/* Kayıtlı konumu ekrana sığdırarak uygula (pencere küçülünce dışarıda kalmasın) */
function pomoMiniYerlestir(x, y) {
  const mini = $("#pomoMini");
  if (!mini || mini.hidden) return;
  if (x === undefined) {
    let kayit = null;
    try { kayit = JSON.parse(localStorage.getItem("dd-pomo-pos") || "null"); } catch {}
    const r = mini.getBoundingClientRect();
    x = kayit ? kayit.x : innerWidth - r.width - 18;
    y = kayit ? kayit.y : innerHeight - r.height - 18;
  }
  const r = mini.getBoundingClientRect();
  x = Math.max(8, Math.min(x, innerWidth  - r.width  - 8));
  y = Math.max(8, Math.min(y, innerHeight - r.height - 8));
  mini.style.left = x + "px";
  mini.style.top  = y + "px";
  mini.style.right = mini.style.bottom = "auto";   // CSS'teki sağ/alt sabitlemesini bırak
  try { localStorage.setItem("dd-pomo-pos", JSON.stringify({ x, y })); } catch {}
}
/* Panele geri dön (mini'ye tıklanınca) */
function pomoMiniAc() {
  pomoMiniGoster(false);
  $("#pomoPanel")?.classList.add("open");
}
function bindPomoMini() {
  const mini = $("#pomoMini");
  if (!mini) return;
  let sx = 0, sy = 0, ox = 0, oy = 0, tasindi = false;

  mini.addEventListener("pointerdown", e => {
    if (e.target.closest("button")) return;      // ⏸ / ✕ kendi işini yapsın
    const r = mini.getBoundingClientRect();
    sx = e.clientX; sy = e.clientY; ox = r.left; oy = r.top; tasindi = false;
    mini.setPointerCapture(e.pointerId);
    mini.classList.add("tasiniyor");
  });
  mini.addEventListener("pointermove", e => {
    if (!mini.hasPointerCapture?.(e.pointerId)) return;
    const dx = e.clientX - sx, dy = e.clientY - sy;
    if (!tasindi && Math.hypot(dx, dy) < 4) return;   // titremeyi tıklama say
    tasindi = true;
    e.preventDefault();
    pomoMiniYerlestir(ox + dx, oy + dy);
  });
  const bitir = e => {
    if (!mini.hasPointerCapture?.(e.pointerId)) return;
    mini.releasePointerCapture(e.pointerId);
    mini.classList.remove("tasiniyor");
    if (!tasindi) pomoMiniAc();                       // sürüklenmediyse: paneli aç
  };
  mini.addEventListener("pointerup", bitir);
  mini.addEventListener("pointercancel", bitir);
  addEventListener("resize", () => pomoMiniYerlestir());
}
function pomoHTML() {
  return `
  <button id="pomoBtn" class="theme-toggle" onclick="pomoTogglePanel()" title="Pomodoro zamanlayıcı" aria-label="Pomodoro">⏱</button>
  <div id="pomoPanel" class="pomo-panel">
    <div class="pomo-head"><span id="pomoMode" class="pomo-mode">ODAK</span>
      <span class="pomo-hint">25 dk çalış · 5 dk dinlen</span></div>
    <div id="pomoRing" class="pomo-ring"><span id="pomoTime">25:00</span></div>
    <div class="pomo-actions">
      <button id="pomoStart" onclick="pomoStartPause()">▶ Başlat</button>
      <button onclick="pomoReset()">↺ Sıfırla</button>
    </div>
    <div class="pomo-presets">
      <button onclick="pomoSet(25,'odak')">25 odak</button>
      <button onclick="pomoSet(50,'odak')">50 odak</button>
      <button onclick="pomoSet(5,'mola')">5 mola</button>
    </div>
  </div>`;
}
/* Mini kutu topbar'a değil gövdeye asılır: sayfa içinde serbestçe taşınabilsin */
function pomoMiniHTML() {
  return `
  <div id="pomoMini" class="pomo-mini" hidden title="Sürükleyerek taşı · tıklayınca panel açılır">
    <span class="pomo-mini-grip" aria-hidden="true">⠿</span>
    <span id="pomoMiniMode" class="pomo-mini-mode">ODAK</span>
    <span id="pomoMiniTime" class="pomo-mini-time">25:00</span>
    <button id="pomoMiniBtn" onclick="pomoStartPause()" title="Duraklat" aria-label="Duraklat">⏸</button>
    <button class="pomo-mini-x" onclick="pomoReset()" title="Bitir" aria-label="Bitir">✕</button>
  </div>`;
}
function mountPomodoro() {
  const nav = document.querySelector(".nav-actions");
  if (!nav) return;
  const holder = document.createElement("div");
  holder.className = "pomo-holder";
  holder.innerHTML = pomoHTML();
  nav.prepend(holder);
  document.body.insertAdjacentHTML("beforeend", pomoMiniHTML());
  bindPomoMini();
}

/* ============================================================
   YEDEKLEME — dışa / içe aktarma (JSON)
   iOS Safari uzun süre açılmayan sitelerin verisini silebildiği için
   kullanıcının kendi yedeğini alabilmesi şart.
   ============================================================ */
async function idbAll() {
  const db = await openDB();
  return new Promise((res, rej) => {
    const tx = db.transaction(STORE, "readonly");
    const req = tx.objectStore(STORE).getAll();
    req.onsuccess = () => res(req.result || []);
    req.onerror = () => rej(req.error);
  });
}

const blobToDataURL = blob => new Promise((res, rej) => {
  const r = new FileReader();
  r.onload = () => res(r.result);
  r.onerror = () => rej(r.error);
  r.readAsDataURL(blob);
});

async function dataURLToBlob(u) { return (await fetch(u)).blob(); }

/* Tüm dd-* localStorage anahtarları (ilerleme + tema) */
function collectLocalStorage() {
  const out = {};
  for (let i = 0; i < localStorage.length; i++) {
    const k = localStorage.key(i);
    if (k && k.startsWith("dd-")) out[k] = localStorage.getItem(k);
  }
  return out;
}

async function exportBackup(medyaDahil = true) {
  flushWrites();
  const btn = $("#bkExport");
  if (btn) { btn.disabled = true; btn.textContent = "Hazırlanıyor…"; }
  try {
    const paket = {
      uygulama: "ders-defteri",
      surum: 1,
      tarih: new Date().toISOString(),
      ayarlar: collectLocalStorage(),
      medya: []
    };
    if (medyaDahil) {
      for (const m of await idbAll()) {
        paket.medya.push({
          ders: m.ders, tip: m.tip, ad: m.ad, mime: m.mime,
          veri: await blobToDataURL(m.blob)
        });
      }
    }
    const blob = new Blob([JSON.stringify(paket)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    const g = new Date().toISOString().slice(0, 10);
    a.href = url;
    a.download = `ders-defteri-yedek-${g}${medyaDahil ? "" : "-sadece-ilerleme"}.json`;
    document.body.appendChild(a); a.click(); a.remove();
    setTimeout(() => URL.revokeObjectURL(url), 4000);
    yedekTarihiYaz();
  } catch (err) {
    console.error(err);
    alert("Yedek oluşturulamadı: " + err);
  } finally {
    if (btn) { btn.disabled = false; btn.textContent = "⬇ Yedeği indir (JSON)"; }
  }
}

async function importBackup(e) {
  const file = e.target.files && e.target.files[0];
  e.target.value = "";
  if (!file) return;
  if (!confirm("Yedek geri yüklenecek.\n\nİlerleme kayıtları yedektekiyle DEĞİŞTİRİLECEK, " +
               "yedekteki fotoğraf/dökümanlar mevcutlara EKLENECEK.\n\nDevam edilsin mi?")) return;
  try {
    const paket = JSON.parse(await file.text());
    if (paket.uygulama !== "ders-defteri") throw new Error("Bu dosya Ders Defteri yedeği değil.");

    for (const [k, v] of Object.entries(paket.ayarlar || {})) {
      if (k.startsWith("dd-")) localStorage.setItem(k, v);
    }
    let eklenen = 0;
    for (const m of paket.medya || []) {
      if (!m.veri) continue;
      await idbAdd({ ders: m.ders, tip: m.tip, ad: m.ad, mime: m.mime, blob: await dataURLToBlob(m.veri) });
      eklenen++;
    }
    alert(`Yedek geri yüklendi.\n${Object.keys(paket.ayarlar || {}).length} ayar · ${eklenen} dosya.\n\nSayfa yenileniyor.`);
    location.reload();
  } catch (err) {
    console.error(err);
    alert("Yedek geri yüklenemedi: " + err.message);
  }
}

async function bkUpdateInfo() {
  const el = $("#bkInfo");
  if (!el) return;
  let satir = [];
  try {
    const medya = await idbAll();
    satir.push(`${medya.filter(m => m.tip === "foto").length} fotoğraf · ${medya.filter(m => m.tip === "dok").length} doküman`);
  } catch { satir.push("depolama okunamadı"); }
  if (navigator.storage && navigator.storage.estimate) {
    try {
      const { usage } = await navigator.storage.estimate();
      if (usage) satir.push(`${(usage / 1048576).toFixed(1)} MB kullanılıyor`);
    } catch {}
  }
  el.textContent = satir.join(" · ");
}

function bkTogglePanel() {
  const p = $("#bkPanel");
  if (!p) return;
  p.classList.toggle("open");
  if (p.classList.contains("open")) bkUpdateInfo();
}

/* ---------- Yedek hatırlatıcısı ----------
   Veri yalnızca bu tarayıcıda; iOS uzun süre açılmayan sitelerin
   deposunu silebiliyor. Kendi notların da eklendikten sonra "yedek
   almayı unutmak" en pahalı hata: 30 gün geçince 💾 düğmesi işaretlenir. */
const YEDEK_GUN = 30;

function yedekTarihiYaz() {
  try { localStorage.setItem("dd-son-yedek", new Date().toISOString().slice(0, 10)); } catch {}
  yedekUyariGuncelle();
}
function yedekGecenGun() {
  const t = localStorage.getItem("dd-son-yedek");
  if (!t) return null;                       // hiç yedek alınmamış
  return Math.max(0, Math.round((tvBugun() - tvGun(t)) / GUN_MS));
}
function yedekUyariGuncelle() {
  const btn = $("#bkBtn"); if (!btn) return;
  const g = yedekGecenGun();
  const eski = g === null || g >= YEDEK_GUN;
  btn.classList.toggle("uyari", eski);
  btn.title = g === null ? "Yedekleme — henüz hiç yedek almadın"
            : eski ? `Yedekleme — son yedeğin ${g} gün önce`
            : `Yedekleme — son yedek ${g} gün önce`;
  const bilgi = $("#bkSon");
  if (bilgi) {
    bilgi.textContent = g === null ? "Henüz yedek almadın."
      : g === 0 ? "Son yedeğini bugün aldın."
      : `Son yedek: ${g} gün önce.`;
    bilgi.classList.toggle("uyari", eski);
  }
}

function backupHTML() {
  return `
  <button id="bkBtn" class="theme-toggle" onclick="bkTogglePanel()" title="Yedekleme" aria-label="Yedekleme">💾</button>
  <div id="bkPanel" class="bk-panel">
    <div class="bk-head">
      <span class="bk-title">YEDEKLEME</span>
      <span class="bk-hint">verilerin bu cihazda saklanır</span>
    </div>
    <p class="bk-info" id="bkInfo">…</p>
    <p class="bk-son" id="bkSon"></p>
    <button id="bkExport" class="bk-act" onclick="exportBackup(true)">⬇ Yedeği indir (JSON)</button>
    <button class="bk-act ghost" onclick="exportBackup(false)">⬇ Sadece ilerleme (küçük)</button>
    <label class="bk-act ghost bk-file">⬆ Yedekten geri yükle
      <input type="file" accept="application/json,.json" class="file-hidden" onchange="importBackup(event)">
    </label>
    <p class="bk-note">iOS, uzun süre açılmayan sitelerin verisini silebilir. Ara ara yedek al.</p>
  </div>`;
}

function mountBackup() {
  const nav = document.querySelector(".nav-actions");
  if (!nav) return;
  const holder = document.createElement("div");
  holder.className = "bk-holder";
  holder.innerHTML = backupHTML();
  nav.prepend(holder);
  yedekUyariGuncelle();
}

/* Panellerin dışına tıklanınca kapansınlar */
document.addEventListener("click", e => {
  if (!e.target.closest(".bk-holder")) $("#bkPanel")?.classList.remove("open");
  if (!e.target.closest(".pomo-holder")) $("#pomoPanel")?.classList.remove("open");
});

/* ============================================================
   SERVICE WORKER — offline çalışma
   ============================================================ */
if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("sw.js").catch(err =>
      console.warn("Service worker kaydedilemedi:", err));
  });
  // Yeni sürüm devreye girince sayfayı bir kez tazele
  // (ilk kurulumda değil — o an sayfa zaten güncel)
  let yenilendi = !navigator.serviceWorker.controller;
  navigator.serviceWorker.addEventListener("controllerchange", () => {
    if (yenilendi) { yenilendi = false; return; }
    yenilendi = true;
    location.reload();
  });
}


/* ============================================================
   KLAVYE KISAYOLLARI + YAZDIRMA
   Kısayollar vardı ama hiçbir yerde yazmıyordu; "?" ile açılan
   küçük bir liste ve topbar'daki ⌨ düğmesi bunu görünür kılıyor.
   ============================================================ */
const KISAYOLLAR = [
  ["/",     "aramaya odaklan (ana sayfa)"],
  ["?",     "bu listeyi aç / kapat"],
  ["p",     "pomodoro panelini aç / kapat"],
  ["y",     "dersi yazdır veya PDF olarak kaydet"],
  ["t",     "açık / koyu tema"],
  ["Esc",   "açık pencereyi kapat"],
  ["Boşluk","formül çalışmasında cevabı göster"],
  ["← →",   "formül çalışmasında tekrar et / biliyorum"]
];

function kisayolHTML() {
  return `<div class="overlay" id="ksOverlay" onclick="if(event.target===this)ksKapat()">
    <div class="ks-modal" role="dialog" aria-label="Klavye kısayolları">
      <div class="gm-head">
        <h3>Klavye kısayolları</h3>
        <button class="ov-close" onclick="ksKapat()" aria-label="Kapat">✕</button>
      </div>
      <div class="ks-liste">
        ${KISAYOLLAR.map(([k, a]) =>
          `<div class="ks-satir"><kbd>${esc(k)}</kbd><span>${esc(a)}</span></div>`).join("")}
      </div>
    </div>
  </div>`;
}
function ksKapat() { $("#ksOverlay")?.classList.remove("open"); }
function ksToggle(){ $("#ksOverlay")?.classList.toggle("open"); }

function mountKisayol() {
  const nav = document.querySelector(".nav-actions");
  if (!nav) return;
  nav.insertAdjacentHTML("afterbegin",
    `<button class="theme-toggle" onclick="window.print()" title="Yazdır / PDF olarak kaydet"
       aria-label="Yazdır">🖨</button>
     <button class="theme-toggle" onclick="ksToggle()" title="Klavye kısayolları (?)"
       aria-label="Klavye kısayolları">⌨</button>`);
  document.body.insertAdjacentHTML("beforeend", kisayolHTML());

  document.addEventListener("keydown", e => {
    /* Yazı yazarken kısayol tetiklenmesin */
    const el = document.activeElement;
    if (el && (el.tagName === "INPUT" || el.tagName === "TEXTAREA" || el.isContentEditable)) return;
    if (e.ctrlKey || e.metaKey || e.altKey) return;

    if (e.key === "?") { e.preventDefault(); ksToggle(); }
    else if (e.key === "Escape") ksKapat();
    else if (!FLASH.acik) {
      if (e.key === "p" || e.key === "P") { e.preventDefault(); pomoTogglePanel(); }
      else if (e.key === "t" || e.key === "T") { e.preventDefault(); toggleTheme(); }
      else if (e.key === "y" || e.key === "Y") { e.preventDefault(); window.print(); }
    }
  });
}

/* ---------- Başlat ---------- */
document.addEventListener("DOMContentLoaded", () => {
  setThemeBtnIcon();
  mountPomodoro();
  mountBackup();
  mountKisayol();
  renderHome();
  renderCourse();
  bindArama();
});
