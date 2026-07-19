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
  ozet: "Önermeler ve yüklem mantığı, çıkarım kuralları ve ispat teknikleri; kümeler, fonksiyonlar, bağıntılar; algoritma karmaşıklığı (Big-O); sayı teorisi ve modüler aritmetik; tümevarım ve özyineleme; sayma (permütasyon, kombinasyon, güvercin yuvası, içerme-dışarma); özyineleme bağıntıları; ayrık olasılık; çizge/ağaç teorisi ve Boole cebiri.",
  konular: [
    {
      baslik: "1. Önermeler Mantığı ve Doğruluk Tabloları",
      icerik: `
        <p>Önerme, doğru (T) ya da yanlış (F) olan bir ifadedir. Temel bağlaçlar:
        değil \\( \\neg p \\), ve \\( p\\wedge q \\), veya \\( p\\vee q \\),
        ise \\( p\\to q \\), ancak ve ancak \\( p\\leftrightarrow q \\), özel-veya \\( p\\oplus q \\).</p>
        <ul>
          <li>\\( p\\to q \\) yalnızca \\( p \\) doğru, \\( q \\) yanlışken yanlıştır.</li>
          <li><b>Karşıt-ters (contrapositive):</b> \\( p\\to q \\equiv \\neg q\\to\\neg p \\) (denk).</li>
          <li><b>Ters (converse):</b> \\( q\\to p \\), <b>karşıt (inverse):</b> \\( \\neg p\\to\\neg q \\) — bunlar orijinale denk <u>değildir</u>.</li>
          <li><b>De Morgan:</b> \\( \\neg(p\\wedge q)\\equiv\\neg p\\vee\\neg q \\), \\( \\neg(p\\vee q)\\equiv\\neg p\\wedge\\neg q \\)</li>
        </ul>
        <p><b>Totoloji:</b> her satırda T; <b>çelişki:</b> her satırda F; <b>olurluluk (contingency):</b> ikisi de değil.
        İki önerme <b>mantıksal denktir</b> (\\( \\equiv \\)) ancak \\( p\\leftrightarrow q \\) bir totolojiyse.</p>`
    },
    {
      baslik: "2. Mantıksal Denklikler ve Çıkarım Kuralları",
      icerik: `
        <p>Devingen sadeleştirmede sık kullanılan denklikler:</p>
        <ul>
          <li><b>Koşullu:</b> \\( p\\to q\\equiv\\neg p\\vee q \\)</li>
          <li><b>Dağılma:</b> \\( p\\wedge(q\\vee r)\\equiv(p\\wedge q)\\vee(p\\wedge r) \\)</li>
          <li><b>Yutma (absorption):</b> \\( p\\vee(p\\wedge q)\\equiv p \\)</li>
          <li><b>İkiye katlama:</b> \\( \\neg(\\neg p)\\equiv p \\)</li>
        </ul>
        <p>Geçerli argümanların temel <b>çıkarım kuralları</b>:</p>
        <ul>
          <li><b>Modus ponens:</b> \\( p,\\; p\\to q \\;\\vdash\\; q \\)</li>
          <li><b>Modus tollens:</b> \\( \\neg q,\\; p\\to q \\;\\vdash\\; \\neg p \\)</li>
          <li><b>Kıyas (hypothetical syllogism):</b> \\( p\\to q,\\; q\\to r \\;\\vdash\\; p\\to r \\)</li>
          <li><b>Ayırıcı kıyas:</b> \\( p\\vee q,\\; \\neg p \\;\\vdash\\; q \\)</li>
        </ul>`
    },
    {
      baslik: "3. Yüklem Mantığı ve Niceleyiciler",
      icerik: `
        <p>Yüklem \\( P(x) \\) bir değişkene bağlı doğruluk değeri alır.
        Evrensel niceleyici \\( \\forall x\\,P(x) \\), varlıksal niceleyici \\( \\exists x\\,P(x) \\).</p>
        <p><b>Değilleme (niceleyici içeri geçer, tip değişir):</b></p>
        \\[ \\neg\\forall x\\,P(x)\\equiv\\exists x\\,\\neg P(x), \\qquad \\neg\\exists x\\,P(x)\\equiv\\forall x\\,\\neg P(x) \\]
        <p>İç içe niceleyicilerde <b>sıra önemlidir</b>: \\( \\forall x\\,\\exists y\\,P(x,y) \\) ile
        \\( \\exists y\\,\\forall x\\,P(x,y) \\) genelde farklıdır. Değilleme tüm zinciri çevirir:
        \\( \\neg\\forall x\\,\\exists y\\,P\\equiv\\exists x\\,\\forall y\\,\\neg P \\).</p>`
    },
    {
      baslik: "4. İspat Teknikleri",
      icerik: `
        <p>Bir teoremi kanıtlamanın başlıca yolları:</p>
        <ul>
          <li><b>Doğrudan ispat:</b> hipotezden mantıksal adımlarla sonuca gidilir.</li>
          <li><b>Karşıt-ters ile:</b> \\( p\\to q \\) yerine denk olan \\( \\neg q\\to\\neg p \\) gösterilir.</li>
          <li><b>Çelişkiyle (contradiction):</b> \\( \\neg q \\) varsayılır, bir çelişki türetilir
          (klasik: \\( \\sqrt2 \\) irrasyoneldir; asal sayılar sonsuzdur).</li>
          <li><b>Durum ayrımı (cases):</b> tüm olasılıklar ayrı ayrı kanıtlanır.</li>
          <li><b>Varlık/teklik ispatı:</b> bir örnek göster (yapıcı) veya çelişkiyle var olduğunu göster.</li>
          <li><b>Karşı örnek:</b> \\( \\forall x\\,P(x) \\) iddiasını çürütmek için tek bir \\( x \\) yeter.</li>
        </ul>
        <p>Ayrıca <b>tümevarım</b> (bölüm 9) doğal sayılar üzerindeki önermeler için standart yöntemdir.</p>`
    },
    {
      baslik: "5. Kümeler ve Küme İşlemleri",
      icerik: `
        <p>Temel işlemler: birleşim \\( A\\cup B \\), kesişim \\( A\\cap B \\), fark \\( A\\setminus B \\),
        tümleyen \\( \\overline{A} \\), simetrik fark \\( A\\triangle B \\).</p>
        <ul>
          <li><b>Kuvvet kümesi:</b> \\( |\\mathcal{P}(A)|=2^{|A|} \\)</li>
          <li><b>Kartezyen çarpım:</b> \\( |A\\times B|=|A|\\,|B| \\)</li>
          <li><b>De Morgan (kümeler):</b> \\( \\overline{A\\cup B}=\\overline{A}\\cap\\overline{B} \\)</li>
        </ul>
        <p>Küme özdeşlikleri mantık denklikleriyle bire bir eşleşir (\\( \\cup\\leftrightarrow\\vee \\),
        \\( \\cap\\leftrightarrow\\wedge \\), \\( \\overline{\\phantom{A}}\\leftrightarrow\\neg \\)).
        Kanıtlar üyelik tablosu veya karşılıklı içerme (\\( A\\subseteq B \\) ve \\( B\\subseteq A \\)) ile yapılır.</p>`
    },
    {
      baslik: "6. Fonksiyonlar",
      icerik: `
        <p>\\( f:A\\to B \\) her \\( a\\in A \\)'yı tek bir \\( f(a)\\in B \\)'ye eşler.</p>
        <ul>
          <li><b>Birebir (injective):</b> \\( f(a_1)=f(a_2)\\Rightarrow a_1=a_2 \\)</li>
          <li><b>Örten (surjective):</b> her \\( b\\in B \\) için bir \\( a \\) vardır.</li>
          <li><b>Birebir-örten (bijective):</b> ikisi de → tersi \\( f^{-1} \\) vardır.</li>
        </ul>
        <p>Bileşke \\( (g\\circ f)(x)=g(f(x)) \\). Ayrık matematikte sık geçen fonksiyonlar:
        <b>taban</b> \\( \\lfloor x\\rfloor \\) ve <b>tavan</b> \\( \\lceil x\\rceil \\).
        Sonlu kümelerde \\( f:A\\to B \\) bijeksiyon varsa \\( |A|=|B| \\).</p>`
    },
    {
      baslik: "7. Bağıntılar: Denklik ve Kısmi Sıralama",
      icerik: `
        <p>\\( R\\subseteq A\\times A \\) bağıntısının özellikleri: <b>yansıyan</b> (\\( aRa \\)),
        <b>simetrik</b> (\\( aRb\\Rightarrow bRa \\)), <b>ters-simetrik</b>
        (\\( aRb\\wedge bRa\\Rightarrow a=b \\)), <b>geçişken</b> (\\( aRb\\wedge bRc\\Rightarrow aRc \\)).</p>
        <ul>
          <li><b>Denklik bağıntısı</b> = yansıyan + simetrik + geçişken → kümeyi ayrık
          <b>denklik sınıflarına</b> böler (örn. mod \\(n\\) kalanları).</li>
          <li><b>Kısmi sıralama (poset)</b> = yansıyan + ters-simetrik + geçişken → <b>Hasse diyagramı</b>
          ile gösterilir; en büyük/küçük, maksimal/minimal elemanlar tanımlanır.</li>
        </ul>
        <p>Bağıntıların yansıma/simetri/geçişme <b>kapanışları</b> alınabilir; geçişme kapanışı Warshall algoritmasıyla bulunur.</p>`
    },
    {
      baslik: "8. Algoritmalar ve Karmaşıklık (Big-O)",
      icerik: `
        <p>Bir algoritmanın çalışma süresini büyüme hızıyla sınıflandırırız.
        \\( f(n)=O(g(n)) \\) demek, yeterince büyük \\( n \\) için
        \\( |f(n)|\\le C|g(n)| \\) olacak şekilde \\( C>0 \\) sabiti vardır demektir.</p>
        <ul>
          <li>\\( O \\): üst sınır, \\( \\Omega \\): alt sınır, \\( \\Theta \\): sıkı (iki taraflı) sınır.</li>
          <li>Yaygın sıralama (küçükten büyüğe):
          \\( O(1)<O(\\log n)<O(n)<O(n\\log n)<O(n^2)<O(2^n)<O(n!) \\)</li>
        </ul>
        <p>Örnek: ikili arama \\( O(\\log n) \\), kabarcık sıralama \\( O(n^2) \\),
        birleştirme (merge) sıralaması \\( O(n\\log n) \\). Yalnızca baskın terim ve sabit çarpansız
        büyüme dikkate alınır.</p>`
    },
    {
      baslik: "9. Sayı Teorisi ve Modüler Aritmetik",
      icerik: `
        <p><b>Bölme algoritması:</b> \\( a=qn+r,\\; 0\\le r<n \\). \\( a\\mid b \\) "a böler b" demektir.</p>
        <p><b>EBOB (gcd)</b> Öklid algoritmasıyla bulunur: \\( \\gcd(a,b)=\\gcd(b,\\;a\\bmod b) \\).
        <b>Bézout:</b> \\( \\gcd(a,b)=sa+tb \\). Ayrıca \\( \\gcd(a,b)\\cdot\\mathrm{lcm}(a,b)=a\\,b \\).</p>
        <p><b>Kongrüans:</b> \\( a\\equiv b\\pmod n \\) ⟺ \\( n\\mid(a-b) \\). Toplama ve çarpma mod altında korunur.</p>
        <p><b>Fermat'ın küçük teoremi:</b> \\( p \\) asal ve \\( \\gcd(a,p)=1 \\) ise
        \\( a^{\\,p-1}\\equiv 1\\pmod p \\) — büyük üslü mod hesaplarını kısaltır.
        Bu araçlar RSA gibi açık anahtarlı şifrelemenin temelidir.</p>`
    },
    {
      baslik: "10. Tümevarım ve Özyineleme (Recursion)",
      icerik: `
        <p><b>Zayıf tümevarım:</b> \\( P(1) \\) doğru ve \\( P(k)\\Rightarrow P(k+1) \\) ise her
        \\( n\\ge1 \\) için \\( P(n) \\) doğrudur.
        <b>Güçlü tümevarım:</b> \\( P(1),\\dots,P(k) \\) doğruysa \\( P(k+1) \\) (asal çarpanlara ayırma ispatı gibi).</p>
        <p>Sık kullanılan kapalı toplamlar:</p>
        \\[ \\sum_{i=1}^{n} i=\\frac{n(n+1)}{2}, \\quad \\sum_{i=1}^{n} i^2=\\frac{n(n+1)(2n+1)}{6}, \\quad \\sum_{i=0}^{n} r^i=\\frac{r^{n+1}-1}{r-1} \\]
        <p><b>Özyinelemeli tanımlar:</b> taban durum + özyineleme kuralı (örn. \\( n!=n\\cdot(n-1)! \\),
        Fibonacci \\( f_n=f_{n-1}+f_{n-2} \\)). <b>Yapısal tümevarım</b> ağaç/dizi gibi özyinelemeli yapılar için kullanılır.</p>`
    },
    {
      baslik: "11. Sayma Temelleri: Permütasyon, Kombinasyon, Güvercin Yuvası",
      icerik: `
        <p><b>Çarpma kuralı</b> (ardışık bağımsız seçim) ve <b>toplama kuralı</b> (ayrık durumlar) temeldir.</p>
        \\[ P(n,r)=\\frac{n!}{(n-r)!}, \\qquad C(n,r)=\\binom{n}{r}=\\frac{n!}{r!\\,(n-r)!} \\]
        <p><b>Tekrarlı seçim:</b> tekrarlı permütasyon \\( n^r \\); tekrarlı kombinasyon
        \\( \\binom{n+r-1}{r} \\); çok kümeli düzenleme \\( \\dfrac{n!}{n_1!\\,n_2!\\cdots n_k!} \\).</p>
        <p><b>Güvercin yuvası ilkesi:</b> \\( n \\) kutuya \\( n+1 \\) nesne → en az bir kutuda ≥2 nesne.
        Genelleştirilmiş biçim: \\( N \\) nesne \\( k \\) kutuya konursa en az bir kutuda
        \\( \\lceil N/k\\rceil \\) nesne vardır.</p>`
    },
    {
      baslik: "12. Binom Teoremi ve İçerme-Dışarma",
      icerik: `
        <p><b>Binom teoremi:</b></p>
        \\[ (x+y)^n=\\sum_{k=0}^{n}\\binom{n}{k}x^{\\,n-k}y^{\\,k} \\]
        <p>Pascal özdeşliği \\( \\binom{n}{k}=\\binom{n-1}{k-1}+\\binom{n-1}{k} \\) ile katsayılar üçgen oluşturur;
        ayrıca \\( \\sum_{k}\\binom{n}{k}=2^n \\).</p>
        <p><b>İçerme-Dışarma (iki ve üç küme):</b></p>
        \\[ |A\\cup B|=|A|+|B|-|A\\cap B| \\]
        \\[ |A\\cup B\\cup C|=|A|+|B|+|C|-|A\\cap B|-|A\\cap C|-|B\\cap C|+|A\\cap B\\cap C| \\]`
    },
    {
      baslik: "13. Özyineleme Bağıntıları (Recurrence) Çözümü",
      icerik: `
        <p><b>Doğrusal, homojen, sabit katsayılı</b> bağıntılar karakteristik denklemle çözülür.
        İkinci mertebe \\( a_n=c_1 a_{n-1}+c_2 a_{n-2} \\) için:</p>
        \\[ r^2=c_1 r+c_2 \\;\\Rightarrow\\; a_n=A r_1^{\\,n}+B r_2^{\\,n} \\quad (r_1\\ne r_2) \\]
        <p>Kökler eşitse (\\( r_1=r_2=r \\)): \\( a_n=(A+Bn)r^{\\,n} \\).
        \\( A,B \\) sabitleri başlangıç koşullarından bulunur.
        Fibonacci için \\( r^2=r+1 \\) → altın oran \\( \\varphi=\\frac{1+\\sqrt5}{2} \\) ortaya çıkar.</p>
        <p>Böl-ve-yönet algoritmalarında ise <b>Ana Teorem (Master Theorem)</b>:
        \\( T(n)=aT(n/b)+f(n) \\) formundaki bağıntıları sınıflandırır.</p>`
    },
    {
      baslik: "14. Ayrık Olasılık",
      icerik: `
        <p>Eş olası örnek uzayında \\( P(E)=\\dfrac{|E|}{|S|} \\).
        Temel kurallar: \\( P(\\overline{E})=1-P(E) \\),
        \\( P(A\\cup B)=P(A)+P(B)-P(A\\cap B) \\).</p>
        <p><b>Koşullu olasılık:</b> \\( P(A\\mid B)=\\dfrac{P(A\\cap B)}{P(B)} \\).
        Bağımsızsa \\( P(A\\cap B)=P(A)P(B) \\).</p>
        <p><b>Bayes teoremi:</b></p>
        \\[ P(A\\mid B)=\\frac{P(B\\mid A)\\,P(A)}{P(B)} \\]
        <p>Sayma teknikleri (permütasyon/kombinasyon) olasılık hesaplarının çekirdeğidir.</p>`
    },
    {
      baslik: "15. Çizge (Graf) Teorisi",
      icerik: `
        <p>Çizge \\( G=(V,E) \\): düğümler ve kenarlar. Yönlü/yönsüz, basit/çoklu olabilir.
        <b>El sıkışma lemması:</b></p>
        \\[ \\sum_{v\\in V}\\deg(v)=2|E| \\]
        <p>Sonuç: tek dereceli düğüm sayısı her zaman çifttir.
        Tam çizge \\( K_n \\)'de kenar sayısı \\( \\binom{n}{2}=\\dfrac{n(n-1)}{2} \\).</p>
        <ul>
          <li><b>Euler turu:</b> her kenardan tam bir kez → tüm dereceler çift olmalı (kapalı tur).</li>
          <li><b>Hamilton turu:</b> her düğümden tam bir kez (genel bir kolay ölçüt yoktur).</li>
          <li><b>Düzlemsel çizge:</b> Euler bağıntısı \\( v-e+f=2 \\).</li>
          <li><b>Boyama:</b> komşu düğümler farklı renk; en az renk sayısı <b>kromatik sayı</b> \\( \\chi(G) \\).</li>
        </ul>
        <p>Gösterim: komşuluk matrisi / komşuluk listesi. İzomorfizm, yapı korunumu demektir.</p>`
    },
    {
      baslik: "16. Ağaçlar (Trees)",
      icerik: `
        <p><b>Ağaç:</b> döngüsüz bağlı çizge. Temel gerçek: \\( n \\) düğümlü ağaçta tam \\( n-1 \\) kenar
        vardır ve her iki düğüm arasında tek bir yol bulunur.</p>
        <ul>
          <li><b>Kapsayan ağaç (spanning tree):</b> tüm düğümleri içeren ağaç alt-çizgesi
          (BFS/DFS veya Kruskal/Prim ile minimum ağırlıklı).</li>
          <li><b>Köklü ağaç:</b> ebeveyn/çocuk/yaprak. İkili ağaçta her düğümün en çok 2 çocuğu olur.</li>
          <li><b>Dolaşma:</b> preorder, inorder, postorder.</li>
          <li><b>İkili arama ağacı (BST):</b> sol alt-ağaç &lt; kök &lt; sağ alt-ağaç → hızlı arama.</li>
        </ul>
        <p><b>Cayley formülü:</b> \\( n \\) etiketli düğümle \\( n^{\\,n-2} \\) farklı ağaç kurulabilir.</p>`
    },
    {
      baslik: "17. Boole Cebiri ve Mantık Devreleri",
      icerik: `
        <p>Boole cebri \\( \\{0,1\\} \\) üzerinde tanımlıdır ve mantık kapılarının temelidir
        (EE için doğrudan ilgili). İşlemler: VE \\( x\\cdot y \\), VEYA \\( x+y \\),
        DEĞİL \\( \\overline{x} \\).</p>
        <ul>
          <li><b>Özdeşlikler:</b> \\( x+\\overline{x}=1 \\), \\( x\\cdot\\overline{x}=0 \\),
          yutma \\( x+xy=x \\), De Morgan \\( \\overline{x+y}=\\overline{x}\\cdot\\overline{y} \\).</li>
          <li><b>Kapılar:</b> AND, OR, NOT, NAND, NOR, XOR. NAND ve NOR <b>evrenseldir</b>
          (tek başına her fonksiyonu kurar).</li>
          <li><b>Normal formlar:</b> çarpımların toplamı (SOP), toplamların çarpımı (POS).</li>
        </ul>
        <p>Fonksiyonlar doğruluk tablosundan yazılır ve <b>Karnaugh haritası (K-map)</b> veya
        Boole özdeşlikleriyle sadeleştirilerek en az kapıyla devre tasarlanır.</p>`
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
    { ad: "Bayes Teoremi", formul: `\\( P(A|B)=\\dfrac{P(B|A)P(A)}{P(B)} \\)`, aciklama: "Koşullu olasılığın tersine çevrimi." }
  ],
  galeri: [],
  dokumanlar: [],
  videolar: [
    { baslik: "TrevTutor — Discrete Math (Tam Kurs Playlist)", playlist: "PLDDGPdw7e6Ag1EIznZ-m-qXu4XX3A0cIz" },
    { baslik: "Kimberly Brehm — Discrete Math I (Tam Kurs Playlist)", playlist: "PLl-gb0E4MII28GykmtuBXNUNoej-vY5Rz" }
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
      soru: `<p>\\( \\neg(p\\to q) \\) ifadesinin \\( p\\wedge\\neg q \\) ile denk olduğunu gösterin.</p>`,
      cozum: `
        <p>\\( p\\to q\\equiv\\neg p\\vee q \\) yazılır. Değillenirse:</p>
        \\[ \\neg(\\neg p\\vee q)\\equiv p\\wedge\\neg q \\quad\\text{(De Morgan)} \\]
        <p>Böylece iki ifade <b>denktir</b>.</p>`
    },
    {
      tip: "vize",
      soru: `<p>\\( \\forall x\\,\\exists y\\,(x+y=0) \\) önermesinin değilini alın ve yorumlayın.</p>`,
      cozum: `
        \\[ \\neg\\forall x\\,\\exists y\\,(x+y=0)\\equiv \\exists x\\,\\forall y\\,(x+y\\ne 0) \\]
        <p>Yani "öyle bir \\(x\\) vardır ki hiçbir \\(y\\) ile toplamı 0 olmaz." (Gerçek sayılarda bu yanlıştır,
        çünkü her \\(x\\) için \\( y=-x \\) seçilebilir.)</p>`
    },
    {
      tip: "vize",
      soru: `<p>10 kişilik bir gruptan 3 kişilik bir komite kaç farklı şekilde seçilebilir?</p>`,
      cozum: `
        \\[ \\binom{10}{3}=\\frac{10!}{3!\\,7!}=\\frac{10\\cdot9\\cdot8}{6}=120 \\]`
    },
    {
      tip: "vize",
      soru: `<p>\\( f:\\mathbb{R}\\to\\mathbb{R},\\; f(x)=3x-2 \\) fonksiyonunun bijektif olduğunu gösterip tersini bulun.</p>`,
      cozum: `
        <p><b>Birebir:</b> \\( f(a)=f(b)\\Rightarrow 3a-2=3b-2\\Rightarrow a=b \\). ✓</p>
        <p><b>Örten:</b> her \\( y \\) için \\( x=\\dfrac{y+2}{3} \\) seçilince \\( f(x)=y \\). ✓</p>
        <p>Bijektif olduğundan tersi: \\( f^{-1}(y)=\\dfrac{y+2}{3} \\).</p>`
    },
    {
      tip: "vize",
      soru: `<p>Öklid algoritmasıyla \\( \\gcd(252,198) \\) değerini bulun.</p>`,
      cozum: `
        \\[ 252=1\\cdot198+54 \\]
        \\[ 198=3\\cdot54+36 \\]
        \\[ 54=1\\cdot36+18 \\]
        \\[ 36=2\\cdot18+0 \\]
        <p>Son sıfır olmayan kalan: \\( \\gcd(252,198)=\\mathbf{18} \\).</p>`
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
      soru: `<p>\\( 3^{302}\\bmod 7 \\) değerini Fermat'ın küçük teoremiyle bulun.</p>`,
      cozum: `
        <p>7 asal ve \\( \\gcd(3,7)=1 \\) olduğundan \\( 3^{6}\\equiv1\\pmod 7 \\).</p>
        \\[ 302=6\\cdot50+2 \\;\\Rightarrow\\; 3^{302}\\equiv(3^{6})^{50}\\cdot3^{2}\\equiv 1\\cdot 9\\equiv \\mathbf{2}\\pmod 7 \\]`
    },
    {
      tip: "final",
      soru: `<p>1 ile 100 arasında 2, 3 veya 5'e bölünen kaç tam sayı vardır? (İçerme-Dışarma)</p>`,
      cozum: `
        <p>\\( |A|=50,\\;|B|=33,\\;|C|=20 \\) (2,3,5'in katları).
        Kesişimler: \\( |A\\cap B|=16 \\) (6), \\( |A\\cap C|=10 \\) (10), \\( |B\\cap C|=6 \\) (15),
        \\( |A\\cap B\\cap C|=3 \\) (30).</p>
        \\[ 50+33+20-16-10-6+3=\\mathbf{74} \\]`
    },
    {
      tip: "final",
      soru: `<p>"MISSISSIPPI" kelimesinin harfleri kaç farklı şekilde dizilebilir?</p>`,
      cozum: `
        <p>11 harf: M(1), I(4), S(4), P(2). Tekrarlı düzenleme:</p>
        \\[ \\frac{11!}{4!\\,4!\\,2!\\,1!}=\\frac{39916800}{24\\cdot24\\cdot2}=\\mathbf{34650} \\]`
    },
    {
      tip: "final",
      soru: `<p>\\( a_n=a_{n-1}+2a_{n-2} \\), \\( a_0=2 \\), \\( a_1=1 \\) bağıntısını çözün.</p>`,
      cozum: `
        <p>Karakteristik denklem: \\( r^2-r-2=0\\Rightarrow(r-2)(r+1)=0\\Rightarrow r=2,-1 \\).</p>
        \\[ a_n=A\\,2^{n}+B(-1)^{n} \\]
        <p>\\( a_0=A+B=2 \\), \\( a_1=2A-B=1 \\) → \\( A=1,\\;B=1 \\).</p>
        \\[ a_n=2^{n}+(-1)^{n} \\]`
    },
    {
      tip: "final",
      soru: `<p>Bir çizgede düğüm dereceleri 3, 3, 2, 2, 2 ise kenar sayısı kaçtır?</p>`,
      cozum: `
        \\[ \\sum\\deg(v)=3+3+2+2+2=12=2|E| \\Rightarrow |E|=6 \\]`
    },
    {
      tip: "final",
      soru: `<p>\\( xy+x'y+xy' \\) Boole ifadesini sadeleştirin. (\\( x' = \\overline{x} \\))</p>`,
      cozum: `
        <p>Önce \\( xy \\)'yi iki kez kullanacak şekilde grupla:</p>
        \\[ xy+xy'=x(y+y')=x, \\qquad xy+x'y=y(x+x')=y \\]
        <p>Böylece ifade \\( x+y \\) 'ye iner (her terim ikisinden birine dâhil):</p>
        \\[ xy+x'y+xy'=x+y \\]`
    }
  ]
};
