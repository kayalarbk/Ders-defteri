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

### 2026-09-13 (2) — Müfredat boşlukları + "yormayan arayüz" revizyonu

İki iş bir turda yapıldı: kalan müfredat boşlukları kapatıldı ve arayüz, saatlerce
ders çalışan birinin gözünü yormayacak şekilde baştan ayarlandı.

**İçerik — eklenen 9 konu (98 → 107)**
- **EE3012**: Op-Amp İç Yapısı ve Gerçek Kusurları (ofset, polarma akımı, GBW, yönelme hızı);
  Aktif Filtreler (Sallen–Key, Butterworth/Chebyshev/Bessel); Gerilim Referansları ve
  Doğrusal Regülatörler (bandgap, LDO, ısı bütçesi). Dersin soru havuzunda op-amp kusurları
  sorusu vardı ama konusu yoktu — o boşluk kapandı.
- **EE3061**: İdeal ve Pratik Filtreler (ideal filtrenin neden nedensel olmadığı, Butterworth
  derece seçimi, grup gecikmesi, çift doğrusal dönüşüm ve frekans bükülmesi).
- **EE3014**: Tek Fazlı Asenkron Motorlar ve Özel Makineler (çift döner alan kuramı, kalkış
  düzenekleri, üniversal/adım/BLDC/relüktans).
- **EE3016**: Dalga Polarizasyonu (doğrusal/dairesel/eliptik, PLF, Faraday dönmesi);
  İletim Hatları (telegrafçı denklemleri, \( Z_0 \), \( Z_{in} \), çeyrek dalga uyumlaştırma, Smith abağı).
- **STAT2056**: Poisson Süreci ve Üstel Arası Zamanlar (hafızasızlık, Erlang, birleştirme/ayrıştırma).
- **MATH2055**: Sonlu Durum Makineleri ve Diller (DFA/NFA, Kleene, pompalama lemması, Chomsky hiyerarşisi).

