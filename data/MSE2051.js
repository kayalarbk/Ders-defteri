/* ============================================================
   MSE2051 — Materials Science (Alttan Ders)
   ------------------------------------------------------------
   Bu dosya SADECE bu derse aittir. İçerik eklemek için burayı düzenle.
   Alan açıklamaları için data/EE3061.js başlığına bak.

   Kapsam: Callister "Materials Science and Engineering: An Introduction"
   temel alınarak bir dönemlik giriş dersinin çekirdek konuları.
   ============================================================ */

window.DERSLER = window.DERSLER || {};

window.DERSLER["MSE2051"] = {
  ad: "Materials Science",
  donem: "Alttan Ders",
  renk: "#FBBF24",
  ozet: "Malzeme sınıfları ve yapı–özellik ilişkisi; atomik bağlar, kristal yapılar ve Miller indisleri; kusurlar ve difüzyon; mekanik özellikler ve güçlendirme; hasar (kırılma, yorulma, sürünme); faz diyagramları ve ısıl işlemler; seramik/polimer/kompozit; elektriksel, termal, manyetik, optik özellikler ve korozyon.",
  konular: [
    {
      baslik: "0. Giriş: Malzeme Sınıfları ve Yapı–Özellik İlişkisi",
      icerik: `
        <p>Malzeme biliminin temel paradigması dört ayaklıdır ve hepsi birbirini belirler:</p>
        <p style="text-align:center"><b>İşleme (Processing) → Yapı (Structure) → Özellikler (Properties) → Performans</b></p>
        <p>"Yapı" farklı ölçeklerde incelenir: atom-altı (elektron), atomik (bağ/kristal),
        mikroskobik (tane, faz) ve makroskobik (bulk). Aynı bileşimin işlenişi değişince
        yapısı, dolayısıyla özellikleri değişir (örn. yavaş/hızlı soğutulmuş çelik).</p>
        <p>Altı temel özellik ailesi: <b>mekanik, elektriksel, termal, manyetik, optik ve
        bozunma (korozyon)</b>.</p>
        <p>Ana malzeme sınıfları:</p>
        <ul>
          <li><b>Metaller:</b> metalik bağ; sünek, iletken, opak, yüksek yoğunluk/sertlik.</li>
          <li><b>Seramikler:</b> iyonik/kovalent bağ; sert, kırılgan, ısı/kimyasal dayanıklı, yalıtkan.</li>
          <li><b>Polimerler:</b> kovalent + zayıf ikincil bağ; hafif, düşük ergime, esnek, yalıtkan.</li>
          <li><b>Kompozitler:</b> iki veya daha fazla sınıfın birleşimi (matris + takviye).</li>
          <li><b>Yarı iletkenler:</b> ara iletkenlik; elektroniğin temeli (Si, GaAs).</li>
          <li><b>Biyomalzemeler / ileri malzemeler:</b> uygulamaya özgü.</li>
        </ul>`
    },
    {
      baslik: "1. Atomik Yapı ve Bağlar",
      icerik: `
        <p>Atomlar dengeye, bağ enerjisinin minimum olduğu <b>denge atomlar arası mesafede</b>
        \\( r_0 \\) yerleşir. Çekme ve itme kuvvetlerinin toplamı burada sıfırdır:</p>
        \\[ E_N=E_A+E_R=-\\frac{A}{r}+\\frac{B}{r^n} \\]
        <p>Kuyunun <b>derinliği</b> \\(E_0\\) ergime sıcaklığını, <b>dibindeki eğrilik</b> (kuvvet–mesafe
        eğrisinin \\(r_0\\)'daki eğimi) ise elastisite modülü \\(E\\)'yi belirler. Kuyunun asimetrisi
        ısıl genleşme katsayısını verir.</p>
        <p><b>Birincil (kuvvetli) bağlar:</b></p>
        <ul>
          <li><b>İyonik:</b> metal→ametal elektron transferi (NaCl). Yönsüz, güçlü; sert, kırılgan, yalıtkan.</li>
          <li><b>Kovalent:</b> elektron paylaşımı (elmas, Si, SiC). Yönlü ve çok güçlü → yüksek sertlik ve ergime.</li>
          <li><b>Metalik:</b> serbest "elektron denizi". Yönsüz; iletkenlik, süneklik ve parlaklık sağlar.</li>
        </ul>
        <p><b>İkincil (zayıf) bağlar:</b> Van der Waals ve <b>hidrojen bağı</b> (H₂O, polimer zincirleri
        arası). Çok daha zayıftır ama polimerlerin ve moleküler katıların özelliklerini belirler.</p>`
    },
    {
      baslik: "2. Kristal Yapılar (BCC, FCC, HCP)",
      icerik: `
        <p><b>Kristalin</b> katıda atomlar uzun mesafede periyodik dizilir; <b>amorf</b> katıda dizilmez.
        Yapı, <b>birim hücre</b> ile tanımlanır. Atomik dolgu faktörü (APF):</p>
        \\[ APF=\\frac{n\\cdot V_{atom}}{V_{birim\\;hücre}} \\]
        <p>Metaller çoğunlukla üç sıkı yapıda kristalleşir:</p>
        <ul>
          <li><b>BCC</b> (Fe-α, Cr, W, Mo): 2 atom/hücre, koordinasyon sayısı (CN)=8, APF=0.68, \\( a=\\dfrac{4R}{\\sqrt3} \\)</li>
          <li><b>FCC</b> (Al, Cu, Ni, Ag, Au, Fe-γ): 4 atom/hücre, CN=12, APF=0.74, \\( a=2R\\sqrt2 \\)</li>
          <li><b>HCP</b> (Mg, Ti, Zn, Zr): 6 atom/hücre, CN=12, APF=0.74, ideal \\( c/a\\approx1.633 \\)</li>
        </ul>
        <p>FCC ve HCP en sıkı istiflemedir (%74). Teorik <b>yoğunluk</b>:</p>
        \\[ \\rho=\\frac{nA}{V_C N_A} \\]
        <p>\\(n\\): hücredeki atom sayısı, \\(A\\): atom ağırlığı, \\(V_C\\): hücre hacmi, \\(N_A\\): Avogadro sayısı.
        Bazı elementler sıcaklıkla yapı değiştirir (<b>allotropi/polimorfizm</b>; Fe: α→γ).</p>`
    },
    {
      baslik: "3. Kristalografik Yönler ve Düzlemler (Miller İndisleri)",
      icerik: `
        <p>Yönler <b>[uvw]</b>, düzlemler <b>(hkl)</b> ile gösterilir; ailelerde &lt;uvw&gt; ve {hkl} kullanılır.</p>
        <p><b>Yön indisleri:</b> baş–son koordinat farkını al, ortak kesirden kurtar, en küçük tam sayıya indir;
        negatif bileşen üstüne çizgi konur.<br>
        <b>Düzlem indisleri:</b> eksen kesişimlerini al, terslerini hesapla, tam sayıya indir.</p>
        <p><b>Lineer yoğunluk</b> (birim uzunluktaki atom) ve <b>düzlemsel yoğunluk</b> (birim alandaki atom)
        kayma sistemlerini belirler. Kübik sistemde düzlemler arası mesafe:</p>
        \\[ d_{hkl}=\\frac{a}{\\sqrt{h^2+k^2+l^2}} \\]
        <p>Kristal yapı <b>X-ışını kırınımı (XRD)</b> ile belirlenir; yapıcı girişim koşulu Bragg yasasıdır:</p>
        \\[ n\\lambda=2d\\sin\\theta \\]`
    },
    {
      baslik: "4. Kusurlar (Kristal Kusurları)",
      icerik: `
        <p>Gerçek kristaller kusursuz değildir; kusurlar özellikleri güçlü biçimde etkiler.</p>
        <p><b>Noktasal kusurlar:</b> boşluk (vacancy), arayer (interstitial), yeralan (substitutional)
        katı çözelti atomları. Denge boşluk derişimi Boltzmann dağılımıyla artar:</p>
        \\[ \\frac{N_v}{N}=\\exp\\!\\Big(-\\frac{Q_v}{kT}\\Big) \\]
        <p><b>Çizgisel kusurlar (dislokasyonlar):</b> kenar, vida ve karışık tipler; <b>Burgers vektörü</b> ile
        tanımlanır. Plastik deformasyonun taşıyıcısıdır — metallerin teorikten çok daha düşük gerilmede
        akmasının nedeni budur.</p>
        <p><b>Düzlemsel kusurlar:</b> tane sınırları, ikiz sınırları, serbest yüzeyler.</p>
        <p><b>Hacimsel kusurlar:</b> gözenek, çatlak, kalıntı. Ayrıca katı çözeltiler ve stokiyometri sapmaları.</p>
        <p>Mikroyapı optik/elektron mikroskoplarıyla incelenir; taneler <b>dağlama (etching)</b> ile ortaya çıkar.</p>`
    },
    {
      baslik: "5. Difüzyon",
      icerik: `
        <p>Difüzyon, atomların sıcaklıkla aktive olan kütle taşınımıdır (boşluk ve arayer mekanizmaları).
        Karbürleme, çökelme sertleşmesi ve ısıl işlemlerin temelidir.</p>
        <p><b>Fick'in 1. yasası (kararlı hal):</b> akı, derişim gradyanı ile orantılıdır.</p>
        \\[ J=-D\\frac{dC}{dx} \\]
        <p><b>Fick'in 2. yasası (kararsız hal):</b> yarı sonsuz katı, sabit yüzey derişimi için çözüm
        hata fonksiyonu (erf) ile verilir:</p>
        \\[ \\frac{C_x-C_0}{C_s-C_0}=1-\\mathrm{erf}\\!\\Big(\\frac{x}{2\\sqrt{Dt}}\\Big) \\]
        <p>Difüzyon katsayısı sıcaklıkla üstel artar (<b>Arrhenius</b>):</p>
        \\[ D=D_0\\exp\\!\\Big(-\\frac{Q_d}{RT}\\Big) \\]
        <p>Arayer difüzyonu (küçük C, N atomları) yeralan difüzyonundan çok daha hızlıdır.</p>`
    },
    {
      baslik: "6. Mekanik Özellikler (Gerilme–Şekil Değiştirme)",
      icerik: `
        <p>Tek eksenli çekme testinden temel büyüklükler elde edilir:</p>
        \\[ \\sigma=\\frac{F}{A_0}, \\qquad \\varepsilon=\\frac{\\Delta l}{l_0} \\]
        <p>Elastik (geri dönüşlü) bölgede <b>Hooke yasası</b>: \\( \\sigma=E\\varepsilon \\).
        Yanal daralma <b>Poisson oranı</b> ile: \\( \\nu=-\\varepsilon_{yanal}/\\varepsilon_{eksenel} \\).
        Kayma için \\( \\tau=G\\gamma \\), izotropik malzemede \\( G=\\dfrac{E}{2(1+\\nu)} \\).</p>
        <ul>
          <li><b>Akma dayanımı</b> \\( \\sigma_y \\): plastik akmanın başladığı gerilme (%0.2 ofset yöntemi).</li>
          <li><b>Çekme dayanımı (UTS):</b> mühendislik eğrisinin maksimumu; sonrası boyun verme (necking).</li>
          <li><b>Süneklik:</b> %uzama veya %kesit daralması; kırılgan ↔ sünek ayrımı.</li>
          <li><b>Tokluk:</b> eğri altındaki toplam alan (kırılana kadar soğurulan enerji).</li>
          <li><b>Rezilyans:</b> elastik bölge altındaki alan.</li>
        </ul>
        <p><b>Gerçek</b> gerilme/şekil değiştirme boyun vermeyi de kapsar:</p>
        \\[ \\sigma_T=\\sigma(1+\\varepsilon), \\quad \\varepsilon_T=\\ln(1+\\varepsilon), \\quad \\sigma_T=K\\,\\varepsilon_T^{\\,n} \\]
        <p><b>Sertlik</b> (yüzeysel deformasyona direnç): Brinell, Rockwell, Vickers, Knoop; UTS ile kabaca orantılıdır.</p>`
    },
    {
      baslik: "7. Dislokasyonlar ve Güçlendirme Mekanizmaları",
      icerik: `
        <p>Plastik deformasyon, dislokasyonların <b>kayma düzlemleri</b> boyunca hareketiyle olur.
        Kayma en sıkı düzlem/yön çiftinde başlar. Bir kayma sistemi için çözülmüş kayma gerilmesi
        (<b>Schmid yasası</b>):</p>
        \\[ \\tau_R=\\sigma\\cos\\phi\\cos\\lambda \\]
        <p>Malzemeyi güçlendirmek = dislokasyon hareketini zorlaştırmak:</p>
        <ul>
          <li><b>Tane küçültme:</b> tane sınırları engel oluşturur (<b>Hall–Petch</b>):
          \\( \\sigma_y=\\sigma_0+k_y\\,d^{-1/2} \\)</li>
          <li><b>Katı çözelti sertleşmesi:</b> yabancı atomlar kafesi bozar, gerilme alanı yaratır.</li>
          <li><b>Deformasyon sertleşmesi (soğuk işlem):</b> dislokasyon yoğunluğu artar, birbirini kilitler.</li>
          <li><b>Çökelti/dispersiyon sertleşmesi:</b> ince ikinci faz parçacıkları (örn. yaşlandırma).</li>
        </ul>
        <p><b>Toparlanma, yeniden kristalleşme ve tane büyümesi:</b> soğuk işlenmiş metal ısıtılınca
        gerilmeler azalır, yeni gerilmesiz taneler oluşur ve büyür (tavlama).</p>`
    },
    {
      baslik: "8. Hasar: Kırılma, Yorulma ve Sürünme",
      icerik: `
        <p><b>Kırılma</b> sünek (enerji soğuran, boyun veren) veya kırılgan (ani, düşük enerji) olabilir.
        Çatlak ucundaki gerilme yığılması hasarı başlatır:</p>
        \\[ \\sigma_m=2\\sigma_0\\sqrt{\\frac{a}{\\rho_t}} \\]
        <p><b>Kırılma tokluğu</b> malzemenin çatlağa karşı direncidir; kritik koşul:</p>
        \\[ K_{IC}=Y\\,\\sigma\\sqrt{\\pi a} \\]
        <p><b>Sünek–kırılgan geçiş sıcaklığı (DBTT):</b> BCC metaller ve seramikler düşük sıcaklıkta
        kırılganlaşır (Charpy/Izod darbe testi). FCC metaller genelde bu geçişi göstermez.</p>
        <p><b>Yorulma:</b> tekrarlı yükleme altında, akma altındaki gerilmelerde bile çatlak ilerlemesi.
        S–N eğrisiyle karakterize edilir; bazı çeliklerde bir <b>yorulma sınırı</b> vardır.</p>
        <p><b>Sürünme:</b> yüksek sıcaklıkta sabit yük altında zamanla kalıcı deformasyon. Kararlı hal
        sürünme hızı:</p>
        \\[ \\dot{\\varepsilon}_s=K\\,\\sigma^{n}\\exp\\!\\Big(-\\frac{Q_c}{RT}\\Big) \\]`
    },
    {
      baslik: "9. Faz Diyagramları ve Demir–Karbon Sistemi",
      icerik: `
        <p><b>Faz diyagramı</b> denge fazlarını sıcaklık–bileşim düzleminde gösterir.
        Serbestlik derecesi <b>Gibbs faz kuralı</b> ile: \\( P+F=C+2 \\) (sabit basınçta \\( P+F=C+1 \\)).</p>
        <p>İki fazlı bölgede: bileşimler <b>bağ çizgisiyle</b>, faz miktarları <b>kaldıraç kuralıyla</b>:</p>
        \\[ W_\\alpha=\\frac{C_L-C_0}{C_L-C_\\alpha}, \\qquad W_L=\\frac{C_0-C_\\alpha}{C_L-C_\\alpha} \\]
        <p><b>Değişmez reaksiyonlar:</b> ötektik (\\(L\\to\\alpha+\\beta\\)), ötektoid (\\(\\gamma\\to\\alpha+\\beta\\)),
        peritektik (\\(L+\\alpha\\to\\beta\\)).</p>
        <p><b>Fe–Fe₃C sistemi:</b> ötektoid nokta <b>727&nbsp;°C, %0.76 C</b> →
        <b>perlit</b> (α-ferrit + sementit Fe<sub>3</sub>C lamelleri). Ötektik: <b>1147&nbsp;°C, %4.3 C</b>.
        %0.76'nın altı hipoötektoid, üstü hiperötektoid çeliktir; %2.14 üstü dökme demirdir.</p>`
    },
    {
      baslik: "10. Faz Dönüşümleri ve Isıl İşlemler",
      icerik: `
        <p>Dönüşüm hızı çekirdeklenme + büyüme ile belirlenir; toplam dönüşüm oranı sigmoidaldir
        (<b>Avrami</b>): \\( y=1-\\exp(-kt^{\\,n}) \\).</p>
        <p><b>İzotermal dönüşüm (TTT) ve sürekli soğuma (CCT)</b> diyagramları, soğuma hızına göre
        oluşan iç yapıyı verir:</p>
        <ul>
          <li><b>Kaba perlit:</b> yavaş soğuma (yüksek T'de dönüşüm) — yumuşak.</li>
          <li><b>İnce perlit / beynit:</b> orta soğuma — daha sert/tok.</li>
          <li><b>Martenzit:</b> hızlı su verme (difüzyonsuz, kesme dönüşümü) — çok sert ama kırılgan.</li>
        </ul>
        <p><b>Temperleme (menevişleme):</b> martenzit ısıtılarak ince sementit çökeltilir; sertlik bir miktar
        azalır, tokluk kazandırılır. <b>Sertleşebilirlik</b> (Jominy testi) ne kadar derine martenzit
        oluşacağını gösterir.</p>
        <p>Alüminyum alaşımlarında <b>çökelme (yaşlandırma) sertleşmesi:</b> çözeltiye alma → su verme →
        yapay/doğal yaşlandırma ile ince eş fazlı çökeltiler.</p>`
    },
    {
      baslik: "11. Seramikler ve Camlar",
      icerik: `
        <p>İyonik/kovalent bağlı bileşiklerdir; kristal yapı yük dengesi ve <b>yarıçap oranı</b>
        \\( r_{katyon}/r_{anyon} \\) ile belirlenen koordinasyona dayanır (NaCl, CsCl, çinkoblend, florit yapıları).</p>
        <ul>
          <li><b>Mekanik:</b> çok sert, yüksek ergime, ama <b>kırılgan</b> (dislokasyon hareketi kısıtlı).
          Çekmede zayıf, basmada güçlü; gözenek/çatlaklar dayanımı düşürür.</li>
          <li><b>Türler:</b> geleneksel (kil, porselen), teknik seramikler (Al₂O₃, SiC, Si₃N₄, ZrO₂),
          refrakterler, aşındırıcılar, çimento.</li>
          <li><b>Camlar:</b> amorf (silika esaslı); <b>cam geçiş sıcaklığı</b> \\(T_g\\) ile yumuşar,
          şekillendirme viskozite–sıcaklık ilişkisine bağlıdır. Isıl temperleme ve kimyasal
          sertleştirme dayanımı artırır.</li>
        </ul>`
    },
    {
      baslik: "12. Polimerler",
      icerik: `
        <p>Uzun kovalent zincirlerden oluşan makromoleküller (monomerlerin polimerleşmesi:
        katılma veya kondenzasyon). <b>Sayı/ağırlık ortalama molekül ağırlığı</b> ve
        <b>polimerleşme derecesi</b> özellikleri belirler.</p>
        <ul>
          <li><b>Termoplastikler:</b> zincirler ikincil bağlarla tutulur; ısıtınca yumuşar, tekrar şekillenir
          (PE, PP, PVC, PS, PET). Geri dönüştürülebilir.</li>
          <li><b>Termosetler:</b> çapraz bağlı ağ; ısıtınca yumuşamaz, bozunur (epoksi, fenolik). Sert, dayanıklı.</li>
          <li><b>Elastomerler:</b> hafif çapraz bağlı, büyük geri dönüşlü uzama (lastik).</li>
        </ul>
        <p><b>Kristallik:</b> polimerler kısmen kristalindir; kristallik arttıkça yoğunluk, sertlik ve dayanım artar.
        Mekanik davranış sıcaklık ve zaman/gerinim hızına bağlıdır (<b>viskoelastisite</b>);
        \\(T_g\\) altında camsı/kırılgan, üstünde kauçuğumsudur.</p>`
    },
    {
      baslik: "13. Kompozitler",
      icerik: `
        <p>Matris + takviye fazının birleşimi; amaç tek malzemenin veremediği özellik kombinasyonu
        (yüksek dayanım/ağırlık oranı).</p>
        <ul>
          <li><b>Parçacık takviyeli:</b> beton, sermetler.</li>
          <li><b>Fiber takviyeli:</b> cam/karbon/aramid fiber + polimer matris. Fiber yönü ve boyu kritiktir.</li>
          <li><b>Yapısal:</b> lamine (kontrplak, katmanlı fiber), sandviç paneller.</li>
        </ul>
        <p><b>Karışım kuralı</b> — yükleme fibere paralel (izo-gerinim, üst sınır) ve dik (izo-gerilme, alt sınır):</p>
        \\[ E_{c\\parallel}=E_mV_m+E_fV_f, \\qquad \\frac{1}{E_{c\\perp}}=\\frac{V_m}{E_m}+\\frac{V_f}{E_f} \\]
        <p>Yük fiberlere matris–fiber ara yüzeyindeki kayma gerilmesiyle aktarılır; kritik fiber boyu bunu belirler.</p>`
    },
    {
      baslik: "14. Elektriksel Özellikler",
      icerik: `
        <p>Ohm yasasının malzeme formu ve iletkenlik/özdirenç:</p>
        \\[ J=\\sigma\\,\\mathcal{E}, \\qquad \\sigma=\\frac{1}{\\rho}=n\\,|e|\\,\\mu \\]
        <p>\\(n\\): yük taşıyıcı yoğunluğu, \\(\\mu\\): mobilite. <b>Bant teorisi:</b> dolu değerlik bandı ile boş
        iletim bandı arasındaki <b>yasak enerji aralığı \\(E_g\\)</b> sınıfı belirler:</p>
        <ul>
          <li><b>İletken (metal):</b> bantlar örtüşür/yarı dolu → çok yüksek \\(\\sigma\\).</li>
          <li><b>Yarı iletken:</b> küçük \\(E_g\\) (Si ~1.1 eV, GaAs ~1.4 eV); iletkenlik sıcaklıkla artar.</li>
          <li><b>Yalıtkan:</b> büyük \\(E_g\\) → çok az taşıyıcı.</li>
        </ul>
        <p>Metalde özdirenç kusur ve sıcaklıkla artar (<b>Matthiessen kuralı</b>):
        \\( \\rho_{top}=\\rho_{ısıl}+\\rho_{safsızlık}+\\rho_{deformasyon} \\).</p>
        <p>Yarı iletkende iki taşıyıcı: \\( \\sigma=n|e|\\mu_e+p|e|\\mu_h \\). <b>Katkılama (doping):</b>
        n-tipi (verici, örn. Si'ye P) ve p-tipi (alıcı, örn. Si'ye B). p–n eklemi diyot/transistörün temelidir.
        Ayrıca dielektrikler, kapasitans ve piezoelektrik davranış bu başlıkta ele alınır.</p>`
    },
    {
      baslik: "15. Termal, Manyetik ve Optik Özellikler",
      icerik: `
        <p><b>Termal:</b></p>
        <ul>
          <li><b>Isı kapasitesi</b> \\(C_p\\): kafes titreşimleri (fononlar); düşük T'de Debye \\(T^3\\) yasası.</li>
          <li><b>Isıl genleşme:</b> \\( \\dfrac{\\Delta l}{l_0}=\\alpha_l\\,\\Delta T \\); bağ kuyusunun asimetrisinden gelir.</li>
          <li><b>Isıl iletkenlik:</b> \\( q=-k\\dfrac{dT}{dx} \\); metallerde elektronlar, seramiklerde fononlar taşır.</li>
        </ul>
        <p><b>Manyetik:</b> diamanyetik ve paramanyetik (zayıf) ile ferromanyetik/ferrimanyetik (güçlü, örn. Fe, ferritler).
        Domainler, histerezis eğrisi (\\(H_c\\), \\(B_r\\)), yumuşak (transformatör) ↔ sert (kalıcı mıknatıs) malzeme ayrımı.</p>
        <p><b>Optik:</b> yansıma, soğurma, geçirgenlik. Metaller opaktır (serbest elektronlar);
        büyük \\(E_g\\)'li seramikler görünür ışığa saydamdır. Işık yayımı (lüminesans, LED, lazer) ve
        kırılma indisi bu başlıktadır.</p>`
    },
    {
      baslik: "16. Korozyon ve Bozunma",
      icerik: `
        <p><b>Metal korozyonu</b> elektrokimyasaldır: anot (oksidasyon, metal çözünür) + katot (indirgenme).
        Yarı reaksiyonlar ve standart elektrot potansiyelleri galvanik seriyi tanımlar; asal metal daha az korozyona uğrar.</p>
        <ul>
          <li><b>Biçimler:</b> üniform, galvanik, çukurcuk (pitting), tanelerarası, gerilmeli korozyon çatlaması, erozyon.</li>
          <li><b>Önlem:</b> malzeme seçimi, kaplama/boya, <b>katodik koruma</b> (feda anot), inhibitörler, pasivasyon (paslanmaz çelikte Cr₂O₃ filmi).</li>
        </ul>
        <p><b>Seramiklerde</b> bozunma genelde yüksek sıcaklıkta kimyasal saldırıyla; <b>polimerlerde</b> şişme,
        çözünme, UV/ısıl bozunma (zincir kopması) şeklindedir.</p>`
    }
  ],
  formuller: [
    { ad: "Atomik Dolgu Faktörü (APF)", formul: `\\( APF=\\dfrac{n\\,V_{atom}}{V_{hücre}} \\)`, aciklama: "FCC/HCP=0.74, BCC=0.68, basit kübik=0.52." },
    { ad: "Yoğunluk (Kristal)", formul: `\\( \\rho=\\dfrac{nA}{V_C N_A} \\)`, aciklama: "n: hücredeki atom, A: atom ağırlığı, N_A: Avogadro." },
    { ad: "BCC / FCC Kenar", formul: `\\( a_{BCC}=\\tfrac{4R}{\\sqrt3},\\; a_{FCC}=2R\\sqrt2 \\)`, aciklama: "Atom yarıçapı R ile hücre kenarı ilişkisi." },
    { ad: "Düzlemler Arası Mesafe", formul: `\\( d_{hkl}=\\dfrac{a}{\\sqrt{h^2+k^2+l^2}} \\)`, aciklama: "Kübik sistem." },
    { ad: "Bragg Yasası", formul: `\\( n\\lambda=2d\\sin\\theta \\)`, aciklama: "X-ışını kırınımı yapıcı girişim koşulu." },
    { ad: "Boşluk Derişimi", formul: `\\( \\dfrac{N_v}{N}=e^{-Q_v/kT} \\)`, aciklama: "Denge noktasal kusur yoğunluğu." },
    { ad: "Fick'in 1. Yasası", formul: `\\( J=-D\\dfrac{dC}{dx} \\)`, aciklama: "Kararlı hal difüzyon akısı." },
    { ad: "Fick'in 2. Yasası (erf)", formul: `\\( \\dfrac{C_x-C_0}{C_s-C_0}=1-\\mathrm{erf}\\!\\big(\\tfrac{x}{2\\sqrt{Dt}}\\big) \\)`, aciklama: "Kararsız hal (karbürleme vb.)." },
    { ad: "Arrhenius Difüzyon", formul: `\\( D=D_0 e^{-Q_d/RT} \\)`, aciklama: "Difüzyon katsayısının sıcaklıkla değişimi." },
    { ad: "Mühendislik Gerilmesi / Şekil Değ.", formul: `\\( \\sigma=\\dfrac{F}{A_0},\\; \\varepsilon=\\dfrac{\\Delta l}{l_0} \\)`, aciklama: "İlk kesit/boy referans alınır." },
    { ad: "Hooke Yasası", formul: `\\( \\sigma=E\\varepsilon \\)`, aciklama: "Elastik bölge; E: elastisite modülü." },
    { ad: "Poisson & Kayma Modülü", formul: `\\( \\nu=-\\tfrac{\\varepsilon_{yanal}}{\\varepsilon_{ekse}},\\; G=\\tfrac{E}{2(1+\\nu)} \\)`, aciklama: "Yanal daralma ve kayma esnekliği." },
    { ad: "Gerçek Gerilme–Şekil Değ.", formul: `\\( \\sigma_T=\\sigma(1+\\varepsilon),\\; \\varepsilon_T=\\ln(1+\\varepsilon) \\)`, aciklama: "Boyun vermeyi de kapsar." },
    { ad: "Deformasyon Sertleşmesi", formul: `\\( \\sigma_T=K\\varepsilon_T^{\\,n} \\)`, aciklama: "n: pekleşme üsteli." },
    { ad: "Hall–Petch", formul: `\\( \\sigma_y=\\sigma_0+k_y d^{-1/2} \\)`, aciklama: "Tane küçültme ile dayanım artışı." },
    { ad: "Schmid Yasası", formul: `\\( \\tau_R=\\sigma\\cos\\phi\\cos\\lambda \\)`, aciklama: "Çözülmüş kayma gerilmesi." },
    { ad: "Kırılma Tokluğu", formul: `\\( K_{IC}=Y\\sigma\\sqrt{\\pi a} \\)`, aciklama: "Kritik çatlak koşulu." },
    { ad: "Sürünme Hızı", formul: `\\( \\dot\\varepsilon_s=K\\sigma^{n}e^{-Q_c/RT} \\)`, aciklama: "Kararlı hal yüksek sıcaklık sürünmesi." },
    { ad: "Kaldıraç Kuralı", formul: `\\( W_\\alpha=\\dfrac{C_L-C_0}{C_L-C_\\alpha} \\)`, aciklama: "İki fazlı bölgede faz oranı." },
    { ad: "Gibbs Faz Kuralı", formul: `\\( P+F=C+2 \\)`, aciklama: "Sabit basınçta P+F=C+1." },
    { ad: "Karışım Kuralı (Kompozit)", formul: `\\( E_{c\\parallel}=E_mV_m+E_fV_f \\)`, aciklama: "Fibere paralel yükleme (üst sınır)." },
    { ad: "Elektriksel İletkenlik", formul: `\\( \\sigma=\\dfrac{1}{\\rho}=n|e|\\mu \\)`, aciklama: "n: taşıyıcı yoğunluğu, μ: mobilite." },
    { ad: "Yarı İletken İletkenliği", formul: `\\( \\sigma=n|e|\\mu_e+p|e|\\mu_h \\)`, aciklama: "Elektron + boşluk katkısı." },
    { ad: "Isıl Genleşme", formul: `\\( \\dfrac{\\Delta l}{l_0}=\\alpha_l\\Delta T \\)`, aciklama: "α_l: doğrusal genleşme katsayısı." },
    { ad: "Isıl İletim (Fourier)", formul: `\\( q=-k\\dfrac{dT}{dx} \\)`, aciklama: "k: ısıl iletkenlik." }
  ],
  galeri: [],
  dokumanlar: [],
  videolar: [
    { baslik: "Taylor Sparks — Intro to Materials Science (Tam Kurs Playlist)", playlist: "PLL0SWcFqypCni--cQcrcRq4jTKoprDx-Z" },
    { baslik: "Callister Ch.9 — Faz Diyagramları Özeti", youtube: "TIO6-zOsPz0" }
  ],
  linkler: [
    { ad: "LearnChemE — Materials Science", url: "https://learncheme.com/screencasts/materials-science/", aciklama: "Callister'a göre kısa çözümlü videolar" },
    { ad: "DoITPoMS (Cambridge)", url: "https://www.doitpoms.ac.uk/", aciklama: "İnteraktif malzeme bilimi dersleri (TLP kütüphanesi)" },
    { ad: "MIT OpenCourseWare", url: "https://ocw.mit.edu/", aciklama: "3.091 Intro to Solid State Chemistry ve ilgili dersler" },
    { ad: "NPTEL", url: "https://nptel.ac.in/", aciklama: "Ücretsiz malzeme bilimi ders serileri" },
    { ad: "MatWeb", url: "https://www.matweb.com/", aciklama: "Malzeme özellik veritabanı" },
    { ad: "Materials Project", url: "https://materialsproject.org/", aciklama: "Hesaplamalı malzeme özellikleri ve kristal yapılar" },
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
      soru: `<p>BCC yapıdaki demirin teorik yoğunluğunu hesaplayın.
             (\\( R=0.124\\,\\text{nm} \\), \\( A_{Fe}=55.85\\,\\text{g/mol} \\))</p>`,
      cozum: `
        <p>BCC: \\( n=2 \\), \\( a=\\dfrac{4R}{\\sqrt3}=\\dfrac{4(0.124)}{\\sqrt3}=0.2864\\,\\text{nm}=2.864\\times10^{-8}\\,\\text{cm} \\)</p>
        \\[ V_C=a^3=2.349\\times10^{-23}\\,\\text{cm}^3 \\]
        \\[ \\rho=\\frac{nA}{V_C N_A}=\\frac{2(55.85)}{(2.349\\times10^{-23})(6.022\\times10^{23})}\\approx 7.90\\,\\text{g/cm}^3 \\]
        <p>Deneysel değer (~7.87 g/cm³) ile uyumludur.</p>`
    },
    {
      tip: "vize",
      soru: `<p>Kesiti \\( A_0=100\\,\\text{mm}^2 \\) olan çubuğa 20 kN çekme kuvveti uygulanıyor.
             \\( E=200\\,\\text{GPa} \\) ise elastik şekil değiştirme yüzdesi nedir?</p>`,
      cozum: `
        \\[ \\sigma=\\frac{F}{A_0}=\\frac{20\\,000}{100\\times10^{-6}}=200\\,\\text{MPa} \\]
        \\[ \\varepsilon=\\frac{\\sigma}{E}=\\frac{200\\times10^6}{200\\times10^9}=0.001 \\]
        <p>Yani şekil değiştirme <b>%0.1</b>. (Elastik → yük kalkınca geri döner.)</p>`
    },
    {
      tip: "vize",
      soru: `<p>Bakırda 1000&nbsp;°C'de denge boşluk (vacancy) derişimini bulun.
             (\\( Q_v=0.90\\,\\text{eV} \\), \\( k=8.62\\times10^{-5}\\,\\text{eV/K} \\))</p>`,
      cozum: `
        <p>\\( T=1273\\,\\text{K} \\):</p>
        \\[ \\frac{N_v}{N}=\\exp\\!\\Big(-\\frac{0.90}{(8.62\\times10^{-5})(1273)}\\Big)
           =\\exp(-8.20)\\approx 2.7\\times10^{-4} \\]
        <p>Yaklaşık her 3700 atomdan biri boşluktur.</p>`
    },
    {
      tip: "vize",
      soru: `<p>γ-demirde (FCC) karbon difüzyon katsayısını 1000&nbsp;°C için hesaplayın.
             (\\( D_0=2.3\\times10^{-5}\\,\\text{m}^2/\\text{s} \\), \\( Q_d=148\\,\\text{kJ/mol} \\),
             \\( R=8.314\\,\\text{J/mol·K} \\))</p>`,
      cozum: `
        <p>\\( T=1273\\,\\text{K} \\):</p>
        \\[ D=(2.3\\times10^{-5})\\exp\\!\\Big(-\\frac{148000}{(8.314)(1273)}\\Big)
           =(2.3\\times10^{-5})e^{-13.98}\\approx 1.9\\times10^{-11}\\,\\text{m}^2/\\text{s} \\]`
    },
    {
      tip: "final",
      soru: `<p>%0.4 C'li çelik 727&nbsp;°C'nin hemen altına yavaş soğutuluyor.
             Ötektoid öncesi (proötektoid) ferrit oranını kaldıraç kuralıyla bulun.
             (\\( C_\\alpha=0.022 \\), \\( C_{ötektoid}=0.76 \\))</p>`,
      cozum: `
        \\[ W_{\\alpha}=\\frac{0.76-0.40}{0.76-0.022}=\\frac{0.36}{0.738}\\approx 0.49 \\]
        <p>Yapının yaklaşık <b>%49'u proötektoid ferrit</b>, kalan %51'i <b>perlit</b>tir.</p>`
    },
    {
      tip: "final",
      soru: `<p>Bakırın oda sıcaklığında iletkenliğini hesaplayın.
             (\\( n=8.5\\times10^{28}\\,\\text{m}^{-3} \\), \\( \\mu_e=4.4\\times10^{-3}\\,\\text{m}^2/\\text{V·s} \\),
             \\( e=1.6\\times10^{-19}\\,\\text{C} \\))</p>`,
      cozum: `
        \\[ \\sigma=n|e|\\mu_e=(8.5\\times10^{28})(1.6\\times10^{-19})(4.4\\times10^{-3})
           \\approx 6.0\\times10^{7}\\,(\\Omega\\cdot\\text{m})^{-1} \\]
        <p>Metallere özgü çok yüksek iletkenlik; bakırın bilinen değeriyle uyumludur.</p>`
    },
    {
      tip: "final",
      soru: `<p>Cam fiber–epoksi kompozitte \\( V_f=0.40 \\), \\( E_f=72.5\\,\\text{GPa} \\),
             \\( E_m=2.4\\,\\text{GPa} \\). Fibere <b>paralel</b> ve <b>dik</b> elastisite modüllerini bulun.</p>`,
      cozum: `
        <p>Paralel (üst sınır, izo-gerinim):</p>
        \\[ E_{c\\parallel}=E_fV_f+E_mV_m=72.5(0.40)+2.4(0.60)=30.4\\,\\text{GPa} \\]
        <p>Dik (alt sınır, izo-gerilme):</p>
        \\[ \\frac{1}{E_{c\\perp}}=\\frac{0.40}{72.5}+\\frac{0.60}{2.4}=0.2555
           \\;\\Rightarrow\\; E_{c\\perp}\\approx 3.9\\,\\text{GPa} \\]
        <p>Yön anizotropisi belirgindir: fiber yönü çok daha rijittir.</p>`
    },
    {
      tip: "final",
      soru: `<p>\\( K_{IC}=50\\,\\text{MPa}\\sqrt{\\text{m}} \\) olan bir çelikte yüzey çatlağı
             \\( a=1\\,\\text{mm} \\) ve \\( Y=1 \\). Kırılmaya yol açacak kritik gerilme nedir?</p>`,
      cozum: `
        \\[ \\sigma_c=\\frac{K_{IC}}{Y\\sqrt{\\pi a}}=\\frac{50}{(1)\\sqrt{\\pi(0.001)}}
           =\\frac{50}{0.0560}\\approx 892\\,\\text{MPa} \\]
        <p>Uygulanan gerilme bu değerin altında kalırsa çatlak ilerlemez (güvenli).</p>`
    },
    {
      tip: "final",
      soru: `<p>%0.20 C'li çelik 950&nbsp;°C'de karbürleniyor; yüzey %1.0 C'de tutuluyor.
             0.5&nbsp;mm derinlikte %0.60 C'ye ulaşmak için gereken süreyi bulun.
             (\\( D=1.6\\times10^{-11}\\,\\text{m}^2/\\text{s} \\))</p>`,
      cozum: `
        \\[ \\frac{C_x-C_0}{C_s-C_0}=\\frac{0.60-0.20}{1.0-0.20}=0.50=1-\\mathrm{erf}(z)
           \\;\\Rightarrow\\; \\mathrm{erf}(z)=0.50 \\]
        <p>erf tablosundan \\( z\\approx 0.4747 \\). \\( z=\\dfrac{x}{2\\sqrt{Dt}} \\) olduğundan:</p>
        \\[ \\sqrt{Dt}=\\frac{x}{2z}=\\frac{5\\times10^{-4}}{2(0.4747)}=5.27\\times10^{-4} \\]
        \\[ t=\\frac{(5.27\\times10^{-4})^2}{1.6\\times10^{-11}}\\approx 1.73\\times10^{4}\\,\\text{s}\\approx 4.8\\,\\text{saat} \\]`
    },
    {
      tip: "final",
      soru: `<p>Bir çelikte \\( \\sigma_0=25\\,\\text{MPa} \\), \\( k_y=12\\,\\text{MPa·mm}^{1/2} \\).
             Tane çapı \\( d=0.01\\,\\text{mm} \\) iken akma dayanımını Hall–Petch ile bulun.</p>`,
      cozum: `
        \\[ \\sigma_y=\\sigma_0+k_y d^{-1/2}=25+12(0.01)^{-1/2}=25+12(10)=145\\,\\text{MPa} \\]
        <p>Tane inceldikçe (\\(d\\downarrow\\)) akma dayanımı artar; ince taneli malzeme hem güçlü hem toktur.</p>`
    }
  ]
};