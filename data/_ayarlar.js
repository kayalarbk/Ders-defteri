/* ============================================================
   AYARLAR — Ders sırası ve ana sayfa hızlı linkleri
   ------------------------------------------------------------
   Yeni bir ders eklerken:
     1) data/ içinde YENİKOD.js dosyası oluştur (mevcut birini kopyala).
     2) O dosyanın en üstünde  window.DERSLER["YENİKOD"] = {...}  olsun.
     3) Kodunu aşağıdaki DERS_SIRASI dizisine ekle (kart sırası buna göre).
     4) index.html ve course.html'e  <script src="data/YENİKOD.js"></script> ekle.
   ============================================================ */

/* Ana sayfadaki kart sırası */
const DERS_SIRASI = ["EE3061", "EE3012", "EE3014", "EE3016", "STAT2056", "MATH2055"];

/* Öğrencinin sık kullanacağı siteler (ana sayfa) */
const HIZLI_LINKLER = [
  { ad: "WolframAlpha",   url: "https://www.wolframalpha.com/",            ikon: "∫",  aciklama: "Sembolik hesap: integral, dönüşüm, denklem" },
  { ad: "Symbolab",       url: "https://www.symbolab.com/",                ikon: "𝑓",  aciklama: "Adım adım çözümlü hesap makinesi" },
  { ad: "Desmos",         url: "https://www.desmos.com/calculator",        ikon: "📈", aciklama: "Hızlı grafik çizimi" },
  { ad: "GeoGebra",       url: "https://www.geogebra.org/",                ikon: "📐", aciklama: "Matematik görselleştirme" },
  { ad: "Falstad Circuit",url: "https://www.falstad.com/circuit/",         ikon: "⚡", aciklama: "Tarayıcıda devre simülasyonu" },
  { ad: "PhET",           url: "https://phet.colorado.edu/",               ikon: "🔬", aciklama: "İnteraktif fizik simülasyonları" },
  { ad: "MIT OCW",        url: "https://ocw.mit.edu/",                     ikon: "🎓", aciklama: "MIT'nin açık ders malzemeleri" },
  { ad: "Khan Academy",   url: "https://www.khanacademy.org/",             ikon: "📚", aciklama: "Temel konu tekrarı" },
  { ad: "Overleaf",       url: "https://www.overleaf.com/",                ikon: "✍️", aciklama: "LaTeX ile rapor/ödev yazımı" },
  { ad: "Hyperphysics",   url: "http://hyperphysics.phy-astr.gsu.edu/",    ikon: "🧲", aciklama: "Hızlı fizik başvuru haritası" }
];

/* ============================================================
   AKADEMİK TAKVİM
   ------------------------------------------------------------
   Ana sayfadaki geri sayım ve dönem çubuğu bu tarihlerden üretilir.
   Tarih formatı: "YYYY-MM-DD" (yerel saatle, gün başlangıcı).
   Aralıklar kapsayıcıdır: bitis günü de o döneme dahildir.
   Yeni döneme geçerken sadece bu bloğu güncellemek yeterli.
   ============================================================ */
const TAKVIM = {
  ad: "2026 Güz",
  baslangic: "2026-09-28",                        // derslerin başlangıcı
  vize:  { bas: "2026-11-16", bit: "2026-11-22" }, // vize haftası
  final: { bas: "2027-01-04", bit: "2027-01-14" }  // final dönemi
};
