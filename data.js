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
    videolar: [
      { baslik: "Razavi — Electronics 2, Ders 1 (Cascode & Akım Kaynakları)", youtube: "pK2elUcXWzs" },
      { baslik: "Razavi — Frekans Yanıtına Giriş (Ders 17)", youtube: "XbM1-WgGXQc" },
      { baslik: "Razavi — Electronics 2 (Tam Kurs Playlist)", playlist: "PLacwBqL-3HkzkDNm13SJrEJxgkHHl5x21" }
    ],
    linkler: [
      { ad: "Falstad Circuit Simulator", url: "https://www.falstad.com/circuit/", aciklama: "Tarayıcıda devre kur ve simüle et" },
      { ad: "Electronics Tutorials", url: "https://www.electronics-tutorials.ws/", aciklama: "Kuvvetlendirici/osilatör konu anlatımları" },
      { ad: "All About Circuits", url: "https://www.allaboutcircuits.com/textbook/", aciklama: "Ücretsiz elektronik ders kitabı" },
      { ad: "CircuitLab", url: "https://www.circuitlab.com/", aciklama: "Online şematik + simülasyon" }
    ],
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
    videolar: [
      { baslik: "Electrical Machines (Tam Kurs Playlist)", playlist: "PLuUdFsbOK_8qVROrfl2M2WSV2xAz-ABVU" }
    ],
    linkler: [
      { ad: "Electrical4U — Electric Machines", url: "https://www.electrical4u.com/electric-machines/", aciklama: "Transformatör ve makine konu anlatımları" },
      { ad: "Electrical Engineering Portal", url: "https://electrical-engineering-portal.com/", aciklama: "Güç sistemleri ve makine makaleleri" },
      { ad: "WolframAlpha", url: "https://www.wolframalpha.com/", aciklama: "Fazör ve devre hesaplamaları" },
      { ad: "Tutorialspoint — Electrical Machines", url: "https://www.tutorialspoint.com/electrical_machines/index.htm", aciklama: "Adım adım makine dersleri" }
    ],
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
    videolar: [
      { baslik: "Engineering Electromagnetics — Hayt & Buck (Tam Kurs Playlist)", playlist: "PL5Lcr54DawvSCz7_u_2JX_0_Atv4u-9PD" }
    ],
    linkler: [
      { ad: "PhET Simülasyonları", url: "https://phet.colorado.edu/en/simulations/filter?subjects=electricity-magnets-and-circuits", aciklama: "İnteraktif E&M simülasyonları" },
      { ad: "Falstad E&M Uygulamaları", url: "https://www.falstad.com/mathphysics.html", aciklama: "Alan çizgileri ve dalga görselleştirme" },
      { ad: "Hyperphysics — E&M", url: "http://hyperphysics.phy-astr.gsu.edu/hbase/emcon.html", aciklama: "Kavram haritalı hızlı başvuru" },
      { ad: "WolframAlpha", url: "https://www.wolframalpha.com/", aciklama: "Vektör analizi (div, curl, grad) hesabı" }
    ],
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
    videolar: [
      { baslik: "MIT — Olasılık Modelleri ve Aksiyomlar (Tsitsiklis, Ders 1)", youtube: "j9WZyLZCBzs" },
      { baslik: "MIT — Sayma (Counting, Ders 4)", youtube: "6oV3pKLgW2I" },
      { baslik: "MIT RES.6-012 Introduction to Probability (Tam Kurs Playlist)", playlist: "PLUl4u3cNGP60hI9ATjSFgLZpbNJ7myAg6" }
    ],
    linkler: [
      { ad: "MIT OCW 6.041 — Applied Probability", url: "https://ocw.mit.edu/courses/6-041-probabilistic-systems-analysis-and-applied-probability-fall-2010/", aciklama: "Ders notları + çözümlü problemler" },
      { ad: "Seeing Theory", url: "https://seeing-theory.brown.edu/", aciklama: "Olasılığı görselleştiren interaktif site" },
      { ad: "StatTrek", url: "https://stattrek.com/", aciklama: "Dağılım tabloları ve hesaplayıcılar" },
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
      }
    ]
  },

  /* ===================== MATH2055 — Discrete Mathematics (Alttan) ===================== */
  "MATH2055": {
    ad: "Discrete Mathematics",
    donem: "Alttan Ders",
    renk: "#34D399",
    ozet: "Önermeler mantığı, kümeler, fonksiyonlar ve bağıntılar, ispat teknikleri, tümevarım, sayma (kombinatorik) ve çizge (graf) teorisi.",
    konular: [
      {
        baslik: "1. Önermeler Mantığı ve Doğruluk Tabloları",
        icerik: `
          <p>Önerme, doğru (T) ya da yanlış (F) olan bir ifadedir. Temel bağlaçlar:
          değil \\( \\neg p \\), ve \\( p\\wedge q \\), veya \\( p\\vee q \\),
          ise \\( p\\to q \\), ancak ve ancak \\( p\\leftrightarrow q \\).</p>
          <ul>
            <li>\\( p\\to q \\) yalnızca \\( p \\) doğru, \\( q \\) yanlışken yanlıştır.</li>
            <li><b>Karşıt-ters (contrapositive):</b> \\( p\\to q \\equiv \\neg q\\to\\neg p \\)</li>
            <li><b>De Morgan:</b> \\( \\neg(p\\wedge q)\\equiv\\neg p\\vee\\neg q \\)</li>
            <li><b>Totoloji:</b> her durumda doğru; <b>çelişki:</b> her durumda yanlış.</li>
          </ul>`
      },
      {
        baslik: "2. Niceleyiciler ve İspat Teknikleri",
        icerik: `
          <p>Evrensel niceleyici \\( \\forall x\\,P(x) \\), varlıksal niceleyici \\( \\exists x\\,P(x) \\).
          Değilleme kuralı: \\( \\neg\\forall x\\,P(x)\\equiv\\exists x\\,\\neg P(x) \\).</p>
          <p>Başlıca ispat yöntemleri:</p>
          <ul>
            <li><b>Doğrudan ispat:</b> hipotezden sonuca adım adım.</li>
            <li><b>Karşıt-ters ile:</b> \\( \\neg q\\to\\neg p \\) gösterilir.</li>
            <li><b>Çelişkiyle (contradiction):</b> sonucun değili varsayılıp çelişki bulunur (örn. \\( \\sqrt2 \\) irrasyoneldir).</li>
            <li><b>Tümevarım:</b> taban durumu + tümevarım adımı.</li>
          </ul>`
      },
      {
        baslik: "3. Kümeler, Fonksiyonlar ve Bağıntılar",
        icerik: `
          <p>Küme işlemleri: birleşim, kesişim, fark, tümleyen. Kuvvet kümesi
          \\( |\\mathcal{P}(A)|=2^{|A|} \\), kartezyen çarpım \\( |A\\times B|=|A||B| \\).</p>
          <p>Fonksiyon türleri: birebir (injective), örten (surjective), birebir-örten (bijective).</p>
          <p>Bağıntı özellikleri: yansıyan, simetrik, ters-simetrik, geçişken.
          <b>Denklik bağıntısı</b> = yansıyan + simetrik + geçişken → denklik sınıflarına böler.
          <b>Kısmi sıralama</b> = yansıyan + ters-simetrik + geçişken (Hasse diyagramı).</p>`
      },
      {
        baslik: "4. Sayma: Permütasyon, Kombinasyon, Güvercin Yuvası",
        icerik: `
          <p>Çarpma ve toplama kuralları temeldir. Sıralı seçim (permütasyon) ve
          sırasız seçim (kombinasyon):</p>
          \\[ P(n,r)=\\frac{n!}{(n-r)!}, \\qquad C(n,r)=\\binom{n}{r}=\\frac{n!}{r!\\,(n-r)!} \\]
          <p><b>İçerme-Dışarma:</b> \\( |A\\cup B|=|A|+|B|-|A\\cap B| \\).
          <b>Güvercin yuvası ilkesi:</b> \\( n \\) kutuya \\( n+1 \\) nesne konursa en az bir kutuda ≥2 nesne olur.
          <b>Binom teoremi:</b> \\( (x+y)^n=\\sum_{k=0}^{n}\\binom{n}{k}x^{n-k}y^k \\).</p>`
      },
      {
        baslik: "5. Tümevarım ve Özyineleme (Recurrence)",
        icerik: `
          <p>Matematiksel tümevarım: \\( P(1) \\) doğru ve \\( P(k)\\Rightarrow P(k+1) \\) ise her
          \\( n\\ge1 \\) için \\( P(n) \\) doğrudur. Sık kullanılan toplamlar:</p>
          \\[ \\sum_{i=1}^{n} i=\\frac{n(n+1)}{2}, \\qquad \\sum_{i=0}^{n} r^i=\\frac{r^{n+1}-1}{r-1} \\]
          <p>Özyinelemeli diziler (örn. Fibonacci \\( f_n=f_{n-1}+f_{n-2} \\)) karakteristik
          denklemle çözülür.</p>`
      },
      {
        baslik: "6. Çizge (Graf) Teorisi ve Ağaçlar",
        icerik: `
          <p>Çizge \\( G=(V,E) \\): düğümler ve kenarlar. <b>El sıkışma lemması:</b></p>
          \\[ \\sum_{v\\in V}\\deg(v)=2|E| \\]
          <p><b>Euler turu:</b> her kenardan bir kez → tüm dereceler çift olmalı.
          <b>Hamilton turu:</b> her düğümden bir kez. <b>Ağaç:</b> döngüsüz bağlı çizge;
          \\( n \\) düğümlü ağaçta \\( n-1 \\) kenar vardır. Kapsayan ağaçlar ve ikili arama
          ağaçları algoritmaların temelidir.</p>`
      }
    ],
    formuller: [
      { ad: "Kombinasyon", formul: `\\( \\binom{n}{r}=\\dfrac{n!}{r!(n-r)!} \\)`, aciklama: "n elemandan sırasız r seçim." },
      { ad: "Permütasyon", formul: `\\( P(n,r)=\\dfrac{n!}{(n-r)!} \\)`, aciklama: "n elemandan sıralı r seçim." },
      { ad: "De Morgan", formul: `\\( \\neg(p\\wedge q)\\equiv\\neg p\\vee\\neg q \\)`, aciklama: "Bağlaç değilleme kuralı." },
      { ad: "İçerme-Dışarma", formul: `\\( |A\\cup B|=|A|+|B|-|A\\cap B| \\)`, aciklama: "Kesişimi bir kez say." },
      { ad: "El Sıkışma Lemması", formul: `\\( \\sum_v \\deg(v)=2|E| \\)`, aciklama: "Derece toplamı = 2 × kenar sayısı." },
      { ad: "Gauss Toplamı", formul: `\\( \\sum_{i=1}^{n}i=\\dfrac{n(n+1)}{2} \\)`, aciklama: "İlk n doğal sayının toplamı." },
      { ad: "Kuvvet Kümesi", formul: `\\( |\\mathcal{P}(A)|=2^{|A|} \\)`, aciklama: "Alt küme sayısı." }
    ],
    galeri: [], dokumanlar: [],
    videolar: [
      { baslik: "TrevTutor — Discrete Math (Tam Kurs Playlist)", playlist: "PLDDGPdw7e6Ag1EIznZ-m-qXu4XX3A0cIz" },
      { baslik: "Kimberly Brehm — Discrete Math I (Tam Kurs Playlist)", playlist: "PLl-gb0E4MII28GykmtuBXNUNoej-vY5Rz" }
    ],
    linkler: [
      { ad: "TrevTutor", url: "https://www.trevtutor.com/", aciklama: "Konu anlatımı + çözümlü örnekler" },
      { ad: "CompSciLib", url: "https://www.compscilib.com/", aciklama: "Doğruluk tablosu ve sayma hesaplayıcıları" },
      { ad: "WolframAlpha", url: "https://www.wolframalpha.com/", aciklama: "Doğruluk tablosu / kombinatorik hesabı" },
      { ad: "Graph Online", url: "https://graphonline.top/en/", aciklama: "Çizge çiz, algoritmaları görselleştir" }
    ],
    sorular: [
      {
        tip: "vize",
        soru: `<p>\\( \\neg(p\\to q) \\) ifadesinin \\( p\\wedge\\neg q \\) ile denk olduğunu gösterin.</p>`,
        cozum: `
          <p>\\( p\\to q\\equiv\\neg p\\vee q \\) yazılır. Değillenirse:</p>
          \\[ \\neg(\\neg p\\vee q)\\equiv p\\wedge\\neg q \\quad\\text{(De Morgan)} \\]
          <p>Böylece iki ifade <b>denktir</b>.</p>`
      },
      {
        tip: "vize",
        soru: `<p>10 kişilik bir gruptan 3 kişilik bir komite kaç farklı şekilde seçilebilir?</p>`,
        cozum: `
          \\[ \\binom{10}{3}=\\frac{10!}{3!\\,7!}=\\frac{10\\cdot9\\cdot8}{6}=120 \\]`
      },
      {
        tip: "final",
        soru: `<p>Her \\( n\\ge1 \\) için \\( 1+2+\\dots+n=\\dfrac{n(n+1)}{2} \\) olduğunu tümevarımla ispatlayın.</p>`,
        cozum: `
          <p><b>Taban:</b> \\( n=1 \\): sol taraf 1, sağ taraf \\( \\frac{1\\cdot2}{2}=1 \\). ✓</p>
          <p><b>Adım:</b> \\( n=k \\) için doğru varsayalım. \\( n=k+1 \\) için:</p>
          \\[ 1+\\dots+k+(k+1)=\\frac{k(k+1)}{2}+(k+1)=\\frac{(k+1)(k+2)}{2} \\]
          <p>Formül \\( k+1 \\) için de sağlanır; tümevarımla her \\( n \\) için doğrudur. ∎</p>`
      },
      {
        tip: "final",
        soru: `<p>Bir çizgede düğüm dereceleri 3, 3, 2, 2, 2 ise kenar sayısı kaçtır?</p>`,
        cozum: `
          \\[ \\sum\\deg(v)=3+3+2+2+2=12=2|E| \\Rightarrow |E|=6 \\]`
      }
    ]
  },

  /* ===================== MSE2051 — Materials Science (Alttan) ===================== */
  "MSE2051": {
    ad: "Materials Science",
    donem: "Alttan Ders",
    renk: "#FBBF24",
    ozet: "Atomik yapı ve bağlar, kristal yapılar, kusurlar ve difüzyon, mekanik özellikler, faz diyagramları ve malzeme türleri.",
    konular: [
      {
        baslik: "1. Atomik Yapı ve Bağlar",
        icerik: `
          <p>Malzeme özellikleri atomlar arası bağ türüne bağlıdır:</p>
          <ul>
            <li><b>İyonik:</b> elektron transferi (seramikler) — sert, kırılgan, yalıtkan.</li>
            <li><b>Kovalent:</b> elektron paylaşımı (elmas, Si) — yüksek sertlik/ergime.</li>
            <li><b>Metalik:</b> elektron denizi — iletkenlik ve süneklik sağlar.</li>
            <li><b>Van der Waals / hidrojen:</b> zayıf ikincil bağlar (polimerler arası).</li>
          </ul>
          <p>Bağ enerjisi derinliği ergime sıcaklığını, eğri eğimi elastisite modülünü belirler.</p>`
      },
      {
        baslik: "2. Kristal Yapılar (BCC, FCC, HCP)",
        icerik: `
          <p>Metaller çoğunlukla üç yapıda kristalleşir. Atomik dolgu faktörü (APF):</p>
          \\[ APF=\\frac{V_{atomlar}}{V_{birim\\;hücre}} \\]
          <ul>
            <li><b>BCC</b> (Fe-α, Cr, W): 2 atom/hücre, APF = 0.68, \\( a=4R/\\sqrt3 \\)</li>
            <li><b>FCC</b> (Al, Cu, Ni, Fe-γ): 4 atom/hücre, APF = 0.74, \\( a=2R\\sqrt2 \\)</li>
            <li><b>HCP</b> (Mg, Ti, Zn): APF = 0.74, c/a ≈ 1.633</li>
          </ul>
          <p>Yoğunluk: \\( \\rho=\\dfrac{nA}{V_C N_A} \\). Kristal düzlemleri Miller indisleri ile gösterilir;
          X-ışını kırınımı Bragg yasasıyla çözümlenir: \\( n\\lambda=2d\\sin\\theta \\).</p>`
      },
      {
        baslik: "3. Kusurlar ve Difüzyon",
        icerik: `
          <p>Gerçek kristallerde kusurlar bulunur: noktasal (boşluk, arayer/yeralan atomu),
          çizgisel (<b>dislokasyonlar</b> — plastik deformasyonun taşıyıcısı), düzlemsel (tane sınırları).</p>
          <p>Difüzyon, atomların sıcaklıkla aktive olan hareketidir. <b>Fick'in 1. yasası:</b></p>
          \\[ J=-D\\frac{dC}{dx}, \\qquad D=D_0\\exp\\!\\Big(-\\frac{Q_d}{RT}\\Big) \\]`
      },
      {
        baslik: "4. Mekanik Özellikler (Gerilme-Şekil Değiştirme)",
        icerik: `
          <p>Mühendislik gerilmesi ve şekil değiştirme:</p>
          \\[ \\sigma=\\frac{F}{A_0}, \\qquad \\varepsilon=\\frac{\\Delta l}{l_0} \\]
          <p>Elastik bölgede <b>Hooke yasası</b> geçerlidir: \\( \\sigma=E\\varepsilon \\).</p>
          <ul>
            <li><b>Akma dayanımı</b> \\( \\sigma_y \\): %0.2 ofset yöntemiyle bulunur.</li>
            <li><b>Çekme dayanımı (UTS):</b> eğrinin maksimumu.</li>
            <li><b>Süneklik:</b> % uzama; <b>tokluk:</b> eğri altındaki alan.</li>
            <li><b>Sertlik:</b> Brinell/Rockwell/Vickers testleri.</li>
          </ul>`
      },
      {
        baslik: "5. Faz Diyagramları ve Demir-Karbon Sistemi",
        icerik: `
          <p>İki fazlı bölgede bileşimler bağ çizgisiyle, miktarlar <b>kaldıraç kuralıyla</b> bulunur:</p>
          \\[ W_\\alpha=\\frac{C_L-C_0}{C_L-C_\\alpha} \\]
          <p>Fe-C diyagramında kritik noktalar: ötektoid (727&nbsp;°C, %0.76 C) →
          <b>perlit</b> (α-ferrit + sementit Fe<sub>3</sub>C). Ötektik: 1147&nbsp;°C, %4.3 C.
          Gibbs faz kuralı: \\( P+F=C+2 \\) (sabit basınçta \\( P+F=C+1 \\)).</p>`
      },
      {
        baslik: "6. Isıl İşlemler ve Malzeme Türleri",
        icerik: `
          <p>Çelikte soğuma hızı iç yapıyı belirler: yavaş → perlit; hızlı su verme →
          <b>martenzit</b> (sert, kırılgan) → <b>temperleme</b> ile tokluk kazandırılır.
          TTT diyagramları dönüşüm sürelerini gösterir.</p>
          <ul>
            <li><b>Metaller:</b> sünek, iletken.</li>
            <li><b>Seramikler:</b> sert, kırılgan, ısıya dayanıklı.</li>
            <li><b>Polimerler:</b> hafif, düşük ergime (termoplastik / termoset).</li>
            <li><b>Kompozitler:</b> matris + takviye (örn. karbon fiber).</li>
          </ul>`
      }
    ],
    formuller: [
      { ad: "Hooke Yasası", formul: `\\( \\sigma=E\\varepsilon \\)`, aciklama: "Elastik bölgede gerilme–şekil değiştirme." },
      { ad: "Mühendislik Gerilmesi", formul: `\\( \\sigma=\\dfrac{F}{A_0} \\)`, aciklama: "Kuvvet / ilk kesit alanı." },
      { ad: "Yoğunluk (Kristal)", formul: `\\( \\rho=\\dfrac{nA}{V_C N_A} \\)`, aciklama: "n: hücredeki atom sayısı, A: atom ağırlığı." },
      { ad: "Fick'in 1. Yasası", formul: `\\( J=-D\\dfrac{dC}{dx} \\)`, aciklama: "Difüzyon akısı ∝ derişim gradyanı." },
      { ad: "Bragg Yasası", formul: `\\( n\\lambda=2d\\sin\\theta \\)`, aciklama: "X-ışını kırınımı koşulu." },
      { ad: "Kaldıraç Kuralı", formul: `\\( W_\\alpha=\\dfrac{C_L-C_0}{C_L-C_\\alpha} \\)`, aciklama: "İki fazlı bölgede faz oranı." },
      { ad: "Arrhenius Difüzyon", formul: `\\( D=D_0 e^{-Q_d/RT} \\)`, aciklama: "Difüzyon katsayısının sıcaklıkla değişimi." }
    ],
    galeri: [], dokumanlar: [],
    videolar: [
      { baslik: "Taylor Sparks — Intro to Materials Science (Tam Kurs Playlist)", playlist: "PLL0SWcFqypCni--cQcrcRq4jTKoprDx-Z" },
      { baslik: "Callister Ch.9 — Faz Diyagramları Özeti", youtube: "TIO6-zOsPz0" }
    ],
    linkler: [
      { ad: "LearnChemE — Materials Science", url: "https://learncheme.com/screencasts/materials-science/", aciklama: "Callister'a göre kısa çözümlü videolar" },
      { ad: "MatWeb", url: "https://www.matweb.com/", aciklama: "Malzeme özellik veritabanı" },
      { ad: "DoITPoMS (Cambridge)", url: "https://www.doitpoms.ac.uk/", aciklama: "İnteraktif malzeme bilimi dersleri" },
      { ad: "Crystallography Open DB", url: "http://www.crystallography.net/cod/", aciklama: "Kristal yapı görselleştirme" }
    ],
    sorular: [
      {
        tip: "vize",
        soru: `<p>FCC yapının atomik dolgu faktörünün (APF) 0.74 olduğunu gösterin.</p>`,
        cozum: `
          <p>FCC'de hücre başına 4 atom vardır ve \\( a=2R\\sqrt2 \\):</p>
          \\[ APF=\\frac{4\\cdot\\frac{4}{3}\\pi R^3}{(2R\\sqrt2)^3}
             =\\frac{\\frac{16}{3}\\pi R^3}{16\\sqrt2\\,R^3}=\\frac{\\pi}{3\\sqrt2}\\approx 0.74 \\]`
      },
      {
        tip: "vize",
        soru: `<p>Kesiti \\( A_0=100\\,\\text{mm}^2 \\) olan çubuğa 20 kN çekme kuvveti uygulanıyor.
               \\( E=200\\,\\text{GPa} \\) ise elastik şekil değiştirme nedir?</p>`,
        cozum: `
          \\[ \\sigma=\\frac{F}{A_0}=\\frac{20\\,000}{100\\times10^{-6}}=200\\,\\text{MPa} \\]
          \\[ \\varepsilon=\\frac{\\sigma}{E}=\\frac{200\\times10^6}{200\\times10^9}=0.001=%0.1 \\]`
      },
      {
        tip: "final",
        soru: `<p>%0.4 C'li çelik 727&nbsp;°C'nin hemen altına yavaş soğutuluyor.
               Ötektoid öncesi ferrit oranını kaldıraç kuralıyla bulun.
               (\\( C_\\alpha=0.022 \\), \\( C_{ötektoid}=0.76 \\))</p>`,
        cozum: `
          \\[ W_{\\alpha}=\\frac{0.76-0.40}{0.76-0.022}=\\frac{0.36}{0.738}\\approx 0.49 \\]
          <p>Yapının yaklaşık <b>%49'u ötektoid öncesi ferrit</b>, kalanı perlittir.</p>`
      }
    ]
  }

};

/* Ana sayfadaki kart sırası */
const DERS_SIRASI = ["EE3061", "EE3012", "EE3014", "EE3016", "STAT2056", "MATH2055", "MSE2051"];

/* ============================================================
   HIZLI ERİŞİM — öğrencinin sık kullanacağı siteler (ana sayfa)
   ============================================================ */
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
