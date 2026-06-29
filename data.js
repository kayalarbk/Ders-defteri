/* ============================================================
   DERS DEFTERİ — VERİ DOSYASI  (data.js)
   ------------------------------------------------------------
   SENİN KONTROL PANELİN. İçerik eklemek için SADECE burayı düzenle.

   Yapı:
   "DERS_KODU": {
     ad, donem, renk, ozet,
     konular:    [ { baslik, icerik(HTML) } ],
     galeri:     [ { src, baslik } ],          // src: tam URL önerilir (aşağıdaki nota bak)
     dokumanlar: [ { ad, dosya, tur } ],        // dosya: tam URL önerilir
     videolar:   [ { baslik, youtube } ],       // youtube = SADECE video ID'si
     sorular:    [ { soru(HTML), cozum(HTML), tip } ]   // tip: 'vize' | 'final'
   }

   LaTeX:  satır içi  \( ... \)  |  blok  \[ ... \]  veya  $$ ... $$

   📷 GÖRSEL/PDF NOTU: Repon düz yapıda (alt klasör yok). Bu yüzden görsel ve
   PDF için "tam URL" kullan. Örn. bir resmi GitHub'a yükleyip linkini, ya da
   herhangi bir görsel barındırma servisinin linkini src/dosya alanına yapıştır.
   ============================================================ */

