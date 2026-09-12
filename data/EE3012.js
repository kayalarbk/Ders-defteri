/* ============================================================
   EE3012 — Electronics II
   ------------------------------------------------------------
   Bu dosya SADECE bu derse aittir. İçerik eklemek için burayı düzenle.
   Alan açıklamaları için data/EE3061.js başlığına bak.

   Kapsam: Sedra-Smith / Razavi temel alınarak bir dönemlik
   Elektronik II dersinin çekirdek konuları.
   ============================================================ */

window.DERSLER = window.DERSLER || {};

window.DERSLER["EE3012"] = {
  ad: "Electronics II",
  donem: "3. Sınıf · 1. Dönem",
  renk: "#F0A868",
  ozet: "BJT/MOSFET yüksek frekans modelleri ve Miller etkisi; frekans yanıtı (alçak/yüksek, zaman sabitleri yöntemi); çok katlı, cascode ve fark kuvvetlendiriciler; akım aynaları ve aktif yükler; geri besleme topolojileri, kararlılık, faz payı ve kompanzasyon; osilatörler; güç kuvvetlendiricileri; op-amp kusurları.",
  konular: [
    {
      baslik: "1. Yüksek Frekans Modelleri (Hibrit-π)",
      icerik: `
        <p>Elektronik I'de kullanılan küçük-sinyal modeli frekanstan bağımsızdı; gerçek transistörde
                ise jonksiyonların ve geyt oksidinin kapasitansları belirli bir frekanstan sonra devreye
                girer ve kazancı düşürür. <b>Hibrit-\\( \\pi \\) modeli</b> bu kapasitansları ekleyerek yüksek
                frekans davranışını açıklar.</p>
                <p>BJT'de iki kapasitans vardır: ileri kutuplanmış beyz–emiter jonksiyonunun difüzyon ve
                geçiş kapasitansları \\( C_\\pi \\), ters kutuplanmış beyz–kolektör jonksiyonununki
                \\( C_\\mu \\). MOSFET'te karşılıkları \\( C_{gs} \\) ve \\( C_{gd} \\)'dir. Transkondüktans:</p>
                \\[ g_m=\\frac{I_C}{V_T}\\ \\ (\\text{BJT}), \\qquad
                   g_m=\\frac{2I_D}{V_{ov}}=\\sqrt{2\\mu_nC_{ox}\\tfrac{W}{L}I_D}\\ \\ (\\text{MOS}) \\]
                <p>Buradaki fark önemlidir: BJT'de \\( g_m \\) akımla <b>doğrusal</b> artar, MOSFET'te
                <b>karekökle</b>. Aynı akımda BJT genelde daha yüksek kazanç verir.</p>
                <p><b>Geçiş frekansı \\( f_T \\)</b>, kısa devre akım kazancının birime düştüğü frekanstır ve
                transistörün hız ölçüsüdür:</p>
                \\[ f_T = \\frac{g_m}{2\\pi (C_\\pi + C_\\mu)} \\]
                <p>\\( f_T \\) polarlama akımıyla artar, ama yüksek akımda taban genişleme (Kirk) etkisiyle
                yeniden düşer; her transistörün bir <b>optimum polarlama akımı</b> vardır. Tasarımda
                çalışılacak en yüksek frekansın \\( f_T \\)'nin çok altında kalması istenir.</p>`
    },
    {
      baslik: "2. Miller Etkisi",
      icerik: `
        <p>Bant genişliğini sınırlayan tek en önemli etken, giriş ile çıkış arasına köprü gibi bağlı
                olan küçük \\( C_\\mu \\) (veya \\( C_{gd} \\)) kapasitansıdır. Kazanç terslediği için bu
                kapasitansın iki ucu <b>zıt yönde</b> hareket eder ve üzerinden geçen akım, sanki girişe çok
                daha büyük bir kapasitans bağlıymış gibi olur:</p>
                \\[ C_{M}=C_\\mu\\,(1+|A_v|) \\]
                <p>Sayısal örnek: \\( C_\\mu=2\\,\\text{pF} \\) ve \\( |A_v|=100 \\) ise girişte 202 pF görünür —
                yüz kat büyüme. Bu yüzden yüksek kazançlı ortak-emiter/ortak-kaynak katlarında kazanç ile
                bant genişliği doğrudan birbirinin aleyhine çalışır.</p>
                <p>Çıkış tarafına yansıyan bileşen ise \\( C_\\mu(1+1/|A_v|)\\approx C_\\mu \\) olduğundan
                ihmal edilebilir; sorun neredeyse tamamen giriş tarafındadır.</p>
                <p><b>Miller etkisinden kaçınmanın üç yolu:</b></p>
                <ul>
                  <li><b>Kaskod:</b> ortak-emiter katının üstüne ortak-beyz katı konur. Alttaki transistör
                  artık \\( A_v\\approx-1 \\) görür, çarpan yok olur; kazanç üstteki katta üretilir.</li>
                  <li><b>Ortak-beyz / ortak-geyt kat:</b> giriş ile çıkış arasında köprüleyen kapasitans yoktur.</li>
                  <li><b>Kaynak direncini küçültmek:</b> \\( f_H\\approx 1/(2\\pi R_{sig}C_M) \\) olduğundan
                  düşük empedanslı sürücü kutbu yukarı iter.</li>
                </ul>`
    },
    {
      baslik: "3. Frekans Yanıtı: Alçak Frekans",
      icerik: `
        <p>Bir kuvvetlendiricinin kazanç–frekans eğrisi üç bölgeye ayrılır: alçak frekansta kuplaj ve
                baypas kapasitörleri, orta bantta sabit kazanç \\( A_M \\), yüksek frekansta gövde
                kapasitansları belirleyicidir.</p>
                <p>Alçak frekansta <b>kuplaj</b> kapasitörlerinin empedansı \\( 1/\\omega C \\) büyüdüğü için
                sinyalin bir kısmı üzerlerinde düşer; <b>baypas</b> kapasitörü ise emiter direncini yeterince
                kısa devre edemez ve kazanç düşer. Her kapasitör bir yüksek-geçiren köşe oluşturur:</p>
                \\[ f_{L,i}=\\frac{1}{2\\pi R_{i}C_{i}} \\]
                <p>Buradaki \\( R_i \\), <b>diğer tüm kapasitörler kısa devre edilerek</b> o kapasitörün
                gördüğü dirençtir (kısa devre zaman sabitleri yöntemi). Alt kesim frekansı yaklaşık olarak
                bunların toplamıdır:</p>
                \\[ f_L \\approx \\sum_i \\frac{1}{2\\pi R_iC_i} \\]
                <p>Pratikte baypas kapasitörü en büyük katkıyı yapar, çünkü gördüğü direnç
                \\( R_E\\,\\|\\,(1/g_m) \\) gibi çok küçük bir değerdir — bu yüzden en büyük kapasite ona verilir.
                Kutuplardan biri diğerlerinden belirgin biçimde yüksekse <b>baskın kutup</b> tek başına
                \\( f_L \\)'yi belirler. Bode eğrisinde kazanç her kutup için 20 dB/dekad eğimle yükselir.</p>`
    },
    {
      baslik: "4. Frekans Yanıtı: Yüksek Frekans ve Baskın Kutup",
      icerik: `
        <p>Yüksek frekansta kuplaj kapasitörleri kısa devre sayılır; sınırı artık transistörün kendi
                kapasitansları çizer. Üst kesim frekansı \\( f_H \\), kazancın orta bant değerinden 3 dB
                düştüğü noktadır.</p>
                <p>Çözüm için <b>açık devre zaman sabitleri</b> yöntemi kullanılır: her kapasitörün, diğerleri
                açık devre iken gördüğü direnç bulunur ve zaman sabitleri toplanır:</p>
                \\[ f_H\\approx\\frac{1}{2\\pi\\sum_i R_{i}C_{i}} \\]
                <p>Kapasitörlerden biri baskınsa (\\( \\tau \\)'su diğerlerinden çok büyükse) <b>baskın kutup
                yaklaşımı</b> kullanılır ve \\( f_H \\approx 1/(2\\pi R_{eş}C_{eş}) \\) yazılır. Ortak-emiter
                katında baskın terim hemen daima Miller ile büyütülmüş \\( C_\\mu \\)'dür.</p>
                <p>Orta bant kazancı ile bant genişliği arasında temel bir değiş-tokuş vardır: kazancı
                artırmak Miller kapasitansını büyütür ve \\( f_H \\)'yi aşağı çeker. Çarpımları yaklaşık
                sabittir:</p>
                \\[ \\text{GBW}=A_M\\cdot f_H \\approx \\text{sabit} \\]
                <p>Bu nedenle çok kazanç <b>ve</b> çok bant isteniyorsa tek katta ısrar edilmez: düşük
                kazançlı birkaç kat ardışık bağlanır. Ancak \\( n \\) özdeş katın toplam bandı tek kata göre
                \\( \\sqrt{2^{1/n}-1} \\) çarpanı kadar daralır — bu da hesaba katılmalıdır.</p>`
    },
    {
      baslik: "5. Çok Katlı Kuvvetlendiriciler (Multistage)",
      icerik: `
        <p>Tek kat genellikle istenen kazancı, giriş direncini ve çıkış direncini aynı anda
                sağlayamaz. Katlar ardışık bağlandığında kazançlar <b>çarpılır</b> (dB'de toplanır):</p>
                \\[ A=A_1A_2\\cdots A_n, \\qquad A_{dB}=\\sum_i A_{i,dB} \\]
                <p>Ama bu çarpım ancak <b>yükleme etkisi</b> hesaba katılırsa doğrudur: bir katın çıkış
                direnci, sonraki katın giriş direnciyle gerilim bölücü oluşturur. Gerçek kazanç
                \\( A_1\\cdot\\dfrac{R_{i2}}{R_{o1}+R_{i2}}\\cdot A_2\\ldots \\) şeklindedir; bu yüzden
                katlar tek başına değil, <b>bağlandıkları haliyle</b> analiz edilir.</p>
                <p>Yaygın kat birleşimleri ve hangi sorunu çözdükleri:</p>
                <ul>
                  <li><b>Kaskad (CE–CE):</b> yüksek toplam kazanç, ama her katta Miller etkisi birikir.</li>
                  <li><b>Kaskod (CE–CB / CS–CG):</b> Miller bastırılır → yüksek bant genişliği; ayrıca çok
                  yüksek çıkış direnci (\\( \\approx g_mr_o^2 \\)) verir.</li>
                  <li><b>Darlington:</b> iki BJT'nin akım kazancı çarpılır (\\( \\beta_1\\beta_2 \\)); çok yüksek
                  giriş direnci, ama iki \\( V_{BE} \\) düşümü ve yavaş anahtarlama.</li>
                  <li><b>CC / emiter izleyici:</b> kazancı ≈1'dir, işlevi <b>tampon</b>: yüksek giriş, düşük
                  çıkış direnci sunarak yükleme etkisini kırar. Çıkış katı olarak kullanılır.</li>
                </ul>
                <p>Tipik bir tasarım dizilimi şudur: giriş katı (yüksek \\( R_{in} \\), düşük gürültü) →
                kazanç katları (kaskod) → çıkış tamponu (düşük \\( R_{out} \\)).</p>`
    },
    {
      baslik: "6. Fark Kuvvetlendiricisi (Diferansiyel)",
      icerik: `
        <p>Fark kuvvetlendiricisi iki simetrik transistör ve ortak bir <b>kuyruk akım kaynağından</b>
                oluşur; her op-amp'ın giriş katı budur. İşlevi, iki giriş arasındaki farkı yükseltip ikisinde
                de <b>ortak</b> olan bileşeni (şebeke gürültüsü, sıcaklık kayması, besleme dalgalanması)
                bastırmaktır:</p>
                \\[ v_o=A_d(v_1-v_2)+A_{cm}\\frac{v_1+v_2}{2} \\]
                <p>Fark modunda devre ikiye bölünerek <b>yarım devre</b> ile analiz edilir: ortak nokta
                sinyal açısından topraktır, çünkü bir taraf ne kadar yükselirse diğeri o kadar alçalır.
                Bu durumda \\( A_d=-g_mR_C \\) (veya aktif yükle \\( -g_m(r_{o1}\\|r_{o2}) \\)) olur.</p>
                <p>Ortak modda ise her iki transistör birlikte hareket eder ve kuyruk kaynağının direnci
                \\( R_{SS} \\) tam olarak hissedilir: \\( A_{cm}\\approx -\\dfrac{R_C}{2R_{SS}} \\).
                Kalite ölçüsü <b>Ortak Mod Bastırma Oranı</b>:</p>
                \\[ \\mathrm{CMRR}=\\left|\\frac{A_d}{A_{cm}}\\right|\\approx g_mR_{SS}
                   \\quad(\\text{dB}=20\\log\\mathrm{CMRR}) \\]
                <p>Sonuç net: <b>CMRR'yi belirleyen şey kuyruk akım kaynağının çıkış direncidir.</b> Basit
                direnç yerine akım aynası kullanılmasının nedeni budur. İkinci sınırlayıcı, transistörler
                arasındaki <b>eşleşmezliktir</b>; çıkışı sıfırlamak için gereken giriş gerilimi
                <b>ofset gerilimi</b> \\( V_{OS} \\) olarak tanımlanır.</p>`
    },
    {
      baslik: "7. Akım Aynaları ve Aktif Yükler",
      icerik: `
        <p>Entegre devrede büyük dirençler pahalıdır ve tolerans/sıcaklık kayması yüksektir; bu
                yüzden polarlama akımları <b>akım aynalarıyla</b> dağıtılır. Diyot bağlı bir transistörden
                geçen referans akım, aynı \\( V_{BE} \\)'yi paylaşan eşleşmiş transistörde kopyalanır:</p>
                \\[ I_{\\text{çık}}=I_{ref}\\frac{(W/L)_2}{(W/L)_1}, \\qquad
                   I_{ref}=\\frac{V_{CC}-V_{BE}}{R} \\]
                <p>Alan oranı değiştirilerek tek referanstan farklı akımlar üretilebilir. Gerçek aynada iki
                hata kaynağı vardır: BJT'de beyz akımlarının çekilmesi (\\( \\approx 2/\\beta \\) hatası;
                tampon transistörle düzeltilir) ve <b>Early etkisi</b> — çıkış gerilimi değişince akım
                \\( r_o=V_A/I_C \\) direncine göre kayar.</p>
                <p><b>Aktif yük</b> aynı fikrin kazanç tarafındaki kullanımıdır: yük direnci yerine bir akım
                aynası konur. Küçük sinyalde çok yüksek direnç (\\( r_o \\)), DC'de ise küçük gerilim düşümü
                sunar — dirençle bu ikisi aynı anda elde edilemez:</p>
                \\[ A_v=-g_m(r_{o1}\\,\\|\\,r_{o2}) \\]
                <p>Bu, tek katta yüzlerce kat kazanç demektir ve <b>iç kazanç</b> \\( g_mr_o \\) transistörün
                verebileceği maksimum kazancı tanımlar. Çıkış direncini daha da artırmak için <b>kaskod</b>
                (\\( \\approx g_mr_o^2 \\)) ve <b>Wilson</b> aynaları kullanılır.</p>`
    },
    {
      baslik: "8. Cascode Kuvvetlendirici",
      icerik: `
        <p><b>Cascode</b>, ortak-emiter (ya da ortak-kaynak) katının üzerine bir ortak-baz (ortak-geçit) katı bindirilmesidir: alt transistör
        gerilimi akıma çevirir (\\( g_m \\)), üstteki akımı yüke iletir ve alt transistörün kolektörünü <b>düşük empedansla sabit tutar</b>. Tek katın
        iki temel sorununu aynı anda çözer: Miller etkisi ve düşük çıkış direnci.</p>
        <ul>
          <li><b>Miller etkisinin kırılması:</b> Alt transistörün kolektör yükü artık \\( R_C \\) değil, üst transistörün emiter direnci \\( \\approx1/g_{m2} \\)'dir.
          Bu yüzden alt katın gerilim kazancı \\( \\approx-g_{m1}/g_{m2}\\approx-1 \\) olur; \\( C_\\mu \\)'ye yansıyan Miller kapasitansı \\( C_\\mu(1+1)=2C_\\mu \\) —
          \\( (1+|A_v|)C_\\mu \\)'nun yüzde biri. Toplam kazanç ise korunur: üst kat akımı \\( R_C \\)'ye aktarır, \\( A_v\\approx-g_{m1}R_C \\). Sonuç:
          <b>aynı kazanç, çok daha geniş bant</b>; RF ve video kuvvetlendiricilerinin standart hücresi.</li>
          <li><b>Çıkış direncinin çarpılması:</b> Üst transistör, altın \\( r_{o1} \\)'ini kendi kazancıyla yukarı yansıtır:
          \\[ R_{out}\\approx g_{m2}r_{o2}\\,r_{o1}\\;(\\text{MOS}),\\qquad R_{out}\\approx\\beta_2r_{o2}\\;(\\text{BJT — } r_{\\pi2}\\text{ sınırlar}) \\]
          Bu, <b>cascode akım kaynağının</b> (akım aynası çıkışına cascode) neden çok "sert" olduğunun nedenidir: \\( R_{out} \\) yüzlerce MΩ.</li>
          <li><b>İç kazanç:</b> Aktif yüklü (cascode akım kaynağı yüklü) cascode katının kazancı \\( A_v\\approx-g_{m1}(R_{out}\\parallel R_{yük}) \\);
          yük de cascode ise \\( |A_v|\\sim(g_mr_o)^2/2 \\) — tek transistörün \\( g_mr_o \\)'sunun karesi mertebesi. Telescopic cascode op-amp'ın ilk katı budur.</li>
          <li><b>Bedeli:</b> İki transistör üst üste → <b>gerilim tavanı (headroom)</b> azalır: en az iki \\( V_{CE,sat} \\)/\\( V_{DS,sat} \\) düşer. Düşük besleme
          gerilimli (1 V) tasarımlarda cascode katları terk edilir ya da <b>katlanmış (folded) cascode</b> kullanılır: üst transistör zıt tipte (PNP/PMOS) yapılıp
          akım "katlanır", çıkış düğümü besleme ortasında kalır.</li>
          <li><b>Frekans yanıtı:</b> Baskın kutup genelde çıkış düğümündedir (yüksek \\( R_{out} \\) × yük kapasitansı); giriş düğümünde Miller yükü küçük olduğu için
          ikinci kutup çok yukarıdadır — geri beslemeli sistemlerde faz payı için idealdir. Bu yüzden iki katlı op-amp'larda ilk kat sık sık cascode'dur.</li>
        </ul>
        <p><b>Sık hata:</b> Cascode'un "kazancı artırdığını" söylemek. Direnç yüklüyken kazanç tek kata eşittir; artan şey <b>bant genişliği</b> ve <b>çıkış direnci</b>dir.
        Kazanç yalnızca yük de yüksek empedanslı (aktif) olunca artar.</p>`
    },
    {
      baslik: "9. Geri Besleme (Feedback) Topolojileri",
      icerik: `
        <p>Negatif geri beslemede çıkışın bir örneği girişten çıkarılır. Kapalı çevrim kazancı:</p>
                \\[ A_f = \\frac{A}{1 + A\\beta} \\]
                <p>\\( A\\beta \\gg 1 \\) iken \\( A_f\\approx 1/\\beta \\) olur — yani kazanç, transistör
                parametrelerinden neredeyse bağımsız hale gelir ve yalnızca geri besleme ağının (genellikle
                iki direncin) oranıyla belirlenir. Kazançtan feragat edilerek satın alınan şeyler şunlardır:</p>
                <ul>
                  <li><b>Duyarsızlık:</b> \\( \\dfrac{dA_f}{A_f}=\\dfrac{1}{1+A\\beta}\\dfrac{dA}{A} \\) —
                  açık çevrim kazancı %50 değişse bile kapalı çevrim kazancı çok az kayar.</li>
                  <li><b>Bant genişliği:</b> \\( f_{H,f}=f_H(1+A\\beta) \\); GBW korunur.</li>
                  <li><b>Doğrusal olmayan bozulma</b> aynı çarpanla azalır.</li>
                  <li><b>Giriş/çıkış direnci</b> topolojiye göre \\( (1+A\\beta) \\) katı büyür veya küçülür.</li>
                </ul>
                <p>Dört topoloji, çıkışta neyin örneklendiği ve girişte neyin karşılaştırıldığıyla ayrılır:</p>
                <ul>
                  <li><b>Seri–şönt</b> (gerilim–gerilim): \\( R_{in}\\uparrow \\), \\( R_{out}\\downarrow \\) — gerilim kuvvetlendiricisi.</li>
                  <li><b>Şönt–seri</b> (akım–akım): \\( R_{in}\\downarrow \\), \\( R_{out}\\uparrow \\) — akım kuvvetlendiricisi.</li>
                  <li><b>Seri–seri</b> (akım–gerilim): transkondüktans; ikisi de artar.</li>
                  <li><b>Şönt–şönt</b> (gerilim–akım): transrezistans; ikisi de azalır.</li>
                </ul>
                <p>Kural: <b>seri bağlantı direnci artırır, şönt bağlantı azaltır.</b></p>`
    },
    {
      baslik: "10. Geri Beslemede Kararlılık ve Kompanzasyon",
      icerik: `
        <p>Negatif geri besleme yalnızca alçak frekansta gerçekten negatiftir. Her kutup en fazla
                \\( -90° \\) faz getirir; üç kutuplu bir kuvvetlendiricide toplam faz \\( -270° \\)'ye kadar
                iner. Faz \\( -180° \\)'yi geçtiği noktada geri besleme <b>pozitife</b> döner ve o frekansta
                \\( |A\\beta|\\ge1 \\) ise devre osilasyona başlar.</p>
                <p>Kararlılık iki payla ölçülür:</p>
                <ul>
                  <li><b>Faz payı (PM):</b> \\( |A\\beta|=1 \\) frekansında fazın \\( -180° \\)'ye kalan uzaklığı.</li>
                  <li><b>Kazanç payı (GM):</b> faz \\( -180° \\)'ye ulaştığında \\( |A\\beta| \\)'nın 1'e kalan uzaklığı (dB).</li>
                </ul>
                <p>Pratik hedef PM ≥ 45°'dir. PM 45°'nin altına inince adım yanıtında aşım (overshoot) ve
                çınlama (ringing) başlar; 60° genelde en iyi yerleşme süresini verir.</p>
                <p><b>Kompanzasyon</b>, çevrim kazancı birime <i>inmeden önce</i> fazın dönmesini engeller:</p>
                <ul>
                  <li><b>Baskın kutup kompanzasyonu:</b> bilerek çok düşük frekanslı bir kutup eklenir;
                  kazanç 20 dB/dekad ile birime iner, diğer kutuplar devreye girmeden iş biter. Bedeli bant genişliğidir.</li>
                  <li><b>Miller kompanzasyonu:</b> aynı iş, kazanç katının etrafına küçük bir \\( C_C \\)
                  bağlanarak yapılır — Miller etkisi kapasiteyi \\( (1+|A_v|) \\) katı büyüttüğü için çipe
                  sığacak boyutta bir kondansatör yeter. Ayrıca <b>kutup ayrımı</b> (pole splitting) sağlar.
                  Op-amp'ların içindeki 30 pF'lik kondansatör tam olarak budur.</li>
                </ul>`
    },
    {
      baslik: "11. Osilatörler",
      icerik: `
        <p>Osilatör, giriş sinyali olmadan periyodik çıkış üretir; bir önceki konunun "kaçınılması
                gereken" durumu burada bilerek kurulur. <b>Barkhausen kriteri</b> osilasyon koşuludur:</p>
                \\[ |A\\beta|=1, \\qquad \\angle A\\beta=0° \\;(\\text{veya } 360°) \\]
                <p>Pratikte çevrim kazancı başlangıçta bilerek <b>1'den biraz büyük</b> seçilir: salınım
                devre gürültüsünden doğar ve büyür. Genlik büyüdükçe bir doğrusal olmayan öğe (transistörün
                doyması, diyot çifti, termistör) kazancı 1'e çeker; <b>genlik kararlılığı</b> bu şekilde
                sağlanır. Aksi halde çıkış besleme raylarına dayanıp kare dalgaya döner.</p>
                <p>Frekans belirleyen ağa göre türler:</p>
                <ul>
                  <li><b>Wien köprüsü:</b> \\( f=\\dfrac{1}{2\\pi RC} \\). Bu frekansta geri besleme ağının
                  zayıflatması tam 1/3 olduğundan kuvvetlendiricinin kazancı 3 olmalıdır. Ses frekanslarında
                  çok düşük bozulma verir.</li>
                  <li><b>Faz kaydırmalı:</b> üç RC katı toplam 180° kaydırır;
                  \\( f=\\dfrac{1}{2\\pi RC\\sqrt6} \\) ve kazanç ≥29 gerekir.</li>
                  <li><b>LC (Colpitts / Hartley):</b> \\( f=\\dfrac{1}{2\\pi\\sqrt{LC}} \\); RF bölgesinde
                  kullanılır. Colpitts'te bölücü kapasitif, Hartley'de endüktiftir.</li>
                  <li><b>Kristal:</b> kuvars kristalinin çok yüksek \\( Q \\)'su (10⁴–10⁶) frekansı milyonda
                  birkaç kararlılıkla sabitler — saatler ve mikroişlemci saat üreteçleri.</li>
                </ul>`
    },
    {
      baslik: "12. Güç Kuvvetlendiricileri",
      icerik: `
        <p>Çıkış katı yüke (hoparlör, motor, anten) yüksek güç aktarır. Burada kazançtan çok
                <b>verim</b>, <b>ısı</b> ve <b>bozulma</b> önemlidir; transistörler büyük sinyal salınımı
                yaptığı için küçük-sinyal analizi yetmez. Sınıflar, iletim açısına göre ayrılır:</p>
                <ul>
                  <li><b>A sınıfı</b> — transistör periyodun tamamında (360°) iletir. En doğrusal, ama
                  sinyal yokken bile tam akım çeker: \\( \\eta_{max}=\\%25 \\) (endüktif/tampon yükte %50).
                  Ayrıca <b>en kötü ısınma boştayken</b> olur.</li>
                  <li><b>B sınıfı</b> — push-pull: her transistör yarım periyot (180°) iletir, boşta akım
                  sıfırdır. \\( \\eta_{max}=\\dfrac{\\pi}{4}\\approx\\%78.5 \\). Bedeli, sinyal sıfırdan geçerken
                  hiçbir transistörün iletmediği ölü bölgedir → <b>geçiş (crossover) bozulması</b>.</li>
                  <li><b>AB sınıfı</b> — transistörler küçük bir akımla önceden polarlanır (iletim açısı
                  180°'den biraz fazla). Geçiş bozulması ortadan kalkar, verim B'ye yakın kalır. Ses
                  katlarının pratikteki standardı budur; polarlama gerilimi \\( V_{BE} \\) çarpanı veya diyot
                  çiftiyle üretilir ve sıcaklıkla birlikte kayarak <b>termal kaçışı</b> önler.</li>
                  <li><b>C sınıfı</b> — 180°'den az iletir, çıkışta ayarlı LC devresi dalgayı yeniden kurar.
                  Verim %90'ı aşar ama yalnızca dar bantlı RF vericilerinde kullanılabilir.</li>
                </ul>
                <p>Isıl tasarım da bu konunun parçasıdır. Jonksiyon sıcaklığı, ısıl direnç zinciriyle bulunur:</p>
                \\[ T_J=T_A+P_D\\left(\\theta_{JC}+\\theta_{CS}+\\theta_{SA}\\right) \\]
                <p>B sınıfında maksimum güç kaybının tam çıkışta değil, çıkış genliği besleme geriliminin
                \\( 2/\\pi \\) katındayken oluştuğunu göstermek klasik bir sınav sorusudur.</p>`
    }
  ],
  formuller: [
    { ad: "Transkondüktans", formul: `\\( g_m=\\dfrac{I_C}{V_T} \\)`, aciklama: "MOS'ta g_m=2I_D/V_ov." },
    { ad: "Geçiş Frekansı", formul: `\\( f_T=\\dfrac{g_m}{2\\pi(C_\\pi+C_\\mu)} \\)`, aciklama: "Akım kazancının birim olduğu frekans." },
    { ad: "Miller Kapasitansı", formul: `\\( C_M=C_\\mu(1+|A_v|) \\)`, aciklama: "Girişe yansıyan büyütülmüş kapasitans." },
    { ad: "Alçak/Yüksek Kesim", formul: `\\( f=\\dfrac{1}{2\\pi RC} \\)`, aciklama: "Bir kutbun köşe frekansı." },
    { ad: "Kazanç–Bant Çarpımı", formul: `\\( \\text{GBW}=A_M\\cdot f_H \\)`, aciklama: "Yaklaşık sabit; kazanç↔bant değiş-tokuşu." },
    { ad: "Çok Katlı Kazanç", formul: `\\( A=A_1 A_2\\cdots A_n \\)`, aciklama: "dB'de toplanır." },
    { ad: "CMRR", formul: `\\( \\mathrm{CMRR}=\\left|\\dfrac{A_d}{A_{cm}}\\right| \\)`, aciklama: "Fark kuvvetlendiricisi kalitesi." },
    { ad: "Kapalı Çevrim Kazancı", formul: `\\( A_f=\\dfrac{A}{1+A\\beta} \\)`, aciklama: "Negatif geri beslemeli kazanç." },
    { ad: "Bant Genişliği Genişlemesi", formul: `\\( f_{H,f}=f_H(1+A\\beta) \\)`, aciklama: "Geri besleme bandı genişletir." },
    { ad: "Barkhausen Kriteri", formul: `\\( |A\\beta|=1,\\;\\angle A\\beta=0 \\)`, aciklama: "Osilasyon koşulu." },
    { ad: "Wien Köprüsü Frekansı", formul: `\\( f=\\dfrac{1}{2\\pi RC} \\)`, aciklama: "RC osilatör salınım frekansı." },
    { ad: "LC Osilatör Frekansı", formul: `\\( f=\\dfrac{1}{2\\pi\\sqrt{LC}} \\)`, aciklama: "Colpitts/Hartley." },
    { ad: "A Sınıfı Verim", formul: `\\( \\eta_{max}=\\%25\\;(\\text{tampon }\\%50) \\)`, aciklama: "Doğrusal ama verimsiz." },
    { ad: "B Sınıfı Verim", formul: `\\( \\eta_{max}=\\dfrac{\\pi}{4}\\approx\\%78.5 \\)`, aciklama: "İdeal push-pull maksimumu." },
    { ad: "MOS Transkondüktans", formul: `\\( g_m=\\dfrac{2I_D}{V_{ov}}=\\sqrt{2\\mu_nC_{ox}\\tfrac{W}{L}I_D} \\)`, aciklama: "BJT'de akımla doğrusal, MOS'ta karekökle artar." },
    { ad: "İç Kazanç", formul: `\\( A_{v,max}=g_mr_o=\\dfrac{V_A}{V_T} \\)`, aciklama: "Bir transistörün verebileceği en yüksek kazanç." },
    { ad: "Aktif Yüklü Kazanç", formul: `\\( A_v=-g_m(r_{o1}\\|r_{o2}) \\)`, aciklama: "Dirençli yükle ulaşılamayan kazanç seviyesi." },
    { ad: "Early Direnci", formul: `\\( r_o=\\dfrac{V_A}{I_C} \\)`, aciklama: "Akım aynasının çıkış direnci; V_A = Early gerilimi." },
    { ad: "Akım Aynası Oranı", formul: `\\( I_{\\text{çık}}=I_{ref}\\dfrac{(W/L)_2}{(W/L)_1} \\)`, aciklama: "Alan oranıyla akım ölçeklenir." },
    { ad: "Fark Kazancı", formul: `\\( A_d=-g_mR_C \\)`, aciklama: "Yarım devre; ortak nokta sinyal toprağıdır." },
    { ad: "Ortak Mod Kazancı", formul: `\\( A_{cm}\\approx-\\dfrac{R_C}{2R_{SS}} \\)`, aciklama: "CMRR ≈ g_m·R_SS; kuyruk direnci belirler." },
    { ad: "Kazanç Duyarlılığı", formul: `\\( \\dfrac{dA_f}{A_f}=\\dfrac{1}{1+A\\beta}\\dfrac{dA}{A} \\)`, aciklama: "Geri besleme kazancı parametrelere duyarsızlaştırır." },
    { ad: "Kısa Devre Zaman Sabitleri", formul: `\\( f_L\\approx\\sum_i\\dfrac{1}{2\\pi R_iC_i} \\)`, aciklama: "Alçak frekans kesimi (kuplaj/baypas)." },
    { ad: "Açık Devre Zaman Sabitleri", formul: `\\( f_H\\approx\\dfrac{1}{2\\pi\\sum_i R_iC_i} \\)`, aciklama: "Yüksek frekans kesimi (gövde kapasitansları)." },
    { ad: "Faz Kaydırmalı Osilatör", formul: `\\( f=\\dfrac{1}{2\\pi RC\\sqrt6} \\)`, aciklama: "Üç RC katı; kazanç ≥ 29 gerekir." },
    { ad: "Jonksiyon Sıcaklığı", formul: `\\( T_J=T_A+P_D(\\theta_{JC}+\\theta_{CS}+\\theta_{SA}) \\)`, aciklama: "Güç katında ısıl tasarım zinciri." },
    { ad: "Cascode Çıkış Direnci", formul: `\\( R_{out}\\approx g_{m2}r_{o2}r_{o1} \\)`, aciklama: "MOS; BJT'de β₂r_{o2} ile sınırlı. Miller yükü ≈2C_μ." },
    { ad: "Faz Payı", formul: `\\( \\text{PM}=180°+\\angle A\\beta(j\\omega_{180})\\big|_{|A\\beta|=1} \\)`, aciklama: "≥45° istenir; 60° tipik hedef." },
    { ad: "Baskın Kutup Kompanzasyonu", formul: `\\( f_{p1}'=\\dfrac{1}{2\\pi R_{out}C_c},\\quad \\text{GBW}=\\dfrac{g_m}{2\\pi C_c} \\)`, aciklama: "Miller kapasitörü C_c kutbu aşağı çeker; birim kazanç frekansı sabit." },
    { ad: "Colpitts Frekansı", formul: `\\( f_0=\\dfrac{1}{2\\pi\\sqrt{L\\,C_1C_2/(C_1+C_2)}} \\)`, aciklama: "Barkhausen: g_mR ≥ C₂/C₁." },
    { ad: "Faz Kaydırmalı Kazanç", formul: `\\( f_0=\\dfrac{1}{2\\pi RC\\sqrt6},\\quad |A|\\ge29 \\)`, aciklama: "Üç RC katı 180°; her kat 60°." },
    { ad: "Widlar Akım Kaynağı", formul: `\\( I_o R_E=V_T\\ln\\dfrac{I_{ref}}{I_o} \\)`, aciklama: "Büyük dirençsiz mikroamper akımlar." },
    { ad: "Gerilim Kazancı (dB)", formul: `\\( A_{dB}=20\\log_{10}|A_v| \\)`, aciklama: "Katlar dB'de toplanır; güç için 10log." }
  ],
  galeri: [],
  dokumanlar: [],
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
      soru: `<p>Bir BJT'de \\( I_C=1\\,\\text{mA} \\), \\( C_\\pi=10\\,\\text{pF} \\),
             \\( C_\\mu=1\\,\\text{pF} \\) ve \\( V_T=25\\,\\text{mV} \\)'tur.
             (a) \\( g_m \\)'i, (b) \\( f_T \\)'yi bulun.</p>`,
      cozum: `
        \\[ \\text{(a)}\\quad g_m=\\frac{I_C}{V_T}=\\frac{1\\times10^{-3}}{25\\times10^{-3}}=40\\;\\text{mA/V} \\]
                \\[ \\text{(b)}\\quad f_T=\\frac{g_m}{2\\pi(C_\\pi+C_\\mu)}
                   =\\frac{0.04}{2\\pi(11\\times10^{-12})}\\approx 579\\;\\text{MHz} \\]
                <p>Polarlama akımı artırılırsa \\( g_m \\) ile birlikte \\( f_T \\) de büyür — ama
                \\( C_\\pi \\) de akımla arttığı için kazanç sınırsız değildir.</p>`
    },
    {
      tip: "vize",
      soru: `<p>Ortak-emiter katında \\( C_\\mu=2\\,\\text{pF} \\), orta bant kazancı \\( A_v=-120 \\)
             ve kaynak direnci \\( R_{sig}=5\\,\\text{k}\\Omega \\)'dur. \\( C_\\pi=12\\,\\text{pF} \\) ise
             Miller yaklaşımıyla üst kesim frekansını tahmin edin.</p>`,
      cozum: `
        <p>Girişe yansıyan Miller kapasitansı:</p>
                \\[ C_M=C_\\mu(1+|A_v|)=2(1+120)=242\\;\\text{pF} \\]
                <p>Toplam giriş kapasitansı \\( C_{in}=C_\\pi+C_M=12+242=254\\;\\text{pF} \\):</p>
                \\[ f_H\\approx\\frac{1}{2\\pi R_{sig}C_{in}}
                   =\\frac{1}{2\\pi(5000)(254\\times10^{-12})}\\approx 125\\;\\text{kHz} \\]
                <p><b>Yorum:</b> 2 pF'lik kapasitans tek başına bandı yüz kilohertz mertebesine düşürdü.
                Kaskod kullanılsaydı alttaki transistör \\( |A_v|\\approx1 \\) göreceğinden \\( C_M\\approx4\\;\\text{pF} \\)
                olur ve kesim megahertz mertebesine çıkardı.</p>`
    },
    {
      tip: "vize",
      soru: `<p>Açık çevrim kazancı \\( A=10^4 \\) olan bir kuvvetlendiriciye \\( \\beta=0.01 \\)
             ile negatif geri besleme uygulanıyor. Açık çevrim üst kesim frekansı 100 Hz'dir.
             (a) Kapalı çevrim kazancını, (b) yeni bant genişliğini, (c) \\( A \\) %50 azalırsa
             \\( A_f \\)'nin yüzde kaç değişeceğini bulun.</p>`,
      cozum: `
        <p><b>(a)</b> \\( A\\beta=10^4(0.01)=100 \\):</p>
                \\[ A_f=\\frac{A}{1+A\\beta}=\\frac{10^4}{101}\\approx 99 \\]
                <p><b>(b)</b> Bant genişliği aynı çarpanla genişler:</p>
                \\[ f_{H,f}=f_H(1+A\\beta)=100(101)=10.1\\;\\text{kHz} \\]
                <p>GBW'nin korunduğuna dikkat: \\( 10^4\\times100 = 99\\times10100 \\approx 10^6 \\).</p>
                <p><b>(c)</b> Duyarlılık bağıntısından:</p>
                \\[ \\frac{dA_f}{A_f}=\\frac{1}{1+A\\beta}\\cdot\\frac{dA}{A}=\\frac{-50\\%}{101}\\approx-0.5\\% \\]
                <p>Kazanç yarıya inse bile kapalı çevrim kazancı yalnızca binde beş kayıyor — geri
                beslemenin asıl kazancı budur.</p>`
    },
    {
      tip: "final",
      soru: `<p>Bir fark kuvvetlendiricisinde \\( g_m=2\\,\\text{mA/V} \\), \\( R_C=10\\,\\text{k}\\Omega \\)
             ve kuyruk akım kaynağının çıkış direnci \\( R_{SS}=500\\,\\text{k}\\Omega \\)'dur.
             \\( A_d \\), \\( A_{cm} \\) ve CMRR'yi (dB) bulun.</p>`,
      cozum: `
        \\[ A_d=-g_mR_C=-2\\times10^{-3}(10^4)=-20 \\]
                \\[ A_{cm}\\approx-\\frac{R_C}{2R_{SS}}=-\\frac{10^4}{2(5\\times10^5)}=-0.01 \\]
                \\[ \\mathrm{CMRR}=\\left|\\frac{A_d}{A_{cm}}\\right|=\\frac{20}{0.01}=2000
                   \\;\\Rightarrow\\; 20\\log(2000)\\approx 66\\;\\text{dB} \\]
                <p>Kuyruk direnci iki katına çıkarılsaydı CMRR de 6 dB artardı; basit direnç yerine akım
                aynası kullanılmasının nedeni tam olarak budur.</p>`
    },
    {
      tip: "final",
      soru: `<p>B sınıfı push-pull bir çıkış katında besleme \\( V_{CC}=15\\,\\text{V} \\), yük
             \\( R_L=8\\,\\Omega \\) ve çıkış tepe genliği \\( \\hat{V}_o=12\\,\\text{V} \\)'tur.
             (a) Yük gücünü, (b) beslemeden çekilen gücü, (c) verimi bulun.</p>`,
      cozum: `
        \\[ \\text{(a)}\\quad P_L=\\frac{\\hat{V}_o^2}{2R_L}=\\frac{144}{16}=9\\;\\text{W} \\]
                <p>B sınıfında beslemeden çekilen ortalama akım \\( \\hat{V}_o/(\\pi R_L) \\)'dir; iki besleme
                birlikte:</p>
                \\[ \\text{(b)}\\quad P_{DC}=\\frac{2V_{CC}\\hat{V}_o}{\\pi R_L}
                   =\\frac{2(15)(12)}{\\pi(8)}\\approx 14.3\\;\\text{W} \\]
                \\[ \\text{(c)}\\quad \\eta=\\frac{9}{14.3}\\times100\\approx 63\\% \\]
                <p>Tam salınımda (\\( \\hat{V}_o=V_{CC} \\)) verim teorik üst sınır olan %78.5'e çıkar.
                Transistörlerde harcanan güç \\( 14.3-9=5.3\\;\\text{W} \\)'tır ve soğutucu bu değere göre seçilir.</p>`
    },
    {
      tip: "final",
      soru: `<p>Bir Wien köprüsü osilatöründe \\( R=16\\,\\text{k}\\Omega \\) ve \\( C=10\\,\\text{nF} \\)'dır.
             Salınım frekansını ve kuvvetlendiriciden istenen kazancı bulun.</p>`,
      cozum: `
        \\[ f=\\frac{1}{2\\pi RC}=\\frac{1}{2\\pi(16\\times10^3)(10\\times10^{-9})}\\approx 995\\;\\text{Hz} \\]
                <p>Bu frekansta geri besleme ağının zayıflatması \\( \\beta=1/3 \\)'tür. Barkhausen koşulu
                \\( |A\\beta|=1 \\) için:</p>
                \\[ A=\\frac{1}{\\beta}=3 \\]
                <p>Op-amp ile kurulduğunda \\( 1+R_f/R_1=3 \\), yani \\( R_f=2R_1 \\) seçilir. Pratikte
                salınımın başlaması için kazanç 3'ün biraz üstünde tutulur ve genlik, doğrusal olmayan bir
                öğeyle (diyot çifti veya termistör) sınırlanır.</p>`
    },
    {
      tip: "final",
      soru: `<p>Üç katlı bir kuvvetlendiricinin kat kazançları \\( A_1=10 \\), \\( A_2=20 \\), \\( A_3=5 \\).
             Toplam kazanç kaçtır (mutlak ve dB)?</p>`,
      cozum: `
        \\[ A=A_1 A_2 A_3=10\\cdot20\\cdot5=1000 \\]
                \\[ A_{dB}=20\\log(1000)=60\\,\\text{dB} \\]`
    },
    {
      tip: "vize",
      soru: `<p>Ortak-emiter katında kuplaj kapasitörü \\( C_{C1}=1\\,\\mu\\text{F} \\) (gördüğü direnç \\( R_{sig}+R_{in}=15\\,\\text{k}\\Omega \\)), emiter baypas \\( C_E=10\\,\\mu\\text{F} \\) (gördüğü direnç \\( R_E\\parallel(r_e+R_{sig}'/\\beta)\\approx 50\\,\\Omega \\)) ve çıkış kuplajı \\( C_{C2}=1\\,\\mu\\text{F} \\) (\\( R_C+R_L=15\\,\\text{k}\\Omega \\)). Kısa devre zaman sabitleri yöntemiyle alçak kesim frekansını bulun; hangi kapasitör baskındır?</p>`,
      cozum: `
        <p>Her kapasitörün kendi kutbu \\( f_p=1/(2\\pi RC) \\):</p>
        \\[ f_{C1}=\\frac{1}{2\\pi(15\\text{k})(1\\mu)}=10.6\\;\\text{Hz},\\qquad f_{E}=\\frac{1}{2\\pi(50)(10\\mu)}=318\\;\\text{Hz},\\qquad f_{C2}=10.6\\;\\text{Hz} \\]
        <p>Toplam: \\( f_L\\approx\\sum f_{p,i}=10.6+318+10.6\\approx\\mathbf{340\\;Hz} \\) — <b>emiter baypası baskın</b>; gördüğü direnç çok küçük olduğu için 10 μF bile yetmiyor.
        Kuralı: baypas kapasitörünü büyüt (100 μF → 32 Hz), kuplaj kapasitörleri zaten ihmal edilebilir.</p>`
    },
    {
      tip: "vize",
      soru: `<p>Ortak-kaynak MOS katı: \\( g_m=4\\,\\text{mA/V} \\), \\( R_{sig}=20\\,\\text{k}\\Omega \\), \\( R_L'=5\\,\\text{k}\\Omega \\), \\( C_{gs}=2\\,\\text{pF} \\), \\( C_{gd}=0.5\\,\\text{pF} \\), \\( C_L=1\\,\\text{pF} \\). Açık devre zaman sabitleri yöntemiyle \\( f_H \\)'yi tahmin edin ve Miller yaklaşımıyla karşılaştırın.</p>`,
      cozum: `
        <p>\\( C_{gd} \\)'nin gördüğü direnç (Miller teoremi eşdeğeri): \\( R_{gd}=R_{sig}(1+g_mR_L')+R_L'=20(1+20)+5=425\\;\\text{k}\\Omega \\).</p>
        \\[ \\tau_H=C_{gs}R_{sig}+C_{gd}R_{gd}+C_LR_L'=2(20)+0.5(425)+1(5)=40+212.5+5=257.5\\;\\text{ns}\\;(\\text{pF·kΩ}) \\]
        \\[ f_H\\approx\\frac{1}{2\\pi\\tau_H}=\\frac{1}{2\\pi(257.5\\times10^{-9})}\\approx\\mathbf{618\\;kHz} \\]
        <p>Miller: \\( C_{in}=C_{gs}+C_{gd}(1+g_mR_L')=2+0.5(21)=12.5\\,\\text{pF} \\), \\( f_H=1/(2\\pi\\cdot20\\text{k}\\cdot12.5\\text{p})=637 \\) kHz — yakın; OCTC çıkış kutbunu da katar.
        Bant genişliğinin %83'ünü yarım pF'lik \\( C_{gd} \\) yiyor → cascode gerekçesi.</p>`
    },
    {
      tip: "vize",
      soru: `<p>Basit BJT akım aynasında referans akımı \\( I_{ref}=1\\,\\text{mA} \\), \\( \\beta=100 \\), \\( V_A=100\\,\\text{V} \\). (a) Baz akımı hatasını içeren çıkış akımını, (b) çıkış direncini, (c) çıkış gerilimi 1 V'tan 11 V'a çıkarsa akımın yüzde değişimini bulun. Widlar ile aynı \\( R \\)'lerle 20 μA nasıl elde edilir?</p>`,
      cozum: `
        <p>(a) İki baz akımı referanstan çalınır: \\( I_o=\\dfrac{I_{ref}}{1+2/\\beta}=\\dfrac{1}{1.02}=0.98\\;\\text{mA} \\) (%2 hata; Wilson/emiter dejenerasyonlu aynalar düzeltir).</p>
        <p>(b) \\( R_o=r_o=V_A/I_o\\approx100\\;\\text{k}\\Omega \\).</p>
        <p>(c) \\( \\Delta I=\\Delta V/r_o=10/100\\text{k}=0.1\\;\\text{mA} \\) → <b>%10</b> değişim — aynanın "sertliği" bu kadar. Cascode ayna \\( \\beta r_o=10\\,\\text{M}\\Omega \\) ile %0.1'e düşürür.</p>
        <p>Widlar: çıkış emiterine \\( R_E \\): \\( I_oR_E=V_T\\ln(I_{ref}/I_o)=25\\,\\text{mV}\\cdot\\ln50=97.8\\,\\text{mV} \\) ⟹ \\( R_E=97.8\\,\\text{mV}/20\\,\\mu\\text{A}\\approx4.9\\;\\text{k}\\Omega \\).
        Basit aynayla 20 μA için 50:1 alan oranı ya da 600 kΩ referans direnci gerekirdi.</p>`
    },
    {
      tip: "final",
      soru: `<p>Bir kuvvetlendiricinin açık çevrim kazancı \\( A(s)=\\dfrac{10^5}{(1+s/10^3)(1+s/10^6)(1+s/10^7)} \\) (rad/s). \\( \\beta=0.01 \\) ile geri besleme uygulanıyor. (a) Çevrim kazancının birim olduğu frekansı ve faz payını tahmin edin. (b) Kararlı mı? (c) Baskın kutup kompanzasyonuyla PM ≥ 45° için ilk kutbu nereye çekmek gerekir?</p>`,
      cozum: `
        <p>(a) \\( A\\beta \\) DC'de \\( 10^3 \\) (60 dB). İlk kutuptan sonra −20 dB/dek: \\( 10^3 \\) rad/s'de 60 dB → \\( 10^6 \\)'da 0 dB — ama orada ikinci kutup da var:
        \\( \\omega_{1}\\approx10^6 \\) rad/s. Faz: \\( -90°-45°-\\arctan(0.1)=-90-45-5.7=-140.7° \\) → <b>PM ≈ 39°</b>.</p>
        <p>(b) PM &gt; 0 → kararlı, ama 39° aşırı vuruş ve zil (ringing) yapar; tasarım hedefi ≥45–60°.</p>
        <p>(c) Kesişimin ikinci kutupta değil, onun en az 1 dekat altında (\\( 10^5 \\) rad/s) olması için: 60 dB'i \\( 10^5 \\)'te 0'a indirecek eğim, ilk kutbu \\( 10^5/10^3=100 \\) rad/s'ye
        çekmeyi gerektirir. O zaman PM \\( \\approx180-90-\\arctan(0.1)-\\arctan(0.01)\\approx84° \\) (fazlasıyla). Alternatif: β'yı küçültmek (kazanç ↑) da kesişimi aşağı alır.</p>`
    },
    {
      tip: "final",
      soru: `<p>Bir Colpitts osilatöründe \\( L=10\\,\\mu\\text{H} \\), \\( C_1=100\\,\\text{pF} \\), \\( C_2=1\\,\\text{nF} \\). Salınım frekansını ve Barkhausen için gereken minimum \\( g_mR \\) (yük direnci R ile) koşulunu bulun. Üç katlı RC faz kaydırmalı osilatörde \\( R=10\\,\\text{k}\\Omega \\), \\( C=10\\,\\text{nF} \\) ise frekans ve gereken kazanç nedir?</p>`,
      cozum: `
        <p>Colpitts: seri eşdeğer \\( C_{eq}=\\dfrac{C_1C_2}{C_1+C_2}=\\dfrac{100\\cdot1000}{1100}=90.9\\;\\text{pF} \\):</p>
        \\[ f_0=\\frac{1}{2\\pi\\sqrt{LC_{eq}}}=\\frac{1}{2\\pi\\sqrt{10^{-5}\\cdot90.9\\times10^{-12}}}\\approx\\mathbf{5.28\\;MHz} \\]
        <p>Geri besleme oranı \\( \\beta=C_1/C_2=0.1 \\) → \\( g_mR\\ge C_2/C_1=10 \\). Pratikte 2–3 kat fazlası seçilir; genlik, transistörün doyması/kesime girmesiyle kendini sınırlar.</p>
        <p>Faz kaydırmalı: \\( f_0=\\dfrac{1}{2\\pi RC\\sqrt6}=\\dfrac{1}{2\\pi(10^4)(10^{-8})(2.449)}\\approx\\mathbf{650\\;Hz} \\); ağın zayıflatması 1/29 → \\( |A|\\ge29 \\) (evirici kuvvetlendirici 180° + ağ 180°).</p>`
    },
    {
      tip: "final",
      soru: `<p>A sınıfı emiter izleyici çıkış katı \\( V_{CC}=\\pm10\\,\\text{V} \\), sabit akım kaynağı \\( I=0.5\\,\\text{A} \\), yük \\( R_L=20\\,\\Omega \\). (a) Maksimum kırpılmasız çıkış tepe genliğini, (b) bu genlikte yük gücünü, besleme gücünü ve verimi, (c) sıfır çıkışta transistör güç kaybını bulun. B sınıfının aynı yükte maksimum verimiyle karşılaştırın.</p>`,
      cozum: `
        <p>(a) Negatif tepe akım kaynağıyla sınırlı: \\( \\hat V_o\\le IR_L=0.5\\cdot20=10\\,\\text{V} \\); pozitif tepe \\( V_{CC}-V_{CE,sat}\\approx10 \\). → \\( \\hat V_o\\approx\\mathbf{10\\;V} \\).</p>
        <p>(b) \\( P_L=\\hat V_o^2/2R_L=100/40=2.5\\;\\text{W} \\). Besleme sabit akım çeker: \\( P_{DC}=2V_{CC}I=2(10)(0.5)=10\\;\\text{W} \\) (çıkıştan bağımsız!).
        \\( \\eta=2.5/10=\\mathbf{\\%25} \\) — A sınıfı emiter izleyicinin teorik tavanı.</p>
        <p>(c) Sıfır çıkışta transistör \\( V_{CC}I=5\\;\\text{W} \\) yakar (en kötü durum sinyal yokken!). B sınıfı: sinyal yokken sıfır kayıp, maksimum verim \\( \\pi/4=\\%78.5 \\);
        bedeli geçiş bozulması (crossover) — AB sınıfı ikisinin ödünleşimidir.</p>`
    },
    {
      tip: "final",
      soru: `<p>MOS cascode katı: \\( g_{m1}=g_{m2}=2\\,\\text{mA/V} \\), \\( r_{o1}=r_{o2}=50\\,\\text{k}\\Omega \\). (a) Direnç yüklü (\\( R_D=5\\,\\text{k}\\Omega \\)) durumda kazancı ve \\( C_{gd1} \\)'in Miller yükünü tek kat CS ile karşılaştırın. (b) Çıkış direncini bulun. (c) Yük de özdeş bir cascode akım kaynağı olursa kazanç ne olur?</p>`,
      cozum: `
        <p>(a) Kazanç her ikisinde \\( -g_{m1}R_D=-10 \\). M1'in drenindeki kazanç: CS'de −10 → Miller \\( C_{gd}(1+10)=11C_{gd} \\); cascode'da \\( -g_{m1}/g_{m2}=-1 \\) →
        \\( 2C_{gd} \\). <b>Giriş kapasitansı ~5.5 kat düştü, kazanç aynı.</b></p>
        <p>(b) \\( R_{out}\\approx g_{m2}r_{o2}r_{o1}=(2\\times10^{-3})(5\\times10^4)(5\\times10^4)=\\mathbf{5\\;M\\Omega} \\) (tek transistör: 50 kΩ; 100 kat).</p>
        <p>(c) \\( A_v=-g_{m1}(R_{out}\\parallel R_{out,yük})=-(2\\times10^{-3})(2.5\\times10^6)=\\mathbf{-5000} \\) (74 dB) — tek katlı aktif yüklü CS'nin (\\( g_mr_o/2=50 \\)) 100 katı.
        Ama çıkış düğümünde \\( 2.5\\,\\text{M}\\Omega\\times C_L \\) çok düşük bir baskın kutup yaratır: kazanç–bant ödünleşimi.</p>`
    },
    {
      tip: "final",
      soru: `<p>Bir op-amp'ın giriş ofset gerilimi \\( V_{OS}=2\\,\\text{mV} \\), giriş kutuplama akımı \\( I_B=100\\,\\text{nA} \\), slew rate \\( 1\\,\\text{V}/\\mu\\text{s} \\), GBW \\( 1\\,\\text{MHz} \\). Evirmeyen kuvvetlendirici \\( R_1=10\\,\\text{k}\\Omega \\), \\( R_f=90\\,\\text{k}\\Omega \\). (a) Çıkış DC hatasını, (b) kapalı çevrim bant genişliğini, (c) 5 V tepe sinüs için tam güç bant genişliğini bulun.</p>`,
      cozum: `
        <p>(a) Kazanç \\( 1+R_f/R_1=10 \\). Ofset: \\( 10\\cdot2\\,\\text{mV}=20\\,\\text{mV} \\). Kutuplama akımı \\( R_f\\parallel R_1=9\\,\\text{k}\\Omega \\) üzerinden \\( I_BR=0.9\\,\\text{mV} \\) giriş hatası → çıkışta 9 mV
        (evirmeyen girişe de 9 kΩ konursa iptal olur, kalan yalnızca ofset akımı). Toplam ≈ <b>29 mV</b> en kötü durum.</p>
        <p>(b) \\( f_{-3dB}=\\text{GBW}/A_{cl}=1\\,\\text{MHz}/10=\\mathbf{100\\;kHz} \\).</p>
        <p>(c) \\( f_{max}=\\dfrac{SR}{2\\pi\\hat V_o}=\\dfrac{10^6}{2\\pi\\cdot5}\\approx\\mathbf{31.8\\;kHz} \\) — küçük sinyal bandı 100 kHz olsa da 5 V genlikte 32 kHz üstünde sinüs üçgene döner.
        Büyük sinyal sınırı (slew) ile küçük sinyal sınırı (GBW) ayrı ayrı kontrol edilmelidir.</p>`
    }
  ]
};
