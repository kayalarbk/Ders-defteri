/* ============================================================
   STAT2056 — Probability and Random Variables
   ------------------------------------------------------------
   Bu dosya SADECE bu derse aittir. İçerik eklemek için burayı düzenle.
   Alan açıklamaları için data/EE3061.js başlığına bak.

   Kapsam: Leon-Garcia / Bertsekas-Tsitsiklis temel alınarak bir
   dönemlik olasılık dersinin çekirdek konuları (EE odaklı).
   ============================================================ */

window.DERSLER = window.DERSLER || {};

window.DERSLER["STAT2056"] = {
  ad: "Probability and Random Variables",
  donem: "3. Sınıf · 1. Dönem",
  renk: "#F472B6",
  ozet: "Olasılık aksiyomları ve sayma; koşullu olasılık, toplam olasılık ve Bayes; bağımsızlık; ayrık ve sürekli rastgele değişkenler (PMF/PDF/CDF); önemli dağılımlar (Binom, Poisson, Üstel, Gauss); beklenen değer, varyans ve momentler; birleşik dağılımlar, kovaryans ve korelasyon; toplamlar ve konvolüsyon; MGF; Büyük Sayılar Yasası ve Merkezi Limit Teoremi; rastgele süreçlere giriş.",
  konular: [
    {
      baslik: "1. Olasılık Aksiyomları ve Örnek Uzay",
      icerik: `
        <p>Bir rastgele deneyin tüm sonuçları örnek uzay \\( S \\)'yi, sonuç alt kümeleri ise
        olayları oluşturur. Kolmogorov aksiyomları:</p>
        <ul>
          <li>\\( P(A)\\ge 0 \\)</li>
          <li>\\( P(S)=1 \\)</li>
          <li>Ayrık olaylar için \\( P(A\\cup B)=P(A)+P(B) \\)</li>
        </ul>
        <p>Sonuçlar: \\( P(\\overline{A})=1-P(A) \\), \\( P(\\emptyset)=0 \\) ve genel toplam kuralı:</p>
        \\[ P(A\\cup B)=P(A)+P(B)-P(A\\cap B) \\]
        <p>Eş olası sonuçlarda \\( P(A)=\\dfrac{|A|}{|S|} \\); bu yüzden sayma teknikleri gerekir.</p>`
    },
    {
      baslik: "2. Sayma ile Olasılık (Kombinatorik)",
      icerik: `
        <p>Eş olası uzaylarda olasılık = elverişli sonuç / toplam sonuç. Temel araçlar:</p>
        <ul>
          <li><b>Çarpma kuralı:</b> ardışık bağımsız seçimler çarpılır.</li>
          <li><b>Permütasyon:</b> \\( P(n,r)=\\dfrac{n!}{(n-r)!} \\) (sıra önemli).</li>
          <li><b>Kombinasyon:</b> \\( \\binom{n}{r}=\\dfrac{n!}{r!(n-r)!} \\) (sıra önemsiz).</li>
        </ul>
        <p>Örnek: 52'lik desteden 5 kart çekilirken belirli bir el olasılığı, uygun kombinasyonların
        \\( \\binom{52}{5} \\)'e bölünmesiyle bulunur. Kart, zar ve top-torba problemleri bu şablonla çözülür.</p>`
    },
    {
      baslik: "3. Koşullu Olasılık, Toplam Olasılık ve Bayes",
      icerik: `
        <p>Bir olay bilindiğinde diğerinin olasılığı:</p>
        \\[ P(A\\mid B)=\\frac{P(A\\cap B)}{P(B)} \\;\\Rightarrow\\; P(A\\cap B)=P(A\\mid B)P(B) \\]
        <p><b>Toplam olasılık teoremi</b> (\\( B_1,\\dots,B_n \\) örnek uzayı bölerse):</p>
        \\[ P(A)=\\sum_{i} P(A\\mid B_i)\\,P(B_i) \\]
        <p><b>Bayes teoremi</b> — nedeni sonuçtan geriye çıkarır:</p>
        \\[ P(B_i\\mid A)=\\frac{P(A\\mid B_i)P(B_i)}{\\sum_j P(A\\mid B_j)P(B_j)} \\]
        <p>Tıbbi test, alıcı hata olasılığı ve sinyal tespiti problemlerinin temelidir.</p>`
    },
    {
      baslik: "4. Bağımsızlık",
      icerik: `
        <p>İki olay <b>bağımsızdır</b> ⟺ birinin gerçekleşmesi diğerinin olasılığını değiştirmez:</p>
        \\[ P(A\\cap B)=P(A)\\,P(B) \\;\\Longleftrightarrow\\; P(A\\mid B)=P(A) \\]
        <p>Üç olayda karşılıklı bağımsızlık için ikişerli çarpımların yanı sıra
        \\( P(A\\cap B\\cap C)=P(A)P(B)P(C) \\) de gerekir.</p>
        <p><b>Bağımsızlık ≠ ayrıklık:</b> ayrık (bağdaşmaz) olaylar bağımlıdır (biri olursa diğeri olamaz).
        Bağımsız denemeler (bozuk para, iletim hatası) çarpma ile kolayca hesaplanır.</p>`
    },
    {
      baslik: "5. Ayrık Rastgele Değişkenler ve PMF",
      icerik: `
        <p>Rastgele değişken \\( X \\), sonuçları sayıya eşleyen fonksiyondur.
        Ayrık \\( X \\) için <b>olasılık kütle fonksiyonu (PMF)</b>:</p>
        \\[ p_X(x)=P(X=x), \\qquad \\sum_x p_X(x)=1 \\]
        <p><b>Kümülatif dağılım (CDF):</b> \\( F_X(x)=P(X\\le x) \\) — ayrıkta basamak fonksiyonudur.</p>
        <p>Beklenen değer ve varyans PMF'ten hesaplanır:</p>
        \\[ E[X]=\\sum_x x\\,p_X(x), \\qquad \\operatorname{Var}(X)=\\sum_x (x-\\mu)^2 p_X(x) \\]`
    },
    {
      baslik: "6. Önemli Ayrık Dağılımlar",
      icerik: `
        <ul>
          <li><b>Bernoulli(p):</b> tek deneme; \\( E=p \\), \\( \\operatorname{Var}=p(1-p) \\).</li>
          <li><b>Binom(n,p):</b> \\( n \\) bağımsız denemede başarı sayısı.
          \\( P(X=k)=\\binom{n}{k}p^k(1-p)^{n-k} \\), \\( E=np \\), \\( \\operatorname{Var}=np(1-p) \\).</li>
          <li><b>Geometrik(p):</b> ilk başarıya kadar deneme sayısı.
          \\( P(X=k)=(1-p)^{k-1}p \\), \\( E=1/p \\). Belleksizdir.</li>
          <li><b>Poisson(λ):</b> sabit oranda seyrek olayların sayısı.
          \\( P(X=k)=\\dfrac{\\lambda^k e^{-\\lambda}}{k!} \\), \\( E=\\operatorname{Var}=\\lambda \\).</li>
        </ul>
        <p>Poisson, büyük \\(n\\) ve küçük \\(p\\)'de Binom'un yaklaşık halidir (\\( \\lambda=np \\)); paket varışı,
        foton sayımı ve arıza modellemede kullanılır.</p>`
    },
    {
      baslik: "7. Sürekli Rastgele Değişkenler: PDF ve CDF",
      icerik: `
        <p>Sürekli \\( X \\) <b>olasılık yoğunluk fonksiyonu (PDF)</b> \\( f_X(x) \\) ile tanımlanır.
        Tek bir noktanın olasılığı sıfırdır; olasılık alan olarak okunur:</p>
        \\[ P(a\\le X\\le b)=\\int_a^b f_X(x)\\,dx, \\qquad \\int_{-\\infty}^{\\infty} f_X(x)\\,dx=1 \\]
        <p><b>CDF ile ilişki:</b></p>
        \\[ F_X(x)=P(X\\le x)=\\int_{-\\infty}^{x} f_X(t)\\,dt, \\qquad f_X(x)=\\frac{dF_X(x)}{dx} \\]
        <p>CDF azalmayan, sağdan sürekli; \\( F(-\\infty)=0 \\), \\( F(\\infty)=1 \\)'dir.</p>`
    },
    {
      baslik: "8. Önemli Sürekli Dağılımlar",
      icerik: `
        <ul>
          <li><b>Üniform \\( U(a,b) \\):</b> \\( f=\\dfrac{1}{b-a} \\), \\( E=\\dfrac{a+b}{2} \\),
          \\( \\operatorname{Var}=\\dfrac{(b-a)^2}{12} \\).</li>
          <li><b>Üstel(λ):</b> \\( f=\\lambda e^{-\\lambda x},\\; x\\ge0 \\), \\( E=1/\\lambda \\),
          \\( \\operatorname{Var}=1/\\lambda^2 \\). <b>Belleksizdir</b> — bekleme sürelerini modeller.</li>
          <li><b>Gauss (Normal) \\( N(\\mu,\\sigma^2) \\):</b></li>
        </ul>
        \\[ f_X(x)=\\frac{1}{\\sigma\\sqrt{2\\pi}}\\exp\\!\\Big(-\\frac{(x-\\mu)^2}{2\\sigma^2}\\Big) \\]
        <p>Gauss dağılımı EE'de <b>termal gürültünün</b> temel modelidir. Standartlaştırma
        \\( Z=\\dfrac{X-\\mu}{\\sigma}\\sim N(0,1) \\) ile Z-tablosu (\\( \\Phi \\)) kullanılır.</p>`
    },
    {
      baslik: "9. Beklenen Değer, Varyans ve Momentler",
      icerik: `
        <p>Sürekli değişken için beklenen değer ve varyans:</p>
        \\[ E[X]=\\int_{-\\infty}^{\\infty} x f_X(x)\\,dx, \\qquad
           \\operatorname{Var}(X)=E[X^2]-\\big(E[X]\\big)^2 \\]
        <p><b>Doğrusallık</b> (bağımsızlık gerektirmez): \\( E[aX+b]=aE[X]+b \\),
        \\( \\operatorname{Var}(aX+b)=a^2\\operatorname{Var}(X) \\).</p>
        <p>Standart sapma \\( \\sigma=\\sqrt{\\operatorname{Var}(X)} \\). \\( k \\). moment \\( E[X^k] \\).
        <b>Chebyshev eşitsizliği</b> yayılımı sınırlar:</p>
        \\[ P\\big(|X-\\mu|\\ge k\\sigma\\big)\\le \\frac{1}{k^2} \\]`
    },
    {
      baslik: "10. Rastgele Değişkenin Fonksiyonları",
      icerik: `
        <p>\\( Y=g(X) \\) yeni bir rastgele değişkendir. Beklenen değeri, \\(Y\\)'nin dağılımını bulmadan
        doğrudan hesaplanabilir (<b>LOTUS</b> — bilinçsiz istatistikçi yasası):</p>
        \\[ E[g(X)]=\\int_{-\\infty}^{\\infty} g(x)\\,f_X(x)\\,dx \\]
        <p><b>PDF dönüşümü</b> (monoton \\(g\\) için):</p>
        \\[ f_Y(y)=f_X\\big(g^{-1}(y)\\big)\\left|\\frac{dx}{dy}\\right| \\]
        <p>Örnek: \\( Y=aX+b \\) için \\( f_Y(y)=\\dfrac{1}{|a|}f_X\\!\\big(\\tfrac{y-b}{a}\\big) \\).
        Sinyal işlemede giriş gürültüsünün bir sistemden geçişini modeller.</p>`
    },
    {
      baslik: "11. Birleşik, Marjinal ve Koşullu Dağılımlar",
      icerik: `
        <p>İki değişken birlikte \\( f_{X,Y}(x,y) \\) ile tanımlanır.
        <b>Marjinaller</b> diğer değişken üzerinden integralle bulunur:</p>
        \\[ f_X(x)=\\int_{-\\infty}^{\\infty} f_{X,Y}(x,y)\\,dy \\]
        <p><b>Koşullu yoğunluk:</b> \\( f_{Y\\mid X}(y\\mid x)=\\dfrac{f_{X,Y}(x,y)}{f_X(x)} \\).</p>
        <p><b>Bağımsızlık:</b> \\( f_{X,Y}(x,y)=f_X(x)f_Y(y) \\) her \\( x,y \\) için sağlanmalıdır.
        Bağımsızsa birleşik, marjinallerin çarpımına eşittir.</p>`
    },
    {
      baslik: "12. Kovaryans ve Korelasyon",
      icerik: `
        <p>İki değişkenin birlikte değişimini ölçer:</p>
        \\[ \\operatorname{Cov}(X,Y)=E[XY]-E[X]E[Y] \\]
        <p><b>Korelasyon katsayısı</b> (\\(-1\\le\\rho\\le1\\)):</p>
        \\[ \\rho_{X,Y}=\\frac{\\operatorname{Cov}(X,Y)}{\\sigma_X\\,\\sigma_Y} \\]
        <p>Toplamın varyansı:</p>
        \\[ \\operatorname{Var}(X+Y)=\\operatorname{Var}(X)+\\operatorname{Var}(Y)+2\\operatorname{Cov}(X,Y) \\]
        <p><b>Bağımsız ⇒ ilişkisiz</b> (\\( \\rho=0 \\)); ama tersi her zaman doğru değildir.</p>`
    },
    {
      baslik: "13. Rastgele Değişkenlerin Toplamı ve Konvolüsyon",
      icerik: `
        <p>Bağımsız \\( X \\) ve \\( Y \\) için toplam \\( Z=X+Y \\)'nin yoğunluğu <b>konvolüsyonla</b> bulunur:</p>
        \\[ f_Z(z)=\\int_{-\\infty}^{\\infty} f_X(x)\\,f_Y(z-x)\\,dx \\]
        <p>Beklenen değer her zaman toplanır: \\( E[X+Y]=E[X]+E[Y] \\).
        <b>Bağımsızsa</b> varyanslar da toplanır: \\( \\operatorname{Var}(X+Y)=\\operatorname{Var}(X)+\\operatorname{Var}(Y) \\).</p>
        <p>Üreme (reproductive) özelliği: bağımsız Gauss'ların toplamı yine Gauss; bağımsız Poisson'ların toplamı
        yine Poisson (\\( \\lambda=\\lambda_1+\\lambda_2 \\)).</p>`
    },
    {
      baslik: "14. Moment Üreten Fonksiyonlar (MGF)",
      icerik: `
        <p>MGF, momentleri türev alarak üretir ve toplamları kolaylaştırır:</p>
        \\[ M_X(t)=E\\big[e^{tX}\\big], \\qquad E[X^n]=\\left.\\frac{d^n M_X(t)}{dt^n}\\right|_{t=0} \\]
        <p><b>Bağımsız toplam:</b> \\( M_{X+Y}(t)=M_X(t)\\,M_Y(t) \\) — konvolüsyon yerine çarpma.</p>
        <p>MGF bir dağılımı benzersiz belirler; bu yüzden toplamların dağılımını tanımada güçlü bir araçtır.
        (EE'de karakteristik fonksiyon \\( \\Phi_X(\\omega)=E[e^{j\\omega X}] \\), yoğunluğun Fourier dönüşümüdür.)</p>`
    },
    {
      baslik: "15. Büyük Sayılar Yasası ve Merkezi Limit Teoremi",
      icerik: `
        <p><b>Büyük Sayılar Yasası (BSY):</b> \\( n\\to\\infty \\) iken örnek ortalaması gerçek ortalamaya yakınsar:</p>
        \\[ \\overline{X}_n=\\frac{1}{n}\\sum_{i=1}^{n} X_i \\;\\longrightarrow\\; \\mu \\]
        <p><b>Merkezi Limit Teoremi (MLT):</b> bağımsız, aynı dağılımlı değişkenlerin toplamı/ortalaması,
        dağılımları ne olursa olsun, büyük \\(n\\)'de Gauss'a yaklaşır:</p>
        \\[ Z=\\frac{\\overline{X}_n-\\mu}{\\sigma/\\sqrt{n}} \\;\\xrightarrow{d}\\; N(0,1) \\]
        <p>MLT, gürültü toplamlarının neden Gauss olduğunu açıklar ve tüm örnekleme/tahmin
        teorisinin temelidir. Örnek ortalamasının standart hatası \\( \\sigma/\\sqrt{n} \\)'dir.</p>`
    },
    {
      baslik: "16. Rastgele Süreçlere Giriş",
      icerik: `
        <p><b>Rastgele süreç</b> \\( X(t) \\), her \\( t \\) anında bir rastgele değişken veren zaman
        fonksiyonudur (gürültü, alınan sinyal). Temel istatistikler:</p>
        <ul>
          <li><b>Ortalama fonksiyonu:</b> \\( \\mu_X(t)=E[X(t)] \\)</li>
          <li><b>Otokorelasyon:</b> \\( R_X(t_1,t_2)=E[X(t_1)X(t_2)] \\)</li>
        </ul>
        <p><b>Geniş anlamda durağan (WSS):</b> ortalama sabit ve \\( R_X \\) yalnızca gecikme \\( \\tau=t_2-t_1 \\)'e bağlıysa.
        WSS süreçte <b>güç spektral yoğunluğu (PSD)</b>, otokorelasyonun Fourier dönüşümüdür
        (Wiener–Khinchin). <b>Beyaz gürültü</b> düz PSD'ye sahiptir; haberleşme ve filtre tasarımının çekirdeğidir.</p>`
    }
  ],
  formuller: [
    { ad: "Genel Toplam Kuralı", formul: `\\( P(A\\cup B)=P(A)+P(B)-P(A\\cap B) \\)`, aciklama: "Kesişimi bir kez say." },
    { ad: "Koşullu Olasılık", formul: `\\( P(A\\mid B)=\\dfrac{P(A\\cap B)}{P(B)} \\)`, aciklama: "B verildiğinde A olasılığı." },
    { ad: "Toplam Olasılık", formul: `\\( P(A)=\\sum_i P(A\\mid B_i)P(B_i) \\)`, aciklama: "Örnek uzayı bölerek hesap." },
    { ad: "Bayes Teoremi", formul: `\\( P(B_i\\mid A)=\\dfrac{P(A\\mid B_i)P(B_i)}{\\sum_j P(A\\mid B_j)P(B_j)} \\)`, aciklama: "Koşullu olasılığı ters çevirme." },
    { ad: "Bağımsızlık", formul: `\\( P(A\\cap B)=P(A)P(B) \\)`, aciklama: "Olaylar birbirini etkilemez." },
    { ad: "Binom PMF", formul: `\\( P(X=k)=\\binom{n}{k}p^k(1-p)^{n-k} \\)`, aciklama: "E=np, Var=np(1-p)." },
    { ad: "Poisson PMF", formul: `\\( P(X=k)=\\dfrac{\\lambda^k e^{-\\lambda}}{k!} \\)`, aciklama: "E=Var=λ." },
    { ad: "Geometrik PMF", formul: `\\( P(X=k)=(1-p)^{k-1}p \\)`, aciklama: "İlk başarı; E=1/p." },
    { ad: "Üstel PDF", formul: `\\( f_X(x)=\\lambda e^{-\\lambda x},\\; x\\ge0 \\)`, aciklama: "E=1/λ; belleksiz." },
    { ad: "Gauss (Normal) PDF", formul: `\\( f_X(x)=\\dfrac{1}{\\sigma\\sqrt{2\\pi}}e^{-(x-\\mu)^2/2\\sigma^2} \\)`, aciklama: "Gürültünün temel modeli." },
    { ad: "Üniform Ort./Var.", formul: `\\( E=\\dfrac{a+b}{2},\\; \\operatorname{Var}=\\dfrac{(b-a)^2}{12} \\)`, aciklama: "U(a,b) dağılımı." },
    { ad: "Beklenen Değer (Sürekli)", formul: `\\( E[X]=\\int_{-\\infty}^{\\infty}x f_X(x)\\,dx \\)`, aciklama: "Dağılımın ortalaması." },
    { ad: "Varyans", formul: `\\( \\operatorname{Var}(X)=E[X^2]-(E[X])^2 \\)`, aciklama: "Yayılım ölçüsü." },
    { ad: "Doğrusal Dönüşüm", formul: `\\( E[aX+b]=aE[X]+b,\\; \\operatorname{Var}(aX+b)=a^2\\operatorname{Var}(X) \\)`, aciklama: "Ölçek/kaydırma etkisi." },
    { ad: "LOTUS", formul: `\\( E[g(X)]=\\int g(x)f_X(x)\\,dx \\)`, aciklama: "Fonksiyonun beklenen değeri." },
    { ad: "Standartlaştırma", formul: `\\( Z=\\dfrac{X-\\mu}{\\sigma}\\sim N(0,1) \\)`, aciklama: "Z-tablosu (Φ) kullanımı." },
    { ad: "Chebyshev Eşitsizliği", formul: `\\( P(|X-\\mu|\\ge k\\sigma)\\le \\dfrac{1}{k^2} \\)`, aciklama: "Dağılımdan bağımsız sınır." },
    { ad: "Kovaryans", formul: `\\( \\operatorname{Cov}(X,Y)=E[XY]-E[X]E[Y] \\)`, aciklama: "Birlikte değişim." },
    { ad: "Korelasyon Katsayısı", formul: `\\( \\rho=\\dfrac{\\operatorname{Cov}(X,Y)}{\\sigma_X\\sigma_Y} \\)`, aciklama: "−1 ile 1 arası." },
    { ad: "Toplamın Varyansı", formul: `\\( \\operatorname{Var}(X+Y)=\\operatorname{Var}X+\\operatorname{Var}Y+2\\operatorname{Cov}(X,Y) \\)`, aciklama: "Bağımsızsa Cov=0." },
    { ad: "Konvolüsyon", formul: `\\( f_Z(z)=\\int f_X(x)f_Y(z-x)\\,dx \\)`, aciklama: "Bağımsız toplamın yoğunluğu." },
    { ad: "MGF", formul: `\\( M_X(t)=E[e^{tX}] \\)`, aciklama: "Momentleri üretir; toplamda çarpılır." },
    { ad: "Merkezi Limit Teoremi", formul: `\\( \\dfrac{\\overline{X}_n-\\mu}{\\sigma/\\sqrt{n}}\\to N(0,1) \\)`, aciklama: "Büyük n'de Gauss'a yakınsama." },
    { ad: "Otokorelasyon (WSS)", formul: `\\( R_X(\\tau)=E[X(t)X(t+\\tau)] \\)`, aciklama: "PSD'nin ters Fourier'i." }
  ],
  galeri: [],
  dokumanlar: [],
  videolar: [
    { baslik: "MIT — Olasılık Modelleri ve Aksiyomlar (Tsitsiklis, Ders 1)", youtube: "j9WZyLZCBzs" },
    { baslik: "MIT — Sayma (Counting, Ders 4)", youtube: "6oV3pKLgW2I" },
    { baslik: "MIT RES.6-012 Introduction to Probability (Tam Kurs Playlist)", playlist: "PLUl4u3cNGP60hI9ATjSFgLZpbNJ7myAg6" }
  ],
  linkler: [
    { ad: "MIT OCW 6.041 — Applied Probability", url: "https://ocw.mit.edu/courses/6-041-probabilistic-systems-analysis-and-applied-probability-fall-2010/", aciklama: "Ders notları + çözümlü problemler" },
    { ad: "Seeing Theory", url: "https://seeing-theory.brown.edu/", aciklama: "Olasılığı görselleştiren interaktif site" },
    { ad: "StatTrek", url: "https://stattrek.com/", aciklama: "Dağılım tabloları, Z-tablosu ve hesaplayıcılar" },
    { ad: "Desmos", url: "https://www.desmos.com/calculator", aciklama: "PDF/CDF grafiklerini çiz" }
  ],
  sorular: [
    {
      tip: "vize",
      soru: `<p>Hilesiz bir zar atılıyor. \\( X \\) gelen sayı ise \\( E[X] \\) ve
             \\( \\operatorname{Var}(X) \\) nedir?</p>`,
      cozum: `
        \\[ E[X]=\\frac{1+2+3+4+5+6}{6}=3.5 \\]
        \\[ E[X^2]=\\frac{1+4+9+16+25+36}{6}=\\frac{91}{6} \\]
        \\[ \\operatorname{Var}(X)=\\frac{91}{6}-3.5^2=\\frac{35}{12}\\approx 2.92 \\]`
    },
    {
      tip: "vize",
      soru: `<p>Bir hastalık nüfusun %1'inde görülüyor. Test hastaları %99 doğru saptıyor
             ama sağlamlarda %5 yanlış pozitif veriyor. Testi pozitif çıkan birinin gerçekten
             hasta olma olasılığı nedir?</p>`,
      cozum: `
        <p>\\( P(H)=0.01 \\), \\( P(+\\mid H)=0.99 \\), \\( P(+\\mid \\overline{H})=0.05 \\).
        Toplam olasılık:</p>
        \\[ P(+)=0.99(0.01)+0.05(0.99)=0.0099+0.0495=0.0594 \\]
        \\[ P(H\\mid+)=\\frac{0.0099}{0.0594}\\approx 0.167 \\]
        <p>Yani pozitif testte bile gerçek hasta olma olasılığı yalnızca <b>%16.7</b> — düşük prevalansın etkisi.</p>`
    },
    {
      tip: "vize",
      soru: `<p>Bir bileşen bağımsız olarak 0.1 olasılıkla arızalanıyor. 5 bileşenden
             (a) tam 1'inin arızalanma, (b) en az 1'inin arızalanma olasılığı nedir?</p>`,
      cozum: `
        <p>\\( X\\sim \\text{Binom}(5,0.1) \\).</p>
        \\[ P(X=1)=\\binom{5}{1}(0.1)(0.9)^4=5(0.1)(0.6561)=0.328 \\]
        \\[ P(X\\ge1)=1-P(X=0)=1-(0.9)^5=1-0.590=0.410 \\]`
    },
    {
      tip: "vize",
      soru: `<p>Bir çağrı merkezine dakikada ortalama \\( \\lambda=3 \\) çağrı geliyor (Poisson).
             Bir dakikada tam 5 çağrı gelme olasılığı nedir?</p>`,
      cozum: `
        \\[ P(X=5)=\\frac{3^5 e^{-3}}{5!}=\\frac{243\\,(0.0498)}{120}\\approx 0.101 \\]`
    },
    {
      tip: "vize",
      soru: `<p>\\( f_X(x)=cx^2 \\), \\( 0\\le x\\le1 \\) (diğer yerde 0). (a) \\( c \\)'yi bulun,
             (b) \\( E[X] \\), (c) \\( P(X>0.5) \\).</p>`,
      cozum: `
        <p>(a) \\( \\int_0^1 cx^2 dx=\\dfrac{c}{3}=1\\Rightarrow c=3 \\).</p>
        <p>(b) \\( E[X]=\\int_0^1 x\\,(3x^2)dx=\\dfrac{3}{4}=0.75 \\).</p>
        <p>(c) \\( P(X>0.5)=\\int_{0.5}^1 3x^2 dx=1-0.125=0.875 \\).</p>`
    },
    {
      tip: "final",
      soru: `<p>Bir cihazın ömrü \\( \\lambda=1/1000 \\) parametreli üstel dağılımlıdır (saat).
             (a) 1500 saatten fazla dayanma olasılığı, (b) 500 saat çalışmışken 1000 saat daha
             dayanma olasılığı nedir?</p>`,
      cozum: `
        <p>(a) \\( P(X>1500)=e^{-1500/1000}=e^{-1.5}\\approx 0.223 \\).</p>
        <p>(b) Üstel <b>belleksizdir</b>: \\( P(X>1500\\mid X>500)=P(X>1000)=e^{-1}\\approx 0.368 \\).</p>`
    },
    {
      tip: "final",
      soru: `<p>Bir sinyal gerilimi \\( X\\sim N(\\mu=100,\\;\\sigma=15) \\). \\( P(X>130) \\) nedir?
             (\\( \\Phi(2)=0.9772 \\))</p>`,
      cozum: `
        <p>Standartlaştır: \\( Z=\\dfrac{130-100}{15}=2 \\).</p>
        \\[ P(X>130)=P(Z>2)=1-\\Phi(2)=1-0.9772=0.0228 \\]
        <p>Yani yaklaşık <b>%2.28</b>.</p>`
    },
    {
      tip: "final",
      soru: `<p>\\( \\operatorname{Var}(X)=4 \\), \\( \\operatorname{Var}(Y)=9 \\),
             \\( \\operatorname{Cov}(X,Y)=3 \\). (a) korelasyon katsayısı, (b) \\( \\operatorname{Var}(X+Y) \\)?</p>`,
      cozum: `
        <p>(a) \\( \\rho=\\dfrac{\\operatorname{Cov}(X,Y)}{\\sigma_X\\sigma_Y}=\\dfrac{3}{2\\cdot3}=0.5 \\).</p>
        <p>(b) \\( \\operatorname{Var}(X+Y)=4+9+2(3)=19 \\).</p>`
    },
    {
      tip: "final",
      soru: `<p>Ortalaması 5, varyansı 4 olan bağımsız 100 ölçümün örnek ortalaması \\( \\overline{X} \\).
             \\( P(\\overline{X}>5.2) \\) yaklaşık kaçtır? (\\( \\Phi(1)=0.8413 \\))</p>`,
      cozum: `
        <p>MLT ile \\( \\overline{X}\\approx N\\!\\big(5,\\;\\sigma^2/n\\big) \\), standart hata
        \\( \\dfrac{\\sigma}{\\sqrt{n}}=\\dfrac{2}{10}=0.2 \\).</p>
        \\[ Z=\\frac{5.2-5}{0.2}=1 \\Rightarrow P(\\overline{X}>5.2)=1-\\Phi(1)=0.1587 \\]`
    },
    {
      tip: "final",
      soru: `<p>\\( X\\sim U(2,8) \\). \\( E[X] \\), \\( \\operatorname{Var}(X) \\) ve \\( P(3\\le X\\le 5) \\) nedir?</p>`,
      cozum: `
        <p>\\( E[X]=\\dfrac{2+8}{2}=5 \\), \\( \\operatorname{Var}(X)=\\dfrac{(8-2)^2}{12}=3 \\).</p>
        <p>Yoğunluk \\( \\dfrac{1}{6} \\) sabit olduğundan:</p>
        \\[ P(3\\le X\\le5)=\\frac{5-3}{8-2}=\\frac{2}{6}=\\frac{1}{3} \\]`
    },
    {
      tip: "final",
      soru: `<p>Ortalaması \\( \\mu \\), sapması \\( \\sigma \\) olan herhangi bir dağılımda, değerin
             ortalamadan \\( 2\\sigma \\)'dan fazla sapma olasılığına Chebyshev üst sınırı nedir?</p>`,
      cozum: `
        \\[ P(|X-\\mu|\\ge 2\\sigma)\\le\\frac{1}{2^2}=\\frac{1}{4}=0.25 \\]
        <p>Dağılım bilinmese bile geçerli (Gauss'ta gerçek değer ~0.046'dır; Chebyshev gevşek ama evrensel sınırdır).</p>`
    }
  ]
};
