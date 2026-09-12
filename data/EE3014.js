/* ============================================================
   EE3014 — Energy Conversion
   ------------------------------------------------------------
   Bu dosya SADECE bu derse aittir. İçerik eklemek için burayı düzenle.
   Alan açıklamaları için data/EE3061.js başlığına bak.

   Kapsam: Chapman "Electric Machinery Fundamentals" ve Fitzgerald
   "Electric Machinery" temel alınarak bir dönemlik enerji dönüşümü
   dersinin çekirdek konuları.
   ============================================================ */

window.DERSLER = window.DERSLER || {};

window.DERSLER["EE3014"] = {
  ad: "Energy Conversion",
  donem: "3. Sınıf · 1. Dönem",
  renk: "#A78BFA",
  ozet: "Manyetik devreler, malzemeler ve çekirdek kayıpları; endüktans ve kaçak akı; ideal/pratik transformatör, eşdeğer devre, regülasyon ve verim; üç fazlı ve ototransformatörler; enerji–koenerji ile elektromekanik kuvvet; DC motor ve generatörlerin emk, moment, hız denetimi ve karakteristikleri; döner manyetik alan; asenkron makinede kayma, eşdeğer devre, güç akışı, moment ve yolverme; senkron generatör ve motor, güç açısı, V-eğrileri ve güç faktörü düzeltme.",
  konular: [
    {
      baslik: "1. Manyetik Devreler ve Devre Benzetimi",
      icerik: `
        <p>Elektrik makinelerinin tamamı, akımın ürettiği manyetik alan üzerinden çalışır.
                Alanı her seferinde Maxwell denklemleriyle çözmek yerine <b>manyetik devre</b> benzetimi
                kullanılır: çekirdeğin geçirgenliği havanınkinden binlerce kat büyük olduğu için akı
                neredeyse tamamen demirin içinde kalır ve tıpkı akımın telde aktığı gibi "devre" içinde akar.</p>
                <p>Ampere yasasından \\( \\oint \\mathbf{H}\\cdot d\\mathbf{l}=NI \\); ortalama akı yolu \\( l_c \\)
                boyunca \\( H \\) sabit kabul edilirse \\( H l_c = NI \\) olur. \\( B=\\mu H \\) ve
                \\( \\phi = BA \\) yazılırsa devre bağıntısı çıkar:</p>
                \\[ \\mathcal{F}=NI=\\phi\\mathcal{R}, \\qquad \\mathcal{R}=\\frac{l}{\\mu A} \\]
                <p><b>Sözlük:</b> manyetomotor kuvvet \\( \\mathcal{F} \\) ↔ emk, akı \\( \\phi \\) ↔ akım,
                relüktans \\( \\mathcal{R} \\) ↔ direnç. Seri kollarda relüktanslar toplanır, paralel kollarda
                permeanslar (\\( \\mathcal{P}=1/\\mathcal{R} \\)) toplanır; bir düğümde akıların toplamı sıfırdır.</p>
                <p><b>Hava aralığı belirleyicidir.</b> \\( \\mu_r \\) tipik olarak 2000–6000 olduğundan birkaç
                milimetrelik bir aralık toplam relüktansın çoğunu tek başına oluşturur — motorun mıknatıslama
                akımını pratikte hava aralığı belirler. Aralıkta akı kesiti biraz genişler (<i>fringing</i>);
                yaklaşık hesapta aralık kesiti \\( l_g \\) kadar büyütülerek düzeltilir.</p>`
    },
    {
      baslik: "2. Manyetik Malzemeler, Doyma ve Çekirdek Kayıpları",
      icerik: `
        <p>Ferromanyetik malzemede \\( B\\!-\\!H \\) ilişkisi doğrusal değildir. Düşük \\( H \\)'de akı
                hızla artar, sonra <b>doyma</b> (saturation) bölgesinde eğri yatar: \\( H \\) artsa da \\( B \\)
                neredeyse sabit kalır. Makineler doymanın hemen altındaki dizde çalışacak şekilde tasarlanır —
                daha aşağısı demiri israf eder, daha yukarısı mıknatıslama akımını patlatır.</p>
                <p>Alternatif akımda malzeme <b>histerezis</b> çevrimini izler; her çevrimde çevrilen alan
                kadar enerji ısıya gider. İkinci kayıp kaynağı, değişen akının çekirdekte indüklediği
                <b>girdap (eddy) akımları</b>dır. Bu yüzden çekirdek masif değil, birbirinden yalıtılmış
                ince <b>saclardan</b> yapılır: girdap kaybı sac kalınlığının karesiyle azalır.</p>
                \\[ P_h = k_h f B_{max}^{n}, \\qquad P_e = k_e f^2 B_{max}^{2} t^{2} \\]
                <p>Toplam çekirdek kaybı \\( P_c=P_h+P_e \\) frekans ve akı yoğunluğuna bağlıdır, yüke bağlı
                değildir — bu yüzden transformatörde "sabit kayıp" olarak anılır ve boşta çalışma deneyiyle
                ölçülür. Kalıcı mıknatıslarda ise geniş histerezis çevrimi <i>istenir</i>; kalıcı akı
                yoğunluğu \\( B_r \\) ve koersif alan \\( H_c \\) ne kadar büyükse mıknatıs o kadar güçlüdür.</p>`
    },
    {
      baslik: "3. Endüktans, Kaçak Akı ve Karşılıklı Endüktans",
      icerik: `
        <p>Bir sargının <b>akı halkalanması</b> \\( \\lambda = N\\phi \\), endüktans ise bu halkalanmanın
                akıma oranıdır:</p>
                \\[ L=\\frac{\\lambda}{I}=\\frac{N\\phi}{I}=\\frac{N^2}{\\mathcal{R}} \\]
                <p>Dikkat: \\( L \\) sarım sayısının <b>karesiyle</b> büyür ve relüktansla ters orantılıdır.
                Doyma yüzünden \\( \\mathcal{R} \\) akımla değiştiğinden \\( L \\) gerçek makinede sabit değildir.</p>
                <p>Akının tamamı ikinci sargıyla halkalanmaz; havadan kapanan kısma <b>kaçak akı</b> denir ve
                eşdeğer devrede seri <b>kaçak reaktans</b> olarak görünür. Ortak akı ise karşılıklı endüktansı
                verir: \\( M = k\\sqrt{L_1L_2} \\), \\( 0\\le k\\le 1 \\). Transformatörde \\( k \\) 1'e çok yakındır,
                hava aralıklı döner makinelerde belirgin biçimde küçüktür.</p>
                <p>Faraday yasası bu kavramları birleştirir: \\( e = \\dfrac{d\\lambda}{dt} = L\\dfrac{di}{dt} \\).
                Sinüzoidal beslemede \\( v=V_m\\sin\\omega t \\) için akı kosinüs olur ve <b>transformatör
                gerilim denklemi</b> çıkar:</p>
                \\[ V_{rms}=4.44\\,f\\,N\\,\\phi_{max}=4.44\\,f\\,N\\,B_{max}A \\]
                <p>Bu bağıntı, 50 Hz'lik trafoların 400 Hz'lik uçak trafolarından neden çok daha büyük
                olduğunu tek başına açıklar: aynı gerilim için \\( f \\) küçüldükçe \\( B_{max}A \\), yani
                demir hacmi büyümek zorundadır.</p>`
    },
    {
      baslik: "4. İdeal Transformatör",
      icerik: `
        <p>İdeal transformatör dört varsayıma dayanır: sargı direnci yok, kaçak akı yok, çekirdek
                kaybı yok ve \\( \\mu\\to\\infty \\) (mıknatıslama akımı sıfır). Her iki sargı aynı \\( \\phi \\)
                akısını gördüğü için Faraday yasasından gerilimler sarım sayılarıyla orantılıdır:</p>
                \\[ \\frac{V_1}{V_2}=\\frac{N_1}{N_2}=a, \\qquad \\frac{I_1}{I_2}=\\frac{N_2}{N_1}=\\frac{1}{a} \\]
                <p>Giriş gücü çıkış gücüne eşittir: \\( V_1I_1 = V_2I_2 \\). Gerilimi \\( a \\) kat yükseltmek
                akımı \\( a \\) kat düşürür — elektriğin neden yüksek gerilimde iletildiği (hattaki
                \\( I^2R \\) kaybı) doğrudan buradan çıkar.</p>
                <p><b>Empedans dönüştürme</b> pratikte en çok kullanılan sonuçtur. Sekonderdeki \\( Z_2 \\),
                primerden bakıldığında \\( a^2 \\) katı görünür:</p>
                \\[ Z_1' = a^2 Z_2 \\]
                <p>Bu özellik hesapları tek tarafa indirger: bütün sekonder büyüklükleri primere yansıtılır
                (\\( V_2'=aV_2 \\), \\( I_2'=I_2/a \\), \\( Z_2'=a^2Z_2 \\)) ve devre tek gerilim seviyesinde
                çözülür. Şemadaki nokta (·) işaretleri sargıların sarılma yönünü, dolayısıyla gerilimlerin
                göreli polaritesini gösterir.</p>`
    },
    {
      baslik: "5. Pratik Transformatör: Eşdeğer Devre ve Deneyler",
      icerik: `
        <p>Gerçek transformatörde ideal modele dört öğe eklenir: sargı dirençleri \\( R_1,R_2 \\),
                kaçak reaktanslar \\( X_1,X_2 \\), çekirdek kaybını temsil eden \\( R_c \\) ve mıknatıslanmayı
                temsil eden \\( X_m \\). Son ikisi paralel <b>uyarma kolunu</b> oluşturur.</p>
                <p>Sekonder primere yansıtılıp uyarma kolu girişe alındığında (yaklaşık model) seri
                eşdeğerler tek terime iner:</p>
                \\[ R_{eq}=R_1+a^2R_2, \\qquad X_{eq}=X_1+a^2X_2 \\]
                <p>Parametreler iki standart deneyle bulunur:</p>
                <ul>
                  <li><b>Boşta (açık devre) deneyi</b> — alçak gerilim tarafına anma gerilimi uygulanır,
                  yüksek gerilim tarafı açıktır. Akım küçük olduğundan seri kayıplar ihmal edilir; ölçülen
                  güç <b>çekirdek kaybıdır</b>: \\( R_c=V_{oc}^2/P_{oc} \\), \\( |Z_\\phi|=V_{oc}/I_{oc} \\).</li>
                  <li><b>Kısa devre deneyi</b> — sekonder kısa devre edilir, primere anma akımını akıtacak
                  küçük bir gerilim uygulanır. Akı küçük olduğundan çekirdek kaybı ihmal edilir; ölçülen güç
                  <b>bakır kaybıdır</b>: \\( R_{eq}=P_{sc}/I_{sc}^2 \\), \\( |Z_{eq}|=V_{sc}/I_{sc} \\),
                  \\( X_{eq}=\\sqrt{|Z_{eq}|^2-R_{eq}^2} \\).</li>
                </ul>
                <p>Özet mantık: <b>boşta deneyi paralel kolu, kısa devre deneyi seri kolu verir.</b></p>`
    },
    {
      baslik: "6. Gerilim Regülasyonu ve Verim",
      icerik: `
        <p><b>Gerilim regülasyonu</b>, yük bağlandığında sekonder geriliminin ne kadar düştüğünü ölçer:</p>
                \\[ \\mathrm{VR}=\\frac{V_{2,\\text{boşta}}-V_{2,\\text{yükte}}}{V_{2,\\text{yükte}}}\\times100 \\]
                <p>Küçük VR iyidir. İşaretini güç katsayısı belirler: <b>geri (endüktif) yükte</b> gerilim
                düşer ve VR pozitiftir; <b>ileri (kapasitif) yükte</b> sekonder gerilimi anma değerinin
                üstüne bile çıkabilir, VR negatif olur. Yaklaşık ifade:</p>
                \\[ \\mathrm{VR}\\approx\\frac{I_2(R_{eq}\\cos\\theta \\pm X_{eq}\\sin\\theta)}{V_2}\\times100 \\]
                <p><b>Verim</b> iki kayıp grubuyla hesaplanır: yükten bağımsız çekirdek kaybı \\( P_c \\) ve
                yük akımının karesiyle artan bakır kaybı \\( P_{cu}=I^2R_{eq} \\):</p>
                \\[ \\eta=\\frac{V_2I_2\\cos\\theta}{V_2I_2\\cos\\theta+P_c+I_2^2R_{eq}}\\times100 \\]
                <p>Türev alınırsa verimin tepe noktasının <b>bakır kaybı = çekirdek kaybı</b> olan yükte
                oluştuğu bulunur. Günün büyük bölümünü anma yükünün altında geçiren dağıtım transformatörleri
                bu yüzden çekirdek kaybı bilerek küçük tutularak tasarlanır. Kısmi yük oranı \\( x \\) için
                bakır kaybı \\( x^2P_{cu,anma} \\) ile ölçeklenir.</p>`
    },
    {
      baslik: "7. Üç Fazlı Transformatörler ve Ototransformatör",
      icerik: `
        <p>Üç fazlı dönüşüm ya üç ayrı transformatörle ya da ortak çekirdekli tek üniteyle yapılır.
                Sargılar Y veya Δ bağlanır; dört birleşim kullanılır:</p>
                <ul>
                  <li><b>Y–Y:</b> nötr erişimi vardır ama üçüncü harmonikler ve dengesiz yükte nötr kayması sorun çıkarır.</li>
                  <li><b>Y–Δ:</b> gerilim düşürmede yaygın; Δ üçüncü harmoniklere dolaşım yolu vererek akıyı temizler. 30° faz kayması oluşur.</li>
                  <li><b>Δ–Y:</b> gerilim yükseltmede (santral çıkışı) standart; sekonderde nötr elde edilir.</li>
                  <li><b>Δ–Δ:</b> bir faz arızalansa <i>açık delta</i> ile anma gücünün ≈%58'i taşınmaya devam eder.</li>
                </ul>
                <p>Y bağlantıda \\( V_{L}=\\sqrt{3}V_{\\phi} \\), \\( I_{L}=I_{\\phi} \\); Δ bağlantıda
                \\( V_{L}=V_{\\phi} \\), \\( I_{L}=\\sqrt{3}I_{\\phi} \\). Toplam görünür güç her iki durumda
                \\( S=\\sqrt{3}V_LI_L \\)'dir.</p>
                <p><b>Ototransformatör</b>de sargılar elektriksel olarak ayrık değildir; gücün bir kısmı ortak
                sargı üzerinden <i>iletimle</i> geçer. Bu yüzden aynı bakırla çok daha büyük görünür güç
                aktarılır:</p>
                \\[ \\frac{S_{oto}}{S_{sarg\\imath}}=\\frac{N_{ortak}+N_{seri}}{N_{seri}} \\]
                <p>Kazanç, dönüştürme oranı 1'e yaklaştıkça büyür. Bedeli yalıtım kaybıdır: taraflar ayrık
                olmadığından arıza durumunda yüksek gerilim alçak gerilim tarafına geçebilir.</p>`
    },
    {
      baslik: "8. Elektromekanik Enerji Dönüşümü: Enerji ve Koenerji",
      icerik: `
        <p>Bütün makinelerin ortak enerji dengesi şudur: elektriksel giriş = mekanik çıkış + alanda
                depolanan enerjinin değişimi + kayıplar. Kayıplar (bakır, çekirdek, sürtünme) ayrıldığında
                geriye kayıpsız <b>bağlaşım alanı</b> kalır:</p>
                \\[ dW_{elek}=dW_{mek}+dW_{alan} \\]
                <p>Depolanan alan enerjisi ve <b>koenerji</b>, \\( \\lambda\\!-\\!i \\) eğrisinin iki yanındaki
                alanlardır ve toplamları \\( \\lambda i \\)'ye eşittir:</p>
                \\[ W_{alan}=\\int_0^{\\lambda} i\\,d\\lambda, \\qquad W'_{alan}=\\int_0^{i} \\lambda\\,di \\]
                <p>Kuvvet ve moment, koenerjinin <b>akım sabitken</b> konuma göre türevidir — akımı sabit
                tutmak deneysel olarak kolay olduğu için pratikte en çok bu biçim kullanılır:</p>
                \\[ f=\\left.\\frac{\\partial W'_{alan}(i,x)}{\\partial x}\\right|_{i}, \\qquad
                   T=\\left.\\frac{\\partial W'_{alan}(i,\\theta)}{\\partial \\theta}\\right|_{i} \\]
                <p>Doymasız (doğrusal) durumda \\( W'=\\tfrac12 L(x)i^2 \\) olduğundan
                \\( f=\\tfrac12 i^2 \\dfrac{dL}{dx} \\) çıkar. Buradan temel bir sonuç okunur: <b>kuvvet,
                endüktansı artıracak yönde etki eder</b> — röle nüvesi hava aralığını kapatacak yöne çekilir,
                relüktans motoru rotoru en düşük relüktans konumuna hizalar.</p>`
    },
    {
      baslik: "9. Döner Makinelerin Ortak Temelleri",
      icerik: `
        <p>DC, asenkron ve senkron makineler dıştan farklı görünse de aynı iki denkleme dayanır:
                manyetik alan içinde \\( v \\) hızıyla hareket eden iletkende gerilim indüklenir, akım taşıyan
                iletkene ise kuvvet etkir.</p>
                \\[ e = (\\mathbf{v}\\times\\mathbf{B})\\cdot \\mathbf{l}, \\qquad \\mathbf{F}=I\\,\\mathbf{l}\\times\\mathbf{B} \\]
                <p>Bu ikisi her zaman birlikte çalışır: motor dönerken zıt emk üretir, jeneratör yük akımı
                verirken frenleyici moment üretir. Bir makine doğası gereği "motor" ya da "jeneratör"
                değildir; <b>güç akışının yönüne göre</b> her iki modda da çalışabilir.</p>
                <p>Ortak yapı durağan <b>stator</b>, dönen <b>rotor</b> ve aradaki hava aralığıdır. Sargılar
                oluklara dağıtılır; dağıtılmış sargı ideal tam adımlı sargıdan biraz daha az gerilim üretir
                ve bu <b>sargı faktörü</b> \\( k_w<1 \\) ile hesaba katılır. İndüklenen gerilim ve moment
                genel biçimde şöyledir:</p>
                \\[ E_A=K\\phi\\omega, \\qquad T_{ind}=K\\phi I_A \\]
                <p>Elektriksel ve mekanik açı kutup sayısıyla ilişkilidir:
                \\( \\theta_{elek}=\\dfrac{p}{2}\\theta_{mek} \\). Dört kutuplu bir makinede rotorun bir tam
                turu iki elektriksel çevrime karşılık gelir.</p>`
    },
    {
      baslik: "10. DC Makineler: Yapı, EMK ve Moment",
      icerik: `
        <p>DC makinede alan statordadır (uyarma sargısı veya kalıcı mıknatıs), endüvi (armatür)
                rotordadır. Rotor sargısındaki gerilim aslında alternatiftir; <b>kolektör (komütatör) ve
                fırçalar</b> mekanik bir doğrultucu gibi çalışarak dış devrede doğru gerilim elde edilmesini
                sağlar.</p>
                \\[ E_A=K\\phi\\omega, \\qquad T_{ind}=K\\phi I_A, \\qquad K=\\frac{Zp}{2\\pi a} \\]
                <p>Terminal denklemi motor ve jeneratörde işaret bakımından ayrılır:</p>
                \\[ \\text{Motor: } V_t=E_A+I_AR_A \\qquad\\qquad \\text{Jeneratör: } V_t=E_A-I_AR_A \\]
                <p>Uyarma biçimine göre sınıflandırılır. <b>Ayrı uyarmalı</b> ve <b>şönt</b> makinede (alan
                endüviye paralel) akı neredeyse sabittir, hız yükle çok az düşer — sabit hız isteyen
                uygulamalarda kullanılır. <b>Seri</b> makinede alan endüvi akımını taşır, \\( \\phi\\propto I_A \\)
                olduğundan moment akımın karesiyle artar: kalkışta çok yüksek moment verir (vinç, tren, marş
                motoru) ama boşta tehlikeli biçimde hızlanır. <b>Kompunt</b> makine ikisinin karışımıdır.</p>
                <p>Yük akımı arttığında endüvi kendi alanını üreterek ana alanı bozar (<b>endüvi reaksiyonu</b>):
                akı azalır, fırçalarda kıvılcımlanma artar. Çözüm yardımcı kutuplar ve kompanzasyon sargılarıdır.</p>`
    },
    {
      baslik: "11. DC Motorda Hız Denetimi ve Yolverme",
      icerik: `
        <p>Şönt/ayrı uyarmalı motorun hız bağıntısı doğrudan terminal denkleminden çıkar:</p>
                \\[ \\omega=\\frac{V_t-I_AR_A}{K\\phi} \\]
                <p>Üç denetim yolu vardır ve her biri farklı bir çalışma bölgesi açar:</p>
                <ul>
                  <li><b>Terminal gerilimi \\( V_t \\):</b> anma hızının <i>altında</i> geniş ve verimli ayar.
                  Akı sabit kaldığı için maksimum moment korunur → <b>sabit moment</b> bölgesi.</li>
                  <li><b>Alan akısı \\( \\phi \\) (alan zayıflatma):</b> anma hızının <i>üstüne</i> çıkarır ama
                  moment akıyla birlikte düşer → <b>sabit güç</b> bölgesi. Alan devresinin kopması tehlikelidir:
                  \\( \\phi\\to0 \\) iken hız kontrolsüz büyür.</li>
                  <li><b>Endüvi devresine direnç:</b> basit ama kayıplı; dirençte harcanan güç tamamen boşa gider.</li>
                </ul>
                <p><b>Yolverme:</b> \\( \\omega=0 \\) anında \\( E_A=0 \\) olduğundan akımı yalnızca \\( R_A \\)
                sınırlar ve anma akımının 10–20 katına ulaşır. Bu yüzden kademeli olarak devreden çıkarılan
                yolverme direnci ya da ayarlı gerilim kaynağı kullanılır.</p>
                <p><b>Frenleme:</b> dinamik frenlemede motor bir dirence boşaltılır ve kinetik enerji ısıya
                çevrilir; <b>rejeneratif</b> frenlemede \\( E_A>V_t \\) olduğunda akım yön değiştirir ve enerji
                kaynağa geri verilir.</p>`
    },
    {
      baslik: "12. DC Generatörler ve Karakteristikleri",
      icerik: `
        <p>DC makine tersinirdir: aynı yapı mile mekanik güç verilirse <b>generatör</b> olur. Fark yalnızca akımın yönüdür — \\( E_A=K\\phi\\omega \\) zıt emk yerine
        <b>üretilen emk</b>, ve artık \\( E_A&gt;V_t \\): \\( V_t=E_A-I_AR_A \\). Uyarma sargısının nasıl beslendiği, dış karakteristiğini (yük akımına karşı uç gerilimi) belirler.</p>
        <ul>
          <li><b>Ayrı uyarmalı:</b> alan bağımsız kaynaktan. \\( V_t=E_A-I_AR_A \\) — yük arttıkça gerilim yalnızca \\( I_AR_A \\) ve <b>endüvi reaksiyonu</b> (endüvi akımının
          ana akıyı zayıflatması) kadar düşer; neredeyse düz karakteristik. Gerilim regülasyonu \\( \\text{VR}=\\dfrac{V_{yüksüz}-V_{tam yük}}{V_{tam yük}} \\).</li>
          <li><b>Şönt (kendinden uyarmalı):</b> alan sargısı uçlara paralel. Kalıcı mıknatısiyetten başlayan küçük emk alan akımı üretir, akı artar, emk artar… —
          <b>gerilim kurma</b>; çalışma noktası mıknatıslanma eğrisiyle alan direnci doğrusunun (\\( V=I_FR_F \\)) kesişimidir. Alan direnci <b>kritik direnci</b> aşarsa
          ya da alan bağlantısı tersse gerilim kurulmaz. Yük arttıkça uç gerilimi düşer → alan akımı düşer → emk düşer → daha fazla düşüş: ayrı uyarmalıdan daha yumuşak
          karakteristik; aşırı yükte gerilim çöker (kendini korur).</li>
          <li><b>Seri:</b> alan sargısı yük akımını taşır; yüksüz emk ≈0, yükle birlikte gerilim yükselir, doymada düzleşir — kaynak makinesi, ark lambası (sabit akım).</li>
          <li><b>Kompunt (bileşik):</b> şönt + seri alan. <b>Eklemeli (cumulative):</b> seri alan şöntü destekler; ayarına göre düz (flat), aşırı (over) ya da eksik (under)
          kompunt — yük değiştikçe gerilimi sabit tutan sanayi generatörü. <b>Çıkarımlı (differential):</b> seri alan zıt — gerilim yükle hızla düşer, kısa devre akımını
          sınırlar.</li>
        </ul>
        <p><b>Endüvi reaksiyonu ve komütasyon:</b> Endüvi akımının MMK'si ana alanı hem zayıflatır (doyma nedeniyle net akı düşer → emk düşer) hem kaydırır (manyetik nötr
        ekseni döner → fırçalarda kıvılcım). Çözümler: <b>ara kutuplar</b> (interpole — seri bağlı, komütasyon bölgesinde akıyı iptal eder) ve <b>kompanzasyon sargısı</b>
        (kutup yüzeyinde, endüvi MMK'sini yerinde götürür). Fırça kaydırma eski ve tek yük noktasında çalışan yöntemdir.</p>
        <p><b>Güç akışı (generatör):</b> mil gücü \\( P_{in}=\\tau\\omega \\) → sürtünme/rüzgâr + çekirdek kayıpları düşülür → <b>dönüştürülen güç</b> \\( E_AI_A \\) → bakır
        kayıpları \\( I_A^2R_A+V_FI_F \\) düşülür → çıkış \\( V_tI_L \\). Motordaki akışın tam tersi. Verim \\( \\eta=P_{out}/P_{in} \\); maksimum verim sabit kayıplar =
        değişken (bakır) kayıplar olduğunda (trafodaki kuralın aynısı).</p>
        <p><b>Neden önemli:</b> Günümüzde büyük DC generatörler nadirdir (doğrultuculu AC daha ucuz) ama karakteristik analizi, endüvi reaksiyonu ve gerilim kurma
        kavramları DC motor sürücülerinde <b>rejeneratif frenlemede</b> (motor generatör moduna geçer, kinetik enerjiyi bataryaya geri basar — elektrikli araç) aynen kullanılır.</p>`
    },
    {
      baslik: "13. Üç Fazlı Sistemler ve Döner Manyetik Alan",
      icerik: `
        <p>AC makinelerin çalışma ilkesi tek bir olguya dayanır: uzayda 120° kaydırılmış üç sargıya
                zamanda 120° kaydırılmış üç akım uygulanırsa, genliği sabit ve <b>sabit hızla dönen</b> bir
                manyetik alan oluşur. Bileşke alan tek faz tepe değerinin 1.5 katıdır ve senkron hızda döner:</p>
                \\[ n_s=\\frac{120f}{p}\\ \\ [\\text{d/dk}], \\qquad \\omega_s=\\frac{4\\pi f}{p}\\ \\ [\\text{rad/s}] \\]
                <p>Burada \\( p \\) kutup sayısıdır: 50 Hz'de 2 kutuplu makine 3000 d/dk, 4 kutuplu 1500 d/dk
                döner. Alanın dönme yönünü faz sırası belirler; <b>herhangi iki fazın yeri değiştirilirse motor
                ters yöne döner</b> — pratikteki en basit yön değiştirme yöntemi budur.</p>
                <p>Dengeli üç fazlı sistemde anlık toplam güç, tek fazlı sistemin aksine zamanla dalgalanmaz;
                sabittir. Güç bağıntıları hat büyüklükleriyle şöyle yazılır:</p>
                \\[ P=\\sqrt{3}V_{L}I_{L}\\cos\\theta, \\quad Q=\\sqrt{3}V_{L}I_{L}\\sin\\theta, \\quad S=\\sqrt{3}V_{L}I_{L} \\]
                <p>Dengeli yükte analiz <b>tek faz eşdeğeri</b> üzerinden yapılır: Δ yükler \\( Z_Y=Z_\\Delta/3 \\)
                ile Y'ye çevrilir, tek faz çözülür ve sonuç üçle çarpılır.</p>`
    },
    {
      baslik: "14. Asenkron (İndüksiyon) Makine: Kayma ve Eşdeğer Devre",
      icerik: `
        <p>Asenkron motor sanayide kullanılan motorların büyük çoğunluğudur: rotoruna elektriksel
                bağlantı yoktur, akım <b>indüksiyonla</b> üretilir. Bunun için rotorun döner alandan geri
                kalması zorunludur — rotor senkron hıza ulaşsaydı bağıl hareket, dolayısıyla indüklenen
                gerilim ve moment sıfır olurdu.</p>
                \\[ s=\\frac{n_s-n_r}{n_s}, \\qquad n_r=(1-s)n_s \\]
                <p>Kayma \\( s \\) yolvermede 1, anma yükünde tipik olarak 0.02–0.05'tir. Rotor büyüklükleri
                kaymayla ölçeklenir: rotor frekansı \\( f_r=sf \\), duran haldeki rotor emk'si \\( E_{R0} \\)
                iken dönerken \\( E_R=sE_{R0} \\), rotor reaktansı \\( X_R=sX_{R0} \\).</p>
                <p>Bu üç bağıntı, rotor statora yansıtılırken tek bir hamlede toparlanır: rotor kolu
                \\( R_2/s \\) direnci ve <i>sabit</i> \\( X_2 \\) reaktansıyla temsil edilir. Böylece eşdeğer
                devre transformatörünkiyle aynı biçime gelir — stator kolu \\( R_1+jX_1 \\), uyarma kolu
                \\( jX_M \\), rotor kolu \\( R_2/s+jX_2 \\).</p>
                \\[ \\frac{R_2}{s}=R_2+R_2\\frac{1-s}{s} \\]
                <p>Bu ayrıştırma fiziksel olarak çok şey söyler: \\( R_2 \\) gerçek rotor bakır kaybını,
                \\( R_2(1-s)/s \\) ise <b>mekanik çıkış gücünü</b> temsil eden hayali direnci verir.</p>`
    },
    {
      baslik: "15. Asenkron Motorda Güç Akışı, Moment ve Yolverme",
      icerik: `
        <p>Güç statordan rotora hava aralığı üzerinden aktarılır. Hava aralığı gücü \\( P_{AG} \\)
                kaymaya göre ikiye ayrılır — bu, asenkron makinenin en kullanışlı bağıntısıdır:</p>
                \\[ P_{AG}=\\frac{I_2^2R_2}{s}, \\qquad P_{rotor,cu}=sP_{AG}, \\qquad P_{mek}=(1-s)P_{AG} \\]
                <p>Yani kayma doğrudan bir verim tavanıdır: \\( s=0.05 \\)'te rotora giden gücün %5'i ısıya
                gider. İndüklenen moment ise hava aralığı gücünün <b>senkron</b> hıza bölümüdür (rotor
                hızına değil):</p>
                \\[ T_{ind}=\\frac{P_{AG}}{\\omega_s} \\]
                <p>Stator tarafı Thevenin eşdeğerine indirgenerek moment–kayma ifadesi çıkarılır.
                <b>Maksimum moment</b> (devrilme momenti) \\( R_2 \\)'den <b>bağımsızdır</b>, ama oluştuğu
                kayma \\( R_2 \\) ile orantılıdır:</p>
                \\[ s_{max}=\\frac{R_2}{\\sqrt{R_{th}^2+(X_{th}+X_2)^2}}, \\qquad
                   T_{max}=\\frac{3V_{th}^2}{2\\omega_s\\left[R_{th}+\\sqrt{R_{th}^2+(X_{th}+X_2)^2}\\right]} \\]
                <p>Bilezikli rotorda dışarıdan direnç eklenerek \\( s_{max} \\) yolverme noktasına kaydırılır:
                maksimum moment kalkışta elde edilir. Sincap kafesli motorlarda aynı etki <b>derin oluk</b> ve
                <b>çift kafes</b> tasarımıyla sağlanır — yüksek rotor frekansında akım oluğun üst kısmına
                toplanır ve etkin direnç artar.</p>
                <p><b>Yolverme akımı</b> anma akımının 5–7 katıdır. Yıldız–üçgen yolverme akımı ve momenti
                1/3'e indirir; yumuşak yolverici gerilimi rampalar; sürücü (VFD) ise \\( V/f \\) oranını sabit
                tutarak akıyı koruyup düşük frekansta tam moment sağlar.</p>`
    },
    {
      baslik: "16. Senkron Makineler ve Güç Açısı",
      icerik: `
        <p>Senkron makinede rotor DC ile uyarılır (veya kalıcı mıknatıstır) ve <b>tam olarak</b>
                senkron hızda döner — kayma yoktur. Dünyadaki elektrik üretiminin neredeyse tamamı senkron
                jeneratörlerle yapılır.</p>
                <p>Faz başına eşdeğer devre indüklenen gerilim \\( E_A \\), senkron reaktans \\( X_S \\) ve
                endüvi direncinden oluşur:</p>
                \\[ V_\\phi=E_A-jX_SI_A-R_AI_A \\]
                <p>\\( E_A=K\\phi\\omega \\) yalnızca alan akımına bağlıdır. \\( E_A \\) ile \\( V_\\phi \\)
                arasındaki açıya <b>güç açısı</b> \\( \\delta \\) denir ve aktarılan gücü bu açı belirler:</p>
                \\[ P=\\frac{3V_\\phi E_A}{X_S}\\sin\\delta \\]
                <p>Güç \\( \\delta=90° \\)'de en büyüktür; bu <b>statik kararlılık sınırıdır</b>, aşılırsa makine
                senkronizmadan çıkar. Motor olarak çalışırken yük artınca hız değil, yalnızca \\( \\delta \\) büyür.</p>
                <p><b>V eğrileri:</b> alan akımı değiştirilerek reaktif güç ayarlanır. Aşırı uyarma
                (\\( E_A\\cos\\delta > V_\\phi \\)) makineyi kapasitif yapar ve şebekeye reaktif güç verir;
                düşük uyarma endüktif yapar. Yalnızca bu amaçla, yüksüz çalıştırılan makineye <b>senkron
                kondansatör</b> denir. Senkron motorun kendiliğinden yolverme momenti yoktur; rotora
                yerleştirilen <i>amortisör (damper) sargıları</i> sayesinde asenkron olarak kalkar, senkron
                hıza yaklaşınca alan uyarılarak senkronizmaya çekilir.</p>`
    },
    {
      baslik: "17. Senkron Motor, V-Eğrileri ve Güç Faktörü Düzeltme",
      icerik: `
        <p>Senkron makine mile güç verildiğinde generatör, şebekeden güç çektiğinde <b>motordur</b>; her iki yönde de \\( V_\\phi=E_A+jX_SI_A \\) fazör denklemi geçerlidir,
        yalnızca \\( I_A \\)'nın yönü değişir. Motorda \\( E_A \\), \\( V_\\phi \\)'nin <b>gerisinde</b> kalır (güç açısı δ negatif); moment \\( \\tau=\\dfrac{3V_\\phi E_A}{\\omega_sX_S}\\sin\\delta \\),
        maksimumu \\( \\delta=90° \\)'de — <b>kopma (pull-out) momenti</b>. Yük bu değeri aşarsa rotor senkronizmi kaybeder, "kayar" ve durur (koruma açtırır).</p>
        <p><b>Sabit hız:</b> Rotor tam olarak \\( n_s=120f/P \\) ile döner; yük değişince <b>hız değil, δ değişir</b>. Frekans denetimi olmadan hız ayarı yoktur;
        bu yüzden sabit hızlı büyük yükler (kompresör, öğütücü) ve frekans dönüştürücüyle sürülen hassas servolar için idealdir.</p>
        <p><b>Uyarmanın etkisi — V-eğrileri:</b> Sabit yükte (sabit \\( P=3V_\\phi I_A\\cos\\theta \\), yani \\( I_A\\cos\\theta \\) sabit) alan akımı \\( I_F \\) değiştirilirse \\( E_A \\) değişir
        ve endüvi akımının <b>reaktif bileşeni</b> değişir:</p>
        <ul>
          <li><b>Eksik uyarma</b> (\\( E_A\\cos\\delta&lt;V_\\phi \\)): motor şebekeden reaktif güç <b>çeker</b>, akım <b>geride</b> (endüktif gibi).</li>
          <li><b>Normal uyarma:</b> \\( I_A \\) en küçük, güç faktörü 1.</li>
          <li><b>Aşırı uyarma</b> (\\( E_A\\cos\\delta&gt;V_\\phi \\)): motor reaktif güç <b>üretir</b>, akım <b>ileride</b> (kapasitör gibi).</li>
        </ul>
        <p>\\( |I_A| \\)'nın \\( I_F \\)'ye karşı çizimi <b>V biçimlidir</b> (her yük için ayrı V, tabanları güç faktörü 1 noktalarında). Bu, senkron motoru diğer tüm motorlardan
        ayıran özelliktir: asenkron motor her zaman geri güç faktörüyle çalışırken senkron motorun güç faktörü <b>alan akımıyla ayarlanır</b>.</p>
        <p><b>Güç faktörü düzeltme:</b> Tesisteki asenkron motorların çektiği geri reaktif gücü, aşırı uyarılmış bir senkron motor (ya da yüksüz çalışan <b>senkron
        kondansatör</b>) üreterek karşılar; şebekeden çekilen toplam akım ve reaktif enerji cezası düşer. Hesap: tesis \\( P \\) kW, \\( \\cos\\theta_1 \\); hedef \\( \\cos\\theta_2 \\);
        gereken \\( Q_c=P(\\tan\\theta_1-\\tan\\theta_2) \\) kVAr — senkron motorun anma gücü \\( S=\\sqrt{P_m^2+Q_c^2} \\) buna göre seçilir. Kapasitör bankına göre avantajı:
        sürekli ayarlanabilir ve aynı zamanda iş yapar; dezavantajı fiyat ve bakım.</p>
        <p><b>Yolverme:</b> Senkron motor duran rotorla <b>kendi kendine kalkmaz</b> — döner alan 50 Hz'de kutupları itip çeker, ortalama moment sıfır. Yöntemler:
        (1) <b>frekans düşürerek</b> (sürücüyle 0'dan yavaş yavaş — bugünkü standart), (2) <b>yardımcı motor</b> (pony motor) ile senkron hıza yaklaştırıp şebekeye bağlama,
        (3) <b>amortisör (damper) sargılarıyla asenkron kalkış</b>: rotor kutup yüzlerindeki kısa devre çubuklar sincap kafes gibi davranır, motor asenkron olarak hızlanır,
        senkron hıza yakınken alan uyarması verilir ve rotor "kilitlenir". Kalkış sırasında alan sargısı kısa devre edilir ya da bir dirence bağlanır (yüksek gerilim indüklenir).</p>
        <p><b>Neden önemli:</b> Büyük sanayi tesislerinde senkron motor hem yük sürer hem güç faktörü cezasını sıfırlar; sabit mıknatıslı senkron motor (PMSM) ise
        elektrikli araç ve servo dünyasının hâkim makinesidir — aynı fazör diyagramı, \\( E_A \\) sabit mıknatıstan gelir ve uyarma yerine akım açısı (alan zayıflatma) ayarlanır.</p>`
    }
  ],
  formuller: [
    { ad: "Manyetik Devre", formul: `\\( \\mathcal{F}=NI=\\phi\\mathcal{R} \\)`, aciklama: "mmk = akı × relüktans (Ohm benzeri)." },
    { ad: "Relüktans", formul: `\\( \\mathcal{R}=\\dfrac{l}{\\mu A} \\)`, aciklama: "Seri kollarda toplanır; hava aralığı baskındır." },
    { ad: "Akı Yoğunluğu", formul: `\\( B=\\mu H=\\mu_r\\mu_0 H \\)`, aciklama: "μ₀ = 4π×10⁻⁷ H/m; doymada geçersizleşir." },
    { ad: "Histerezis Kaybı", formul: `\\( P_h=k_h f B_{max}^{n} \\)`, aciklama: "n ≈ 1.6–2; çevrim alanı kadar enerji." },
    { ad: "Girdap Akımı Kaybı", formul: `\\( P_e=k_e f^2B_{max}^2t^2 \\)`, aciklama: "Sac kalınlığı t ile karesel azalır." },
    { ad: "Endüktans", formul: `\\( L=\\dfrac{N\\phi}{I}=\\dfrac{N^2}{\\mathcal{R}} \\)`, aciklama: "Sarım sayısının karesiyle artar." },
    { ad: "Karşılıklı Endüktans", formul: `\\( M=k\\sqrt{L_1L_2} \\)`, aciklama: "k = bağlaşım katsayısı (0…1)." },
    { ad: "Trafo Gerilim Denklemi", formul: `\\( V=4.44fN\\phi_{max} \\)`, aciklama: "φmax = Bmax·A; demir hacmini belirler." },
    { ad: "İdeal Trafo Oranı", formul: `\\( \\dfrac{V_1}{V_2}=\\dfrac{N_1}{N_2}=a=\\dfrac{I_2}{I_1} \\)`, aciklama: "Gerilim yükselirse akım düşer." },
    { ad: "Empedans Yansıtma", formul: `\\( Z_1'=a^2Z_2 \\)`, aciklama: "Sekonder, primerden a² katı görünür." },
    { ad: "Eşdeğer Seri Empedans", formul: `\\( R_{eq}=R_1+a^2R_2 \\)`, aciklama: "Aynısı reaktans için: X_eq = X₁ + a²X₂." },
    { ad: "Gerilim Regülasyonu", formul: `\\( \\mathrm{VR}=\\dfrac{V_{2,bo\\c{s}}-V_{2,y\\ddot{u}k}}{V_{2,y\\ddot{u}k}}\\times100 \\)`, aciklama: "Endüktif yükte +, kapasitif yükte − olabilir." },
    { ad: "Trafo Verimi", formul: `\\( \\eta=\\dfrac{P_{\\text{çık}}}{P_{\\text{çık}}+P_c+I^2R_{eq}} \\)`, aciklama: "Maksimum verim: bakır kaybı = çekirdek kaybı." },
    { ad: "Ototransformatör Kazancı", formul: `\\( \\dfrac{S_{oto}}{S_{sarg\\imath}}=\\dfrac{N_{ortak}+N_{seri}}{N_{seri}} \\)`, aciklama: "Oran 1'e yaklaştıkça kazanç büyür." },
    { ad: "Üç Faz Güç", formul: `\\( P=\\sqrt{3}V_LI_L\\cos\\theta \\)`, aciklama: "Y ve Δ için aynı; hat büyüklükleriyle." },
    { ad: "Y Bağlantı", formul: `\\( V_L=\\sqrt{3}V_\\phi,\\quad I_L=I_\\phi \\)`, aciklama: "Δ'da tersi: V_L = V_φ, I_L = √3·I_φ." },
    { ad: "Koenerjiden Kuvvet", formul: `\\( f=\\tfrac12 i^2\\dfrac{dL}{dx} \\)`, aciklama: "Kuvvet endüktansı artıran yöndedir." },
    { ad: "Alan Enerjisi", formul: `\\( W_{alan}=\\tfrac12 LI^2 \\)`, aciklama: "Doğrusal bölgede enerji = koenerji." },
    { ad: "DC Zıt EMK", formul: `\\( E_A=K\\phi\\omega \\)`, aciklama: "Hız arttıkça zıt emk büyür." },
    { ad: "DC Moment", formul: `\\( T_{ind}=K\\phi I_A \\)`, aciklama: "Seri motorda φ ∝ I_A → T ∝ I_A²." },
    { ad: "DC Hız Bağıntısı", formul: `\\( \\omega=\\dfrac{V_t-I_AR_A}{K\\phi} \\)`, aciklama: "V_t ile altına, alan zayıflatmayla üstüne ayar." },
    { ad: "Senkron Hız", formul: `\\( n_s=\\dfrac{120f}{p} \\)`, aciklama: "50 Hz, 4 kutup → 1500 d/dk." },
    { ad: "Kayma", formul: `\\( s=\\dfrac{n_s-n_r}{n_s} \\)`, aciklama: "Yolvermede 1, anma yükünde 0.02–0.05." },
    { ad: "Rotor Büyüklükleri", formul: `\\( f_r=sf,\\; E_R=sE_{R0},\\; X_R=sX_{R0} \\)`, aciklama: "Eşdeğer devrede R₂/s olarak toplanır." },
    { ad: "Hava Aralığı Gücü", formul: `\\( P_{AG}=\\dfrac{I_2^2R_2}{s} \\)`, aciklama: "Rotor bakır kaybı = s·P_AG, mekanik = (1−s)·P_AG." },
    { ad: "Asenkron Moment", formul: `\\( T_{ind}=\\dfrac{P_{AG}}{\\omega_s} \\)`, aciklama: "Rotor hızına değil, senkron hıza bölünür." },
    { ad: "Maksimum Moment Kayması", formul: `\\( s_{max}=\\dfrac{R_2}{\\sqrt{R_{th}^2+(X_{th}+X_2)^2}} \\)`, aciklama: "T_max, R₂'den bağımsızdır; yalnızca yeri kayar." },
    { ad: "Senkron Makine Gücü", formul: `\\( P=\\dfrac{3V_\\phi E_A}{X_S}\\sin\\delta \\)`, aciklama: "δ = 90° statik kararlılık sınırı." },
    { ad: "Generatör Uç Gerilimi", formul: `\\( V_t=E_A-I_AR_A \\)`, aciklama: "Motorda E_A=V_t−I_AR_A; yön farkı." },
    { ad: "Gerilim Regülasyonu (Gen.)", formul: `\\( \\text{VR}=\\dfrac{V_{nl}-V_{fl}}{V_{fl}}\\times100 \\)`, aciklama: "Yüksüz–tam yük; şönt generatörde daha büyük." },
    { ad: "Histerezis + Girdap", formul: `\\( P_h=k_hfB_{max}^n V,\\quad P_e=k_ef^2B_{max}^2t^2V \\)`, aciklama: "n≈1.6–2; sac kalınlığı t girdap kaybını karesiyle düşürür." },
    { ad: "Kutup Başına Akı (AC)", formul: `\\( E_{rms}=4.44fN\\phi_{max} \\)`, aciklama: "Trafo ve alternatör emk denklemi." },
    { ad: "Senkron Moment", formul: `\\( \\tau=\\dfrac{3V_\\phi E_A}{\\omega_sX_S}\\sin\\delta \\)`, aciklama: "δ=90°'de kopma momenti; hız sabit, δ değişir." },
    { ad: "Güç Faktörü Düzeltme", formul: `\\( Q_c=P(\\tan\\theta_1-\\tan\\theta_2) \\)`, aciklama: "Hedef cosθ₂ için gereken ileri reaktif güç (kVAr)." },
    { ad: "Yolverme Akımı (Y–Δ)", formul: `\\( I_{Y}=\\dfrac{I_\\Delta}{3},\\quad \\tau_Y=\\dfrac{\\tau_\\Delta}{3} \\)`, aciklama: "Yıldız kalkış akımı ve momenti üçte bire düşer." },
    { ad: "Rotor Direnci ve Kalkış", formul: `\\( s_{max}=\\dfrac{R_2}{\\sqrt{R_1^2+(X_1+X_2)^2}} \\)`, aciklama: "R₂ artar → τ_max aynı, s_max artar → kalkış momenti artar." }
  ],
  galeri: [],
  dokumanlar: [],
  videolar: [
    { baslik: "Electrical Machines (Tam Kurs Playlist)", playlist: "PLuUdFsbOK_8qVROrfl2M2WSV2xAz-ABVU" },
    { baslik: "NPTEL — Electrical Machines-1 (Trafo + DC Makineler, Tam Kurs)", playlist: "PLSYTQDtMTw0LGnOMI_lr6y_Q38V6RvNWr" },
    { baslik: "3 Fazlı Asenkron Motor Nasıl Çalışır? (animasyon)", youtube: "LtJoJBUSe28" },
    { baslik: "AC Asenkron Motor: eşdeğer devre ve tork–hız eğrisi", youtube: "_JWmXB7edYY" }
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
    },
    {
      tip: "vize",
      soru: `<p>Ortalama akı yolu \\( l_c=0.4\\,\\text{m} \\), kesit \\( A=4\\,\\text{cm}^2 \\),
             \\( \\mu_r=2000 \\) olan bir çekirdeğe 200 sarım sarılmış ve sargıdan 2 A geçiyor.
             Relüktansı, akıyı ve akı yoğunluğunu bulun.</p>`,
      cozum: `
        <p>Önce relüktans:</p>
                \\[ \\mathcal{R}=\\frac{l_c}{\\mu_r\\mu_0 A}
                   =\\frac{0.4}{2000\\,(4\\pi\\times10^{-7})(4\\times10^{-4})}\\approx 3.98\\times10^{5}\\;\\text{A·sar/Wb} \\]
                <p>mmk ve akı:</p>
                \\[ \\mathcal{F}=NI=200(2)=400\\;\\text{A·sar}, \\qquad
                   \\phi=\\frac{\\mathcal{F}}{\\mathcal{R}}\\approx 1.0\\times10^{-3}\\;\\text{Wb} \\]
                \\[ B=\\frac{\\phi}{A}=\\frac{1.0\\times10^{-3}}{4\\times10^{-4}}\\approx 2.5\\;\\text{T} \\]
                <p><b>Yorum:</b> 2.5 T pratikte doyma bölgesinin çok üstündedir — gerçek çekirdekte
                \\( \\mu_r \\) çökeceği için akı bu değere ulaşmaz. Doğrusal çözümün nerede geçersizleştiğini
                göstermesi açısından tipik bir sınav sorusudur.</p>`
    },
    {
      tip: "vize",
      soru: `<p>50 Hz'de çalışan bir transformatörün çekirdeğinde \\( B_{max}=1.2\\,\\text{T} \\),
             kesit \\( A=50\\,\\text{cm}^2 \\), primer sarım sayısı \\( N_1=300 \\)'dür.
             Primer anma gerilimini bulun.</p>`,
      cozum: `
        \\[ \\phi_{max}=B_{max}A=1.2\\times50\\times10^{-4}=6\\times10^{-3}\\;\\text{Wb} \\]
                \\[ V_1=4.44fN_1\\phi_{max}=4.44(50)(300)(6\\times10^{-3})\\approx 400\\;\\text{V} \\]`
    },
    {
      tip: "vize",
      soru: `<p>Bir transformatörde primere yansıtılmış değerler \\( R_{eq}=0.5\\,\\Omega \\),
             \\( X_{eq}=1.2\\,\\Omega \\)'dur. Yansıtılmış sekonder gerilimi 2400 V, yansıtılmış yük
             akımı 20 A ve güç katsayısı 0.8 geridir. Gerilim regülasyonunu bulun.</p>`,
      cozum: `
        <p>Geri (endüktif) güç katsayısında yaklaşık gerilim düşümü:</p>
                \\[ \\Delta V \\approx I(R_{eq}\\cos\\theta + X_{eq}\\sin\\theta)
                   =20\\,(0.5\\times0.8 + 1.2\\times0.6)=20(0.4+0.72)=22.4\\;\\text{V} \\]
                \\[ \\mathrm{VR}=\\frac{22.4}{2400}\\times100\\approx 0.93\\% \\]
                <p>Kapasitif yükte \\( X_{eq}\\sin\\theta \\) terimi işaret değiştirir ve VR negatife düşebilir.</p>`
    },
    {
      tip: "vize",
      soru: `<p>10 kVA'lık bir transformatörün çekirdek kaybı 100 W, anma yükündeki bakır kaybı
             250 W'tır. (a) Anma yükünde ve güç katsayısı 1'de verimi, (b) maksimum verimin hangi
             yük oranında oluştuğunu bulun.</p>`,
      cozum: `
        <p><b>(a)</b> Çıkış gücü \\( P_{\\text{çık}}=10\\,\\text{kVA}\\times1=10\\,000\\;\\text{W} \\):</p>
                \\[ \\eta=\\frac{10000}{10000+100+250}\\times100\\approx 96.6\\% \\]
                <p><b>(b)</b> Maksimum verim \\( x^2P_{cu}=P_c \\) koşulunda oluşur:</p>
                \\[ x=\\sqrt{\\frac{P_c}{P_{cu}}}=\\sqrt{\\frac{100}{250}}\\approx 0.632 \\]
                <p>Yani anma yükünün ≈%63'ünde. Bu yükte toplam kayıp \\( 100+100=200\\;\\text{W} \\):</p>
                \\[ \\eta_{max}=\\frac{6320}{6320+200}\\times100\\approx 96.9\\% \\]`
    },
    {
      tip: "vize",
      soru: `<p>Ayrı uyarmalı bir DC motorda \\( V_t=240\\,\\text{V} \\), \\( R_A=0.4\\,\\Omega \\),
             \\( I_A=25\\,\\text{A} \\) ve hız 1200 d/dk'dır. Akı sabit tutulup yük momenti iki katına
             çıkarılırsa yeni hız ne olur?</p>`,
      cozum: `
        <p>Mevcut durumdaki zıt emk:</p>
                \\[ E_{A1}=V_t-I_AR_A=240-25(0.4)=230\\;\\text{V} \\]
                <p>\\( T=K\\phi I_A \\) ve akı sabit olduğundan moment iki katına çıkınca
                \\( I_{A2}=50\\;\\text{A} \\):</p>
                \\[ E_{A2}=240-50(0.4)=220\\;\\text{V} \\]
                <p>\\( E_A=K\\phi\\omega \\) ve \\( K\\phi \\) sabit olduğundan hızlar emk'lerle orantılıdır:</p>
                \\[ n_2=n_1\\frac{E_{A2}}{E_{A1}}=1200\\cdot\\frac{220}{230}\\approx 1148\\;\\text{d/dk} \\]
                <p>Şönt/ayrı uyarmalı motorda hızın yükle çok az düşmesinin sayısal karşılığı budur.</p>`
    },
    {
      tip: "final",
      soru: `<p>Bir röle nüvesinin endüktansı hava aralığı \\( x \\) ile
             \\( L(x)=\\dfrac{0.08}{0.5+x}\\;\\text{H} \\) (x metre) biçiminde değişiyor.
             Sargıdan 3 A geçerken \\( x=0.1\\,\\text{m} \\) konumundaki kuvveti bulun ve yönünü yorumlayın.</p>`,
      cozum: `
        <p>Doğrusal ortamda koenerji \\( W'=\\tfrac12 L(x)i^2 \\); kuvvet akım sabitken türevdir:</p>
                \\[ f=\\frac{1}{2}i^2\\frac{dL}{dx}, \\qquad
                   \\frac{dL}{dx}=-\\frac{0.08}{(0.5+x)^2} \\]
                \\[ f=\\frac{1}{2}(3)^2\\left(-\\frac{0.08}{(0.6)^2}\\right)
                   =4.5\\times(-0.222)\\approx -1.0\\;\\text{N} \\]
                <p><b>Yorum:</b> İşaretin negatif olması kuvvetin \\( x \\)'i <b>azaltan</b> yönde olduğunu
                gösterir — nüve hava aralığını kapatmaya, yani endüktansı büyütmeye çalışır. Bütün relüktans
                tipi aktüatörlerin ortak davranışı budur.</p>`
    },
    {
      tip: "final",
      soru: `<p>4 kutuplu, 50 Hz, 3 fazlı bir asenkron motor 1440 d/dk ile dönüyor.
             (a) Senkron hızı, (b) kaymayı, (c) rotor frekansını bulun.</p>`,
      cozum: `
        \\[ \\text{(a)}\\quad n_s=\\frac{120f}{p}=\\frac{120(50)}{4}=1500\\;\\text{d/dk} \\]
                \\[ \\text{(b)}\\quad s=\\frac{1500-1440}{1500}=0.04\\;\\;(\\%4) \\]
                \\[ \\text{(c)}\\quad f_r=sf=0.04(50)=2\\;\\text{Hz} \\]
                <p>Rotor frekansının bu kadar düşük olması, rotor demirindeki çekirdek kaybının neden ihmal
                edilebildiğini açıklar.</p>`
    },
    {
      tip: "final",
      soru: `<p>Yukarıdaki motorun hava aralığı gücü \\( P_{AG}=12\\,\\text{kW} \\)'tır. Sürtünme ve
             rüzgâr kaybı 300 W ise (a) rotor bakır kaybını, (b) mekanik gelişen gücü, (c) mil çıkış
             gücünü ve (d) indüklenen momenti bulun.</p>`,
      cozum: `
        \\[ \\text{(a)}\\quad P_{rotor,cu}=sP_{AG}=0.04(12000)=480\\;\\text{W} \\]
                \\[ \\text{(b)}\\quad P_{mek}=(1-s)P_{AG}=0.96(12000)=11\\,520\\;\\text{W} \\]
                \\[ \\text{(c)}\\quad P_{mil}=11520-300=11\\,220\\;\\text{W} \\]
                <p>Moment <b>senkron</b> hıza bölünerek bulunur:</p>
                \\[ \\omega_s=\\frac{2\\pi(1500)}{60}=157.1\\;\\text{rad/s}, \\qquad
                   T_{ind}=\\frac{12000}{157.1}\\approx 76.4\\;\\text{N·m} \\]`
    },
    {
      tip: "final",
      soru: `<p>Bir senkron jeneratörde \\( V_\\phi=277\\,\\text{V} \\), \\( E_A=350\\,\\text{V} \\),
             \\( X_S=2.5\\,\\Omega \\) ve güç açısı \\( \\delta=20° \\)'dir.
             (a) Üç fazlı çıkış gücünü, (b) makinenin çıkarabileceği maksimum gücü bulun.</p>`,
      cozum: `
        \\[ \\text{(a)}\\quad P=\\frac{3V_\\phi E_A}{X_S}\\sin\\delta
                   =\\frac{3(277)(350)}{2.5}\\,\\sin20°\\approx 116\\,340\\times0.342\\approx 39.8\\;\\text{kW} \\]
                \\[ \\text{(b)}\\quad P_{max}=\\frac{3V_\\phi E_A}{X_S}\\approx 116.3\\;\\text{kW}\\quad(\\delta=90°) \\]
                <p>Makine kararlılık sınırının çok altında çalışıyor; \\( \\delta \\) 90°'yi aşarsa senkronizma
                kaybolur, bu yüzden pratikte geniş bir kararlılık payı bırakılır.</p>`
    },
    {
      tip: "vize",
      soru: `<p>Bir trafo çekirdeğinde 50 Hz, \\( B_{max}=1.2\\,\\text{T} \\)'de histerezis kaybı 200 W, girdap akımı kaybı 100 W ölçülmüştür. (a) Aynı \\( B_{max} \\) ile 60 Hz'de toplam çekirdek kaybı ne olur (histerezis \\( \\propto f \\), girdap \\( \\propto f^2 \\))? (b) Gerilim de %20 artırılıp 60 Hz'de çalıştırılırsa \\( B_{max} \\) ne olur? (c) Sac kalınlığı yarıya indirilse hangi kayıp nasıl değişir?</p>`,
      cozum: `
        <p>(a) \\( P_h=200\\cdot\\frac{60}{50}=240 \\) W; \\( P_e=100\\cdot(\\frac{60}{50})^2=144 \\) W → toplam <b>384 W</b> (300'den).</p>
        <p>(b) \\( E=4.44fN\\phi_{max} \\) ⟹ \\( B_{max}\\propto V/f \\): \\( 1.2\\cdot\\frac{1.2}{1.2}=1.2 \\) T — <b>değişmez</b>. Gerilim/frekans oranı sabit kalırsa akı sabit kalır;
        sürücülerde V/f denetiminin nedeni budur.</p>
        <p>(c) Girdap kaybı \\( \\propto t^2 \\) → 100 W → 25 W; histerezis malzemeye bağlı, değişmez. İnce saclar bu yüzden kullanılır.</p>`
    },
    {
      tip: "vize",
      soru: `<p>Ortalama uzunluğu 50 cm, kesiti \\( 10\\,\\text{cm}^2 \\), \\( \\mu_r=1500 \\) olan çekirdeğe 1 mm hava aralığı açılmış ve 400 sarım sarılmıştır. (a) Bobinin endüktansını bulun; hava aralığı olmasa ne olurdu? (b) Aynı çekirdeğe 100 sarımlık ikinci bir bobin sarılırsa karşılıklı endüktans (kaçaksız) nedir?</p>`,
      cozum: `
        <p>Relüktanslar: \\( \\mathcal R_c=\\dfrac{0.5}{1500\\cdot4\\pi10^{-7}\\cdot10^{-3}}=2.65\\times10^5 \\), \\( \\mathcal R_g=\\dfrac{10^{-3}}{4\\pi10^{-7}\\cdot10^{-3}}=7.96\\times10^5 \\) A/Wb.
        Aralık 1 mm ama relüktansın %75'i onda.</p>
        <p>(a) \\( L=\\dfrac{N^2}{\\mathcal R_{top}}=\\dfrac{160000}{1.06\\times10^6}=\\mathbf{0.151\\;H} \\). Aralıksız: \\( 160000/2.65\\times10^5=0.60 \\) H — 4 kat büyük ama doymaya ve
        \\( \\mu_r \\)'nin sıcaklık/akı ile değişmesine bağlı; aralık endüktansı <b>doğrusallaştırır</b> (bobin/trafo tasarımında bilinçli açılır).</p>
        <p>(b) \\( M=\\dfrac{N_1N_2}{\\mathcal R}=\\dfrac{400\\cdot100}{1.06\\times10^6}=\\mathbf{37.7\\;mH} \\); kontrol \\( M=\\sqrt{L_1L_2}=\\sqrt{0.151\\cdot0.00943}=37.7 \\) mH ✓ (k=1).</p>`
    },
    {
      tip: "vize",
      soru: `<p>Üç fazlı 34.5 kV / 480 V, 500 kVA, Δ–Y bağlı bir trafo. (a) Her fazın sarım oranı, (b) anma yükünde hat ve faz akımları (her iki tarafta), (c) tek fazlı 480/120 V, 10 kVA trafo ototransformatöre çevrilip 600/480 V olarak bağlanırsa aktarabileceği görünür güç nedir?</p>`,
      cozum: `
        <p>(a) Primer Δ → faz gerilimi = hat = 34.5 kV; sekonder Y → faz = \\( 480/\\sqrt3=277 \\) V. Oran \\( a=34500/277=\\mathbf{124.5} \\) (hat oranı 71.9 ile karıştırılmamalı).</p>
        <p>(b) Primer hat \\( I=\\dfrac{500\\text{k}}{\\sqrt3\\cdot34.5\\text{k}}=8.37 \\) A, faz (Δ içi) \\( 8.37/\\sqrt3=4.83 \\) A. Sekonder hat = faz \\( =\\dfrac{500\\text{k}}{\\sqrt3\\cdot480}=601 \\) A.
        Kontrol: \\( 4.83\\cdot124.5=601 \\) ✓.</p>
        <p>(c) Seri sargı 120 V, ortak sargı 480 V: 600/480. Seri sargının anma akımı \\( 10\\text{k}/120=83.3 \\) A → \\( S=600\\cdot83.3=\\mathbf{50\\;kVA} \\) — 5 kat!
        Kazanç \\( \\dfrac{N_C+N_{SE}}{N_{SE}}=\\dfrac{480+120}{120}=5 \\). Yalnızca 10 kVA sargı üzerinden geçer; kalan 40 kVA iletkenle doğrudan aktarılır.</p>`
    },
    {
      tip: "vize",
      soru: `<p>Ayrı uyarmalı DC generatör 1200 d/dk'da yüksüz 250 V üretiyor; \\( R_A=0.3\\,\\Omega \\). (a) 40 A yükte uç gerilimi ve regülasyon (endüvi reaksiyonu ihmal), (b) aynı alan akımı ve yükte hız 1500 d/dk olursa uç gerilimi, (c) makine motor olarak 250 V'tan 40 A çekerse hızı nedir?</p>`,
      cozum: `
        <p>(a) \\( V_t=250-40(0.3)=\\mathbf{238\\;V} \\); VR \\( =\\dfrac{250-238}{238}=\\%5 \\).</p>
        <p>(b) \\( E_A\\propto n \\): \\( 250\\cdot\\dfrac{1500}{1200}=312.5 \\) V; \\( V_t=312.5-12=\\mathbf{300.5\\;V} \\).</p>
        <p>(c) Motor: \\( E_A=250-12=238 \\) V; \\( K\\phi \\) sabit, 1200 d/dk ↔ 250 V ⟹ \\( n=1200\\cdot\\dfrac{238}{250}=\\mathbf{1142\\;d/dk} \\). Aynı akı, aynı akım — generatör ve
        motor modları arasında \\( 2I_AR_A \\) kadar emk farkı var.</p>`
    },
    {
      tip: "final",
      soru: `<p>Üç fazlı 4 kutuplu bir statorda faz sargılarına 50 Hz dengeli akım veriliyor. (a) Döner alanın hızını bulun; (b) iki faz bağlantısı yer değiştirirse ne olur; (c) 60 Hz'e geçilirse hız; (d) tek fazlı sargıda neden döner alan oluşmaz, tek fazlı motor nasıl kalkar?</p>`,
      cozum: `
        <p>(a) \\( n_s=\\dfrac{120f}{P}=\\dfrac{120\\cdot50}{4}=\\mathbf{1500\\;d/dk} \\) (\\( \\omega_s=157 \\) rad/s).</p>
        <p>(b) Faz sırası tersine döner → alan (ve motor) <b>ters yönde</b> döner; üç fazlı motorda yön değiştirme = iki fazı takas etmek.</p>
        <p>(c) \\( 1800 \\) d/dk — frekansla orantılı; sürücüyle hız denetiminin temeli.</p>
        <p>(d) Tek fazlı sargı <b>titreşen</b> alan üretir = zıt yönlü iki eşit döner alanın toplamı → net kalkış momenti sıfır (döndürülürse döner!). Kalkış için ikinci
        bir alan gerekir: <b>yardımcı sargı + kapasitör</b> (90° faz farkı ile yaklaşık iki fazlı sistem), ya da gölge kutup. Kalkınca yardımcı sargı santrifüj anahtarla devreden çıkar.</p>`
    },
    {
      tip: "final",
      soru: `<p>6 kutuplu, 50 Hz asenkron motorun kalkış momenti 60 N·m, maksimum momenti 150 N·m ve maksimum moment kayması 0.2'dir. (a) Rotor direnci iki katına çıkarılırsa (bilezikli rotor) \\( \\tau_{max} \\), \\( s_{max} \\) ve yaklaşık kalkış momenti ne olur? (b) Δ bağlı motor Y ile kalkarsa kalkış akımı ve momenti ne olur? (c) Anma hızı 960 d/dk ise anma kayması ve rotor frekansı?</p>`,
      cozum: `
        <p>(a) \\( \\tau_{max} \\) \\( R_2 \\)'den <b>bağımsız</b>: 150 N·m kalır. \\( s_{max}\\propto R_2 \\): 0.4. Moment–kayma eğrisi sağa kayar; kalkış (s=1) artık tepeye daha yakın →
        kalkış momenti belirgin artar (küçük kayma yaklaşımı \\( \\tau\\propto s/R_2 \\) → \\( \\tau_{st}\\approx\\tau_{max}\\dfrac{2}{s_{max}+1/s_{max}} \\): \\( 150\\cdot\\dfrac{2}{0.4+2.5}=103 \\) N·m).
        Bilezikli rotorda kalkışta direnç eklenir, hızlanınca çıkarılır.</p>
        <p>(b) Y bağlantıda faz gerilimi \\( 1/\\sqrt3 \\) → faz akımı \\( 1/\\sqrt3 \\), hat akımı Δ'ya göre \\( 1/3 \\); moment \\( \\propto V^2 \\) → \\( 60/3=\\mathbf{20\\;N·m} \\).
        Yük momenti bundan büyükse motor kalkamaz — Y–Δ yolverme yalnızca hafif kalkan yükler için.</p>
        <p>(c) \\( n_s=1000 \\) d/dk; \\( s=\\dfrac{1000-960}{1000}=0.04 \\); \\( f_r=sf=2 \\) Hz.</p>`
    },
    {
      tip: "final",
      soru: `<p>Bir tesis 400 kW çekiyor, güç faktörü 0.7 geri. Güç faktörünü 0.95'e çıkarmak için 100 kW'lık bir yükü süren senkron motor aşırı uyarılacak. (a) Gereken reaktif güç, (b) senkron motorun görünür gücü ve çalışma güç faktörü, (c) düzeltme öncesi/sonrası şebekeden çekilen hat akımı (400 V, 3 faz).</p>`,
      cozum: `
        <p>(a) Mevcut yük 400 kW, \\( \\tan\\theta_1=\\tan(\\arccos0.7)=1.02 \\) → \\( Q_1=408 \\) kVAr. Motor eklenince toplam \\( P=500 \\) kW; hedef \\( \\tan\\theta_2=0.329 \\) →
        \\( Q_2=164 \\) kVAr. Motor \\( Q_m=408-164=\\mathbf{244\\;kVAr} \\) (ileri) üretmeli.</p>
        <p>(b) \\( S_m=\\sqrt{100^2+244^2}=\\mathbf{264\\;kVA} \\), \\( \\cos\\theta_m=100/264=0.38 \\) <b>ileri</b> — motor esas olarak kondansatör olarak çalışıyor.</p>
        <p>(c) Önce: \\( S_1=400/0.7=571 \\) kVA, \\( I=571\\text{k}/(\\sqrt3\\cdot400)=825 \\) A. Sonra: \\( S_2=500/0.95=526 \\) kVA, \\( I=760 \\) A — 100 kW daha fazla iş yaparken
        şebekeden <b>daha az akım</b> çekiliyor.</p>`
    },
    {
      tip: "final",
      soru: `<p>Şönt DC motor 240 V, \\( R_A=0.5\\,\\Omega \\), \\( R_F=120\\,\\Omega \\), 1000 d/dk'da 40 A hat akımı çekiyor. (a) Endüvi akımı ve zıt emk, (b) hız 1500 d/dk'ya nasıl çıkarılır (alan direnci kaç Ω olmalı — moment sabit, doyma yok), (c) kalkış anında endüvi akımı ve onu 2×anma ile sınırlayan yolverme direnci?</p>`,
      cozum: `
        <p>(a) \\( I_F=240/120=2 \\) A; \\( I_A=38 \\) A; \\( E_A=240-38(0.5)=221 \\) V.</p>
        <p>(b) \\( n\\propto E_A/\\phi \\). Moment sabit: \\( \\tau=K\\phi I_A \\) → akı \\( 1/1.5 \\)'e düşerse \\( I_A \\) 1.5 kat: 57 A, \\( E_A=240-28.5=211.5 \\) V.
        \\( n=1000\\cdot\\dfrac{211.5}{221}\\cdot1.5=1435 \\) d/dk — yaklaşık; tam 1500 için akı oranı yinelenir (\\( \\phi_2/\\phi_1\\approx0.64 \\)). \\( I_F=2\\cdot0.64=1.28 \\) A →
        \\( R_F\\approx\\mathbf{188\\;\\Omega} \\). Alan zayıflatma = temel hızın üstü; altı için endüvi gerilimi düşürülür.</p>
        <p>(c) Kalkışta \\( E_A=0 \\): \\( I_A=240/0.5=480 \\) A (12× anma!). Sınır 76 A → \\( R_{top}=240/76=3.16 \\) Ω → seri \\( R_{st}=\\mathbf{2.66\\;\\Omega} \\), hızlandıkça kademeli çıkarılır.</p>`
    }
  ]
};
