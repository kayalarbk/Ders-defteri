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
  ozet: "BJT/MOSFET yüksek frekans modelleri ve Miller etkisi; frekans yanıtı (alçak/yüksek); çok katlı ve fark kuvvetlendiriciler; akım aynaları; geri besleme topolojileri, kararlılık ve kompanzasyon; osilatörler; güç kuvvetlendiricileri.",
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
      baslik: "8. Geri Besleme (Feedback) Topolojileri",
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
      baslik: "9. Geri Beslemede Kararlılık ve Kompanzasyon",
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
      baslik: "10. Osilatörler",
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
      baslik: "11. Güç Kuvvetlendiricileri",
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
    { ad: "Jonksiyon Sıcaklığı", formul: `\\( T_J=T_A+P_D(\\theta_{JC}+\\theta_{CS}+\\theta_{SA}) \\)`, aciklama: "Güç katında ısıl tasarım zinciri." }
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
      tip: "vize",
      soru: `<p>Açık çevrim kazancı \\( A=1000 \\), geri besleme oranı \\( \\beta=0.01 \\) olan
             negatif geri beslemeli kuvvetlendiricinin kapalı çevrim kazancı \\( A_f \\) nedir?</p>`,
      cozum: `
        \\[ A_f=\\frac{A}{1+A\\beta}=\\frac{1000}{1+1000\\cdot 0.01}=\\frac{1000}{11}\\approx 90.9 \\]
        <p>Geri besleme kazancı düşürür ama kararlılığı ve bant genişliğini artırır.</p>`
    },
    {
      tip: "vize",
      soru: `<p>Bir BJT'de \\( g_m=40\\,\\text{mS} \\), \\( C_\\pi=10\\,\\text{pF} \\), \\( C_\\mu=1\\,\\text{pF} \\).
             Geçiş frekansı \\( f_T \\) nedir?</p>`,
      cozum: `
        \\[ f_T=\\frac{g_m}{2\\pi(C_\\pi+C_\\mu)}=\\frac{0.04}{2\\pi(11\\times10^{-12})}\\approx 5.8\\times10^{8}\\,\\text{Hz}\\approx 580\\,\\text{MHz} \\]`
    },
    {
      tip: "vize",
      soru: `<p>Gerilim kazancı \\( A_v=-100 \\) olan bir katta \\( C_\\mu=1\\,\\text{pF} \\).
             Miller etkisiyle girişe yansıyan kapasitans nedir?</p>`,
      cozum: `
        \\[ C_M=C_\\mu(1+|A_v|)=1\\,\\text{pF}\\cdot(1+100)=101\\,\\text{pF} \\]
        <p>Küçük bir \\( C_\\mu \\), girişte 100 kat büyür → yüksek frekans yanıtını ciddi biçimde sınırlar.</p>`
    },
    {
      tip: "vize",
      soru: `<p>Fark kazancı \\( A_d=2000 \\), ortak mod kazancı \\( A_{cm}=0.2 \\) olan bir fark
             kuvvetlendiricisinin CMRR değeri kaç dB'dir?</p>`,
      cozum: `
        \\[ \\mathrm{CMRR}=\\frac{A_d}{A_{cm}}=\\frac{2000}{0.2}=10^4 \\]
        \\[ \\mathrm{CMRR_{dB}}=20\\log(10^4)=80\\,\\text{dB} \\]`
    },
    {
      tip: "final",
      soru: `<p>Orta bant kazancı \\( A_M=100 \\) ve üst kesim \\( f_H=1\\,\\text{MHz} \\) olan bir kuvvetlendiriciye
             geri besleme uygulanıp kazanç 10'a düşürülüyor. Yeni bant genişliği yaklaşık nedir?</p>`,
      cozum: `
        <p>GBW yaklaşık sabittir: \\( \\text{GBW}=A_M f_H=100\\cdot1\\,\\text{MHz}=100\\,\\text{MHz} \\).</p>
        \\[ f_{H,f}=\\frac{\\text{GBW}}{A_f}=\\frac{100\\,\\text{MHz}}{10}=10\\,\\text{MHz} \\]
        <p>Kazancı 10 kat düşürmek, bandı 10 kat genişletti.</p>`
    },
    {
      tip: "final",
      soru: `<p>Bir Wien köprüsü osilatöründe \\( R=10\\,\\text{k}\\Omega \\), \\( C=10\\,\\text{nF} \\).
             Salınım frekansı ve Barkhausen'e göre gereken minimum kazanç nedir?</p>`,
      cozum: `
        \\[ f=\\frac{1}{2\\pi RC}=\\frac{1}{2\\pi(10^4)(10^{-8})}\\approx 1592\\,\\text{Hz} \\]
        <p>Wien köprüsünde geri besleme oranı \\( \\beta=1/3 \\) olduğundan Barkhausen için
        \\( |A\\beta|=1\\Rightarrow A=3 \\) (minimum kazanç 3).</p>`
    },
    {
      tip: "final",
      soru: `<p>B sınıfı push-pull çıkış katı \\( V_{CC}=\\pm20\\,\\text{V} \\) ile \\( R_L=8\\,\\Omega \\) yükü sürüyor.
             Maksimum çıkış gücü ve ideal verim nedir?</p>`,
      cozum: `
        \\[ P_{o,max}=\\frac{V_{CC}^2}{2R_L}=\\frac{20^2}{2\\cdot8}=\\frac{400}{16}=25\\,\\text{W} \\]
        <p>İdeal B sınıfı maksimum verimi \\( \\eta_{max}=\\dfrac{\\pi}{4}\\approx\\%78.5 \\).</p>`
    },
    {
      tip: "final",
      soru: `<p>Üç katlı bir kuvvetlendiricinin kat kazançları \\( A_1=10 \\), \\( A_2=20 \\), \\( A_3=5 \\).
             Toplam kazanç kaçtır (mutlak ve dB)?</p>`,
      cozum: `
        \\[ A=A_1 A_2 A_3=10\\cdot20\\cdot5=1000 \\]
        \\[ A_{dB}=20\\log(1000)=60\\,\\text{dB} \\]`
    }
  ]
};