**Sorulara konu etiketi (TODO #4 kapandı) — ve ortaya çıkan gerçek boşluk**
Bütün sorulara `sorular[].konu` alanı eklendi (mevcut 109 soru tek tek okunup elle eşlendi).
Etiketleme, önceki turda "her konunun sorusu var" sanılan durumun doğru olmadığını gösterdi:
başlık metninden yapılan gevşek eşleşme yanıltıyormuş, **14 konunun hiç sorusu yokmuş**
(EE3061'de 4, EE3014/EE3016/STAT2056/MATH2055'te 2'şer). Bu konular için 12 soru daha yazıldı.
Yeni konuların soruları da dahil **soru 109 → 134**; artık *ölçülebilir biçimde* her konunun
en az bir sorusu var (denetim betiği bunu her turda doğruluyor).

**Formül kartları (237 → 276)** — yeni konuların kartları: GBW, slew/tam güç bandı, op-amp ofset,
Sallen–Key \( \omega_0 \) ve \( Q \), Butterworth, bandgap, regülatör verimi, \( T_J \),
çift döner alan, adım açısı, relüktans momenti, polarizasyon koşulu, eksenel oran, PLF,
\( \gamma \), \( Z_0 \), \( Z_{in} \), çeyrek dalga, Smith dönüşümü, Poisson süreci, hafızasızlık,
Erlang, DFA, Kleene yıldızı, pompalama lemması.

**Arayüz — göz yorgunluğu hedeflenerek**
- **Tema iki değil ÜÇ kademe**: `kagit` (gündüz, varsayılan) · `ilik` (akşam, mavi ışık kısık)
  · `gece` (karanlık oda). Eski `light`/`dark` kayıtları açılışta `kagit`/`gece`ye göçürülüyor.
- **Okuma ayarları paneli (Aa, topbar)**: tema, yazı boyutu (4 kademe), satır genişliği
  (58/68/82ch) ve hareket azaltma. Hepsi `<html>` üzerinde `data-*`, CSS değişkenlerini sürüyor.
  Sabit bir "doğru punto" yok — kullanıcı ortam ışığına ve yorgunluğuna göre gün içinde değiştiriyor.
- **Defter karesi zemini kaldırıldı.** Sayfa boyunca tekrar eden ince çizgiler sürekli bir
  gürültü kaynağıydı.
- **Hareket kısıldı**: hover'da `translateY` zıplaması ve `filter: brightness` oynatması
  her yerden çıkarıldı, yerine sessiz zemin/kenarlık değişimi kondu. Hedef vurgusu tek seferlik
  yumuşak halkaya indirildi.
- **Renk yalnız anlam taşıdığında**: her formül kartındaki "FORMÜL" rozeti, hero'nun büyük harf
  vurgu satırı, mono-büyük harf bölüm çipleri ve marka noktasındaki halka kaldırıldı;
  bölüm/konu kutuları `--border-yumusak` ile liste hâline getirildi.
- **Kontrast ölçüldü, tahmin edilmedi.** Üç temanın 12 metin/zemin çifti WCAG'a göre hesaplandı;
  5 çift eşiğin altındaydı (kağıtta `--muted`/zemin 4.41, `--accent`/`--accent-soft` 4.06,
  `--uyari`/`--uyari-soft` 3.60; ılıkta uyarı 4.14). Tonları korunarak koyultuldu.
  Şimdi **gövde metni her temada ≥ 9.3:1 (AAA), ikincil metin ve vurgular ≥ 4.5:1 (AA)**.

**Ders sayfası artık açılışta donmuyor (TODO #1 kapandı)**
MathJax bütün konuları ve formülleri, akordeonlar kapalıyken bile açılışta işliyordu.
Artık: formül kartları `IntersectionObserver` ile ekrana yaklaştıkça, konu ve soru metinleri
akordeon açıldığında ve **yalnız bir kez** (`data-math-hazir`) işleniyor.
IntersectionObserver'ı olmayan tarayıcıda eski davranışa düşülüyor.

**Konu ↔ soru bağı (etiketlerin karşılığı)**
- Her konunun altında "N soru bu konudan → çöz" köprüsü; tıklayınca soru havuzu o konuya
  süzülüp oraya kaydırılıyor.
- Soru havuzuna konu açılır listesi eklendi. Konu süzgeci tip/durum süzgeciyle **VE**'leniyor
  (ikisi birlikte uygulanıyor), ayrı ayrı değil.

**Doğrulama**
- `kontrol.js`: 107 konu / 276 formül / 134 sorunun LaTeX ayraç dengesi, kaçışsız `<`,
  açık kalmış HTML etiketi, mükerrer soru, konu etiketi geçerliliği ve sorusuz konu taraması — temiz.
- `dom-test.js` (jsdom): ana sayfa + iki ders sayfası gerçekten render edilip **63 denetim**
  çalıştırıldı — tema göçürme, okuma ayarlarının kaydı/geri yüklenmesi, geçersiz ayarın
  reddi, arama (yeni içerik + Türkçe normalizasyon), tembel MathJax (açılışta hiçbir şey
  işlenmiyor, kart ekrana girince işleniyor ve gözlemden çıkıyor), konu↔soru köprü sayılarının
  toplamının soru sayısına eşitliği, konu+tip süzgecinin birlikte daraltması, akordeon,
  not kaydı, ilerleme, `?git=` derin bağlantısı. Konsol hatasız.
- `kontrast.js`: 3 tema × 12 çift — hepsi eşik üstü.
- `statik.js`: 29 olay işleyicisinin tamamı tanımlı, 31 CSS değişkeni tanımlı,
  üç temanın 16 renk değişkeni eksiksiz eşleşiyor.
- `sw.js` → `dd-v7`. Yeni dosya eklenmedi, PRECACHE listesi değişmedi.

**Not:** Tarayıcı eklentisi bu oturumda bağlanamadığı için doğrulama gerçek Chrome yerine
jsdom + hesaplanmış kontrast ile yapıldı. Yapısal ve mantıksal davranış doğrulandı; **temaların
gerçek ekranda görsel kontrolü yapılmadı.**

### 2026-09-13 — İçerik denetimi: eksik tespiti ve kapatılması

Altı ders dosyası tek tek okunup içerik eksikleri çıkarıldı (konu derinliği, sorusuz konular,
mükerrer sorular, müfredat boşlukları, render hatası) ve aynı turda kapatıldı.

**Tespit edilen ve düzeltilen render hatası**
- `MATH2055.js` içinde LaTeX'te kaçışsız `<` + harf (`O(1)<O(\log n)…`, `0\le r<n`) tarayıcıda HTML
  etiketi olarak yorumlanıyor, Big-O sıralaması ve bölme algoritması satırı ekranda yutuluyordu.
  Kural: LaTeX içinde harften önce gelen `<` daima `&lt;` yazılır (`<0`, `<1`, `<\infty` güvenli).
  Yeni içerikte tüm `<` / `>` işaretleri `&lt;` / `&gt;` ile yazıldı.

**Konu metinleri derinleştirildi** — EE3014/EE3012 standardına ("neden böyle", sık hata, çözüm şablonu,
EE'de nerede kullanılır) getirildi. Ortalama konu uzunluğu: EE3061 570→1990, EE3016 580→2270,
STAT2056 550→2480, MATH2055 700→3650 karakter.

**Eklenen konular (89 → 98)**
- EE3061: DT Fourier Serisi ve DFT; frekans yanıtı konusuna Bode çizimi + sistem bağlantıları; Laplace/z
  konularına başlangıç koşullu diferansiyel/fark denklemi çözüm şablonları.
- EE3016: Elektrik Dipolü ve Görüntü Yöntemi; Düzlem Dalganın Yansıması ve İletimi (Γ, τ, SWR, çeyrek dalga);
  vektör analizine diferansiyel elemanlar, manyetostatiğe vektör potansiyel **A**, iletken/dielektrik konusuna
  sınır koşulları, kayıplı ortama kayıp tanjantı.
- STAT2056: Koşullu Beklenti ve MMSE Tahmin; dağılımlara Hipergeometrik, Negatif Binom, Gamma/Erlang, Rayleigh;
  kovaryans konusuna iki değişkenli Gauss; MGF konusuna karakteristik fonksiyon ve Chernoff; rastgele süreçlere
  ergodiklik, PSD ve LTI geçişi.
- MATH2055: Bağıntı Matrisleri, Bileşke ve Kapanışlar (Warshall, ilişkisel cebir); Üreteç Fonksiyonları;
  çizge konusuna Dijkstra, düzlemsellik, boyama; ağaçlara Huffman, MST, karar ağaçları; Boole konusuna
  Karnaugh haritası ve devre tasarım akışı.
- EE3012: Cascode Kuvvetlendirici (video listesinde vardı, konu yoktu).
- EE3014: DC Generatörler ve Karakteristikleri; Senkron Motor, V-Eğrileri ve Güç Faktörü Düzeltme.

**Sorular (66 → 109)** — her konuya en az bir soru düşecek şekilde 43 net soru eklendi; mevcut kısa sorular
ikinci/üçüncü şıkla derinleştirildi (yorum, kontrol, "ne olurdu" soruları).
- EE3012'de 6 mükerrer soru (Wien ×2, B sınıfı ×2, f_T ×2, Miller ×2, A_f ×2, CMRR ×2) kaldırıldı; yerine
  alçak frekans SCTC, yüksek frekans OCTC, akım aynası/Widlar, faz payı + kompanzasyon, Colpitts/faz kaydırmalı,
  A sınıfı verim, cascode ve op-amp kusurları soruları geldi.
- Sorusuz konu kalmadı. Eklenen soru başlıkları: EE3061 (Fourier serisi, FT özellikleri, Bode, DFT, fark
  denklemi), EE3016 (diverjans teoremi, Laplace, sınır koşulları, görüntü yöntemi, indüktans, hareket emk'si,
  yansıma, anten gücü), STAT2056 (kart sayma, güvenilirlik + Bayes, PDF dönüşümü, birleşik dağılım, MMSE,
  konvolüsyon, MGF türetme, otokorelasyon/PSD), MATH2055 (yanılgı, çelişki ispatı, kümeler, bağıntı özellikleri,
  Big-O tanıkları, güvercin yuvası, ÇKT, Master teorem, üreteç fonksiyonu, gösterge değişkenler, Dijkstra/Kruskal,
  m-li ağaç, K-map), EE3014 (çekirdek kaybı frekans ölçekleme, hava aralıklı endüktans, Δ–Y trafo + ototrafo,
  DC generatör, döner alan, rotor direnci / Y–Δ yolverme, güç faktörü düzeltme, şönt motor hız/yolverme).

**Formül kartları (146 → 237)** — dönüşüm çiftleri (rect↔sinc, Laplace/z çiftleri, DFT), sınır koşulları,
Γ/τ/SWR, Bernoulli/Rayleigh/Erlang/Q fonksiyonu/Markov/Wiener–Khinchin, Master teorem, ÇKT, Catalan, Binet,
cascode R_out, faz payı, Colpitts, Widlar, senkron moment, Q_c düzeltme, Y–Δ.

**Teknik**
- `style.css`: konu içi `<table>` stili (Maxwell denklemleri özeti tablo olarak yazıldı; dar ekranda yatay kaydırma).
- Ders özetleri (`ozet`) yeni kapsama göre güncellendi.
- İçerik üretimi scratchpad'de `KOD.parts.js` (String.raw ile düz LaTeX) + splice scripti ile yapıldı; veri
  dosyası biçimi değişmedi. Dikkat: Bash heredoc çift ters bölüyü tek ters bölüye indiriyor — LaTeX içeren
  dosyalar Write aracıyla yazılmalı.
- `sw.js` → `dd-v6`.

**Doğrulama:** yerel sunucuda 6 ders sayfası açıldı; MathJax hata (`data-mjx-error`) sayısı her derste 0,
ekranda kaçmış `&lt;` yok, Maxwell tablosu doğru çizildi, ana sayfa özeti 98 / 237 / 109; konsol hatasız.
Tüm dosyalar Node ile parse edildi; satır içi ve blok LaTeX ayraçları dengeli.

**Kalan içerik eksikleri (bilinçli ertelendi)**
- `dokumanlar: []` hâlâ her derste boş — ders notu PDF'i / geçmiş sınav eklenebilir (kullanıcı yüklemesi ayrıca var).
- Videolar ders bazında playlist; konuya bağlı video (`videolar[].konu`) yok. Tüm kaynaklar İngilizce.
- `sorular[].konu` etiketi yok (TODO #4) — sorular artık her konuyu kapsıyor ama eşleme başlıktan çıkarılıyor.

### 2026-09-11 (2) — Yumuşak tema + kullanıcı gözüyle eksiklerin kapatılması

Site "bir mühendislik terminali" gibi duruyordu; ders çalışılan bir yere dönüştürüldü.
Ardından uygulama gerçek bir öğrenci akışıyla baştan sona gezilip eksikler çıkarıldı.

**Tema — yumuşak / eğitim odaklı**
- **Açık tema artık varsayılan** (kırık beyaz kağıt zemin, mürekkep grisi metin, yumuşak
  yeşil vurgu). İlk açılışta kullanıcı seçimi yoksa işletim sistemi tercihi
  (`prefers-color-scheme`) uygulanır; seçim yapılınca localStorage'a yazılır.
- Koyu tema da yeniden ayarlandı: mavi-siyah yerine nötr gece grisi, vurgu neon değil pastel.
- Marka noktasındaki **neon parlama kaldırıldı**, etiketlerdeki geniş harf aralığı
  `.15em → .06em` (tek değişken `--iz`), defter karesi seyreltildi (32→40px, opaklık düşürüldü).
- Gövde 16→16.5px, satır aralığı 1.75→1.8; **konu metni ~72 karakterde sınırlandı**
  (uzun satır göz yoruyordu), paragraf/liste boşlukları düzenlendi.
- Dağınık sabit renkler (`#06201E`, `#F0A868`, `#e5484d` …) temaya bağlı değişkenlere
  taşındı: `--accent-fg`, `--accent-soft`, `--uyari`, `--uyari-soft`, `--hata`, `--sil`.
  Açık temada okunamayan rozet/buton yazıları bu sayede düzeldi.

**Kapatılan eksikler**
- **Konu notu (en büyük eksik).** Fotoğraf ve PDF yüklenebiliyordu ama öğrenci tek satır
  kendi notunu yazamıyordu. Artık her konunun altında "Kendi notum" alanı var; yazarken
  kaydediliyor, akordeon yüksekliği yeniden ölçülüyor, notu olan konu farklı görünüyor.
  Kayıt ders bazlı `dd-not-KOD` ({konuIndex: metin}); yedekleme `dd-*` anahtarlarını
  topladığı için dışa aktarmaya kendiliğinden dahil.
- **Soru başlıkları yanlış okunuyordu.** `duzMetin()` üsleri, kesirleri ve fonksiyon
  adlarını siliyordu: `e^{-2t}u(t)` → "e-2tu(t)", `\cos(2\pi t)` → " (2π t)",
  `\frac{s+1}{(s+2)}` → "s+1(s+2)". Artık üs/alt indis Unicode'a çevriliyor (`e⁻²ᵗu(t)`,
  `aⁿu[n]`), kesir `(a)/(b)` oluyor, `\text{mA}` gibi sarmalayıcıların içeriği korunuyor,
  40'a yakın sembol daha tanınıyor.
- **İlerleme sadece konu içindi.** Ders başında artık üç kutu var: konu / formül / soru
  (tamamlananda vurgulanır, tıklayınca ilgili bölüme gider) ve "N konuda notun var".
  Ana sayfa kartlarında da `📖 8/15 · 🎴 4/22 · ✎ 3/10` özeti görünüyor.
- **Uzun ders özeti ilk ekranı dolduruyordu** — iki satırda kırpıldı,
  "kapsamın tamamını gör" ile açılıyor.
- **Klavye kısayolları gizliydi.** `?` ile açılan liste ve topbar'da ⌨ düğmesi eklendi;
  `p` pomodoro, `t` tema, `y` yazdır, `/` arama, `Esc` kapat.
- **Yazdırma/PDF desteği yoktu.** `@media print` bloğu: arayüz (üst bar, filtreler,
  butonlar, pomodoro) düşer, **kapalı akordeonlar ve çözümler açılır**, formül kartları
  iki yüzüyle basılır, notlar da kağıda gelir. Topbar'da 🖨 düğmesi (`y` kısayolu).
- **Yedek hatırlatıcısı** (eski TODO #1). Son yedek tarihi `dd-son-yedek`'te; hiç yedek
  alınmamışsa veya 30 günü geçmişse 💾 düğmesinde uyarı noktası ve panelde "Son yedek:
  N gün önce" satırı. Notlar eklendiği için yedek almamanın bedeli arttı.

**Doğrulama:** yerel sunucuda açık ve koyu tema, ana sayfa, EE3014 ve EE3061 ders sayfaları
gezildi; not yazma → localStorage → sayaç turu, kısayol paneli, yedek uyarısı ve düzeltilmiş
soru başlıkları tarayıcıda çalışırken görüldü; konsolda hata yok. `sw.js` → `dd-v5`.

**Not:** Geliştirme sırasında görüldü — service worker cache-first olduğu için değişiklikler
`CACHE_VERSION` artırılmadan cihazda görünmüyor. Kural PROGRESS'te zaten kayıtlıydı,
uygulandı.

### 2026-09-11 — EE3014 & EE3012 içeriği, "Bu Hafta" şeridi

TODO #1 kapandı: içeriği en zayıf iki ders tamamlandı, ders sayfasındaki çalışma programı
tek satıra indirildi.

- **EE3014 (Energy Conversion) yeniden yazıldı** — 5 → **15 konu**, 5 → **28 formül**,
  1 → **10 soru**. Chapman "Electric Machinery Fundamentals" ve Fitzgerald temel alınarak
  bir dönemlik çekirdek: manyetik devreler ve devre benzetimi, malzemeler/doyma/çekirdek
  kayıpları, endüktans ve kaçak akı, ideal ve pratik transformatör, eşdeğer devre, regülasyon
  ve verim, üç fazlı + ototransformatör, enerji–koenerji ile elektromekanik kuvvet, DC makinede
  emk/moment/hız denetimi, döner manyetik alan, asenkron makinede kayma–eşdeğer devre–güç
  akışı–moment, senkron makine ve güç açısı. Konular formül dökümü değil, "neden böyle" anlatan
  metin olarak yazıldı (ör. hava aralığının relüktansı neden domine ettiği, sacların girdap
  kaybını neden düşürdüğü). Ders özeti de kapsamı yansıtacak şekilde genişletildi.
- **EE3012 (Electronics II) derinleştirildi** — konu sayısı 11'de kaldı ama içerikler genişletildi;
  formül 14 → **26**, soru 8 → **14**.
- **Çalışma programı → "BU HAFTA" şeridi.** Ders sayfasındaki "00 Çalışma Programı" bölümü
  (14+ satırlık tam dönem listesi) kaldırıldı; yerine takvimden yalnızca **bugünün denk geldiği
  haftayı** gösteren tek satırlık bir şerit kondu (başlık altında, bölüm navigasyonunun üstünde).
  Dönem başlamadıysa ilk hafta "YAKLAŞAN" olarak, sınav/tekrar haftaları kendi renkleriyle
  (sarı/kırmızı) gösteriliyor; dönem bittiyse şerit hiç basılmıyor. Tamamlanan konular ✓,
  konuya tıklayınca ilgili akordeon açılıyor. `dersProgrami()` üretimi aynı kaldı, değişen
  yalnızca sunum: `.pr-*` stilleri → `.bu-hafta` / `.bh-*`, section nav'dan "Program" çıkarıldı.
- Toplam içerik: **89 konu, 146 formül, 66 soru, 19 video** (79 / 111 / 51 idi). *(2026-09-13 itibarıyla 98 / 237 / 109.)*
- `sw.js` → `CACHE_VERSION = "dd-v4"`.
- Doğrulama: 6 ders dosyası da Node ile parse edildi (sözdizimi + alan sayıları), yerel sunucuda
  EE3014 sayfası açıldı — "1. HAFTA · YAKLAŞAN" şeridi ve 28 formül kartı doğru render edildi.

### 2026-09-09 — Dönem takvimi, çalışma programı, MSE2051'in kaldırılması

Yeni dönem (2026 Güz) hazırlığı: uygulama artık takvim farkında.

- **Akademik takvim** (`data/_ayarlar.js` → `TAKVIM`): dönem başı 28 Eyl 2026, vize 16–22 Kas,
  final 4–14 Oca 2027. Ana sayfada geri sayım kartı: içinde bulunulan faz (ders / vize / final),
  hedefe kalan gün, kaçıncı ders haftası ve dönem çubuğu (vize + final blokları işaretli,
  bugünün konumu imleçle). Yeni döneme geçerken **sadece bu blok** güncellenir.
- **Ders bazlı çalışma programı** (ders sayfasında yeni "00 Çalışma Programı" bölümü).
  Elle plan girilmez: takvim + o dersin konu listesinden otomatik üretilir. Konuların ilk yarısı
  vizeye kadarki haftalara, ikinci yarısı vize–final arasına eşit dağıtılır; her iki bloğun
  son haftası sınav tekrarına ayrılır. İçinde bulunulan hafta vurgulanır, tamamlanan konular ✓,
  konu etiketine tıklayınca ilgili akordeon açılır.
- **MSE2051 (Materials Science) kaldırıldı** — ders verildi. `data/MSE2051.js`, script etiketleri,
  `DERS_SIRASI` ve `sw.js` PRECACHE kaydı temizlendi. Toplam içerik 96→79 konu, 136→111 formül,
  62→51 soru.
- **Pomodoro artık çalışırken küçülüyor** ve sayfa içinde sürüklenebiliyor. Başlat'a basınca panel
  kapanıp sağ altta bir kapsül beliriyor (mod + süre + duraklat + bitir); pointer olaylarıyla
  taşınıyor, konum `dd-pomo-pos`'ta saklanıyor ve pencere küçülünce ekrana geri sığdırılıyor.
  Sürüklenmeden tıklanınca tam panel geri açılıyor.
- **Formül kartlarındaki kaydırma çubuğu sorunu giderildi.** Karta sığmayan MathJax formülleri
  çubuk çıkarıyor (ve yatayda kırpılıyordu); artık SVG karta göre oransal küçültülüyor —
  formülün tamamı görünüyor, çubuk yok. Kart yüksekliği 175→190px.
- **Video kaynakları kontrol edildi ve güncellendi.** 14 bağlantının tamamı canlı (oEmbed ile
  doğrulandı). MATH2055'teki "Kimberly Brehm" kanalı **SawFin Mathematics** olarak yeniden
  adlandırılmış, etiket düzeltildi. Tek kaynaklı derslere ekleme yapıldı: EE3014'e NPTEL
  Electrical Machines-1 kursu + 2 asenkron motor videosu, EE3016'ya MIT 8.02 (Walter Lewin),
  MATH2055'e MIT 6.042J.
- `sw.js` → `CACHE_VERSION = "dd-v3"`.

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
│                       #   · okuma ayarları: 3 tema + punto/genişlik/hareket (data-* → CSS değişkeni)
│                       #   · tembel LaTeX render (IntersectionObserver + data-math-hazir)
│                       #   · konu ↔ soru köprüsü ve konu süzgeci (sorular[].konu)
│                       #   · duzMetin() + Türkçe arama normalizasyonu
│                       #   · IndexedDB (foto/doküman) + görsel küçültme
│                       #   · ilerleme takibi (localStorage, debounce'lu)
│                       #   · ana sayfa & ders sayfası render fonksiyonları
│                       #   · akademik takvim: geri sayım + dönem çubuğu (takvimDurum/renderTakvim)
│                       #   · ders bazlı haftalık çalışma programı (dersProgrami/programBlock)
│                       #   · ana sayfa özeti + "kaldığın yer" (renderOzet)
│                       #   · global arama (aramaIndex / aramaYap) + ?git= hedefe gitme
│                       #   · soru havuzu: çözümü göster + çözdüm/takıldım + filtreler
│                       #   · formül çalışma modu (karıştır, biliyorum/tekrar, tur skoru)
│                       #   · galeri modalı / lightbox, akordeon
│                       #   · pomodoro (+ çalışırken sürüklenebilir mini kutu), yedekleme
│                       #   · service worker kaydı
├── style.css           # Tüm stiller; CSS değişkenleriyle koyu/açık tema + safe area
├── manifest.json       # PWA manifesti (standalone, ikonlar, tema renkleri)
├── sw.js               # Service worker — cache-first, çevrimdışı çalışma
├── icon-192.png        # PWA / apple-touch-icon
├── icon-512.png        # PWA ikon (maskable olarak da kullanılır)
├── .nojekyll           # GitHub Pages'in Jekyll işlemesini kapatır
├── PROGRESS.md         # Bu dosya — proje hafızası
└── data/
    ├── _ayarlar.js     # DERS_SIRASI + HIZLI_LINKLER + TAKVIM — derslerden SONRA yüklenir
    ├── EE3061.js       # Signals and Systems
    ├── EE3012.js       # Electronics II
    ├── EE3014.js       # Energy Conversion
    ├── EE3016.js       # Fundamentals of Electromagnetics
    ├── STAT2056.js     # Probability and Random Variables
    └── MATH2055.js     # Discrete Mathematics
```

Her ders dosyası global `DERSLER` nesnesine kendi kodunu ekler; şema:
`{ ad, donem, ozet, renk, konular[], formuller[], dokumanlar[], videolar[], linkler[], sorular[] }`.

Soru şeması: `{ tip: "vize"|"final", konu: <konular[] indeksi>, soru, cozum }`.
`konu` alanı zorunludur — konu→soru köprüsü ve konu süzgeci buna dayanır, ayrıca
denetim betiği "sorusuz konu" taramasını bu alanla yapar. **Yeni konu daima dizinin
SONUNA eklenir**: ilerleme, not ve soru etiketleri konu indeksine bağlı olduğu için
araya ekleme mevcut kullanıcı kayıtlarını kaydırır.

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
| Çalışma programı veriye değil, takvim + konu listesine dayanıyor | 6 ders için elle haftalık plan girmek ve her dönem güncellemek sürdürülemez; konu eklenince program kendiliğinden kayıyor | 2026-09-09 |
| Takvim tek yerde (`TAKVIM`), tarihler `"YYYY-MM-DD"` ve yerel gün başlangıcı olarak çözülüyor | `new Date("2026-09-28")` UTC kabul edilip TR saatinde bir gün kayıyordu | 2026-09-09 |
| Uzun formüller kaydırılmak yerine SVG'si oransal küçültülüyor | Kaydırma çubuğu hem çirkin hem de kartta formülün devamı olduğunu belli etmiyordu; kart küçük olduğu için ölçekleme okunabilirliği bozmuyor | 2026-09-09 |
| Mini pomodoro `position: fixed` + pointer events, konum localStorage'da | Odaktayken panelin ekranı kaplaması ve içeriğin üstünü kapatması engellendi; kullanıcı kutuyu istediği köşeye taşıyabiliyor | 2026-09-09 |
| Açık tema varsayılan, ilk açılışta sistem tercihi okunuyor | Uygulama ders çalışmak için ve uzun süre açık kalıyor; kağıt zemin göz yormuyor. Yine de kullanıcının cihaz tercihi varsa ona uyuluyor | 2026-09-11 |
| Renkler tek tek değil, tema değişkenleri üzerinden (`--accent-fg`, `--uyari`, `--sil` …) | Sabit hex'ler açık temada okunamaz kombinasyonlar üretiyordu (koyu yazı, koyu zemin); tek yerden değiştirilebilir olması gerekiyordu | 2026-09-11 |
| Notlar konu bazlı tek localStorage kaydında (`dd-not-KOD`) | İlerleme/soru/formül kayıtlarıyla aynı desen; yedekleme `dd-*` anahtarlarını zaten topladığı için ek iş gerekmedi | 2026-09-11 |
| Yazdırmada kapalı akordeonlar ve çözümler açılıyor | Ekranda "önce kendin dene" akışı doğru, ama kağıda basarken gizli kalan içerik işe yaramaz; basılı kopya tam olmalı | 2026-09-11 |
| Ders sayfasında tüm program değil, yalnızca içinde bulunulan hafta gösteriliyor | 14+ satırlık liste sayfanın üstünü kaplıyor, asıl içeriği (konu anlatımı) katlamanın altına itiyordu; öğrencinin o an ihtiyacı olan bilgi zaten tek hafta | 2026-09-11 |
| LaTeX içinde harf öncesi `<` daima `&lt;` | `<O(`, `<n` gibi diziler HTML etiketi sayılıp içeriği yutuyor (MATH2055'te yaşandı); `<0`, `<\infty` güvenli ama tutarlılık için hepsi kaçışlanıyor | 2026-09-13 |
| İçerik derinliği standardı: konu ≈1200+ karakter, "neden", sık hata, çözüm şablonu | Formül dökümü seviyesindeki konular (EE3061/EE3016/STAT) sınav öncesi tek başına çalışılamıyordu; EE3014 yeniden yazımı iyi sonuç vermişti | 2026-09-13 |
| Her konuya en az bir soru | Soru havuzu 89 konunun 40'ını hiç kapsamıyordu; "bu konudan soru çöz" akışı kopuyordu | 2026-09-13 |
| MathJax SVG çıktısı (tex-svg) | Tema değişiminde ve akordeon yüksekliği ölçümünde daha kararlı | 2026-07-16 |
| Çözüm soruyla birlikte değil, butonla açılıyor | Cevabı görerek "anladım" sanmak en yaygın çalışma hatası; önce deneme zorunlu hale getirildi | 2026-07-25 |
| Soru başlıkları veriye elle girilmedi, `duzMetin()` ile soru metninden türetiliyor | 62 sorunun tamamına elle başlık girmek gerekmesin; veri şeması değişmedi, mevcut ders dosyaları olduğu gibi çalışıyor | 2026-07-25 |
| Formül "bilinen" durumu ders bazlı localStorage dizisi (`dd-flash-KOD`) | İlerleme kayıtlarıyla aynı desen; yedekleme `dd-*` anahtarlarını zaten topladığı için ek iş gerekmedi | 2026-07-25 |
| Tema iki değil üç kademe: kagit / ilik / gece | Gündüz–gece ikilisi akşam çalışmasını karşılamıyordu; "koyu tema kadar karanlık istemiyorum ama ekran parlıyor" aralığı için ılık (düşük mavi ışık) tema eklendi. Eski light/dark kayıtları göçürülüyor | 2026-09-13 |
| Punto, satır genişliği ve hareket kullanıcı ayarı (`data-*` + CSS değişkeni) | Tek bir "doğru" punto yok: ekran uzaklığı, ışık ve yorgunluk gün içinde değişiyor. CSS değişkenine bağlanınca tek yerden bütün sayfayı sürüyor, JS'in ayrıca ölçü hesaplaması gerekmiyor | 2026-09-13 |
| Hover'da `translateY`/`brightness` yerine sessiz zemin değişimi | Göz, imlecin dolaştığı her yerde hareket yakalıyordu; uzun oturumda en çok yoran şey bu mikro hareketlerdi. Geri bildirim korundu, hareket atıldı | 2026-09-13 |
| Renkler tahmin edilmiyor, WCAG oranı hesaplanıyor (`kontrast.js`) | "Yumuşak" diye seçilen tonların beşi eşiğin altındaydı (en kötüsü 3.60:1) — gözle bakarak fark edilmiyor. Gövde AAA (≥7:1), ikincil ve vurgular AA (≥4.5:1) hedefi betikle sabitlendi | 2026-09-13 |
| MathJax tembel: formüller IntersectionObserver, metinler akordeon açılışında, hepsi bir kez | Açılışta 276 formülün hepsini işlemek sayfayı saniyelerce donduruyordu. `data-math-hazir` işareti, akordeonun ikinci açılışında tekrar işlemeyi de engelliyor | 2026-09-13 |
| Soru↔konu eşleşmesi başlıktan tahmin değil, veride `sorular[].konu` | Tahmin yanıltıcıydı: etiketleme yapılınca 14 konunun aslında hiç sorusu olmadığı ortaya çıktı. Etiket ayrıca konu→soru köprüsünü ve konu süzgecini mümkün kıldı | 2026-09-13 |
| Konu süzgeci tip/durum süzgeciyle VE'leniyor, onun yerine geçmiyor | "Bu konunun final soruları" gerçek bir çalışma isteği; süzgeçler birbirini sıfırlasaydı iki tıkta da istenen liste elde edilemezdi | 2026-09-13 |
| Arama indeksi ilk aramada kuruluyor (lazy) | 294 kayıt; açılış hızını etkilememesi için sayfa yüklenirken değil, ilk tuşta kuruluyor | 2026-07-25 |
| `?git=hedef` ile derin bağlantı: önce akordeon açılıyor, sonra kaydırılıyor | Ters sırada, açılan panel ve MathJax yerleşimi sayfa yüksekliğini değiştirip kaydırmayı kaçırıyordu (test sırasında görüldü) | 2026-07-25 |

---

## TODO (öncelik sırasına göre)

1. **Temaların gerçek cihazda görsel kontrolü.** Kağıt/Ilık/Gece hesapla doğrulandı
   (kontrast + jsdom), ama gerçek ekranda — özellikle iPhone'da, gece modunda ve
   düşük parlaklıkta — hiç bakılmadı.
2. Ders sayfasında "çalışma süresi" istatistiği (pomodoro seansları ders bazında kaydedilsin).
3. Yeni ders eklerken `index.html` + `course.html` içindeki script listesini elle güncellemek
   gerekiyor — tek bir `data/_index.js` listesinden dinamik yüklemeye geçilebilir
   (`sw.js` PRECACHE listesi de aynı derdi yaşıyor).
4. Formül çalışma modunda gerçek aralıklı tekrar (tarih bazlı: 1 gün / 3 gün / 1 hafta).
   Şu an "biliyorum" kalıcı işaret; zamanla unutma modellenmiyor.
5. Notlar şu an yalnızca konu bazlı — "bütün notlarım" görünümü ve notta arama eklenebilir.
6. `dokumanlar: []` hâlâ her derste boş; videolar ders bazında playlist, konuya bağlı değil
   (`videolar[].konu` yok). Konu etiketi artık sorularda var — aynı desen videolara da uygulanabilir.
7. Denetim betikleri (`kontrol.js`, `dom-test.js`, `kontrast.js`, `statik.js`) scratchpad'de
   kaldı; repoya bir `test/` klasörü olarak alınırsa her değişiklikte çalıştırılabilir.

### Kapatılan TODO'lar (2026-09-13, ikinci tur)
- ~~Ders sayfası ilk açılışta ağır (MathJax hepsini birden render ediyor)~~ → tembel render:
  formüller IntersectionObserver ile, konu/soru metinleri akordeon açılınca ve yalnız bir kez.
- ~~Soru havuzuna konu etiketi (`sorular[].konu`) ve "bu konunun soruları" filtresi~~ →
  134 sorunun tamamı etiketli; konu köprüsü + konu süzgeci (tip süzgeciyle VE'lenen) eklendi.

### Kapatılan TODO'lar (2026-09-13)
- ~~Konu metinleri sığ (EE3061/EE3016/STAT ~550 kr)~~ → tüm dersler 1990–3650 kr bandında.
- ~~40 konuda soru yok, EE3012'de 6 mükerrer soru~~ → 109 soru, her konu kapsanıyor.
- ~~Müfredat boşlukları (DFT, görüntü yöntemi, yansıma, MMSE, Karnaugh, cascode, senkron motor…)~~ → 9 yeni konu.

### Kapatılan TODO'lar (2026-09-11)
- ~~EE3014 içeriği zayıf (5 konu / 5 formül / 1 soru)~~ → 15 konu / 28 formül / 10 soru.
  EE3012 de aynı turda derinleştirildi; artık tüm dersler 11-17 konu, 21-28 formül, 9-14 soru bandında.
- ~~Otomatik yedek hatırlatıcısı~~ → 30 gün kuralı, 💾 düğmesinde uyarı noktası + panelde son yedek tarihi.

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
| Yeni ders eklenince `sw.js` PRECACHE listesine elle eklenmezse ders çevrimdışı açılmıyor | `data/YENI.js` ekle, script tag'i ekle, uçak modunda ana sayfadan derse gir | **Açık** (TODO #3 ile çözülecek) |
| GitHub Pages'te ders kartları görünmüyordu | Ana sayfayı Pages üzerinden aç, ızgara boştu | **Çözüldü** (2026-07-19, `DERS_SIRASI` fallback) |
| Ders sayfası ilk açılışta 1-3 sn donuyor (MathJax tüm konuları birden render ediyor) | 15 konuluk bir dersi aç, hemen kaydırmayı dene | **Çözüldü** (2026-09-13, tembel render) |
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
