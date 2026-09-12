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
  ozet: "Sürekli/ayrık zaman sinyalleri ve sistem özellikleri; temel sinyaller; LTI sistemler ve konvolüsyon; Fourier serileri (CT ve DT), Fourier dönüşümü ve özellikleri; frekans yanıtı, Bode çizimi ve filtreleme; DTFT ve DFT; örnekleme ve örtüşme; Laplace ve z dönüşümleri ile diferansiyel/fark denklemi çözümü, ROC, kutup-sıfır ve kararlılık.",
  konular: [
    {
      baslik: "1. Sinyaller ve Sistemlere Giriş (CT & DT)",
      icerik: `
        <p>Sinyal, bilgi taşıyan bir fonksiyondur: sürekli zamanda \\( x(t) \\), ayrık zamanda \\( x[n] \\) (n tam sayı).
        Ayrık sinyal çoğu zaman sürekli bir sinyalin \\( x[n]=x(nT_s) \\) biçiminde örneklenmiş halidir; bu yüzden
        dersin ikinci yarısı "aynı fikrin ayrık kopyası" olarak okunur.</p>
        <p><b>Bağımsız değişken dönüşümleri</b> sınavların klasik ilk sorusudur. \\( x(at-b) \\) çizerken sıra önemlidir:
        önce \\( b \\) kadar kaydır, sonra \\( a \\) ile ölçekle (ya da \\( x(a(t-b/a)) \\) yazıp tersini yap). \\( a&lt;0 \\) yansıtır,
        \\( |a|&gt;1 \\) sıkıştırır. Ayrık zamanda \\( x[2n] \\) örnek atlar (bilgi kaybı), \\( x[n/2] \\) yalnızca çift n'de tanımlıdır.</p>
        <ul>
          <li><b>Periyodiklik:</b> \\( x(t)=x(t+T) \\). Ayrıkta \\( x[n]=x[n+N] \\), N tam sayı. Kritik fark: \\( e^{j\\omega_0 n} \\)
          yalnızca \\( \\omega_0/2\\pi \\) rasyonelse periyodiktir. Örn. \\( \\cos(0.3\\pi n) \\) periyodik (N=20), \\( \\cos(0.3 n) \\) değildir.</li>
          <li><b>Enerji / güç:</b> \\( E=\\int|x|^2dt \\) sonluysa enerji sinyali (darbeler, sönen üsteller), \\( E=\\infty \\) ama
          \\( P=\\lim\\frac{1}{2T}\\int_{-T}^{T}|x|^2dt \\) sonluysa güç sinyali (periyodik sinyaller, u(t)). Bir sinyal ikisi de olamaz.</li>
          <li><b>Çift/tek ayrıştırma:</b> \\( x_e=\\tfrac12[x(t)+x(-t)] \\), \\( x_o=\\tfrac12[x(t)-x(-t)] \\). Gerçel sinyalin Fourier
          dönüşümünde çift kısım gerçel, tek kısım sanal bileşeni verir — ileride işe yarar.</li>
        </ul>
        <p><b>Neden önemli:</b> Bu tanımlar olmadan hangi dönüşümün (Fourier serisi mi, dönüşümü mü, Laplace mı) uygulanacağı
        seçilemez: periyodik → seri, enerji sinyali → Fourier dönüşümü, büyüyen sinyal → Laplace/z.</p>`
    },
    {
      baslik: "2. Temel Sinyaller: Dürtü, Basamak, Üstel",
      icerik: `
        <p>Her karmaşık sinyal birkaç yapı taşından kurulur; LTI analizinin tamamı bu taşların sisteme verdiği yanıtla yapılır.</p>
        <ul>
          <li><b>Birim dürtü \\( \\delta(t) \\):</b> sıfır genişlik, birim alan. Tek anlamlı tanımı integral altındadır:
          <b>ayıklama</b> \\( \\int x(t)\\delta(t-t_0)dt=x(t_0) \\). Çarpım kuralı: \\( x(t)\\delta(t-t_0)=x(t_0)\\delta(t-t_0) \\).
          Ölçekleme: \\( \\delta(at)=\\frac{1}{|a|}\\delta(t) \\) — çoğu öğrenci bunu unutur. Ayrıkta \\( \\delta[n] \\) sıradan bir dizidir (n=0'da 1).</li>
          <li><b>Birim basamak \\( u(t) \\):</b> \\( du/dt=\\delta(t) \\), \\( u(t)=\\int_{-\\infty}^{t}\\delta \\). Dikdörtgen darbe
          \\( u(t)-u(t-T) \\), "sinyali t≥0'da başlat" işlemi \\( x(t)u(t) \\). Ayrıkta \\( \\delta[n]=u[n]-u[n-1] \\).</li>
          <li><b>Gerçel üstel \\( e^{at} \\):</b> a&lt;0 sönüm, a&gt;0 büyüme. Ayrıkta \\( a^n \\): \\( |a|&lt;1 \\) sönüm. \\( -1&lt;a&lt;0 \\)
          işaret değiştirerek söner — sürekli zamanda böyle bir karşılık yoktur.</li>
          <li><b>Kompleks üstel \\( e^{j\\omega_0 t} \\):</b> Euler ile \\( \\cos\\omega_0 t+j\\sin\\omega_0 t \\). Genel biçim
          \\( e^{st}=e^{\\sigma t}e^{j\\omega t} \\): sönümlü sinüzoid. Bu sinyal LTI sistemin <b>özfonksiyonu</b> olduğu için
          Fourier ve Laplace onun üzerine kuruludur.</li>
        </ul>
        <p><b>Sık hata:</b> \\( \\cos(\\omega_0 t) \\) yazıp "frekansı \\( \\omega_0 \\)" demek yerine birim kontrol edilmeli:
        \\( \\omega_0 \\) rad/s, \\( f_0=\\omega_0/2\\pi \\) Hz. Ayrık frekans \\( \\omega \\) ise birimsiz (rad/örnek) ve \\( 2\\pi \\) periyotludur:
        \\( e^{j(\\omega+2\\pi)n}=e^{j\\omega n} \\). Bu yüzden ayrık zamanda "yüksek frekans" \\( \\omega=\\pi \\) civarıdır.</p>`
    },
    {
      baslik: "3. Sistem Özellikleri",
      icerik: `
        <p>Sistem, girişi çıkışa eşleyen bir kuraldır: \\( y=T\\{x\\} \\). Hangi araçların kullanılabileceğini bu özellikler belirler;
        sınavda her biri "göster ya da karşı örnek ver" biçiminde sorulur.</p>
        <ul>
          <li><b>Doğrusallık:</b> \\( T\\{ax_1+bx_2\\}=aT\\{x_1\\}+bT\\{x_2\\} \\). Kontrol: toplamsallık + homojenlik. Sıfır girişe sıfır
          çıkış vermeyen sistem (\\( y=x+1 \\)) doğrusal değildir. \\( y=x^2 \\), \\( y=\\cos x \\) doğrusal değildir; \\( y=t\\,x(t) \\) doğrusaldır.</li>
          <li><b>Zamanla değişmezlik:</b> \\( x(t-t_0)\\to y(t-t_0) \\). Yöntem: girişi kaydır, çıkışı hesapla; çıkışı kaydır; eşit mi?
          Katsayısı zamana bağlı olan (\\( y=t\\,x(t) \\)) ya da zaman eksenini deforme eden (\\( y=x(2t) \\)) sistemler zamanla değişir.</li>
          <li><b>Nedensellik:</b> çıkış geleceğe bağlı değildir. \\( y(t)=x(t+1) \\) nedensel değildir; \\( y[n]=x[n]-x[n-1] \\) nedenseldir.
          Gerçek zamanlı sistemler nedensel olmalıdır; kayıtlı veri üzerinde çalışan sistemler olmayabilir.</li>
          <li><b>Kararlılık (BIBO):</b> \\( |x|\\le B_x \\Rightarrow |y|\\le B_y \\). Toplayıcı \\( y[n]=\\sum_{k\\le n}x[k] \\) kararsızdır
          (u[n] girişi sınırsız büyür). \\( y=e^{x(t)} \\) kararlıdır.</li>
          <li><b>Bellek:</b> yalnızca anlık girişe bağlıysa belleksiz (direnç); geçmişe bağlıysa bellekli (kapasitör, gecikme).</li>
          <li><b>Tersinirlik:</b> farklı girişler farklı çıkış verir. \\( y=x^2 \\) tersinir değildir (işaret kaybolur).</li>
        </ul>
        <p><b>Doğrusal + zamanla değişmez = LTI.</b> Dersin geri kalanı bu sınıf içindir çünkü LTI sistem, tek bir sinyale (dürtüye)
        verdiği yanıtla tamamen tanımlanır. Bu, "her giriş için ayrı ölçüm" yükünü kaldıran devasa bir sadeleşmedir.</p>`
    },
    {
      baslik: "4. LTI Sistemler ve Konvolüsyon",
      icerik: `
        <p>Her giriş, kaydırılmış ve ölçeklenmiş dürtülerin toplamıdır: \\( x[n]=\\sum_k x[k]\\delta[n-k] \\). LTI sistem doğrusal olduğu
        için toplamı terim terim işler, zamanla değişmez olduğu için her \\( \\delta[n-k] \\)'ya \\( h[n-k] \\) verir. Sonuç <b>konvolüsyon</b>:</p>
        \\[ y[n]=x[n]*h[n]=\\sum_{k=-\\infty}^{\\infty}x[k]\\,h[n-k], \\qquad
           y(t)=x(t)*h(t)=\\int_{-\\infty}^{\\infty}x(\\tau)\\,h(t-\\tau)\\,d\\tau \\]
        <p><b>Hesap yöntemi (grafik):</b> \\( h(\\tau) \\)'yu yansıt (\\( h(-\\tau) \\)), t kadar kaydır (\\( h(t-\\tau) \\)), \\( x(\\tau) \\) ile
        çarp, alanı al. Çakışma biçimi değişen her t aralığı için ayrı integral yazılır. Sonlu sinyaller için: çıkış
        \\( t \\in [t_{x,\\min}+t_{h,\\min},\\; t_{x,\\max}+t_{h,\\max}] \\) aralığında sıfırdan farklıdır; süre = sürelerin toplamı.
        İki dikdörtgenin konvolüsyonu üçgen, üçgen ile dikdörtgen parabol parçaları verir.</p>
        <p><b>Ayrık zamanda</b> tablo/kaydırma yöntemi kullanılır: \\( x[n] \\) sabit, \\( h \\) ters çevrilip kaydırılır; uzunluk \\( N_x+N_h-1 \\).</p>
        <ul>
          <li><b>Değişme:</b> \\( x*h=h*x \\) — hangisini yansıtacağına özgürsün, kolay olanı seç.</li>
          <li><b>Birleşme:</b> \\( (x*h_1)*h_2=x*(h_1*h_2) \\) → seri bağlı sistemler tek sistem \\( h_1*h_2 \\) olur, sırası önemsizdir.</li>
          <li><b>Dağılma:</b> \\( x*(h_1+h_2) \\) → paralel bağlı sistemler toplanır.</li>
          <li><b>Birim eleman:</b> \\( x*\\delta=x \\); \\( x*\\delta(t-t_0)=x(t-t_0) \\) — gecikme bir LTI sistemdir.</li>
          <li><b>Basamak yanıtı:</b> \\( s(t)=h(t)*u(t)=\\int_{-\\infty}^t h \\), dolayısıyla \\( h=ds/dt \\). Laboratuvarda dürtü üretmek
          zordur, basamak kolaydır; h buradan bulunur.</li>
        </ul>
        <p><b>Neden önemli:</b> Konvolüsyon zaman bölgesinde ağırdır; Fourier/Laplace'ın tüm cazibesi onu çarpmaya dönüştürmesidir.</p>`
    },
    {
      baslik: "5. LTI Özellikleri: Nedensellik, Kararlılık, Özfonksiyon",
      icerik: `
        <p>LTI sistemin tüm davranışı \\( h(t) \\)'de saklıdır; sistem özellikleri artık girişi denemeden doğrudan \\( h \\)'den okunur.</p>
        <ul>
          <li><b>Nedensellik:</b> \\( h(t)=0 \\) for \\( t&lt;0 \\) (ayrıkta \\( h[n]=0,\\;n&lt;0 \\)). Gerekçe: dürtü t=0'da gelir; sistem
          ondan önce tepki veremez. Sonuç: nedensel sistemde \\( y(t)=\\int_{0}^{\\infty}h(\\tau)x(t-\\tau)d\\tau \\).</li>
          <li><b>Belleksizlik:</b> \\( h(t)=K\\delta(t) \\) — yalnızca kazanç.</li>
          <li><b>BIBO kararlılık:</b> \\( \\int|h(t)|dt&lt;\\infty \\) (ayrıkta \\( \\sum|h[n]|&lt;\\infty \\)). Kanıt fikri:
          \\( |y|\\le\\int|h||x|\\le B_x\\int|h| \\). Örnekler: \\( e^{-at}u(t),\\,a&gt;0 \\) kararlı (\\( \\int=1/a \\)); \\( u(t) \\) kararsız
          (\\( \\int=\\infty \\)); \\( a^n u[n] \\) için \\( |a|&lt;1 \\) gerekir.</li>
          <li><b>Tersi:</b> \\( h*h_{inv}=\\delta \\). Örn. gecikmenin tersi ilerlemedir (nedensel değil); toplayıcının tersi farktır.</li>
        </ul>
        <p><b>Özfonksiyon özelliği — dersin kilit taşı.</b> Girişe \\( e^{st} \\) verilirse:
        \\[ y(t)=\\int h(\\tau)e^{s(t-\\tau)}d\\tau=e^{st}\\underbrace{\\int h(\\tau)e^{-s\\tau}d\\tau}_{H(s)} \\]
        Yani çıkış aynı üstel, yalnızca kompleks sabit \\( H(s) \\) ile çarpılmış. \\( s=j\\omega \\) alınırsa \\( H(j\\omega) \\) frekans yanıtı:
        \\( \\cos\\omega_0 t \\) girişine yanıt \\( |H(j\\omega_0)|\\cos(\\omega_0 t+\\angle H(j\\omega_0)) \\) — genlik ölçeklenir, faz kayar, frekans
        değişmez. Bu, "sinüzoid sokarsan sinüzoid çıkar" gözleminin matematiksel karşılığıdır ve girişi üstellere ayrıştırma
        (Fourier) fikrini doğurur: her bileşen kendi \\( H \\)'siyle çarpılır, toplanır.</p>
        <p>Ayrık zamanda aynı şey \\( z^n \\to H(z)z^n \\), \\( H(z)=\\sum h[n]z^{-n} \\) ile geçerlidir.</p>`
    },
    {
      baslik: "6. Fourier Serileri (Periyodik CT Sinyaller)",
      icerik: `
        <p>Temel frekansı \\( \\omega_0=2\\pi/T \\) olan periyodik \\( x(t) \\), harmonik üstellerin toplamıdır:</p>
        \\[ x(t)=\\sum_{k=-\\infty}^{\\infty}a_k e^{jk\\omega_0 t}, \\qquad a_k=\\frac{1}{T}\\int_{T}x(t)e^{-jk\\omega_0 t}\\,dt \\]
        <p>\\( a_0 \\) DC (ortalama) değerdir; \\( a_k \\) ile \\( a_{-k} \\) gerçel sinyalde eşlenik (\\( a_{-k}=a_k^* \\)), bu yüzden genlik
        spektrumu çifttir. Trigonometrik biçim \\( x=a_0+\\sum(A_k\\cos k\\omega_0 t+B_k\\sin k\\omega_0 t) \\) aynı bilgidir; çift sinyalde
        yalnızca kosinüs, tek sinyalde yalnızca sinüs terimleri kalır — hesap kısaltmak için önce simetriye bakılır.</p>
        <p><b>Klasik örnek — kare dalga</b> (genlik 1, görev oranı \\( 2T_1/T \\)):
        \\( a_k=\\dfrac{\\sin(k\\omega_0 T_1)}{k\\pi} \\), \\( a_0=2T_1/T \\). Katsayılar \\( 1/k \\) ile azalır; %50 görev oranında çift
        harmonikler sıfırdır. Süreksiz sinyallerde katsayılar \\( 1/k \\), köşeli-sürekli sinyallerde (üçgen) \\( 1/k^2 \\) ile
        düşer: <b>sinyal ne kadar pürüzsüzse spektrum o kadar hızlı söner.</b></p>
        <ul>
          <li><b>Dirichlet koşulları:</b> mutlak integrallenebilir, sonlu sayıda ekstremum ve süreksizlik → seri süreksizlik
          dışında yakınsar; süreksizlikte orta değere gider. Sonlu terimle kesince kenarlarda <b>Gibbs salınımı</b> (~%9 aşma) kalır.</li>
          <li><b>Parseval:</b> \\( \\frac{1}{T}\\int_T|x|^2dt=\\sum_k|a_k|^2 \\) — ortalama güç harmoniklere dağılmıştır;
          "ilk üç harmonik gücün yüzde kaçını taşır" soruları buradan çözülür.</li>
          <li><b>LTI sistemden geçiş:</b> özfonksiyon özelliğiyle \\( y(t)=\\sum_k a_k H(jk\\omega_0)e^{jk\\omega_0 t} \\). Filtre
          tasarımının özü: istenmeyen harmoniklerin \\( H \\)'sini küçültmek.</li>
        </ul>
        <p><b>Sık hata:</b> \\( a_k \\) integralini alırken periyodu \\( [-T/2,T/2] \\) yerine sinyalin tanımlı olduğu aralıkla
        karıştırmak; integral herhangi bir tam periyot üzerinden alınabilir, kolay olan seçilir.</p>`
    },
    {
      baslik: "7. Sürekli Zaman Fourier Dönüşümü (CTFT)",
      icerik: `
        <p>Aperiyodik sinyal, "periyodu sonsuza giden periyodik sinyal"dir: \\( T\\to\\infty \\) iken harmonikler sıklaşır
        (\\( k\\omega_0\\to\\omega \\)) ve \\( Ta_k\\to X(j\\omega) \\). Böylece ayrık çizgi spektrumu sürekli bir spektruma dönüşür:</p>
        \\[ X(j\\omega)=\\int_{-\\infty}^{\\infty}x(t)e^{-j\\omega t}\\,dt, \\qquad x(t)=\\frac{1}{2\\pi}\\int_{-\\infty}^{\\infty}X(j\\omega)e^{j\\omega t}\\,d\\omega \\]
        <p>\\( X(j\\omega) \\) karmaşıktır: \\( |X| \\) genlik spektrumu (hangi frekans ne kadar var), \\( \\angle X \\) faz spektrumu
        (bileşenler zamanda nasıl hizalı). Gerçel \\( x \\) için \\( X(-j\\omega)=X^*(j\\omega) \\): genlik çift, faz tek.</p>
        <p><b>Ezberlenmesi gereken çiftler</b> (türetmeleri sınavda istenir):</p>
        <ul>
          <li>\\( \\delta(t)\\leftrightarrow 1 \\) — dürtü tüm frekansları eşit içerir. \\( 1\\leftrightarrow 2\\pi\\delta(\\omega) \\) (dualite).</li>
          <li>\\( e^{-at}u(t)\\leftrightarrow\\dfrac{1}{a+j\\omega} \\), \\( a&gt;0 \\). Genlik \\( 1/\\sqrt{a^2+\\omega^2} \\): birinci dereceden alçak geçiren.</li>
          <li>Dikdörtgen \\( \\text{rect}(t/T)\\leftrightarrow T\\,\\text{sinc}(\\omega T/2\\pi)=\\dfrac{2\\sin(\\omega T/2)}{\\omega} \\) —
          ve dualite ile ideal LPF'nin dürtü yanıtı sinc'tir. Dar darbe → geniş spektrum (belirsizlik ilkesi).</li>
          <li>\\( e^{j\\omega_0 t}\\leftrightarrow 2\\pi\\delta(\\omega-\\omega_0) \\), dolayısıyla
          \\( \\cos\\omega_0 t\\leftrightarrow\\pi[\\delta(\\omega-\\omega_0)+\\delta(\\omega+\\omega_0)] \\).</li>
          <li>Periyodik sinyal: \\( X(j\\omega)=2\\pi\\sum_k a_k\\delta(\\omega-k\\omega_0) \\) — Fourier serisi, dönüşümün özel halidir.</li>
          <li>\\( u(t)\\leftrightarrow\\dfrac{1}{j\\omega}+\\pi\\delta(\\omega) \\), dürtü katarı \\( \\leftrightarrow \\) dürtü katarı (örneklemede kullanılır).</li>
        </ul>
        <p><b>Ne zaman var:</b> \\( \\int|x|dt&lt;\\infty \\) yeterlidir; \\( u(t) \\), \\( \\cos \\) gibi güç sinyalleri için dürtü içeren
        "genelleştirilmiş" dönüşüm yazılır; \\( e^{at},\\,a&gt;0 \\) için hiç yoktur — o iş Laplace'a kalır.</p>`
    },
    {
      baslik: "8. Fourier Dönüşümü Özellikleri",
      icerik: `
        <p>Tanım integralini her seferinde almak yerine bilinen çiftler özelliklerle dönüştürülür. Her özelliğin fiziksel bir anlamı vardır;
        onu bilmek ezberi gereksiz kılar.</p>
        <ul>
          <li><b>Doğrusallık:</b> \\( ax_1+bx_2\\leftrightarrow aX_1+bX_2 \\).</li>
          <li><b>Zaman kaydırma:</b> \\( x(t-t_0)\\leftrightarrow e^{-j\\omega t_0}X(j\\omega) \\). Genlik değişmez, faza \\( -\\omega t_0 \\)
          eklenir (doğrusal faz = saf gecikme). Filtrenin fazı doğrusalsa sinyal biçimi bozulmaz, sadece gecikir.</li>
          <li><b>Frekans kaydırma (modülasyon):</b> \\( e^{j\\omega_0 t}x(t)\\leftrightarrow X(j(\\omega-\\omega_0)) \\). Dolayısıyla
          \\( x(t)\\cos\\omega_0 t\\leftrightarrow\\tfrac12[X(j(\\omega-\\omega_0))+X(j(\\omega+\\omega_0))] \\) — AM radyonun tamamı bu satırdır.</li>
          <li><b>Ölçekleme:</b> \\( x(at)\\leftrightarrow\\frac{1}{|a|}X(j\\omega/a) \\). Zamanda sıkıştır → frekansta genişler.
          Kaseti hızlı oynatınca sesin tizleşmesi.</li>
          <li><b>Türev:</b> \\( dx/dt\\leftrightarrow j\\omega X \\) — türev yüksek frekansları büyütür (gürültüyü de).
          İntegral: \\( \\int_{-\\infty}^t x\\leftrightarrow\\frac{X}{j\\omega}+\\pi X(0)\\delta(\\omega) \\).</li>
          <li><b>Konvolüsyon:</b> \\( x*h\\leftrightarrow XH \\). Tersi: \\( x\\cdot w\\leftrightarrow\\frac{1}{2\\pi}X*W \\) —
          sinyali pencereyle kesmek spektrumu sinc ile bulanıklaştırır (spektral sızıntı).</li>
          <li><b>Dualite:</b> \\( x(t)\\leftrightarrow X(j\\omega) \\) ise \\( X(jt)\\leftrightarrow 2\\pi x(-\\omega) \\). rect↔sinc ve
          sinc↔rect aynı gerçeğin iki yüzüdür.</li>
          <li><b>Parseval:</b> \\( \\int|x|^2dt=\\frac{1}{2\\pi}\\int|X|^2d\\omega \\). \\( |X|^2 \\) enerji spektral yoğunluğudur;
          "sinyal enerjisinin yüzde kaçı \\( |\\omega|&lt;W \\) bandında" soruları buradan.</li>
        </ul>
        <p><b>Çözüm şablonu:</b> verilen sinyali (kaydırılmış/ölçeklenmiş/modüle edilmiş) bir temel çift olarak yaz → özellikleri
        sırayla uygula. Örn. \\( e^{-2(t-1)}u(t-1)\\cos 5t \\): temel çift \\( 1/(2+j\\omega) \\) → kaydırma \\( e^{-j\\omega} \\) →
        modülasyon ile iki kopya.</p>`
    },
    {
      baslik: "9. Frekans Yanıtı, Bode Çizimi ve Sistem Bağlantıları",
      icerik: `
        <p>LTI sistemin frekans yanıtı dürtü yanıtının Fourier dönüşümüdür ve giriş-çıkış ilişkisi çarpmaya iner:</p>
        \\[ Y(j\\omega)=H(j\\omega)X(j\\omega), \\qquad |Y|=|H||X|, \\quad \\angle Y=\\angle H+\\angle X \\]
        <p>Diferansiyel denklemle verilen sistemde \\( H \\) doğrudan okunur: \\( \\sum a_k y^{(k)}=\\sum b_k x^{(k)} \\) →
        \\( H(j\\omega)=\\dfrac{\\sum b_k(j\\omega)^k}{\\sum a_k(j\\omega)^k} \\). Örn. RC alçak geçiren: \\( H=\\dfrac{1}{1+j\\omega RC} \\),
        kesim \\( \\omega_c=1/RC \\), orada \\( |H|=1/\\sqrt2 \\) (−3 dB) ve faz \\( -45° \\).</p>
        <p><b>Bode çizimi</b> — \\( 20\\log_{10}|H| \\) (dB) ve \\( \\angle H \\), log-frekans ekseninde. Rasyonel \\( H \\)'yi
        \\( K\\prod(1+j\\omega/\\omega_z)/\\prod(1+j\\omega/\\omega_p) \\) biçimine getir; çarpım dB'de toplam olur:</p>
        <ul>
          <li>Her gerçel kutup \\( \\omega_p \\): kesimden sonra eğim −20 dB/dekat, faz \\( 0\\to-90° \\) (kesimde −45°).</li>
          <li>Her sıfır: +20 dB/dekat, faz \\( 0\\to+90° \\). Orijindeki kutup/sıfır: her yerde ∓20 dB/dekat, faz sabit ∓90°.</li>
          <li>Sabit K: \\( 20\\log K \\) yatay çizgi. Kırılma noktasında gerçek eğri asimptottan 3 dB sapar.</li>
        </ul>
        <p><b>Sistem bağlantıları</b> (blok diyagram): seri \\( H_1H_2 \\), paralel \\( H_1+H_2 \\), <b>negatif geri besleme</b>
        \\( \\dfrac{H_1}{1+H_1H_2} \\). Geri besleme kutupları taşıyabilir — kararsız bir sistem kararlı hale getirilebilir (ya da tersi).</p>
        <p><b>Filtreler:</b> ideal LPF \\( |\\omega|&lt;\\omega_c \\)'de 1, dışında 0; dürtü yanıtı \\( \\frac{\\omega_c}{\\pi}\\text{sinc} \\) iki
        yana sonsuz uzanır → nedensel değil, gerçeklenemez. Pratik filtreler (Butterworth: en düz geçirme bandı; Chebyshev: daha
        dik geçiş, dalgalı band) sonlu dereceli rasyonel yaklaşımlardır. Yüksek geçiren, bant geçiren, bant söndüren (çentik) aynı
        yolla; bant geçiren için merkez \\( \\omega_0 \\) ve kalite \\( Q=\\omega_0/\\Delta\\omega \\) tanımlanır.</p>`
    },
    {
      baslik: "10. Ayrık Zaman Fourier Dönüşümü (DTFT)",
      icerik: `
        <p>Ayrık sinyalin spektrumu, sürekli olanla aynı fikirle ama toplamla tanımlanır ve <b>her zaman \\( 2\\pi \\) periyotludur</b>,
        çünkü \\( e^{-j(\\omega+2\\pi)n}=e^{-j\\omega n} \\):</p>
        \\[ X(e^{j\\omega})=\\sum_{n=-\\infty}^{\\infty}x[n]e^{-j\\omega n}, \\qquad x[n]=\\frac{1}{2\\pi}\\int_{2\\pi}X(e^{j\\omega})e^{j\\omega n}\\,d\\omega \\]
        <p>Bu yüzden yalnızca \\( [-\\pi,\\pi] \\) çizilir; \\( \\omega=0 \\) DC, \\( \\omega=\\pi \\) en yüksek frekanstır (\\( (-1)^n \\) dizisi).
        Gösterim \\( X(e^{j\\omega}) \\) "z-dönüşümünün birim çember üzerindeki değeri" olduğunu hatırlatır.</p>
        <p><b>Temel çiftler:</b></p>
        <ul>
          <li>\\( \\delta[n]\\leftrightarrow1 \\); \\( \\delta[n-n_0]\\leftrightarrow e^{-j\\omega n_0} \\).</li>
          <li>\\( a^nu[n]\\leftrightarrow\\dfrac{1}{1-ae^{-j\\omega}} \\), \\( |a|&lt;1 \\). \\( a \\) 1'e yaklaştıkça alçak geçiren karakter keskinleşir;
          \\( a&lt;0 \\) ise yüksek geçiren olur (tepe \\( \\omega=\\pi \\)'de).</li>
          <li>Dikdörtgen pencere (\\( |n|\\le N_1 \\)) \\( \\leftrightarrow\\dfrac{\\sin(\\omega(N_1+\\tfrac12))}{\\sin(\\omega/2)} \\) — "Dirichlet çekirdeği";
          sinc'in periyodik kuzeni.</li>
          <li>İdeal LPF \\( H=1,\\,|\\omega|&lt;\\omega_c \\) \\( \\leftrightarrow h[n]=\\dfrac{\\sin\\omega_c n}{\\pi n} \\) — yine iki yöne sonsuz, gerçeklenemez;
          FIR tasarımı bunu pencereyle keser.</li>
        </ul>
        <p><b>Özellikler</b> CT ile paraleldir: kaydırma \\( e^{-j\\omega n_0} \\), modülasyon, konvolüsyon↔çarpma, Parseval
        \\( \\sum|x[n]|^2=\\frac{1}{2\\pi}\\int_{2\\pi}|X|^2 \\). İki fark: <b>zaman ölçekleme yoktur</b> (sıfır ekleme/atma vardır) ve türev yerine
        <b>fark</b> gelir: \\( x[n]-x[n-1]\\leftrightarrow(1-e^{-j\\omega})X \\).</p>
        <p><b>Fark denklemi → frekans yanıtı:</b> \\( \\sum a_k y[n-k]=\\sum b_k x[n-k] \\) ⟹
        \\( H(e^{j\\omega})=\\dfrac{\\sum b_k e^{-j\\omega k}}{\\sum a_k e^{-j\\omega k}} \\). Örn. ortalama alıcı \\( y=\\tfrac12(x[n]+x[n-1]) \\):
        \\( |H|=|\\cos(\\omega/2)| \\) — basit bir alçak geçiren.</p>`
    },
    {
      baslik: "11. Ayrık Fourier Serisi (DTFS) ve DFT",
      icerik: `
        <p>Periyodu N olan ayrık sinyalde yalnızca <b>N farklı harmonik</b> vardır (\\( e^{j(2\\pi/N)(k+N)n}=e^{j(2\\pi/N)kn} \\)),
        bu yüzden ayrık Fourier serisi sonlu bir toplamdır:</p>
        \\[ x[n]=\\sum_{k=0}^{N-1}a_k e^{j(2\\pi/N)kn}, \\qquad a_k=\\frac{1}{N}\\sum_{n=0}^{N-1}x[n]e^{-j(2\\pi/N)kn} \\]
        <p>CT serisindeki yakınsama sorunları burada yoktur: N bilinmeyenli N denklem. Katsayılar da N periyotludur.
        Parseval: \\( \\frac1N\\sum_{n}|x[n]|^2=\\sum_k|a_k|^2 \\).</p>
        <p><b>DFT</b> aynı formülün sonlu uzunluklu (N örnek) bir diziye uygulanmış ve \\( 1/N \\) çarpanı sonda toplanmış halidir:</p>
        \\[ X[k]=\\sum_{n=0}^{N-1}x[n]e^{-j2\\pi kn/N}, \\quad k=0,\\dots,N-1; \\qquad x[n]=\\frac1N\\sum_k X[k]e^{j2\\pi kn/N} \\]
        <p>Yorumu: \\( X[k] \\), DTFT'nin \\( \\omega_k=2\\pi k/N \\) noktalarındaki <b>örnekleridir</b>. Bilgisayar sürekli \\( \\omega \\)
        hesaplayamaz; DFT frekans eksenini N noktada örnekler. \\( k \\) indeksi gerçek frekansa \\( f_k=k\\,f_s/N \\) ile bağlanır;
        \\( k&gt;N/2 \\) negatif frekanslara karşılık gelir.</p>
        <ul>
          <li><b>Sıfır ekleme (zero-padding):</b> diziye sıfır ekleyip N'yi büyütmek DTFT'yi daha sık örnekler (görüntü iyileşir)
          ama <b>çözünürlük artmaz</b> — çözünürlük kayıt süresiyle (\\( f_s/N_{gerçek} \\)) belirlenir.</li>
          <li><b>Dairesel konvolüsyon:</b> DFT çarpımı doğrusal değil dairesel konvolüsyona karşılık gelir; doğrusal sonuç için
          \\( N\\ge N_x+N_h-1 \\) seçilmelidir (FFT ile hızlı filtreleme böyle yapılır).</li>
          <li><b>Sızıntı:</b> kaydı dikdörtgen pencereyle kesmek spektrumu Dirichlet çekirdeğiyle bulanıklaştırır; Hann/Hamming
          pencereleri yan lobları düşürür, ana lobu genişletir.</li>
          <li><b>FFT:</b> DFT'yi \\( N^2 \\) yerine \\( N\\log_2N \\) işlemle hesaplayan algoritma; matematiksel olarak DFT'nin kendisidir.</li>
        </ul>
        <p><b>Neden önemli:</b> Osiloskoptaki "FFT" düğmesinden görüntü sıkıştırmaya kadar her sayısal spektrum bu tanımdır;
        "1024 noktalı FFT, 8 kHz örnekleme → bin aralığı 7.8 Hz" gibi soruların kaynağıdır.</p>`
    },
    {
      baslik: "12. Örnekleme (Sampling) Teoremi ve Örtüşme",
      icerik: `
        <p>Sürekli sinyal, periyodu \\( T_s \\) olan dürtü katarıyla çarpılarak örneklenir: \\( x_p(t)=x(t)\\sum_n\\delta(t-nT_s) \\).
        Zamanda çarpma frekansta konvolüsyondur ve dürtü katarının dönüşümü de dürtü katarı olduğu için spektrum
        <b>\\( \\omega_s=2\\pi/T_s \\) aralıklarla kopyalanır</b>:</p>
        \\[ X_p(j\\omega)=\\frac{1}{T_s}\\sum_{k=-\\infty}^{\\infty}X\\big(j(\\omega-k\\omega_s)\\big) \\]
        <p><b>Nyquist–Shannon:</b> sinyal \\( \\omega_m \\) ile bant sınırlıysa ve \\( \\omega_s&gt;2\\omega_m \\) ise kopyalar çakışmaz;
        orijinal, kazancı \\( T_s \\) ve kesimi \\( \\omega_s/2 \\) olan ideal LPF ile <b>kayıpsız</b> geri çatılır. Zaman bölgesinde bu,
        örneklerin sinc'lerle interpolasyonudur: \\( x(t)=\\sum_n x[n]\\,\\text{sinc}\\big(\\tfrac{t-nT_s}{T_s}\\big) \\).</p>
        <p><b>Örtüşme (aliasing):</b> \\( \\omega_s&lt;2\\omega_m \\) ise komşu kopyalar üst üste biner; \\( f&gt;f_s/2 \\) bileşeni
        \\( |f-kf_s| \\) frekansında sahte bir bileşen olarak görünür. Örnek: 1 kHz ile örneklenen 900 Hz ton, 100 Hz olarak
        duyulur; filmlerde tekerleğin geri dönmesi aynı olgudur. Kural: <b>önce anti-aliasing filtresi, sonra örnekle.</b>
        Filtre ideal olamadığı için pratikte \\( f_s \\) Nyquist'in 2–5 katı seçilir (ses: 20 kHz bant → 44.1 kHz).</p>
        <ul>
          <li><b>Sıfırıncı derece tutucu (ZOH):</b> DAC örneği bir sonraki örneğe kadar sabit tutar; frekansta sinc biçimli
          bir bozulma ekler (\\( \\omega_s/2 \\)'de ~−4 dB) ve kopyaları tam süzmez; ardından düzleştirme filtresi gerekir.</li>
          <li><b>Bant geçiren örnekleme:</b> dar bantlı yüksek frekanslı sinyal, \\( 2f_{max} \\)'tan çok düşük \\( f_s \\) ile de
          örtüşmesiz örneklenebilir (radyo alıcılarında).</li>
          <li><b>Ayrık zamanda:</b> \\( x[n] \\)'i M ile seyreltmek (decimation) DTFT'yi M kat genişletir; öncesinde \\( \\pi/M \\)
          kesimli LPF şarttır. Sıfır ekleyerek M kat artırma (interpolation) tersi.</li>
        </ul>
        <p><b>Frekans dönüşümü:</b> \\( \\omega_{ayrık}=\\Omega\\,T_s \\). Bu köprü CT tasarımlarını DT'ye taşımanın anahtarıdır:
        \\( f_s=8 \\) kHz'de 1 kHz ton, \\( \\omega=2\\pi\\cdot1000/8000=\\pi/4 \\) rad/örnek.</p>`
    },
    {
      baslik: "13. Laplace Dönüşümü ve Diferansiyel Denklem Çözümü",
      icerik: `
        <p>Fourier, \\( e^{j\\omega t} \\) bileşenlerini kullanır ve \\( e^{2t} \\) gibi büyüyen sinyallerde çöker. Laplace, üstel zarfı
        \\( s=\\sigma+j\\omega \\) ile içeri alır: \\( X(s)=\\mathcal F\\{x(t)e^{-\\sigma t}\\} \\). Böylece hem kararsız sistemler
        incelenebilir hem de diferansiyel denklemler cebire iner.</p>
        \\[ X(s)=\\int_{-\\infty}^{\\infty}x(t)e^{-st}\\,dt \\quad(\\text{iki taraflı}), \\qquad X(s)=\\int_{0^-}^{\\infty}x(t)e^{-st}\\,dt \\quad(\\text{tek taraflı}) \\]
        <p><b>Temel çiftler</b> (hepsi nedensel, ROC \\( \\text{Re}\\{s\\}&gt;-a \\) vb.):
        \\( \\delta\\leftrightarrow1 \\), \\( u(t)\\leftrightarrow\\frac1s \\), \\( e^{-at}u\\leftrightarrow\\frac{1}{s+a} \\),
        \\( t^n e^{-at}u\\leftrightarrow\\frac{n!}{(s+a)^{n+1}} \\), \\( \\cos\\omega_0t\\,u\\leftrightarrow\\frac{s}{s^2+\\omega_0^2} \\),
        \\( \\sin\\omega_0 t\\,u\\leftrightarrow\\frac{\\omega_0}{s^2+\\omega_0^2} \\), \\( e^{-at}\\cos\\omega_0 t\\,u\\leftrightarrow\\frac{s+a}{(s+a)^2+\\omega_0^2} \\).</p>
        <p><b>Özellikler:</b> kaydırma \\( x(t-t_0)\\leftrightarrow e^{-st_0}X \\); \\( e^{-at}x\\leftrightarrow X(s+a) \\);
        konvolüsyon \\( \\leftrightarrow XH \\); <b>türev (tek taraflı):</b> \\( x'\\leftrightarrow sX(s)-x(0^-) \\),
        \\( x''\\leftrightarrow s^2X-sx(0^-)-x'(0^-) \\); integral \\( \\leftrightarrow X/s \\). Başlangıç/son değer teoremleri:
        \\( x(0^+)=\\lim_{s\\to\\infty}sX(s) \\), \\( x(\\infty)=\\lim_{s\\to0}sX(s) \\) (ikincisi yalnızca kutuplar sol yarı düzlemdeyse).</p>
        <p><b>Diferansiyel denklem çözüm şablonu</b> — RC devresi \\( y'+2y=x \\), \\( y(0^-)=1 \\), \\( x=u(t) \\):</p>
        <ol>
          <li>Dönüşüm: \\( sY-1+2Y=\\frac1s \\) ⟹ \\( Y=\\dfrac{1}{s+2}+\\dfrac{1}{s(s+2)} \\).</li>
          <li>Kısmi kesir: \\( \\frac{1}{s(s+2)}=\\frac{1/2}{s}-\\frac{1/2}{s+2} \\).</li>
          <li>Ters dönüşüm: \\( y(t)=\\big(\\tfrac12+\\tfrac12e^{-2t}\\big)u(t) \\). İlk terim <b>sıfır durum</b> (girişten), ikincinin
          bir kısmı <b>sıfır giriş</b> yanıtı (başlangıç koşulundan) — Laplace ikisini tek hamlede verir.</li>
        </ol>
        <p><b>Sistem fonksiyonu</b> \\( H(s)=Y(s)/X(s) \\) (başlangıç koşulları sıfırken): diferansiyel denklemin katsayılarından
        doğrudan yazılır ve \\( s=j\\omega \\) konunca frekans yanıtına düşer — tabii ROC \\( j\\omega \\) eksenini içeriyorsa.</p>`
    },
    {
      baslik: "14. Laplace: ROC, Kutup-Sıfır ve Kararlılık",
      icerik: `
        <p>Aynı cebirsel ifade birden çok sinyale ait olabilir: \\( \\frac{1}{s+a} \\) hem \\( e^{-at}u(t) \\) (ROC \\( \\text{Re}\\,s&gt;-a \\))
        hem \\( -e^{-at}u(-t) \\) (ROC \\( \\text{Re}\\,s&lt;-a \\)) için yazılır. Bu yüzden <b>Laplace dönüşümü = ifade + ROC</b>;
        ROC verilmeden ters dönüşüm tek değildir.</p>
        <ul>
          <li>ROC, \\( s \\)-düzleminde sanal eksene paralel şeritlerden oluşur ve içinde kutup bulunmaz.</li>
          <li>Sağ taraflı (nedensel) sinyal → ROC en sağdaki kutbun <b>sağı</b>; sol taraflı → en soldaki kutbun solu;
          iki taraflı → iki kutup arasında şerit; sonlu süreli → tüm düzlem.</li>
          <li>\\( X(s) \\) rasyonelse ROC kutuplarla sınırlanır; sıfırlar ROC'yi etkilemez.</li>
        </ul>
        <p><b>Kutup-sıfır diyagramı</b> sistemin röntgenidir. Kutup \\( p=-\\alpha\\pm j\\beta \\) → zaman bölgesinde
        \\( e^{-\\alpha t}\\cos(\\beta t+\\phi) \\): gerçel kısım sönüm hızını, sanal kısım salınım frekansını verir. Sanal eksene yakın
        kutup = uzun süren, keskin rezonans; orijine yakın = yavaş mod. Sıfırlar hangi frekansların bastırıldığını gösterir
        (çentik filtre: \\( j\\omega \\) ekseni üstünde sıfır).</p>
        <p><b>Kararlılık ve nedensellik birlikte:</b></p>
        <ul>
          <li>Kararlı ⟺ ROC \\( j\\omega \\) eksenini içerir (o zaman Fourier dönüşümü vardır ve \\( \\int|h|&lt;\\infty \\)).</li>
          <li>Nedensel ⟺ ROC bir sağ yarı düzlem.</li>
          <li>İkisi birden ⟺ <b>tüm kutuplar sol yarı düzlemde</b> (\\( \\text{Re}\\,p_i&lt;0 \\)). Bu, kontrol ve devre derslerinin
          temel kararlılık ölçütüdür.</li>
        </ul>
        <p><b>Ters dönüşüm — kısmi kesirler:</b> \\( \\frac{N(s)}{D(s)} \\), payın derecesi küçükse doğrudan; basit kutupta
        \\( A_i=(s-p_i)X(s)|_{s=p_i} \\) (örtme yöntemi); katlı kutupta \\( \\frac{A}{(s+a)^2} \\) terimleri \\( te^{-at} \\) verir;
        kompleks çift için \\( \\frac{Bs+C}{(s+\\alpha)^2+\\beta^2} \\) tam kareye tamamlanıp cos/sin çiftine ayrılır. Pay derecesi ≥
        payda derecesi ise önce polinom bölmesi (dürtü ve türevleri çıkar).</p>
        <p><b>Sık hata:</b> nedensel olduğu söylenmemiş bir \\( H(s) \\) için "kararlı" demek. \\( \\frac{1}{s-1} \\) nedensel alınırsa
        kararsız, anti-nedensel alınırsa kararlıdır.</p>`
    },
    {
      baslik: "15. z-Dönüşümü ve Fark Denklemi Çözümü",
      icerik: `
        <p>Ayrık zamanın Laplace'ı. \\( z=re^{j\\omega} \\) yazılırsa \\( X(z)=\\sum x[n]r^{-n}e^{-j\\omega n} \\): geometrik
        zarf \\( r^{-n} \\) ile ağırlıklanmış DTFT. \\( r=1 \\) (birim çember) tam olarak DTFT'dir — bu yüzden birim çember
        z-düzleminin "\\( j\\omega \\) ekseni"dir.</p>
        \\[ X(z)=\\sum_{n=-\\infty}^{\\infty}x[n]z^{-n} \\]
        <p><b>Temel çiftler</b> (nedensel):
        \\( \\delta[n]\\leftrightarrow1 \\), \\( u[n]\\leftrightarrow\\frac{1}{1-z^{-1}}=\\frac{z}{z-1} \\),
        \\( a^nu[n]\\leftrightarrow\\frac{1}{1-az^{-1}} \\) (ROC \\( |z|&gt;|a| \\)),
        \\( na^nu[n]\\leftrightarrow\\frac{az^{-1}}{(1-az^{-1})^2} \\),
        \\( r^n\\cos(\\omega_0 n)u[n]\\leftrightarrow\\frac{1-r\\cos\\omega_0\\,z^{-1}}{1-2r\\cos\\omega_0\\,z^{-1}+r^2z^{-2}} \\).
        Sonlu dizi \\( \\{x_0,x_1,x_2\\} \\) → \\( x_0+x_1z^{-1}+x_2z^{-2} \\): z-dönüşümü sadece "dizinin polinom olarak yazılması"dır.</p>
        <p><b>Özellikler:</b> <b>kaydırma</b> \\( x[n-n_0]\\leftrightarrow z^{-n_0}X(z) \\) (\\( z^{-1} \\) = bir örnek gecikme — blok
        diyagramlardaki kutu); \\( a^nx[n]\\leftrightarrow X(z/a) \\); konvolüsyon ↔ çarpma; \\( nx[n]\\leftrightarrow -z\\,dX/dz \\);
        başlangıç değeri \\( x[0]=\\lim_{z\\to\\infty}X(z) \\). Tek taraflı kaydırma başlangıç koşullarını taşır:
        \\( x[n-1]\\leftrightarrow z^{-1}X(z)+x[-1] \\).</p>
        <p><b>Fark denklemi çözüm şablonu</b> — \\( y[n]-0.5y[n-1]=x[n] \\), \\( x=u[n] \\), \\( y[-1]=0 \\):</p>
        <ol>
          <li>\\( Y(1-0.5z^{-1})=\\frac{1}{1-z^{-1}} \\) ⟹ \\( Y=\\dfrac{1}{(1-z^{-1})(1-0.5z^{-1})} \\).</li>
          <li>Kısmi kesir (\\( z^{-1} \\) cinsinden): \\( \\dfrac{2}{1-z^{-1}}-\\dfrac{1}{1-0.5z^{-1}} \\).</li>
          <li>\\( y[n]=\\big(2-0.5^n\\big)u[n] \\): kalıcı değer 2 (= \\( H(1) \\)), geçici kısım \\( 0.5^n \\) ile söner.</li>
        </ol>
        <p><b>Sistem fonksiyonu</b> \\( H(z)=\\dfrac{\\sum b_kz^{-k}}{\\sum a_kz^{-k}} \\). Paydası 1 ise (geri besleme yok) <b>FIR</b>:
        \\( h[n] \\) sonlu, kutuplar yalnızca orijinde, her zaman kararlı. Geri besleme varsa <b>IIR</b>: sonsuz \\( h[n] \\), az
        katsayıyla keskin filtre ama kararlılık kontrolü gerekir.</p>`
    },
    {
      baslik: "16. z: ROC, Kutup-Sıfır ve Ayrık Sistem Kararlılığı",
      icerik: `
        <p>Laplace'taki her kural z için "çember" diliyle tekrar eder. ROC, orijin merkezli halkalardan oluşur ve içinde kutup yoktur.</p>
        <ul>
          <li>Sağ taraflı (nedensel) dizi → ROC en dıştaki kutbun <b>dışı</b>: \\( |z|&gt;|p|_{\\max} \\).
          Sol taraflı → en içteki kutbun içi. İki taraflı → halka. Sonlu dizi → \\( z=0 \\) ve/veya \\( \\infty \\) hariç her yer.</li>
          <li>\\( a^nu[n] \\) ve \\( -a^nu[-n-1] \\) aynı \\( \\frac{1}{1-az^{-1}} \\) ifadesini paylaşır; ayıran ROC'dir.</li>
        </ul>
        <p><b>Kararlılık:</b> \\( \\sum|h[n]|&lt;\\infty \\) ⟺ ROC <b>birim çemberi</b> içerir ⟺ DTFT vardır.
        Nedensel + kararlı ⟺ <b>tüm kutuplar birim çemberin içinde</b> (\\( |p_i|&lt;1 \\)). Karşılaştır:
        Laplace'ta sol yarı düzlem ↔ z'de birim disk; \\( j\\omega \\) ekseni ↔ birim çember; \\( s=0 \\) (DC) ↔ \\( z=1 \\);
        \\( \\omega=\\pi \\) (Nyquist) ↔ \\( z=-1 \\). \\( z=e^{sT_s} \\) eşlemesi bu haritanın kaynağıdır.</p>
        <p><b>Kutup-sıfır okuma:</b> kutup \\( re^{j\\theta} \\) → \\( r^n\\cos(\\theta n) \\) bileşeni. \\( r \\) 1'e yaklaştıkça sönüm
        yavaşlar ve \\( \\theta \\) frekansında keskin rezonans; \\( r=1 \\)'de sürekli salınım (marjinal), \\( r&gt;1 \\) patlama.
        Birim çember üzerindeki sıfır o frekansı tamamen söndürür: \\( z=1 \\)'de sıfır DC'yi keser, \\( z=-1 \\)'de sıfır en yüksek
        frekansı keser. Frekans yanıtı geometrik olarak: \\( |H(e^{j\\omega})|=\\frac{\\prod|\\text{sıfırlara uzaklık}|}{\\prod|\\text{kutuplara uzaklık}|} \\).</p>
        <p><b>Ters dönüşüm:</b> (1) kısmi kesir — \\( z^{-1} \\) cinsinden yazmak nedensel çiftlerle doğrudan eşleşir;
        (2) uzun bölme — ilk birkaç \\( h[n] \\) değeri için pratik; (3) sonlu ifade → doğrudan katsayı okuma.
        Katlı kutup \\( \\frac{1}{(1-az^{-1})^2}\\leftrightarrow(n+1)a^nu[n] \\).</p>
        <p><b>Neden önemli:</b> Fark denklemi ↔ \\( H(z) \\) ↔ kutup-sıfır üçlüsü, sayısal filtre tasarımının (IIR/FIR), sayısal
        kontrolün ve ses/görüntü işlemenin ortak dilidir. "Bu filtre kararlı mı?" sorusu kutupları birim çembere göre
        konumlandırmakla biter.</p>`
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
    { ad: "DT Kararlılık (z)", formul: `\\( |p_i|<1 \\)`, aciklama: "Nedensel+kararlı: kutuplar birim çember içi." },
    { ad: "Kare Dalga FS", formul: `\\( a_k=\\dfrac{\\sin(k\\omega_0T_1)}{k\\pi},\\; a_0=\\dfrac{2T_1}{T} \\)`, aciklama: "Genlik 1, yarı genişlik T₁; katsayılar 1/k ile söner." },
    { ad: "Üstel ↔ FT", formul: `\\( e^{-at}u(t)\\leftrightarrow\\dfrac{1}{a+j\\omega} \\)`, aciklama: "a>0; birinci dereceden LPF biçimi." },
    { ad: "Rect ↔ Sinc", formul: `\\( \\text{rect}\\!\\big(\\tfrac{t}{T}\\big)\\leftrightarrow\\dfrac{2\\sin(\\omega T/2)}{\\omega} \\)`, aciklama: "Dar darbe → geniş spektrum; dualite ile ters yönü de geçerli." },
    { ad: "Kosinüs ↔ FT", formul: `\\( \\cos\\omega_0 t\\leftrightarrow\\pi[\\delta(\\omega-\\omega_0)+\\delta(\\omega+\\omega_0)] \\)`, aciklama: "Modülasyon özelliği: x·cos → spektrum iki kopyaya ayrılır." },
    { ad: "Ölçekleme (FT)", formul: `\\( x(at)\\leftrightarrow\\dfrac{1}{|a|}X\\!\\big(\\tfrac{j\\omega}{a}\\big) \\)`, aciklama: "Zamanda sıkıştır → frekansta genişler." },
    { ad: "Türev (FT)", formul: `\\( \\dfrac{dx}{dt}\\leftrightarrow j\\omega X(j\\omega) \\)`, aciklama: "Türev yüksek frekansları büyütür." },
    { ad: "Örneklenmiş Spektrum", formul: `\\( X_p(j\\omega)=\\dfrac{1}{T_s}\\sum_k X\\big(j(\\omega-k\\omega_s)\\big) \\)`, aciklama: "Spektrum ω_s aralıklarla kopyalanır." },
    { ad: "DFT", formul: `\\( X[k]=\\sum_{n=0}^{N-1}x[n]e^{-j2\\pi kn/N} \\)`, aciklama: "DTFT'nin N noktada örneği; bin aralığı f_s/N." },
    { ad: "Laplace Çiftleri", formul: `\\( u\\leftrightarrow\\tfrac1s,\\; e^{-at}u\\leftrightarrow\\tfrac{1}{s+a},\\; \\cos\\omega_0t\\,u\\leftrightarrow\\tfrac{s}{s^2+\\omega_0^2} \\)`, aciklama: "Nedensel temel çiftler." },
    { ad: "Laplace 2. Türev", formul: `\\( \\mathcal L\\{x''\\}=s^2X(s)-sx(0^-)-x'(0^-) \\)`, aciklama: "Başlangıç koşulları dönüşümün içine girer." },
    { ad: "Son Değer Teoremi", formul: `\\( x(\\infty)=\\lim_{s\\to0}sX(s) \\)`, aciklama: "Yalnızca kutuplar sol yarı düzlemdeyse geçerli." },
    { ad: "z Kaydırma (Tek Taraflı)", formul: `\\( x[n-1]\\leftrightarrow z^{-1}X(z)+x[-1] \\)`, aciklama: "Fark denkleminde başlangıç koşulu buradan gelir." },
    { ad: "Geometrik Frekans Yanıtı", formul: `\\( |H(e^{j\\omega})|=\\dfrac{\\prod|e^{j\\omega}-z_i|}{\\prod|e^{j\\omega}-p_i|} \\)`, aciklama: "Kutup yakın → tepe, sıfır yakın → çukur." },
    { ad: "Negatif Geri Besleme", formul: `\\( H=\\dfrac{H_1}{1+H_1H_2} \\)`, aciklama: "Blok diyagram indirgemesi." }
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
      soru: `<p>\\( x(t) = e^{-2t}u(t) \\) sinyalinin Fourier dönüşümü \\( X(j\\omega) \\) nedir? Genlik spektrumunun \\( \\omega=2 \\)'deki değeri ile \\( \\omega=0 \\)'daki değerini karşılaştırın.</p>`,
      cozum: `
        <p>Tanımdan:</p>
        \\[ X(j\\omega)=\\int_{0}^{\\infty} e^{-2t} e^{-j\\omega t} dt =\\int_{0}^{\\infty} e^{-(2+j\\omega)t} dt = \\frac{1}{2+j\\omega} \\]
        <p>\\( |X(j\\omega)|=\\dfrac{1}{\\sqrt{4+\\omega^2}} \\). \\( \\omega=0 \\)'da \\( 1/2 \\), \\( \\omega=2 \\)'de \\( 1/\\sqrt8=\\dfrac{1}{2\\sqrt2} \\) —
        yani \\( -3 \\) dB. Kesim frekansı \\( \\omega_c=a=2 \\) rad/s'dir: <b>birinci dereceden alçak geçiren</b> karakter.</p>`
    },
    {
      tip: "vize",
      soru: `<p>\\( y(t)=t\\,x(t) \\) sistemi doğrusal mı, zamanla değişmez mi, nedensel mi, kararlı mı?</p>`,
      cozum: `
        <p><b>Doğrusal:</b> \\( t(ax_1+bx_2)=a\\,tx_1+b\\,tx_2 \\) → <b>evet</b>.</p>
        <p><b>Zamanla değişmez:</b> kaydırılmış girişe yanıt \\( t\\,x(t-t_0) \\); kaydırılmış çıkış \\( (t-t_0)x(t-t_0) \\). Eşit değil → <b>hayır</b>.</p>
        <p><b>Nedensel:</b> çıkış yalnız anlık girişe bağlı → <b>evet</b> (belleksiz).</p>
        <p><b>Kararlı:</b> \\( x=u(t) \\) sınırlı ama \\( y=t\\,u(t) \\) sınırsız → <b>hayır</b>.</p>`
    },
    {
      tip: "vize",
      soru: `<p>\\( x[n]=\\{1,2,3\\} \\) (n=0,1,2) ile \\( h[n]=\\{1,1\\} \\) (n=0,1) konvolüsyonunu hesaplayın. Sonucun uzunluğunu önceden nasıl bilirdiniz?</p>`,
      cozum: `
        <p>Uzunluk \\( N_x+N_h-1=3+2-1=4 \\) → n=0..3.</p>
        \\[ y[0]=1,\\quad y[1]=1+2=3,\\quad y[2]=2+3=5,\\quad y[3]=3 \\]
        <p><b>Sonuç:</b> \\( y[n]=\\{1,3,5,3\\} \\). Kontrol: \\( \\sum y=12=(\\sum x)(\\sum h)=6\\cdot2 \\). ✓</p>`
    },
    {
      tip: "vize",
      soru: `<p>\\( x(t)=\\cos(\\omega_0 t) \\) sinyalini \\( \\omega_0 \\) temel frekanslı Fourier serisine açın ve ortalama gücünü Parseval ile doğrulayın. Ardından \\( x[n]=\\cos(0.3\\pi n) \\) dizisinin periyodunu bulun; \\( \\cos(0.3n) \\) periyodik midir?</p>`,
      cozum: `
        <p>Euler: \\( \\cos\\omega_0t=\\tfrac12e^{j\\omega_0t}+\\tfrac12e^{-j\\omega_0t} \\) ⟹ \\( a_1=a_{-1}=\\tfrac12 \\), diğerleri 0.</p>
        <p>Parseval: \\( P=\\sum|a_k|^2=\\tfrac14+\\tfrac14=\\tfrac12 \\). Doğrudan: \\( \\frac1T\\int_T\\cos^2=\\tfrac12 \\). ✓</p>
        <p>Ayrık: \\( \\omega_0/2\\pi=0.3\\pi/2\\pi=3/20 \\) rasyonel → periyodik, \\( N=20 \\) (\\( 0.3\\pi\\cdot20=6\\pi \\), tam sayı tur).
        \\( \\cos(0.3n) \\): \\( 0.3/2\\pi \\) irrasyonel → <b>periyodik değil</b>.</p>`
    },
    {
      tip: "vize",
      soru: `<p>Fourier dönüşümü özelliklerini kullanarak \\( x(t)=e^{-3(t-2)}u(t-2)\\cos(10t) \\) sinyalinin dönüşümünü yazın.</p>`,
      cozum: `
        <p>Temel çift: \\( e^{-3t}u(t)\\leftrightarrow\\dfrac{1}{3+j\\omega} \\).</p>
        <p>Zaman kaydırma (2 sn): \\( e^{-3(t-2)}u(t-2)\\leftrightarrow\\dfrac{e^{-j2\\omega}}{3+j\\omega}=G(j\\omega) \\).</p>
        <p>Modülasyon (\\( \\cos10t \\)): spektrum \\( \\pm10 \\)'a ikiye bölünerek taşınır:</p>
        \\[ X(j\\omega)=\\tfrac12\\Big[G\\big(j(\\omega-10)\\big)+G\\big(j(\\omega+10)\\big)\\Big]
        =\\frac{e^{-j2(\\omega-10)}}{2\\,(3+j(\\omega-10))}+\\frac{e^{-j2(\\omega+10)}}{2\\,(3+j(\\omega+10))} \\]`
    },
    {
      tip: "vize",
      soru: `<p>\\( a^{n}u[n] \\) dizisinin z-dönüşümünü ve yakınsama bölgesini (ROC) bulun. \\( a=0.5 \\) ve \\( a=2 \\) için sistem (\\( h[n]=a^nu[n] \\)) kararlı mıdır?</p>`,
      cozum: `
        \\[ X(z)=\\sum_{n=0}^{\\infty}a^{n}z^{-n}=\\sum_{n=0}^{\\infty}(az^{-1})^{n}=\\frac{1}{1-az^{-1}}=\\frac{z}{z-a} \\]
        <p>Geometrik seri \\( |az^{-1}|&lt;1 \\) için yakınsar → <b>ROC: \\( |z|&gt;|a| \\)</b>.</p>
        <p>Kararlılık için ROC birim çemberi içermeli: \\( a=0.5 \\) → \\( |z|&gt;0.5 \\) çemberi içerir → <b>kararlı</b>.
        \\( a=2 \\) → \\( |z|&gt;2 \\) içermez → <b>kararsız</b> (\\( 2^n \\) büyür).</p>`
    },
    {
      tip: "vize",
      soru: `<p>\\( H(j\\omega)=\\dfrac{100}{(1+j\\omega/10)(1+j\\omega/1000)} \\) sistemi için Bode genlik asimptotlarını çizin: DC kazancı (dB), kırılma frekansları ve her bölgedeki eğim nedir? \\( \\omega=100 \\)'deki yaklaşık kazanç ve fazı bulun.</p>`,
      cozum: `
        <p>DC: \\( 20\\log100=40 \\) dB. Kutuplar \\( \\omega=10 \\) ve \\( 1000 \\) rad/s.</p>
        <ul>
        <li>\\( \\omega&lt;10 \\): 40 dB, eğim 0.</li>
        <li>\\( 10&lt;\\omega&lt;1000 \\): −20 dB/dekat → \\( \\omega=100 \\)'de \\( 40-20=20 \\) dB, \\( \\omega=1000 \\)'de 0 dB.</li>
        <li>\\( \\omega&gt;1000 \\): −40 dB/dekat.</li>
        </ul>
        <p>\\( \\omega=100 \\): tam değer \\( 100/(\\sqrt{101}\\sqrt{1.01})\\approx 9.9 \\) → 19.9 dB (asimptot 20 dB ile uyumlu).
        Faz: \\( -\\arctan(10)-\\arctan(0.1)=-84.3°-5.7°=\\mathbf{-90°} \\) — iki kutbun tam ortasında (geometrik) faz −90°'dir.</p>`
    },
    {
      tip: "final",
      soru: `<p>Dürtü yanıtı \\( h(t)=u(t)-u(t-2) \\) olan LTI sistem BIBO kararlı mıdır? Basamak yanıtını bulun.</p>`,
      cozum: `
        \\[ \\int_{-\\infty}^{\\infty}|h(t)|\\,dt=\\int_{0}^{2}1\\,dt = 2 &lt; \\infty \\]
        <p>İntegral sonlu → <b>kararlı</b>. Basamak yanıtı \\( s(t)=\\int_{-\\infty}^t h=\\begin{cases}0,&t&lt;0\\\\ t,&0\\le t&lt;2\\\\ 2,&t\\ge2\\end{cases} \\) —
        2 saniyelik "kayan pencere toplayıcısı"; basamak girişe rampa ile 2'ye oturur.</p>`
    },
    {
      tip: "final",
      soru: `<p>İki özdeş dikdörtgen darbenin konvolüsyonunu bulun: \\( x(t)=h(t)=u(t)-u(t-1) \\).</p>`,
      cozum: `
        <p>Çakışma aralıkları: \\( 0\\le t\\le1 \\)'de örtüşme uzunluğu \\( t \\); \\( 1\\le t\\le2 \\)'de \\( 2-t \\).</p>
        \\[ y(t)=\\begin{cases} t, & 0\\le t\\le1 \\\\ 2-t, & 1\\le t\\le2 \\\\ 0, & \\text{diğer} \\end{cases} \\]
        <p>Taban genişliği \\( 1+1=2 \\), tepe \\( t=1 \\)'de 1 (tam çakışma). Frekansta: \\( \\text{sinc}^2 \\) — üçgenin spektrumu
        dikdörtgeninkinin karesi, yan lobları çok daha düşük.</p>`
    },
    {
      tip: "final",
      soru: `<p>\\( H(s)=\\dfrac{s+1}{(s+2)(s+3)} \\) sisteminin dürtü yanıtı \\( h(t) \\) nedir? (nedensel) Sistem kararlı mı; \\( \\omega=1 \\) rad/s'deki kazancı nedir?</p>`,
      cozum: `
        <p>Kısmi kesirler: \\( \\dfrac{s+1}{(s+2)(s+3)}=\\dfrac{A}{s+2}+\\dfrac{B}{s+3} \\).</p>
        \\[ A=\\left.\\frac{s+1}{s+3}\\right|_{s=-2}=-1, \\qquad B=\\left.\\frac{s+1}{s+2}\\right|_{s=-3}=2 \\]
        \\[ h(t)=\\big(-e^{-2t}+2e^{-3t}\\big)u(t) \\]
        <p>Kutuplar \\( -2,-3 \\) sol yarı düzlemde → <b>kararlı</b>; dolayısıyla \\( H(j\\omega) \\) vardır:
        \\( |H(j1)|=\\dfrac{|1+j|}{|2+j||3+j|}=\\dfrac{\\sqrt2}{\\sqrt5\\sqrt{10}}=0.2 \\).</p>`
    },
    {
      tip: "final",
      soru: `<p>\\( x(t)=\\cos(2\\pi\\cdot1000\\,t)+\\cos(2\\pi\\cdot3000\\,t) \\) sinyali için minimum örnekleme frekansı nedir? \\( f_s=4000\\,\\text{Hz} \\) seçilirse ne olur? Bu durumu önlemek için ne yapılır?</p>`,
      cozum: `
        <p>En yüksek bileşen 3000 Hz → Nyquist: \\( f_s&gt;2(3000)=6000\\,\\text{Hz} \\).</p>
        <p>\\( f_s=4000 \\) yetersizdir: 3000 Hz bileşeni \\( |3000-4000|=1000\\,\\text{Hz} \\)'e <b>örtüşür (aliasing)</b> ve 1000 Hz bileşeniyle
        çakışır — geri çatımda iki ton ayrılamaz.</p>
        <p>Önlem: örneklemeden <b>önce</b> kesimi \\( f_s/2=2 \\) kHz olan anti-aliasing LPF (3 kHz'i atar) ya da \\( f_s \\)'yi 6 kHz'in üstüne çıkarmak.</p>`
    },
    {
      tip: "final",
      soru: `<p>\\( e^{j\\omega_0 t} \\) girişi, dürtü yanıtı \\( h(t) \\) olan LTI sisteme uygulanıyor. Çıkış nedir? Buradan \\( x(t)=\\cos(\\omega_0 t) \\) için çıkışı yazın.</p>`,
      cozum: `
        <p>Kompleks üstel, LTI sistemin özfonksiyonudur:</p>
        \\[ y(t)=H(j\\omega_0)\\,e^{j\\omega_0 t}, \\qquad H(j\\omega_0)=\\int_{-\\infty}^{\\infty}h(\\tau)e^{-j\\omega_0\\tau}d\\tau \\]
        <p>Gerçel \\( h \\) için \\( H(-j\\omega_0)=H^*(j\\omega_0) \\); \\( \\cos=\\tfrac12(e^{j\\omega_0t}+e^{-j\\omega_0t}) \\) ile:</p>
        \\[ y(t)=|H(j\\omega_0)|\\cos\\big(\\omega_0t+\\angle H(j\\omega_0)\\big) \\]
        <p>Frekans değişmez; genlik \\( |H| \\) ile ölçeklenir, faz \\( \\angle H \\) kadar kayar.</p>`
    },
    {
      tip: "final",
      soru: `<p>\\( X(s)=\\dfrac{1}{(s+1)(s+2)} \\) ifadesinin (a) nedensel, (b) anti-nedensel, (c) iki taraflı ters Laplace dönüşümlerini ROC'leriyle yazın. Hangisi kararlı bir sisteme ait olabilir?</p>`,
      cozum: `
        \\[ \\frac{1}{(s+1)(s+2)}=\\frac{1}{s+1}-\\frac{1}{s+2} \\]
        <p>(a) ROC \\( \\text{Re}\\,s&gt;-1 \\): \\( x=(e^{-t}-e^{-2t})u(t) \\).</p>
        <p>(b) ROC \\( \\text{Re}\\,s&lt;-2 \\): \\( x=(-e^{-t}+e^{-2t})u(-t) \\).</p>
        <p>(c) ROC \\( -2&lt;\\text{Re}\\,s&lt;-1 \\): \\( x=-e^{-t}u(-t)-e^{-2t}u(t) \\).</p>
        <p>Kararlılık için ROC \\( j\\omega \\) eksenini (\\( \\text{Re}\\,s=0 \\)) içermeli → yalnızca <b>(a)</b>.</p>`
    },
    {
      tip: "final",
      soru: `<p>\\( y'(t)+3y(t)=x(t) \\), \\( y(0^-)=2 \\), \\( x(t)=u(t) \\). Laplace ile \\( y(t) \\)'yi bulun; sıfır giriş ve sıfır durum yanıtlarını ayırın.</p>`,
      cozum: `
        <p>Tek taraflı Laplace: \\( sY-y(0^-)+3Y=\\frac1s \\) ⟹ \\( Y(s)=\\dfrac{2}{s+3}+\\dfrac{1}{s(s+3)} \\).</p>
        <p>\\( \\dfrac{1}{s(s+3)}=\\dfrac{1/3}{s}-\\dfrac{1/3}{s+3} \\).</p>
        \\[ y(t)=\\underbrace{2e^{-3t}}_{\\text{sıfır giriş}}u(t)+\\underbrace{\\tfrac13\\big(1-e^{-3t}\\big)}_{\\text{sıfır durum}}u(t)
        =\\Big(\\tfrac13+\\tfrac53e^{-3t}\\Big)u(t) \\]
        <p>Kontrol: \\( y(0^+)=2 \\) ✓, \\( y(\\infty)=1/3=H(0) \\) ✓.</p>`
    },
    {
      tip: "final",
      soru: `<p>\\( y[n]=0.8\\,y[n-1]+x[n] \\) sistemi için \\( H(z) \\)'yi, ROC'yi, \\( h[n] \\)'i yazın; kararlı mı? \\( |H(e^{j\\omega})| \\) için \\( \\omega=0 \\) ve \\( \\omega=\\pi \\) değerlerini bulun ve filtre türünü söyleyin.</p>`,
      cozum: `
        <p>\\( Y(1-0.8z^{-1})=X \\) ⟹ \\( H(z)=\\dfrac{1}{1-0.8z^{-1}} \\), kutup \\( z=0.8 \\), nedensel → ROC \\( |z|&gt;0.8 \\).</p>
        <p>\\( h[n]=0.8^nu[n] \\); ROC birim çemberi içerir → <b>kararlı</b> (\\( \\sum0.8^n=5 \\)).</p>
        <p>\\( |H(e^{j0})|=\\dfrac{1}{1-0.8}=5 \\), \\( |H(e^{j\\pi})|=\\dfrac{1}{1+0.8}=0.56 \\) → DC'yi 9 kat daha çok geçirir:
        <b>alçak geçiren</b> (IIR, 1. derece). Kutup birim çembere yaklaştıkça daha da seçici olur.</p>`
    },
    {
      tip: "final",
      soru: `<p>Bir DTFT'si \\( X(e^{j\\omega})=\\dfrac{1}{1-0.5e^{-j\\omega}} \\) olan diziden 8 noktalı DFT alınıyor (\\( f_s=8 \\) kHz). (a) DFT bin aralığı kaç Hz'dir? (b) \\( X[2] \\) hangi analog frekansa ve hangi \\( \\omega \\)'ya karşılık gelir? (c) 8 sıfır ekleyip 16 noktalı DFT almak frekans çözünürlüğünü artırır mı?</p>`,
      cozum: `
        <p>(a) \\( \\Delta f=f_s/N=8000/8=1000 \\) Hz.</p>
        <p>(b) \\( k=2 \\): \\( f=2\\cdot1000=2 \\) kHz, \\( \\omega=2\\pi k/N=\\pi/2 \\) rad/örnek. Değeri DTFT'nin oradaki örneği:
        \\( X[2]=\\dfrac{1}{1-0.5e^{-j\\pi/2}}=\\dfrac{1}{1+0.5j}=0.8-0.4j \\).</p>
        <p>(c) <b>Hayır.</b> Sıfır ekleme DTFT'yi daha sık örnekler (500 Hz aralık), eğri daha pürüzsüz görünür; ama iki yakın
        tonu ayırma yeteneği (çözünürlük) gerçek kayıt süresine \\( N_{gerçek}T_s \\) bağlıdır — değişmez.</p>`
    }
  ]
};
