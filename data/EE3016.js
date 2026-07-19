/* ============================================================
   EE3016 — Fundamentals of Electromagnetics
   ------------------------------------------------------------
   Bu dosya SADECE bu derse aittir. İçerik eklemek için burayı düzenle.
   Alan açıklamaları için data/EE3061.js başlığına bak.

   Kapsam: Hayt & Buck / Sadiku temel alınarak bir dönemlik
   elektromanyetik dersinin çekirdek konuları.
   ============================================================ */

window.DERSLER = window.DERSLER || {};

window.DERSLER["EE3016"] = {
  ad: "Fundamentals of Electromagnetics",
  donem: "3. Sınıf · 1. Dönem",
  renk: "#60A5FA",
  ozet: "Vektör analizi ve koordinat sistemleri; Coulomb ve Gauss yasasıyla elektrostatik; potansiyel ve enerji; iletken/dielektrik ve kapasitans; Poisson-Laplace; akım ve süreklilik; Biot-Savart/Ampere ile manyetostatik; kuvvet, malzeme ve indüktans; Faraday ve Maxwell denklemleri; düzlem elektromanyetik dalgalar, deri derinliği ve Poynting vektörü.",
  konular: [
    {
      baslik: "1. Vektör Analizi ve Koordinat Sistemleri",
      icerik: `
        <p>Alanlar üç koordinat sisteminde ifade edilir: <b>kartezyen</b>, <b>silindirik</b>, <b>küresel</b>.
        Diferansiyel operatörler:</p>
        <ul>
          <li><b>Gradyan</b> \\( \\nabla V \\): skalerin en hızlı artış yönü (vektör).</li>
          <li><b>Diverjans</b> \\( \\nabla\\cdot\\mathbf{A} \\): kaynak/kuyu yoğunluğu (skaler).</li>
          <li><b>Rotasyonel</b> \\( \\nabla\\times\\mathbf{A} \\): dolanım/girdap (vektör).</li>
          <li><b>Laplasyen</b> \\( \\nabla^2 V=\\nabla\\cdot(\\nabla V) \\).</li>
        </ul>
        <p>İki temel teorem integralleri bağlar:</p>
        \\[ \\oint_S \\mathbf{A}\\cdot d\\mathbf{S}=\\int_V (\\nabla\\cdot\\mathbf{A})\\,dV \\quad\\text{(Diverjans / Gauss)} \\]
        \\[ \\oint_C \\mathbf{A}\\cdot d\\mathbf{l}=\\int_S (\\nabla\\times\\mathbf{A})\\cdot d\\mathbf{S} \\quad\\text{(Stokes)} \\]`
    },
    {
      baslik: "2. Coulomb Yasası ve Elektrik Alan",
      icerik: `
        <p>İki noktasal yük arasındaki kuvvet:</p>
        \\[ \\mathbf{F}=\\frac{Q_1 Q_2}{4\\pi\\varepsilon_0 R^2}\\,\\hat{\\mathbf{R}} \\]
        <p>Elektrik alan, birim yüke düşen kuvvettir: \\( \\mathbf{E}=\\mathbf{F}/q \\). Noktasal yük için:</p>
        \\[ \\mathbf{E}=\\frac{Q}{4\\pi\\varepsilon_0 r^2}\\,\\hat{\\mathbf{r}} \\]
        <p>Sürekli dağılımlarda alan, çizgi (\\( \\rho_L \\)), yüzey (\\( \\rho_S \\)) veya hacim (\\( \\rho_v \\))
        yük yoğunluğu üzerinden integralle bulunur. Üst üste binme (superposition) geçerlidir.</p>`
    },
    {
      baslik: "3. Elektrik Akı Yoğunluğu ve Gauss Yasası",
      icerik: `
        <p>Elektrik akı yoğunluğu \\( \\mathbf{D}=\\varepsilon_0\\mathbf{E} \\) (ortamdan bağımsız tanımlanır).
        <b>Gauss yasası</b>: kapalı yüzeyden çıkan net akı, içerdeki net yüke eşittir.</p>
        \\[ \\oint_S \\mathbf{D}\\cdot d\\mathbf{S}=Q_{enc} \\qquad\\Big(\\oint_S \\mathbf{E}\\cdot d\\mathbf{S}=\\frac{Q_{enc}}{\\varepsilon_0}\\Big) \\]
        <p>Diferansiyel biçim: \\( \\nabla\\cdot\\mathbf{D}=\\rho_v \\). Simetrik problemlerde (küre, sonsuz çizgi,
        sonsuz düzlem) uygun bir Gauss yüzeyiyle alan hızlıca bulunur; örn. sonsuz çizgi:
        \\( E=\\dfrac{\\rho_L}{2\\pi\\varepsilon_0 r} \\).</p>`
    },
    {
      baslik: "4. Elektrik Potansiyeli ve Enerji",
      icerik: `
        <p>İki nokta arasında birim yükü taşımak için yapılan iş, potansiyel farkını verir.
        Noktasal yükün potansiyeli:</p>
        \\[ V=\\frac{Q}{4\\pi\\varepsilon_0 r} \\]
        <p>Alan, potansiyelin negatif gradyanıdır:</p>
        \\[ \\mathbf{E}=-\\nabla V \\]
        <p>Elektrostatik alan korunumludur (\\( \\oint\\mathbf{E}\\cdot d\\mathbf{l}=0 \\), yani \\( \\nabla\\times\\mathbf{E}=0 \\)).
        Yük sisteminde depolanan enerji ve enerji yoğunluğu:</p>
        \\[ W_E=\\frac{1}{2}\\int_V \\varepsilon_0 E^2\\,dV, \\qquad w_E=\\frac{1}{2}\\varepsilon_0 E^2 \\]`
    },
    {
      baslik: "5. İletkenler, Dielektrikler ve Kapasitans",
      icerik: `
        <p><b>İletken</b> içinde statik durumda \\( \\mathbf{E}=0 \\); yük yüzeyde toplanır, yüzey eşpotansiyeldir.</p>
        <p><b>Dielektrikte</b> uygulanan alan dipolleri hizalar (<b>polarizasyon</b> \\( \\mathbf{P} \\)):</p>
        \\[ \\mathbf{D}=\\varepsilon_0\\mathbf{E}+\\mathbf{P}=\\varepsilon\\mathbf{E}, \\qquad \\varepsilon=\\varepsilon_0\\varepsilon_r \\]
        <p><b>Sınır koşulları:</b> \\( \\mathbf{E} \\)'nin teğet bileşeni sürekli (\\( E_{t1}=E_{t2} \\)),
        \\( \\mathbf{D} \\)'nin normal bileşeni yüzey yüküne göre atlar (\\( D_{n1}-D_{n2}=\\rho_S \\)).</p>
        <p><b>Kapasitans</b> \\( C=Q/V \\); paralel plaka için:</p>
        \\[ C=\\frac{\\varepsilon A}{d}, \\qquad W_E=\\frac{1}{2}CV^2 \\]`
    },
    {
      baslik: "6. Poisson ve Laplace Denklemleri",
      icerik: `
        <p>Potansiyel için temel denklemler (sınır değer problemleri):</p>
        \\[ \\nabla^2 V=-\\frac{\\rho_v}{\\varepsilon} \\quad\\text{(Poisson)}, \\qquad
           \\nabla^2 V=0 \\quad\\text{(Laplace, yüksüz bölge)} \\]
        <p>Sınır koşulları verilen bir bölgede \\( V \\) çözülür, ardından \\( \\mathbf{E}=-\\nabla V \\)
        ve iletken yüzeylerinde \\( \\rho_S=D_n \\) bulunur. <b>Teklik teoremi</b>: sınır koşullarını
        sağlayan çözüm tektir. Kapasitans ve alan hesaplarının analitik omurgasıdır.</p>`
    },
    {
      baslik: "7. Elektrik Akımı ve Süreklilik",
      icerik: `
        <p>Akım yoğunluğu \\( \\mathbf{J} \\) ile akım \\( I=\\int_S \\mathbf{J}\\cdot d\\mathbf{S} \\).
        İletkende <b>Ohm yasasının nokta biçimi</b>:</p>
        \\[ \\mathbf{J}=\\sigma\\mathbf{E} \\]
        <p><b>Süreklilik denklemi</b> (yük korunumu):</p>
        \\[ \\nabla\\cdot\\mathbf{J}=-\\frac{\\partial\\rho_v}{\\partial t} \\]
        <p>Kararlı durumda \\( \\nabla\\cdot\\mathbf{J}=0 \\). Direnç, geometri ve iletkenlikten
        \\( R=\\dfrac{l}{\\sigma A} \\) ile bulunur.</p>`
    },
    {
      baslik: "8. Manyetostatik: Biot-Savart ve Ampere",
      icerik: `
        <p><b>Biot-Savart yasası</b> bir akım elemanının ürettiği alanı verir:</p>
        \\[ d\\mathbf{H}=\\frac{I\\,d\\mathbf{l}\\times\\hat{\\mathbf{R}}}{4\\pi R^2} \\]
        <p><b>Ampere devre yasası</b> (simetride pratik):</p>
        \\[ \\oint_C \\mathbf{H}\\cdot d\\mathbf{l}=I_{enc}, \\qquad \\nabla\\times\\mathbf{H}=\\mathbf{J} \\]
        <p>Örnekler: sonsuz tel \\( H=\\dfrac{I}{2\\pi r} \\); uzun solenoid \\( H=nI \\).
        Manyetik akı yoğunluğu \\( \\mathbf{B}=\\mu\\mathbf{H} \\), akı \\( \\Phi=\\int_S\\mathbf{B}\\cdot d\\mathbf{S} \\).
        \\( \\nabla\\cdot\\mathbf{B}=0 \\) — manyetik tek kutup yoktur.</p>`
    },
    {
      baslik: "9. Manyetik Kuvvet ve Malzemeler",
      icerik: `
        <p><b>Lorentz kuvveti</b> — yüke etkiyen toplam kuvvet:</p>
        \\[ \\mathbf{F}=q(\\mathbf{E}+\\mathbf{v}\\times\\mathbf{B}) \\]
        <p>Akım taşıyan tele etkiyen kuvvet: \\( \\mathbf{F}=I\\int d\\mathbf{l}\\times\\mathbf{B} \\).</p>
        <p><b>Manyetik malzemeler:</b> diamanyetik, paramanyetik ve ferromanyetik (yüksek \\( \\mu_r \\)).
        Mıknatıslanma \\( \\mathbf{M} \\), \\( \\mathbf{B}=\\mu_0(\\mathbf{H}+\\mathbf{M})=\\mu\\mathbf{H} \\).</p>
        <p><b>Sınır koşulları:</b> \\( H \\)'nin teğet bileşeni yüzey akımına göre atlar,
        \\( B \\)'nin normal bileşeni süreklidir (\\( B_{n1}=B_{n2} \\)).</p>`
    },
    {
      baslik: "10. İndüktans ve Manyetik Enerji",
      icerik: `
        <p>Bir devrenin kendi akımıyla oluşan akı bağını akıma oranı <b>öz indüktanstır</b>:</p>
        \\[ L=\\frac{\\Phi_{bağ}}{I}=\\frac{N\\Phi}{I} \\]
        <p>İki devre arasında <b>karşılıklı indüktans</b> \\( M \\) tanımlanır.
        Manyetik alanda depolanan enerji ve enerji yoğunluğu:</p>
        \\[ W_M=\\frac{1}{2}LI^2, \\qquad w_M=\\frac{1}{2}\\mu H^2=\\frac{B^2}{2\\mu} \\]
        <p>Örnek: uzun solenoid \\( L=\\mu n^2 \\ell A \\). İndüktans, transformatör ve enerji
        depolamanın temelidir.</p>`
    },
    {
      baslik: "11. Faraday Yasası ve Zamanla Değişen Alanlar",
      icerik: `
        <p><b>Faraday yasası</b>: değişen manyetik akı emk indükler:</p>
        \\[ \\varepsilon=-\\frac{d\\Phi_B}{dt}, \\qquad \\nabla\\times\\mathbf{E}=-\\frac{\\partial\\mathbf{B}}{\\partial t} \\]
        <p>Negatif işaret <b>Lenz yasasıdır</b>: indüklenen akım değişime karşı koyar.
        İki katkı vardır: <b>transformatör emk</b> (zamanla değişen B) ve <b>hareket emk</b>
        (\\( \\varepsilon=\\int(\\mathbf{v}\\times\\mathbf{B})\\cdot d\\mathbf{l} \\)).</p>
        <p>Maxwell'in katkısı: Ampere yasasına <b>yer değiştirme akımı</b> eklenir
        (\\( \\partial\\mathbf{D}/\\partial t \\)); bu terim kapasitör aralığında ve dalga yayılımında hayatidir.</p>`
    },
    {
      baslik: "12. Maxwell Denklemleri",
      icerik: `
        <p>Tüm elektromanyetiği özetleyen dört denklem (diferansiyel biçim):</p>
        \\[ \\nabla\\cdot\\mathbf{D}=\\rho_v, \\qquad \\nabla\\cdot\\mathbf{B}=0 \\]
        \\[ \\nabla\\times\\mathbf{E}=-\\frac{\\partial\\mathbf{B}}{\\partial t}, \\qquad
           \\nabla\\times\\mathbf{H}=\\mathbf{J}+\\frac{\\partial\\mathbf{D}}{\\partial t} \\]
        <p>Sırasıyla: Gauss (elektrik), Gauss (manyetik — tek kutup yok), Faraday, Ampere-Maxwell.
        Kurucu bağıntılar \\( \\mathbf{D}=\\varepsilon\\mathbf{E} \\), \\( \\mathbf{B}=\\mu\\mathbf{H} \\),
        \\( \\mathbf{J}=\\sigma\\mathbf{E} \\) ile birlikte sistemi kapatır. İntegral biçimleri Gauss ve
        Stokes teoremleriyle elde edilir.</p>`
    },
    {
      baslik: "13. Düzlem Elektromanyetik Dalgalar",
      icerik: `
        <p>Kaynaksız ortamda Maxwell denklemlerinden <b>dalga denklemi</b> çıkar:</p>
        \\[ \\nabla^2\\mathbf{E}=\\mu\\varepsilon\\frac{\\partial^2\\mathbf{E}}{\\partial t^2} \\]
        <p>Çözüm, ışık hızında yayılan düzlem dalgadır: \\( v=\\dfrac{1}{\\sqrt{\\mu\\varepsilon}} \\)
        (boşlukta \\( c=3\\times10^8\\,\\text{m/s} \\)). \\( \\mathbf{E} \\) ve \\( \\mathbf{H} \\) birbirine ve yayılım
        yönüne diktir (enine dalga). Oranları <b>ortamın öz empedansıdır</b>:</p>
        \\[ \\eta=\\frac{E}{H}=\\sqrt{\\frac{\\mu}{\\varepsilon}}, \\qquad \\eta_0=\\sqrt{\\frac{\\mu_0}{\\varepsilon_0}}\\approx 377\\,\\Omega \\]
        <p>Dalga sayısı \\( \\beta=\\omega\\sqrt{\\mu\\varepsilon}=2\\pi/\\lambda \\).</p>`
    },
    {
      baslik: "14. Ortamlarda Yayılım ve Deri Derinliği",
      icerik: `
        <p>Kayıplı ortamda dalga sayısı karmaşıktır: \\( \\gamma=\\alpha+j\\beta \\); genlik
        \\( e^{-\\alpha z} \\) ile sönümlenir (\\( \\alpha \\): zayıflama sabiti).</p>
        <p><b>İyi iletkende</b> (\\( \\sigma\\gg\\omega\\varepsilon \\)) alan yüzeye yakın kalır; genliğin
        \\( 1/e \\)'ye düştüğü mesafe <b>deri derinliğidir</b>:</p>
        \\[ \\delta=\\frac{1}{\\sqrt{\\pi f\\mu\\sigma}} \\]
        <p>Frekans arttıkça \\( \\delta \\) küçülür → yüksek frekansta akım iletken yüzeyinde yoğunlaşır
        (deri etkisi); kablo/anten tasarımını doğrudan etkiler.</p>`
    },
    {
      baslik: "15. Poynting Vektörü ve Güç",
      icerik: `
        <p>Elektromanyetik dalganın taşıdığı güç akısı yoğunluğu <b>Poynting vektörüyle</b> verilir:</p>
        \\[ \\mathbf{S}=\\mathbf{E}\\times\\mathbf{H} \\quad (\\text{W/m}^2) \\]
        <p>Yönü yayılım yönündedir; kapalı yüzey integrali o hacme giren/çıkan gücü verir
        (Poynting teoremi — enerji korunumu). Zaman-ortalama güç yoğunluğu:</p>
        \\[ S_{ort}=\\frac{1}{2}\\,\\mathrm{Re}\\{\\mathbf{E}\\times\\mathbf{H}^*\\}=\\frac{E_0^2}{2\\eta} \\]
        <p>Anten yayılımı, güç iletimi ve mikrodalga sistemlerinin analiz temelidir.</p>`
    }
  ],
  formuller: [
    { ad: "Diverjans Teoremi", formul: `\\( \\oint_S\\mathbf{A}\\cdot d\\mathbf{S}=\\int_V(\\nabla\\cdot\\mathbf{A})dV \\)`, aciklama: "Yüzey akısı = hacim diverjansı." },
    { ad: "Stokes Teoremi", formul: `\\( \\oint_C\\mathbf{A}\\cdot d\\mathbf{l}=\\int_S(\\nabla\\times\\mathbf{A})\\cdot d\\mathbf{S} \\)`, aciklama: "Dolanım = yüzey rotasyoneli." },
    { ad: "Coulomb Yasası", formul: `\\( \\mathbf{F}=\\dfrac{Q_1Q_2}{4\\pi\\varepsilon_0 R^2}\\hat{\\mathbf{R}} \\)`, aciklama: "İki nokta yük arası kuvvet." },
    { ad: "Noktasal Yük Alanı", formul: `\\( E=\\dfrac{Q}{4\\pi\\varepsilon_0 r^2} \\)`, aciklama: "Noktasal yükün elektrik alanı." },
    { ad: "Gauss Yasası", formul: `\\( \\oint_S\\mathbf{D}\\cdot d\\mathbf{S}=Q_{enc} \\)`, aciklama: "∇·D = ρ; kapalı yüzey akısı." },
    { ad: "Potansiyel–Alan", formul: `\\( \\mathbf{E}=-\\nabla V \\)`, aciklama: "Alan = −gradyan potansiyel." },
    { ad: "Elektrik Enerji Yoğunluğu", formul: `\\( w_E=\\tfrac{1}{2}\\varepsilon E^2 \\)`, aciklama: "Birim hacimde depolanan enerji." },
    { ad: "Kapasitans (Paralel Plaka)", formul: `\\( C=\\dfrac{\\varepsilon A}{d} \\)`, aciklama: "W=½CV²." },
    { ad: "Poisson / Laplace", formul: `\\( \\nabla^2 V=-\\dfrac{\\rho_v}{\\varepsilon} \\)`, aciklama: "Yüksüz bölgede ∇²V=0." },
    { ad: "Ohm (Nokta Biçimi)", formul: `\\( \\mathbf{J}=\\sigma\\mathbf{E} \\)`, aciklama: "İletkende akım yoğunluğu." },
    { ad: "Süreklilik", formul: `\\( \\nabla\\cdot\\mathbf{J}=-\\dfrac{\\partial\\rho_v}{\\partial t} \\)`, aciklama: "Yük korunumu." },
    { ad: "Biot-Savart", formul: `\\( d\\mathbf{H}=\\dfrac{I\\,d\\mathbf{l}\\times\\hat{\\mathbf{R}}}{4\\pi R^2} \\)`, aciklama: "Akım elemanının alanı." },
    { ad: "Ampere Yasası", formul: `\\( \\oint_C\\mathbf{H}\\cdot d\\mathbf{l}=I_{enc} \\)`, aciklama: "∇×H = J; kapalı yol." },
    { ad: "Lorentz Kuvveti", formul: `\\( \\mathbf{F}=q(\\mathbf{E}+\\mathbf{v}\\times\\mathbf{B}) \\)`, aciklama: "Yüke etkiyen toplam kuvvet." },
    { ad: "İndüktans / Enerji", formul: `\\( L=\\dfrac{N\\Phi}{I},\\; W_M=\\tfrac{1}{2}LI^2 \\)`, aciklama: "Manyetik alanda enerji." },
    { ad: "Faraday Yasası", formul: `\\( \\varepsilon=-\\dfrac{d\\Phi_B}{dt} \\)`, aciklama: "∇×E = −∂B/∂t; Lenz işareti." },
    { ad: "Ampere-Maxwell", formul: `\\( \\nabla\\times\\mathbf{H}=\\mathbf{J}+\\dfrac{\\partial\\mathbf{D}}{\\partial t} \\)`, aciklama: "Yer değiştirme akımı terimi." },
    { ad: "Dalga Hızı", formul: `\\( v=\\dfrac{1}{\\sqrt{\\mu\\varepsilon}} \\)`, aciklama: "Boşlukta c=3×10⁸ m/s." },
    { ad: "Öz Empedans", formul: `\\( \\eta=\\sqrt{\\dfrac{\\mu}{\\varepsilon}},\\; \\eta_0\\approx377\\,\\Omega \\)`, aciklama: "E/H oranı." },
    { ad: "Deri Derinliği", formul: `\\( \\delta=\\dfrac{1}{\\sqrt{\\pi f\\mu\\sigma}} \\)`, aciklama: "İyi iletkende sönüm mesafesi." },
    { ad: "Poynting Vektörü", formul: `\\( \\mathbf{S}=\\mathbf{E}\\times\\mathbf{H} \\)`, aciklama: "Güç akısı yoğunluğu (W/m²)." }
  ],
  galeri: [],
  dokumanlar: [],
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
    },
    {
      tip: "vize",
      soru: `<p>Sonsuz uzun bir çizgi yükünün yoğunluğu \\( \\rho_L=1\\,\\text{nC/m} \\).
             \\( r=2\\,\\text{m} \\) uzaklıkta elektrik alanı bulun. \\( (k=9\\times10^9) \\)</p>`,
      cozum: `
        <p>Gauss yasasından \\( E=\\dfrac{\\rho_L}{2\\pi\\varepsilon_0 r}=\\dfrac{2k\\rho_L}{r} \\):</p>
        \\[ E=\\frac{2(9\\times10^9)(1\\times10^{-9})}{2}=\\frac{18}{2}=9\\;\\text{V/m} \\]`
    },
    {
      tip: "vize",
      soru: `<p>Plaka alanı \\( A=100\\,\\text{cm}^2 \\), aralık \\( d=1\\,\\text{mm} \\), dielektrik \\( \\varepsilon_r=4 \\)
             olan paralel plaka kapasitörün sığasını bulun. \\( (\\varepsilon_0=8.85\\times10^{-12}) \\)</p>`,
      cozum: `
        \\[ C=\\frac{\\varepsilon_r\\varepsilon_0 A}{d}=\\frac{4(8.85\\times10^{-12})(0.01)}{0.001}
           \\approx 3.54\\times10^{-10}\\,\\text{F}=354\\,\\text{pF} \\]`
    },
    {
      tip: "vize",
      soru: `<p>Sonsuz uzun düz telden \\( I=10\\,\\text{A} \\) akıyor. \\( r=5\\,\\text{cm} \\) uzaklıkta
             \\( H \\) ve \\( B \\) nedir? \\( (\\mu_0=4\\pi\\times10^{-7}) \\)</p>`,
      cozum: `
        \\[ H=\\frac{I}{2\\pi r}=\\frac{10}{2\\pi(0.05)}\\approx 31.8\\;\\text{A/m} \\]
        \\[ B=\\mu_0 H=(4\\pi\\times10^{-7})(31.8)\\approx 40\\;\\mu\\text{T} \\]`
    },
    {
      tip: "final",
      soru: `<p>Alanı \\( A=0.02\\,\\text{m}^2 \\) olan bir halkadan geçen manyetik alan
             \\( B(t)=0.5\\sin(100t)\\,\\text{T} \\). İndüklenen emk'nin tepe değeri nedir?</p>`,
      cozum: `
        \\[ \\varepsilon=-A\\frac{dB}{dt}=-0.02\\cdot 0.5\\cdot100\\cos(100t)=-\\cos(100t) \\]
        <p>Tepe değer: \\( |\\varepsilon|_{max}=\\mathbf{1\\,V} \\).</p>`
    },
    {
      tip: "final",
      soru: `<p>Boşlukta yayılan düzlem dalganın alanı \\( E_0=10\\,\\text{V/m} \\), \\( f=100\\,\\text{MHz} \\).
             (a) \\( H_0 \\), (b) dalga boyu, (c) ortalama güç yoğunluğu nedir? \\( (\\eta_0=377\\,\\Omega) \\)</p>`,
      cozum: `
        <p>(a) \\( H_0=\\dfrac{E_0}{\\eta_0}=\\dfrac{10}{377}\\approx 0.0265\\,\\text{A/m} \\).</p>
        <p>(b) \\( \\lambda=\\dfrac{c}{f}=\\dfrac{3\\times10^8}{10^8}=3\\,\\text{m} \\).</p>
        <p>(c) \\( S_{ort}=\\dfrac{E_0^2}{2\\eta_0}=\\dfrac{100}{754}\\approx 0.133\\,\\text{W/m}^2 \\).</p>`
    },
    {
      tip: "final",
      soru: `<p>Bakırda (\\( \\sigma=5.8\\times10^7\\,\\text{S/m} \\), \\( \\mu=\\mu_0 \\)) \\( f=1\\,\\text{MHz} \\)
             için deri derinliğini bulun.</p>`,
      cozum: `
        \\[ \\delta=\\frac{1}{\\sqrt{\\pi f\\mu_0\\sigma}}
           =\\frac{1}{\\sqrt{\\pi(10^6)(4\\pi\\times10^{-7})(5.8\\times10^7)}}\\approx 6.6\\times10^{-5}\\,\\text{m}=66\\,\\mu\\text{m} \\]
        <p>Yüksek frekansta akım telin yalnızca ince yüzey katmanından geçer (deri etkisi).</p>`
    },
    {
      tip: "final",
      soru: `<p>\\( q=1\\,\\text{mC} \\) yük, \\( \\mathbf{v}=100\\,\\hat{\\mathbf{x}}\\,\\text{m/s} \\) hızıyla
             \\( \\mathbf{B}=0.2\\,\\hat{\\mathbf{z}}\\,\\text{T} \\) alanında hareket ediyor.
             Manyetik kuvveti bulun.</p>`,
      cozum: `
        \\[ \\mathbf{F}=q\\,\\mathbf{v}\\times\\mathbf{B}=(10^{-3})(100\\,\\hat{\\mathbf{x}})\\times(0.2\\,\\hat{\\mathbf{z}}) \\]
        <p>\\( \\hat{\\mathbf{x}}\\times\\hat{\\mathbf{z}}=-\\hat{\\mathbf{y}} \\) olduğundan:</p>
        \\[ \\mathbf{F}=-0.02\\,\\hat{\\mathbf{y}}\\;\\text{N} \\quad(|\\mathbf{F}|=0.02\\,\\text{N}) \\]`
    },
    {
      tip: "final",
      soru: `<p>Yer değiştirme akımı nedir ve Maxwell neden Ampere yasasına bu terimi ekledi?</p>`,
      cozum: `
        <p>Yer değiştirme akımı yoğunluğu \\( \\mathbf{J}_d=\\dfrac{\\partial\\mathbf{D}}{\\partial t} \\)'dir.
        Orijinal Ampere yasası (\\( \\nabla\\times\\mathbf{H}=\\mathbf{J} \\)) süreklilikle çelişir: bir kapasitörün
        levhaları arasında iletim akımı yoktur ama alan değişir.</p>
        <p>Bu terim eklenince hem süreklilik korunur hem de \\( \\partial\\mathbf{D}/\\partial t \\) ile
        \\( \\partial\\mathbf{B}/\\partial t \\) birbirini besleyerek <b>elektromanyetik dalgaların</b>
        boşlukta yayılmasını mümkün kılar.</p>`
    }
  ]
};