const DERSLER = {

  /* ===================== EE3061 — Signals and Systems ===================== */
  "EE3061": {
    ad: "Signals and Systems",
    donem: "3. Sınıf · 1. Dönem",
    renk: "#4FD1C5",
    ozet: "Sürekli/ayrık zaman sinyalleri, LTI sistemler, konvolüsyon, Fourier/Laplace/z dönüşümleri ve örnekleme.",
    konular: [
      {
        baslik: "1. Sinyaller ve Sistemlere Giriş (CT & DT)",
        icerik: `
          <p>Sinyaller sürekli zaman \\( x(t) \\) ve ayrık zaman \\( x[n] \\) olarak ikiye ayrılır.
          Temel işlemler: zaman kaydırma \\( x(t-t_0) \\), ölçekleme \\( x(at) \\) ve yansıtma \\( x(-t) \\).</p>
          <ul>
            <li><b>Periyodiklik:</b> \\( x(t)=x(t+T) \\)</li>
            <li><b>Enerji / Güç sinyalleri</b> ayrımı</li>
            <li><b>Tek/çift</b> bileşenlere ayrıştırma</li>
          </ul>`
      },
      {
        baslik: "2. LTI Sistemler ve Konvolüsyon",
        icerik: `
          <p>Doğrusal Zamanla Değişmeyen (LTI) sistem, dürtü yanıtı \\( h(t) \\) ile tamamen tanımlanır.
          Çıkış, giriş ile dürtü yanıtının konvolüsyonudur:</p>
          \\[ y(t) = x(t) * h(t) = \\int_{-\\infty}^{\\infty} x(\\tau)\\,h(t-\\tau)\\,d\\tau \\]
          <p>Ayrık zamanda: \\( y[n]=\\sum_{k=-\\infty}^{\\infty} x[k]\\,h[n-k] \\).</p>`
      },
      {
        baslik: "3. Fourier Serileri ve Fourier Dönüşümü",
        icerik: `
          <p>Periyodik sinyaller Fourier serisi ile, aperiyodik sinyaller Fourier dönüşümü ile
          frekans bileşenlerine ayrılır:</p>
          \\[ X(j\\omega) = \\int_{-\\infty}^{\\infty} x(t) e^{-j\\omega t} \\, dt \\]
          <p>Ters dönüşüm:</p>
          \\[ x(t) = \\frac{1}{2\\pi} \\int_{-\\infty}^{\\infty} X(j\\omega) e^{j\\omega t} \\, d\\omega \\]`
      },
      {
        baslik: "4. Laplace ve z-Dönüşümü",
        icerik: `
          <p>Laplace dönüşümü sürekli sistemleri \\( s \\)-düzleminde analiz eder:</p>
          \\[ X(s) = \\int_{-\\infty}^{\\infty} x(t) e^{-st}\\,dt \\]
          <p>z-dönüşümü ise ayrık sistemlerin karşılığıdır:</p>
          \\[ X(z) = \\sum_{n=-\\infty}^{\\infty} x[n] z^{-n} \\]
          <p>Kararlılık, kutupların yerine göre değerlendirilir (sol yarı düzlem / birim çember içi).</p>`
      },
      {
        baslik: "5. Örnekleme (Sampling) Teoremi",
        icerik: `
          <p>Nyquist-Shannon teoremi: bant genişliği \\( f_m \\) olan bir sinyalin tam geri
          çatılabilmesi için örnekleme frekansı şu koşulu sağlamalıdır:</p>
          \\[ f_s > 2 f_m \\]
          <p>Aksi halde <b>örtüşme (aliasing)</b> oluşur.</p>`
      }
    ],
    formuller: [
      { ad: "Konvolüsyon", formul: `\\( y(t)=\\int_{-\\infty}^{\\infty}x(\\tau)h(t-\\tau)\\,d\\tau \\)`, aciklama: "LTI sistemde çıkış = giriş ∗ dürtü yanıtı." },
      { ad: "Fourier Dönüşümü", formul: `\\( X(j\\omega)=\\int_{-\\infty}^{\\infty}x(t)e^{-j\\omega t}dt \\)`, aciklama: "Zaman sinyalini frekans bileşenlerine ayırır." },
      { ad: "Laplace Dönüşümü", formul: `\\( X(s)=\\int_{-\\infty}^{\\infty}x(t)e^{-st}dt \\)`, aciklama: "s-düzleminde sistem analizi." },
      { ad: "Nyquist Örnekleme", formul: `\\( f_s>2f_m \\)`, aciklama: "Örtüşmeyi (aliasing) önleme koşulu." },
      { ad: "z-Dönüşümü", formul: `\\( X(z)=\\sum_{n=-\\infty}^{\\infty}x[n]z^{-n} \\)`, aciklama: "Ayrık sistemlerin dönüşümü." }
    ],
    galeri: [
      /* Örnek: { src: "https://.../tahta.jpg", baslik: "Konvolüsyon çözümü" } */
    ],
    dokumanlar: [
      /* Örnek: { ad: "Hafta 1-4 Notları", dosya: "https://.../not.pdf", tur: "Not" } */
    ],
    videolar: [
      { baslik: "Konvolüsyon Sezgisi (3Blue1Brown)", youtube: "KuXjwB4LzSA" },
      { baslik: "Fourier Dönüşümü Nedir?",            youtube: "spUNpyF58BY" }
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
        tip: "final",
        soru: `<p>Dürtü yanıtı \\( h(t)=u(t)-u(t-2) \\) olan LTI sistem BIBO kararlı mıdır?</p>`,
        cozum: `
          \\[ \\int_{-\\infty}^{\\infty}|h(t)|\\,dt=\\int_{0}^{2}1\\,dt = 2 < \\infty \\]
          <p>İntegral sonlu olduğundan sistem <b>kararlıdır</b>.</p>`
      }
    ]
  },

  /* ===================== EE3012 — Electronics II ===================== */
  "EE3012": {
    ad: "Electronics II",
    donem: "3. Sınıf · 1. Dönem",
    renk: "#F0A868",
    ozet: "BJT/MOSFET yüksek frekans modelleri, çok katlı kuvvetlendiriciler, geri besleme, osilatörler ve güç kuvvetlendiricileri.",
    konular: [
      {
        baslik: "1. Yüksek Frekans Modelleri",
        icerik: `
          <p>BJT ve MOSFET'lerin yüksek frekanstaki davranışı, gövde kapasitanslarıyla
          modellenir (hibrit-\\( \\pi \\) modeli). Geçiş frekansı \\( f_T \\), kazancın birim
          olduğu frekanstır:</p>
          \\[ f_T = \\frac{g_m}{2\\pi (C_\\pi + C_\\mu)} \\]`
      },
      {
        baslik: "2. Çok Katlı Kuvvetlendiriciler (Multistage)",
        icerik: `<p>Katların ardışık bağlanmasıyla toplam kazanç çarpılır. Giriş/çıkış empedansı
          eşleştirmesi ve katlar arası yükleme etkisi tasarımın temelidir.</p>`
      },
      {
        baslik: "3. Frekans Yanıtı (Frequency Response)",
        icerik: `<p>Alçak frekansta kuplaj/baypas kapasitörleri, yüksek frekansta gövde
          kapasitansları kazancı sınırlar. Bode diyagramı ile bant genişliği belirlenir.</p>`
      },
      {
        baslik: "4. Geri Besleme (Feedback) Topolojileri",
        icerik: `
          <p>Negatif geri besleme kazancı kararlı kılar ve bant genişliğini artırır.
          Kapalı çevrim kazancı:</p>
          \\[ A_f = \\frac{A}{1 + A\\beta} \\]
          <p>Dört temel topoloji: seri-şönt, şönt-seri, seri-seri, şönt-şönt.</p>`
      },
      {
        baslik: "5. Osilatörler ve Güç Kuvvetlendiricileri",
        icerik: `<p>Barkhausen kriteri ile osilasyon koşulu sağlanır. Güç katları verime göre
          sınıflandırılır: <b>A</b> (lineer, düşük verim), <b>B</b> (~%78.5), <b>AB</b> (geçiş
          bozulmasını azaltır), <b>C</b> (yüksek verim, RF).</p>`
      }
    ],
    formuller: [
      { ad: "Geçiş Frekansı", formul: `\\( f_T=\\dfrac{g_m}{2\\pi(C_\\pi+C_\\mu)} \\)`, aciklama: "Kazancın birim olduğu frekans." },
      { ad: "Kapalı Çevrim Kazancı", formul: `\\( A_f=\\dfrac{A}{1+A\\beta} \\)`, aciklama: "Negatif geri beslemeli kazanç." },
      { ad: "Barkhausen Kriteri", formul: `\\( |A\\beta|=1,\\;\\angle A\\beta=0 \\)`, aciklama: "Osilasyon koşulu." },
      { ad: "B Sınıfı Verim", formul: `\\( \\eta_{max}=\\dfrac{\\pi}{4}\\approx 78.5\\% \\)`, aciklama: "İdeal B sınıfı maksimum verim." }
    ],
    galeri: [], dokumanlar: [],
    videolar: [],
    sorular: [
      {
        tip: "vize",
        soru: `<p>Açık çevrim kazancı \\( A=1000 \\), geri besleme oranı \\( \\beta=0.01 \\) olan
               negatif geri beslemeli kuvvetlendiricinin kapalı çevrim kazancı \\( A_f \\) nedir?</p>`,
        cozum: `
          \\[ A_f=\\frac{A}{1+A\\beta}=\\frac{1000}{1+1000\\cdot 0.01}=\\frac{1000}{11}\\approx 90.9 \\]
          <p>Geri besleme kazancı düşürür ama kararlılığı ve bant genişliğini artırır.</p>`
      }
    ]
  },

  /* ===================== EE3014 — Energy Conversion ===================== */
  "EE3014": {
    ad: "Energy Conversion",
    donem: "3. Sınıf · 1. Dönem",
    renk: "#A78BFA",
    ozet: "Manyetik devreler, transformatörler, elektromekanik enerji dönüşümü, DC makineler ve AC makine temelleri.",
    konular: [
      {
        baslik: "1. Manyetik Devreler ve Malzemeler",
        icerik: `
          <p>Manyetik devrelerde elektrik devresine benzer bağıntılar kullanılır.
          Manyetomotor kuvvet \\( \\mathcal{F}=NI \\), relüktans \\( \\mathcal{R}=\\dfrac{l}{\\mu A} \\):</p>
          \\[ \\phi = \\frac{\\mathcal{F}}{\\mathcal{R}} = \\frac{NI}{l/(\\mu A)} \\]`
      },
      {
        baslik: "2. İdeal ve Pratik Transformatörler",
        icerik: `
          <p>İdeal transformatörde gerilim ve akım, sarım oranı \\( a=N_1/N_2 \\) ile ölçeklenir:</p>
          \\[ \\frac{V_1}{V_2}=\\frac{N_1}{N_2}=a, \\qquad \\frac{I_1}{I_2}=\\frac{N_2}{N_1} \\]
          <p>Pratik modelde sargı dirençleri, kaçak reaktansları ve çekirdek kayıpları eklenir.</p>`
      },
      {
        baslik: "3. Elektromekanik Enerji Dönüşümü",
        icerik: `<p>Enerji dengesi: elektriksel giriş = mekanik çıkış + depolanan alan enerjisi + kayıplar.
          Kuvvet/moment, koenerjinin konuma göre türevinden bulunur.</p>`
      },
      {
        baslik: "4. DC Makineler (Motor & Jeneratör)",
        icerik: `
          <p>Zıt emk \\( E_a=K\\phi\\omega \\), moment \\( T=K\\phi I_a \\). Terminal denklemi:</p>
          \\[ V_t = E_a + I_a R_a \\]`
      },
      {
        baslik: "5. 3 Fazlı Sistemler ve AC Makineler",
        icerik: `<p>Dengeli 3 fazda \\( V_{hat}=\\sqrt{3}\\,V_{faz} \\). Döner manyetik alan, senkron hız
          \\( n_s = \\dfrac{120 f}{p} \\) ile döner; asenkron makinede kayma \\( s \\) tanımlanır.</p>`
      }
    ],
    formuller: [
      { ad: "Manyetik Akı", formul: `\\( \\phi=\\dfrac{NI}{l/(\\mu A)} \\)`, aciklama: "Manyetik devrede akı = mmk / relüktans." },
      { ad: "Transformatör Oranı", formul: `\\( \\dfrac{V_1}{V_2}=\\dfrac{N_1}{N_2}=a \\)`, aciklama: "İdeal transformatör gerilim oranı." },
      { ad: "DC Zıt EMK", formul: `\\( E_a=K\\phi\\omega \\)`, aciklama: "Dönen DC makinede üretilen emk." },
      { ad: "Senkron Hız", formul: `\\( n_s=\\dfrac{120f}{p} \\)`, aciklama: "AC makinede döner alan hızı (d/dk)." },
      { ad: "DC Terminal Denklemi", formul: `\\( V_t=E_a+I_aR_a \\)`, aciklama: "Motor terminal gerilimi." }
    ],
    galeri: [], dokumanlar: [],
    videolar: [],
    sorular: [
      {
        tip: "vize",
        soru: `<p>1000:100 sarımlı ideal bir transformatörün primer gerilimi 220 V'tur.
               Sekonder gerilimi \\( V_2 \\) kaç volttur?</p>`,
        cozum: `
          \\[ V_2 = V_1\\cdot\\frac{N_2}{N_1}=220\\cdot\\frac{100}{1000}=22\\;\\text{V} \\]`
      }
    ]
  },

  /* ===================== EE3016 — Fundamentals of Electromagnetics ===================== */
  "EE3016": {
    ad: "Fundamentals of Electromagnetics",
    donem: "3. Sınıf · 1. Dönem",
    renk: "#60A5FA",
    ozet: "Vektör analizi, elektrostatik, Gauss yasası, manyetostatik, Biot-Savart/Ampere, Faraday ve Maxwell denklemleri.",
    konular: [
      {
        baslik: "1. Vektör Analizi ve Koordinat Sistemleri",
        icerik: `<p>Kartezyen, silindirik ve küresel koordinatlar; gradyan, diverjans
          \\( \\nabla\\cdot\\mathbf{A} \\) ve rotasyonel \\( \\nabla\\times\\mathbf{A} \\) operatörleri.</p>`
      },
      {
        baslik: "2. Elektrostatik ve Gauss Yasası",
        icerik: `
          <p>Noktasal yük alanı \\( E=\\dfrac{Q}{4\\pi\\varepsilon_0 r^2} \\). Gauss yasası:</p>
          \\[ \\oint_S \\mathbf{E}\\cdot d\\mathbf{S} = \\frac{Q_{enc}}{\\varepsilon_0} \\]`
      },
      {
        baslik: "3. İletkenler ve Dielektrikler",
        icerik: `<p>İletken içinde \\( \\mathbf{E}=0 \\). Dielektriklerde polarizasyon ve bağıl
          geçirgenlik \\( \\varepsilon_r \\); sınır koşulları teğet/normal bileşenlerle tanımlanır.</p>`
      },
      {
        baslik: "4. Manyetostatik: Biot-Savart ve Ampere",
        icerik: `
          <p>Biot-Savart ile bir akım elemanının ürettiği alan bulunur. Ampere yasası:</p>
          \\[ \\oint_C \\mathbf{H}\\cdot d\\mathbf{l} = I_{enc} \\]`
      },
      {
        baslik: "5. Faraday Yasası ve Maxwell Denklemleri",
        icerik: `
          <p>Faraday: \\( \\varepsilon=-\\dfrac{d\\Phi_B}{dt} \\). Maxwell denklemleri (diferansiyel):</p>
          \\[ \\nabla\\cdot\\mathbf{D}=\\rho,\\quad \\nabla\\cdot\\mathbf{B}=0 \\]
          \\[ \\nabla\\times\\mathbf{E}=-\\frac{\\partial\\mathbf{B}}{\\partial t},\\quad
             \\nabla\\times\\mathbf{H}=\\mathbf{J}+\\frac{\\partial\\mathbf{D}}{\\partial t} \\]`
      }
    ],
    formuller: [
      { ad: "Gauss Yasası", formul: `\\( \\oint_S \\mathbf{E}\\cdot d\\mathbf{S}=\\dfrac{Q_{enc}}{\\varepsilon_0} \\)`, aciklama: "Kapalı yüzeyden geçen elektrik akısı." },
      { ad: "Noktasal Yük Alanı", formul: `\\( E=\\dfrac{Q}{4\\pi\\varepsilon_0 r^2} \\)`, aciklama: "Noktasal yükün elektrik alanı." },
      { ad: "Ampere Yasası", formul: `\\( \\oint_C \\mathbf{H}\\cdot d\\mathbf{l}=I_{enc} \\)`, aciklama: "Kapalı yol etrafındaki manyetik alan." },
      { ad: "Faraday Yasası", formul: `\\( \\varepsilon=-\\dfrac{d\\Phi_B}{dt} \\)`, aciklama: "Değişen akı → indüklenen emk." }
    ],
    galeri: [], dokumanlar: [],
    videolar: [],
    sorular: [
      {
        tip: "vize",
        soru: `<p>Boşlukta \\( Q=4\\,\\text{nC} \\) noktasal yükten \\( r=2\\,\\text{m} \\) uzaklıkta elektrik
               alan şiddeti \\( E \\) nedir? \\( (k\\approx 9\\times10^{9}) \\)</p>`,
        cozum: `
          \\[ E=\\frac{kQ}{r^2}=\\frac{9\\times10^{9}\\cdot 4\\times10^{-9}}{2^2}
             =\\frac{36}{4}=9\\;\\text{N/C} \\]`
      }
    ]
  },

  /* ===================== STAT2056 — Probability and Random Variables ===================== */
  "STAT2056": {
    ad: "Probability and Random Variables",
    donem: "3. Sınıf · 1. Dönem",
    renk: "#F472B6",
    ozet: "Olasılık aksiyomları, Bayes teoremi, rastgele değişkenler, PDF/CDF, beklenen değer/varyans ve rastgele süreçlere giriş.",
    konular: [
      {
        baslik: "1. Olasılık Aksiyomları",
        icerik: `<p>\\( P(A)\\ge 0 \\), \\( P(S)=1 \\) ve ayrık olaylar için
          \\( P(A\\cup B)=P(A)+P(B) \\). Genel toplam kuralı:
          \\( P(A\\cup B)=P(A)+P(B)-P(A\\cap B) \\).</p>`
      },
      {
        baslik: "2. Koşullu Olasılık ve Bayes Teoremi",
        icerik: `
          \\[ P(A\\mid B)=\\frac{P(A\\cap B)}{P(B)} \\]
          \\[ P(A\\mid B)=\\frac{P(B\\mid A)\\,P(A)}{P(B)} \\]`
      },
      {
        baslik: "3. Rastgele Değişkenler (Ayrık & Sürekli)",
        icerik: `<p>Ayrık değişkenler PMF, sürekli değişkenler PDF \\( f_X(x) \\) ile tanımlanır.
          CDF: \\( F_X(x)=P(X\\le x) \\) ve \\( f_X(x)=\\dfrac{dF_X(x)}{dx} \\).</p>`
      },
      {
        baslik: "4. Beklenen Değer ve Varyans",
        icerik: `
          \\[ E[X]=\\int_{-\\infty}^{\\infty} x f_X(x)\\,dx \\]
          \\[ \\operatorname{Var}(X)=E[X^2]-\\big(E[X]\\big)^2 \\]`
      },
      {
        baslik: "5. Çoklu Değişkenler ve Rastgele Süreçlere Giriş",
        icerik: `<p>Birleşik dağılımlar, bağımsızlık ve kovaryans \\( \\operatorname{Cov}(X,Y) \\).
          Zamanla değişen rastgele olgular <b>rastgele süreç</b> olarak modellenir
          (ör. gürültü, sinyal kestirimi).</p>`
      }
    ],
    formuller: [
      { ad: "Bayes Teoremi", formul: `\\( P(A\\mid B)=\\dfrac{P(B\\mid A)P(A)}{P(B)} \\)`, aciklama: "Koşullu olasılığı ters çevirme." },
      { ad: "Koşullu Olasılık", formul: `\\( P(A\\mid B)=\\dfrac{P(A\\cap B)}{P(B)} \\)`, aciklama: "B verildiğinde A olasılığı." },
      { ad: "Beklenen Değer", formul: `\\( E[X]=\\int_{-\\infty}^{\\infty}x f_X(x)dx \\)`, aciklama: "Rastgele değişkenin ortalaması." },
      { ad: "Varyans", formul: `\\( \\operatorname{Var}(X)=E[X^2]-(E[X])^2 \\)`, aciklama: "Dağılımın yayılım ölçüsü." }
    ],
    galeri: [], dokumanlar: [],
    videolar: [],
    sorular: [
      {
        tip: "vize",
        soru: `<p>Hilesiz bir zar atılıyor. \\( X \\) gelen sayı ise \\( E[X] \\) ve
               \\( \\operatorname{Var}(X) \\) nedir?</p>`,
        cozum: `
          \\[ E[X]=\\frac{1+2+3+4+5+6}{6}=3.5 \\]
          \\[ E[X^2]=\\frac{1+4+9+16+25+36}{6}=\\frac{91}{6} \\]
          \\[ \\operatorname{Var}(X)=\\frac{91}{6}-3.5^2=\\frac{35}{12}\\approx 2.92 \\]`
      }
    ]
  }

};

/* Ana sayfadaki kart sırası */
const DERS_SIRASI = ["EE3061", "EE3012", "EE3014", "EE3016", "STAT2056"];
