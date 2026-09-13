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
  ozet: "Vektör analizi ve koordinat sistemleri; Coulomb ve Gauss yasasıyla elektrostatik; potansiyel, enerji, dipol ve görüntü yöntemi; iletken/dielektrik, sınır koşulları ve kapasitans; Poisson-Laplace; akım ve süreklilik; Biot-Savart/Ampere ve vektör potansiyel ile manyetostatik; kuvvet, malzeme ve indüktans; Faraday ve Maxwell denklemleri; düzlem dalgalar, kayıplı ortam ve deri derinliği, sınırdan yansıma/iletim, Poynting vektörü; dalga polarizasyonu ve uyum kaybı; iletim hatları (karakteristik empedans, giriş empedansı, çeyrek dalga uyumlaştırma, Smith abağı).",
  konular: [
    {
      baslik: "1. Vektör Analizi ve Koordinat Sistemleri",
      icerik: `
        <p>Elektromanyetik alanlar vektör alanlarıdır; dersin ilk üç haftası ve sınavların ilk sorusu neredeyse her zaman doğru
        koordinat sistemini seçip doğru diferansiyel elemanı yazmaktır. Üç sistem: <b>kartezyen</b> \\( (x,y,z) \\),
        <b>silindirik</b> \\( (\\rho,\\phi,z) \\), <b>küresel</b> \\( (r,\\theta,\\phi) \\). Kural: simetrisi ne ise o sistem —
        sonsuz tel/koaksiyel → silindirik, nokta yük/küre → küresel.</p>
        <p><b>Diferansiyel elemanlar</b> (ezberlenmesi şart):</p>
        <ul>
          <li>Silindirik: \\( d\\mathbf l=d\\rho\\,\\hat{\\boldsymbol\\rho}+\\rho\\,d\\phi\\,\\hat{\\boldsymbol\\phi}+dz\\,\\hat{\\mathbf z} \\);
          \\( dV=\\rho\\,d\\rho\\,d\\phi\\,dz \\); yan yüzey \\( dS=\\rho\\,d\\phi\\,dz \\).</li>
          <li>Küresel: \\( d\\mathbf l=dr\\,\\hat{\\mathbf r}+r\\,d\\theta\\,\\hat{\\boldsymbol\\theta}+r\\sin\\theta\\,d\\phi\\,\\hat{\\boldsymbol\\phi} \\);
          \\( dV=r^2\\sin\\theta\\,dr\\,d\\theta\\,d\\phi \\); küre yüzeyi \\( dS=r^2\\sin\\theta\\,d\\theta\\,d\\phi \\).</li>
          <li>Dönüşüm: \\( \\rho=\\sqrt{x^2+y^2} \\), \\( \\phi=\\arctan(y/x) \\); birim vektörler <b>konuma bağlıdır</b>
          (\\( \\hat{\\boldsymbol\\rho} \\) her noktada farklı yöne bakar) — bu yüzden integral dışına çıkarılamazlar.</li>
        </ul>
        <p><b>Operatörler ve fiziksel anlamları:</b> Gradyan \\( \\nabla V \\) — skalerin en hızlı artış yönü ve hızı (E = −∇V).
        Diverjans \\( \\nabla\\cdot\\mathbf A \\) — birim hacimden çıkan net akı; kaynak varsa pozitif (yük → D). Rotasyonel
        \\( \\nabla\\times\\mathbf A \\) — alanın dolanma eğilimi (akım → H). Laplasyen \\( \\nabla^2V=\\nabla\\cdot\\nabla V \\).
        Silindirik/küresel biçimleri formül sayfasından bakılır ama <b>\\( \\rho \\) ve \\( r^2\\sin\\theta \\) çarpanlarını unutmamak</b>
        en sık hatadır: \\( \\nabla\\cdot\\mathbf A=\\frac1\\rho\\frac{\\partial(\\rho A_\\rho)}{\\partial\\rho}+\\dots \\)</p>
        <p><b>İki köprü teoremi</b> hacim/yüzey ve yüzey/çizgi integrallerini bağlar ve Maxwell denklemlerinin integral↔diferansiyel
        biçimleri arasındaki geçişin tamamıdır:</p>
        \\[ \\oint_S\\mathbf A\\cdot d\\mathbf S=\\int_V(\\nabla\\cdot\\mathbf A)\\,dV \\;\\;(\\text{Diverjans}), \\qquad
           \\oint_C\\mathbf A\\cdot d\\mathbf l=\\int_S(\\nabla\\times\\mathbf A)\\cdot d\\mathbf S \\;\\;(\\text{Stokes}) \\]
        <p>Özdeşlikler: \\( \\nabla\\times\\nabla V=0 \\) (gradyan alanı dolanımsız → korunumlu), \\( \\nabla\\cdot(\\nabla\\times\\mathbf A)=0 \\)
        (rotasyonel alanın kaynağı yok → \\( \\nabla\\cdot\\mathbf B=0 \\)'ın nedeni).</p>`
    },
    {
      baslik: "2. Coulomb Yasası ve Elektrik Alan",
      icerik: `
        <p>İki noktasal yük arasındaki kuvvet uzaklığın karesiyle azalır ve yükleri birleştiren doğru boyuncadır:</p>
        \\[ \\mathbf F_{12}=\\frac{Q_1Q_2}{4\\pi\\varepsilon_0R^2}\\,\\hat{\\mathbf R}_{12}, \\qquad \\varepsilon_0=8.854\\times10^{-12}\\,\\text{F/m},
        \\quad \\frac{1}{4\\pi\\varepsilon_0}\\approx9\\times10^9 \\]
        <p>\\( \\hat{\\mathbf R}_{12} \\), 1'den 2'ye yönelmiş birim vektördür: \\( \\mathbf R=\\mathbf r_2-\\mathbf r_1 \\), \\( \\hat{\\mathbf R}=\\mathbf R/|\\mathbf R| \\).
        Vektör hesabında en sık hata bu yönü ters almaktır; aynı işaretli yükler itiyorsa kuvvet \\( \\hat{\\mathbf R} \\) yönünde çıkmalı.</p>
        <p><b>Elektrik alan</b>, "orada bir test yükü olsa birim yüke ne kuvvet gelirdi" sorusunun yanıtıdır: \\( \\mathbf E=\\mathbf F/q \\).
        Noktasal yük için \\( \\mathbf E=\\dfrac{Q}{4\\pi\\varepsilon_0r^2}\\hat{\\mathbf r} \\) (V/m = N/C). Alan kavramı, kuvveti kaynak ile
        etkilenen yük arasında ikiye ayırır: kaynak alanı yaratır, yük alanı hisseder — Faraday'ın "alan" fikri budur.</p>
        <p><b>Üst üste binme:</b> Coulomb doğrusaldır; N yükün alanı vektörel toplamdır. Sürekli dağılımlarda toplam integrale döner:</p>
        \\[ \\mathbf E=\\frac{1}{4\\pi\\varepsilon_0}\\int\\frac{dQ}{R^2}\\hat{\\mathbf R}, \\qquad dQ=\\rho_L\\,dl \\;|\\; \\rho_S\\,dS \\;|\\; \\rho_v\\,dV \\]
        <p><b>Çözüm şablonu:</b> (1) simetriye bak, hangi bileşenler sıfırlanır; (2) \\( dQ \\) yaz; (3) \\( \\mathbf R \\)'yi kaynak noktasından
        alan noktasına yaz; (4) yalnızca kalan bileşeni integre et. Klasik sonuçlar: sonsuz çizgi yükü
        \\( \\mathbf E=\\dfrac{\\rho_L}{2\\pi\\varepsilon_0\\rho}\\hat{\\boldsymbol\\rho} \\) (1/ρ ile azalır), sonsuz düzlem yükü
        \\( \\mathbf E=\\dfrac{\\rho_S}{2\\varepsilon_0}\\hat{\\mathbf n} \\) (<b>uzaklıktan bağımsız</b>), halka ekseni
        \\( E_z=\\dfrac{\\rho_L a z}{2\\varepsilon_0(a^2+z^2)^{3/2}} \\).</p>
        <p>Kuvvet çizgileri E'ye teğettir, pozitif yükten çıkar negatifte biter, birbirini kesmez; yoğunlukları alan şiddetini gösterir.</p>`
    },
    {
      baslik: "3. Elektrik Akı Yoğunluğu ve Gauss Yasası",
      icerik: `
        <p>Faraday'ın deneyi: yüklü küreyi topraklanmış bir kabukla sarınca kabuğun iç yüzeyinde tam \\( -Q \\) belirir — aradaki ortam
        ne olursa olsun. Bu "ortamdan bağımsız" nicelik <b>elektrik akı yoğunluğu</b> \\( \\mathbf D \\)'dir; boşlukta
        \\( \\mathbf D=\\varepsilon_0\\mathbf E \\) (C/m²). Akı \\( \\Psi=\\int\\mathbf D\\cdot d\\mathbf S \\) coulomb cinsindendir.</p>
        <p><b>Gauss yasası:</b> kapalı bir yüzeyden çıkan net akı, içerdeki net yüke eşittir:</p>
        \\[ \\oint_S\\mathbf D\\cdot d\\mathbf S=Q_{enc}=\\int_V\\rho_v\\,dV \\qquad\\Longleftrightarrow\\qquad \\nabla\\cdot\\mathbf D=\\rho_v \\]
        <p>Diferansiyel biçim, diverjans teoremiyle çıkar ve <b>Maxwell'in ilk denklemidir</b>. Coulomb yasasına eşdeğerdir
        (ters kare yasasından türer) ama simetrik problemlerde hesabı integralden bölmeye indirir.</p>
        <p><b>Gauss yüzeyi seçimi</b> — yasa her yüzey için doğrudur, işe yaraması için yüzeyde \\( \\mathbf D \\) ya normal ve sabit
        büyüklükte ya da teğet (katkısız) olmalıdır:</p>
        <ul>
          <li><b>Küresel simetri</b> (nokta yük, düzgün yüklü küre): eş merkezli küre. \\( D_r\\cdot4\\pi r^2=Q_{enc} \\).
          Düzgün yüklü kürenin içinde \\( Q_{enc}=Q\\,r^3/a^3 \\) → alan \\( r \\) ile <b>artar</b>, dışında \\( 1/r^2 \\) ile azalır.</li>
          <li><b>Silindirik simetri</b> (sonsuz çizgi, koaksiyel kablo): L uzunluklu eş eksenli silindir. Kapaklar katkısız,
          \\( D_\\rho\\cdot2\\pi\\rho L=\\rho_L L \\) ⟹ \\( E=\\dfrac{\\rho_L}{2\\pi\\varepsilon_0\\rho} \\).</li>
          <li><b>Düzlemsel simetri</b> (sonsuz yüklü düzlem): iki yanı düzleme paralel kutu (pillbox).
          \\( 2D_nA=\\rho_SA \\) ⟹ \\( E=\\rho_S/2\\varepsilon_0 \\).</li>
        </ul>
        <p><b>Okuma:</b> \\( \\nabla\\cdot\\mathbf D=\\rho_v \\) noktasal bir ifadedir — alanın bir noktada "kaynak" olması için tam o noktada
        yük olmalıdır. Nokta yükten uzakta \\( \\nabla\\cdot\\mathbf E=0 \\): alan çizgileri doğar ya da ölmez, sadece seyrekleşir.
        Sınavda "verilen \\( \\mathbf D \\) alanından yük yoğunluğunu bulun" tam bu diverjans hesabıdır (koordinat çarpanlarına dikkat).</p>`
    },
    {
      baslik: "4. Elektrik Potansiyeli ve Enerji",
      icerik: `
        <p>Bir yükü alanda A'dan B'ye taşırken alana karşı yapılan iş, birim yük başına <b>potansiyel farkıdır</b>:</p>
        \\[ V_{AB}=V_B-V_A=-\\int_A^B\\mathbf E\\cdot d\\mathbf l \\quad(\\text{V=J/C}) \\]
        <p>Eksi işaret: alan yönünde giderken potansiyel düşer. Elektrostatik alan <b>korunumludur</b>: iş yoldan bağımsızdır,
        kapalı yolda \\( \\oint\\mathbf E\\cdot d\\mathbf l=0 \\), yani \\( \\nabla\\times\\mathbf E=0 \\) (Stokes). Bu yüzden skaler bir potansiyel
        tanımlanabilir ve alan ondan türer:</p>
        \\[ \\mathbf E=-\\nabla V \\]
        <p>Skalerle çalışmak üç bileşenli vektör yerine tek fonksiyonla uğraşmak demektir — potansiyelin varlık nedeni budur.
        Noktasal yük için (referans sonsuzda sıfır): \\( V=\\dfrac{Q}{4\\pi\\varepsilon_0r} \\); yük dağılımı için
        \\( V=\\dfrac{1}{4\\pi\\varepsilon_0}\\int\\dfrac{dQ}{R} \\) — <b>skaler toplam</b>, yön derdi yok. Sonsuz çizgi yükünde referans sonsuz
        alınamaz (integral ıraksar), keyfi bir \\( \\rho_0 \\) seçilir: \\( V=\\frac{\\rho_L}{2\\pi\\varepsilon_0}\\ln(\\rho_0/\\rho) \\).</p>
        <p><b>Eşpotansiyel yüzeyler</b> E çizgilerine diktir (gradyan eşyüzeye diktir); iletken yüzeyleri eşpotansiyeldir.</p>
        <p><b>Enerji:</b> Yük sistemini kurmak için yapılan iş alanda depolanır.
        Ayrık yükler: \\( W_E=\\tfrac12\\sum_iQ_iV_i \\) (\\( V_i \\): diğer yüklerin i'deki potansiyeli; ½ çift saymayı düzeltir).
        Sürekli dağılım ve alan cinsinden:</p>
        \\[ W_E=\\frac12\\int_V\\rho_vV\\,dV=\\frac12\\int_V\\mathbf D\\cdot\\mathbf E\\,dV, \\qquad w_E=\\frac12\\varepsilon E^2\\;(\\text{J/m}^3) \\]
        <p>İkinci biçim "enerji alandadır" yorumunu verir: kapasitörde enerji plakalarda değil, aradaki alanda durur.</p>
        <p><b>Sık hata:</b> \\( V \\)'yi \\( \\mathbf E \\)'den bulurken integral sınırlarının yönüyle işaretin karışması. Kontrol: pozitif
        yükten uzaklaştıkça V azalmalı.</p>`
    },
    {
      baslik: "5. Elektrik Dipolü ve Görüntü Yöntemi",
      icerik: `
        <p><b>Dipol</b>, \\( d \\) uzaklıkta \\( \\pm Q \\) çiftidir; dipol momenti \\( \\mathbf p=Q\\mathbf d \\) (−'den +'ya). Uzaktan
        (\\( r\\gg d \\)) potansiyel ve alan:</p>
        \\[ V=\\frac{\\mathbf p\\cdot\\hat{\\mathbf r}}{4\\pi\\varepsilon_0r^2}=\\frac{p\\cos\\theta}{4\\pi\\varepsilon_0r^2}, \\qquad
           \\mathbf E=\\frac{p}{4\\pi\\varepsilon_0r^3}\\big(2\\cos\\theta\\,\\hat{\\mathbf r}+\\sin\\theta\\,\\hat{\\boldsymbol\\theta}\\big) \\]
        <p>Nokta yük \\( 1/r \\)–\\( 1/r^2 \\) ile, dipol \\( 1/r^2 \\)–\\( 1/r^3 \\) ile azalır: net yükü sıfır olan sistemler uzaktan daha
        zayıf görünür. Dielektriklerin polarizasyonu (\\( \\mathbf P \\) = birim hacimde dipol momenti) ve anten teorisinin temel
        elemanı (Hertz dipolü) buradan gelir. Dış alanda dipole moment: \\( \\mathbf T=\\mathbf p\\times\\mathbf E \\), enerji
        \\( U=-\\mathbf p\\cdot\\mathbf E \\) — dipol alana paralel dönmek ister.</p>
        <p><b>Görüntü yöntemi</b>, topraklanmış (V=0) sonsuz iletken düzlem yanındaki yük problemini çözmenin kısa yoludur.
        Düzlem üzerinde toplanan indüklenmiş yükleri hesaplamak zordur; ancak düzlemin öte yanına, simetrik konuma \\( -Q \\)
        "görüntü yükü" konursa, iki nokta yükün alanı düzlemde tam olarak V=0 verir. <b>Teklik teoremi</b> gereği aynı sınır
        koşulunu sağlayan çözüm tek olduğu için, düzlemin yük tarafındaki alan bu iki yükün alanıyla özdeştir.</p>
        <ul>
          <li>Çözüm yalnızca <b>gerçek yükün bulunduğu bölgede</b> geçerlidir; iletkenin arkasında alan gerçekte sıfırdır.</li>
          <li>Yükün iletkene çekim kuvveti: \\( F=\\dfrac{Q^2}{4\\pi\\varepsilon_0(2h)^2} \\) (h: düzleme uzaklık).</li>
          <li>İndüklenen yüzey yükü: \\( \\rho_S=D_n=-\\dfrac{Qh}{2\\pi(\\rho^2+h^2)^{3/2}} \\); toplamı \\( -Q \\) çıkar.</li>
          <li>İki dik düzlem (köşe) → 3 görüntü; çizgi yükü ↔ görüntü çizgi yükü (koaksiyel olmayan kablo kapasitansı böyle bulunur).</li>
        </ul>
        <p><b>Neden önemli:</b> Toprak üzerindeki iletim hattı, PCB üstündeki iz, anten altındaki toprak düzlemi — hepsi görüntü
        yöntemiyle "havadaki iki iletken" problemine dönüşür.</p>`
    },
    {
      baslik: "6. İletkenler, Dielektrikler, Sınır Koşulları ve Kapasitans",
      icerik: `
        <p><b>İletken</b> içinde serbest yükler, statik dengede alan kalmayacak şekilde yeniden dağılır: iç \\( \\mathbf E=0 \\),
        \\( \\rho_v=0 \\), tüm yük yüzeydedir, iletken eşpotansiyeldir ve yüzeyde alan yüzeye <b>diktir</b>:
        \\( E_t=0 \\), \\( D_n=\\rho_S \\). Sivri uçlarda \\( \\rho_S \\) ve E büyür (korona, paratoner).</p>
        <p><b>Dielektrik</b> içinde serbest yük yoktur ama bağlı yükler dış alanda hafifçe ayrılarak dipoller oluşturur:
        polarizasyon \\( \\mathbf P=\\varepsilon_0\\chi_e\\mathbf E \\). Bu dipoller malzeme içinde alanı <b>zayıflatır</b>; toplam etki
        \\( \\mathbf D \\)'de toplanır:</p>
        \\[ \\mathbf D=\\varepsilon_0\\mathbf E+\\mathbf P=\\varepsilon_0(1+\\chi_e)\\mathbf E=\\varepsilon_0\\varepsilon_r\\mathbf E=\\varepsilon\\mathbf E \\]
        <p>\\( \\varepsilon_r \\): hava 1, kâğıt ~3, cam ~5, su ~80. Dielektrik dayanımı aşılırsa (hava 3 MV/m) delinir.</p>
        <p><b>İki ortam sınırında koşullar</b> (Gauss kutusu + Stokes çevrimi ile türetilir — sınavda türetmesi istenir):</p>
        \\[ E_{t1}=E_{t2}\\;(\\text{teğet E sürekli}), \\qquad D_{n1}-D_{n2}=\\rho_S\\;(\\text{normal D yüzey yükü kadar atlar}) \\]
        <p>Yüzey yükü yoksa \\( D_n \\) süreklidir, dolayısıyla \\( \\varepsilon_1E_{n1}=\\varepsilon_2E_{n2} \\): alan yüksek \\( \\varepsilon \\)'lı
        ortamda normal bileşenini küçültür ve <b>kırılır</b>: \\( \\tan\\theta_1/\\tan\\theta_2=\\varepsilon_1/\\varepsilon_2 \\).
        İletken–dielektrik sınırında \\( E_t=0 \\), \\( D_n=\\rho_S \\).</p>
        <p><b>Kapasitans</b> \\( C=Q/V \\) (F): yalnızca geometri ve \\( \\varepsilon \\)'ye bağlıdır, Q'ya değil. Hesap şablonu:
        Q koy → Gauss ile D, E → \\( V=-\\int\\mathbf E\\cdot d\\mathbf l \\) → böl.</p>
        <ul>
          <li>Paralel plaka: \\( C=\\varepsilon A/d \\). Seri dielektrik katmanları = seri kapasitörler.</li>
          <li>Koaksiyel: \\( C'=\\dfrac{2\\pi\\varepsilon}{\\ln(b/a)} \\) F/m. Eş merkezli küre: \\( C=\\dfrac{4\\pi\\varepsilon}{1/a-1/b} \\).</li>
          <li>Enerji: \\( W=\\tfrac12CV^2=\\tfrac12QV=Q^2/2C \\). Yalıtılmış (Q sabit) kapasitöre dielektrik sokulursa enerji azalır →
          dielektrik <b>içeri çekilir</b>; kaynağa bağlı (V sabit) ise enerji artar, farkı kaynak öder.</li>
        </ul>`
    },
    {
      baslik: "7. Poisson ve Laplace Denklemleri",
      icerik: `
        <p>\\( \\nabla\\cdot\\mathbf D=\\rho_v \\) ile \\( \\mathbf E=-\\nabla V \\) birleştirilince potansiyel için tek bir skaler denklem çıkar:</p>
        \\[ \\nabla^2V=-\\frac{\\rho_v}{\\varepsilon}\\;(\\text{Poisson}), \\qquad \\nabla^2V=0\\;(\\text{Laplace — yüksüz bölge}) \\]
        <p>Bu, yükleri bilmeden, yalnızca <b>sınırlardaki potansiyeller</b> bilinirken alanı bulmanın yoludur — gerçek mühendislik
        problemlerinin çoğu böyledir: elektrotlara gerilim uygularsın, aradaki alanı sorarsın.</p>
        <p><b>Teklik teoremi:</b> Sınırda V verilmişse Laplace denklemini sağlayan çözüm tektir. Pratik sonucu: doğru cevabı
        tahmin edip sınır koşullarını ve \\( \\nabla^2V=0 \\)'ı sağladığını göstermek yeter (görüntü yöntemi bunun uygulamasıdır).</p>
        <p><b>Tek boyutlu çözümler</b> (sınavın klasik sorusu) — V yalnızca bir koordinata bağlıysa Laplace adi diferansiyel denkleme iner:</p>
        <ul>
          <li>Kartezyen \\( V(x) \\): \\( d^2V/dx^2=0 \\) ⟹ \\( V=Ax+B \\) — plakalar arası <b>doğrusal</b> potansiyel, sabit alan.</li>
          <li>Silindirik \\( V(\\rho) \\): \\( \\frac1\\rho\\frac{d}{d\\rho}(\\rho\\frac{dV}{d\\rho})=0 \\) ⟹ \\( V=A\\ln\\rho+B \\) — koaksiyel kablo.</li>
          <li>Küresel \\( V(r) \\): \\( \\frac{1}{r^2}\\frac{d}{dr}(r^2\\frac{dV}{dr})=0 \\) ⟹ \\( V=A/r+B \\) — eş merkezli küreler.</li>
          <li>Silindirik \\( V(\\phi) \\): \\( V=A\\phi+B \\) — kama biçimli elektrotlar.</li>
        </ul>
        <p>A ve B sınır koşullarından bulunur; ardından \\( \\mathbf E=-\\nabla V \\), iletken yüzeyinde \\( \\rho_S=\\varepsilon E_n \\),
        toplam yük \\( Q=\\int\\rho_S dS \\) ve \\( C=Q/V_0 \\). Böylece kapasitans <b>Gauss kullanmadan</b> da çıkar — iki yöntemin aynı
        sonucu vermesi iyi bir kontrol.</p>
        <p>Poisson örneği: p-n eklem tükenme bölgesinde \\( \\rho_v \\) sabit → V parabolik, E doğrusal. Çok boyutlu problemlerde
        değişkenlerin ayrılması (çarpım çözüm) ya da sayısal yöntemler (sonlu farklar: her nokta komşularının ortalaması — Laplace'ın
        "ortalama değer" özelliği) kullanılır.</p>`
    },
    {
      baslik: "8. Elektrik Akımı ve Süreklilik",
      icerik: `
        <p>Akım, yükün zamanla akışıdır: \\( I=dQ/dt \\) (A). Bir yüzeyden geçen akım, akım yoğunluğu \\( \\mathbf J \\) (A/m²) ile
        \\( I=\\int_S\\mathbf J\\cdot d\\mathbf S \\). Hareketli yük yoğunluğu \\( \\rho_v \\) ve sürüklenme hızı \\( \\mathbf v \\) için
        \\( \\mathbf J=\\rho_v\\mathbf v \\) (konveksiyon akımı — vakum tüpü, elektron demeti).</p>
        <p><b>İletkende</b> elektronlar alanla hızlanıp çarpışarak ortalama bir sürüklenme hızına ulaşır: \\( \\mathbf v=-\\mu_e\\mathbf E \\).
        Sonuç Ohm yasasının nokta biçimidir:</p>
        \\[ \\mathbf J=\\sigma\\mathbf E, \\qquad \\sigma=-\\rho_e\\mu_e\\;(\\text{S/m}) \\]
        <p>Bakır \\( \\sigma=5.8\\times10^7 \\) S/m. Bu noktasal yasadan devre Ohm yasası çıkar: düzgün iletkende
        \\( V=El,\\;I=JA \\) ⟹ \\( R=\\dfrac{V}{I}=\\dfrac{l}{\\sigma A} \\). Düzgün olmayan geometrilerde
        \\( R=\\dfrac{V}{I}=\\dfrac{-\\int\\mathbf E\\cdot d\\mathbf l}{\\int\\sigma\\mathbf E\\cdot d\\mathbf S} \\) — ve ilginç bir ikilik:
        aynı geometride \\( RC=\\varepsilon/\\sigma \\). Koaksiyel yalıtkanın kaçak direnci bu yolla bulunur.</p>
        <p><b>Süreklilik denklemi</b> yük korunumunun yerel ifadesidir: kapalı yüzeyden dışa çıkan akım, içteki yükü azaltır:</p>
        \\[ \\oint_S\\mathbf J\\cdot d\\mathbf S=-\\frac{dQ_{enc}}{dt}\\qquad\\Longleftrightarrow\\qquad \\nabla\\cdot\\mathbf J=-\\frac{\\partial\\rho_v}{\\partial t} \\]
        <p>Kararlı akımda \\( \\nabla\\cdot\\mathbf J=0 \\): akım çizgileri kapalıdır, bir düğüme giren çıkar — <b>Kirchhoff akım yasası</b>
        bu denklemin devre biçimidir. İletkene fazladan yük konursa \\( \\rho_v(t)=\\rho_0e^{-t/\\tau} \\), \\( \\tau=\\varepsilon/\\sigma \\)
        (bakırda \\( \\sim10^{-19} \\) s): iletken içinde hacim yükü anında yüzeye kaçar — "iletkende iç yük yoktur" ifadesinin nedeni.</p>
        <p><b>Güç:</b> Joule ısısı yoğunluğu \\( p=\\mathbf E\\cdot\\mathbf J=\\sigma E^2 \\) (W/m³); toplamı \\( P=\\int\\mathbf E\\cdot\\mathbf J\\,dV=I^2R \\).</p>
        <p><b>İki iletken sınırında</b> kararlı akım için \\( J_{n1}=J_{n2} \\) (süreklilik) ve \\( E_{t1}=E_{t2} \\); dolayısıyla
        \\( \\sigma_1E_{n1}=\\sigma_2E_{n2} \\) — farklı iletkenlikli katmanlar arasında yüzey yükü birikir.</p>`
    },
    {
      baslik: "9. Manyetostatik: Biot-Savart, Ampere ve Vektör Potansiyel",
      icerik: `
        <p>Kararlı akımlar manyetik alan üretir. Manyetik alan şiddeti \\( \\mathbf H \\) (A/m) için <b>Biot-Savart yasası</b>,
        Coulomb'un akım karşılığıdır — ama çapraz çarpım yüzünden alan akıma ve uzaklığa <b>diktir</b>:</p>
        \\[ d\\mathbf H=\\frac{I\\,d\\mathbf l\\times\\hat{\\mathbf R}}{4\\pi R^2}, \\qquad \\mathbf H=\\frac{1}{4\\pi}\\oint\\frac{I\\,d\\mathbf l\\times\\hat{\\mathbf R}}{R^2} \\]
        <p>Klasik sonuçlar: sonlu tel parçası \\( H_\\phi=\\dfrac{I}{4\\pi\\rho}(\\sin\\alpha_2-\\sin\\alpha_1) \\); <b>sonsuz tel</b>
        \\( \\mathbf H=\\dfrac{I}{2\\pi\\rho}\\hat{\\boldsymbol\\phi} \\) (sağ el: başparmak akım, parmaklar H); halka ekseni
        \\( H_z=\\dfrac{Ia^2}{2(a^2+z^2)^{3/2}} \\), merkezde \\( I/2a \\).</p>
        <p><b>Ampere devre yasası</b> Gauss'un manyetik karşılığıdır: kapalı bir yol boyunca H'nin dolanımı, yolun çevrelediği akıma eşittir:</p>
        \\[ \\oint_C\\mathbf H\\cdot d\\mathbf l=I_{enc} \\qquad\\Longleftrightarrow\\qquad \\nabla\\times\\mathbf H=\\mathbf J \\]
        <p>Simetri varsa integral çarpmaya iner: sonsuz tel \\( H\\cdot2\\pi\\rho=I \\); <b>koaksiyel kablo</b> — iç iletken içinde
        \\( H=\\dfrac{I\\rho}{2\\pi a^2} \\) (ρ ile artar), iletkenler arası \\( \\dfrac{I}{2\\pi\\rho} \\), dış iletkenin dışında <b>0</b> (akımlar
        birbirini götürür — ekranlamanın nedeni); <b>uzun solenoid</b> içinde \\( H=nI \\) (n: birim uzunluktaki sarım) düzgün, dışında ~0;
        <b>toroid</b> \\( H=\\dfrac{NI}{2\\pi\\rho} \\); sonsuz akım tabakası \\( \\mathbf H=\\tfrac12\\mathbf K\\times\\hat{\\mathbf n} \\).</p>
        <p><b>Akı yoğunluğu</b> \\( \\mathbf B=\\mu\\mathbf H \\) (T = Wb/m²), \\( \\mu_0=4\\pi\\times10^{-7} \\) H/m; akı \\( \\Phi=\\int\\mathbf B\\cdot d\\mathbf S \\).
        Manyetik tek kutup olmadığı için B çizgileri kapalıdır:</p>
        \\[ \\oint_S\\mathbf B\\cdot d\\mathbf S=0 \\qquad\\Longleftrightarrow\\qquad \\nabla\\cdot\\mathbf B=0 \\]
        <p><b>Vektör manyetik potansiyel:</b> \\( \\nabla\\cdot\\mathbf B=0 \\) olduğundan \\( \\mathbf B=\\nabla\\times\\mathbf A \\) yazılabilir
        (rotasyonelin diverjansı sıfırdır). Akım dağılımı için \\( \\mathbf A=\\dfrac{\\mu}{4\\pi}\\int\\dfrac{I\\,d\\mathbf l}{R} \\) —
        Biot-Savart'ın çapraz çarpımsız, hesabı kolay hali; akı da kestirmeden bulunur: \\( \\Phi=\\oint_C\\mathbf A\\cdot d\\mathbf l \\).
        Anten ve dalga problemlerinde alanlar önce A üzerinden hesaplanır.</p>`
    },
    {
      baslik: "10. Manyetik Kuvvet, Malzemeler ve Sınır Koşulları",
      icerik: `
        <p>Hareketli yüke etkiyen manyetik kuvvet hıza ve alana diktir; elektrik kuvvetle birlikte <b>Lorentz kuvveti</b>:</p>
        \\[ \\mathbf F=q(\\mathbf E+\\mathbf v\\times\\mathbf B) \\]
        <p>Manyetik kuvvet hıza dik olduğundan <b>iş yapmaz</b>, yalnızca yönü değiştirir: düzgün B'de yük \\( r=mv/qB \\) yarıçaplı
        çemberde döner (siklotron frekansı \\( \\omega=qB/m \\)). Akım taşıyan tele kuvvet \\( \\mathbf F=\\int I\\,d\\mathbf l\\times\\mathbf B \\);
        düz tel için \\( \\mathbf F=I\\mathbf L\\times\\mathbf B \\). Paralel iki telde birim uzunluğa \\( F'=\\dfrac{\\mu_0I_1I_2}{2\\pi d} \\);
        aynı yönlü akımlar çeker — amperin tanımı buradan gelir.</p>
        <p><b>Akım çevrimine moment:</b> manyetik dipol momenti \\( \\mathbf m=I\\mathbf S \\) (yüzey normali sağ elle), moment
        \\( \\mathbf T=\\mathbf m\\times\\mathbf B \\). Çevrim, normalini B'ye paralel getirmek ister — elektrik motorunun ve pusulanın ilkesi.</p>
        <p><b>Malzemeler:</b> atomik akım çevrimleri (yörünge + spin) birim hacimde mıknatıslanma \\( \\mathbf M \\) (A/m) verir:</p>
        \\[ \\mathbf B=\\mu_0(\\mathbf H+\\mathbf M)=\\mu_0(1+\\chi_m)\\mathbf H=\\mu_0\\mu_r\\mathbf H \\]
        <ul>
          <li><b>Diamanyetik</b> (\\( \\chi_m\\lesssim0 \\), bakır, su): alana zayıf karşı koyar.</li>
          <li><b>Paramanyetik</b> (\\( \\chi_m\\gtrsim0 \\), alüminyum): zayıf hizalanma.</li>
          <li><b>Ferromanyetik</b> (\\( \\mu_r\\sim10^2\\!-\\!10^5 \\), demir, nikel): domenler hizalanır, <b>histerezis</b> ve <b>doyma</b> gösterir;
          \\( \\mu \\) sabit değildir, B–H eğrisi kullanılır. Trafo ve makine çekirdeklerinin malzemesidir (bkz. EE3014).</li>
        </ul>
        <p><b>Sınır koşulları</b> (Gauss kutusu ile \\( \\nabla\\cdot\\mathbf B=0 \\), Stokes çevrimi ile Ampere):</p>
        \\[ B_{n1}=B_{n2}, \\qquad H_{t1}-H_{t2}=K\\;(\\text{yüzey akımı; yoksa } H_t \\text{ sürekli}) \\]
        <p>Yüzey akımı yoksa \\( \\mu_1H_{n1}=\\mu_2H_{n2} \\) ve \\( \\tan\\theta_1/\\tan\\theta_2=\\mu_1/\\mu_2 \\): akı çizgileri yüksek
        \\( \\mu \\)'lu ortama girerken yüzeye dik doğrultuya yaklaşır — demir "akıyı toplar", manyetik ekranlama böyle çalışır.</p>`
    },
    {
      baslik: "11. İndüktans ve Manyetik Enerji",
      icerik: `
        <p>Bir devreden akan akım, kendi çevrimlerinden geçen akı üretir. Akı bağı \\( \\Lambda=N\\Phi \\)'nin akıma oranı <b>öz indüktans</b>tır:</p>
        \\[ L=\\frac{N\\Phi}{I}\\;(\\text{H}=\\text{Wb/A}) \\]
        <p>Doğrusal ortamda L, kapasitans gibi, yalnızca geometri ve malzemeye bağlıdır. <b>Hesap şablonu:</b> I koy → Ampere ile H, B →
        \\( \\Phi=\\int\\mathbf B\\cdot d\\mathbf S \\) → N ile çarp, I'ya böl.</p>
        <ul>
          <li><b>Uzun solenoid:</b> \\( B=\\mu nI \\), \\( \\Phi=BA \\), \\( N=n\\ell \\) ⟹ \\( L=\\mu n^2\\ell A=\\dfrac{\\mu N^2A}{\\ell} \\).
          Sarım sayısının <b>karesiyle</b> artar; demir çekirdek \\( \\mu_r \\) kat büyütür.</li>
          <li><b>Toroid:</b> \\( L=\\dfrac{\\mu N^2A}{2\\pi\\rho_0} \\). Akı içeride hapsolduğu için komşu devreleri etkilemez.</li>
          <li><b>Koaksiyel kablo:</b> \\( L'=\\dfrac{\\mu}{2\\pi}\\ln\\dfrac{b}{a} \\) H/m. \\( C' \\) ile birlikte \\( L'C'=\\mu\\varepsilon \\) ve
          \\( Z_0=\\sqrt{L'/C'} \\) — iletim hattı parametreleri buradan gelir.</li>
        </ul>
        <p><b>Karşılıklı indüktans:</b> 1. devrenin akımının 2. devrede oluşturduğu akı bağı: \\( M_{12}=\\dfrac{N_2\\Phi_{12}}{I_1}=M_{21} \\).
        İki bobin arasında kuplaj \\( k=M/\\sqrt{L_1L_2}\\le1 \\). Transformatör, karşılıklı indüktansın uygulamasıdır; seri bağlı iki bobin
        \\( L=L_1+L_2\\pm2M \\).</p>
        <p><b>Manyetik enerji:</b> akımı sıfırdan I'ya çıkarırken zıt emk'ye karşı yapılan iş alanda depolanır:</p>
        \\[ W_M=\\frac12LI^2=\\frac12\\int_V\\mathbf B\\cdot\\mathbf H\\,dV, \\qquad w_M=\\frac12\\mu H^2=\\frac{B^2}{2\\mu}\\;(\\text{J/m}^3) \\]
        <p>Buradan indüktansı bulmanın ikinci yolu: \\( L=2W_M/I^2 \\) — akının hesaplanması zor geometrilerde (iletken içi "iç indüktans")
        kullanılır. Enerji yoğunluğu ifadesi \\( B^2/2\\mu \\), hava aralığının neden enerjinin çoğunu depoladığını da açıklar
        (\\( \\mu_0\\ll\\mu_{demir} \\)) — bkz. EE3014 manyetik devreler.</p>
        <p><b>Kuvvet:</b> \\( F=-\\dfrac{dW}{dx} \\) (akı sabit) ya da koenerji türevi; röle/elektromıknatıs çekim kuvveti
        \\( F=\\dfrac{B^2A}{2\\mu_0} \\) (her kutup yüzeyi için).</p>`
    },
    {
      baslik: "12. Faraday Yasası ve Zamanla Değişen Alanlar",
      icerik: `
        <p>Faraday (1831): bir devreden geçen manyetik akı <b>değiştiğinde</b> devrede emk indüklenir:</p>
        \\[ \\varepsilon=\\oint_C\\mathbf E\\cdot d\\mathbf l=-\\frac{d\\Phi_B}{dt}=-\\frac{d}{dt}\\int_S\\mathbf B\\cdot d\\mathbf S \\]
        <p>Eksi işaret <b>Lenz yasasıdır</b>: indüklenen akım, akı değişimine karşı koyacak yöndedir (enerji korunumu — aksi halde
        bedava enerji olurdu). N sarımlı bobinde emk N kat.</p>
        <p>Akı üç yolla değişebilir; iki kaynak ayrılır:</p>
        <ul>
          <li><b>Transformatör emk'si:</b> devre sabit, B zamanla değişiyor: \\( \\varepsilon=-\\int_S\\dfrac{\\partial\\mathbf B}{\\partial t}\\cdot d\\mathbf S \\).
          Trafo, endüktif şarj.</li>
          <li><b>Hareket emk'si:</b> B sabit, iletken hareket ediyor; Lorentz kuvvetiyle yükler itilir:
          \\( \\varepsilon=\\oint(\\mathbf v\\times\\mathbf B)\\cdot d\\mathbf l \\). Düz çubuk için \\( \\varepsilon=BLv \\). Generatör, kayan çubuk problemleri.</li>
          <li>İkisi birden varsa toplanır — ya da doğrudan \\( -d\\Phi/dt \\) hesaplanır (aynı sonucu verir).</li>
        </ul>
        <p><b>Noktasal biçim</b> (Stokes ile): \\( \\nabla\\times\\mathbf E=-\\dfrac{\\partial\\mathbf B}{\\partial t} \\). Zamanla değişen manyetik
        alan <b>dolanımlı</b> bir elektrik alan üretir: elektrostatikte \\( \\nabla\\times\\mathbf E=0 \\) idi, artık değil. Dolayısıyla
        \\( \\mathbf E=-\\nabla V \\) tek başına yetmez; \\( \\mathbf E=-\\nabla V-\\partial\\mathbf A/\\partial t \\) olur ve "gerilim" yola bağlı hale gelir.</p>
        <p><b>Yer değiştirme akımı — Maxwell'in düzeltmesi:</b> Ampere yasası \\( \\nabla\\times\\mathbf H=\\mathbf J \\) kararlı akım için doğrudur
        ama diverjansı alınınca \\( \\nabla\\cdot\\mathbf J=0 \\) çıkar; bu süreklilik denklemiyle (\\( -\\partial\\rho_v/\\partial t \\)) çelişir.
        Kapasitör aralığında iletim akımı yoktur, oysa şarj sırasında devreden akım akar. Maxwell, değişen D'nin de akım gibi H ürettiğini
        ekledi:</p>
        \\[ \\nabla\\times\\mathbf H=\\mathbf J+\\frac{\\partial\\mathbf D}{\\partial t}, \\qquad \\mathbf J_d=\\frac{\\partial\\mathbf D}{\\partial t} \\]
        <p>Kapasitörde \\( I_d=\\varepsilon A\\,dE/dt=C\\,dV/dt \\) — tam olarak tel akımına eşit; süreklilik kurtulur. Daha önemlisi:
        değişen E → H, değişen H → E zinciri kendi kendini besleyerek uzayda yayılır — <b>elektromanyetik dalga</b>.
        İyi iletkende \\( J_d/J=\\omega\\varepsilon/\\sigma \\) ihmal edilir; dielektrikte ve yüksek frekansta baskındır.</p>`
    },
    {
      baslik: "13. Maxwell Denklemleri",
      icerik: `
        <p>Dersin tamamı dört denklemde toplanır. Diferansiyel (noktasal) ve integral biçimleri, Gauss ve Stokes teoremleriyle birbirine geçer:</p>
        <table>
        <tr><th>Yasa</th><th>Diferansiyel</th><th>İntegral</th><th>Anlamı</th></tr>
        <tr><td>Gauss (E)</td><td>\\( \\nabla\\cdot\\mathbf D=\\rho_v \\)</td><td>\\( \\oint\\mathbf D\\cdot d\\mathbf S=Q_{enc} \\)</td><td>Yük, D'nin kaynağıdır</td></tr>
        <tr><td>Gauss (M)</td><td>\\( \\nabla\\cdot\\mathbf B=0 \\)</td><td>\\( \\oint\\mathbf B\\cdot d\\mathbf S=0 \\)</td><td>Manyetik tek kutup yok</td></tr>
        <tr><td>Faraday</td><td>\\( \\nabla\\times\\mathbf E=-\\dfrac{\\partial\\mathbf B}{\\partial t} \\)</td><td>\\( \\oint\\mathbf E\\cdot d\\mathbf l=-\\dfrac{d\\Phi_B}{dt} \\)</td><td>Değişen B, dolanımlı E üretir</td></tr>
        <tr><td>Ampere–Maxwell</td><td>\\( \\nabla\\times\\mathbf H=\\mathbf J+\\dfrac{\\partial\\mathbf D}{\\partial t} \\)</td><td>\\( \\oint\\mathbf H\\cdot d\\mathbf l=I_{enc}+\\dfrac{d\\Psi_D}{dt} \\)</td><td>Akım ve değişen D, H üretir</td></tr>
        </table>
        <p><b>Kurucu bağıntılar</b> ortamı tanımlar ve sistemi kapatır: \\( \\mathbf D=\\varepsilon\\mathbf E \\), \\( \\mathbf B=\\mu\\mathbf H \\),
        \\( \\mathbf J=\\sigma\\mathbf E \\). Lorentz kuvveti \\( \\mathbf F=q(\\mathbf E+\\mathbf v\\times\\mathbf B) \\) alanların maddeye etkisini verir.
        Süreklilik denklemi \\( \\nabla\\cdot\\mathbf J=-\\partial\\rho_v/\\partial t \\) dört denklemin içindedir (Ampere–Maxwell'in diverjansı).</p>
        <p><b>Özel durumlar:</b> Statik (\\( \\partial/\\partial t=0 \\)) → elektrik ve manyetik alanlar birbirinden <b>ayrılır</b>; elektrostatik
        (Gauss + \\( \\nabla\\times\\mathbf E=0 \\)) ve manyetostatik (Ampere + \\( \\nabla\\cdot\\mathbf B=0 \\)) bağımsız çözülür. Zamanla değişimde
        rotasyonel denklemler iki alanı birbirine kilitler — ders bu noktada "alan teorisi"nden "dalga teorisi"ne döner.</p>
        <p><b>Zaman-harmonik (fazör) biçim:</b> \\( \\partial/\\partial t\\to j\\omega \\):
        \\( \\nabla\\times\\mathbf E_s=-j\\omega\\mu\\mathbf H_s \\), \\( \\nabla\\times\\mathbf H_s=(\\sigma+j\\omega\\varepsilon)\\mathbf E_s \\).
        Sinüzoidal kaynaklarda türevler kaybolur; dalga problemleri bu biçimde çözülür. \\( \\sigma+j\\omega\\varepsilon \\) çarpanı,
        ortamın iletken mi dielektrik mi davrandığını söyler: <b>kayıp tanjantı</b> \\( \\tan\\delta=\\sigma/\\omega\\varepsilon \\).</p>
        <p><b>Sınır koşulları</b> (tümü): \\( E_t \\) sürekli; \\( H_t \\) yüzey akımı kadar atlar; \\( D_n \\) yüzey yükü kadar atlar; \\( B_n \\) sürekli.
        İdeal iletken yüzeyinde \\( E_t=0,\\;B_n=0 \\) — dalga kılavuzu ve antenlerde dalgayı "şekillendiren" kurallar.</p>
        <p><b>Neden önemli:</b> Bu dört satır devre teorisinin (KVL Faraday'dan, KCL süreklilikten), optiğin, anten ve mikrodalganın,
        EMC/EMI'nin ortak kaynağıdır. Devre teorisi, boyutların dalga boyundan çok küçük olduğu limitteki yaklaşımıdır.</p>`
    },
    {
      baslik: "14. Düzlem Elektromanyetik Dalgalar",
      icerik: `
        <p>Kaynaksız (\\( \\rho_v=0,\\;\\mathbf J=0 \\)), kayıpsız ortamda Faraday'ın rotasyoneli alınıp Ampere–Maxwell konulursa
        her alan bileşeni <b>dalga denklemini</b> sağlar:</p>
        \\[ \\nabla^2\\mathbf E=\\mu\\varepsilon\\frac{\\partial^2\\mathbf E}{\\partial t^2}, \\qquad v=\\frac{1}{\\sqrt{\\mu\\varepsilon}},
        \\quad c=\\frac{1}{\\sqrt{\\mu_0\\varepsilon_0}}\\approx3\\times10^8\\,\\text{m/s} \\]
        <p>Maxwell bu sayının ışık hızına eşit çıkmasından ışığın elektromanyetik dalga olduğunu çıkardı. Dielektrikte
        \\( v=c/\\sqrt{\\varepsilon_r} \\) (kırılma indisi \\( n=\\sqrt{\\varepsilon_r\\mu_r} \\)).</p>
        <p><b>Düzgün düzlem dalga:</b> alan yalnızca yayılım koordinatına (z) ve zamana bağlı, z'ye dik düzlemlerde sabit. +z yönünde giden çözüm:</p>
        \\[ \\mathbf E=E_0\\cos(\\omega t-\\beta z)\\,\\hat{\\mathbf x}, \\qquad \\mathbf H=\\frac{E_0}{\\eta}\\cos(\\omega t-\\beta z)\\,\\hat{\\mathbf y} \\]
        <ul>
          <li><b>Faz sabiti</b> \\( \\beta=\\omega\\sqrt{\\mu\\varepsilon}=\\omega/v=2\\pi/\\lambda \\) (rad/m); dalga boyu \\( \\lambda=v/f \\).
          \\( \\omega t-\\beta z \\) = +z yönünde; \\( \\omega t+\\beta z \\) = −z yönünde.</li>
          <li><b>Enine (TEM) dalga:</b> E ⊥ H ⊥ yayılım; \\( \\mathbf E\\times\\mathbf H \\) yayılım yönünü verir.</li>
          <li><b>Öz (intrinsik) empedans:</b> \\( \\eta=\\dfrac{E}{H}=\\sqrt{\\dfrac{\\mu}{\\varepsilon}} \\) (Ω); boşlukta
          \\( \\eta_0\\approx120\\pi\\approx377\\,\\Omega \\). E ve H kayıpsız ortamda <b>aynı fazdadır</b>.</li>
        </ul>
        <p><b>Fazör gösterimi:</b> \\( \\mathbf E_s=E_0e^{-j\\beta z}\\hat{\\mathbf x} \\); Maxwell'den \\( \\mathbf H_s=\\dfrac{1}{\\eta}\\hat{\\mathbf k}\\times\\mathbf E_s \\).
        Sınav sorusu tipi: "E verildi, H'yi, yayılım yönünü, frekansı, ortamı bul." Çözüm: \\( \\cos(\\omega t-\\beta z) \\)'den ω ve β oku →
        \\( v=\\omega/\\beta \\) → \\( \\varepsilon_r=(c/v)^2 \\) → \\( \\eta=\\eta_0/\\sqrt{\\varepsilon_r} \\) → \\( \\mathbf H=\\hat{\\mathbf k}\\times\\mathbf E/\\eta \\).</p>
        <p><b>Polarizasyon</b> E vektörünün ucunun sabit z'de zamanla çizdiği yoldur: tek bileşen ya da aynı fazlı iki bileşen →
        <b>doğrusal</b>; eşit genlik, 90° faz farklı iki bileşen → <b>dairesel</b>; genel → eliptik. Antenlerin verici/alıcı
        uyumu ve uydu bağlantıları polarizasyona bağlıdır.</p>
        <p><b>Neden önemli:</b> Radyo, radar, fiber optik, mikrodalga fırın — hepsi bu çözümün farklı frekans ve ortamlarıdır.
        Sonraki iki konu ortam kayıplıysa ve dalga bir sınırla karşılaşırsa ne olduğunu ele alır.</p>`
    },
    {
      baslik: "15. Kayıplı Ortamda Yayılım ve Deri Derinliği",
      icerik: `
        <p>Ortamda iletkenlik varsa (\\( \\sigma\\ne0 \\)) Ampere–Maxwell'de \\( \\sigma+j\\omega\\varepsilon \\) çarpanı belirir ve dalga sayısı
        karmaşıklaşır: <b>yayılma sabiti</b></p>
        \\[ \\gamma=\\alpha+j\\beta=\\sqrt{j\\omega\\mu(\\sigma+j\\omega\\varepsilon)}, \\qquad \\mathbf E=E_0e^{-\\alpha z}\\cos(\\omega t-\\beta z)\\hat{\\mathbf x} \\]
        <p>\\( \\alpha \\) (Np/m) <b>zayıflama sabiti</b>: genlik her metrede \\( e^{-\\alpha} \\) katına iner (dB/m = 8.686α). \\( \\beta \\) yine faz
        sabiti. Öz empedans da karmaşık olur: \\( \\eta=\\sqrt{\\dfrac{j\\omega\\mu}{\\sigma+j\\omega\\varepsilon}} \\) → H, E'nin <b>gerisinde</b> kalır.</p>
        <p>Davranışı <b>kayıp tanjantı</b> \\( \\tan\\delta=\\dfrac{\\sigma}{\\omega\\varepsilon} \\) (iletim akımı / yer değiştirme akımı) belirler:</p>
        <ul>
          <li><b>Düşük kayıplı dielektrik</b> (\\( \\tan\\delta\\ll1 \\)): \\( \\alpha\\approx\\dfrac{\\sigma}{2}\\sqrt{\\dfrac{\\mu}{\\varepsilon}} \\),
          \\( \\beta\\approx\\omega\\sqrt{\\mu\\varepsilon} \\) — dalga neredeyse kayıpsız gibi, hafifçe söner (fiber, PCB dielektriği).</li>
          <li><b>İyi iletken</b> (\\( \\tan\\delta\\gg1 \\)): \\( \\alpha=\\beta=\\sqrt{\\pi f\\mu\\sigma} \\), \\( \\eta=(1+j)\\sqrt{\\pi f\\mu/\\sigma} \\) —
          H, E'nin 45° gerisinde; dalga birkaç dalga boyu içinde ölür.</li>
        </ul>
        <p><b>Deri derinliği</b>, iyi iletkende genliğin \\( 1/e \\)'ye (%37) düştüğü mesafedir:</p>
        \\[ \\delta=\\frac{1}{\\alpha}=\\frac{1}{\\sqrt{\\pi f\\mu\\sigma}} \\]
        <p>Bakır: 60 Hz'de 8.5 mm, 1 MHz'de 66 μm, 1 GHz'de 2 μm. Sonuçları:</p>
        <ul>
          <li><b>Deri etkisi:</b> yüksek frekansta akım telin yalnızca yüzeyinde akar; etkin kesit \\( \\approx2\\pi a\\delta \\), AC direnci
          \\( R_{ac}\\approx\\dfrac{\\ell}{\\sigma\\,2\\pi a\\delta} \\) — DC'nin çok üstünde. Çözüm: Litz teli, içi boş iletken, gümüş kaplama.</li>
          <li><b>Yüzey direnci:</b> \\( R_s=\\dfrac{1}{\\sigma\\delta}=\\sqrt{\\dfrac{\\pi f\\mu}{\\sigma}} \\) Ω (kare başına); dalga kılavuzu ve
          mikroşerit kayıplarının kaynağı.</li>
          <li><b>Ekranlama:</b> birkaç δ kalınlıkta metal, dalgayı \\( e^{-t/\\delta} \\) kadar zayıflatır — EMI kutuları böyle tasarlanır.
          Düşük frekansta δ büyük olduğu için manyetik ekranlama zordur (μ_r yüksek malzeme gerekir).</li>
          <li><b>Deniz suyu</b> (σ≈4 S/m): 10 kHz'de δ≈2.5 m — denizaltı haberleşmesinin neden çok düşük frekans kullandığı.</li>
        </ul>
        <p><b>Faz hızı ve dispersiyon:</b> \\( v_p=\\omega/\\beta \\) kayıplı ortamda frekansa bağlıdır → farklı frekanslar farklı hızla gider,
        darbe biçimi bozulur (dispersiyon). Grup hızı \\( v_g=d\\omega/d\\beta \\) bilginin taşındığı hızdır.</p>`
    },
    {
      baslik: "16. Düzlem Dalganın Sınırdan Yansıması ve İletimi",
      icerik: `
        <p>Dalga farklı öz empedanslı bir ortama <b>dik gelişle</b> (normal incidence) çarpınca bir kısmı yansır, bir kısmı geçer.
        Sınırda \\( E_t \\) ve \\( H_t \\) sürekli olmalıdır; bu iki koşul yansıma ve iletim katsayılarını verir:</p>
        \\[ \\Gamma=\\frac{E_{r0}}{E_{i0}}=\\frac{\\eta_2-\\eta_1}{\\eta_2+\\eta_1}, \\qquad \\tau=\\frac{E_{t0}}{E_{i0}}=\\frac{2\\eta_2}{\\eta_2+\\eta_1}, \\qquad 1+\\Gamma=\\tau \\]
        <p>İletim hattı teorisiyle bire bir aynıdır (\\( \\eta\\leftrightarrow Z_0 \\)). Uç durumlar:</p>
        <ul>
          <li>\\( \\eta_2=\\eta_1 \\) (eşlenmiş): \\( \\Gamma=0 \\), yansıma yok.</li>
          <li><b>Mükemmel iletken</b> (\\( \\eta_2=0 \\)): \\( \\Gamma=-1 \\), \\( \\tau=0 \\) — E tam ters fazla yansır, sınırda \\( E=0 \\).
          Gelen + yansıyan dalga <b>duran dalga</b> oluşturur: \\( E=2E_{i0}\\sin\\beta z\\sin\\omega t \\); düğümler \\( \\lambda/2 \\) arayla,
          E düğümünde H tepe. Enerji taşınmaz, salınır. Mikrodalga fırındaki "sıcak-soğuk noktalar" budur.</li>
          <li>Dielektrikten daha yoğun dielektriğe (\\( \\eta_2&lt;\\eta_1 \\)): \\( \\Gamma&lt;0 \\), yansıyan E ters döner; tersinde aynı fazda.</li>
        </ul>
        <p><b>Güç dengesi</b> (kayıpsız ortamlar): yansıyan güç oranı \\( |\\Gamma|^2 \\), iletilen \\( 1-|\\Gamma|^2=\\dfrac{\\eta_1}{\\eta_2}|\\tau|^2 \\).
        Hava→cam (\\( \\varepsilon_r=4 \\), \\( \\eta_2=\\eta_0/2 \\)): \\( \\Gamma=-1/3 \\), gücün %11'i yansır — camın parlaması.</p>
        <p><b>Duran dalga oranı:</b> kısmi yansımada 1. ortamda genlik \\( E_{max}=(1+|\\Gamma|)E_{i0} \\) ile \\( E_{min}=(1-|\\Gamma|)E_{i0} \\)
        arasında salınır: \\( s=\\text{SWR}=\\dfrac{1+|\\Gamma|}{1-|\\Gamma|} \\). Anten hatlarında ölçülen VSWR bu niceliktir; \\( s=1 \\) ideal.</p>
        <p><b>Çeyrek dalga eşleyici:</b> iki ortam arasına kalınlığı \\( \\lambda/4 \\), öz empedansı \\( \\eta=\\sqrt{\\eta_1\\eta_3} \\) olan katman konursa
        yansıma sıfırlanır — kamera lensi kaplamaları, radar absorplayıcıları, iletim hattı eşleme transformatörleri.</p>
        <p><b>Eğik geliş</b> (kısaca): yansıma açısı geliş açısına eşit, kırılma Snell yasasıyla \\( \\sin\\theta_t/\\sin\\theta_i=n_1/n_2 \\).
        Katsayılar polarizasyona bağlıdır (Fresnel); paralel polarizasyonda <b>Brewster açısında</b> \\( \\tan\\theta_B=n_2/n_1 \\) yansıma sıfır,
        yoğun→seyrek geçişte kritik açının ötesinde <b>tam iç yansıma</b> (fiber optiğin ilkesi).</p>`
    },
    {
      baslik: "17. Poynting Vektörü ve Güç Akışı",
      icerik: `
        <p>Elektromanyetik alan enerji taşır; birim alandan birim zamanda geçen güç (W/m²) <b>Poynting vektörüyle</b> verilir:</p>
        \\[ \\mathbf S=\\mathbf E\\times\\mathbf H \\]
        <p>Yönü yayılım yönüdür (E'den H'ye sağ el). Maxwell denklemlerinden türeyen <b>Poynting teoremi</b> enerji korunumunun alan biçimidir:</p>
        \\[ -\\oint_S(\\mathbf E\\times\\mathbf H)\\cdot d\\mathbf S=\\frac{\\partial}{\\partial t}\\int_V\\Big(\\frac12\\varepsilon E^2+\\frac12\\mu H^2\\Big)dV+\\int_V\\sigma E^2\\,dV \\]
        <p>Okunuşu: bir hacme <b>giren</b> güç = içerideki alan enerjisinin artış hızı + Joule ısısı olarak harcanan güç. Devre teorisindeki
        "kaynak gücü = depolanan + harcanan" özdeşliğinin genel hali.</p>
        <p><b>Zaman-ortalama güç yoğunluğu</b> (sinüzoidal dalga, fazörlerle):</p>
        \\[ \\mathbf S_{ort}=\\frac12\\text{Re}\\{\\mathbf E_s\\times\\mathbf H_s^*\\}, \\qquad
           \\text{kayıpsız düzlem dalga: } S_{ort}=\\frac{E_0^2}{2\\eta}=\\frac{\\eta H_0^2}{2}\\;\\hat{\\mathbf k} \\]
        <p>Kayıplı ortamda \\( \\eta \\) karmaşık olduğundan \\( S_{ort}=\\dfrac{E_0^2}{2|\\eta|}e^{-2\\alpha z}\\cos\\theta_\\eta \\) — güç genliğin karesiyle,
        yani \\( e^{-2\\alpha z} \\) ile azalır. Enerji yoğunlukları eşittir: \\( \\langle w_E\\rangle=\\langle w_M\\rangle \\); toplam
        \\( \\langle w\\rangle=\\tfrac12\\varepsilon E_0^2 \\), ve \\( S_{ort}=v\\langle w\\rangle \\) — enerji dalga hızıyla taşınır.</p>
        <p><b>Uygulamalar ve sınav soruları:</b></p>
        <ul>
          <li><b>Anten:</b> izotropik kaynaktan r uzaklıkta \\( S=P_t/4\\pi r^2 \\); alan genliği \\( E_0=\\sqrt{2\\eta_0S}=\\sqrt{60P_t}/r \\).
          "1 kW verici, 10 km → E kaç V/m?" tipi soru.</li>
          <li><b>Güneş ışınımı:</b> \\( S\\approx1.35 \\) kW/m² → \\( E_0\\approx1\\,\\text{kV/m} \\), \\( H_0\\approx2.7 \\) A/m.</li>
          <li><b>DC koaksiyel kablo:</b> \\( E \\) radyal, \\( H \\) azimutal, \\( \\mathbf S \\) eksen boyunca — enerji tellerin içinden değil,
          <b>aradaki dielektrikten</b> akar; integrali tam \\( VI \\) verir. Direnç tellerde ise S tele doğru döner: Joule ısısı.</li>
          <li><b>Işınım basıncı:</b> \\( p=S/c \\) (yutan yüzey) — güneş yelkeni, lazerle soğutma.</li>
        </ul>
        <p><b>Neden önemli:</b> Poynting vektörü, devrede "güç kablodan gider" sezgisini düzeltir ve anten kazancı, radar denklemi,
        mikrodalga ısıtma ve SAR (dokuda yutulan güç) hesaplarının başlangıç noktasıdır.</p>`
    },

    {
      baslik: "18. Dalga Polarizasyonu",
      icerik: `
        <p>Düzlem dalga konusunda alanın genliğini ve yayılma sabitini bulduk, ama <b>\\( \\mathbf E \\)
        vektörünün uç noktasının zamanla çizdiği şekli</b> hiç sormadık. Polarizasyon tam olarak budur
        ve anten–alıcı eşleşmesinden uydu haberleşmesine kadar pratik sonuçları vardır.</p>
        <p>\\( +z \\) yönünde giden bir dalgayı iki dik bileşene ayıralım:</p>
        \\[ \\mathbf E(z,t)=E_{x0}\\cos(\\omega t-\\beta z)\\,\\hat{\\mathbf x}
           +E_{y0}\\cos(\\omega t-\\beta z+\\delta)\\,\\hat{\\mathbf y} \\]
        <p>Şekli belirleyen yalnızca genlik oranı \\( E_{y0}/E_{x0} \\) ve faz farkı \\( \\delta \\)'dır:</p>
        <ul>
          <li><b>Doğrusal:</b> \\( \\delta=0 \\) veya \\( \\delta=\\pi \\). Uç nokta sabit bir doğru
          üzerinde gider gelir; doğrunun eğimi \\( \\arctan(E_{y0}/E_{x0}) \\).</li>
          <li><b>Dairesel:</b> \\( E_{x0}=E_{y0} \\) <b>ve</b> \\( \\delta=\\pm90^\\circ \\). Uç nokta
          çember çizer. \\( \\delta=-90^\\circ \\) sağ el dairesel (RHCP), \\( \\delta=+90^\\circ \\)
          sol el dairesel (LHCP) — başparmak yayılma yönünde, parmaklar dönüş yönünde.</li>
          <li><b>Eliptik:</b> genel durum. Eksenel oran \\( AR=E_{maj}/E_{min} \\) ile ölçülür;
          \\( AR=1 \\) dairesel, \\( AR\\to\\infty \\) doğrusaldır. Pratikte \\( AR&lt;3\\ \\text{dB} \\)
          "dairesel sayılır".</li>
        </ul>
        <p><b>Neden önemli?</b> Alıcı anten, gelen dalganın yalnızca kendi polarizasyonuna uyan
        bileşenini toplar. <b>Polarizasyon uyumsuzluk kaybı</b>:</p>
        \\[ \\text{PLF}=|\\hat{\\boldsymbol\\rho}_i\\cdot\\hat{\\boldsymbol\\rho}_a|^{2} \\]
        <p>İki doğrusal anten arasında açı \\( \\psi \\) ise \\( \\text{PLF}=\\cos^{2}\\psi \\): 90°'de
        <b>teorik olarak hiç sinyal alınmaz</b>. Doğrusal bir anten dairesel bir dalgayı alırsa
        \\( \\text{PLF}=0.5 \\), yani sabit 3 dB kayıp; ama yönelimden bağımsızdır. RHCP anten LHCP
        dalgayı alamaz — bu özellik uydu ve GPS'te frekans tekrar kullanımı için kullanılır.</p>
        <p><b>Neden dairesel kullanılır?</b> İyonosferden geçen dalganın polarizasyon düzlemi
        <b>Faraday dönmesi</b> ile döner; doğrusal polarizasyonda alınan güç öngörülemez biçimde
        değişir, dairesel polarizasyonda değişmez. Aynı sebeple dönen/yalpalayan mobil terminallerde
        ve yansımaların bol olduğu ortamlarda dairesel tercih edilir (zemin yansıması dönüş yönünü
        tersine çevirir, bu da çok yollu girişimi bastırır).</p>
        <p><b>Sık yapılan hata:</b> dairesel polarizasyon için yalnız \\( \\delta=90^\\circ \\) şartını
        kontrol etmek. Genlikler eşit değilse sonuç elipstir. İki koşul birlikte sağlanmalıdır.</p>
        <p><b>EE'de nerede:</b> GPS ve uydu TV alıcıları (RHCP), Wi-Fi ve mobil baz istasyonlarında
        ±45° çapraz polarizasyonla kapasite ikiye katlama, RFID okuyucular, radar hedef sınıflandırma.</p>`
    },
    {
      baslik: "19. İletim Hatları: Dalga Denklemi, Yansıma ve Smith Abağı",
      icerik: `
        <p>Devre teorisinde bir tel "her yerde aynı gerilim" demekti. Bu, ancak telin uzunluğu dalga
        boyunun yanında küçükse doğrudur. \\( \\ell\\gtrsim\\lambda/10 \\) olduğunda gerilim ve akım
        tel boyunca <b>dalga olarak</b> yayılır; hattı dağıtılmış \\( R,L,G,C \\) ile modellemek gerekir.</p>
        <p>Telegrafçı denklemleri, kayıpsız hat için (\\( R=G=0 \\)) tanıdık dalga denklemine indirgenir:</p>
        \\[ \\gamma=\\sqrt{(R+j\\omega L)(G+j\\omega C)}=\\alpha+j\\beta,\\qquad
           Z_0=\\sqrt{\\frac{R+j\\omega L}{G+j\\omega C}}\\ \\xrightarrow{\\ \\text{kayıpsız}\\ }\\ \\sqrt{\\frac{L}{C}} \\]
        <p>\\( Z_0 \\) bir "direnç" değildir; hat üzerinde ilerleyen tek bir dalga için gerilim/akım
        oranıdır ve enerji harcamaz. Kayıpsız hatta \\( \\beta=\\omega\\sqrt{LC} \\), faz hızı
        \\( u_p=1/\\sqrt{LC} \\).</p>
        <p><b>Yansıma.</b> Hat \\( Z_L \\) ile sonlandırıldığında, ancak \\( Z_L=Z_0 \\) ise gelen
        dalganın tamamı yüke aktarılır. Aksi hâlde bir kısmı geri döner:</p>
        \\[ \\Gamma_L=\\frac{Z_L-Z_0}{Z_L+Z_0},\\qquad
           \\text{SWR}=\\frac{1+|\\Gamma_L|}{1-|\\Gamma_L|},\\qquad
           \\frac{P_{\\text{iletilen}}}{P_{\\text{gelen}}}=1-|\\Gamma_L|^{2} \\]
        <p>Üç özel durum ezberlenmelidir: açık devre \\( \\Gamma=+1 \\), kısa devre \\( \\Gamma=-1 \\),
        uyumlu yük \\( \\Gamma=0 \\). Bu ifadeler, düzlem dalganın ortam sınırından yansıması
        konusundakilerle <b>birebir aynıdır</b>; \\( \\eta \\) yerine \\( Z_0 \\) yazılmıştır. Elektromanyetik
        dalga ile iletim hattı aynı matematiğin iki yüzüdür.</p>
        <p><b>Giriş empedansı.</b> Yükten \\( \\ell \\) kadar geride hattın girişinde görülen empedans:</p>
        \\[ Z_{in}(\\ell)=Z_0\\,\\frac{Z_L+jZ_0\\tan\\beta\\ell}{Z_0+jZ_L\\tan\\beta\\ell} \\]
        <p>Bu tek denklem üç önemli sonucu barındırır:</p>
        <ul>
          <li><b>\\( \\ell=\\lambda/2 \\):</b> \\( \\tan\\beta\\ell=0 \\Rightarrow Z_{in}=Z_L \\). Yarım dalga
          hat empedansı aynen tekrarlar.</li>
          <li><b>\\( \\ell=\\lambda/4 \\):</b> \\( Z_{in}=Z_0^{2}/Z_L \\). Empedansı tersine çevirir;
          \\( Z_0=\\sqrt{Z_{in}Z_L} \\) seçilerek <b>çeyrek dalga uyumlaştırıcı</b> yapılır.
          Kısa devre bir çeyrek dalga hat açık devre, açık devre olan ise kısa devre gibi görünür.</li>
          <li><b>Kısa/açık sonlandırılmış kısa hatlar</b> saf reaktans verir: hat parçası bobin
          veya kondansatör yerine kullanılabilir (stub).</li>
        </ul>
        <p><b>Smith abağı</b> bu hesabı grafikleştirir. Normalize empedans \\( z=Z/Z_0 \\) düzlemi,
        \\( \\Gamma \\) düzlemindeki birim çembere eşlenir:</p>
        \\[ z=\\frac{1+\\Gamma}{1-\\Gamma} \\]
        <p>Sabit direnç ve sabit reaktans eğrileri çembere dönüşür. Hat boyunca yüke doğru veya
        kaynağa doğru hareket, merkez etrafında <b>sabit yarıçaplı dönme</b> demektir; tam tur
        \\( \\lambda/2 \\)'ye karşılık gelir. Abakla stub uyumlaştırma, SWR okuma ve empedans
        dönüşümü cetvelsiz yapılır.</p>
        <p><b>Sık yapılan hata:</b> \\( \\Gamma \\)'nın hat boyunca genliğinin değiştiğini sanmak.
        Kayıpsız hatta \\( |\\Gamma| \\) sabittir, yalnız <b>fazı</b> \\( e^{-2j\\beta\\ell} \\) ile döner —
        Smith abağındaki dairesel hareketin sebebi budur.</p>
        <p><b>EE'de nerede:</b> PCB üzerindeki yüksek hızlı sayısal hatlar (50 Ω kontrollü empedans,
        sonlandırma dirençleri), anten besleme hatları, RF güç kuvvetlendiricisi çıkış uyumlaştırması,
        koaksiyel kablo ve zaman alanı reflektometresi (TDR) ile kablo arızası bulma.</p>`
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
    { ad: "Poynting Vektörü", formul: `\\( \\mathbf{S}=\\mathbf{E}\\times\\mathbf{H} \\)`, aciklama: "Güç akısı yoğunluğu (W/m²)." },
    { ad: "Diferansiyel Hacim (Küresel)", formul: `\\( dV=r^2\\sin\\theta\\,dr\\,d\\theta\\,d\\phi \\)`, aciklama: "Silindirikte dV=ρ dρ dφ dz." },
    { ad: "Sonsuz Çizgi Yükü", formul: `\\( \\mathbf E=\\dfrac{\\rho_L}{2\\pi\\varepsilon_0\\rho}\\hat{\\boldsymbol\\rho} \\)`, aciklama: "1/ρ ile azalır; Gauss silindiriyle." },
    { ad: "Sonsuz Düzlem Yükü", formul: `\\( E=\\dfrac{\\rho_S}{2\\varepsilon_0} \\)`, aciklama: "Uzaklıktan bağımsız." },
    { ad: "Dipol Potansiyeli", formul: `\\( V=\\dfrac{p\\cos\\theta}{4\\pi\\varepsilon_0r^2} \\)`, aciklama: "p=Qd; 1/r² ile azalır." },
    { ad: "Görüntü Yükü Kuvveti", formul: `\\( F=\\dfrac{Q^2}{4\\pi\\varepsilon_0(2h)^2} \\)`, aciklama: "Topraklı düzleme h uzaklıktaki Q'ya çekim." },
    { ad: "Sınır Koşulları (E, D)", formul: `\\( E_{t1}=E_{t2},\\quad D_{n1}-D_{n2}=\\rho_S \\)`, aciklama: "Teğet E sürekli; normal D yüzey yükü kadar atlar." },
    { ad: "Sınır Koşulları (B, H)", formul: `\\( B_{n1}=B_{n2},\\quad H_{t1}-H_{t2}=K \\)`, aciklama: "Normal B sürekli; teğet H yüzey akımı kadar atlar." },
    { ad: "Koaksiyel C ve L", formul: `\\( C'=\\dfrac{2\\pi\\varepsilon}{\\ln(b/a)},\\; L'=\\dfrac{\\mu}{2\\pi}\\ln\\dfrac{b}{a} \\)`, aciklama: "Birim uzunluk; L'C'=με." },
    { ad: "Direnç (Geometri)", formul: `\\( R=\\dfrac{\\ell}{\\sigma A},\\quad RC=\\dfrac{\\varepsilon}{\\sigma} \\)`, aciklama: "Aynı geometride R ve C ikiliği." },
    { ad: "Solenoid İndüktansı", formul: `\\( L=\\dfrac{\\mu N^2A}{\\ell} \\)`, aciklama: "N² ile artar; demir çekirdek μ_r kat." },
    { ad: "Hareket EMK'si", formul: `\\( \\varepsilon=\\oint(\\mathbf v\\times\\mathbf B)\\cdot d\\mathbf l=BLv \\)`, aciklama: "Düz çubuk için; transformatör emk'si ile toplanır." },
    { ad: "Yer Değiştirme Akımı", formul: `\\( \\mathbf J_d=\\dfrac{\\partial\\mathbf D}{\\partial t},\\quad I_d=C\\dfrac{dV}{dt} \\)`, aciklama: "Kapasitörde tel akımına eşit." },
    { ad: "Yayılma Sabiti", formul: `\\( \\gamma=\\alpha+j\\beta=\\sqrt{j\\omega\\mu(\\sigma+j\\omega\\varepsilon)} \\)`, aciklama: "α: zayıflama (Np/m), β: faz (rad/m)." },
    { ad: "Kayıp Tanjantı", formul: `\\( \\tan\\delta=\\dfrac{\\sigma}{\\omega\\varepsilon} \\)`, aciklama: "≫1 iyi iletken, ≪1 düşük kayıplı dielektrik." },
    { ad: "Yansıma / İletim", formul: `\\( \\Gamma=\\dfrac{\\eta_2-\\eta_1}{\\eta_2+\\eta_1},\\;\\tau=\\dfrac{2\\eta_2}{\\eta_2+\\eta_1} \\)`, aciklama: "Dik geliş; 1+Γ=τ; güç oranı |Γ|²." },
    { ad: "Duran Dalga Oranı", formul: `\\( s=\\dfrac{1+|\\Gamma|}{1-|\\Gamma|} \\)`, aciklama: "VSWR; eşlenmiş yükte 1." },
    { ad: "Ortalama Güç Yoğunluğu", formul: `\\( S_{ort}=\\dfrac{E_0^2}{2\\eta}=\\dfrac12\\text{Re}\\{\\mathbf E_s\\times\\mathbf H_s^*\\} \\)`, aciklama: "Kayıpsız düzlem dalga; W/m²." },

    { ad: "Polarizasyon Alan İfadesi", formul: "\\( \\mathbf E=E_{x0}\\cos(\\omega t-\\beta z)\\hat{\\mathbf x}+E_{y0}\\cos(\\omega t-\\beta z+\\delta)\\hat{\\mathbf y} \\)", aciklama: "Şekli yalnız genlik oranı ve faz farkı δ belirler." },
    { ad: "Dairesel Polarizasyon Koşulu", formul: "\\( E_{x0}=E_{y0}\\ \\ \\text{ve}\\ \\ \\delta=\\pm90^\\circ \\)", aciklama: "İki koşul birlikte sağlanmazsa sonuç eliptiktir." },
    { ad: "Eksenel Oran", formul: "\\( AR=\\dfrac{E_{maj}}{E_{min}},\\quad 1\\le AR\\le\\infty \\)", aciklama: "AR = 1 dairesel, AR → ∞ doğrusal; pratikte AR < 3 dB dairesel sayılır." },
    { ad: "Polarizasyon Uyum Kaybı", formul: "\\( \\text{PLF}=|\\hat{\\boldsymbol\\rho}_i\\cdot\\hat{\\boldsymbol\\rho}_a|^{2}=\\cos^{2}\\psi \\)", aciklama: "Doğrusal–doğrusal 90°'de sıfır; doğrusal–dairesel daima 0.5 (3 dB)." },
    { ad: "İletim Hattı Yayılma Sabiti", formul: "\\( \\gamma=\\sqrt{(R+j\\omega L)(G+j\\omega C)}=\\alpha+j\\beta \\)", aciklama: "Kayıpsızda \\( \\alpha=0,\\ \\beta=\\omega\\sqrt{LC} \\)." },
    { ad: "Karakteristik Empedans", formul: "\\( Z_0=\\sqrt{\\dfrac{R+j\\omega L}{G+j\\omega C}}\\ \\to\\ \\sqrt{\\dfrac{L}{C}} \\)", aciklama: "Direnç değil; ilerleyen tek dalganın V/I oranı, güç harcamaz." },
    { ad: "Hat Giriş Empedansı", formul: "\\( Z_{in}=Z_0\\dfrac{Z_L+jZ_0\\tan\\beta\\ell}{Z_0+jZ_L\\tan\\beta\\ell} \\)", aciklama: "λ/2'de tekrarlar, λ/4'te tersine çevirir." },
    { ad: "Çeyrek Dalga Uyumlaştırıcı", formul: "\\( Z_{in}=\\dfrac{Z_0^{2}}{Z_L}\\ \\Rightarrow\\ Z_0=\\sqrt{Z_{in}Z_L} \\)", aciklama: "İki gerçek empedansı tek bir λ/4 hat parçasıyla uyumlar." },
    { ad: "Smith Abağı Dönüşümü", formul: "\\( z=\\dfrac{1+\\Gamma}{1-\\Gamma},\\qquad \\Gamma(\\ell)=\\Gamma_L e^{-2j\\beta\\ell} \\)", aciklama: "Kayıpsız hatta |Γ| sabit, yalnız fazı döner; tam tur = λ/2." }
  ],
  galeri: [],
  dokumanlar: [],
  videolar: [
    { baslik: "Engineering Electromagnetics — Hayt & Buck (Tam Kurs Playlist)", playlist: "PL5Lcr54DawvSCz7_u_2JX_0_Atv4u-9PD" },
    { baslik: "MIT 8.02 — Elektrik ve Manyetizma, Walter Lewin (Tam Kurs Playlist)", playlist: "PLUdYlQf0_sSsfcNOPSNPQKHDhSjTJATPu" }
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
      konu: 0,
      soru: `<p>\\( \\mathbf A=\\rho^2\\hat{\\boldsymbol\\rho}+z\\,\\hat{\\mathbf z} \\) (silindirik) alanının diverjansını bulun. Yarıçapı 2, yüksekliği 3 olan (z=0..3) kapalı silindirden çıkan toplam akıyı hem hacim integraliyle hem yüzey integraliyle hesaplayıp diverjans teoremini doğrulayın.</p>`,
      cozum: `
        <p>Silindirik diverjans: \\( \\nabla\\cdot\\mathbf A=\\dfrac1\\rho\\dfrac{\\partial(\\rho A_\\rho)}{\\partial\\rho}+\\dfrac{\\partial A_z}{\\partial z}
        =\\dfrac1\\rho\\dfrac{\\partial(\\rho^3)}{\\partial\\rho}+1=3\\rho+1 \\).</p>
        <p><b>Hacim:</b> \\( \\int_0^3\\!\\int_0^{2\\pi}\\!\\int_0^2(3\\rho+1)\\rho\\,d\\rho\\,d\\phi\\,dz=3\\cdot2\\pi\\big[\\rho^3+\\tfrac{\\rho^2}{2}\\big]_0^2=6\\pi(8+2)=60\\pi \\).</p>
        <p><b>Yüzey:</b> yan yüzey (\\( \\rho=2 \\)): \\( A_\\rho\\cdot2\\pi\\rho h=4\\cdot2\\pi\\cdot2\\cdot3=48\\pi \\); üst kapak (z=3): \\( 3\\cdot\\pi\\cdot4=12\\pi \\);
        alt kapak (z=0): \\( A_z=0 \\). Toplam \\( 60\\pi \\). ✓</p>`
    },
    {
      tip: "vize",
      konu: 1,
      soru: `<p>Boşlukta \\( Q=4\\,\\text{nC} \\) noktasal yükten \\( r=2\\,\\text{m} \\) uzaklıkta elektrik alan şiddeti \\( E \\) ve potansiyel \\( V \\) nedir? \\( (k\\approx 9\\times10^{9}) \\)</p>`,
      cozum: `
        \\[ E=\\frac{kQ}{r^2}=\\frac{9\\times10^{9}\\cdot 4\\times10^{-9}}{2^2}=\\frac{36}{4}=9\\;\\text{V/m}, \\qquad V=\\frac{kQ}{r}=\\frac{36}{2}=18\\;\\text{V} \\]
        <p>Kontrol: nokta yükte \\( E=V/r \\) → \\( 18/2=9 \\). ✓</p>`
    },
    {
      tip: "vize",
      konu: 2,
      soru: `<p>Sonsuz uzun bir çizgi yükünün yoğunluğu \\( \\rho_L=1\\,\\text{nC/m} \\). Gauss yasasıyla \\( r=2\\,\\text{m} \\) uzaklıkta elektrik alanı bulun; hangi Gauss yüzeyini seçtiğinizi ve neden kapakların katkı vermediğini açıklayın. \\( (k=9\\times10^9) \\)</p>`,
      cozum: `
        <p>Yüzey: çizgiyle eş eksenli, yarıçapı r, uzunluğu L silindir. Simetriden \\( \\mathbf D=D_\\rho\\hat{\\boldsymbol\\rho} \\):
        kapaklarda \\( \\mathbf D\\perp d\\mathbf S \\) → katkı 0; yan yüzeyde D sabit ve normal.</p>
        \\[ D_\\rho\\cdot2\\pi rL=\\rho_LL\\;\\Rightarrow\\;E=\\frac{\\rho_L}{2\\pi\\varepsilon_0 r}=\\frac{2k\\rho_L}{r}=\\frac{2(9\\times10^9)(10^{-9})}{2}=9\\;\\text{V/m} \\]`
    },
    {
      tip: "vize",
      konu: 5,
      soru: `<p>Plaka alanı \\( A=100\\,\\text{cm}^2 \\), aralık \\( d=1\\,\\text{mm} \\), dielektrik \\( \\varepsilon_r=4 \\) olan paralel plaka kapasitörün sığasını bulun. 100 V uygulanırsa depolanan enerji ve plakalardaki yük nedir? \\( (\\varepsilon_0=8.85\\times10^{-12}) \\)</p>`,
      cozum: `
        \\[ C=\\frac{\\varepsilon_r\\varepsilon_0 A}{d}=\\frac{4(8.85\\times10^{-12})(0.01)}{0.001}\\approx 3.54\\times10^{-10}\\,\\text{F}=354\\,\\text{pF} \\]
        <p>\\( Q=CV=35.4\\,\\text{nC} \\); \\( W=\\tfrac12CV^2=\\tfrac12(354\\times10^{-12})(10^4)=1.77\\,\\mu\\text{J} \\).
        Alan \\( E=V/d=100\\,\\text{kV/m} \\) — havanın dayanımı 3 MV/m, güvenli.</p>`
    },
    {
      tip: "vize",
      konu: 6,
      soru: `<p>İki iletken düzlem \\( x=0 \\)'da \\( V=0 \\), \\( x=d \\)'de \\( V=V_0 \\) tutuluyor; ara yüksüz (\\( \\varepsilon \\)). Laplace denklemiyle \\( V(x) \\), \\( \\mathbf E \\), plakalardaki \\( \\rho_S \\) ve birim alan kapasitansı bulun.</p>`,
      cozum: `
        <p>\\( \\nabla^2V=d^2V/dx^2=0 \\) ⟹ \\( V=Ax+B \\). \\( V(0)=0\\Rightarrow B=0 \\); \\( V(d)=V_0\\Rightarrow A=V_0/d \\).</p>
        \\[ V=\\frac{V_0}{d}x, \\qquad \\mathbf E=-\\nabla V=-\\frac{V_0}{d}\\hat{\\mathbf x} \\]
        <p>\\( x=d \\) plakasında normal dışa \\( -\\hat{\\mathbf x} \\): \\( \\rho_S=\\mathbf D\\cdot\\hat{\\mathbf n}=\\varepsilon V_0/d \\) (pozitif); \\( x=0 \\)'da \\( -\\varepsilon V_0/d \\).</p>
        <p>\\( C/A=\\rho_S/V_0=\\varepsilon/d \\) — Gauss ile bulunan \\( C=\\varepsilon A/d \\) ile aynı. ✓</p>`
    },
    {
      tip: "vize",
      konu: 5,
      soru: `<p>\\( z&gt;0 \\) bölgesinde \\( \\varepsilon_{r1}=2 \\), \\( z&lt;0 \\) bölgesinde \\( \\varepsilon_{r2}=5 \\); sınırda yüzey yükü yok. 1. ortamda \\( \\mathbf E_1=3\\hat{\\mathbf x}+4\\hat{\\mathbf z} \\) V/m ise \\( \\mathbf E_2 \\)'yi bulun. Alanın normalle yaptığı açı hangi ortamda daha büyüktür?</p>`,
      cozum: `
        <p>Teğet E sürekli: \\( E_{2x}=3 \\). Normal D sürekli: \\( \\varepsilon_1E_{1z}=\\varepsilon_2E_{2z}\\Rightarrow E_{2z}=\\dfrac{2\\cdot4}{5}=1.6 \\).</p>
        \\[ \\mathbf E_2=3\\hat{\\mathbf x}+1.6\\hat{\\mathbf z}\\;\\text{V/m} \\]
        <p>Açılar: \\( \\tan\\theta_1=3/4\\Rightarrow36.9° \\); \\( \\tan\\theta_2=3/1.6\\Rightarrow61.9° \\). Yüksek \\( \\varepsilon \\)'lı ortamda alan
        normalden <b>uzaklaşır</b> (\\( \\tan\\theta_2/\\tan\\theta_1=\\varepsilon_2/\\varepsilon_1=2.5 \\)). ✓</p>`
    },
    {
      tip: "vize",
      konu: 4,
      soru: `<p>Topraklanmış sonsuz iletken düzlemden \\( h=2\\,\\text{cm} \\) yukarıda \\( Q=5\\,\\text{nC} \\) yük var. Yüke etkiyen kuvveti ve düzlemde yükün tam altındaki noktada indüklenen yüzey yük yoğunluğunu bulun.</p>`,
      cozum: `
        <p>Görüntü yükü \\( -Q \\), \\( 2h=4 \\) cm uzakta:</p>
        \\[ F=\\frac{Q^2}{4\\pi\\varepsilon_0(2h)^2}=\\frac{9\\times10^9(25\\times10^{-18})}{(0.04)^2}=1.41\\times10^{-4}\\,\\text{N}\\;(\\text{düzleme doğru}) \\]
        <p>Tam altta (ρ=0) alan iki yükün katkısıyla: \\( E_z=-2\\cdot\\dfrac{Q}{4\\pi\\varepsilon_0h^2} \\);
        \\( \\rho_S=\\varepsilon_0E_n=-\\dfrac{Q}{2\\pi h^2}=-\\dfrac{5\\times10^{-9}}{2\\pi(4\\times10^{-4})}=-1.99\\,\\mu\\text{C/m}^2 \\).</p>`
    },
    {
      tip: "vize",
      konu: 8,
      soru: `<p>Sonsuz uzun düz telden \\( I=10\\,\\text{A} \\) akıyor. \\( r=5\\,\\text{cm} \\) uzaklıkta \\( H \\) ve \\( B \\) nedir? Aynı akım yarıçapı 1 cm olan dolu iletkenden geçiyorsa \\( r=0.5 \\) cm'de (iletken içinde) H kaçtır? \\( (\\mu_0=4\\pi\\times10^{-7}) \\)</p>`,
      cozum: `
        \\[ H=\\frac{I}{2\\pi r}=\\frac{10}{2\\pi(0.05)}\\approx 31.8\\;\\text{A/m}, \\qquad B=\\mu_0 H\\approx 40\\;\\mu\\text{T} \\]
        <p>İçeride Ampere: çevrelenen akım \\( I\\,r^2/a^2=10\\cdot0.25=2.5 \\) A →
        \\( H=\\dfrac{2.5}{2\\pi(0.005)}=79.6 \\) A/m. (İçeride H, r ile doğrusal artar; yüzeyde \\( I/2\\pi a=159 \\) A/m ile tepe yapar.)</p>`
    },
    {
      tip: "vize",
      konu: 10,
      soru: `<p>Uzunluğu 20 cm, kesiti \\( 4\\,\\text{cm}^2 \\), 500 sarımlı hava çekirdekli bir solenoidin indüktansını bulun. Çekirdeğe \\( \\mu_r=1000 \\) ferrit konursa L ne olur? 2 A akımda depolanan enerjiyi (ferritli) hesaplayın.</p>`,
      cozum: `
        \\[ L=\\frac{\\mu_0N^2A}{\\ell}=\\frac{(4\\pi\\times10^{-7})(500)^2(4\\times10^{-4})}{0.2}=6.28\\times10^{-4}\\,\\text{H}=0.63\\,\\text{mH} \\]
        <p>Ferrit: \\( L=1000\\times0.63\\,\\text{mH}=0.63\\,\\text{H} \\). Enerji: \\( W=\\tfrac12LI^2=\\tfrac12(0.63)(4)=1.26\\,\\text{J} \\).</p>
        <p>Not: gerçek ferrit \\( B=\\mu nI=1000\\cdot4\\pi10^{-7}\\cdot2500\\cdot2=6.3 \\) T'de çoktan doymuş olur; doğrusal formül üst sınır verir.</p>`
    },
    {
      tip: "final",
      konu: 11,
      soru: `<p>Alanı \\( A=0.02\\,\\text{m}^2 \\) olan bir halkadan geçen manyetik alan \\( B(t)=0.5\\sin(100t)\\,\\text{T} \\). İndüklenen emk'nin tepe değeri nedir? Halka 50 sarımlı olsaydı?</p>`,
      cozum: `
        \\[ \\varepsilon=-A\\frac{dB}{dt}=-0.02\\cdot 0.5\\cdot100\\cos(100t)=-\\cos(100t) \\]
        <p>Tepe değer <b>1 V</b>; 50 sarımda \\( N\\varepsilon \\) → <b>50 V</b>. Emk, B'nin sıfır geçişlerinde (dB/dt maksimum) tepe yapar — B ile 90° faz farkı.</p>`
    },
    {
      tip: "final",
      konu: 11,
      soru: `<p>Uzunluğu \\( L=0.5\\,\\text{m} \\) olan iletken çubuk, \\( B=0.4\\,\\text{T} \\) düzgün alana dik iki ray üzerinde \\( v=10\\,\\text{m/s} \\) ile kayıyor; raylar \\( R=2\\,\\Omega \\) ile kapatılmış. (a) emk, (b) akım, (c) çubuğu sabit hızda tutmak için gereken kuvvet ve mekanik güç, (d) dirençte harcanan güç nedir?</p>`,
      cozum: `
        <p>(a) \\( \\varepsilon=BLv=0.4\\cdot0.5\\cdot10=2 \\) V. (b) \\( I=\\varepsilon/R=1 \\) A.</p>
        <p>(c) Akım taşıyan çubuğa alan kuvveti \\( F=BIL=0.4\\cdot1\\cdot0.5=0.2 \\) N, Lenz gereği harekete <b>karşı</b>; aynı büyüklükte itmek gerekir.
        Mekanik güç \\( Fv=2 \\) W.</p>
        <p>(d) \\( P=I^2R=2 \\) W — mekanik güç tamamen ısıya döner: enerji korunumu ✓ (basit bir DC generatör).</p>`
    },
    {
      tip: "final",
      konu: 13,
      soru: `<p>Boşlukta yayılan düzlem dalganın alanı \\( E_0=10\\,\\text{V/m} \\), \\( f=100\\,\\text{MHz} \\). (a) \\( H_0 \\), (b) dalga boyu, (c) ortalama güç yoğunluğu nedir? \\( (\\eta_0=377\\,\\Omega) \\) (d) Aynı dalga \\( \\varepsilon_r=4 \\) ortama girse λ ve η ne olur?</p>`,
      cozum: `
        <p>(a) \\( H_0=\\dfrac{E_0}{\\eta_0}=\\dfrac{10}{377}\\approx 0.0265\\,\\text{A/m} \\).</p>
        <p>(b) \\( \\lambda=\\dfrac{c}{f}=\\dfrac{3\\times10^8}{10^8}=3\\,\\text{m} \\).</p>
        <p>(c) \\( S_{ort}=\\dfrac{E_0^2}{2\\eta_0}=\\dfrac{100}{754}\\approx 0.133\\,\\text{W/m}^2 \\).</p>
        <p>(d) \\( v=c/2 \\) → \\( \\lambda=1.5 \\) m; \\( \\eta=\\eta_0/\\sqrt4=188.5\\,\\Omega \\). Frekans değişmez.</p>`
    },
    {
      tip: "final",
      konu: 14,
      soru: `<p>\\( \\mathbf E=50\\cos(10^8t-\\beta z)\\,\\hat{\\mathbf x} \\) V/m alanı kayıpsız, manyetik olmayan (\\( \\mu_r=1 \\)) bir ortamda yayılıyor ve \\( \\beta=0.5 \\) rad/m ölçülüyor. Ortamın \\( \\varepsilon_r \\)'sini, dalga boyunu, öz empedansını ve \\( \\mathbf H \\)'yi bulun.</p>`,
      cozum: `
        <p>\\( v=\\omega/\\beta=10^8/0.5=2\\times10^8 \\) m/s ⟹ \\( \\varepsilon_r=(c/v)^2=(1.5)^2=2.25 \\).</p>
        <p>\\( \\lambda=2\\pi/\\beta=12.57 \\) m. \\( \\eta=\\eta_0/\\sqrt{\\varepsilon_r}=377/1.5=251\\,\\Omega \\).</p>
        <p>Yayılım \\( +\\hat{\\mathbf z} \\); \\( \\mathbf H=\\dfrac1\\eta\\hat{\\mathbf z}\\times\\mathbf E=\\dfrac{50}{251}\\cos(10^8t-0.5z)\\,\\hat{\\mathbf y}
        =0.2\\cos(10^8t-0.5z)\\,\\hat{\\mathbf y} \\) A/m.</p>`
    },
    {
      tip: "final",
      konu: 14,
      soru: `<p>Bakırda (\\( \\sigma=5.8\\times10^7\\,\\text{S/m} \\), \\( \\mu=\\mu_0 \\)) \\( f=1\\,\\text{MHz} \\) için deri derinliğini bulun. Çapı 2 mm bir bakır telin bu frekanstaki AC direncinin DC direncine oranını tahmin edin.</p>`,
      cozum: `
        \\[ \\delta=\\frac{1}{\\sqrt{\\pi f\\mu_0\\sigma}}=\\frac{1}{\\sqrt{\\pi(10^6)(4\\pi\\times10^{-7})(5.8\\times10^7)}}\\approx 6.6\\times10^{-5}\\,\\text{m}=66\\,\\mu\\text{m} \\]
        <p>Akım yaklaşık \\( 2\\pi a\\delta \\) kesitte akar (a=1 mm): \\( \\dfrac{R_{ac}}{R_{dc}}\\approx\\dfrac{\\pi a^2}{2\\pi a\\delta}=\\dfrac{a}{2\\delta}=\\dfrac{1}{0.132}\\approx7.6 \\).
        1 MHz'de telin direnci DC'nin ~8 katıdır — RF'te Litz teli ya da gümüş kaplamanın nedeni.</p>`
    },
    {
      tip: "final",
      konu: 15,
      soru: `<p>Havadan (\\( \\eta_1=377\\,\\Omega \\)) \\( \\varepsilon_r=9 \\) kayıpsız dielektriğe dik gelen düzlem dalganın \\( E_{i0}=6 \\) V/m. Yansıma ve iletim katsayılarını, yansıyan ve iletilen E genliklerini, güç oranlarını ve 1. ortamdaki duran dalga oranını bulun.</p>`,
      cozum: `
        <p>\\( \\eta_2=377/\\sqrt9=125.7\\,\\Omega \\).</p>
        \\[ \\Gamma=\\frac{125.7-377}{125.7+377}=-0.5, \\qquad \\tau=1+\\Gamma=0.5 \\]
        <p>\\( E_{r0}=-3 \\) V/m (ters fazda), \\( E_{t0}=3 \\) V/m. Yansıyan güç oranı \\( |\\Gamma|^2=0.25 \\); iletilen \\( 1-0.25=0.75 \\)
        (kontrol: \\( \\frac{\\eta_1}{\\eta_2}\\tau^2=3\\cdot0.25=0.75 \\) ✓). SWR \\( s=\\dfrac{1+0.5}{1-0.5}=3 \\).</p>`
    },
    {
      tip: "final",
      konu: 16,
      soru: `<p>İzotropik bir anten 1 kW yayıyor. 10 km uzaklıkta ortalama güç yoğunluğunu ve elektrik alanın tepe genliğini bulun. Bir alıcı anten etkin alanı \\( 0.5\\,\\text{m}^2 \\) ise aldığı güç nedir?</p>`,
      cozum: `
        \\[ S=\\frac{P_t}{4\\pi r^2}=\\frac{1000}{4\\pi(10^4)^2}=7.96\\times10^{-7}\\,\\text{W/m}^2 \\]
        \\[ E_0=\\sqrt{2\\eta_0S}=\\sqrt{2\\cdot377\\cdot7.96\\times10^{-7}}=0.0245\\,\\text{V/m}=24.5\\,\\text{mV/m} \\]
        <p>Alınan güç \\( P_r=SA_e=3.98\\times10^{-7} \\) W ≈ −34 dBm. (Kısayol: \\( E_0=\\sqrt{60P_t}/r=245/10^4 \\) V/m ✓)</p>`
    },
    {
      tip: "final",
      konu: 9,
      soru: `<p>\\( q=1\\,\\text{mC} \\) yük, \\( \\mathbf{v}=100\\,\\hat{\\mathbf{x}}\\,\\text{m/s} \\) hızıyla \\( \\mathbf{B}=0.2\\,\\hat{\\mathbf{z}}\\,\\text{T} \\) alanında hareket ediyor. Manyetik kuvveti bulun. Bu kuvvet yükün kinetik enerjisini değiştirir mi?</p>`,
      cozum: `
        \\[ \\mathbf{F}=q\\,\\mathbf{v}\\times\\mathbf{B}=(10^{-3})(100\\,\\hat{\\mathbf{x}})\\times(0.2\\,\\hat{\\mathbf{z}}) \\]
        <p>\\( \\hat{\\mathbf{x}}\\times\\hat{\\mathbf{z}}=-\\hat{\\mathbf{y}} \\) olduğundan \\( \\mathbf{F}=-0.02\\,\\hat{\\mathbf{y}}\\;\\text{N} \\).</p>
        <p>Kuvvet hıza dik → iş yapmaz, kinetik enerji <b>değişmez</b>; yalnızca yön döner (dairesel yörünge, \\( r=mv/qB \\)).</p>`
    },
    {
      tip: "final",
      konu: 12,
      soru: `<p>Yer değiştirme akımı nedir ve Maxwell neden Ampere yasasına bu terimi ekledi? Plaka alanı \\( 1\\,\\text{cm}^2 \\), aralığı 1 mm hava kapasitörüne \\( v(t)=10\\sin(2\\pi\\cdot10^6t) \\) V uygulanırsa yer değiştirme akımının tepe değeri nedir?</p>`,
      cozum: `
        <p>\\( \\mathbf{J}_d=\\partial\\mathbf{D}/\\partial t \\). Orijinal Ampere yasası (\\( \\nabla\\times\\mathbf{H}=\\mathbf{J} \\)) diverjans alınınca
        \\( \\nabla\\cdot\\mathbf J=0 \\) verir — süreklilik denklemiyle (\\( -\\partial\\rho_v/\\partial t \\)) çelişir; kapasitör aralığında iletim akımı
        yokken H nasıl oluşur sorusuna cevap veremez. \\( \\mathbf J_d \\) eklenince hem süreklilik korunur hem de dalga çözümleri ortaya çıkar.</p>
        <p>Sayısal: \\( C=\\varepsilon_0A/d=8.85\\times10^{-12}\\cdot10^{-4}/10^{-3}=0.885 \\) pF;
        \\( I_d=C\\,dV/dt \\) tepe \\( =C\\omega V_0=0.885\\times10^{-12}\\cdot2\\pi10^6\\cdot10=55.6\\,\\mu\\text{A} \\) — tel akımıyla aynı.</p>`
    },

    {
      tip: "final",
      konu: 17,
      soru: `<p>Bir dalganın alanı \\( \\mathbf E=3\\cos(\\omega t-\\beta z)\\hat{\\mathbf x}
        +3\\cos(\\omega t-\\beta z-90^\\circ)\\hat{\\mathbf y} \\) V/m.
        (a) Polarizasyon türü nedir? (b) Bu dalga \\( x \\) eksenine paralel doğrusal bir antenle
        alınırsa kaç dB kayıp olur? (c) Genlikler 3 ve 5 V/m olsaydı sonuç ne değişirdi?</p>`,
      cozum: `<p><b>(a)</b> Genlikler eşit (\\( 3=3 \\)) ve faz farkı \\( \\delta=-90^\\circ \\): iki koşul da
        sağlandığı için <b>dairesel</b> polarizasyon. \\( \\delta=-90^\\circ \\) olduğundan yayılma yönü
        \\( +z \\) için <b>sağ el dairesel (RHCP)</b>.</p>
        <p><b>(b)</b> Doğrusal anten dairesel dalganın yalnız yarısını toplar:
        \\( \\text{PLF}=0.5\\Rightarrow 10\\log_{10}(0.5)=-3.01\\ \\text{dB} \\).
        Önemli nokta: bu kayıp antenin açısından <b>bağımsızdır</b> — anteni döndürmek bir şey değiştirmez.</p>
        <p><b>(c)</b> \\( E_{x0}\\ne E_{y0} \\) olduğundan artık dairesel değil <b>eliptik</b> polarizasyon
        olurdu; eksenel oran \\( AR=5/3\\approx1.67 \\) (4.4 dB). Bu durumda doğrusal antenle alınan güç
        antenin yönelimine bağlı hâle gelir: büyük eksene hizalanınca daha çok, küçük eksene hizalanınca
        daha az güç alınır.</p>`
    },
    {
      tip: "final",
      konu: 18,
      soru: `<p>\\( Z_0=50\\,\\Omega \\) kayıpsız bir hat \\( Z_L=100+j0\\,\\Omega \\) ile sonlandırılmış.
        (a) \\( \\Gamma_L \\) ve SWR nedir? (b) Yükün ne kadarlık güç payı yansır?
        (c) \\( \\lambda/4 \\) geride giriş empedansı nedir? (d) Bu yükü 50 Ω'a uyumlamak için gereken
        çeyrek dalga hattın \\( Z_0' \\) değeri kaçtır?</p>`,
      cozum: `<p><b>(a)</b> \\( \\Gamma_L=\\dfrac{100-50}{100+50}=\\dfrac{50}{150}=0.333 \\).
        \\( \\text{SWR}=\\dfrac{1+0.333}{1-0.333}=\\dfrac{1.333}{0.667}=2.0 \\).</p>
        <p><b>(b)</b> Yansıyan güç oranı \\( |\\Gamma|^{2}=0.111 \\), yani gücün \\( \\%11.1 \\)'i geri döner;
        yüke \\( \\%88.9 \\)'u ulaşır.</p>
        <p><b>(c)</b> \\( \\ell=\\lambda/4 \\Rightarrow \\beta\\ell=\\pi/2 \\Rightarrow \\tan\\beta\\ell\\to\\infty \\),
        formül \\( Z_{in}=Z_0^{2}/Z_L=50^{2}/100=25\\,\\Omega \\) hâline gelir. Empedans tersine döndü.</p>
        <p><b>(d)</b> Uyumlama için \\( Z_0'=\\sqrt{Z_{in}Z_L}=\\sqrt{50\\cdot100}=70.7\\,\\Omega \\).
        Bu değerde bir \\( \\lambda/4 \\) hat parçası araya konursa kaynak tarafından bakıldığında
        \\( 50\\,\\Omega \\) görülür ve \\( \\Gamma=0 \\) olur. <b>Dikkat:</b> uyumlama yalnız tasarım
        frekansında tamdır; frekans kayınca \\( \\beta\\ell\\ne\\pi/2 \\) olur ve SWR yükselir.</p>`
    },

    {
      tip: "vize",
      konu: 3,
      soru: `<p>Boşlukta potansiyel \\( V=2x^{2}y-5z \\) volt olarak veriliyor.
        (a) \\( P(1,-1,2) \\) noktasında \\( \\mathbf E \\) alanını bulun.
        (b) Aynı noktada \\( \\rho_v \\) yük yoğunluğunu bulun.
        (c) \\( 2\\,\\mu\\text{C} \\) yükü \\( A(0,0,0) \\)'dan \\( P \\)'ye taşımak için gereken işi hesaplayın.</p>`,
      cozum: `<p><b>(a)</b> \\( \\mathbf E=-\\nabla V=-\\left(\\dfrac{\\partial V}{\\partial x}\\hat{\\mathbf x}
        +\\dfrac{\\partial V}{\\partial y}\\hat{\\mathbf y}+\\dfrac{\\partial V}{\\partial z}\\hat{\\mathbf z}\\right) \\).
        \\( \\partial_x V=4xy \\), \\( \\partial_y V=2x^{2} \\), \\( \\partial_z V=-5 \\).
        \\( P \\)'de: \\( \\mathbf E=-(-4)\\hat{\\mathbf x}-(2)\\hat{\\mathbf y}-(-5)\\hat{\\mathbf z}
        =4\\hat{\\mathbf x}-2\\hat{\\mathbf y}+5\\hat{\\mathbf z}\\ \\text{V/m} \\).</p>
        <p><b>(b)</b> Poisson: \\( \\nabla^{2}V=-\\rho_v/\\varepsilon_0 \\).
        \\( \\nabla^{2}V=4y+0+0=4y \\); \\( y=-1 \\) için \\( -4 \\).
        \\( \\rho_v=-\\varepsilon_0(-4)=4\\varepsilon_0=3.54\\times10^{-11}\\ \\text{C/m}^{3} \\).</p>
        <p><b>(c)</b> \\( V(A)=0 \\), \\( V(P)=2(1)^{2}(-1)-5(2)=-12\\ \\text{V} \\).
        \\( W=q\\,[V(P)-V(A)]=2\\times10^{-6}\\cdot(-12)=-24\\ \\mu\\text{J} \\).
        İşaret negatif: alan yükü kendisi o yöne taşır, dışarıdan iş yapmak yerine
        sistemden \\( 24\\ \\mu\\text{J} \\) iş <b>alınır</b>. Potansiyel korunumlu olduğu için
        izlenen yol önemsizdir.</p>`
    },
    {
      tip: "vize",
      konu: 7,
      soru: `<p>Bakır bir telde (\\( \\sigma=5.8\\times10^{7}\\ \\text{S/m} \\), serbest elektron yoğunluğu
        \\( n=8.5\\times10^{28}\\ \\text{m}^{-3} \\)) kesit \\( A=1\\ \\text{mm}^{2} \\), akım \\( I=10\\ \\text{A} \\).
        (a) Akım yoğunluğu ve elektrik alan nedir? (b) Sürüklenme hızı nedir?
        (c) Süreklilik denklemini yazın; bir düğümde yük birikmemesi ne anlama gelir?</p>`,
      cozum: `<p><b>(a)</b> \\( J=I/A=10/(10^{-6})=10^{7}\\ \\text{A/m}^{2} \\).
        Ohm yasasının nokta biçimi \\( \\mathbf J=\\sigma\\mathbf E \\):
        \\( E=J/\\sigma=10^{7}/5.8\\times10^{7}=0.172\\ \\text{V/m} \\).
        (1 metrelik telde 0.172 V düşer — \\( R=\\ell/\\sigma A \\) ile aynı sonuç.)</p>
        <p><b>(b)</b> \\( J=nqu_d \\Rightarrow
        u_d=\\dfrac{10^{7}}{8.5\\times10^{28}\\cdot1.6\\times10^{-19}}=7.4\\times10^{-4}\\ \\text{m/s} \\),
        yani <b>saatte ~2.7 metre</b>. Elektronlar çok yavaş ilerlediği hâlde lambanın hemen yanması,
        taşınanın elektron değil <b>alan/enerji</b> olmasındandır.</p>
        <p><b>(c)</b> \\( \\nabla\\cdot\\mathbf J=-\\dfrac{\\partial\\rho_v}{\\partial t} \\).
        Kararlı durumda \\( \\partial\\rho_v/\\partial t=0 \\Rightarrow \\nabla\\cdot\\mathbf J=0 \\):
        bir hacme giren akım çıkan akıma eşittir. Bu, <b>Kirchhoff akım yasasının</b> alan
        kuramındaki karşılığıdır — KAY bir varsayım değil, süreklilik denkleminin kararlı durum hâlidir.</p>`
    }
  ]
};
