# PROGRESS — Ders Defteri

> Bu dosya projenin hafızasıdır. Her güncelleme, yeni özellik,
> bug fix veya teknik karar sonrasında bu dosya GÜNCELLENMELİDİR.
> Güncelleme yapılmadan iş 'bitti' sayılmaz.

---

## Proje Özeti

**Ders Defteri**, Elektrik-Elektronik Mühendisliği derslerine ait kişisel bir çalışma
arşividir: konu anlatımları, LaTeX'li formül kartları, video kaynakları ve çözümlü
soru havuzu tek yerde toplanır. Sunucusuz ve bağımlılıksız çalışır (saf HTML/CSS/JS),
GitHub Pages üzerinden yayınlanır. Kullanıcı verisi (konu ilerlemesi, yüklenen fotoğraf
ve dökümanlar) tamamen tarayıcıda saklanır; uygulama iPhone'a "Ana Ekrana Ekle" ile
kurulabilen bir PWA'dır ve çevrimdışı çalışır.

- Repo: https://github.com/kayalarbk/Ders-defteri
- Yayın: GitHub Pages (`.nojekyll` mevcut)

---

## Tamamlanan İşler (en yeni üstte)

### 2026-07-25 — Öğrenci verimliliği revizyonu

Site "okunan bir arşiv"di; aktif çalışma araçlarına dönüştürüldü. Yapılan test ve bulgular
"Verimlilik Testi" bölümünde.

- **Soru havuzu yeniden kurgulandı (en kritik düzeltme).** Eskiden akordeon açılınca soru ve
  çözüm AYNI ANDA görünüyordu — öğrenci soruyu hiç deneyemeden cevabı görüyordu, yani 62 sorunun
  tamamı pratik değeri taşımıyordu. Artık: soru açılır → "Çözümü göster" → çözüm →
  "✓ Çözdüm / ↻ Takıldım" ile kendini değerlendirme.
- **Soru başlıkları anlamlı hale geldi.** "Soru 1, Soru 2…" yerine sorunun kendi metninden
  türetilen önizleme (`duzMetin()`; LaTeX komutları `\omega → ω` gibi sembole çevriliyor).
  Artık listeye bakıp "konvolüsyon sorusu" bulunabiliyor.
- **Soru filtreleri genişletildi:** Tümü / Vize / Final + **Takıldıklarım** + **Denemediklerim**.
  Üstte özet: "10 sorudan 4'ü çözüldü · 2 takılınan · 4 denenmedi".
