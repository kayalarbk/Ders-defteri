/* ============================================================
   EE3061 — Signals and Systems
   ------------------------------------------------------------
   Bu dosya SADECE bu derse aittir. İçerik eklemek için burayı düzenle.

   Yapı:
     ad, donem, renk, ozet,
     konular:    [ { baslik, icerik(HTML) } ],
     formuller:  [ { ad, formul, aciklama } ],
     galeri:     [ { src, baslik } ],          // src: tam URL önerilir
     dokumanlar: [ { ad, dosya, tur } ],        // dosya: tam URL önerilir
     videolar:   [ { baslik, youtube } | { baslik, playlist } ],
     linkler:    [ { ad, url, aciklama } ],
     sorular:    [ { soru(HTML), cozum(HTML), tip } ]   // tip: 'vize' | 'final'

   LaTeX:  satır içi  \( ... \)  |  blok  \[ ... \]  veya  $$ ... $$
   Görsel/PDF için tam URL kullan (repo düz yapıda olduğundan).
   ============================================================ */

window.DERSLER = window.DERSLER || {};

window.DERSLER["EE3061"] = {
  ad: "Signals and Systems",
  donem: "3. Sınıf · 1. Dönem",
  renk: "#4FD1C5",
  ozet: "Sürekli/ayrık zaman sinyalleri ve sistem özellikleri; temel sinyaller; LTI sistemler ve konvolüsyon; Fourier serileri ve Fourier dönüşümü (özellikleriyle); frekans yanıtı ve filtreleme; DTFT; örnekleme ve örtüşme; Laplace ve z dönüşümleri, ROC, kutup-sıfır ve kararlılık.",
  konular: [
    {
      baslik: "1. Sinyaller ve Sistemlere Giriş (CT & DT)",
      icerik: `
        <p>Sinyaller sürekli zaman \\( x(t) \\) ve ayrık zaman \\( x[n] \\) olarak ikiye ayrılır.
        Temel işlemler: zaman kaydırma \\( x(t-t_0) \\), ölçekleme \\( x(at) \\) ve yansıtma \\( x(-t) \\).</p>
        <ul>
          <li><b>Periyodiklik:</b> \\( x(t)=x(t+T) \\); ayrıkta \\( x[n]=x[n+N] \\).</li>
          <li><b>Enerji / Güç sinyalleri:</b> \\( E=\\int|x(t)|^2 dt \\) sonluysa enerji,
          \\( P=\\lim\\frac{1}{T}\\int|x|^2 dt \\) sonluysa güç sinyalidir.</li>
          <li><b>Tek/çift ayrıştırma:</b> \\( x(t)=x_{\\text{çift}}(t)+x_{\\text{tek}}(t) \\).</li>
        </ul>
        <p>Dikkat: \\( x[n] \\) ayrık üstelinde periyodiklik için \\( \\omega_0/2\\pi \\) rasyonel olmalıdır.</p>`
    },
    {
      baslik: "2. Temel Sinyaller",
      icerik: `
        <p>Çözümlemenin yapı taşları:</p>
        <ul>
          <li><b>Birim dürtü \\( \\delta(t) \\):</b> ayıklama (sifting) özelliği
          \\( \\int x(t)\\delta(t-t_0)dt=x(t_0) \\). Ayrıkta \\( \\delta[n] \\).</li>
          <li><b>Birim basamak \\( u(t) \\):</b> \\( \\dfrac{du(t)}{dt}=\\delta(t) \\), \\( u(t)=\\int_{-\\infty}^{t}\\delta(\\tau)d\\tau \\).</li>
          <li><b>Üstel / kompleks üstel:</b> \\( e^{st} \\), \\( e^{j\\omega_0 t} \\) — LTI sistemlerin özfonksiyonlarıdır.</li>
          <li><b>Sinüzoidal:</b> Euler ile \\( e^{j\\omega_0 t}=\\cos\\omega_0 t+j\\sin\\omega_0 t \\).</li>
        </ul>`
    },
    {
      baslik: "3. Sistem Özellikleri",
      icerik: `
        <p>Bir sistemi analiz etmeden önce özellikleri belirlenir:</p>
        <ul>
          <li><b>Doğrusallık:</b> üst üste binme (superposition):
          \\( T\\{a x_1+b x_2\\}=a\\,T\\{x_1\\}+b\\,T\\{x_2\\} \\).</li>
          <li><b>Zamanla değişmezlik (TI):</b> girişin kaydırılması çıkışı aynı kadar kaydırır.</li>
          <li><b>Nedensellik:</b> çıkış yalnızca şimdiki ve geçmiş girişe bağlıdır.</li>
          <li><b>Kararlılık (BIBO):</b> sınırlı giriş → sınırlı çıkış.</li>
          <li><b>Bellek / tersinirlik:</b> anlık mı, geri kazanılabilir mi.</li>
        </ul>
        <p><b>Doğrusal + Zamanla Değişmez = LTI</b>: dersin merkezindeki sistem sınıfıdır.</p>`
    },
    {
      baslik: "4. LTI Sistemler ve Konvolüsyon",
      icerik: `
        <p>Bir LTI sistem, dürtü yanıtı \\( h(t) \\) ile <b>tamamen</b> tanımlanır.
        Çıkış, giriş ile dürtü yanıtının konvolüsyonudur:</p>
        \\[ y(t) = x(t) * h(t) = \\int_{-\\infty}^{\\infty} x(\\tau)\\,h(t-\\tau)\\,d\\tau \\]
        <p>Ayrık zamanda toplam biçiminde:</p>
        \\[ y[n]=x[n]*h[n]=\\sum_{k=-\\infty}^{\\infty} x[k]\\,h[n-k] \\]
        <p>Konvolüsyon değişmeli, birleşmeli (seri bağlantı) ve dağılmalıdır (paralel bağlantı).
        \\( x(t)*\\delta(t)=x(t) \\) (dürtü birim elemandır).</p>`
    },
    {
      baslik: "5. LTI Özellikleri: Nedensellik ve Kararlılık",
      icerik: `
        <p>LTI sistemin özellikleri doğrudan \\( h(t) \\)'den okunur:</p>
        <ul>
          <li><b>Nedensellik:</b> \\( h(t)=0,\\; t<0 \\) (ayrıkta \\( h[n]=0,\\; n<0 \\)).</li>
          <li><b>BIBO kararlılık:</b> dürtü yanıtı mutlak integrallenebilir/toplanabilir olmalıdır:</li>
        </ul>
        \\[ \\int_{-\\infty}^{\\infty}|h(t)|\\,dt<\\infty \\qquad \\Big(\\sum_n |h[n]|<\\infty\\Big) \\]
        <p><b>Özfonksiyon özelliği:</b> \\( e^{st} \\) girişine LTI sistemin yanıtı
        \\( H(s)e^{st} \\)'dir; burada \\( H(s) \\) sistem fonksiyonudur. Bu özellik dönüşüm yöntemlerinin temelidir.</p>`
    },
    {
      baslik: "6. Fourier Serileri (Periyodik Sinyaller)",
      icerik: `
        <p>Periyodik \\( x(t) \\) (temel frekans \\( \\omega_0=2\\pi/T \\)) harmoniklerin toplamıdır
        (üstel biçim):</p>
        \\[ x(t)=\\sum_{k=-\\infty}^{\\infty} a_k e^{jk\\omega_0 t}, \\qquad
           a_k=\\frac{1}{T}\\int_{T} x(t)e^{-jk\\omega_0 t}\\,dt \\]
        <p><b>Dirichlet koşulları</b> yakınsamayı garanti eder. <b>Parseval (güç):</b></p>
        \\[ \\frac{1}{T}\\int_T |x(t)|^2 dt=\\sum_{k=-\\infty}^{\\infty}|a_k|^2 \\]
        <p>LTI sistemden geçen periyodik sinyalin \\(k\\). harmoniği \\( H(jk\\omega_0) \\) ile ölçeklenir.</p>`
    },
    {
      baslik: "7. Sürekli Zaman Fourier Dönüşümü (CTFT)",
      icerik: `
        <p>Aperiyodik sinyaller sürekli frekans spektrumuna ayrılır:</p>
        \\[ X(j\\omega) = \\int_{-\\infty}^{\\infty} x(t) e^{-j\\omega t} \\, dt \\]
        <p>Ters dönüşüm (sentez):</p>
        \\[ x(t) = \\frac{1}{2\\pi} \\int_{-\\infty}^{\\infty} X(j\\omega) e^{j\\omega t} \\, d\\omega \\]
        <p>Sık kullanılan çiftler: \\( \\delta(t)\\leftrightarrow 1 \\), \\( 1\\leftrightarrow 2\\pi\\delta(\\omega) \\),
        \\( e^{-at}u(t)\\leftrightarrow\\dfrac{1}{a+j\\omega} \\),
        dikdörtgen darbe \\( \\leftrightarrow \\) sinc.</p>`
    },
    {
      baslik: "8. Fourier Dönüşümü Özellikleri",
      icerik: `
        <p>Analizleri kısaltan temel özellikler:</p>
        <ul>
          <li><b>Doğrusallık:</b> \\( ax_1+bx_2\\leftrightarrow aX_1+bX_2 \\)</li>
          <li><b>Zaman kaydırma:</b> \\( x(t-t_0)\\leftrightarrow e^{-j\\omega t_0}X(j\\omega) \\)</li>
          <li><b>Frekans kaydırma (modülasyon):</b> \\( e^{j\\omega_0 t}x(t)\\leftrightarrow X(j(\\omega-\\omega_0)) \\)</li>
          <li><b>Ölçekleme:</b> \\( x(at)\\leftrightarrow\\dfrac{1}{|a|}X\\!\\big(\\tfrac{j\\omega}{a}\\big) \\)</li>
          <li><b>Türev:</b> \\( \\dfrac{dx}{dt}\\leftrightarrow j\\omega X(j\\omega) \\)</li>
          <li><b>Konvolüsyon ↔ çarpma:</b> \\( x*h\\leftrightarrow X\\cdot H \\); \\( x\\cdot h\\leftrightarrow\\frac{1}{2\\pi}X*H \\)</li>
        </ul>
        \\[ \\text{Parseval:}\\quad \\int_{-\\infty}^{\\infty}|x(t)|^2 dt=\\frac{1}{2\\pi}\\int_{-\\infty}^{\\infty}|X(j\\omega)|^2 d\\omega \\]`
    },
    {
      baslik: "9. Frekans Yanıtı ve Filtreleme",
      icerik: `
        <p>Bir LTI sistemin <b>frekans yanıtı</b>, dürtü yanıtının Fourier dönüşümüdür:</p>
        \\[ Y(j\\omega)=H(j\\omega)X(j\\omega), \\qquad H(j\\omega)=|H(j\\omega)|\\,e^{j\\angle H(j\\omega)} \\]
        <p>\\( |H(j\\omega)| \\) genlik yanıtı, \\( \\angle H(j\\omega) \\) faz yanıtıdır.
        İdeal filtreler geçirme bandında sabit kazanç, durdurma bandında sıfır kazanç verir:</p>
        <ul>
          <li>Alçak geçiren (LPF), yüksek geçiren (HPF), bant geçiren, bant söndüren.</li>
          <li>Kesim frekansı genelde \\( -3\\,\\text{dB} \\) (yarım güç) noktasıdır.</li>
        </ul>
        <p>İdeal filtreler nedensel değildir; gerçek filtreler (Butterworth, Chebyshev) yaklaşımdır.</p>`
    },
    {
      baslik: "10. Ayrık Zaman Fourier Dönüşümü (DTFT)",
      icerik: `
        <p>Ayrık sinyalin frekans içeriği \\( 2\\pi \\) periyotludur:</p>
        \\[ X(e^{j\\omega})=\\sum_{n=-\\infty}^{\\infty} x[n]e^{-j\\omega n} \\]
        \\[ x[n]=\\frac{1}{2\\pi}\\int_{2\\pi} X(e^{j\\omega})e^{j\\omega n}\\,d\\omega \\]
        <p>CT dönüşümüyle aynı özellikleri (doğrusallık, kaydırma, konvolüsyon) taşır ancak frekans
        eksenі periyodiktir. Sonlu uzunlukta hesaplama için <b>DFT/FFT</b> kullanılır.</p>`
    },
    {
      baslik: "11. Örnekleme (Sampling) Teoremi",
      icerik: `
        <p>Sürekli sinyal \\( x(t) \\), periyodik dürtü katarıyla çarpılarak örneklenir; bu, spektrumun
        \\( \\omega_s=2\\pi f_s \\) aralıklarla tekrarlanmasına yol açar.</p>
        <p><b>Nyquist–Shannon:</b> bant genişliği \\( f_m \\) olan bir sinyalin tam geri çatılabilmesi için:</p>
        \\[ f_s > 2 f_m \\]
        <p>Bu koşul sağlanmazsa spektrum kopyaları çakışır ve <b>örtüşme (aliasing)</b> oluşur;
        yüksek frekanslar düşük frekanslar gibi görünür. Geri çatım ideal LPF (sinc interpolasyonu)
        veya pratikte sıfırıncı derece tutucu (ZOH) ile yapılır.</p>`
    },
    {
      baslik: "12. Laplace Dönüşümü",
      icerik: `
        <p>Fourier'in genellemesi; yakınsamayan sinyalleri de kapsar ve diferansiyel denklemleri
        cebirsel hale getirir:</p>
        \\[ X(s) = \\int_{-\\infty}^{\\infty} x(t) e^{-st}\\,dt, \\qquad s=\\sigma+j\\omega \\]
        <p><b>Türev özelliği</b> (tek taraflı): \\( \\mathcal{L}\\{x'(t)\\}=sX(s)-x(0^-) \\) →
        devre/sistem denklemleri kolayca çözülür. Konvolüsyon çarpıma döner:
        \\( x(t)*h(t)\\leftrightarrow X(s)H(s) \\).</p>
        <p>Sistem fonksiyonu \\( H(s)=\\dfrac{Y(s)}{X(s)} \\) rasyonel ise kutup ve sıfırlarıyla tanımlanır.</p>`
    },
    {
      baslik: "13. Laplace: ROC, Kutup-Sıfır ve Kararlılık",
      icerik: `
        <p>Laplace dönüşümü <b>yakınsama bölgesi (ROC)</b> ile birlikte tanımlanır; aynı \\(X(s)\\) farklı
        ROC'lerde farklı sinyallere karşılık gelir.</p>
        <ul>
          <li><b>Nedensel</b> sistemin ROC'si en sağdaki kutbun sağındadır.</li>
          <li><b>Kararlılık:</b> ROC \\( j\\omega \\) eksenini içermelidir. Nedensel + kararlı sistemde
          <b>tüm kutuplar sol yarı düzlemdedir</b> (Re{p}&lt;0).</li>
        </ul>
        <p>Ters dönüşüm çoğunlukla <b>kısmi kesirlere ayırma</b> ile yapılır; her terim bilinen bir
        üstel/sinüzoidal zaman fonksiyonuna karşılık gelir.</p>`
    },
    {
      baslik: "14. z-Dönüşümü",
      icerik: `
        <p>Ayrık sistemlerin Laplace karşılığı:</p>
        \\[ X(z) = \\sum_{n=-\\infty}^{\\infty} x[n] z^{-n} \\]
        <p>Temel çift: \\( a^{n}u[n]\\leftrightarrow\\dfrac{1}{1-az^{-1}}=\\dfrac{z}{z-a} \\).
        Kaydırma özelliği \\( x[n-n_0]\\leftrightarrow z^{-n_0}X(z) \\) → fark denklemleri cebirsel olur.
        Konvolüsyon çarpıma döner: \\( x[n]*h[n]\\leftrightarrow X(z)H(z) \\).</p>`
    },
    {
      baslik: "15. z: ROC ve Ayrık Sistem Kararlılığı",
      icerik: `
        <p>z-dönüşümü de ROC ile birlikte anlam kazanır. Kararlılık ölçütü birim çembere göredir:</p>
        <ul>
          <li><b>Nedensel</b> sistemin ROC'si en dıştaki kutbun dışındadır (\\( |z|>|p_{\\max}| \\)).</li>
          <li><b>Kararlılık:</b> ROC <b>birim çemberi</b> (\\( |z|=1 \\)) içermelidir. Nedensel + kararlı sistemde
          <b>tüm kutuplar birim çember içindedir</b> (\\( |p|<1 \\)).</li>
        </ul>
        <p>Fark denklemi ↔ sistem fonksiyonu ↔ kutup-sıfır diyagramı üçlüsü, sayısal filtre tasarımının
        (IIR/FIR) temelini oluşturur.</p>`
    }
  ],
  formuller: [
    { ad: "Konvolüsyon (CT)", formul: `\\( y(t)=\\int_{-\\infty}^{\\infty}x(\\tau)h(t-\\tau)\\,d\\tau \\)`, aciklama: "LTI çıkış = giriş ∗ dürtü yanıtı." },
    { ad: "Konvolüsyon (DT)", formul: `\\( y[n]=\\sum_{k}x[k]h[n-k] \\)`, aciklama: "Ayrık zaman toplamı." },
    { ad: "Dürtü Ayıklama", formul: `\\( \\int x(t)\\delta(t-t_0)dt=x(t_0) \\)`, aciklama: "Sifting özelliği." },
    { ad: "Euler Formülü", formul: `\\( e^{j\\omega t}=\\cos\\omega t+j\\sin\\omega t \\)`, aciklama: "Kompleks üstel ↔ sinüzoid." },
    { ad: "BIBO Kararlılık", formul: `\\( \\int_{-\\infty}^{\\infty}|h(t)|dt<\\infty \\)`, aciklama: "Dürtü yanıtı mutlak integrallenebilir." },
    { ad: "Özfonksiyon Özelliği", formul: `\\( e^{st}\\;\\to\\;H(s)e^{st} \\)`, aciklama: "LTI sistemin üstele yanıtı." },
    { ad: "Fourier Serisi Katsayısı", formul: `\\( a_k=\\dfrac{1}{T}\\int_T x(t)e^{-jk\\omega_0 t}dt \\)`, aciklama: "Periyodik sinyalin harmoniği." },
    { ad: "Fourier Serisi Sentezi", formul: `\\( x(t)=\\sum_k a_k e^{jk\\omega_0 t} \\)`, aciklama: "Harmoniklerden yeniden kurma." },
    { ad: "Fourier Dönüşümü", formul: `\\( X(j\\omega)=\\int_{-\\infty}^{\\infty}x(t)e^{-j\\omega t}dt \\)`, aciklama: "Zaman → frekans." },
    { ad: "Ters Fourier", formul: `\\( x(t)=\\dfrac{1}{2\\pi}\\int X(j\\omega)e^{j\\omega t}d\\omega \\)`, aciklama: "Frekans → zaman." },
    { ad: "Zaman Kaydırma (FT)", formul: `\\( x(t-t_0)\\leftrightarrow e^{-j\\omega t_0}X(j\\omega) \\)`, aciklama: "Kaydırma faz ekler." },
    { ad: "Konvolüsyon Teoremi", formul: `\\( x*h\\leftrightarrow X(j\\omega)H(j\\omega) \\)`, aciklama: "Zamanda konvolüsyon = frekansta çarpma." },
    { ad: "Parseval (FT)", formul: `\\( \\int|x|^2dt=\\dfrac{1}{2\\pi}\\int|X|^2d\\omega \\)`, aciklama: "Enerji korunumu." },
    { ad: "Frekans Yanıtı", formul: `\\( Y(j\\omega)=H(j\\omega)X(j\\omega) \\)`, aciklama: "H(jω)=h(t)'nin Fourier'i." },
    { ad: "DTFT", formul: `\\( X(e^{j\\omega})=\\sum_n x[n]e^{-j\\omega n} \\)`, aciklama: "2π periyotlu ayrık spektrum." },
    { ad: "Nyquist Örnekleme", formul: `\\( f_s>2f_m \\)`, aciklama: "Örtüşmeyi (aliasing) önleme." },
    { ad: "Laplace Dönüşümü", formul: `\\( X(s)=\\int_{-\\infty}^{\\infty}x(t)e^{-st}dt \\)`, aciklama: "s-düzleminde analiz." },
    { ad: "Laplace Türev", formul: `\\( \\mathcal{L}\\{x'(t)\\}=sX(s)-x(0^-) \\)`, aciklama: "Diferansiyel denklemi cebire çevirir." },
    { ad: "z-Dönüşümü", formul: `\\( X(z)=\\sum_n x[n]z^{-n} \\)`, aciklama: "Ayrık sistem dönüşümü." },
    { ad: "z Temel Çift", formul: `\\( a^n u[n]\\leftrightarrow\\dfrac{z}{z-a} \\)`, aciklama: "ROC: |z|>|a|." },
    { ad: "CT Kararlılık (Laplace)", formul: `\\( \\mathrm{Re}\\{p_i\\}<0 \\)`, aciklama: "Nedensel+kararlı: kutuplar sol yarı düzlem." },
    { ad: "DT Kararlılık (z)", formul: `\\( |p_i|<1 \\)`, aciklama: "Nedensel+kararlı: kutuplar birim çember içi." }
  ],
  galeri: [
    /* Örnek: { src: "https://.../tahta.jpg", baslik: "Konvolüsyon çözümü" } */
  ],
  dokumanlar: [
    /* Örnek: { ad: "Hafta 1-4 Notları", dosya: "https://.../not.pdf", tur: "Not" } */
  ],
  videolar: [
    { baslik: "Konvolüsyon Sezgisi (3Blue1Brown)", youtube: "KuXjwB4LzSA" },
    { baslik: "Fourier Dönüşümü Nedir? (3Blue1Brown)", youtube: "spUNpyF58BY" },
    { baslik: "MIT — Oppenheim: Signals and Systems (Ders 2)", youtube: "6xaaeop7gJ8" },
    { baslik: "Neso Academy — Signals and Systems (Tam Kurs Playlist)", playlist: "PLBlnK6fEyqRhG6s3jYIU48CqsT5cyiDTO" }
  ],
  linkler: [
    { ad: "MIT OCW — Signals and Systems", url: "https://ocw.mit.edu/courses/res-6-007-signals-and-systems-spring-2011/", aciklama: "Oppenheim'ın ders notları + videoları" },
    { ad: "WolframAlpha", url: "https://www.wolframalpha.com/", aciklama: "Fourier/Laplace dönüşümlerini adım adım çöz" },
    { ad: "Symbolab", url: "https://www.symbolab.com/", aciklama: "İntegral ve dönüşüm hesaplayıcı" },
    { ad: "Falstad Fourier", url: "https://www.falstad.com/fourier/", aciklama: "İnteraktif Fourier serisi simülasyonu" }
  ],
  sorular: [
    {
      tip: "vize",
      soru: `<p>\\( x(t) = e^{-2t}u(t) \\) sinyalinin Fourier dönüşümü \\( X(j\\omega) \\) nedir?</p>`,
      cozum: `
        <p>Tanımdan:</p>
        \\[ X(j\\omega)=\\int_{0}^{\\infty} e^{-2t} e^{-j\\omega t} dt
           =\\int_{0}^{\\infty} e^{-(2+j\\omega)t} dt = \\frac{1}{2+j\\omega} \\]
        <p><b>Sonuç:</b> \\( X(j\\omega)=\\dfrac{1}{2+j\\omega} \\)</p>`
    },
    {
      tip: "vize",
      soru: `<p>\\( y(t)=t\\,x(t) \\) sistemi doğrusal mı, zamanla değişmez mi, nedensel mi?</p>`,
      cozum: `
        <p><b>Doğrusal:</b> \\( t(ax_1+bx_2)=a\\,tx_1+b\\,tx_2 \\) → <b>evet</b>.</p>
        <p><b>Zamanla değişmez:</b> kaydırılmış girişe yanıt \\( t\\,x(t-t_0) \\); ama kaydırılmış çıkış
        \\( (t-t_0)x(t-t_0) \\). Eşit değil → <b>hayır (zamanla değişen)</b>.</p>
        <p><b>Nedensel:</b> çıkış yalnız anlık girişe bağlı → <b>evet</b>.</p>`
    },
    {
      tip: "vize",
      soru: `<p>\\( x[n]=\\{1,2,3\\} \\) (n=0,1,2) ile \\( h[n]=\\{1,1\\} \\) (n=0,1) konvolüsyonunu hesaplayın.</p>`,
      cozum: `
        \\[ y[0]=1,\\quad y[1]=1+2=3,\\quad y[2]=2+3=5,\\quad y[3]=3 \\]
        <p><b>Sonuç:</b> \\( y[n]=\\{1,3,5,3\\} \\) (n=0..3).</p>`
    },
    {
      tip: "vize",
      soru: `<p>\\( a^{n}u[n] \\) dizisinin z-dönüşümünü ve yakınsama bölgesini (ROC) bulun.</p>`,
      cozum: `
        \\[ X(z)=\\sum_{n=0}^{\\infty}a^{n}z^{-n}=\\sum_{n=0}^{\\infty}(az^{-1})^{n}=\\frac{1}{1-az^{-1}}=\\frac{z}{z-a} \\]
        <p>Geometrik seri \\( |az^{-1}|<1 \\) için yakınsar → <b>ROC: \\( |z|>|a| \\)</b>.</p>`
    },
    {
      tip: "final",
      soru: `<p>Dürtü yanıtı \\( h(t)=u(t)-u(t-2) \\) olan LTI sistem BIBO kararlı mıdır?</p>`,
      cozum: `
        \\[ \\int_{-\\infty}^{\\infty}|h(t)|\\,dt=\\int_{0}^{2}1\\,dt = 2 < \\infty \\]
        <p>İntegral sonlu olduğundan sistem <b>kararlıdır</b>.</p>`
    },
    {
      tip: "final",
      soru: `<p>İki özdeş dikdörtgen darbenin konvolüsyonunu bulun:
             \\( x(t)=h(t)=u(t)-u(t-1) \\).</p>`,
      cozum: `
        <p>İki genişliği 1 olan darbenin konvolüsyonu, taban genişliği 2 olan üçgen darbedir:</p>
        \\[ y(t)=\\begin{cases} t, & 0\\le t\\le1 \\\\ 2-t, & 1\\le t\\le2 \\\\ 0, & \\text{diğer} \\end{cases} \\]
        <p>Tepe değeri \\( t=1 \\)'de 1'dir (çakışmanın maksimum olduğu an).</p>`
    },
    {
      tip: "final",
      soru: `<p>\\( H(s)=\\dfrac{s+1}{(s+2)(s+3)} \\) sisteminin dürtü yanıtı \\( h(t) \\) nedir? (nedensel)</p>`,
      cozum: `
        <p>Kısmi kesirler: \\( \\dfrac{s+1}{(s+2)(s+3)}=\\dfrac{A}{s+2}+\\dfrac{B}{s+3} \\).</p>
        \\[ A=\\left.\\frac{s+1}{s+3}\\right|_{s=-2}=-1, \\qquad B=\\left.\\frac{s+1}{s+2}\\right|_{s=-3}=2 \\]
        \\[ h(t)=\\big(-e^{-2t}+2e^{-3t}\\big)u(t) \\]
        <p>Kutuplar \\( -2,-3 \\) sol yarı düzlemde → sistem kararlıdır.</p>`
    },
    {
      tip: "final",
      soru: `<p>\\( x(t)=\\cos(2\\pi\\cdot1000\\,t)+\\cos(2\\pi\\cdot3000\\,t) \\) sinyali için minimum örnekleme
             frekansı nedir? \\( f_s=4000\\,\\text{Hz} \\) seçilirse ne olur?</p>`,
      cozum: `
        <p>En yüksek bileşen 3000 Hz → Nyquist: \\( f_s>2(3000)=6000\\,\\text{Hz} \\).</p>
        <p>\\( f_s=4000 \\) yetersizdir: 3000 Hz bileşeni \\( |3000-4000|=1000\\,\\text{Hz} \\)'e
        <b>örtüşür (aliasing)</b> ve 1000 Hz bileşeniyle çakışır.</p>`
    },
    {
      tip: "final",
      soru: `<p>\\( e^{j\\omega_0 t} \\) girişi, dürtü yanıtı \\( h(t) \\) olan LTI sisteme uygulanıyor.
             Çıkış nedir?</p>`,
      cozum: `
        <p>Kompleks üstel, LTI sistemin özfonksiyonudur:</p>
        \\[ y(t)=H(j\\omega_0)\\,e^{j\\omega_0 t}, \\qquad H(j\\omega_0)=\\int_{-\\infty}^{\\infty}h(\\tau)e^{-j\\omega_0\\tau}d\\tau \\]
        <p>Yani sinyal biçimi değişmez; yalnızca \\( H(j\\omega_0) \\) kompleks kazancıyla ölçeklenir (genlik + faz).</p>`
    },
    {
      tip: "final",
      soru: `<p>\\( X(s)=\\dfrac{1}{(s+1)(s+2)} \\) ifadesinin nedensel ters Laplace dönüşümünü bulun.</p>`,
      cozum: `
        \\[ \\frac{1}{(s+1)(s+2)}=\\frac{1}{s+1}-\\frac{1}{s+2} \\]
        \\[ x(t)=\\big(e^{-t}-e^{-2t}\\big)u(t) \\]`
    }
  ]
};