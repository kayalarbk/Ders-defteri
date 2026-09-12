/* ============================================================
   MATH2055 — Discrete Mathematics (Alttan Ders)
   ------------------------------------------------------------
   Bu dosya SADECE bu derse aittir. İçerik eklemek için burayı düzenle.
   Alan açıklamaları için data/EE3061.js başlığına bak.

   Kapsam: Rosen "Discrete Mathematics and Its Applications" temel
   alınarak bir dönemlik giriş dersinin çekirdek konuları.
   ============================================================ */

window.DERSLER = window.DERSLER || {};

window.DERSLER["MATH2055"] = {
  ad: "Discrete Mathematics",
  donem: "Alttan Ders",
  renk: "#34D399",
  ozet: "Önermeler ve yüklem mantığı, çıkarım kuralları ve ispat teknikleri; kümeler, fonksiyonlar, bağıntılar, bağıntı matrisleri ve kapanışlar; algoritma karmaşıklığı (Big-O); sayı teorisi ve modüler aritmetik; tümevarım ve özyineleme; sayma (permütasyon, kombinasyon, güvercin yuvası, içerme-dışarma); özyineleme bağıntıları ve üreteç fonksiyonları; ayrık olasılık; çizge teorisi (Euler/Hamilton, Dijkstra, boyama), ağaçlar; Boole cebiri, Karnaugh haritası ve mantık devreleri.",
  konular: [
    {
      baslik: "1. Önermeler Mantığı ve Doğruluk Tabloları",
      icerik: `
        <p><b>Önerme</b>, kesin olarak doğru (T) ya da yanlış (F) olan bildirim cümlesidir: "5 asaldır" önermedir; "x&gt;3" (x serbest) ve "Kapıyı kapat"
        değildir. Mantık, önermeleri bağlaçlarla birleştirir ve bileşik ifadenin doğruluğunu <b>yalnızca</b> parçaların doğruluğundan hesaplar —
        bu yüzden her bağlaç bir doğruluk tablosuyla tanımlanır.</p>
        <ul>
          <li><b>Değil</b> \\( \\neg p \\); <b>ve</b> \\( p\\wedge q \\) (ikisi de T ise T); <b>veya</b> \\( p\\vee q \\) (en az biri T — kapsayıcı!);
          <b>özel-veya</b> \\( p\\oplus q \\) (tam biri T); <b>ise</b> \\( p\\to q \\); <b>ancak ve ancak</b> \\( p\\leftrightarrow q \\) (aynı değerdeyse T).</li>
          <li><b>\\( p\\to q \\) yalnızca \\( p=T,\\;q=F \\) iken yanlıştır.</b> Öncül yanlışsa koşul "boşuna doğru"dur (vacuously true): "Ay peynirse
          2+2=5" doğru bir önermedir. Bu, günlük dildeki "ise" ile en çok çatışan noktadır ve sınavların favori tuzağıdır. Okumaları:
          "p yeterlidir q için", "q gereklidir p için", "q, p ise", "p ancak q ise" (only if) — hepsi \\( p\\to q \\).</li>
        </ul>
        <p><b>Koşullunun akrabaları:</b> karşıt-ters (contrapositive) \\( \\neg q\\to\\neg p \\) — <b>denktir</b>; ters (converse) \\( q\\to p \\) ve
        karşıt (inverse) \\( \\neg p\\to\\neg q \\) — denk <b>değildir</b> (birbirlerine denktir). "Yağmur yağarsa yer ıslanır" doğruyken "yer ıslaksa yağmur
        yağmıştır" yanlış olabilir (hortum). Ters ile karşıt-tersi karıştırmak yaygın hata.</p>
        <p><b>Doğruluk tablosu</b> n değişken için \\( 2^n \\) satırdır; sistematik sıralama (000, 001, …) atlama yapmayı önler. Tüm satırları T olan
        ifade <b>totoloji</b> (\\( p\\vee\\neg p \\)), tümü F <b>çelişki</b> (\\( p\\wedge\\neg p \\)), diğerleri <b>olumsal</b>. İki ifade her satırda aynı
        değeri alıyorsa <b>mantıksal denktir</b> (\\( \\equiv \\)); denklik göstermenin ilk yolu budur.</p>
        <p><b>İşlem önceliği:</b> \\( \\neg \\) &gt; \\( \\wedge \\) &gt; \\( \\vee \\) &gt; \\( \\to \\) &gt; \\( \\leftrightarrow \\). \\( \\neg p\\wedge q \\) demek \\( (\\neg p)\\wedge q \\).
        Belirsizlikte parantez kullan.</p>
        <p><b>Uygulamalar:</b> mantık kapıları (AND/OR/NOT — 17. konu), programlama koşulları (kısa devre değerlendirme \\( \\wedge,\\vee \\) sırasına duyarlı),
        bit işlemleri (bit-dizisi üzerinde bileşen bazlı \\( \\wedge,\\vee,\\oplus \\) — XOR ile şifreleme ve eşlik biti), veritabanı sorguları.</p>
        <p><b>Bulmaca çözme şablonu:</b> "Şövalyeler doğru, düzenbazlar yalan söyler" tipinde: her kişinin türü için önerme tanımla, söylenenleri
        \\( \\text{şövalye}\\leftrightarrow\\text{söylenen} \\) olarak yaz, tablo ya da durum ayrımıyla çöz.</p>`
    },
    {
      baslik: "2. Mantıksal Denklikler ve Çıkarım Kuralları",
      icerik: `
        <p>Doğruluk tablosu \\( 2^n \\) satırla büyür; denklikleri <b>cebirsel</b> olarak, bilinen kuralları zincirleyerek göstermek daha ölçeklenebilirdir.
        Bu kurallar Boole cebriyle ve küme özdeşlikleriyle birebir aynıdır (\\( \\wedge\\leftrightarrow\\cap,\\;\\vee\\leftrightarrow\\cup,\\;\\neg\\leftrightarrow\\overline{\\ } \\)).</p>
        <ul>
          <li><b>Özdeşlik/baskınlık:</b> \\( p\\wedge T\\equiv p,\\;p\\vee F\\equiv p \\); \\( p\\vee T\\equiv T,\\;p\\wedge F\\equiv F \\).</li>
          <li><b>İdempotent, çift değilleme:</b> \\( p\\vee p\\equiv p \\); \\( \\neg\\neg p\\equiv p \\).</li>
          <li><b>Değişme, birleşme, dağılma:</b> \\( p\\wedge(q\\vee r)\\equiv(p\\wedge q)\\vee(p\\wedge r) \\) ve <b>ikili</b> biçimi
          \\( p\\vee(q\\wedge r)\\equiv(p\\vee q)\\wedge(p\\vee r) \\) — sayılardaki dağılmadan farklı olarak iki yönlü.</li>
          <li><b>De Morgan:</b> \\( \\neg(p\\wedge q)\\equiv\\neg p\\vee\\neg q \\), \\( \\neg(p\\vee q)\\equiv\\neg p\\wedge\\neg q \\) — değil içeri girer, bağlaç değişir.
          Koşulları değillemenin ("hem A hem B değilse" ≠ "ne A ne B") tek doğru yolu.</li>
          <li><b>Yutma:</b> \\( p\\vee(p\\wedge q)\\equiv p \\). <b>Tümleme:</b> \\( p\\vee\\neg p\\equiv T \\).</li>
          <li><b>Koşullu denklikler</b> (en çok kullanılan): \\( p\\to q\\equiv\\neg p\\vee q\\equiv\\neg q\\to\\neg p \\);
          \\( \\neg(p\\to q)\\equiv p\\wedge\\neg q \\); \\( p\\leftrightarrow q\\equiv(p\\to q)\\wedge(q\\to p)\\equiv(p\\wedge q)\\vee(\\neg p\\wedge\\neg q) \\).</li>
        </ul>
        <p><b>Sadeleştirme şablonu:</b> önce tüm \\( \\to,\\leftrightarrow \\)'leri \\( \\neg,\\wedge,\\vee \\)'ye çevir → De Morgan ile değilleri değişkenlere kadar it →
        dağılma/yutma ile topla. Örn. \\( \\neg(p\\vee(\\neg p\\wedge q))\\equiv\\neg p\\wedge\\neg(\\neg p\\wedge q)\\equiv\\neg p\\wedge(p\\vee\\neg q)\\equiv(\\neg p\\wedge p)\\vee(\\neg p\\wedge\\neg q)\\equiv\\neg p\\wedge\\neg q \\).</p>
        <p><b>Normal formlar:</b> her ifade <b>ayrık normal biçime</b> (DNF: \\( \\wedge \\)'lerin \\( \\vee \\)'si — tablodaki T satırlarından okunur) ve
        <b>birleşik normal biçime</b> (CNF: \\( \\vee \\)'lerin \\( \\wedge \\)'i) getirilebilir. SAT problemi (bir CNF sağlanabilir mi?) NP-tam problemlerin ilkidir.</p>
        <p><b>Çıkarım kuralları</b> — geçerli bir argümanda öncüllerin hepsi doğruysa sonuç doğru olmalıdır (\\( (p_1\\wedge\\dots\\wedge p_n)\\to q \\) totoloji):</p>
        <ul>
          <li><b>Modus ponens:</b> \\( p,\\;p\\to q\\;\\vdash\\;q \\). <b>Modus tollens:</b> \\( \\neg q,\\;p\\to q\\;\\vdash\\;\\neg p \\).</li>
          <li><b>Hipotetik kıyas:</b> \\( p\\to q,\\;q\\to r\\;\\vdash\\;p\\to r \\). <b>Ayırıcı kıyas:</b> \\( p\\vee q,\\;\\neg p\\;\\vdash\\;q \\).</li>
          <li><b>Toplama/sadeleştirme/birleştirme:</b> \\( p\\vdash p\\vee q \\); \\( p\\wedge q\\vdash p \\); \\( p,\\;q\\vdash p\\wedge q \\).
          <b>Çözünürlük (resolution):</b> \\( p\\vee q,\\;\\neg p\\vee r\\;\\vdash\\;q\\vee r \\) — otomatik teorem ispatlayıcıların tek kuralı.</li>
        </ul>
        <p><b>Yanılgılar</b> (geçerli görünen geçersiz argümanlar): <b>tersi onaylama</b> \\( p\\to q,\\;q\\vdash p \\) ve <b>öncülü yadsıma</b>
        \\( p\\to q,\\;\\neg p\\vdash\\neg q \\). "Çalışırsan geçersin; geçtin; öyleyse çalıştın" — geçersiz.</p>
        <p><b>Argüman doğrulama şablonu:</b> öncülleri numaralandır, her adımda hangi kuralı hangi satırlara uyguladığını yaz; ya da tek hamlede
        "öncüller T, sonuç F yapan bir atama var mı?" diye tabloyu tersten kur.</p>`
    },
    {
      baslik: "3. Yüklem Mantığı ve Niceleyiciler",
      icerik: `
        <p>Önermeler mantığı "Her insan ölümlüdür, Sokrates insandır, öyleyse Sokrates ölümlüdür" argümanını ifade edemez — cümlelerin <b>içine</b>
        bakmaz. <b>Yüklem</b> \\( P(x) \\), değişken(ler)e bağlı bir ifadedir ("x&gt;3"); x'e değer verilince ya da niceleyiciyle bağlanınca önerme olur.
        Değişkenin alabileceği değerler kümesi <b>evren</b> (domain) — belirtilmeden önerme anlamsızdır.</p>
        <ul>
          <li><b>Evrensel niceleyici</b> \\( \\forall x\\,P(x) \\): evrendeki her x için P doğru. Sonlu evrende \\( P(x_1)\\wedge P(x_2)\\wedge\\dots \\) ile aynı;
          <b>tek bir karşı örnek</b> yanlışlar.</li>
          <li><b>Varlıksal niceleyici</b> \\( \\exists x\\,P(x) \\): en az bir x için doğru — \\( P(x_1)\\vee P(x_2)\\vee\\dots \\); <b>tek bir örnek</b> doğrular.
          \\( \\exists!x \\) "tam bir x".</li>
          <li>Boş evrende \\( \\forall x\\,P(x) \\) doğru, \\( \\exists x\\,P(x) \\) yanlıştır.</li>
        </ul>
        <p><b>Değilleme — niceleyici içeri geçerken tür değiştirir</b> (De Morgan'ın genellemesi):</p>
        \\[ \\neg\\forall x\\,P(x)\\equiv\\exists x\\,\\neg P(x), \\qquad \\neg\\exists x\\,P(x)\\equiv\\forall x\\,\\neg P(x) \\]
        <p>"Herkes geçmedi" ≠ "Hiç kimse geçmedi": ilki \\( \\neg\\forall \\), ikincisi \\( \\forall\\neg \\). Kısıtlı niceleyiciler:
        "tüm kediler uyur" \\( \\forall x(K(x)\\to U(x)) \\) — <b>\\( \\to \\) ile</b>; "bazı kediler uyur" \\( \\exists x(K(x)\\wedge U(x)) \\) — <b>\\( \\wedge \\) ile</b>.
        \\( \\exists x(K(x)\\to U(x)) \\) yazmak klasik hatadır: kedi olmayan tek bir şey bile onu doğrular.</p>
        <p><b>İç içe niceleyiciler — sıra önemlidir:</b> \\( \\forall x\\,\\exists y\\,(x+y=0) \\) doğru (her x için y=−x seçilir; y, x'e bağlı),
        \\( \\exists y\\,\\forall x\\,(x+y=0) \\) yanlış (tek bir y tüm x'lerle çalışmaz). Aynı tür niceleyiciler yer değiştirebilir (\\( \\forall x\\forall y\\equiv\\forall y\\forall x \\)),
        farklı türler değiştirilemez. Okuma stratejisi: dıştan içe "oyun" — \\( \\forall \\) rakip seçer, \\( \\exists \\) sen cevap verirsin; sen her zaman kazanabiliyorsan doğru.</p>
        <p>Zincir değilleme her niceleyiciyi çevirir ve iç yüklemi değiller: \\( \\neg\\forall x\\exists y\\,P\\equiv\\exists x\\forall y\\,\\neg P \\).
        <b>Limit tanımı</b> bunun uygulamasıdır: \\( \\forall\\epsilon&gt;0\\,\\exists\\delta&gt;0\\,\\forall x(|x-a|&lt;\\delta\\to|f(x)-L|&lt;\\epsilon) \\); "limit L değil"
        \\( \\exists\\epsilon\\forall\\delta\\exists x(|x-a|&lt;\\delta\\wedge|f(x)-L|\\ge\\epsilon) \\).</p>
        <p><b>Niceleyicilerle çıkarım:</b> evrensel örnekleme (\\( \\forall x P(x)\\vdash P(c) \\)), evrensel genelleme (keyfi c için \\( P(c) \\) gösterildiyse \\( \\forall x P(x) \\)),
        varlıksal örnekleme (\\( \\exists xP(x) \\) → yeni bir c adıyla \\( P(c) \\)), varlıksal genelleme. Sokrates argümanı: \\( \\forall x(I(x)\\to O(x)) \\), \\( I(s) \\) →
        örnekleme + modus ponens → \\( O(s) \\).</p>
        <p><b>Neden önemli:</b> Yazılım spesifikasyonları ("her istek sonunda yanıtlanır" \\( \\forall r\\exists t \\)), veri tabanı sorguları (SQL'in EXISTS/ALL'u),
        matematiksel tanımların tümü yüklem mantığıyla yazılır; hatalı niceleyici sırası gerçek hatalara (yarış koşulları) karşılık gelir.</p>`
    },
    {
      baslik: "4. İspat Teknikleri",
      icerik: `
        <p>İspat, aksiyomlardan ve önceden kanıtlanmış sonuçlardan geçerli çıkarım kurallarıyla sonuca giden bir argümandır. Çoğu teorem
        \\( \\forall x(P(x)\\to Q(x)) \\) biçimindedir: "keyfi bir x al, P(x) varsay, Q(x) göster". Teknik seçimi soruya göre yapılır.</p>
        <ul>
          <li><b>Doğrudan ispat:</b> p varsay, tanımları aç, cebirle q'ya ulaş. "n tekse n² tektir": n=2k+1 ⟹ n²=2(2k²+2k)+1. Tanımları açmak
          (tek, çift, rasyonel, bölünebilir) çoğu zaman ispatın yarısıdır.</li>
          <li><b>Karşıt-ters ile:</b> \\( \\neg q\\to\\neg p \\) göster. "n² çiftse n çifttir" doğrudan zordur (karekök almak gerekir); karşıt-tersi "n tekse n² tektir"
          bir üst satır. Sonuçta "değil" varsa ya da hipotez zayıfsa bu yolu dene.</li>
          <li><b>Çelişkiyle (reductio):</b> \\( \\neg q \\) varsay, bir çelişki (\\( r\\wedge\\neg r \\)) türet. <b>\\( \\sqrt2 \\) irrasyoneldir:</b> \\( \\sqrt2=a/b \\) en sade
          biçimde varsay → \\( a^2=2b^2 \\) → a çift → \\( a=2c \\) → \\( b^2=2c^2 \\) → b çift → sadelikle çelişir. <b>Asallar sonsuzdur (Öklid):</b> sonlu
          \\( p_1..p_n \\) varsay, \\( N=p_1\\cdots p_n+1 \\) hiçbirine bölünmez → ya asal ya listede olmayan bir asal böler. Çelişki, "olumsuz" iddiaların
          (yoktur, irrasyoneldir, sonsuzdur) standart yoludur.</li>
          <li><b>Durum ayrımı:</b> evreni tüketen durumlara böl, her birini ayrı kanıtla. "\\( n^2\\equiv0 \\) veya \\( 1\\pmod4 \\)": n çift / tek.
          Mutlak değer, mod, min/max içeren iddialar. Durumlar <b>tüm olasılıkları kapsamalı</b> — eksik durum en sık hata.</li>
          <li><b>Boşuna/önemsiz ispat:</b> p her zaman yanlışsa ya da q her zaman doğruysa \\( p\\to q \\) otomatik doğrudur; tümevarım taban adımlarında görülür.</li>
          <li><b>Varlık ispatı:</b> <b>yapıcı</b> — örneği açıkça göster (\\( 1729=1^3+12^3=9^3+10^3 \\)); <b>yapıcı olmayan</b> — var olduğunu göster ama
          göstermeden (\\( \\sqrt2^{\\sqrt2} \\) rasyonel ya da irrasyonel; her iki durumda "irrasyonel üssü irrasyonel = rasyonel" örneği vardır).</li>
          <li><b>Teklik ispatı:</b> bir tane var (varlık) + iki tane varsa eşitler (\\( x=y \\)).</li>
          <li><b>Karşı örnek:</b> \\( \\forall x P(x) \\) iddiasını çürütmek için tek bir x yeter. "Her asal tektir" → 2. Karşı örnek bir <b>ispattır</b> (değillemenin).</li>
          <li><b>Ancak ve ancak:</b> iki yön ayrı ayrı; ya da denklikler zinciri. Birden çok ifadenin denkliği için döngü \\( p_1\\to p_2\\to\\dots\\to p_1 \\).</li>
        </ul>
        <p><b>Yaygın hatalar:</b> sonucu varsayarak başlamak (döngüsel akıl yürütme); örneklerle "ispatlamak" (\\( n^2+n+41 \\) 40 değer için asal, n=40'ta değil);
        sıfıra bölme; "genelliği bozmadan" ifadesini simetri yokken kullanmak; \\( \\sqrt{x^2}=x \\) demek. İspat yazımı: iddia → varsayımlar → adımlar
        gerekçeleriyle → ∎. Her adım bir öncekinden <b>neden</b> çıktığını söylemeli.</p>
        <p><b>Neden önemli:</b> Algoritma doğruluğu (döngü değişmezleri), protokol güvenliği, devre eşdeğerliği — mühendislikte "çalışıyor gibi" ile
        "çalıştığı kanıtlı" arasındaki fark bu tekniklerdir. Tümevarım (10. konu) bu listenin en güçlü üyesidir ve ayrı işlenir.</p>`
    },
    {
      baslik: "5. Kümeler ve Küme İşlemleri",
      icerik: `
        <p>Küme, nesnelerin sırasız ve tekrarsız topluluğudur; \\( \\{1,2,3\\}=\\{3,1,2\\}=\\{1,1,2,3\\} \\). Eleman \\( x\\in A \\), alt küme \\( A\\subseteq B \\)
        (\\( \\forall x(x\\in A\\to x\\in B) \\)), öz alt küme \\( A\\subset B \\). Eşitlik \\( A=B\\iff A\\subseteq B\\wedge B\\subseteq A \\) — küme eşitliği
        ispatlarının standart yolu "iki yönlü kapsama"dır. Boş küme \\( \\emptyset \\) her kümenin alt kümesidir (boşuna doğru); \\( \\emptyset\\ne\\{\\emptyset\\} \\).</p>
        <p>Yazım: liste \\( \\{2,4,6\\} \\) ya da <b>küme kurucu</b> \\( \\{x\\in\\mathbb Z\\mid x\\text{ çift}\\} \\). Standart kümeler \\( \\mathbb N,\\mathbb Z,\\mathbb Q,\\mathbb R \\);
        aralıklar \\( [a,b),\\;(a,b) \\). Kardinalite \\( |A| \\) eleman sayısı.</p>
        <ul>
          <li><b>Birleşim</b> \\( A\\cup B \\) (veya), <b>kesişim</b> \\( A\\cap B \\) (ve), <b>fark</b> \\( A\\setminus B=A\\cap\\overline B \\), <b>tümleyen</b>
          \\( \\overline A=U\\setminus A \\) (evrensel küme U'ya göre), <b>simetrik fark</b> \\( A\\triangle B=(A\\setminus B)\\cup(B\\setminus A) \\) (özel-veya).
          Ayrık: \\( A\\cap B=\\emptyset \\).</li>
          <li><b>Kuvvet kümesi</b> \\( \\mathcal P(A) \\): tüm alt kümeler; \\( |\\mathcal P(A)|=2^{|A|} \\) (her eleman için "al / alma"). \\( \\mathcal P(\\emptyset)=\\{\\emptyset\\} \\).</li>
          <li><b>Kartezyen çarpım</b> \\( A\\times B=\\{(a,b)\\mid a\\in A,b\\in B\\} \\) sıralı çiftler; \\( |A\\times B|=|A||B| \\); \\( A\\times B\\ne B\\times A \\).
          Bağıntıların ve fonksiyonların tanım zeminidir.</li>
          <li><b>Sayma:</b> \\( |A\\cup B|=|A|+|B|-|A\\cap B| \\) (içerme-dışarma); \\( |\\overline A|=|U|-|A| \\).</li>
        </ul>
        <p><b>Küme özdeşlikleri</b>, mantık denklikleriyle bire bir eşleşir (\\( \\cup\\leftrightarrow\\vee \\), \\( \\cap\\leftrightarrow\\wedge \\), tümleyen \\( \\leftrightarrow\\neg \\),
        \\( U\\leftrightarrow T \\), \\( \\emptyset\\leftrightarrow F \\)): De Morgan \\( \\overline{A\\cup B}=\\overline A\\cap\\overline B \\), dağılma, yutma \\( A\\cup(A\\cap B)=A \\), vb.
        <b>Özdeşlik ispatı yolları:</b> (1) iki yönlü kapsama (eleman al, üyelik tablosu); (2) <b>üyelik tablosu</b> — her eleman için "A'da mı (1/0), B'de mi" tüm
        kombinasyonlar, doğruluk tablosunun birebir kopyası; (3) bilinen özdeşliklerle cebir; (4) küme kurucu gösterimle mantığa çevirip denklik.</p>
        <p><b>Venn diyagramı</b> 3 kümeye kadar sezgi verir ama <b>ispat değildir</b>. Genelleştirilmiş işlemler: \\( \\bigcup_{i=1}^nA_i \\), \\( \\bigcap_{i\\in I}A_i \\);
        sonsuz ailelerde \\( \\bigcup_{n\\ge1}[0,1-\\tfrac1n]=[0,1) \\) gibi ince sonuçlar.</p>
        <p><b>Sonsuz kümeler ve sayılabilirlik:</b> \\( \\mathbb N \\) ile bijeksiyon kurulabilen küme <b>sayılabilir</b>: \\( \\mathbb Z \\) (0,1,−1,2,−2,…), \\( \\mathbb Q \\)
        (çapraz sayma), \\( \\mathbb N\\times\\mathbb N \\). \\( \\mathbb R \\) sayılamaz — <b>Cantor'un köşegen argümanı</b>: listelendiği varsayılan tüm ondalıklardan,
        her birinin n. hanesinden farklı bir sayı kur; listede yoktur, çelişki. Dolayısıyla "farklı büyüklükte sonsuzluklar" vardır; \\( |\\mathcal P(A)|&gt;|A| \\) her zaman.
        Bilgisayar bilimindeki sonucu: programlar sayılabilir, fonksiyonlar \\( \\mathbb N\\to\\{0,1\\} \\) sayılamaz ⟹ <b>hesaplanamayan fonksiyonlar vardır</b>.</p>
        <p><b>Bilgisayarda kümeler:</b> evrensel küme sabitse bit dizisi (i. bit: i. eleman var mı) — \\( \\cup,\\cap,\\overline{\\ } \\) = bit OR/AND/NOT, tek işlemde.
        <b>Çoklu küme</b> (multiset) tekrar sayar; <b>bulanık küme</b> üyelik derecesi [0,1].</p>`
    },
    {
      baslik: "6. Fonksiyonlar",
      icerik: `
        <p>\\( f:A\\to B \\), her \\( a\\in A \\)'yı <b>tam bir</b> \\( f(a)\\in B \\)'ye eşler. A <b>tanım kümesi</b>, B <b>değer (hedef) kümesi</b>, \\( f(A)=\\{f(a)\\} \\)
        <b>görüntü</b> (range) — B'nin alt kümesidir, eşit olmak zorunda değildir. İyi tanımlılık: her girdi için çıktı var ve tek. \\( f(x)=\\sqrt x \\),
        \\( \\mathbb R\\to\\mathbb R \\) fonksiyon değildir (negatiflerde tanımsız); \\( \\mathbb R_{\\ge0}\\to\\mathbb R \\) fonksiyondur.</p>
        <ul>
          <li><b>Birebir (injective, 1-1):</b> farklı girdiler farklı çıktılar — \\( f(a_1)=f(a_2)\\Rightarrow a_1=a_2 \\). İspat: eşitliği varsay, \\( a_1=a_2 \\) çıkar.
          Çürütme: iki farklı girdi, aynı çıktı (\\( x^2 \\): \\( f(-1)=f(1) \\)). Yatay çizgi testi. Sonlu kümelerde \\( |A|\\le|B| \\) gerekir.</li>
          <li><b>Örten (surjective, onto):</b> her \\( b\\in B \\) için bir öngörüntü var — \\( \\forall b\\,\\exists a\\,f(a)=b \\). İspat: keyfi b al, a'yı <b>çöz</b>.
          Çürütme: ulaşılamayan bir b göster (\\( x^2 \\), \\( \\mathbb R\\to\\mathbb R \\): −1). \\( |A|\\ge|B| \\) gerekir.</li>
          <li><b>Bijeksiyon:</b> ikisi de → <b>ters fonksiyon</b> \\( f^{-1}:B\\to A \\) vardır; \\( f^{-1}(f(a))=a \\). Bijeksiyon = "eleman eşlemesi",
          \\( |A|=|B| \\) tanımının temeli (sonsuz kümelerde bile). \\( f(x)=3x-2 \\): birebir ✓, örten ✓ (\\( x=(y+2)/3 \\)), tersi \\( (y+2)/3 \\).</li>
        </ul>
        <p><b>Bileşke</b> \\( (g\\circ f)(x)=g(f(x)) \\) — önce f, sonra g; tanımlı olması için \\( f \\)'nin görüntüsü g'nin tanım kümesinde olmalı. Değişmeli değil.
        \\( g\\circ f \\) birebirse f birebirdir; örtense g örtendir. Bijeksiyonların bileşkesi bijeksiyondur; \\( (g\\circ f)^{-1}=f^{-1}\\circ g^{-1} \\).</p>
        <p><b>Ayrık matematiğin fonksiyonları:</b> <b>taban</b> \\( \\lfloor x\\rfloor \\) (x'i geçmeyen en büyük tam sayı: \\( \\lfloor-1.5\\rfloor=-2 \\)!), <b>tavan</b> \\( \\lceil x\\rceil \\);
        özellikler: \\( \\lfloor x\\rfloor\\le x&lt;\\lfloor x\\rfloor+1 \\), \\( \\lceil x\\rceil=-\\lfloor-x\\rfloor \\), \\( \\lfloor x+n\\rfloor=\\lfloor x\\rfloor+n \\) (n tam sayı) — ama
        \\( \\lfloor x+y\\rfloor\\ne\\lfloor x\\rfloor+\\lfloor y\\rfloor \\) genelde. Uygulamalar: n biti k bitlik bloklara bölmek \\( \\lceil n/k\\rceil \\) blok; ikili arama adımı
        \\( \\lceil\\log_2n\\rceil \\). <b>Faktöriyel</b>, <b>mod</b>, <b>bit uzunluğu</b> \\( \\lfloor\\log_2n\\rfloor+1 \\). <b>Karakteristik/gösterge fonksiyonu</b>
        \\( 1_A(x) \\) küme ↔ fonksiyon köprüsü.</p>
        <p><b>Kısmi fonksiyon:</b> bazı girdilerde tanımsız (bölme, program çıktısı — sonlanmayabilir). <b>Diziler</b> \\( \\mathbb N\\to\\mathbb R \\) fonksiyonlarıdır:
        \\( a_n \\). Toplam gösterimi \\( \\sum_{i=1}^n a_i \\), indeks kaydırma, çift toplamlar \\( \\sum_i\\sum_j \\) (sıra değişebilir, sonlu ise), çarpım \\( \\prod \\).</p>
        <p><b>Fonksiyonların büyüklüğü</b> (bir sonraki konulara köprü): \\( |B^A| \\) = A'dan B'ye fonksiyon sayısı \\( =|B|^{|A|} \\); birebir fonksiyon sayısı
        \\( P(|B|,|A|) \\); bijeksiyon sayısı \\( n! \\). Bu sayımlar kombinatoriğin (11. konu) fonksiyon dilidir.</p>`
    },
    {
      baslik: "7. Bağıntılar: Denklik ve Kısmi Sıralama",
      icerik: `
        <p>A'dan B'ye bir <b>bağıntı</b> \\( R\\subseteq A\\times B \\) sıralı çiftler kümesidir; \\( aRb \\) ⟺ \\( (a,b)\\in R \\). Fonksiyon, her a'nın tam bir b ile
        eşlendiği özel bağıntıdır; bağıntı genel olarak "0, 1 ya da birçok" eşleme yapar — "böler", "&lt;", "aynı sınıfta", "bağlıdır", "SQL tablosu".
        A üzerinde bağıntı (\\( A\\times A \\) alt kümesi) için dört temel özellik:</p>
        <ul>
          <li><b>Yansıyan:</b> \\( \\forall a\\;aRa \\). ("≤" evet, "&lt;" hayır.) Matriste köşegen tümüyle 1.</li>
          <li><b>Simetrik:</b> \\( aRb\\Rightarrow bRa \\). ("kardeşi" evet, "böler" hayır.) Matris simetrik. <b>Ters-simetrik:</b> \\( aRb\\wedge bRa\\Rightarrow a=b \\)
          ("≤", "⊆", "böler" — pozitiflerde). Simetrik ve ters-simetrik <b>zıt değildir</b>: eşitlik ikisidir; \\( \\{(1,2),(2,1),(1,3)\\} \\) hiçbiridir.</li>
          <li><b>Geçişken:</b> \\( aRb\\wedge bRc\\Rightarrow aRc \\). ("&lt;", "atası" evet; "arkadaşı", "1 farkla" hayır.) Kontrolü en zahmetli özellik;
          matris dilinde \\( M_R^2\\le M_R \\) (Boole çarpım).</li>
        </ul>
        <p><b>Denklik bağıntısı</b> = yansıyan + simetrik + geçişken. Anlamı: "bir bakıma aynı olma". Kümeyi ayrık <b>denklik sınıflarına</b> böler
        \\( [a]=\\{x\\mid xRa\\} \\); sınıflar bir <b>bölüntü</b> oluşturur (birleşimleri A, ikişer ayrık) ve her bölüntü bir denklik bağıntısı tanımlar — ikisi aynı
        bilgidir. Örnekler: \\( a\\equiv b\\pmod n \\) → n sınıf (\\( \\mathbb Z_n \\)); "aynı uzunlukta dize"; "aynı doğruluk tablosu" (mantıksal denklik);
        çizgede "aynı bağlı bileşende". <b>Bölüm kümesi</b> \\( A/R \\) sınıfların kümesidir.</p>
        <p><b>Kısmi sıralama (poset)</b> = yansıyan + ters-simetrik + geçişken; \\( (A,\\preceq) \\). "≤", "⊆", "böler" (\\( \\mathbb Z^+ \\)), "alt görev–üst görev".
        <b>Kısmi</b>: her çift karşılaştırılabilir değildir (2 ve 3 bölünebilirlikte). Karşılaştırılabilir çiftler ise <b>tam (doğrusal) sıralama</b> (≤ sayılarda,
        sözlük sırası). <b>Hasse diyagramı</b>: geçişkenlik ve yansıma okları silinir, büyük olan üstte — \\( D_{12}=\\{1,2,3,4,6,12\\} \\) bölünebilirlik diyagramı klasik.</p>
        <ul>
          <li><b>Maksimal/minimal:</b> üstünde/altında kimse yok (birden çok olabilir). <b>En büyük/en küçük:</b> herkesten büyük/küçük (varsa tek).</li>
          <li><b>Üst sınır, en küçük üst sınır (lub/join ∨), en büyük alt sınır (glb/meet ∧):</b> her çiftin lub ve glb'si varsa <b>kafes</b> (lattice):
          \\( (\\mathcal P(S),\\subseteq) \\) kafestir (∪,∩); \\( (\\mathbb Z^+,\\mid) \\) kafestir (lcm, gcd); Boole cebri özel bir kafestir.</li>
          <li><b>Topolojik sıralama:</b> kısmi sırayı onunla uyumlu bir tam sıraya genişletme — görev zamanlaması, derleme bağımlılıkları, Makefile.
          Algoritma: minimal elemanı al, çıkar, tekrarla.</li>
          <li><b>İyi sıralı küme:</b> her boş olmayan alt kümenin en küçük elemanı var (\\( \\mathbb N \\)) — tümevarımın çalışmasının nedeni.</li>
        </ul>
        <p><b>Neden önemli:</b> Veri tabanları (ilişkisel model = bağıntılar; birleşim, seçim, izdüşüm işlemleri), eşdeğerlik sınıfları ile durum indirgeme
        (otomatlarda), bağımlılık çözümleyicileri (poset + topolojik sıra), sürüm kontrolünde kısmi sıra (dallanan tarihçe).</p>`
    },
    {
      baslik: "8. Bağıntı Matrisleri, Bileşke ve Kapanışlar",
      icerik: `
        <p>Sonlu bir küme üzerindeki bağıntı iki biçimde <b>hesaplanabilir</b> hale gelir: <b>sıfır-bir matrisi</b> \\( M_R \\) (\\( m_{ij}=1\\iff a_iRa_j \\)) ve
        <b>yönlü çizge</b> (digraph: \\( a\\to b \\) oku ⟺ aRb, döngü ⟺ aRa). Özellikler doğrudan okunur: yansıyan ⟺ köşegen 1'ler / her düğümde döngü;
        simetrik ⟺ \\( M_R=M_R^T \\) / her ok çift yönlü; ters-simetrik ⟺ \\( i\\ne j \\) için \\( m_{ij}m_{ji}=0 \\).</p>
        <p><b>İşlemler:</b> \\( M_{R\\cup S}=M_R\\vee M_S \\), \\( M_{R\\cap S}=M_R\\wedge M_S \\), tersi \\( M_{R^{-1}}=M_R^T \\). <b>Bileşke</b> \\( S\\circ R=\\{(a,c)\\mid\\exists b:aRb\\wedge bSc\\} \\)
        ("R sonra S") matris dilinde <b>Boole çarpımıdır</b>: \\( M_{S\\circ R}=M_R\\odot M_S \\) (çarpım yerine ∧, toplam yerine ∨). Kuvvetler
        \\( R^n=R\\circ R^{n-1} \\): \\( aR^nb \\) ⟺ digrafta a'dan b'ye <b>tam n adımlık yol</b> var. Geçişkenlik testi: \\( R^2\\subseteq R \\).</p>
        <p><b>Kapanış</b>: R'yi içeren, istenen özelliğe sahip <b>en küçük</b> bağıntı — "eksik çiftleri en az sayıda ekleyerek özelliği sağla".</p>
        <ul>
          <li><b>Yansıyan kapanış:</b> \\( R\\cup\\Delta \\), \\( \\Delta=\\{(a,a)\\} \\) — köşegeni 1 yap.</li>
          <li><b>Simetrik kapanış:</b> \\( R\\cup R^{-1} \\) — \\( M_R\\vee M_R^T \\).</li>
          <li><b>Geçişken kapanış</b> \\( R^* \\) (ya da \\( R^+ \\)): \\( R\\cup R^2\\cup\\dots\\cup R^n \\) (n=|A|; daha uzun yollar tekrar içerir, gerekmez).
          Anlamı: digrafta a'dan b'ye <b>herhangi uzunlukta yol</b> varsa \\( (a,b) \\) — <b>bağlanabilirlik bağıntısı</b>. "Uçuş bağlantısı ile ulaşılabilirlik",
          "hangi modüller dolaylı bağımlı", "kimin atası".</li>
        </ul>
        <p><b>Warshall algoritması</b> geçişken kapanışı \\( O(n^3) \\)'te bulur (kuvvetleri tek tek çarpmak \\( O(n^4) \\)): \\( W_0=M_R \\); k=1..n için
        \\( W_k[i][j]=W_{k-1}[i][j]\\vee(W_{k-1}[i][k]\\wedge W_{k-1}[k][j]) \\) — "i'den j'ye, ara düğümleri yalnızca ilk k düğümden olan yol var mı".
        Adım k: k. satır ve k. sütundaki 1'lerin kesişimlerini 1 yap. Aynı iskelet Floyd–Warshall (en kısa yollar) ve düzenli ifade üretiminde kullanılır.</p>
        <p><b>Denklik kapanışı:</b> yansıyan + simetrik + geçişken kapanışlar sırayla (\\( (R\\cup\\Delta\\cup R^{-1})^* \\)) — "arkadaşın arkadaşı" ilişkisinden
        topluluklar (bağlı bileşenler). <b>Sıra:</b> geçişken kapanış en sonda alınmalı; önce alınırsa simetrikleştirme geçişkenliği bozabilir.</p>
        <p><b>n-li bağıntılar ve veri tabanları:</b> \\( R\\subseteq A_1\\times\\dots\\times A_n \\) bir <b>tablo</b>dur (sütunlar = alanlar, satırlar = kayıtlar).
        İlişkisel cebir: <b>seçim</b> \\( \\sigma_C \\) (koşulu sağlayan satırlar), <b>izdüşüm</b> \\( \\pi_{i_1,\\dots,i_k} \\) (sütun seçme, tekrarları at),
        <b>birleştirme</b> \\( J_p \\) (ortak p alan üzerinden iki tabloyu yapıştır — SQL JOIN). <b>Birincil anahtar</b>: değeri satırı tek belirleyen alan
        (fonksiyonel bağımlılık); bileşik anahtarlar birden çok alan.</p>
        <p><b>Neden önemli:</b> Bağlanabilirlik analizi (ağ topolojisi, erişim kontrolü — kim neye dolaylı erişebilir), derleyicilerde bağımlılık kapanışı,
        otomat ve düzenli ifade kuramında \\( R^* \\) ("yıldız" işlemi bu kapanıştır).</p>`
    },
    {
      baslik: "9. Algoritmalar ve Karmaşıklık (Big-O)",
      icerik: `
        <p><b>Algoritma</b>, bir problemi çözen sonlu, kesin, etkili adımlar dizisidir; sözde kodla yazılır. Aynı problem için birçok algoritma vardır;
        karşılaştırma ölçütü <b>girdi boyutu n ile kaynak (zaman/bellek) nasıl büyür</b> sorusudur — makine hızı, sabit çarpanlar ve küçük n önemsizdir.</p>
        <p><b>Big-O</b> (üst sınır): \\( f(n)=O(g(n)) \\) ⟺ \\( \\exists C&gt;0,\\;k \\): \\( n&gt;k \\) için \\( |f(n)|\\le C|g(n)| \\). "f, en fazla g kadar hızlı büyür."
        İspat: C ve k <b>tanıkları</b> bul. \\( 3n^2+5n+7=O(n^2) \\): n≥1'de \\( \\le3n^2+5n^2+7n^2=15n^2 \\) → C=15, k=1. Polinomda baskın terim, sabitler
        düşer: \\( O(5n^3)=O(n^3) \\). \\( n^2 \\) de \\( O(n^3) \\)'tür (üst sınır gevşek olabilir) ama sıkı sınır istenir.</p>
        <p><b>Ω</b> (alt sınır): \\( f\\ge Cg \\) — "en az g kadar". <b>Θ</b> (sıkı): hem O hem Ω — "tam g mertebesinde". \\( \\sum_{i=1}^ni=\\Theta(n^2) \\).
        Sıralama problemi \\( \\Omega(n\\log n) \\) (karşılaştırmalı, alt sınır) ve merge sort \\( O(n\\log n) \\) → \\( \\Theta(n\\log n) \\) optimal.</p>
        <p><b>Büyüme hiyerarşisi</b> (küçükten büyüğe): \\( 1\\prec\\log n\\prec\\sqrt n\\prec n\\prec n\\log n\\prec n^2\\prec n^3\\prec2^n\\prec n!\\prec n^n \\).
        Logaritmanın tabanı önemsiz (\\( \\log_an=\\Theta(\\log_bn) \\)); \\( n^{100}=O(1.01^n) \\) — her polinom her üstelden küçüktür. \\( n=10^6 \\)'da
        \\( n\\log n\\approx2\\times10^7 \\), \\( n^2=10^{12} \\), \\( 2^n \\) evrenin ömründe bitmez.</p>
        <p><b>Kurallar:</b> toplam → maksimum: \\( O(f)+O(g)=O(\\max(f,g)) \\) (ardışık bloklar); çarpım: \\( O(f)\\cdot O(g)=O(fg) \\) (iç içe döngüler).
        İç içe iki döngü \\( n\\cdot n \\) → \\( O(n^2) \\); her adımda yarıya bölme → \\( O(\\log n) \\); yarıya bölüp her seviyede n iş → \\( O(n\\log n) \\).
        <b>Analiz şablonu:</b> en içteki temel işlemi say, döngü sınırlarını toplama çevir, kapalı biçim (10. konu toplamları), baskın terimi al.</p>
        <ul>
          <li><b>Doğrusal arama</b> \\( O(n) \\); <b>ikili arama</b> (sıralı liste) \\( O(\\log n) \\): 10⁹ elemanda 30 adım.</li>
          <li><b>Kabarcık/ekleme sıralaması</b> \\( O(n^2) \\); <b>merge/heap sort</b> \\( O(n\\log n) \\); quicksort ortalama \\( n\\log n \\), en kötü \\( n^2 \\).</li>
          <li><b>Matris çarpımı</b> naif \\( O(n^3) \\); <b>Öklid gcd</b> \\( O(\\log n) \\); <b>tüm alt kümeleri deneme</b> \\( O(2^n) \\); <b>tüm permütasyonlar</b> \\( O(n!) \\).</li>
          <li><b>Açgözlü değişim (greedy):</b> bozuk para problemi — standart paralar için optimal, keyfi para sistemlerinde değil (karşı örnek: {1,3,4} ile 6).</li>
        </ul>
        <p><b>En kötü / ortalama / en iyi durum:</b> genelde en kötü raporlanır (garanti). Uzay karmaşıklığı aynı dille (ek bellek). <b>İzlenebilir</b>
        (polinom zamanlı, P) ile <b>izlenemez</b> (üstel) ayrımı: <b>NP</b> = çözümü polinomda doğrulanabilenler; <b>NP-tam</b> (SAT, gezgin satıcı, çizge boyama,
        sırt çantası) — biri polinomda çözülürse hepsi çözülür; P=NP? bilinmiyor (milyon dolarlık soru). Pratik sonuç: NP-tam problemde tam çözüm yerine
        yaklaşık/sezgisel algoritma aranır; kriptografi ise "zor" problemlere (çarpanlara ayırma) <b>güvenir</b>.</p>
        <p><b>Sık hatalar:</b> \\( O(n^2) \\)'yi "tam \\( n^2 \\)" sanmak (üst sınırdır); \\( 2^{n+1}=O(2^n) \\) ✓ ama \\( 2^{2n}\\ne O(2^n) \\); \\( (n+1)!\\ne O(n!) \\);
        \\( \\log(n!)=\\Theta(n\\log n) \\) (Stirling); iç içe döngülerde iç sınır dıştaki değişkene bağlıysa toplamı gerçekten yazmak gerekir (\\( \\sum_{i}i=n^2/2 \\) yine \\( n^2 \\), ama \\( \\sum_i\\log i \\) farklı).</p>`
    },
    {
      baslik: "10. Sayı Teorisi ve Modüler Aritmetik",
      icerik: `
        <p><b>Bölünebilirlik:</b> \\( a\\mid b \\) ⟺ \\( \\exists k:\\;b=ak \\). Özellikler: \\( a\\mid b\\wedge a\\mid c\\Rightarrow a\\mid(mb+nc) \\); \\( a\\mid b\\wedge b\\mid c\\Rightarrow a\\mid c \\).
        <b>Bölme algoritması:</b> her a ve \\( d&gt;0 \\) için tek \\( q,r \\): \\( a=dq+r,\\;0\\le r&lt;d \\) — \\( q=a\\,\\mathbf{div}\\,d=\\lfloor a/d\\rfloor \\), \\( r=a\\bmod d \\).
        Negatiflerde dikkat: \\( -11\\bmod3=1 \\) (\\( -11=3(-4)+1 \\)), programlama dillerinin \\% operatörü farklı davranabilir.</p>
        <p><b>Kongrüans:</b> \\( a\\equiv b\\pmod m \\) ⟺ \\( m\\mid(a-b) \\) ⟺ aynı kalan. Denklik bağıntısıdır; sınıflar \\( \\mathbb Z_m=\\{0,\\dots,m-1\\} \\).
        <b>Toplama ve çarpma kalanlarla uyumludur:</b> \\( a\\equiv b,\\;c\\equiv d\\Rightarrow a+c\\equiv b+d,\\;ac\\equiv bd \\). Dolayısıyla büyük hesaplarda
        <b>her adımda mod al</b>: \\( 7^{100}\\bmod5 \\): \\( 7\\equiv2 \\), \\( 2^4=16\\equiv1 \\), \\( 2^{100}=(2^4)^{25}\\equiv1 \\). <b>Bölme yoktur</b>: \\( 6\\equiv2\\pmod4 \\)
        ama \\( 3\\not\\equiv1 \\). Bölme yerine ters eleman kullanılır (aşağıda).</p>
        <p><b>Asallar:</b> tam iki pozitif böleni olan sayılar; <b>aritmetiğin temel teoremi</b>: her \\( n&gt;1 \\) asalların çarpımı olarak <b>tek</b> biçimde yazılır.
        Deneme bölmesi \\( \\sqrt n \\)'e kadar yeter (bölen varsa biri \\( \\le\\sqrt n \\)). Asallar sonsuzdur (Öklid, 4. konu). Asal sayı teoremi:
        n civarında asal yoğunluğu \\( \\approx1/\\ln n \\) — 1024 bitlik rastgele sayı ~1/710 olasılıkla asal; RSA anahtar üretimi buna dayanır.
        Eratosthenes kalburu \\( O(n\\log\\log n) \\).</p>
        <p><b>EBOB ve EKOK:</b> \\( \\gcd(a,b) \\) ortak bölenlerin en büyüğü; \\( \\gcd=1 \\) ise <b>aralarında asal</b>. Asal çarpanlarla: gcd → min üsler, lcm → max üsler;
        \\( \\gcd(a,b)\\cdot\\text{lcm}(a,b)=ab \\). <b>Öklid algoritması</b> çarpanlara ayırmadan, \\( O(\\log) \\) adımda: \\( \\gcd(a,b)=\\gcd(b,a\\bmod b) \\), kalan 0 olunca dur.
        \\( \\gcd(252,198)\\): 252=1·198+54, 198=3·54+36, 54=1·36+18, 36=2·18 → 18.</p>
        <p><b>Bézout / genişletilmiş Öklid:</b> \\( \\gcd(a,b)=sa+tb \\) olacak şekilde tam sayılar vardır; Öklid adımlarını geriye sararak bulunur
        (\\( 18=54-36=54-(198-3\\cdot54)=4\\cdot54-198=4(252-198)-198=4\\cdot252-5\\cdot198 \\)). Sonuçları: \\( p\\mid ab\\Rightarrow p\\mid a\\vee p\\mid b \\) (p asal);
        \\( \\gcd(c,m)=1 \\) ise \\( ac\\equiv bc\\pmod m\\Rightarrow a\\equiv b \\) (sadeleştirme izni).</p>
        <p><b>Modüler ters:</b> \\( \\gcd(a,m)=1 \\) ise \\( a\\bar a\\equiv1\\pmod m \\) olan \\( \\bar a \\) vardır (Bézout'daki s) ve tektir (mod m). \\( 3^{-1}\\bmod7=5 \\) (15≡1).
        Doğrusal kongrüans \\( ax\\equiv b\\pmod m \\): tersle çarp. <b>Çin Kalan Teoremi:</b> \\( m_i \\) ikişer aralarında asalsa \\( x\\equiv a_i\\pmod{m_i} \\) sisteminin
        \\( \\bmod\\;m_1\\cdots m_k \\) tek çözümü vardır: \\( x=\\sum a_iM_iy_i \\), \\( M_i=M/m_i \\), \\( y_i=M_i^{-1}\\bmod m_i \\). Büyük sayıları küçük modüllerde paralel hesaplamanın temeli.</p>
        <p><b>Fermat'ın küçük teoremi:</b> p asal, \\( p\\nmid a \\) ⟹ \\( a^{p-1}\\equiv1\\pmod p \\) (dolayısıyla her a için \\( a^p\\equiv a \\)). Büyük üsleri indirger:
        \\( 3^{302}\\bmod7 \\): \\( 302=6\\cdot50+2 \\) → \\( 9\\equiv2 \\). <b>Euler genellemesi:</b> \\( \\gcd(a,n)=1 \\) ⟹ \\( a^{\\phi(n)}\\equiv1 \\), \\( \\phi(pq)=(p-1)(q-1) \\).
        <b>Hızlı üs alma</b> (kare al–çarp): \\( a^n\\bmod m \\) \\( O(\\log n) \\) çarpmayla — üssün ikili açılımı.</p>
        <p><b>Uygulamalar:</b> <b>hash</b> \\( h(k)=k\\bmod m \\); <b>sözde rastgele sayılar</b> \\( x_{n+1}=(ax_n+c)\\bmod m \\) (LCG); <b>kontrol basamakları</b> (ISBN mod 11, IBAN mod 97);
        <b>Sezar/afin şifre</b> \\( c=(ak+b)\\bmod26 \\), çözüm tersle; <b>RSA:</b> \\( n=pq \\), \\( ed\\equiv1\\pmod{\\phi(n)} \\), şifre \\( c=m^e\\bmod n \\), çöz \\( m=c^d\\bmod n \\) —
        güvenliği n'yi çarpanlara ayırmanın zorluğuna dayanır; <b>Diffie–Hellman</b> ayrık logaritmaya. Devre tarafında: sayaçlar mod \\( 2^k \\) aritmetiğidir,
        ikiye tümleyen \\( -x\\equiv2^k-x \\). <b>Taban dönüşümü:</b> ardışık bölme kalanları (10→2), Horner (2→10); 8 ve 16 tabanları 3'er/4'er bit gruplama.</p>`
    },
    {
      baslik: "11. Tümevarım ve Özyineleme (Recursion)",
      icerik: `
        <p><b>Matematiksel tümevarım</b>, doğal sayılar üzerindeki \\( \\forall n\\ge n_0\\,P(n) \\) iddialarını kanıtlar. Dominolar: ilk taş düşer (taban) ve her taş
        bir sonrakini düşürür (adım) ⟹ hepsi düşer. Geçerliliği \\( \\mathbb N \\)'nin iyi sıralılığından gelir (en küçük karşı örnek olamaz).</p>
        <ol>
          <li><b>Taban adımı:</b> \\( P(n_0) \\) doğru (genelde \\( n_0=0 \\) ya da 1; bazen 4, 5 — "\\( 2^n&gt;n^2 \\) için \\( n\\ge5 \\)").</li>
          <li><b>Tümevarım adımı:</b> keyfi \\( k\\ge n_0 \\) için \\( P(k)\\Rightarrow P(k+1) \\). \\( P(k) \\) <b>tümevarım hipotezidir</b> — onu <b>varsayarız</b>,
          doğru olduğunu iddia etmeyiz.</li>
        </ol>
        <p><b>Yazım şablonu</b> (puanın çoğu buradan): "P(n): … olsun. Taban: n=1'de … ✓. Adım: P(k) doğru olsun, yani …. P(k+1)'i göstermeliyiz: ….
        [hipotezi kullandığın satırı belirt]. Böylece P(k+1) doğru. Tümevarımla her n≥1 için P(n). ∎" Adımda <b>k+1 tarafından başlayıp hipotezi içinde bul</b>;
        eşitsizliklerde zincir: \\( \\text{sol}_{k+1}=\\text{sol}_k+\\dots\\le\\text{sağ}_k+\\dots\\le\\text{sağ}_{k+1} \\).</p>
        <p><b>Klasik sonuçlar</b> (hepsi tümevarımla): \\( \\sum_{i=1}^ni=\\frac{n(n+1)}2 \\); \\( \\sum i^2=\\frac{n(n+1)(2n+1)}6 \\); \\( \\sum i^3=\\big(\\frac{n(n+1)}2\\big)^2 \\);
        \\( \\sum_{i=0}^nr^i=\\frac{r^{n+1}-1}{r-1}\\;(r\\ne1) \\); \\( \\sum_{i=0}^n2^i=2^{n+1}-1 \\); \\( n!&gt;2^n\\;(n\\ge4) \\); \\( 3\\mid n^3-n \\); \\( n \\) elemanlı kümenin \\( 2^n \\)
        alt kümesi; \\( 2^n \\) kareli bir tahta L-parçalarla döşenir; \\( \\sum_{i=1}^n\\frac1{i(i+1)}=\\frac n{n+1} \\) (teleskopik).</p>
        <p><b>Güçlü tümevarım:</b> adımda \\( P(n_0),\\dots,P(k) \\)'nin <b>hepsi</b> varsayılır. Gerekli olduğu durumlar: iddia birden çok küçük duruma dayanıyorsa —
        "her \\( n\\ge2 \\) asalların çarpımıdır" (n bileşikse \\( n=ab \\), a ve b için hipotez); "her \\( n\\ge12 \\) 4 ve 5'lik pullarla ödenir" (n−4 için hipotez,
        tabanlar 12,13,14,15); Fibonacci eşitsizlikleri (\\( f_n&gt;\\alpha^{n-2} \\), iki önceki terim). Zayıf ve güçlü tümevarım eşdeğer güçtedir; güçlü yalnızca yazımı kolaylaştırır.</p>
        <p><b>Sık hatalar:</b> tabanı unutmak ("tüm atlar aynı renktir" sahte ispatı n=1→2'de çöker); adımda P(k+1)'i varsayıp geriye çalışmak (döngüsel);
        hipotezi hiç kullanmamak (o zaman tümevarım değil, doğrudan ispattır — genelde yanlıştır); adımın <b>her</b> k için geçerli olduğunu kontrol etmemek.</p>
        <p><b>Özyinelemeli (rekürsif) tanımlar</b> tümevarımın tanım tarafıdır: <b>taban durumu</b> + <b>özyineleme kuralı</b>.
        Fonksiyonlar: \\( 0!=1,\\;n!=n\\cdot(n-1)! \\); Fibonacci \\( f_0=0,f_1=1,f_n=f_{n-1}+f_{n-2} \\); \\( a^0=1,\\;a^n=a\\cdot a^{n-1} \\).
        <b>Kümeler:</b> \\( 3\\in S \\), \\( x,y\\in S\\Rightarrow x+y\\in S \\) → 3'ün pozitif katları. <b>Dizeler:</b> \\( \\lambda\\in\\Sigma^* \\); \\( w\\in\\Sigma^*,a\\in\\Sigma\\Rightarrow wa\\in\\Sigma^* \\);
        uzunluk \\( l(wa)=l(w)+1 \\). <b>İyi biçimli formüller</b>, <b>parantez dizileri</b>, <b>ağaçlar</b> (tek düğüm ağaçtır; iki ağacı köke bağlarsan ağaçtır)
        hep böyle tanımlanır ve <b>yapısal tümevarımla</b> özellikleri kanıtlanır: taban elemanlar için göster, kural uygulandığında korunduğunu göster.
        Örn. "her tam ikili ağaçta yaprak sayısı = iç düğüm + 1".</p>
        <p><b>Özyinelemeli algoritmalar:</b> problemi küçük kopyalara indir. \\( \\gcd(a,b)=\\gcd(b,a\\bmod b) \\); ikili arama; merge sort (böl, sırala, birleştir);
        Hanoi kuleleri \\( H_n=2H_{n-1}+1=2^n-1 \\); hızlı üs \\( a^n=(a^{n/2})^2 \\). Doğruluk ispatı tümevarımla, maliyet analizi <b>özyineleme bağıntısıyla</b> (13. konu).
        <b>Yineleme vs özyineleme:</b> naif Fibonacci \\( O(\\phi^n) \\) — aynı alt problemi tekrar tekrar çözer; <b>hafızalama</b>/dinamik programlama ya da döngü \\( O(n) \\).</p>`
    },
    {
      baslik: "12. Sayma Temelleri: Permütasyon, Kombinasyon, Güvercin Yuvası",
      icerik: `
        <p>Sayma, "kaç farklı yol var" sorusunu <b>listelemeden</b> yanıtlar; algoritma analizinin, olasılığın ve kodlama teorisinin dilidir.</p>
        <ul>
          <li><b>Çarpma kuralı:</b> işlem k bağımsız aşamadan oluşuyor, i. aşamada \\( n_i \\) seçenek → \\( n_1n_2\\cdots n_k \\). 7 haneli şifre (harf/rakam): \\( 36^7 \\);
          n bitlik dizi \\( 2^n \\); \\( |A\\times B|=|A||B| \\); A'dan B'ye fonksiyon \\( |B|^{|A|} \\).</li>
          <li><b>Toplama kuralı:</b> <b>ayrık</b> durumların sayıları toplanır. Ayrık değilse <b>içerme-dışarma</b> (12. konu). Çoğu soru: durumlara böl (toplama),
          her durumu aşamalara böl (çarpma).</li>
          <li><b>Çıkarma (tümleyen) kuralı:</b> "en az bir" → toplam − "hiç": en az bir 0 içeren 8-bit dizi \\( 2^8-1 \\).</li>
          <li><b>Bölme kuralı:</b> her nesne tam d kez sayıldıysa \\( n/d \\). Yuvarlak masaya n kişi: \\( n!/n=(n-1)! \\).</li>
        </ul>
        <p><b>Permütasyon</b> — sıralı, tekrarsız seçim: \\( P(n,r)=n(n-1)\\cdots(n-r+1)=\\dfrac{n!}{(n-r)!} \\); \\( P(n,n)=n! \\). "10 yarışçıda ilk 3 sıralaması" 720.</p>
        <p><b>Kombinasyon</b> — sırasız, tekrarsız: \\( C(n,r)=\\dbinom nr=\\dfrac{P(n,r)}{r!}=\\dfrac{n!}{r!(n-r)!} \\). Her r-alt küme \\( r! \\) permütasyona karşılık gelir
        (bölme kuralı). Özellikler: \\( \\binom nr=\\binom n{n-r} \\) (seçilenler ↔ seçilmeyenler), \\( \\binom n0=\\binom nn=1 \\), \\( \\sum_r\\binom nr=2^n \\).
        <b>Sıra ne zaman önemli?</b> Pozisyonlar/roller farklıysa (başkan, yardımcı) permütasyon; homojen grup (komite) kombinasyon. "Komiteden başkan seç"
        \\( \\binom{10}3\\cdot3 \\) ile \\( 10\\cdot\\binom92 \\) aynı sonucu verir — iki yoldan sayıp kontrol et.</p>
        <p><b>Tekrarlı sayma:</b></p>
        <ul>
          <li><b>Tekrarlı permütasyon:</b> n çeşit, r sıralı seçim, tekrar serbest: \\( n^r \\).</li>
          <li><b>Tekrarlı kombinasyon</b> (n çeşitten r tane, sıra yok): \\( \\dbinom{n+r-1}{r} \\). <b>Yıldız–çubuk:</b> r yıldızı n−1 çubukla n kutuya ayır.
          "4 çeşit meyveden 6 tane" \\( \\binom96=84 \\); \\( x_1+\\dots+x_n=r \\)'nin negatif olmayan tam sayı çözümleri; "en az 1'er" için önce birer ver: \\( \\binom{r-1}{n-1} \\).</li>
          <li><b>Ayırt edilemeyen nesnelerin permütasyonu:</b> \\( n_1,\\dots,n_k \\) tekrarlı n nesne: \\( \\dfrac{n!}{n_1!\\cdots n_k!} \\). MISSISSIPPI: \\( 11!/(4!4!2!)=34650 \\).</li>
          <li><b>Nesneleri kutulara dağıtma</b> (4 durum): ayırt edilebilir nesne/kutu → \\( k^n \\); ayırt edilemez nesne, ayırt edilebilir kutu → yıldız–çubuk;
          ayırt edilebilir nesne, ayırt edilemez kutu → Stirling sayıları; ikisi de ayırt edilemez → tam sayı bölüntüleri (kapalı formül yok).</li>
        </ul>
        <p><b>Güvercin yuvası ilkesi:</b> k kutuya \\( k+1 \\) nesne → en az bir kutuda ≥2. <b>Genelleştirilmiş:</b> N nesne k kutuya → bir kutuda en az \\( \\lceil N/k\\rceil \\).
        Kanıt çelişkiyle (her kutu \\( &lt;\\lceil N/k\\rceil \\) ise toplam \\( &lt;N \\)). Ustalık <b>kutuları tanımlamaktadır</b>: "367 kişide iki ortak doğum günü";
        "\\( \\{1..2n\\} \\)'den \\( n+1 \\) sayı → biri diğerini böler" (kutu = en büyük tek bölen); "her \\( n+1 \\) tam sayıda farkı n'e bölünen iki sayı var" (kutu = mod n kalanı);
        "\\( n^2+1 \\) uzunluklu dizide \\( n+1 \\) uzunluklu monoton alt dizi var" (Erdős–Szekeres); "5 nokta birim karede → ikisi \\( \\le\\sqrt2/2 \\) yakın" (4 çeyrek kare).
        Ters yönde \\( \\lceil N/k\\rceil\\ge m \\) için en küçük N: \\( N=k(m-1)+1 \\). <b>Hash çakışmaları</b> ve <b>kayıpsız sıkıştırmanın sınırı</b> bu ilkedir.</p>
        <p><b>Çözüm disiplini:</b> (1) ne seçiliyor, kaçtan; (2) sıra önemli mi; (3) tekrar var mı; (4) kısıt varsa önce kısıtı yerleştir ("A ile B yan yana": onları bir blok say ×2);
        (5) mümkünse ikinci yoldan sayıp doğrula. En sık hata: aynı yapılandırmayı birden çok kez saymak (aşırı sayma) — "en az bir" için doğrudan toplamak yerine tümleyen kullan.</p>`
    },
    {
      baslik: "13. Binom Teoremi ve İçerme-Dışarma",
      icerik: `
        <p><b>Binom teoremi</b> — \\( (x+y)^n \\) açılımında \\( x^{n-k}y^k \\)'nin katsayısı, n çarpandan k tanesinden y seçme sayısıdır:</p>
        \\[ (x+y)^n=\\sum_{k=0}^n\\binom nkx^{n-k}y^k \\]
        <p>Bu, "binom katsayısı" adının kaynağıdır ve <b>kombinatorik ispatın</b> ilk örneğidir: cebirsel bir özdeşliği "iki taraf aynı şeyi sayıyor" diyerek kanıtlamak.
        Özel değerler: \\( x=y=1 \\) → \\( \\sum_k\\binom nk=2^n \\) (tüm alt kümeler); \\( x=1,y=-1 \\) → \\( \\sum(-1)^k\\binom nk=0 \\) (çift ve tek alt kümeler eşit sayıda);
        \\( x=1,y=2 \\) → \\( \\sum\\binom nk2^k=3^n \\). \\( (1+x)^n \\)'in türevi: \\( \\sum k\\binom nk=n2^{n-1} \\).
        \\( (2x-3y)^5 \\)'te \\( x^2y^3 \\) katsayısı: \\( \\binom53(2)^2(-3)^3=-1080 \\).</p>
        <p><b>Pascal özdeşliği:</b> \\( \\dbinom nk=\\dbinom{n-1}{k-1}+\\dbinom{n-1}k \\) — belirli bir elemanı içeren / içermeyen k-alt kümeler. <b>Pascal üçgeni</b> bundan
        kurulur; simetrik, satır toplamı \\( 2^n \\), ortadaki en büyük. Diğer özdeşlikler (her biri bir sayma hikâyesiyle): <b>Vandermonde</b>
        \\( \\binom{m+n}r=\\sum_k\\binom mk\\binom n{r-k} \\) (iki gruptan toplam r seç); \\( \\binom{2n}n=\\sum_k\\binom nk^2 \\); <b>hokey sopası</b> \\( \\sum_{j=k}^n\\binom jk=\\binom{n+1}{k+1} \\);
        \\( k\\binom nk=n\\binom{n-1}{k-1} \\) (komite + başkan, iki yoldan). <b>Çok terimli teorem:</b> \\( (x_1+\\dots+x_m)^n \\)'de \\( x_1^{n_1}\\cdots x_m^{n_m} \\) katsayısı
        \\( \\frac{n!}{n_1!\\cdots n_m!} \\).</p>
        <p><b>İçerme-dışarma ilkesi</b> — birleşimi saymak için tek tek topla, ikili kesişimleri çıkar (iki kez sayıldılar), üçlüleri geri ekle, …:</p>
        \\[ |A\\cup B|=|A|+|B|-|A\\cap B|, \\qquad |A\\cup B\\cup C|=|A|+|B|+|C|-|A\\cap B|-|A\\cap C|-|B\\cap C|+|A\\cap B\\cap C| \\]
        \\[ \\Big|\\bigcup_{i=1}^nA_i\\Big|=\\sum_i|A_i|-\\sum_{i&lt;j}|A_i\\cap A_j|+\\sum_{i&lt;j&lt;k}|A_i\\cap A_j\\cap A_k|-\\dots+(-1)^{n+1}|A_1\\cap\\dots\\cap A_n| \\]
        <p>Kanıt: birleşimde m kümeye ait bir eleman sağda \\( \\binom m1-\\binom m2+\\dots=1-(1-1)^m=1 \\) kez sayılır — binom teoremi! Toplam \\( 2^n-1 \\) terim.</p>
        <p><b>Uygulama şablonu:</b> "1–1000 arasında 2, 3 <b>veya</b> 5'e bölünenler": \\( 500+333+200-166-100-66+33=734 \\). Kesişimler EKOK'la (6, 10, 15, 30).
        <b>Tümleyen biçimi</b> ("hiçbirine bölünmeyen"): \\( |U|-|\\bigcup| \\) — Euler φ fonksiyonu \\( \\phi(n)=n\\prod_{p\\mid n}(1-\\frac1p) \\) tam bu hesaptır.</p>
        <ul>
          <li><b>Örten fonksiyon sayısı</b> (m elemanlı kümeden n'ye): \\( \\sum_{k=0}^n(-1)^k\\binom nk(n-k)^m \\) — "en az bir değer boşta kalan"ları dışla. n işi m kişiye, her iş en az birine.</li>
          <li><b>Düzensizlikler (derangement)</b> — hiçbir eleman yerinde değil: \\( D_n=n!\\sum_{k=0}^n\\frac{(-1)^k}{k!}\\approx n!/e \\). Şapka problemi: n kişi rastgele şapka alır,
          kimse kendininkini almaz ≈ %36.8 (n'den bağımsız!). \\( D_n=(n-1)(D_{n-1}+D_{n-2}) \\).</li>
          <li><b>Kısıtlı yıldız-çubuk:</b> \\( x_1+x_2+x_3=15 \\), her \\( x_i\\le6 \\): kısıtsız \\( \\binom{17}2 \\) − bir değişken ≥7 olanlar (\\( 3\\binom{10}2 \\)) + ikisi ≥7 (\\( 3\\binom32 \\)) − … </li>
          <li><b>Asal sayma (Legendre):</b> \\( \\le100 \\) ve 2,3,5,7'ye bölünmeyenler = 1 ve 10'dan büyük asallar.</li>
        </ul>
        <p><b>Sık hatalar:</b> içerme-dışarmada işaret düzenini bozmak; kesişimi EKOK yerine çarpımla saymak (\\( |A_2\\cap A_4| \\) 8'e değil 4'e bölünenler);
        binom açılımında işareti/katsayıyı \\( (2x)^k \\) yerine \\( 2x^k \\) yazmak.</p>`
    },
    {
      baslik: "14. Özyineleme Bağıntıları (Recurrence) Çözümü",
      icerik: `
        <p>Bir dizinin terimini öncekilerle veren denklem <b>özyineleme bağıntısıdır</b>; başlangıç koşullarıyla birlikte diziyi belirler. Kaynakları: özyinelemeli
        algoritmaların maliyeti (\\( T(n) \\)), sayma problemleri (n basamaklı, ardışık 0 içermeyen diziler \\( a_n=a_{n-1}+a_{n-2} \\)), finans (bileşik faiz \\( P_n=1.05P_{n-1} \\)),
        popülasyon (Fibonacci'nin tavşanları), Hanoi kuleleri \\( H_n=2H_{n-1}+1 \\). <b>Çözmek</b> = kapalı biçim \\( a_n=f(n) \\) bulmak.</p>
        <p><b>Bağıntı kurma</b> (sınavın ilk yarısı): "son adıma bak" — n uzunluklu nesne, son elemanının türüne göre daha küçük nesnelerden nasıl kurulur?
        Ardışık iki 0 içermeyen n-bit dizi: son bit 1 ise başı herhangi \\( a_{n-1} \\); son bit 0 ise öncesi 1 ve başı \\( a_{n-2} \\) → \\( a_n=a_{n-1}+a_{n-2} \\), \\( a_1=2,a_2=3 \\).
        Merdiveni 1 ya da 2 basamak çıkma yolları aynı bağıntı. \\( 2\\times n \\) döşeme, parantezleme (Catalan \\( C_n=\\sum C_kC_{n-1-k} \\)) benzer.</p>
        <p><b>Doğrusal homojen sabit katsayılı</b> \\( a_n=c_1a_{n-1}+\\dots+c_ka_{n-k} \\): çözümler \\( r^n \\) biçiminde aranır → <b>karakteristik denklem</b>
        \\( r^k=c_1r^{k-1}+\\dots+c_k \\).</p>
        <ul>
          <li><b>Farklı kökler</b> \\( r_1\\ne r_2 \\): \\( a_n=\\alpha_1r_1^n+\\alpha_2r_2^n \\). Fibonacci: \\( r^2=r+1 \\), \\( r=\\frac{1\\pm\\sqrt5}2 \\) →
          \\( f_n=\\frac1{\\sqrt5}\\big(\\varphi^n-(1-\\varphi)^n\\big) \\) (Binet); \\( f_n\\approx\\varphi^n/\\sqrt5 \\), büyüme oranı altın oran 1.618.</li>
          <li><b>Katlı kök</b> \\( r_1=r_2=r \\): \\( a_n=(\\alpha_1+\\alpha_2n)r^n \\). \\( a_n=4a_{n-1}-4a_{n-2} \\) → \\( (r-2)^2 \\) → \\( (\\alpha_1+\\alpha_2n)2^n \\).</li>
          <li><b>Karmaşık kökler:</b> \\( r=\\rho e^{\\pm i\\theta} \\) → \\( \\rho^n(\\alpha\\cos n\\theta+\\beta\\sin n\\theta) \\) — salınımlı diziler (sayısal filtre dürtü yanıtları!).</li>
          <li>Genel k. derece: \\( k \\) kök, \\( k \\) sabit, \\( k \\) başlangıç koşulundan doğrusal sistem.</li>
        </ul>
        <p><b>Homojen olmayan</b> \\( a_n=c_1a_{n-1}+\\dots+F(n) \\): çözüm = homojen çözüm + <b>özel çözüm</b> \\( a_n^{(p)} \\). \\( F(n) \\)'in biçimine göre dene:
        polinom → aynı dereceli polinom; \\( s^n \\) → \\( Cs^n \\) (s kök değilse; kökse \\( Cns^n \\)); çarpım → çarpım. Hanoi: \\( H_n=2H_{n-1}+1 \\), homojen \\( \\alpha2^n \\),
        özel sabit \\( C=-1 \\), \\( H_1=1 \\) → \\( 2^n-1 \\). \\( a_n=3a_{n-1}+2n \\): özel \\( pn+q \\) → \\( p=-1,q=-3/2 \\). Sabitler <b>en sonda</b>, toplam çözüme
        başlangıç koşulları uygulanarak bulunur (yaygın hata: homojen kısma uygulamak).</p>
        <p><b>Yineleme (geriye açma) yöntemi:</b> \\( a_n=a_{n-1}+3 \\) → \\( a_{n-2}+6 \\) → … → \\( a_0+3n \\); \\( a_n=2a_{n-1} \\) → \\( 2^na_0 \\). Örüntüyü tahmin et, tümevarımla doğrula.
        1. derece \\( a_n=ra_{n-1}+d \\) genel: \\( a_n=r^na_0+d\\frac{r^n-1}{r-1} \\) (kredi taksiti formülü).</p>
        <p><b>Böl ve yönet bağıntıları</b> \\( T(n)=aT(n/b)+f(n) \\) — a alt problem, her biri n/b boyutunda, f(n) birleştirme maliyeti. <b>Ana Teorem (Master):</b>
        \\( f(n)=\\Theta(n^d) \\) ise \\( T(n)= \\Theta(n^d) \\) eğer \\( a&lt;b^d \\); \\( \\Theta(n^d\\log n) \\) eğer \\( a=b^d \\); \\( \\Theta(n^{\\log_ba}) \\) eğer \\( a&gt;b^d \\).
        Sezgi: \\( \\log_bn \\) seviyeli özyineleme ağacında iş azalıyorsa kök baskın, sabitse her seviye eşit (log çarpanı), artıyorsa yapraklar baskın.
        İkili arama \\( T=T(n/2)+1 \\) → \\( \\log n \\); merge sort \\( 2T(n/2)+n \\) → \\( n\\log n \\); Strassen \\( 7T(n/2)+n^2 \\) → \\( n^{2.81} \\); Karatsuba çarpma \\( 3T(n/2)+n \\) → \\( n^{1.58} \\).</p>
        <p><b>Sık hatalar:</b> karakteristik denklemi kurarken işaretleri taşımayı unutmak (\\( a_n-c_1a_{n-1}-c_2a_{n-2}=0 \\)); katlı kökte \\( n \\) çarpanını atlamak;
        özel çözümü homojen çözümle çakışan biçimde denemek; Master teoremde \\( a \\) ile \\( b \\)'yi karıştırmak.</p>`
    },
    {
      baslik: "15. Üreteç Fonksiyonları",
      icerik: `
        <p><b>Üreteç fonksiyonu</b>, bir diziyi bir kuvvet serisinin katsayıları olarak paketler:</p>
        \\[ G(x)=\\sum_{k=0}^\\infty a_kx^k=a_0+a_1x+a_2x^2+\\dots \\]
        <p>x yalnızca bir "askı"dır; yakınsama umursanmaz (formel seri). Gücü: dizi işlemleri (kaydırma, toplama, konvolüsyon) seri işlemlerine (x ile çarpma,
        toplama, çarpma) dönüşür — <b>z-dönüşümüyle aynı fikir</b> (\\( x=z^{-1} \\)), olasılıkta MGF/PGF ile aynı.</p>
        <p><b>Temel seriler</b> (ezberlenmeli):</p>
        <ul>
          <li>\\( \\dfrac1{1-x}=\\sum x^k \\) (dizi 1,1,1,…); \\( \\dfrac1{1-ax}=\\sum a^kx^k \\); \\( \\dfrac{1}{1-x^m} \\) → m'nin katlarında 1.</li>
          <li>\\( \\dfrac1{(1-x)^2}=\\sum(k+1)x^k \\); genel: \\( \\dfrac1{(1-x)^n}=\\sum_k\\dbinom{n+k-1}{k}x^k \\) — <b>tekrarlı kombinasyon</b> katsayıları.</li>
          <li>\\( (1+x)^n=\\sum\\dbinom nkx^k \\) (binom teoremi — sonlu); \\( \\dfrac{1-x^{m+1}}{1-x}=1+x+\\dots+x^m \\).</li>
          <li>\\( e^x=\\sum\\dfrac{x^k}{k!} \\) (üstel üreteç fonksiyonu — sıralı düzenlemeler için); \\( \\ln\\dfrac1{1-x}=\\sum_{k\\ge1}\\dfrac{x^k}k \\).</li>
        </ul>
        <p><b>İşlemler:</b> \\( xG(x) \\) diziyi bir sağa kaydırır; \\( G'(x) \\) → \\( (k+1)a_{k+1} \\); \\( \\dfrac{G(x)}{1-x} \\) → kısmi toplamlar \\( \\sum_{j\\le k}a_j \\);
        <b>çarpım = konvolüsyon:</b> \\( F(x)G(x)=\\sum_k\\big(\\sum_ja_jb_{k-j}\\big)x^k \\). Bu son özellik saymanın kalbidir: "toplam r seçim, kaynaklardan
        \\( j_1+j_2+\\dots=r \\)" problemlerinde her kaynak bir çarpan olur.</p>
        <p><b>Sayma problemleri çözme şablonu:</b> her nesne türü/kutu için "izinli miktarlar" polinomunu yaz, çarp, \\( x^r \\) katsayısını oku.</p>
        <ul>
          <li>3 kutuya 10 top, her kutuda 2–4: \\( (x^2+x^3+x^4)^3 \\)'te \\( x^{10} \\) katsayısı → \\( x^6(1+x+x^2)^3 \\), \\( (1+x+x^2)^3 \\)'te \\( x^4 \\): 6.</li>
          <li>\\( x_1+x_2+x_3=r \\), \\( x_i\\ge0 \\): \\( (1-x)^{-3} \\) → \\( \\binom{r+2}2 \\) ✓ (yıldız–çubuk). \\( x_1 \\) çift, \\( x_2\\le3 \\): \\( \\frac{1}{1-x^2}\\cdot\\frac{1-x^4}{1-x}\\cdot\\frac1{1-x} \\).</li>
          <li>1, 5, 10, 25 kuruşla n kuruş bozma yolları: \\( \\dfrac1{(1-x)(1-x^5)(1-x^{10})(1-x^{25})} \\) — kapalı biçimi yok ama katsayı hesaplanır (dinamik programlama bunun açılımıdır).</li>
          <li><b>Binom özdeşlikleri:</b> \\( (1+x)^m(1+x)^n=(1+x)^{m+n} \\) → Vandermonde tek satırda.</li>
        </ul>
        <p><b>Özyineleme çözme:</b> bağıntıyı \\( x^n \\) ile çarp, n üzerinden topla, \\( G(x) \\) için cebirsel denklem elde et, çöz, kısmi kesirlere ayır, katsayıları oku.
        \\( a_n=3a_{n-1}+2 \\), \\( a_0=1 \\): \\( G-1=3xG+\\frac{2x}{1-x} \\) → \\( G=\\frac{1+x}{(1-x)(1-3x)}=\\frac{-1}{1-x}+\\frac{2}{1-3x} \\) → \\( a_n=2\\cdot3^n-1 \\).
        Fibonacci: \\( G=\\frac{x}{1-x-x^2} \\) → kısmi kesirlerle Binet formülü. <b>Catalan:</b> \\( C(x)=1+xC(x)^2 \\) → \\( C(x)=\\frac{1-\\sqrt{1-4x}}{2x} \\), \\( C_n=\\frac1{n+1}\\binom{2n}n \\) —
        parantezlemeler, ikili ağaçlar, Dyck yolları.</p>
        <p><b>Üstel üreteç fonksiyonu</b> \\( \\sum a_k\\frac{x^k}{k!} \\): nesneler <b>etiketli/sıralı</b> olduğunda (dizeler, permütasyonlar). "Her harften en az bir, {a,b,c}
        ile n uzunluklu dize": \\( (e^x-1)^3 \\) → \\( 3^n-3\\cdot2^n+3 \\) (içerme-dışarma sonucu!). Düzensizlikler \\( D(x)=\\frac{e^{-x}}{1-x} \\).</p>
        <p><b>Neden önemli:</b> Sayma, özyineleme ve olasılık (PGF: \\( E[X]=G'(1) \\), bağımsız toplam = çarpım) tek bir araçta birleşir; analitik kombinatorik ve
        sinyal işlemedeki z-dönüşümü bu fikrin devamıdır.</p>`
    },
    {
      baslik: "16. Ayrık Olasılık",
      icerik: `
        <p>Sonlu (ya da sayılabilir) örnek uzayında olasılık, saymanın uygulamasıdır. <b>Laplace tanımı</b> — eş olası sonuçlar için:</p>
        \\[ P(E)=\\frac{|E|}{|S|} \\]
        <p>Zarda çift: 3/6. İki zar toplamı 7: 6/36 (36 <b>sıralı</b> çift — sırasız 21 çifti almak eş olasılığı bozar, klasik hata). Poker: royal flush
        \\( 4/\\binom{52}5 \\). Lotto 6/49: \\( 1/\\binom{49}6\\approx1/14\\text{ milyon} \\). Pay ve payda <b>aynı</b> sayma modeliyle sayılmalıdır.</p>
        <p><b>Genel olasılık dağılımı</b> (eş olası olmayan durumlar): her sonuca \\( p(s)\\in[0,1] \\), \\( \\sum p(s)=1 \\); \\( P(E)=\\sum_{s\\in E}p(s) \\). Hileli zar:
        \\( p(6)=2p(k) \\), diğerleri eşit → \\( p(k)=1/7 \\), \\( p(6)=2/7 \\). Kurallar: \\( P(\\overline E)=1-P(E) \\) ("en az bir" için altın yol),
        \\( P(E\\cup F)=P(E)+P(F)-P(E\\cap F) \\), monotonluk.</p>
        <p><b>Koşullu olasılık</b> \\( P(E\\mid F)=\\dfrac{P(E\\cap F)}{P(F)} \\) — F bilgisiyle örnek uzay F'ye daralır. Ailede iki çocuk, en az biri kız biliniyor: ikisi de kız
        olasılığı 1/3 (uzay {KK,KE,EK}), "büyüğü kız" biliniyorsa 1/2 — bilginin biçimi sonucu değiştirir. <b>Bağımsızlık:</b> \\( P(E\\cap F)=P(E)P(F) \\); üç ve
        daha çok olayda karşılıklı bağımsızlık ikişerliden güçlüdür.</p>
        <p><b>Bernoulli denemeleri ve binom dağılımı:</b> n bağımsız deneme, başarı p → k başarı: \\( b(k;n,p)=\\dbinom nkp^k(1-p)^{n-k} \\). 10 bitlik iletimde
        p=0.1 hata, en fazla 1 hata: \\( 0.9^{10}+10(0.1)(0.9)^9\\approx0.736 \\). Toplamı binom teoremiyle 1: \\( (p+q)^n \\).</p>
        <p><b>Bayes teoremi</b> — sonuçtan nedene: \\( P(F\\mid E)=\\dfrac{P(E\\mid F)P(F)}{P(E\\mid F)P(F)+P(E\\mid\\overline F)P(\\overline F)} \\). Spam filtresi:
        "bedava" kelimesi spam'de %50, normalde %2, spam oranı %30 → mesajda "bedava" varsa spam olasılığı \\( \\frac{0.5\\cdot0.3}{0.15+0.014}\\approx0.91 \\).
        <b>Naif Bayes</b>: kelimeler bağımsız varsayılıp çarpılır. Tıbbi test paradoksu (düşük yaygınlıkta yanlış pozitif baskın) burada da geçerlidir.</p>
        <p><b>Rastgele değişken ve beklenen değer:</b> \\( X:S\\to\\mathbb R \\); \\( E[X]=\\sum_sp(s)X(s)=\\sum_xx\\,P(X=x) \\). <b>Doğrusallık</b> \\( E[X+Y]=E[X]+E[Y] \\)
        (bağımsızlık gerekmez) — <b>gösterge değişkenleriyle</b> zor sayımlar kolaylaşır: n şapkanın rastgele dağıtımında kendi şapkasını alan kişi sayısı:
        \\( \\sum_iE[I_i]=n\\cdot\\frac1n=1 \\); n kişide doğum günü çakışan çift sayısı \\( \\binom n2/365 \\); hash tablosunda çakışma sayısı; <b>ekleme sıralamasının
        ortalama karşılaştırması</b> \\( \\approx n^2/4 \\) (her ters çift bir gösterge); <b>quicksort ortalama</b> \\( O(n\\log n) \\). Geometrik dağılım: ilk başarıya kadar
        deneme \\( E=1/p \\) — "ortalama kaç denemede". <b>Varyans</b> \\( V(X)=E[X^2]-E[X]^2 \\); bağımsızsa toplanır; <b>Chebyshev</b> \\( P(|X-\\mu|\\ge r)\\le V/r^2 \\).</p>
        <p><b>Olasılıksal yöntem</b> (Erdős): bir nesnenin var olduğunu, rastgele seçilen nesnenin istenen özelliği taşıma olasılığının pozitif olduğunu göstererek
        kanıtla — Ramsey sayıları alt sınırı \\( R(k,k)&gt;2^{k/2} \\). <b>Rastgele algoritmalar:</b> Monte Carlo (hızlı, küçük hata olasılığı — Miller–Rabin asallık testi,
        her turda hata \\( \\le1/4 \\)) ve Las Vegas (her zaman doğru, rastgele süre — randomize quicksort). Sözde rastgele üreteçler (LCG) sayı teorisine dayanır.</p>
        <p><b>Not:</b> Bu konu STAT2056'nın ilk bölümleriyle örtüşür; oradaki sürekli dağılımlar, MGF ve limit teoremleri burada yoktur. Bu dersin vurgusu <b>sayma ile
        olasılık</b> ve <b>algoritma analizinde beklenen değer</b>dir.</p>`
    },
    {
      baslik: "17. Çizge (Graf) Teorisi",
      icerik: `
        <p><b>Çizge</b> \\( G=(V,E) \\): düğümler (vertices) ve onları bağlayan kenarlar (edges). Modelleme gücü: bilgisayar ağları, yollar, sosyal ağlar, devre şemaları
        (düğüm = bağlantı noktası, kenar = eleman), durum makineleri, bağımlılıklar, kimyasal moleküller, web bağlantıları. Türler: <b>basit</b> (döngü ve çoklu kenar yok),
        <b>çoklu çizge</b>, <b>yönlü</b> (digraph — tek yönlü yollar, bağıntılar), <b>ağırlıklı</b> (kenarlarda maliyet).</p>
        <p><b>Temel kavramlar:</b> komşuluk, derece \\( \\deg(v) \\) (yönlüde giriş/çıkış derecesi). <b>El sıkışma lemması:</b> \\( \\sum_v\\deg(v)=2|E| \\) — her kenar iki uç sayar.
        Sonuç: <b>tek dereceli düğüm sayısı çifttir</b>. "5 kişilik partide herkes tam 3 kişiyle tokalaştı" imkânsız (15 tek). Özel çizgeler: tam çizge \\( K_n \\)
        (\\( \\binom n2 \\) kenar), çevrim \\( C_n \\), tekerlek \\( W_n \\), n-küp \\( Q_n \\) (\\( 2^n \\) düğüm, komşular 1 bit farklı — Gray kodu, paralel mimari),
        <b>iki parçalı</b> (bipartite: düğümler iki sınıf, kenarlar sınıflar arası ⟺ tek uzunluklu çevrim yok ⟺ 2-boyanabilir) — eşleştirme problemleri (iş–çalışan),
        \\( K_{m,n} \\). <b>Alt çizge</b>, <b>tümleyen</b> \\( \\overline G \\), <b>birleşim</b>.</p>
        <p><b>Gösterim:</b> <b>komşuluk matrisi</b> \\( A \\) (\\( n\\times n \\), simetrik; \\( A^k[i][j] \\) = i'den j'ye k uzunluklu yol sayısı), <b>komşuluk listesi</b> (seyrek çizgelerde
        bellek dostu), <b>geliş (incidence) matrisi</b> (\\( n\\times m \\)). <b>İzomorfizm:</b> düğümleri yeniden adlandırarak aynı çizge — bijeksiyon komşuluğu korur.
        Değişmezler (düğüm/kenar sayısı, derece dizisi, çevrim uzunlukları, bağlılık) farklıysa izomorf <b>değil</b>; aynıysa henüz karar verilemez (izomorfizmi göstermek için
        eşlemeyi yaz). Verimli genel algoritması bilinmiyor.</p>
        <p><b>Bağlılık:</b> yol, basit yol (düğüm tekrarı yok), devre/çevrim. Yönsüz çizge <b>bağlı</b> ⟺ her çift arasında yol; <b>bağlı bileşenler</b> maksimal bağlı alt çizgeler
        (denklik sınıfları). Yönlüde <b>güçlü bağlı</b> (her yönde yol) vs <b>zayıf bağlı</b>. <b>Kesme düğümü</b>/<b>köprü</b>: kaldırılınca bağlılık bozulur — ağ güvenilirliğinin
        kritik noktaları; <b>düğüm/kenar bağlılığı</b> \\( \\kappa(G),\\lambda(G) \\): kaç eleman kaldırılmalı. Bağlı n düğümlü çizgede en az \\( n-1 \\) kenar var.</p>
        <p><b>Euler yolu/devresi</b> — her <b>kenardan</b> tam bir kez: bağlı çizgede Euler <b>devresi</b> ⟺ tüm dereceler çift; Euler <b>yolu</b> ⟺ tam iki tek dereceli düğüm
        (yol onlarda başlar/biter). Königsberg köprüleri (4 tek dereceli → yok). Kolay karar, kolay kurma (Fleury / Hierholzer, \\( O(|E|) \\)). Uygulama: çöp kamyonu rotası,
        PCB'de tek çizimle iz, DNA dizileme (de Bruijn).</p>
        <p><b>Hamilton yolu/devresi</b> — her <b>düğümden</b> tam bir kez: genel ölçüt <b>yoktur</b>, karar NP-tam. Yeterli koşullar: <b>Dirac</b> (\\( n\\ge3 \\), her \\( \\deg\\ge n/2 \\) → var),
        <b>Ore</b> (komşu olmayan her çiftte \\( \\deg u+\\deg v\\ge n \\)). Gerekli koşul yönünde: derece-1 düğüm varsa devre yok; derece-2 düğümün iki kenarı devrede olmalı.
        <b>Gezgin satıcı (TSP)</b> ağırlıklı Hamilton devresinin en ucuzu — NP-zor; sezgisel/yaklaşık çözümler (en yakın komşu, 2-opt).</p>
        <p><b>En kısa yol — Dijkstra</b> (negatif olmayan ağırlıklar): kaynaktan uzaklık etiketleri \\( \\infty \\), kaynak 0; her turda <b>etiketi en küçük işaretlenmemiş</b> düğümü
        kesinleştir, komşularının etiketini \\( \\min(d_v,\\,d_u+w(u,v)) \\) ile güncelle; hedef kesinleşince dur. \\( O(n^2) \\), yığınla \\( O(m\\log n) \\). Açgözlüdür ama doğru
        (kanıt tümevarımla: kesinleşen etiket gerçek en kısa). Negatif kenarlarda <b>Bellman–Ford</b>; tüm çiftler için <b>Floyd–Warshall</b> (Warshall'ın ağırlıklı hali).
        Uygulamalar: yol tarifi, ağ yönlendirme (OSPF Dijkstra kullanır), PCB iz yönlendirme.</p>
        <p><b>Düzlemsel çizge</b> — kenarlar kesişmeden çizilebilir (tek katmanlı PCB, harita). <b>Euler formülü:</b> bağlı düzlemsel çizgede \\( v-e+f=2 \\). Sonuçları:
        \\( e\\le3v-6 \\) (\\( v\\ge3 \\)); üçgen yoksa \\( e\\le2v-4 \\) → \\( K_5 \\) (10 &gt; 9) ve \\( K_{3,3} \\) (9 &gt; 8) düzlemsel değil. <b>Kuratowski:</b> düzlemsel ⟺ \\( K_5 \\) ya da
        \\( K_{3,3} \\)'e homeomorfik alt çizge içermez. Düzlemsel çizgede derece ≤5 bir düğüm vardır.</p>
        <p><b>Çizge boyama:</b> komşular farklı renk; en az renk sayısı <b>kromatik sayı</b> \\( \\chi(G) \\). \\( \\chi(K_n)=n \\); \\( \\chi(C_n)=2 \\) (çift) / 3 (tek); iki parçalı ⟺ \\( \\chi\\le2 \\);
        \\( \\chi\\le\\Delta+1 \\) (maksimum derece +1, açgözlü). <b>Dört renk teoremi:</b> her düzlemsel çizge 4 renkle boyanır (harita). Karar (\\( \\chi\\le k \\), k≥3) NP-tam.
        Uygulamalar: <b>sınav programı</b> (ders = düğüm, ortak öğrenci = kenar, renk = zaman dilimi), <b>yazmaç ataması</b> (derleyicide değişkenler aynı anda canlıysa kenar),
        <b>frekans ataması</b> (komşu vericiler farklı frekans). Kenar boyama, kromatik indeks \\( \\ge\\Delta \\).</p>`
    },
    {
      baslik: "18. Ağaçlar (Trees)",
      icerik: `
        <p><b>Ağaç</b>: döngüsüz bağlı yönsüz çizge. Eşdeğer tanımlar (her biri diğerlerini kanıtlar): her iki düğüm arasında <b>tek</b> basit yol vardır; bağlı ve
        \\( |E|=n-1 \\); döngüsüz ve \\( n-1 \\) kenarlı; minimal bağlı (bir kenar sil → kopar); maksimal döngüsüz (bir kenar ekle → çevrim). <b>Orman</b>: ağaçların ayrık
        birleşimi (\\( k \\) bileşen → \\( n-k \\) kenar). Her ağaçta (n≥2) en az iki <b>yaprak</b> (derece 1). \\( n-1 \\) kenar kanıtı: yaprak sil, tümevarım.</p>
        <p><b>Köklü ağaç:</b> bir düğüm kök seçilir, kenarlar aşağı yönlenir. Ebeveyn, çocuk, kardeş, ata, torun, <b>yaprak</b> (çocuksuz), <b>iç düğüm</b>. <b>Seviye</b>
        (kökten uzaklık, kök 0), <b>yükseklik</b> h (en derin yaprak). <b>Alt ağaç</b>: bir düğüm ve tüm torunları — özyinelemeli yapı ("ağaç = kök + alt ağaçlar ormanı"),
        bu yüzden ağaç algoritmaları özyinelemelidir ve özellikleri yapısal tümevarımla kanıtlanır.</p>
        <p><b>m-li ağaç:</b> her iç düğümün ≤m çocuğu; <b>tam (full) m-li</b>: tam m çocuk. Sayım ilişkileri (i iç düğüm, l yaprak, n toplam): \\( n=mi+1 \\); \\( l=(m-1)i+1 \\);
        verilenlerden diğerleri çözülür — "her paket 5'e bölünüyor, 1000 son parça → kaç bölme?" \\( i=(l-1)/(m-1) \\). <b>İkili ağaç</b> (m=2): sol/sağ çocuk ayrımı. Yükseklik h
        olan m-li ağaçta en fazla \\( m^h \\) yaprak ⟹ \\( h\\ge\\lceil\\log_ml\\rceil \\); <b>dengeli</b> ağaç (yapraklar h veya h−1 seviyesinde) bu alt sınıra ulaşır —
        tüm \\( O(\\log n) \\) veri yapılarının kaynağı.</p>
        <ul>
          <li><b>İkili arama ağacı (BST):</b> sol alt ağaç &lt; kök &lt; sağ alt ağaç. Arama/ekleme kökten aşağı karşılaştırmayla, \\( O(h) \\): dengeli ise \\( O(\\log n) \\), sıralı
          veriyle kurulursa liste gibi \\( O(n) \\) (dengeleme: AVL, kırmızı-siyah). Inorder dolaşım sıralı çıktı verir.</li>
          <li><b>Karar ağaçları:</b> her iç düğüm bir soru, yapraklar sonuçlar. Karşılaştırmalı sıralama \\( n! \\) yaprak gerektirir → \\( h\\ge\\log_2n!=\\Omega(n\\log n) \\)
          — sıralamanın <b>alt sınırı</b>. "8 paradan sahte olanı teraziyle 3 tartıda bul" (\\( 3^3=27\\ge16 \\)).</li>
          <li><b>Önek kodları / Huffman:</b> karakterler yaprak, sol=0 sağ=1; hiçbir kod diğerinin öneki değil → anlık çözülür. <b>Huffman:</b> en düşük iki frekansı birleştir,
          tekrarla → optimal (en kısa ortalama uzunluk) — ZIP, JPEG, MP3'ün temel adımı. Kraft eşitsizliği \\( \\sum2^{-l_i}\\le1 \\).</li>
          <li><b>Oyun ağaçları:</b> min-max değerlendirme, alfa-beta budama.</li>
        </ul>
        <p><b>Dolaşma (traversal)</b> — düğümleri sistematik ziyaret; özyinelemeli tanımlar:
        <b>preorder</b> (kök, sol, sağ) — ağaç kopyalama, önek ifade (Polish) \\( +\\;*\\;2\\;3\\;4 \\);
        <b>inorder</b> (sol, kök, sağ) — BST'de sıralı liste, araya girmiş (infix) ifade — parantez gerekir;
        <b>postorder</b> (sol, sağ, kök) — alt ağaçları silme, <b>sonek (RPN)</b> \\( 2\\;3\\;*\\;4\\;+ \\) — yığınla parantezsiz hesaplanır (HP hesap makineleri, JVM bytecode).
        İfade ağacı: iç düğümler işleçler, yapraklar sayılar/değişkenler; derleyicinin ara gösterimi. <b>Seviye sırası</b> (BFS) kuyrukla.</p>
        <p><b>Kapsayan ağaç</b> (spanning tree): bağlı çizgenin tüm düğümlerini içeren ağaç alt çizgesi; her bağlı çizgede vardır (çevrim kır ya da arama ile kur).
        <b>DFS</b> (derinlik öncelikli — yığın/özyineleme; geri kenarlar çevrim demek; topolojik sıralama, bağlı bileşenler) ve <b>BFS</b> (genişlik öncelikli — kuyruk;
        ağırlıksız en kısa yollar, seviye seviye) iki temel kapsayan ağaç kurucudur. <b>Geri izleme (backtracking):</b> DFS ile çözüm uzayı ağacında arama — n-vezir,
        Sudoku, çizge boyama, alt küme toplamı; umutsuz dalları erken kes.</p>
        <p><b>Minimum kapsayan ağaç (MST)</b> — ağırlıklı çizgede toplam ağırlığı en küçük kapsayan ağaç: <b>Kruskal</b> (kenarları ağırlığa göre sırala, çevrim yaratmayanı ekle
        — birleşik-bul yapısı, \\( O(m\\log m) \\)); <b>Prim</b> (bir düğümden başla, ağaca en ucuz komşu kenarı ekle, \\( O(n^2) \\) ya da yığınla \\( O(m\\log n) \\)). İkisi de
        açgözlü ve doğru (kesme özelliği). Uygulamalar: ağ kablolama, kümeleme (en pahalı k−1 kenarı at), yaklaşık TSP (MST ×2 sınırı). Farklı ağırlıklar → MST tek.
        Kapsayan ağaç sayısı: \\( K_n \\) için Cayley \\( n^{n-2} \\); genel çizge için Kirchhoff matris-ağaç teoremi (Laplasyen minörü) — <b>devre analizinde bağımsız
        çevrim sayısı</b> \\( m-n+1 \\) kapsayan ağaçtan gelir (ağaç dalları / bağ kenarları).</p>`
    },
    {
      baslik: "19. Boole Cebiri ve Karnaugh Haritası",
      icerik: `
        <p><b>Boole cebri</b> \\( \\{0,1\\} \\) üzerinde üç işlemle tanımlanır: <b>toplama (VEYA)</b> \\( x+y \\), <b>çarpma (VE)</b> \\( x\\cdot y=xy \\), <b>tümleyen (DEĞİL)</b> \\( \\overline x=x' \\).
        Önermeler mantığının (\\( \\vee,\\wedge,\\neg \\)) ve küme cebrinin (\\( \\cup,\\cap,\\overline{\\ } \\)) ortak soyutlamasıdır; sayısal devre tasarımının matematiğidir.
        Öncelik: tümleyen &gt; çarpma &gt; toplama. n değişkenli <b>Boole fonksiyonu</b> \\( \\{0,1\\}^n\\to\\{0,1\\} \\) — \\( 2^{2^n} \\) tane (2 değişkende 16, 3'te 256).</p>
        <p><b>Özdeşlikler</b> (mantıktakilerle aynı; <b>ikilik ilkesi:</b> \\( +\\leftrightarrow\\cdot \\), \\( 0\\leftrightarrow1 \\) değiştirilirse özdeşlik özdeşlik kalır):
        \\( x+0=x,\\;x\\cdot1=x \\); \\( x+1=1,\\;x\\cdot0=0 \\); \\( x+x=x,\\;xx=x \\); \\( x+\\overline x=1,\\;x\\overline x=0 \\); \\( \\overline{\\overline x}=x \\); değişme, birleşme;
        <b>dağılma iki yönlü</b> \\( x(y+z)=xy+xz \\) <b>ve</b> \\( x+yz=(x+y)(x+z) \\); <b>yutma</b> \\( x+xy=x \\), \\( x(x+y)=x \\); <b>De Morgan</b> \\( \\overline{x+y}=\\overline x\\,\\overline y \\),
        \\( \\overline{xy}=\\overline x+\\overline y \\); <b>uzlaşma (consensus)</b> \\( xy+\\overline xz+yz=xy+\\overline xz \\). Sadeleştirme yolu: \\( xy+\\overline xy+xy'=y(x+\\overline x)+xy'=y+xy'=y+x \\)
        (yutma). Özdeşlik ispatı: doğruluk tablosu (kesin, \\( 2^n \\) satır) ya da cebir (ölçeklenir).</p>
        <p><b>Normal formlar:</b> <b>minterm</b> — n değişkenin hepsini içeren çarpım (tam bir girişte 1), <b>maxterm</b> — hepsini içeren toplam (tam bir girişte 0).
        Her fonksiyon tablodaki 1 satırlarının mintermlerinin toplamıdır — <b>çarpımların toplamı (SOP)</b>, \\( \\sum m(1,3,6) \\); ya da 0 satırlarının maxtermlerinin çarpımı —
        <b>toplamların çarpımı (POS)</b>, \\( \\prod M(0,2,4,5,7) \\). Bu yüzden \\( \\{+,\\cdot,\\overline{\\ }\\} \\) <b>fonksiyonel olarak tam</b>dır; De Morgan ile \\( \\{+,\\overline{\\ }\\} \\) ve
        \\( \\{\\cdot,\\overline{\\ }\\} \\) de tamdır; <b>NAND tek başına</b> (\\( \\overline x=x\\uparrow x \\), \\( xy=\\overline{x\\uparrow y} \\)) ve <b>NOR tek başına</b> tamdır — CMOS'ta NAND/NOR
        doğal kapı olduğundan tüm çipler bu ikisiyle kurulur. \\( \\{+,\\cdot\\} \\) tam değildir (tümleyen üretilemez).</p>
        <p><b>Karnaugh haritası (K-map)</b> — SOP ifadesini görsel olarak en aza indirger. Doğruluk tablosu, <b>komşu hücreler yalnızca bir değişkende farklı</b> olacak biçimde
        (Gray sırası: 00, 01, 11, 10) bir ızgaraya yerleştirilir; kenarlar birbirine <b>sarılıdır</b> (sol–sağ, üst–alt komşu). Komşu iki 1, \\( xy+x\\overline y=x \\) gibi bir değişkeni
        yok eder; \\( 2^k \\) hücrelik dikdörtgen blok k değişken eler.</p>
        <ol>
          <li>Fonksiyonun 1'lerini haritaya yerleştir (bilinmeyen/önemsiz girişler <b>d</b> ile).</li>
          <li>Tüm 1'leri, <b>mümkün olan en büyük</b> 1×1, 1×2, 2×2, 1×4, 2×4, 4×4 dikdörtgenlerle kapla (kenar sarmalı dahil; d'ler blok büyütmek için 1 sayılabilir, kaplanmak zorunda değil).</li>
          <li>Her blok bir <b>asal implikant</b> (çarpım terimi): blokta sabit kalan değişkenleri yaz (1 → x, 0 → \\( \\overline x \\)), değişenleri at.</li>
          <li>Yalnızca o blokla kaplanan 1 içeren bloklar <b>esas</b> — mutlaka alınır; kalan 1'ler en az blokla tamamlanır. Terimleri topla.</li>
        </ol>
        <p>Örnek (3 değişken): \\( f=\\sum m(0,1,2,4,6) \\): satır \\( x \\), sütunlar \\( yz=00,01,11,10 \\). \\( x=0 \\): 1,1,0,1; \\( x=1 \\): 1,0,0,1. Blok 1: sol sütun+sağ sütun (00 ve 10, sarmalı)
        tüm satırlar → \\( \\overline z \\); blok 2: \\( m_0,m_1 \\) → \\( \\overline x\\,\\overline y \\). Sonuç \\( f=\\overline z+\\overline x\\,\\overline y \\) — 5 mintermden 2 terime, 2 kapı.
        4 değişkenli 4×4 harita rutin; 5–6 değişken katmanlı haritalar; daha büyük fonksiyonlar için <b>Quine–McCluskey</b> (tablo yöntemi, algoritmik, bilgisayarla) ve Espresso.</p>
        <p><b>Mantık devreleri:</b> kapılar AND, OR, NOT (inverter), NAND, NOR, XOR (\\( x\\oplus y=x\\overline y+\\overline xy \\), toplama/eşlik), XNOR (eşitlik). Boole ifadesi ↔ <b>kombinasyonel
        devre</b> (çıkış yalnızca anlık girişe bağlı; bellek yok). Klasik tasarımlar: <b>yarım toplayıcı</b> (\\( S=x\\oplus y \\), \\( C=xy \\)), <b>tam toplayıcı</b> (\\( S=x\\oplus y\\oplus c_{in} \\),
        \\( C=xy+c_{in}(x\\oplus y) \\)) → dalgalı taşımalı n-bit toplayıcı; <b>çoğullayıcı</b> (MUX — seçim girişiyle veri yönlendirme; her fonksiyon tek MUX'la gerçeklenir); <b>kod
        çözücü</b> (n giriş → \\( 2^n \\) çıkış, mintermleri üretir); <b>çoğunluk fonksiyonu</b> \\( xy+xz+yz \\) (3'te 2 oylama, hata toleranslı sistemler); <b>eşlik üreteci</b> (XOR zinciri);
        <b>karşılaştırıcı</b>. Tasarım akışı: sözel tanım → doğruluk tablosu → SOP → K-map sadeleştirme → kapı şeması → (NAND-yalnız dönüşümü). Maliyet ölçüsü: kapı sayısı, giriş sayısı,
        <b>seviye (derinlik)</b> = gecikme. <b>Tehlikeler (hazard):</b> sadeleştirilmiş devrede geçişte anlık yanlış çıkış; K-map'te komşu ama farklı bloklarda kalan 1'ler — uzlaşma
        terimi eklenerek giderilir.</p>
        <p><b>Neden önemli:</b> Bu konu, ders programındaki Sayısal Tasarım / Lojik Devreler dersinin doğrudan ön hazırlığıdır; işlemci ALU'sundan FPGA'ya kadar her sayısal sistem burada
        tanımlanan cebir ve minimizasyonla kurulur. Ayrıca önermeler mantığı (1. konu) ile küme cebri (5. konu) burada tek yapı olduğu netleşir: üçü de <b>Boole cebridir</b>.</p>`
    }
  ],
  formuller: [
    { ad: "Kombinasyon", formul: `\\( \\binom{n}{r}=\\dfrac{n!}{r!(n-r)!} \\)`, aciklama: "n elemandan sırasız r seçim." },
    { ad: "Permütasyon", formul: `\\( P(n,r)=\\dfrac{n!}{(n-r)!} \\)`, aciklama: "n elemandan sıralı r seçim." },
    { ad: "Tekrarlı Kombinasyon", formul: `\\( \\binom{n+r-1}{r} \\)`, aciklama: "n türden r seçim, tekrar serbest." },
    { ad: "Çok Kümeli Düzenleme", formul: `\\( \\dfrac{n!}{n_1!\\,n_2!\\cdots n_k!} \\)`, aciklama: "Tekrarlı harfler/nesneler." },
    { ad: "Binom Teoremi", formul: `\\( (x+y)^n=\\sum_{k=0}^{n}\\binom{n}{k}x^{n-k}y^{k} \\)`, aciklama: "Katsayılar Pascal üçgeni." },
    { ad: "Pascal Özdeşliği", formul: `\\( \\binom{n}{k}=\\binom{n-1}{k-1}+\\binom{n-1}{k} \\)`, aciklama: "Üçgenin oluşum kuralı." },
    { ad: "De Morgan (Mantık)", formul: `\\( \\neg(p\\wedge q)\\equiv\\neg p\\vee\\neg q \\)`, aciklama: "Bağlaç değilleme kuralı." },
    { ad: "Koşullu Denklik", formul: `\\( p\\to q\\equiv\\neg p\\vee q\\equiv\\neg q\\to\\neg p \\)`, aciklama: "İse → veya; karşıt-ters." },
    { ad: "Niceleyici Değilleme", formul: `\\( \\neg\\forall x\\,P\\equiv\\exists x\\,\\neg P \\)`, aciklama: "Niceleyici içeri geçer, tipi değişir." },
    { ad: "İçerme-Dışarma (2)", formul: `\\( |A\\cup B|=|A|+|B|-|A\\cap B| \\)`, aciklama: "Kesişimi bir kez say." },
    { ad: "İçerme-Dışarma (3)", formul: `\\( |A\\cup B\\cup C|=\\sum|A|-\\sum|A\\cap B|+|A\\cap B\\cap C| \\)`, aciklama: "Üç küme genellemesi." },
    { ad: "Kuvvet Kümesi", formul: `\\( |\\mathcal{P}(A)|=2^{|A|} \\)`, aciklama: "Alt küme sayısı." },
    { ad: "Kartezyen Çarpım", formul: `\\( |A\\times B|=|A|\\,|B| \\)`, aciklama: "Sıralı ikili sayısı." },
    { ad: "Güvercin Yuvası (Genel)", formul: `\\( \\left\\lceil N/k\\right\\rceil \\)`, aciklama: "N nesne k kutuda → en dolu kutu alt sınırı." },
    { ad: "Gauss Toplamı", formul: `\\( \\sum_{i=1}^{n}i=\\dfrac{n(n+1)}{2} \\)`, aciklama: "İlk n doğal sayının toplamı." },
    { ad: "Kareler Toplamı", formul: `\\( \\sum_{i=1}^{n}i^2=\\dfrac{n(n+1)(2n+1)}{6} \\)`, aciklama: "İlk n karenin toplamı." },
    { ad: "Geometrik Toplam", formul: `\\( \\sum_{i=0}^{n}r^i=\\dfrac{r^{n+1}-1}{r-1} \\)`, aciklama: "r ≠ 1 için." },
    { ad: "Öklid / Bézout", formul: `\\( \\gcd(a,b)=\\gcd(b,a\\bmod b)=sa+tb \\)`, aciklama: "EBOB ve doğrusal kombinasyon." },
    { ad: "EBOB–EKOK", formul: `\\( \\gcd(a,b)\\cdot\\mathrm{lcm}(a,b)=ab \\)`, aciklama: "İki sayı için çarpım ilişkisi." },
    { ad: "Fermat'ın Küçük Teoremi", formul: `\\( a^{p-1}\\equiv 1\\pmod p \\)`, aciklama: "p asal, gcd(a,p)=1." },
    { ad: "El Sıkışma Lemması", formul: `\\( \\sum_v \\deg(v)=2|E| \\)`, aciklama: "Derece toplamı = 2 × kenar sayısı." },
    { ad: "Tam Çizge Kenarı", formul: `\\( |E(K_n)|=\\dfrac{n(n-1)}{2} \\)`, aciklama: "Kn'de tüm ikili bağlantılar." },
    { ad: "Ağaç Kenar Sayısı", formul: `\\( |E|=n-1 \\)`, aciklama: "n düğümlü ağaç." },
    { ad: "Cayley Formülü", formul: `\\( n^{\\,n-2} \\)`, aciklama: "n etiketli düğümle ağaç sayısı." },
    { ad: "Bayes Teoremi", formul: `\\( P(A|B)=\\dfrac{P(B|A)P(A)}{P(B)} \\)`, aciklama: "Koşullu olasılığın tersine çevrimi." },
    { ad: "Koşullunun Akrabaları", formul: `\\( p\\to q\\equiv\\neg q\\to\\neg p;\\quad q\\to p\\;(\\text{ters, denk değil}) \\)`, aciklama: "Karşıt-ters denk, ters ve karşıt denk değil." },
    { ad: "Çıkarım Kuralları", formul: `\\( p,\\,p\\to q\\vdash q;\\quad \\neg q,\\,p\\to q\\vdash\\neg p \\)`, aciklama: "Modus ponens / modus tollens." },
    { ad: "Kısıtlı Niceleyici", formul: `\\( \\forall x(K(x)\\to U(x)),\\quad \\exists x(K(x)\\wedge U(x)) \\)`, aciklama: "Tüm → ile, bazı ∧ ile." },
    { ad: "Boole Çarpımı (Bileşke)", formul: `\\( M_{S\\circ R}=M_R\\odot M_S \\)`, aciklama: "∧/∨ ile matris çarpımı; R^n = n adımlık yol." },
    { ad: "Geçişken Kapanış", formul: `\\( R^*=R\\cup R^2\\cup\\dots\\cup R^n \\)`, aciklama: "Warshall: O(n³); bağlanabilirlik bağıntısı." },
    { ad: "Big-O Tanımı", formul: `\\( f=O(g)\\iff\\exists C,k:\\;|f(n)|\\le C|g(n)|,\\;n&gt;k \\)`, aciklama: "Tanıklar C ve k; Θ = O ve Ω birlikte." },
    { ad: "Ana Teorem (Master)", formul: `\\( T(n)=aT(n/b)+n^d\\Rightarrow\\Theta(n^d),\\;\\Theta(n^d\\log n),\\;\\Theta(n^{\\log_ba}) \\)`, aciklama: "a<b^d, a=b^d, a>b^d sırasıyla." },
    { ad: "Bölme Algoritması", formul: `\\( a=dq+r,\\;0\\le r&lt;d \\)`, aciklama: "q = a div d, r = a mod d; tek." },
    { ad: "Modüler Ters", formul: `\\( a\\bar a\\equiv1\\pmod m\\iff\\gcd(a,m)=1 \\)`, aciklama: "Genişletilmiş Öklid ile (Bézout katsayısı)." },
    { ad: "Çin Kalan Teoremi", formul: `\\( x=\\sum a_iM_iy_i \\bmod M,\\;M_i=M/m_i,\\;y_i=M_i^{-1}\\bmod m_i \\)`, aciklama: "m_i ikişer aralarında asal; tek çözüm mod M." },
    { ad: "Euler Teoremi", formul: `\\( a^{\\phi(n)}\\equiv1\\pmod n,\\;\\phi(pq)=(p-1)(q-1) \\)`, aciklama: "gcd(a,n)=1; RSA'nın temeli." },
    { ad: "Küpler Toplamı", formul: `\\( \\sum_{i=1}^ni^3=\\Big(\\dfrac{n(n+1)}{2}\\Big)^2 \\)`, aciklama: "Tümevarımla; Gauss toplamının karesi." },
    { ad: "Tekrarlı Permütasyon", formul: `\\( n^r \\)`, aciklama: "n çeşitten r sıralı seçim, tekrar serbest." },
    { ad: "Yıldız–Çubuk (en az 1)", formul: `\\( \\dbinom{r-1}{n-1} \\)`, aciklama: "x₁+…+xₙ=r, her xᵢ≥1 pozitif tam sayı çözümleri." },
    { ad: "Vandermonde", formul: `\\( \\dbinom{m+n}{r}=\\sum_k\\dbinom mk\\dbinom n{r-k} \\)`, aciklama: "İki gruptan toplam r seçme." },
    { ad: "Düzensizlik Sayısı", formul: `\\( D_n=n!\\sum_{k=0}^n\\dfrac{(-1)^k}{k!}\\approx\\dfrac{n!}{e} \\)`, aciklama: "Hiç kimse kendi şapkasını almaz ≈ %36.8." },
    { ad: "Karakteristik Denklem", formul: `\\( a_n=c_1a_{n-1}+c_2a_{n-2}\\Rightarrow r^2-c_1r-c_2=0 \\)`, aciklama: "Farklı kök: αr₁ⁿ+βr₂ⁿ; katlı: (α+βn)rⁿ." },
    { ad: "Binet Formülü", formul: `\\( f_n=\\dfrac{1}{\\sqrt5}\\big(\\varphi^n-(1-\\varphi)^n\\big),\\;\\varphi=\\tfrac{1+\\sqrt5}{2} \\)`, aciklama: "Fibonacci kapalı biçimi." },
    { ad: "Üreteç Fonksiyonu", formul: `\\( \\dfrac{1}{(1-x)^n}=\\sum_k\\dbinom{n+k-1}{k}x^k \\)`, aciklama: "Tekrarlı kombinasyon; çarpım = konvolüsyon." },
    { ad: "Catalan Sayısı", formul: `\\( C_n=\\dfrac{1}{n+1}\\dbinom{2n}{n} \\)`, aciklama: "Parantezlemeler, ikili ağaçlar; C(x)=1+xC(x)²." },
    { ad: "Binom Olasılığı", formul: `\\( b(k;n,p)=\\dbinom nkp^k(1-p)^{n-k} \\)`, aciklama: "n bağımsız deneme, k başarı; E=np." },
    { ad: "Euler Formülü (Düzlemsel)", formul: `\\( v-e+f=2,\\qquad e\\le3v-6 \\)`, aciklama: "Bağlı düzlemsel çizge; K₅ ve K₃,₃ düzlemsel değil." },
    { ad: "Euler Devresi Koşulu", formul: `\\( \\text{bağlı}\\wedge\\forall v:\\deg(v)\\text{ çift} \\)`, aciklama: "Euler yolu: tam iki tek dereceli düğüm." },
    { ad: "m-li Ağaç Sayımı", formul: `\\( n=mi+1,\\qquad l=(m-1)i+1 \\)`, aciklama: "Tam m-li ağaç; i iç düğüm, l yaprak." },
    { ad: "Ağaç Yükseklik Sınırı", formul: `\\( h\\ge\\lceil\\log_m l\\rceil \\)`, aciklama: "Karşılaştırmalı sıralama Ω(n log n) buradan." },
    { ad: "Uzlaşma (Consensus)", formul: `\\( xy+\\overline xz+yz=xy+\\overline xz \\)`, aciklama: "Boole sadeleştirme; hazard giderme terimi." },
    { ad: "Tam Toplayıcı", formul: `\\( S=x\\oplus y\\oplus c,\\quad C=xy+c(x\\oplus y) \\)`, aciklama: "1-bit toplayıcı; zincirle n-bit." }
  ],
  galeri: [],
  dokumanlar: [],
  videolar: [
    { baslik: "TrevTutor — Discrete Math (Tam Kurs Playlist)", playlist: "PLDDGPdw7e6Ag1EIznZ-m-qXu4XX3A0cIz" },
    { baslik: "SawFin Mathematics — Discrete Math I (Tam Kurs Playlist)", playlist: "PLl-gb0E4MII28GykmtuBXNUNoej-vY5Rz" },
    { baslik: "MIT 6.042J — Mathematics for Computer Science (Tam Kurs Playlist)", playlist: "PLUl4u3cNGP60UlabZBeeqOuoLuj_KNphQ" }
  ],
  linkler: [
    { ad: "TrevTutor", url: "https://www.trevtutor.com/", aciklama: "Konu anlatımı + çözümlü örnekler" },
    { ad: "MIT OpenCourseWare", url: "https://ocw.mit.edu/", aciklama: "6.042J Mathematics for Computer Science" },
    { ad: "CompSciLib", url: "https://www.compscilib.com/", aciklama: "Doğruluk tablosu ve sayma hesaplayıcıları" },
    { ad: "WolframAlpha", url: "https://www.wolframalpha.com/", aciklama: "Doğruluk tablosu / kombinatorik / mod hesabı" },
    { ad: "OEIS", url: "https://oeis.org/", aciklama: "Tam sayı dizileri — özyineleme kalıplarını bulur" },
    { ad: "Graph Online", url: "https://graphonline.top/en/", aciklama: "Çizge çiz, algoritmaları görselleştir" }
  ],
  sorular: [
    {
      tip: "vize",
      soru: `<p>\\( \\neg(p\\to q) \\) ifadesinin \\( p\\wedge\\neg q \\) ile denk olduğunu hem denklik zinciriyle hem doğruluk tablosuyla gösterin. \\( (p\\to q)\\to r \\) ile \\( p\\to(q\\to r) \\) denk midir?</p>`,
      cozum: `
        <p>Zincir: \\( p\\to q\\equiv\\neg p\\vee q \\); değillenirse De Morgan ile \\( \\neg(\\neg p\\vee q)\\equiv p\\wedge\\neg q \\). ✓</p>
        <p>Tablo: yalnızca \\( p=T,q=F \\) satırında \\( p\\to q \\) F, yani \\( \\neg(p\\to q) \\) T; \\( p\\wedge\\neg q \\) de yalnızca o satırda T. ✓</p>
        <p>İkinci soru: <b>denk değil</b>. \\( p=F,\\;r=F \\): \\( (F\\to q)\\to F\\equiv T\\to F\\equiv F \\); ama \\( F\\to(\\dots)\\equiv T \\). Koşullu birleşmeli değildir.</p>`
    },
    {
      tip: "vize",
      soru: `<p>"Çalışırsan geçersin. Geçtin. Öyleyse çalıştın." argümanı geçerli midir? Geçerli değilse hangi yanılgıdır; geçerli bir sonuca dönüştürün.</p>`,
      cozum: `
        <p>\\( p\\to q,\\;q\\;\\vdash\\;p \\) — <b>tersi onaylama yanılgısı</b>, geçersiz: \\( p=F,q=T \\) atamasında öncüller T, sonuç F (çalışmadan da geçilebilir).</p>
        <p>Geçerli biçimler: <b>modus ponens</b> "çalıştın ⟹ geçersin" ya da <b>modus tollens</b> "geçmedin ⟹ çalışmadın" (\\( \\neg q\\to\\neg p \\), karşıt-ters).</p>`
    },
    {
      tip: "vize",
      soru: `<p>\\( \\forall x\\,\\exists y\\,(x+y=0) \\) önermesinin değilini alın ve yorumlayın. Evren gerçel sayılar ise hangisi doğrudur? \\( \\exists y\\,\\forall x\\,(x+y=0) \\) doğru mudur?</p>`,
      cozum: `
        \\[ \\neg\\forall x\\,\\exists y\\,(x+y=0)\\equiv \\exists x\\,\\forall y\\,(x+y\\ne 0) \\]
        <p>"Öyle bir x vardır ki hiçbir y ile toplamı 0 olmaz." Gerçel sayılarda her x için \\( y=-x \\) vardır → orijinal <b>doğru</b>, değili yanlış.</p>
        <p>\\( \\exists y\\forall x(x+y=0) \\): tek bir y tüm x'ler için çalışmalı — <b>yanlış</b> (y=−x, x'e bağlı). Niceleyici sırası sonucu değiştirir.</p>`
    },
    {
      tip: "vize",
      soru: `<p>\\( \\sqrt2 \\)'nin irrasyonel olduğunu çelişkiyle ispatlayın. İspatın hangi adımı "n² çiftse n çifttir" lemmasını kullanıyor ve o lemma en kolay hangi teknikle kanıtlanır?</p>`,
      cozum: `
        <p>\\( \\sqrt2=a/b \\), \\( \\gcd(a,b)=1 \\) varsay. \\( a^2=2b^2 \\) ⟹ \\( a^2 \\) çift ⟹ <b>(lemma)</b> a çift, \\( a=2c \\). \\( 4c^2=2b^2\\Rightarrow b^2=2c^2 \\) ⟹ b çift.
        a ve b ikisi de çift → \\( \\gcd\\ge2 \\), varsayımla çelişir. ∎</p>
        <p>Lemma "\\( n^2 \\) çift ⟹ n çift" doğrudan zordur; <b>karşıt-tersi</b> "n tek ⟹ \\( n^2 \\) tek" doğrudan bir satır: \\( (2k+1)^2=2(2k^2+2k)+1 \\).</p>`
    },
    {
      tip: "vize",
      soru: `<p>\\( A=\\{1,2,3\\} \\), \\( B=\\{2,3,4\\} \\), \\( U=\\{1,\\dots,6\\} \\). \\( A\\triangle B \\), \\( \\overline{A\\cup B} \\), \\( \\mathcal P(A\\cap B) \\) ve \\( |A\\times B| \\)'yi bulun. \\( \\overline{A\\cup B}=\\overline A\\cap\\overline B \\) özdeşliğini üyelik tablosuyla doğrulayın.</p>`,
      cozum: `
        <p>\\( A\\triangle B=\\{1,4\\} \\); \\( A\\cup B=\\{1,2,3,4\\} \\) → tümleyen \\( \\{5,6\\} \\); \\( A\\cap B=\\{2,3\\} \\) → \\( \\mathcal P=\\{\\emptyset,\\{2\\},\\{3\\},\\{2,3\\}\\} \\) (\\( 2^2=4 \\)); \\( |A\\times B|=9 \\).</p>
        <p>Üyelik tablosu (x∈A, x∈B): 11→ \\( A\\cup B \\)=1, tüml.=0; \\( \\overline A\\cap\\overline B \\)=0·0=0 ✓. 10→1,0; 0·1=0 ✓. 01→1,0; 1·0=0 ✓. 00→0,1; 1·1=1 ✓. Tüm satırlar eşit → özdeşlik.</p>`
    },
    {
      tip: "vize",
      soru: `<p>\\( f:\\mathbb{R}\\to\\mathbb{R},\\; f(x)=3x-2 \\) fonksiyonunun bijektif olduğunu gösterip tersini bulun. \\( g(x)=x^2 \\) için \\( \\mathbb R\\to\\mathbb R \\) ve \\( \\mathbb R_{\\ge0}\\to\\mathbb R_{\\ge0} \\) durumlarını sınıflandırın.</p>`,
      cozum: `
        <p><b>Birebir:</b> \\( 3a-2=3b-2\\Rightarrow a=b \\). ✓ <b>Örten:</b> her y için \\( x=\\dfrac{y+2}{3} \\). ✓ Tersi \\( f^{-1}(y)=\\dfrac{y+2}{3} \\).</p>
        <p>\\( g:\\mathbb R\\to\\mathbb R \\): birebir değil (\\( g(-1)=g(1) \\)), örten değil (−1 ulaşılamaz). \\( g:\\mathbb R_{\\ge0}\\to\\mathbb R_{\\ge0} \\): birebir ✓ (negatif yok), örten ✓ (\\( \\sqrt y \\)) → bijeksiyon, tersi \\( \\sqrt y \\). Tanım/değer kümesi fonksiyonun parçasıdır.</p>`
    },
    {
      tip: "vize",
      soru: `<p>\\( A=\\{1,2,3,4\\} \\) üzerinde \\( R=\\{(1,1),(1,2),(2,1),(2,2),(3,4),(4,3)\\} \\). Yansıyan, simetrik, ters-simetrik, geçişken midir? Denklik bağıntısı olması için en az hangi çiftler eklenmeli; sınıflar ne olur?</p>`,
      cozum: `
        <p>Yansıyan <b>değil</b>: (3,3),(4,4) yok. Simetrik ✓ (her çiftin tersi var). Ters-simetrik <b>değil</b> ((1,2),(2,1), 1≠2). Geçişken <b>değil</b>: (3,4),(4,3) var ama (3,3) yok.</p>
        <p>Yansıyan kapanış: \\( \\{(3,3),(4,4)\\} \\) ekle → artık geçişken de sağlanır (\\( (3,4),(4,3)\\to(3,3) \\) ✓). Denklik sınıfları: \\( \\{1,2\\} \\) ve \\( \\{3,4\\} \\).</p>`
    },
    {
      tip: "vize",
      soru: `<p>Üç kapalı döngü: <code>for i=1..n: for j=1..i: for k=1..n: x=x+1</code>. Toplam işlem sayısını kapalı biçimde bulup Θ-sınıfını verin. \\( 3n^2+5n+7=O(n^2) \\) için tanık C ve k bulun.</p>`,
      cozum: `
        <p>\\( \\sum_{i=1}^n\\sum_{j=1}^i n=n\\sum_{i=1}^ni=n\\cdot\\dfrac{n(n+1)}{2}=\\dfrac{n^3+n^2}{2}=\\Theta(n^3) \\).</p>
        <p>Tanık: \\( n\\ge1 \\) için \\( 5n\\le5n^2,\\;7\\le7n^2 \\) ⟹ \\( 3n^2+5n+7\\le15n^2 \\) → \\( C=15,\\;k=1 \\). (Alt sınır \\( \\ge3n^2 \\) ile \\( \\Theta(n^2) \\).)</p>`
    },
    {
      tip: "vize",
      soru: `<p>10 kişilik bir gruptan 3 kişilik bir komite kaç farklı şekilde seçilebilir? Komitede bir başkan da belirlenecekse? Belirli iki kişi (A ve B) birlikte olamıyorsa kaç komite kurulur?</p>`,
      cozum: `
        \\[ \\binom{10}{3}=\\frac{10\\cdot9\\cdot8}{6}=120 \\]
        <p>Başkanlı: \\( 120\\cdot3=360 \\) (ya da \\( 10\\cdot\\binom92=360 \\) — iki yoldan aynı ✓).</p>
        <p>A ve B birlikte olan komiteler: üçüncü kişi 8 seçenek → \\( 120-8=112 \\).</p>`
    },
    {
      tip: "vize",
      soru: `<p>Öklid algoritmasıyla \\( \\gcd(252,198) \\) değerini bulun; Bézout katsayılarını (\\( 18=252s+198t \\)) geriye sararak çıkarın. Buradan \\( 14x\\equiv1\\pmod{11} \\)'in çözümünü bulun.</p>`,
      cozum: `
        \\[ 252=1\\cdot198+54,\\quad 198=3\\cdot54+36,\\quad 54=1\\cdot36+18,\\quad 36=2\\cdot18 \\;\\Rightarrow\\;\\gcd=18 \\]
        <p>Geri: \\( 18=54-36=54-(198-3\\cdot54)=4\\cdot54-198=4(252-198)-198=4\\cdot252-5\\cdot198 \\) → \\( s=4,\\;t=-5 \\).</p>
        <p>\\( 14\\equiv3\\pmod{11} \\); \\( 3x\\equiv1 \\): \\( 3\\cdot4=12\\equiv1 \\) → \\( x\\equiv4 \\). Kontrol: \\( 14\\cdot4=56=55+1 \\) ✓.</p>`
    },
    {
      tip: "vize",
      soru: `<p>Herhangi 6 tam sayı arasında farkı 5'e bölünen iki sayı olduğunu ispatlayın. \\( \\{1,2,\\dots,20\\} \\)'den en az kaç sayı seçilmeli ki içlerinden biri diğerini bölsün?</p>`,
      cozum: `
        <p>Kutular: mod 5 kalanları (5 kutu), 6 nesne → güvercin yuvasıyla iki sayı aynı kalanda ⟹ farkları 5'e bölünür. ∎</p>
        <p>Her sayıyı \\( 2^k\\cdot m \\) (m tek) yaz; kutu = m ∈ {1,3,…,19}, 10 kutu. 11 sayı seçilirse ikisi aynı m'ye düşer: \\( 2^am,\\;2^bm \\) → küçüğü büyüğünü böler.
        10 ile kaçınılabilir (11..20 seçin) → cevap <b>11</b>.</p>`
    },
    {
      tip: "final",
      soru: `<p>Her \\( n\\ge1 \\) için \\( 1+2+\\dots+n=\\dfrac{n(n+1)}{2} \\) olduğunu tümevarımla ispatlayın. Ardından \\( n\\ge4 \\) için \\( 2^n&lt;n! \\) olduğunu gösterin — taban adımı neden 4'ten başlar?</p>`,
      cozum: `
        <p><b>Taban:</b> \\( n=1 \\): 1 = \\( \\frac{1\\cdot2}{2} \\). ✓ <b>Adım:</b> \\( n=k \\) için doğru varsay:
        \\( 1+\\dots+k+(k+1)=\\frac{k(k+1)}{2}+(k+1)=\\frac{(k+1)(k+2)}{2} \\). ∎</p>
        <p>İkinci: \\( n=1,2,3 \\)'te \\( 2^n\\ge n! \\) (2>1, 4>2, 8>6) — iddia yanlış; ilk doğru olduğu yer n=4: \\( 16&lt;24 \\) ✓. Adım: \\( 2^{k+1}=2\\cdot2^k&lt;2\\cdot k!\\le(k+1)k!=(k+1)! \\)
        (\\( k\\ge1 \\) için \\( 2\\le k+1 \\)). ∎</p>`
    },
    {
      tip: "final",
      soru: `<p>\\( 3^{302}\\bmod 7 \\) değerini Fermat'ın küçük teoremiyle bulun. Ardından \\( x\\equiv2\\pmod3 \\), \\( x\\equiv3\\pmod5 \\) sistemini Çin Kalan Teoremi ile çözün.</p>`,
      cozum: `
        <p>\\( 3^{6}\\equiv1\\pmod 7 \\); \\( 302=6\\cdot50+2 \\Rightarrow 3^{302}\\equiv3^2=9\\equiv\\mathbf{2}\\pmod 7 \\).</p>
        <p>ÇKT: \\( M=15 \\), \\( M_1=5,\\;y_1=5^{-1}\\bmod3=2 \\) (10≡1); \\( M_2=3,\\;y_2=3^{-1}\\bmod5=2 \\) (6≡1).
        \\( x=2\\cdot5\\cdot2+3\\cdot3\\cdot2=20+18=38\\equiv\\mathbf{8}\\pmod{15} \\). Kontrol: 8 mod 3 = 2 ✓, 8 mod 5 = 3 ✓.</p>`
    },
    {
      tip: "final",
      soru: `<p>1 ile 100 arasında 2, 3 veya 5'e bölünen kaç tam sayı vardır? Hiçbirine bölünmeyen kaç tane vardır ve bunların içinde asal olmayanlar hangileridir?</p>`,
      cozum: `
        <p>\\( |A|=50,\\;|B|=33,\\;|C|=20 \\); kesişimler 6,10,15,30'un katları: 16, 10, 6, 3.</p>
        \\[ 50+33+20-16-10-6+3=\\mathbf{74} \\]
        <p>Hiçbirine bölünmeyen: \\( 100-74=26 \\). Bunlar 1, ve 7'den büyük tüm asallar (7,11,…,97: 22 tane), artı 7·7=49, 7·11=77, 7·13=91 → 1+22+3=26 ✓.
        Asal olmayanlar: 1, 49, 77, 91.</p>`
    },
    {
      tip: "final",
      soru: `<p>"MISSISSIPPI" kelimesinin harfleri kaç farklı şekilde dizilebilir? Dört S'nin hepsi yan yana olan dizilişler kaç tanedir? \\( x_1+x_2+x_3=10 \\), \\( x_i\\ge0 \\) tam sayı çözümü kaçtır; \\( x_1\\ge2 \\) ise?</p>`,
      cozum: `
        \\[ \\frac{11!}{4!\\,4!\\,2!\\,1!}=\\mathbf{34650} \\]
        <p>SSSS tek blok: 8 nesne (blok, 4 I, 2 P, 1 M): \\( \\dfrac{8!}{4!2!}=840 \\).</p>
        <p>Yıldız–çubuk: \\( \\binom{12}{2}=66 \\). \\( x_1\\ge2 \\): \\( x_1'=x_1-2 \\), toplam 8 → \\( \\binom{10}2=45 \\).</p>`
    },
    {
      tip: "final",
      soru: `<p>\\( a_n=a_{n-1}+2a_{n-2} \\), \\( a_0=2 \\), \\( a_1=1 \\) bağıntısını çözün. Ardından \\( b_n=2b_{n-1}+3 \\), \\( b_0=1 \\) homojen olmayan bağıntısını çözün.</p>`,
      cozum: `
        <p>\\( r^2-r-2=(r-2)(r+1)=0\\Rightarrow r=2,-1 \\). \\( a_n=A2^n+B(-1)^n \\); \\( A+B=2,\\;2A-B=1\\Rightarrow A=B=1 \\): \\( a_n=2^n+(-1)^n \\).</p>
        <p>\\( b_n \\): homojen \\( \\alpha2^n \\); özel çözüm sabit \\( C=2C+3\\Rightarrow C=-3 \\). \\( b_n=\\alpha2^n-3 \\), \\( b_0=1\\Rightarrow\\alpha=4 \\): \\( b_n=4\\cdot2^n-3=2^{n+2}-3 \\).
        Kontrol: \\( b_1=5=2\\cdot1+3 \\) ✓.</p>`
    },
    {
      tip: "final",
      soru: `<p>Merge sort \\( T(n)=2T(n/2)+n \\), ikili arama \\( T(n)=T(n/2)+1 \\) ve \\( T(n)=4T(n/2)+n \\) bağıntılarını Ana Teorem ile sınıflandırın.</p>`,
      cozum: `
        <ul>
        <li>Merge: \\( a=2,b=2,d=1 \\): \\( a=b^d \\) → \\( \\Theta(n\\log n) \\).</li>
        <li>İkili arama: \\( a=1,b=2,d=0 \\): \\( a=b^d=1 \\) → \\( \\Theta(\\log n) \\).</li>
        <li>\\( a=4,b=2,d=1 \\): \\( 4&gt;2 \\) → \\( \\Theta(n^{\\log_24})=\\Theta(n^2) \\) — yapraklar baskın.</li>
        </ul>`
    },
    {
      tip: "final",
      soru: `<p>Üreteç fonksiyonu kullanarak: 3 kutuya 10 özdeş top, her kutuda en az 2 en fazla 4 top olacak şekilde kaç dağıtım vardır? Aynı yöntemle \\( a_n=3a_{n-1} \\), \\( a_0=2 \\) bağıntısını çözün.</p>`,
      cozum: `
        <p>Her kutu \\( x^2+x^3+x^4=x^2(1+x+x^2) \\); çarpım \\( x^6(1+x+x^2)^3 \\), \\( x^{10} \\) katsayısı = \\( (1+x+x^2)^3 \\)'te \\( x^4 \\).
        \\( (1+x+x^2)^3=1+3x+6x^2+7x^3+6x^4+3x^5+x^6 \\) → <b>6</b>. (Doğrulama: (4,4,2) 3 permütasyon + (4,3,3) 3 permütasyon = 6 ✓)</p>
        <p>\\( G(x)=\\sum a_nx^n \\): \\( G-2=3xG\\Rightarrow G=\\dfrac{2}{1-3x}=\\sum2\\cdot3^nx^n \\) → \\( a_n=2\\cdot3^n \\).</p>`
    },
    {
      tip: "final",
      soru: `<p>n şapka n kişiye rastgele dağıtılıyor. Kendi şapkasını alan kişi sayısının beklenen değerini gösterge değişkenlerle bulun. Hiç kimsenin almama olasılığı n büyükken yaklaşık kaçtır?</p>`,
      cozum: `
        <p>\\( I_i \\) = i. kişi kendininkini aldı; \\( E[I_i]=P=1/n \\). Doğrusallık: \\( E[X]=\\sum_iE[I_i]=n\\cdot\\frac1n=\\mathbf{1} \\) — n'den bağımsız (değişkenler bağımlı olsa da).</p>
        <p>Hiç kimse: düzensizlik \\( D_n/n!=\\sum_{k=0}^n\\frac{(-1)^k}{k!}\\to e^{-1}\\approx\\mathbf{0.368} \\).</p>`
    },
    {
      tip: "final",
      soru: `<p>Bir çizgede düğüm dereceleri 3, 3, 2, 2, 2 ise kenar sayısı kaçtır? Bu çizgenin Euler devresi var mıdır, Euler yolu? Dereceleri 3,3,3,3,2 olan basit çizge olabilir mi?</p>`,
      cozum: `
        \\[ \\sum\\deg(v)=12=2|E| \\Rightarrow |E|=6 \\]
        <p>Tek dereceli iki düğüm var → Euler <b>devresi yok</b>, ama (bağlıysa) 3-dereceli düğümlerde başlayıp biten <b>Euler yolu var</b>.</p>
        <p>3,3,3,3,2: toplam 14, çift ✓ — mümkün (örn. \\( K_4 \\)'ün bir kenarını kaldırıp iki ucunu 5. düğüme bağla).</p>`
    },
    {
      tip: "final",
      soru: `<p>Düğümler a,b,c,d,e; ağırlıklı kenarlar: ab=4, ac=2, bc=5, bd=10, cd=3, ce=8, de=1. Dijkstra ile a'dan e'ye en kısa yolu bulun. Kruskal ile minimum kapsayan ağacın toplam ağırlığı nedir?</p>`,
      cozum: `
        <p><b>Dijkstra:</b> a=0. Kesinleş a → c=2, b=4. Kesinleş c → d=min(∞,2+3)=5, e=2+8=10, b=min(4,2+5)=4. Kesinleş b → d=min(5,14)=5. Kesinleş d → e=min(10,5+1)=6.
        Kesinleş e=<b>6</b>: yol a–c–d–e.</p>
        <p><b>Kruskal:</b> sıralı: de=1 ✓, ac=2 ✓, cd=3 ✓, ab=4 ✓, bc=5 (çevrim ✗), ce=8 ✗, bd=10 ✗. MST = {de, ac, cd, ab}, toplam <b>10</b> (n−1=4 kenar ✓).</p>`
    },
    {
      tip: "final",
      soru: `<p>Tam 3'lü bir ağaçta 100 yaprak varsa kaç iç düğüm ve toplam kaç düğüm vardır? Yüksekliği 4 olan ikili ağaçta en fazla kaç yaprak olur? 1000 elemanlı dengeli BST'de arama en kötü kaç karşılaştırma?</p>`,
      cozum: `
        <p>\\( l=(m-1)i+1\\Rightarrow100=2i+1\\Rightarrow i=49.5 \\) — tam sayı değil, <b>böyle bir tam 3'lü ağaç yoktur</b>. (Tam 3'lü ağaçta yaprak sayısı tektir.)
        99 yaprak olsaydı i=49, n=3·49+1=148.</p>
        <p>İkili, h=4: \\( 2^4=16 \\) yaprak. BST: \\( h\\ge\\lceil\\log_21000\\rceil=10 \\) → dengeli ağaçta en kötü ~10 karşılaştırma.</p>`
    },
    {
      tip: "final",
      soru: `<p>\\( f(x,y,z)=\\sum m(0,1,2,4,6) \\) fonksiyonunu Karnaugh haritasıyla sadeleştirin. Sonucu yalnızca NAND kapılarıyla nasıl gerçeklersiniz? \\( xy+x'y+xy' \\) ifadesini cebirsel olarak sadeleştirin.</p>`,
      cozum: `
        <p>Harita (satır x; sütun yz = 00,01,11,10): x=0 → 1,1,0,1; x=1 → 1,0,0,1. Sol ve sağ sütun (sarmalı) tüm satırlar → \\( \\overline z \\);
        \\( m_0,m_1 \\) (x=0, y=0) → \\( \\overline x\\,\\overline y \\). <b>\\( f=\\overline z+\\overline x\\,\\overline y \\)</b>.</p>
        <p>NAND: \\( f=\\overline{\\overline{\\overline z}\\cdot\\overline{\\overline x\\,\\overline y}}=\\overline{z\\cdot(x+y)} \\) → \\( \\overline x,\\overline y \\) NAND(x,x), NAND(y,y); \\( \\overline{\\overline x\\,\\overline y} \\) tek NAND;
        \\( \\overline z \\) NAND(z,z); son çıkış NAND(\\( \\overline z \\)... ) — De Morgan ile her SOP iki seviye NAND'a çevrilir.</p>
        <p>Cebir: \\( xy+\\overline xy+x\\overline y=y(x+\\overline x)+x\\overline y=y+x\\overline y=(y+x)(y+\\overline y)=\\mathbf{x+y} \\).</p>`
    }
  ]
};