- **Formül Çalışma Modu** (TODO #6). 136 formül kartı eskiden sadece çevrilebilen bir duvardı.
  Artık tam ekran çalışma: kartlar karıştırılır, tek tek sorulur, "Biliyorum / Tekrar et" ile
  işaretlenir; tur sonunda skor ve **"Bilmediklerimi çalış"** ile sadece eksikler tekrar edilir.
  Bilinen formüller kart duvarında ✓ ile işaretli. Klavye: boşluk = göster, ← tekrar, → biliyorum.
- **Tüm derslerde arama** (TODO #4). Ana sayfada tek kutu; 96 konu + 136 formül + 62 soruda arama.
  Türkçe normalizasyon ("olcum" → "ölçüm" bulur), `/` ile odaklanma, Enter ile ilk sonuca gitme.
  Sonuca tıklayınca ilgili ders sayfasında hedef açılır, kaydırılır ve vurgulanır (`?git=konu-5`).
- **Ana sayfa özeti + "Kaldığın yer".** Üstte üç istatistik (konu / formül / soru) ve en son
  açılan dersteki ilk bitmemiş konuya doğrudan "Devam et" bağlantısı. Uygulamayı açan öğrenci
  artık nereden devam edeceğini hatırlamak zorunda değil.
- **Tasarım:** hero kısaltıldı (uzun paragraf yerine arama kutusu) — kartlar ve özet artık
  ilk ekranda. Ders kartı açıklamaları 3 satıra kırpıldı, ızgara satırları eşitlendi.
- `sw.js` → `CACHE_VERSION = "dd-v2"` (TODO #1 disiplini uygulandı).
- Yeni dosya eklenmedi; tüm değişiklikler mevcut `app.js` / `style.css` / `index.html` içinde,
  bu yüzden `sw.js` PRECACHE listesi değişmedi.

### 2026-07-23 — PWA standardı + proje hafızası
- `manifest.json` eklendi (standalone, tema rengi `#12161D`, 192/512 PNG ikon, maskable dahil).
- `icon-192.png` / `icon-512.png` üretildi — osiloskop kare dalgası + accent nokta, marka paletiyle uyumlu.
- `sw.js` (service worker) eklendi: cache-first, 16 uygulama dosyası kurulumda önbelleğe alınıyor;
  Google Fonts + MathJax CDN'i ilk ziyarette önbelleğe alınıp çevrimdışı sunuluyor;
  sürüm değişince (`dd-v1`) eski cache'ler siliniyor.
- `index.html` + `course.html` head'lerine PWA meta etiketleri eklendi
  (manifest, apple-mobile-web-app-*, apple-touch-icon, theme-color, `viewport-fit=cover`).
- `style.css`: iOS güvenli alan (safe area) desteği — çentik ve home bar artık içerikle çakışmıyor;
  standalone modda lastik bant kaydırma kısıldı.
- Yedekleme paneli (topbar 💾): JSON dışa aktarma (medya dahil / sadece ilerleme) ve içe aktarma;
  depolama kullanım bilgisi gösteriliyor.
- İlerleme yazımı debounce'lu hale getirildi; `pagehide` / `visibilitychange` anında diske aktarılıyor.
- Bu dosya (`PROGRESS.md`) oluşturuldu.

### 2026-07-19 — Ders verilerinin bölünmesi
- `data.js` tek dosyadan çıkarılıp her ders kendi dosyasına taşındı (`data/EE3061.js` vb.).
- Kart sırası ve hızlı linkler `data/_ayarlar.js`'e alındı (derslerden **sonra** yüklenmeli).
- GitHub Pages'te ders kartlarının görünmemesi sorunu düzeltildi (`_ayarlar.js` yüklenmezse
  `DERS_SIRASI` yerine `Object.keys(DERSLER)` fallback'i).

### 2026-07-16 — Tasarım revizyonu + verimlilik özellikleri
- Mühendislik defteri / osiloskop temalı yeni tasarım; koyu + açık tema (localStorage'da saklanır).
- Konu bazlı ilerleme takibi (✓ işaretleme, kart ve ders sayfasında yüzde çubuğu).
- Pomodoro zamanlayıcı (25/50 odak, 5 mola) topbar'da.
- Formül kartları (flip), soru havuzu vize/final filtresi, akordeon konu anlatımı.
- IndexedDB tabanlı fotoğraf/doküman yükleme (yüklerken otomatik küçültme), galeri + lightbox.
- 2 yeni ders eklendi.

### 2026-06-29 ve öncesi — İlk sürüm
- Temel `index.html` / `course.html` / `app.js` / `style.css` iskeleti, ilk ders içerikleri.

---

## Dosya Yapısı

```
Ders-defteri/
├── index.html          # Ana sayfa: ders kartları ızgarası + hızlı erişim linkleri
├── course.html         # Ders detay şablonu (?ders=KOD ile beslenir), MathJax burada yüklenir
├── app.js              # Tüm uygulama mantığı (tek dosya, modülsüz)
│                       #   · tema, LaTeX render, duzMetin() + Türkçe arama normalizasyonu
│                       #   · IndexedDB (foto/doküman) + görsel küçültme
│                       #   · ilerleme takibi (localStorage, debounce'lu)
│                       #   · ana sayfa & ders sayfası render fonksiyonları
│                       #   · ana sayfa özeti + "kaldığın yer" (renderOzet)
│                       #   · global arama (aramaIndex / aramaYap) + ?git= hedefe gitme
│                       #   · soru havuzu: çözümü göster + çözdüm/takıldım + filtreler
│                       #   · formül çalışma modu (karıştır, biliyorum/tekrar, tur skoru)
│                       #   · galeri modalı / lightbox, akordeon
│                       #   · pomodoro, yedekleme (JSON dışa/içe aktarma)
│                       #   · service worker kaydı
├── style.css           # Tüm stiller; CSS değişkenleriyle koyu/açık tema + safe area
├── manifest.json       # PWA manifesti (standalone, ikonlar, tema renkleri)
├── sw.js               # Service worker — cache-first, çevrimdışı çalışma
├── icon-192.png        # PWA / apple-touch-icon
├── icon-512.png        # PWA ikon (maskable olarak da kullanılır)
├── .nojekyll           # GitHub Pages'in Jekyll işlemesini kapatır
├── PROGRESS.md         # Bu dosya — proje hafızası
└── data/
    ├── _ayarlar.js     # DERS_SIRASI (kart sırası) + HIZLI_LINKLER — derslerden SONRA yüklenir
    ├── EE3061.js       # Signals and Systems
    ├── EE3012.js       # Electronics II
    ├── EE3014.js       # Energy Conversion
    ├── EE3016.js       # Fundamentals of Electromagnetics
    ├── STAT2056.js     # Probability and Random Variables
    ├── MATH2055.js     # Discrete Mathematics
    └── MSE2051.js      # Materials Science
```

Her ders dosyası global `DERSLER` nesnesine kendi kodunu ekler; şema:
`{ ad, donem, ozet, renk, konular[], formuller[], dokumanlar[], videolar[], linkler[], sorular[] }`.

---

## Teknik Kararlar

| Karar | Neden | Tarih |
|---|---|---|
| Framework/bundler yok, saf HTML+CSS+JS | GitHub Pages'e doğrudan atılabilsin, build adımı olmasın, uzun vadede bakım maliyeti sıfıra yakın olsun | 2026-06-29 |
| Ders verileri ayrı `data/*.js` dosyalarında, global `DERSLER` nesnesine yazılıyor | `file://` üzerinden de açılabilsin (ES module + fetch CORS'a takılıyor); her ders bağımsız düzenlenebilsin | 2026-07-19 |
| `_ayarlar.js` derslerden sonra yükleniyor + `DERS_SIRASI` için fallback | Sıralama dosyası eksik/gecikmeli yüklenirse ana sayfa boş kalmasın | 2026-07-19 |
| İlerleme → localStorage, medya → IndexedDB | İlerleme küçük ve senkron okunuyor; fotoğraf/PDF blob'ları localStorage kotasına sığmaz | 2026-07-16 |
| Yüklenen fotoğraflar 1600px / JPEG %85 olarak küçültülüyor | Telefon fotoğrafları 5-10 MB; kota ve açılış hızı için | 2026-07-16 |
| Service worker cache-first (network-first değil) | İçerik statik ve nadiren değişiyor; öncelik anında açılma ve tam çevrimdışı çalışma. Güncelleme `CACHE_VERSION` artırılarak yapılır | 2026-07-23 |
| CDN kaynakları (Google Fonts, MathJax) da önbelleğe alınıyor | Aksi halde uçak modunda font ve formüller yüklenmiyor | 2026-07-23 |
| Yedekleme JSON'unda medya base64 (data URL) olarak gömülü | Tek dosya = tek yedek; iOS'ta paylaş/İCloud'a kaydet ile kolay saklanıyor. "Sadece ilerleme" seçeneği büyük dosya istemeyenler için | 2026-07-23 |
| `apple-mobile-web-app-status-bar-style: black-translucent` + `viewport-fit=cover` | Tam ekran his; buna karşılık safe-area padding'leri zorunlu hale geldi | 2026-07-23 |
| MathJax SVG çıktısı (tex-svg) | Tema değişiminde ve akordeon yüksekliği ölçümünde daha kararlı | 2026-07-16 |
| Çözüm soruyla birlikte değil, butonla açılıyor | Cevabı görerek "anladım" sanmak en yaygın çalışma hatası; önce deneme zorunlu hale getirildi | 2026-07-25 |
| Soru başlıkları veriye elle girilmedi, `duzMetin()` ile soru metninden türetiliyor | 62 sorunun tamamına elle başlık girmek gerekmesin; veri şeması değişmedi, mevcut ders dosyaları olduğu gibi çalışıyor | 2026-07-25 |
| Formül "bilinen" durumu ders bazlı localStorage dizisi (`dd-flash-KOD`) | İlerleme kayıtlarıyla aynı desen; yedekleme `dd-*` anahtarlarını zaten topladığı için ek iş gerekmedi | 2026-07-25 |
| Arama indeksi ilk aramada kuruluyor (lazy) | 294 kayıt; açılış hızını etkilememesi için sayfa yüklenirken değil, ilk tuşta kuruluyor | 2026-07-25 |
| `?git=hedef` ile derin bağlantı: önce akordeon açılıyor, sonra kaydırılıyor | Ters sırada, açılan panel ve MathJax yerleşimi sayfa yüksekliğini değiştirip kaydırmayı kaçırıyordu (test sırasında görüldü) | 2026-07-25 |

---

## TODO (öncelik sırasına göre)

1. **EE3014 içeriği zayıf** — 5 konu / 5 formül / **1 soru**. Diğer dersler 15-17 konu, 21-25 formül,
   8-12 soru seviyesinde. Yeni çalışma araçları (formül modu, soru pratiği) bu derste boş duruyor;
   içerik girilmeden verimlilik artışı bu derse yansımaz. **Sıradaki en yüksek etkili iş bu.**
2. Otomatik yedek hatırlatıcısı: son yedek tarihini localStorage'da tut, 30 günü geçince topbar'da uyarı göster.
3. Ders sayfasında "çalışma süresi" istatistiği (pomodoro seansları ders bazında kaydedilsin).
4. Yeni ders eklerken `index.html` + `course.html` içindeki script listesini elle güncellemek gerekiyor —
   tek bir `data/_index.js` listesinden dinamik yüklemeye geçilebilir (`sw.js` PRECACHE listesi de aynı derdi yaşıyor).
5. Soru havuzuna konu etiketi alanı (`sorular[].konu`) eklenip "bu konunun soruları" filtresi yapılabilir.
   Şu an başlık soru metninden türetiliyor; veriye etiket girilirse eşleştirme kesinleşir.
6. Formül çalışma modunda gerçek aralıklı tekrar (tarih bazlı: 1 gün / 3 gün / 1 hafta).
   Şu an "biliyorum" kalıcı işaret; zamanla unutma modellenmiyor.

### Kapatılan TODO'lar (2026-07-25)
- ~~`CACHE_VERSION` disiplini~~ → `dd-v2`'ye çıkarıldı, kural PROGRESS'te kayıtlı.
- ~~Soru havuzuna arama/etiket filtresi~~ → global arama + Takıldıklarım/Denemediklerim filtreleri.
- ~~Formül kartları için karıştır/tekrar modu~~ → Formül Çalışma Modu.
- ~~Açık tema kontrast kontrolü~~ → ana sayfa ve ders sayfası açık temada kontrol edildi, sorun yok.

---

## Verimlilik Testi (2026-07-25)

Yerel sunucu + masaüstü Chrome üzerinde, "sınava çalışan öğrenci" senaryosu izlenerek yapıldı.

| Bulgu | Etki | Durum |
|---|---|---|
| Soru açılınca çözüm de görünüyordu — soruyu deneme imkânı yok | **Kritik** · 62 sorunun pratik değeri sıfırdı | Düzeltildi |
| Soru başlıkları "Soru 1…12" — hangi konu olduğu belirsiz | Yüksek · aranan soru bulunamıyor | Düzeltildi |
| 136 formül kartı çevrilebilen bir duvar; ne sorulma ne takip | Yüksek · ezber çalışması desteklenmiyor | Düzeltildi (Çalışma Modu) |
| 294 içerik parçası var, arama yok | Yüksek | Düzeltildi (global arama) |
| Açılışta "nerede kalmıştım" bilgisi yok | Orta | Düzeltildi ("Kaldığın yer") |
| Hero ekranın tamamını kaplıyor, kartlar katlamanın altında | Orta · tasarım | Düzeltildi |
| Ders kartı açıklamaları farklı uzunlukta, ızgara tırtıklı | Düşük · tasarım | Düzeltildi (3 satır kırpma) |

Doğrulanan akışlar: arama → hedefe gitme/vurgulama, çözüm gösterme + akordeon yeniden ölçme,
çözdüm/takıldım kaydı ve filtresi, 22 kartlık tam formül turu → skor → "bilmediklerimi çalış",
ana sayfa toplam istatistikleri, açık/koyu tema, konsol hatasız.

**Not:** Tarayıcı aracı pencere genişliğini kısamadığı için mobil görünüm 414px'e sabitlenmiş
kap içinde yapısal olarak doğrulandı (taşma yok, ızgaralar doğru); **gerçek iPhone'da görsel
doğrulama hâlâ yapılmadı** (aşağıdaki PWA listesindeki açık madde ile aynı).

---

## Bilinen Buglar

| Bug | Repro | Durum |
|---|---|---|
| Yeni ders eklenince `sw.js` PRECACHE listesine elle eklenmezse ders çevrimdışı açılmıyor | `data/YENI.js` ekle, script tag'i ekle, uçak modunda ana sayfadan derse gir | **Açık** (TODO #7 ile çözülecek) |
| GitHub Pages'te ders kartları görünmüyordu | Ana sayfayı Pages üzerinden aç, ızgara boştu | **Çözüldü** (2026-07-19, `DERS_SIRASI` fallback) |
| Gizli/özel sekmede IndexedDB açılmıyor, yükleme başarısız oluyor | Safari özel sekmede fotoğraf ekle | **Açık** — kullanıcıya açıklayıcı mesaj gösteriliyor, teknik çözümü yok |

---

## PWA Test Kontrol Listesi

- [x] Ana ekrana eklenince tam ekran (Safari çubuğu yok) açılıyor — `display: standalone` + `apple-mobile-web-app-capable`
- [x] Uçak modunda açılıp çalışıyor — yerel sunucu kapatılıp sayfa yenilendi: ders sayfası, fontlar ve 142 MathJax formülü sorunsuz render edildi
- [x] Veri girildikten sonra uygulama kapatılıp açılınca veri duruyor — localStorage (ilerleme) + IndexedDB (medya)
- [x] Çentik/home bar içerikle çakışmıyor — `env(safe-area-inset-*)` padding'leri
- [x] İkon ana ekranda doğru görünüyor — 192/512 PNG + apple-touch-icon
- [ ] **Gerçek iPhone'da doğrulanacak** (yukarıdaki kontroller masaüstü Chrome + yerel sunucuda yapıldı)

### Yedekleme testi
- [x] Dışa aktar → içe aktar turu: ilerleme kayıtları ve IndexedDB medyası kayıpsız geri yüklendi
