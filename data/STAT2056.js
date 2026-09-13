/* ============================================================
   STAT2056 — Probability and Random Variables
   ------------------------------------------------------------
   Bu dosya SADECE bu derse aittir. İçerik eklemek için burayı düzenle.
   Alan açıklamaları için data/EE3061.js başlığına bak.

   Kapsam: Leon-Garcia / Bertsekas-Tsitsiklis temel alınarak bir
   dönemlik olasılık dersinin çekirdek konuları (EE odaklı).
   ============================================================ */

window.DERSLER = window.DERSLER || {};

window.DERSLER["STAT2056"] = {
  ad: "Probability and Random Variables",
  donem: "3. Sınıf · 1. Dönem",
  renk: "#F472B6",
  ozet: "Olasılık aksiyomları ve sayma; koşullu olasılık, toplam olasılık ve Bayes; bağımsızlık; ayrık ve sürekli rastgele değişkenler (PMF/PDF/CDF); önemli dağılımlar (Bernoulli, Binom, Geometrik, Poisson, Hipergeometrik, Üniform, Üstel, Gamma/Erlang, Rayleigh, Gauss); beklenen değer, varyans, momentler ve eşitsizlikler; rastgele değişken fonksiyonları; birleşik dağılımlar, kovaryans, korelasyon ve iki değişkenli Gauss; koşullu beklenti ve MMSE tahmin; toplamlar ve konvolüsyon; MGF ve karakteristik fonksiyon; Büyük Sayılar Yasası ve Merkezi Limit Teoremi; rastgele süreçler, WSS ve PSD; Poisson süreci, üstel arası zamanlar ve hafızasızlık.",
  konular: [
    {
      baslik: "1. Olasılık Aksiyomları ve Örnek Uzay",
      icerik: `
        <p>Olasılık, sonucu önceden bilinmeyen bir <b>deneyin</b> matematiksel modelidir. Üç bileşen: <b>örnek uzay</b> \\( S \\) (tüm olası
        sonuçlar), <b>olaylar</b> (S'nin alt kümeleri) ve her olaya bir sayı atayan <b>olasılık ölçüsü</b> P. Zar: \\( S=\\{1,\\dots,6\\} \\),
        "çift gelme" olayı \\( \\{2,4,6\\} \\). Sürekli deneyde (bir direncin ölçülen değeri) S bir aralıktır ve tek noktaların olasılığı sıfırdır.</p>
        <p><b>Kolmogorov aksiyomları</b> — tüm teori bu üç kuraldan türer:</p>
        <ol>
          <li>\\( P(A)\\ge0 \\)</li>
          <li>\\( P(S)=1 \\)</li>
          <li>Ayrık (bağdaşmaz) olaylar için toplanabilirlik: \\( A\\cap B=\\emptyset\\Rightarrow P(A\\cup B)=P(A)+P(B) \\) (sayılabilir sonsuz için de).</li>
        </ol>
        <p><b>Türetilen kurallar</b> (her biri aksiyomlardan iki satırda çıkar, sınavda kanıtı istenebilir):
        \\( P(\\overline A)=1-P(A) \\); \\( P(\\emptyset)=0 \\); \\( A\\subseteq B\\Rightarrow P(A)\\le P(B) \\); \\( P(A)\\le1 \\); ve
        <b>genel toplam kuralı</b> — kesişim iki kez sayıldığı için bir kez çıkarılır:</p>
        \\[ P(A\\cup B)=P(A)+P(B)-P(A\\cap B), \\qquad P(A\\cup B\\cup C)=\\sum P-\\sum P(\\cdot\\cap\\cdot)+P(A\\cap B\\cap C) \\]
        <p>Venn diyagramı bu kuralların görsel kanıtıdır; "en az biri" = birleşim, "hiçbiri" = birleşimin tümleyeni,
        "tam olarak biri" = birleşim eksi kesişim (\\( P(A)+P(B)-2P(A\\cap B) \\)).</p>
        <p><b>Eş olası sonuçlar:</b> sonlu S'de her sonuç \\( 1/|S| \\) ise \\( P(A)=|A|/|S| \\) — "elverişli / toplam". Bu, olasılığı
        saymaya indirger; bir sonraki konunun gerekçesi budur. Dikkat: eş olasılık bir <b>varsayımdır</b>; hileli zar için geçerli değildir.</p>
        <p><b>Sık hata:</b> "ya da" kelimesini her zaman toplama çevirmek. Toplama yalnızca olaylar ayrıksa doğrudur; aksi halde kesişim düşülür.
        İkinci hata: sürekli değişkende \\( P(X=3.2)=0 \\)'ı "imkânsız" sanmak — sıfır olasılık, imkânsızlık demek değildir.</p>
        <p><b>Neden önemli:</b> Bit hata oranı, arıza olasılığı, yanlış alarm — mühendislikteki her "güvenilirlik" sayısı bir olay olasılığıdır
        ve kurallar yanlış uygulanırsa (özellikle bağımsızlık varsayılarak) sonuç kat kat yanlış çıkar.</p>`
    },
    {
      baslik: "2. Sayma ile Olasılık (Kombinatorik)",
      icerik: `
        <p>Eş olası uzaylarda olasılık hesabı, doğru saymaya iner. Dört temel araç ve <b>hangisinin ne zaman</b> kullanıldığı:</p>
        <ul>
          <li><b>Çarpma kuralı:</b> k aşamalı seçimde her aşamanın seçenek sayısı çarpılır. 3 harf + 2 rakam plaka: \\( 26^3\\cdot10^2 \\).
          Tekrarlı seçim (yerine koyarak): \\( n^k \\).</li>
          <li><b>Permütasyon</b> — sıra <b>önemli</b>, tekrar yok: \\( P(n,r)=\\dfrac{n!}{(n-r)!} \\). 10 kişiden başkan+yardımcı: \\( 10\\cdot9=90 \\).</li>
          <li><b>Kombinasyon</b> — sıra <b>önemsiz</b>: \\( \\dbinom nr=\\dfrac{n!}{r!(n-r)!} \\). 10 kişiden 2 kişilik komite: 45.
          Özdeşlikler: \\( \\binom nr=\\binom n{n-r} \\), \\( \\sum_r\\binom nr=2^n \\).</li>
          <li><b>Bölümleme:</b> n nesneyi \\( n_1,\\dots,n_k \\) büyüklüğünde gruplara ayırma: \\( \\dfrac{n!}{n_1!\\cdots n_k!} \\) (çok terimli katsayı).
          52 kartı 4 oyuncuya dağıtma: \\( 52!/(13!)^4 \\).</li>
        </ul>
        <p><b>Çözüm disiplini:</b> pay ve payda <b>aynı sayma modeliyle</b> sayılmalıdır. Sıralı sayıyorsan ikisini de sıralı say;
        kombinasyonla sayıyorsan ikisini de kombinasyonla. En yaygın hata birini sıralı, diğerini sırasız saymaktır.</p>
        <p><b>Klasik örnekler:</b></p>
        <ul>
          <li><b>Poker eli (5 kart):</b> toplam \\( \\binom{52}{5}=2\\,598\\,960 \\). Tam bir çift: değeri seç (13), o değerden 2 kart
          \\( \\binom42 \\), kalan 3 kart farklı 3 değerden \\( \\binom{12}3\\cdot4^3 \\) → \\( P\\approx0.42 \\).</li>
          <li><b>Torbadan çekiliş:</b> 5 kırmızı 3 mavi toptan 3 çekilirken tam 2 kırmızı: \\( \\dfrac{\\binom52\\binom31}{\\binom83}=\\dfrac{30}{56} \\)
          — <b>hipergeometrik</b> yapının kendisi.</li>
          <li><b>Doğum günü problemi:</b> 23 kişide en az iki ortak doğum günü olasılığı \\( 1-\\dfrac{365\\cdot364\\cdots343}{365^{23}}\\approx0.51 \\).
          "En az bir" → tümleyenden gitmek çoğu zaman tek yoldur.</li>
          <li><b>Bit dizileri:</b> 8 bitin tam 3'ü hatalı: \\( \\binom83 \\) dizi; hata olasılığı p ise \\( \\binom83p^3(1-p)^5 \\) — binom dağılımı buradan doğar.</li>
        </ul>
        <p><b>Neden önemli:</b> Kodlama teorisinde hata desenlerini saymak, rastgele erişimli ağlarda çakışma olasılığı, üretimde örnekleme planı —
        hepsi kombinatorik olasılıktır; ve sonraki dağılımların (binom, hipergeometrik) PMF'leri bu saymalardan türer.</p>`
    },
    {
      baslik: "3. Koşullu Olasılık, Toplam Olasılık ve Bayes",
      icerik: `
        <p>Bir bilgi edinildiğinde olasılıklar güncellenir. "B olduğu bilinirken A" olasılığı, örnek uzayın B'ye <b>daralması</b>dır:</p>
        \\[ P(A\\mid B)=\\frac{P(A\\cap B)}{P(B)},\\quad P(B)&gt;0 \\qquad\\Longrightarrow\\qquad P(A\\cap B)=P(A\\mid B)\\,P(B)=P(B\\mid A)\\,P(A) \\]
        <p>Zar çift geldi biliniyor (B), 4'ten büyük olma (A) olasılığı: \\( P(A\\cap B)/P(B)=(1/6)/(1/2)=1/3 \\) — 6 sonuçlu uzay 3 sonuca indi.
        \\( P(\\cdot\\mid B) \\) kendisi de bir olasılık ölçüsüdür: tüm aksiyomları sağlar.</p>
        <p><b>Zincir kuralı</b> ardışık deneylerde: \\( P(A_1\\cap A_2\\cap A_3)=P(A_1)P(A_2\\mid A_1)P(A_3\\mid A_1\\cap A_2) \\). Yerine koymadan
        çekilişler böyle hesaplanır (ağaç diyagramı = zincir kuralının çizimi).</p>
        <p><b>Toplam olasılık teoremi:</b> \\( B_1,\\dots,B_n \\) örnek uzayı ayrık parçalara bölüyorsa (bölüntü), A'nın olasılığı her parçadaki
        katkıların ağırlıklı toplamıdır:</p>
        \\[ P(A)=\\sum_iP(A\\mid B_i)\\,P(B_i) \\]
        <p>"Böl ve yönet": doğrudan bulunması zor bir olasılığı, koşullu bilinen parçalara ayırır. Örn. üç fabrikadan gelen parçaların
        kusur oranları farklıysa rastgele bir parçanın kusurlu olma olasılığı.</p>
        <p><b>Bayes teoremi</b> — koşulun yönünü tersine çevirir; <b>sonuçtan nedene</b> çıkarım:</p>
        \\[ P(B_i\\mid A)=\\frac{P(A\\mid B_i)\\,P(B_i)}{\\sum_jP(A\\mid B_j)\\,P(B_j)} \\]
        <p>\\( P(B_i) \\): <b>önsel</b> (prior), \\( P(A\\mid B_i) \\): <b>olabilirlik</b>, \\( P(B_i\\mid A) \\): <b>sonsal</b> (posterior).
        Payda toplam olasılıktır — yalnızca normalize eder.</p>
        <p><b>Sezgiye aykırı klasik:</b> %1 yaygınlıklı hastalık, %99 duyarlı test, %5 yanlış pozitif → pozitif çıkan kişinin hasta olma
        olasılığı yalnızca %17. Neden: sağlamlar o kadar kalabalık ki onların %5'i, hastaların %99'undan fazla pozitif üretir.
        <b>Taban oranını (prior) ihmal etmek</b> en yaygın olasılık hatasıdır.</p>
        <p><b>EE uygulamaları:</b> ikili kanalda \\( P(\\text{gönderilen}=1\\mid\\text{alınan}=0) \\) — <b>MAP alıcı</b> Bayes'in ta kendisidir;
        radar tespitinde yanlış alarm/kaçırma dengesi; makine öğrenmesinde naif Bayes sınıflandırıcı.</p>`
    },
    {
      baslik: "4. Bağımsızlık",
      icerik: `
        <p>İki olay <b>bağımsızdır</b> ⟺ birinin gerçekleşmesi diğerinin olasılığını değiştirmez:</p>
        \\[ P(A\\cap B)=P(A)\\,P(B)\\;\\Longleftrightarrow\\;P(A\\mid B)=P(A)\\;\\Longleftrightarrow\\;P(B\\mid A)=P(B) \\]
        <p>Çarpım tanımı tercih edilir çünkü \\( P(B)=0 \\) durumunda da çalışır ve simetriktir. Bağımsızlık bir <b>modelleme varsayımı</b>dır:
        "iki bileşen bağımsız arızalanır" fizikten gelir (ayrı güç kaynakları), matematikten değil. Ortak neden varsa (aynı besleme, aynı sıcaklık)
        varsayım çöker ve hesaplar iyimser çıkar.</p>
        <p><b>Bağımsızlık ≠ ayrıklık.</b> Ayrık olaylar (\\( A\\cap B=\\emptyset \\)) <b>güçlü biçimde bağımlıdır</b>: biri olduysa öteki kesinlikle olmadı.
        Bağımsız olaylar pozitif olasılıklıysa mutlaka kesişir. Bu ikisini karıştırmak sınavların en sık hatasıdır.</p>
        <p><b>Sonuçları:</b> A, B bağımsızsa \\( A,\\overline B \\); \\( \\overline A,B \\); \\( \\overline A,\\overline B \\) de bağımsızdır. Dolayısıyla
        "en az biri": \\( P(A\\cup B)=1-P(\\overline A)P(\\overline B) \\) — tümleyenle hesap, n olay için de çalışır:
        \\( P(\\text{en az bir başarı})=1-(1-p)^n \\).</p>
        <p><b>Üç ve daha çok olay — karşılıklı bağımsızlık</b> için ikişerli çarpımlar <b>yetmez</b>; tüm alt kümeler için çarpım kuralı gerekir:
        \\( P(A\\cap B\\cap C)=P(A)P(B)P(C) \\) dahil. Karşı örnek: iki adil para; A = 1. tura, B = 2. tura, C = ikisi aynı. İkişerli
        bağımsızlar (\\( P(A\\cap C)=1/4=P(A)P(C) \\)) ama \\( P(A\\cap B\\cap C)=1/4\\ne1/8 \\). C, A ve B'nin ikisi birden bilinince kesinleşir.</p>
        <p><b>Koşullu bağımsızlık:</b> \\( P(A\\cap B\\mid C)=P(A\\mid C)P(B\\mid C) \\). Bir koşul altında bağımsız olaylar koşulsuz bağımlı olabilir
        (ve tersi) — Bayes ağlarının ve gürültü modellemenin çekirdeği.</p>
        <p><b>Bağımsız denemeler</b> (Bernoulli denemeleri): aynı p ile tekrar, sonuçlar bağımsız. Bit iletimi, paket kaybı, madeni para —
        binom, geometrik ve Poisson dağılımlarının hepsi bu şemadan doğar. Güvenilirlikte: seri sistem \\( \\prod R_i \\) (hepsi çalışmalı),
        paralel sistem \\( 1-\\prod(1-R_i) \\) (biri yeter).</p>`
    },
    {
      baslik: "5. Ayrık Rastgele Değişkenler ve PMF",
      icerik: `
        <p><b>Rastgele değişken</b> (RD), her sonuca bir sayı atayan fonksiyondur: \\( X:S\\to\\mathbb R \\). "İki zarın toplamı", "10 bitte hata sayısı",
        "ilk arızaya kadar geçen gün". Sayısallaştırma, olaylar yerine aritmetikle (ortalama, varyans) çalışmayı sağlar; \\( \\{X=x\\} \\) bir olaydır.</p>
        <p><b>Olasılık kütle fonksiyonu (PMF)</b> ayrık X için tüm bilgiyi taşır:</p>
        \\[ p_X(x)=P(X=x), \\qquad p_X(x)\\ge0,\\quad\\sum_xp_X(x)=1 \\]
        <p>İki zarın toplamı: \\( p(2)=1/36,\\;p(7)=6/36,\\;p(12)=1/36 \\) — üçgen biçimli. Bir olayın olasılığı PMF'nin o küme üzerinde toplamıdır:
        \\( P(X\\in A)=\\sum_{x\\in A}p_X(x) \\).</p>
        <p><b>Kümülatif dağılım fonksiyonu (CDF)</b> \\( F_X(x)=P(X\\le x)=\\sum_{k\\le x}p_X(k) \\): ayrıkta <b>basamaklı</b>, sağdan sürekli, azalmayan,
        \\( F(-\\infty)=0,\\;F(\\infty)=1 \\). Sıçrama yüksekliği o noktadaki PMF'dir; \\( P(a&lt;X\\le b)=F(b)-F(a) \\) — eşitlik işaretlerine dikkat
        (ayrıkta \\( P(a\\le X\\le b) \\) farklıdır).</p>
        <p><b>Beklenen değer</b> — sonuçların olasılık ağırlıklı ortalaması, "uzun vadede ortalama kazanç":</p>
        \\[ E[X]=\\mu=\\sum_xx\\,p_X(x) \\]
        <p>Zarda 3.5: hiç gelmeyen bir değer — beklenen değer "en olası" değer değil, ağırlık merkezidir. Simetrik PMF'de simetri noktasıdır.</p>
        <p><b>Varyans</b> — ortalamadan sapmanın karesinin beklentisi; yayılım ölçüsü:</p>
        \\[ \\operatorname{Var}(X)=\\sigma^2=\\sum_x(x-\\mu)^2p_X(x)=E[X^2]-\\mu^2 \\]
        <p>İkinci biçim hesapta kullanılır. Standart sapma \\( \\sigma \\), X ile aynı birimdedir (varyans birimin karesi).</p>
        <p><b>Fonksiyonun beklentisi:</b> \\( E[g(X)]=\\sum g(x)p_X(x) \\) — Y=g(X)'in PMF'sini bulmaya gerek yok. Doğrusallık:
        \\( E[aX+b]=aE[X]+b \\), \\( \\operatorname{Var}(aX+b)=a^2\\operatorname{Var}(X) \\) (kaydırma yayılımı değiştirmez).</p>
        <p><b>Sık hata:</b> \\( E[X^2]\\ne(E[X])^2 \\) — aralarındaki fark tam olarak varyanstır; \\( E[1/X]\\ne1/E[X] \\) (Jensen).</p>`
    },
    {
      baslik: "6. Önemli Ayrık Dağılımlar",
      icerik: `
        <p>Her dağılım bir <b>deney hikâyesinden</b> doğar; hikâyeyi bilmek formülü ezberlemekten daha değerlidir çünkü sınav sorusu
        "hangi dağılım" kararıyla başlar.</p>
        <ul>
          <li><b>Bernoulli(p)</b> — tek deneme, başarı/başarısızlık. \\( P(X=1)=p \\). \\( E=p,\\;\\operatorname{Var}=p(1-p) \\) (p=½'de en belirsiz).
          Tüm diğerlerinin yapı taşı.</li>
          <li><b>Binom(n,p)</b> — n <b>bağımsız</b> Bernoulli denemesinde başarı <b>sayısı</b>:
          \\( P(X=k)=\\dbinom nkp^k(1-p)^{n-k} \\), \\( E=np,\\;\\operatorname{Var}=np(1-p) \\). Kanıt: belirli bir k-başarı dizisi \\( p^k(1-p)^{n-k} \\),
          böyle \\( \\binom nk \\) dizi var. X, n Bernoulli'nin toplamıdır → ortalama ve varyans toplanır. Örn. 100 bitte hata sayısı.</li>
          <li><b>Geometrik(p)</b> — <b>ilk başarıya kadar</b> deneme sayısı: \\( P(X=k)=(1-p)^{k-1}p,\\;k\\ge1 \\); \\( E=1/p,\\;\\operatorname{Var}=(1-p)/p^2 \\).
          <b>Belleksiz:</b> \\( P(X&gt;m+n\\mid X&gt;m)=P(X&gt;n) \\) — geçmiş başarısızlıklar geleceği etkilemez ("kumarbaz yanılgısı" tam bunu ihlal eder).
          Örn. yeniden iletim sayısı, ilk çakışmaya kadar slot.</li>
          <li><b>Negatif binom(r,p)</b> — r. başarıya kadar deneme sayısı; geometriğin genellemesi, \\( E=r/p \\).</li>
          <li><b>Poisson(λ)</b> — sabit ortalama hızla gelen <b>seyrek olayların sayısı</b> (belirli sürede/alanda):
          \\( P(X=k)=\\dfrac{\\lambda^ke^{-\\lambda}}{k!} \\), \\( E=\\operatorname{Var}=\\lambda \\). Binom(n,p)'nin \\( n\\to\\infty,\\;p\\to0,\\;np=\\lambda \\)
          limitidir (n≥20, p≤0.05 için iyi yaklaşım). Örn. dakikadaki paket sayısı, foton sayımı, yüzeydeki kusur sayısı, radyoaktif bozunum.
          Bağımsız Poisson'ların toplamı Poisson (\\( \\lambda_1+\\lambda_2 \\)); Poisson akışının rastgele seyreltilmişi de Poisson.</li>
          <li><b>Hipergeometrik(N,K,n)</b> — N nesneden (K'sı özel) <b>yerine koymadan</b> n çekilirken özel nesne sayısı:
          \\( P(X=k)=\\dfrac{\\binom Kk\\binom{N-K}{n-k}}{\\binom Nn} \\), \\( E=nK/N \\). Binomdan farkı: denemeler bağımlıdır (torba küçülür);
          \\( N\\gg n \\) ise binoma yaklaşır. Kalite kontrol örneklemesi, piyango.</li>
          <li><b>Ayrık üniform</b> — \\( \\{a,\\dots,b\\} \\) eş olası; \\( E=(a+b)/2 \\), \\( \\operatorname{Var}=\\frac{(b-a+1)^2-1}{12} \\).</li>
        </ul>
        <p><b>Karar tablosu:</b> sabit sayıda bağımsız deneme + <i>kaç başarı</i> → Binom; <i>ilk başarı ne zaman</i> → Geometrik;
        sürede/alanda <i>kaç olay</i> → Poisson; küçük torbadan yerine koymadan → Hipergeometrik.</p>
        <p><b>Sayısal ipucu:</b> Binom hesabında \\( P(X\\ge1)=1-(1-p)^n \\); Poisson'da ardışık terimler \\( p(k+1)=p(k)\\cdot\\lambda/(k+1) \\)
        ile hızlı üretilir; en olası değer (mod) \\( \\lfloor\\lambda\\rfloor \\).</p>`
    },
    {
      baslik: "7. Sürekli Rastgele Değişkenler: PDF ve CDF",
      icerik: `
        <p>Ölçülen gerilim, bekleme süresi, gürültü genliği — sürekli değerler alan değişkenlerde tek bir değerin olasılığı <b>sıfırdır</b>;
        anlamlı olan aralıkların olasılığıdır. Bunu bir <b>yoğunluk</b> tanımlar:</p>
        \\[ P(a\\le X\\le b)=\\int_a^bf_X(x)\\,dx, \\qquad f_X(x)\\ge0,\\quad\\int_{-\\infty}^{\\infty}f_X(x)\\,dx=1 \\]
        <p>\\( f_X(x) \\) bir olasılık <b>değildir</b> (1'den büyük olabilir, birimi 1/x); \\( f_X(x)\\,dx \\), X'in \\( [x,x+dx] \\) küçük aralığına düşme
        olasılığıdır — kütle yoğunluğu ile kütle ilişkisi gibi. Grafikte olasılık = eğri altındaki <b>alan</b>. Uç noktaların dahil olup olmaması
        fark etmez: \\( P(a\\le X\\le b)=P(a&lt;X&lt;b) \\).</p>
        <p><b>CDF</b> ayrık ve sürekli için ortak dildir: \\( F_X(x)=P(X\\le x) \\).</p>
        \\[ F_X(x)=\\int_{-\\infty}^xf_X(t)\\,dt, \\qquad f_X(x)=\\frac{dF_X(x)}{dx}, \\qquad P(a&lt;X\\le b)=F_X(b)-F_X(a) \\]
        <p>Sürekli X'te CDF <b>süreklidir</b> (sıçrama yok), azalmayan, \\( F(-\\infty)=0,\\;F(\\infty)=1 \\). Karışık dağılımlarda (sürekli + noktasal
        kütle, örn. kırpılmış sinyal) CDF hem sürekli parça hem sıçrama içerir — böyle durumlarda CDF ile çalışılır.</p>
        <p><b>Çözüm şablonu:</b> (1) PDF'te bilinmeyen sabiti \\( \\int f=1 \\)'den bul; (2) istenen olasılığı integral olarak yaz — <b>PDF'in
        sıfır olmadığı bölgeye</b> sınırları kırp; (3) CDF istenirse parçalı fonksiyon olarak yaz (x'in her bölgesi için ayrı ifade; en soldaki 0,
        en sağdaki 1). \\( f(x)=cx^2,\\;0\\le x\\le1 \\) için \\( c=3 \\), \\( F(x)=x^3 \\) o aralıkta.</p>
        <p><b>Yüzdelikler ve medyan:</b> \\( F(x_p)=p \\) denklemi çözülür; medyan \\( F(m)=0.5 \\). Asimetrik dağılımlarda medyan ≠ ortalama
        (üstelde medyan \\( \\ln2/\\lambda&lt;1/\\lambda \\)).</p>
        <p><b>Ters CDF yöntemi (simülasyon):</b> \\( U\\sim U(0,1) \\) ise \\( X=F^{-1}(U) \\) istenen dağılıma sahiptir — bilgisayarda rastgele
        sayı üretiminin temeli; üstel için \\( X=-\\ln(1-U)/\\lambda \\).</p>
        <p><b>Sık hata:</b> PDF değerini olasılık sanmak; integral sınırlarını dağılımın desteği dışına taşırmak; CDF'i parçalı yazmayı unutmak.</p>`
    },
    {
      baslik: "8. Önemli Sürekli Dağılımlar",
      icerik: `
        <p>Sürekli dağılımlar da hikâyeleriyle tanınır; EE'de her biri belli bir fiziksel olguya karşılık gelir.</p>
        <ul>
          <li><b>Üniform U(a,b)</b> — aralıkta "hiçbir tercih yok": \\( f=\\frac{1}{b-a} \\), \\( E=\\frac{a+b}2 \\), \\( \\operatorname{Var}=\\frac{(b-a)^2}{12} \\).
          <b>Kuantalama hatası</b> (adım Δ → \\( \\Delta^2/12 \\) gürültü gücü, 6.02 dB/bit kuralı), rastgele faz \\( U(0,2\\pi) \\).</li>
          <li><b>Üstel(λ)</b> — sabit oranlı olaylar arasındaki <b>bekleme süresi</b> (Poisson sürecinin sürekli kardeşi):
          \\( f=\\lambda e^{-\\lambda x},\\;x\\ge0 \\); \\( F=1-e^{-\\lambda x} \\); \\( E=1/\\lambda,\\;\\operatorname{Var}=1/\\lambda^2 \\).
          <b>Belleksiz</b>: \\( P(X&gt;s+t\\mid X&gt;s)=P(X&gt;t) \\) — "yaşlanmayan" bileşen; sabit arıza oranlı elektronik ömür modeli
          (MTBF = 1/λ), paketler arası süre, kuyruk servis süresi.</li>
          <li><b>Gamma(k,λ) / Erlang</b> — k tane bağımsız üstelin toplamı (k. olaya kadar geçen süre): \\( f=\\frac{\\lambda^kx^{k-1}e^{-\\lambda x}}{(k-1)!} \\),
          \\( E=k/\\lambda,\\;\\operatorname{Var}=k/\\lambda^2 \\). Kuyruk teorisi, çoklu yedekli sistem ömrü. k=1 üstel; \\( \\chi^2 \\) de bir Gamma'dır.</li>
          <li><b>Gauss (Normal) \\( N(\\mu,\\sigma^2) \\)</b> — çok sayıda küçük bağımsız etkinin toplamı (MLT):
          \\[ f_X(x)=\\frac{1}{\\sigma\\sqrt{2\\pi}}\\exp\\!\\Big(-\\frac{(x-\\mu)^2}{2\\sigma^2}\\Big) \\]
          <b>Termal gürültünün</b>, ölçüm hatasının, kanal gürültüsünün (AWGN) modelidir. CDF'nin kapalı biçimi yoktur;
          <b>standartlaştırma</b> \\( Z=(X-\\mu)/\\sigma\\sim N(0,1) \\) ile \\( \\Phi(z) \\) tablosu (ya da \\( Q(z)=1-\\Phi(z) \\) — haberleşmede bit hata
          olasılığı \\( Q(\\sqrt{2E_b/N_0}) \\)). Simetri: \\( \\Phi(-z)=1-\\Phi(z) \\). Kural: \\( \\pm1\\sigma \\) %68, \\( \\pm2\\sigma \\) %95, \\( \\pm3\\sigma \\) %99.7.
          Doğrusal dönüşümü Gauss'tur; bağımsız Gauss'ların toplamı Gauss'tur.</li>
          <li><b>Rayleigh(σ)</b> — bağımsız, sıfır ortalamalı, eşit varyanslı iki Gauss'un (I ve Q bileşenleri) <b>genliği</b> \\( R=\\sqrt{X^2+Y^2} \\):
          \\( f=\\frac{r}{\\sigma^2}e^{-r^2/2\\sigma^2},\\;r\\ge0 \\); \\( E=\\sigma\\sqrt{\\pi/2} \\). Dar bantlı gürültünün zarfı, <b>çok yollu sönümlemeli
          kanal</b> genliği (Rayleigh fading). Fazı ise \\( U(0,2\\pi) \\) ve genlikten bağımsızdır.</li>
          <li><b>Laplace, Cauchy, lognormal</b> — sırasıyla ağır kuyruklu gürültü, ortalaması bile olmayan dağılım (uyarı örneği), çarpımsal etkilerin sonucu (gölgeleme).</li>
        </ul>
        <p><b>Karar tablosu:</b> aralıkta eşit → Üniform; bekleme süresi, sabit oran → Üstel; k olay için süre → Erlang; toplam etki/gürültü → Gauss;
        iki Gauss'un genliği → Rayleigh.</p>`
    },
    {
      baslik: "9. Beklenen Değer, Varyans, Momentler ve Eşitsizlikler",
      icerik: `
        <p>Sürekli değişkende toplam integrale döner; tanımlar ve tüm özellikler ayrık halle özdeştir:</p>
        \\[ E[X]=\\int_{-\\infty}^{\\infty}xf_X(x)\\,dx, \\qquad E[g(X)]=\\int g(x)f_X(x)\\,dx, \\qquad \\operatorname{Var}(X)=E[(X-\\mu)^2]=E[X^2]-\\mu^2 \\]
        <p><b>Doğrusallık</b> — bağımsızlık gerektirmez ve dersin en çok kullanılan aracıdır: \\( E[aX+bY+c]=aE[X]+bE[Y]+c \\). Karmaşık bir
        değişkeni basit parçaların toplamı olarak yazmak (gösterge değişkenler!) beklentiyi doğrudan verir: binomun ortalaması \\( np \\) böyle
        tek satırda çıkar. Varyans için ise <b>bağımsızlık (ya da ilişkisizlik) gerekir</b>: \\( \\operatorname{Var}(X+Y)=\\operatorname{Var}X+\\operatorname{Var}Y \\)
        yalnızca \\( \\operatorname{Cov}=0 \\) ise.</p>
        <p><b>Ölçek ve kaydırma:</b> \\( \\operatorname{Var}(aX+b)=a^2\\operatorname{Var}(X) \\), \\( \\sigma_{aX+b}=|a|\\sigma_X \\). Birim değişimi (mV→V) varyansı \\( 10^{-6} \\) ile çarpar.</p>
        <p><b>Momentler:</b> k. moment \\( E[X^k] \\), k. merkezi moment \\( E[(X-\\mu)^k] \\). 3. merkezi moment <b>çarpıklık</b> (asimetri),
        4. <b>basıklık</b> (kuyruk ağırlığı; Gauss'ta \\( 3\\sigma^4 \\)). Gürültü analizinde 2. moment = <b>ortalama güç</b>: \\( E[X^2]=\\sigma^2+\\mu^2 \\) —
        AC gücü + DC gücü. Sıfır ortalamalı gürültüde varyans = güç, standart sapma = RMS.</p>
        <p><b>Dağılımdan bağımsız sınırlar</b> — yalnızca ortalama/varyans bilinirken kuyruk olasılığına üst sınır:</p>
        \\[ \\text{Markov: }P(X\\ge a)\\le\\frac{E[X]}{a}\\;(X\\ge0), \\qquad
           \\text{Chebyshev: }P(|X-\\mu|\\ge k\\sigma)\\le\\frac1{k^2} \\]
        <p>Chebyshev, Markov'un \\( (X-\\mu)^2 \\)'ye uygulanmasıdır. Gevşektir (Gauss'ta \\( 2\\sigma \\) için gerçek 0.046, sınır 0.25) ama
        <b>her dağılım için</b> geçerlidir; Büyük Sayılar Yasası'nın kanıtı ondan çıkar. Daha sıkı sınırlar (Chernoff) MGF'den gelir.</p>
        <p><b>Jensen:</b> g dışbükeyse \\( E[g(X)]\\ge g(E[X]) \\) — \\( E[X^2]\\ge(E[X])^2 \\) bunun özel hali; \\( E[1/X]\\ge1/E[X] \\).</p>
        <p><b>Koşullu beklenti</b> (ön bakış): \\( E[X\\mid A]=\\int xf_{X\\mid A}(x)dx \\); toplam beklenti kuralı
        \\( E[X]=\\sum_iE[X\\mid B_i]P(B_i) \\) — toplam olasılık teoreminin beklenti versiyonu; karmaşık beklentileri parçalara ayırır.</p>
        <p><b>Sık hata:</b> varyansları bağımlı değişkenler için toplamak; \\( \\sigma \\)'ları toplamak (varyanslar toplanır, sapmalar değil);
        \\( E[XY]=E[X]E[Y] \\) demek (yalnızca ilişkisizse).</p>`
    },
    {
      baslik: "10. Rastgele Değişkenin Fonksiyonları",
      icerik: `
        <p>Bir RD bir sistemden geçerse çıkış yeni bir RD'dir: \\( Y=g(X) \\). Gürültünün kare alıcıdan, doğrultucudan, kuantalayıcıdan geçişi,
        dB'ye çevirme (\\( 10\\log X \\)), güç hesabı (\\( X^2/R \\)) hepsi bu türdendir. İki soru: \\( E[Y] \\) nedir, \\( f_Y \\) nedir?</p>
        <p><b>Beklenti — LOTUS</b> ("bilinçsiz istatistikçi yasası"): Y'nin dağılımını bulmaya gerek yok:</p>
        \\[ E[g(X)]=\\int g(x)f_X(x)\\,dx \\qquad(\\text{ayrıkta }\\sum g(x)p_X(x)) \\]
        <p><b>Dağılım — CDF yöntemi</b> (her zaman çalışır, önerilen yol): \\( F_Y(y)=P(Y\\le y)=P(g(X)\\le y) \\) olayını X cinsinden yaz, çöz, türev al.</p>
        <ul>
          <li>\\( Y=X^2 \\): \\( F_Y(y)=P(-\\sqrt y\\le X\\le\\sqrt y)=F_X(\\sqrt y)-F_X(-\\sqrt y) \\) ⟹
          \\( f_Y(y)=\\dfrac{f_X(\\sqrt y)+f_X(-\\sqrt y)}{2\\sqrt y},\\;y\\ge0 \\). \\( X\\sim N(0,1) \\) ise Y ki-kare(1): sıfır yakınında ıraksayan yoğunluk.</li>
          <li>\\( Y=aX+b \\): \\( f_Y(y)=\\dfrac{1}{|a|}f_X\\!\\big(\\tfrac{y-b}{a}\\big) \\) — ölçekleme yoğunluğu \\( 1/|a| \\) ile sıkıştırır/genişletir (alan 1 kalmalı).</li>
          <li>\\( Y=e^X \\), X Gauss → lognormal; \\( Y=-\\ln(1-U)/\\lambda \\), U üniform → üstel (simülasyon).</li>
        </ul>
        <p><b>Dönüşüm formülü</b> (g monoton ve türevlenebilirse — CDF yönteminin genel sonucu):</p>
        \\[ f_Y(y)=f_X\\big(g^{-1}(y)\\big)\\left|\\frac{dx}{dy}\\right|=\\frac{f_X(x)}{|g'(x)|}\\Big|_{x=g^{-1}(y)} \\]
        <p>g monoton değilse (\\( X^2 \\), \\( \\sin X \\)) her ters kökün katkısı toplanır: \\( f_Y(y)=\\sum_i\\dfrac{f_X(x_i)}{|g'(x_i)|} \\). Sezgi: g'nin dik
        olduğu yerde x'in geniş bir aralığı y'nin dar aralığına sıkışır → yoğunluk düşer.</p>
        <p><b>Karışık çıktılar:</b> kırpıcı \\( Y=\\min(X,c) \\) → \\( y=c \\)'de noktasal kütle \\( P(X\\ge c) \\) + sürekli parça; kuantalayıcı → tamamen ayrık Y.
        Böyle durumlarda PDF yerine CDF ile çalışılır (sıçramalar dahil).</p>
        <p><b>Sık hatalar:</b> \\( E[g(X)]=g(E[X]) \\) demek (yalnızca g doğrusalsa); dönüşüm formülünde Jacobian \\( |dx/dy| \\)'yi unutmak;
        monoton olmayan g'de yalnızca bir kökü saymak; Y'nin desteğini (hangi y'lerde \\( f_Y\\ne0 \\)) yazmamak.</p>`
    },
    {
      baslik: "11. Birleşik, Marjinal ve Koşullu Dağılımlar",
      icerik: `
        <p>İki değişken birlikte gözlemleniyorsa (aynı anda ölçülen I ve Q, ardışık iki örnek, giriş ve çıkış gürültüsü) tek tek dağılımları
        yetmez; <b>birlikte nasıl değiştikleri</b> gerekir. <b>Birleşik PDF</b> \\( f_{X,Y}(x,y) \\): düzlemde yoğunluk, toplam hacmi 1:</p>
        \\[ P\\big((X,Y)\\in A\\big)=\\iint_Af_{X,Y}(x,y)\\,dx\\,dy, \\qquad F_{X,Y}(x,y)=P(X\\le x,Y\\le y) \\]
        <p>Ayrıkta birleşik PMF \\( p_{X,Y}(x,y) \\) bir tablodur; satır/sütun toplamları marjinalleri verir — adı da buradan gelir ("kenar" toplamları).</p>
        <p><b>Marjinal:</b> diğer değişken "integre edilip atılır":</p>
        \\[ f_X(x)=\\int_{-\\infty}^{\\infty}f_{X,Y}(x,y)\\,dy, \\qquad f_Y(y)=\\int f_{X,Y}(x,y)\\,dx \\]
        <p>Birleşikten marjinaller tek yönlü çıkar; marjinallerden birleşik <b>genelde çıkmaz</b> (aynı marjinallere sahip sonsuz farklı birleşik vardır) —
        bağımlılık bilgisi marjinallerde yoktur.</p>
        <p><b>Koşullu:</b> X=x bilinince Y'nin dağılımı, birleşik yoğunluğun o dikey kesitinin normalize edilmişidir:</p>
        \\[ f_{Y\\mid X}(y\\mid x)=\\frac{f_{X,Y}(x,y)}{f_X(x)}, \\qquad f_{X,Y}=f_{Y\\mid X}f_X=f_{X\\mid Y}f_Y \\]
        <p>Sürekli Bayes: \\( f_{X\\mid Y}(x\\mid y)=\\dfrac{f_{Y\\mid X}(y\\mid x)f_X(x)}{f_Y(y)} \\) — gürültülü gözlemden kaynağı çıkarmanın temeli
        (kestirim, MAP alıcı).</p>
        <p><b>Bağımsızlık:</b> \\( f_{X,Y}(x,y)=f_X(x)f_Y(y) \\) <b>her (x,y) için</b>; eşdeğer olarak \\( f_{Y\\mid X}=f_Y \\). Pratik test: birleşik PDF x'in
        fonksiyonu × y'nin fonksiyonu olarak ayrılıyor <b>ve destek dikdörtgen</b> mi? Üçgen bölgede (\\( 0&lt;x&lt;y&lt;1 \\)) tanımlı sabit yoğunluk bile
        bağımlıdır — sınır birini diğerine bağlar.</p>
        <p><b>Çözüm şablonu (integral sınırları en kritik adım):</b> destek bölgesini <b>çiz</b>; marjinal için o x'te y'nin aralığını bölgeden oku;
        olasılık için bölgeyi istenen kümeyle kesiştir. Sınırlar sabit değil, diğer değişkenin fonksiyonu olabilir.</p>
        <p><b>Beklentiler:</b> \\( E[g(X,Y)]=\\iint g\\,f_{X,Y}\\,dx\\,dy \\) (iki boyutlu LOTUS); \\( E[X+Y]=E[X]+E[Y] \\) her zaman; \\( E[XY]=E[X]E[Y] \\)
        bağımsızsa. <b>İki fonksiyon dönüşümü</b> (Z=g(X,Y), W=h(X,Y)) için Jacobian: \\( f_{Z,W}=f_{X,Y}\\,|J| \\), \\( J=\\partial(x,y)/\\partial(z,w) \\) —
        kutupsal dönüşüm (\\( R,\\Theta \\)) ile Rayleigh dağılımı buradan türer.</p>`
    },
    {
      baslik: "12. Kovaryans, Korelasyon ve İki Değişkenli Gauss",
      icerik: `
        <p><b>Kovaryans</b>, iki değişkenin ortalamalarından aynı yönde mi sapma eğiliminde olduğunu ölçer:</p>
        \\[ \\operatorname{Cov}(X,Y)=E\\big[(X-\\mu_X)(Y-\\mu_Y)\\big]=E[XY]-E[X]E[Y] \\]
        <p>Pozitif: birlikte artarlar; negatif: biri artarken diğeri azalır; sıfır: <b>ilişkisiz</b>. Birimi X·Y'nin birimidir, bu yüzden büyüklüğü
        yorumlanamaz — normalize edilir:</p>
        \\[ \\rho_{X,Y}=\\frac{\\operatorname{Cov}(X,Y)}{\\sigma_X\\sigma_Y}\\in[-1,1] \\]
        <p>\\( |\\rho|=1 \\) ⟺ \\( Y=aX+b \\) tam doğrusal ilişki (Cauchy–Schwarz). ρ <b>yalnızca doğrusal</b> bağımlılığı ölçer: \\( X\\sim U(-1,1) \\), \\( Y=X^2 \\)
        için \\( \\rho=0 \\) ama Y tamamen X'e bağlıdır. Dolayısıyla <b>bağımsız ⇒ ilişkisiz</b>, tersi genelde yanlış. Tek istisna: birleşik Gauss'ta
        ilişkisizlik bağımsızlığa eşdeğerdir.</p>
        <p><b>Toplamın varyansı</b> — kovaryans burada devreye girer:</p>
        \\[ \\operatorname{Var}(aX+bY)=a^2\\operatorname{Var}X+b^2\\operatorname{Var}Y+2ab\\operatorname{Cov}(X,Y) \\]
        <p>Pozitif ilişkili gürültüler toplanınca güç \\( 2\\sigma^2 \\)'den fazla, negatif ilişkililerde az olur (fark alıcı devrelerde ortak mod
        gürültüsünün iptali). n değişken için \\( \\operatorname{Var}(\\sum X_i)=\\sum\\operatorname{Var}X_i+\\sum_{i\\ne j}\\operatorname{Cov}(X_i,X_j) \\);
        <b>kovaryans matrisi</b> \\( \\mathbf C_{ij}=\\operatorname{Cov}(X_i,X_j) \\) simetrik ve pozitif yarı tanımlıdır.</p>
        <p><b>Özellikler:</b> \\( \\operatorname{Cov}(X,X)=\\operatorname{Var}X \\); \\( \\operatorname{Cov}(aX+b,cY+d)=ac\\operatorname{Cov}(X,Y) \\); ρ ölçek ve kaymadan bağımsızdır.
        Örnek istatistiklerden hesaplanan ρ, ölçüm verisinde doğrusal bağıntının gücüdür (regresyonun \\( R^2 \\)'si \\( \\rho^2 \\)).</p>
        <p><b>İki değişkenli (bivariate) Gauss</b> — haberleşme ve sinyal işlemenin standart modeli:</p>
        \\[ f_{X,Y}(x,y)=\\frac{1}{2\\pi\\sigma_X\\sigma_Y\\sqrt{1-\\rho^2}}
        \\exp\\!\\Big[-\\frac{1}{2(1-\\rho^2)}\\Big(\\frac{(x-\\mu_X)^2}{\\sigma_X^2}-\\frac{2\\rho(x-\\mu_X)(y-\\mu_Y)}{\\sigma_X\\sigma_Y}+\\frac{(y-\\mu_Y)^2}{\\sigma_Y^2}\\Big)\\Big] \\]
        <p>Beş parametreyle (\\( \\mu_X,\\mu_Y,\\sigma_X,\\sigma_Y,\\rho \\)) tamamen belirlenir; eş yoğunluk eğrileri elipstir (ρ=0'da eksenlere paralel, ρ→±1'de
        bir doğruya yassılır). Özellikleri: marjinaller Gauss; <b>koşullu dağılım Gauss</b> —
        \\( Y\\mid X=x\\sim N\\big(\\mu_Y+\\rho\\frac{\\sigma_Y}{\\sigma_X}(x-\\mu_X),\\;\\sigma_Y^2(1-\\rho^2)\\big) \\): koşullu ortalama x'te doğrusal, koşullu varyans
        \\( 1-\\rho^2 \\) kadar küçülür (X'i bilmek Y'deki belirsizliği azaltır); doğrusal kombinasyonlar Gauss; ρ=0 ⇒ bağımsız. Vektör biçimi
        \\( N(\\boldsymbol\\mu,\\mathbf C) \\) çok boyutlu sinyallerin (anten dizisi, çok kanallı ölçüm) modelidir.</p>`
    },
    {
      baslik: "13. Koşullu Beklenti ve MMSE Tahmin",
      icerik: `
        <p>Y'yi doğrudan gözleyemiyoruz ama onunla ilişkili X'i gözlüyoruz (gürültülü ölçüm, kanal çıkışı). Y'nin "en iyi tahmini" nedir?
        Cevap koşullu beklentiden geçer.</p>
        <p><b>Koşullu beklenti</b> \\( E[Y\\mid X=x]=\\int y\\,f_{Y\\mid X}(y\\mid x)\\,dy \\) — x'in bir <b>fonksiyonudur</b>, \\( g(x) \\). X'i rastgele bırakırsak
        \\( E[Y\\mid X]=g(X) \\) kendisi bir rastgele değişkendir.</p>
        <p><b>Toplam beklenti (yinelenen beklenti) kuralı:</b></p>
        \\[ E[Y]=E\\big[E[Y\\mid X]\\big], \\qquad \\operatorname{Var}(Y)=E[\\operatorname{Var}(Y\\mid X)]+\\operatorname{Var}(E[Y\\mid X]) \\]
        <p>İlki karmaşık beklentileri "önce X'i sabitle, sonra ortalamasını al" diye parçalar: rastgele sayıda (N) paketin toplam boyu
        \\( E[\\sum_{i=1}^NL_i]=E[N]E[L] \\). İkincisi (toplam varyans) belirsizliği "X'in açıkladığı" ve "açıklayamadığı" parçalara böler.</p>
        <p><b>MMSE tahmin</b> — ortalama kare hatayı \\( E[(Y-\\hat Y)^2] \\) en küçük yapan tahminci:</p>
        <ul>
          <li>Gözlem yoksa: \\( \\hat Y=E[Y] \\), hata \\( =\\operatorname{Var}Y \\).</li>
          <li>X gözlendiyse (herhangi bir fonksiyon serbest): <b>\\( \\hat Y=E[Y\\mid X] \\)</b>, hata \\( =E[\\operatorname{Var}(Y\\mid X)] \\). Kanıt: her x için
          \\( E[(Y-c)^2\\mid X=x] \\)'i minimize eden c koşullu ortalamadır. Hata tahminle ilişkisizdir (dikgenlik).</li>
          <li><b>Doğrusal MMSE</b> (\\( \\hat Y=aX+b \\) ile sınırlı — hesaplanabilir, yalnızca 2. momentler gerekir):
          \\[ \\hat Y_L=\\mu_Y+\\rho\\frac{\\sigma_Y}{\\sigma_X}(X-\\mu_X), \\qquad e_{min}=\\sigma_Y^2(1-\\rho^2) \\]
          Türetme: hatayı a, b'ye göre türevle; <b>dikgenlik ilkesi</b> \\( E[(Y-\\hat Y)X]=0 \\), \\( E[Y-\\hat Y]=0 \\). ρ'nun anlamı burada netleşir:
          \\( \\rho^2 \\), X'in Y'deki varyansın ne kadarını "açıkladığı"dır.</li>
        </ul>
        <p><b>Gauss'ta özel:</b> birleşik Gauss (X,Y) için \\( E[Y\\mid X] \\) zaten doğrusaldır → doğrusal MMSE = genel MMSE. Bu yüzden Kalman filtresi,
        Wiener filtresi ve kanal kestirimi doğrusal işlemlerle optimaldir.</p>
        <p><b>Örnek — gürültülü ölçüm:</b> \\( X=Y+N \\), Y ve N bağımsız, sıfır ortalamalı, varyansları \\( \\sigma_Y^2,\\sigma_N^2 \\).
        \\( \\operatorname{Cov}(X,Y)=\\sigma_Y^2 \\), \\( \\sigma_X^2=\\sigma_Y^2+\\sigma_N^2 \\) ⟹
        \\( \\hat Y=\\dfrac{\\sigma_Y^2}{\\sigma_Y^2+\\sigma_N^2}X \\), hata \\( \\dfrac{\\sigma_Y^2\\sigma_N^2}{\\sigma_Y^2+\\sigma_N^2} \\). Gürültü büyükse tahmin
        ölçümü "sıfıra doğru çeker" (Wiener kazancı); SNR yüksekse \\( \\hat Y\\approx X \\).</p>
        <p><b>Neden önemli:</b> Kestirim teorisi, uyarlamalı filtreler, regresyon ve makine öğrenmesinin kayıp fonksiyonu tam bu problemdir.</p>`
    },
    {
      baslik: "14. Rastgele Değişkenlerin Toplamı ve Konvolüsyon",
      icerik: `
        <p>Toplam, mühendislikteki en yaygın işlemdir: sinyal + gürültü, n ölçümün ortalaması, ardışık gecikmelerin toplamı. Bağımsız X ve Y için
        \\( Z=X+Y \\)'nin dağılımı:</p>
        \\[ f_Z(z)=\\int_{-\\infty}^{\\infty}f_X(x)\\,f_Y(z-x)\\,dx=(f_X*f_Y)(z) \\qquad(\\text{ayrıkta }p_Z(z)=\\sum_xp_X(x)p_Y(z-x)) \\]
        <p><b>Neden konvolüsyon:</b> Z=z olması için X=x ve Y=z−x olmalı; bağımsızlıkla olasılıklar çarpılır, tüm x'ler üzerinden toplanır.
        EE3061'deki konvolüsyonla aynı işlemdir — bu yüzden "iki üniformun toplamı üçgen" sonucu iki dikdörtgen darbenin konvolüsyonuyla özdeştir.
        Çözümde yine <b>destekleri çiz, sınırları oradan oku</b>; bağımsız değilse \\( f_Z(z)=\\int f_{X,Y}(x,z-x)dx \\).</p>
        <p><b>Momentler</b> (dağılımı bulmadan):</p>
        \\[ E[X+Y]=E[X]+E[Y]\\;(\\text{her zaman}), \\qquad \\operatorname{Var}(X+Y)=\\operatorname{Var}X+\\operatorname{Var}Y\\;(\\text{bağımsız/ilişkisizse}) \\]
        <p>n bağımsız aynı dağılımlı (i.i.d.) değişkenin toplamı: ortalama \\( n\\mu \\), varyans \\( n\\sigma^2 \\), standart sapma \\( \\sqrt n\\sigma \\).
        Ortalaması \\( \\overline X_n \\): ortalama μ, varyans \\( \\sigma^2/n \\) — <b>ölçümü n kez tekrarlayıp ortalamak gürültü gücünü n kat düşürür</b>
        (SNR \\( \\sqrt n \\) kat iyileşir; osiloskop "averaging" modu).</p>
        <p><b>Üreme (kapalılık) özellikleri</b> — bazı aileler toplama altında kapalıdır (MGF ile kolayca kanıtlanır):</p>
        <ul>
          <li>Bağımsız Gauss'lar: \\( N(\\mu_1,\\sigma_1^2)+N(\\mu_2,\\sigma_2^2)=N(\\mu_1+\\mu_2,\\;\\sigma_1^2+\\sigma_2^2) \\). Doğrusal kombinasyonlar da Gauss.</li>
          <li>Bağımsız Poisson'lar: \\( \\lambda_1+\\lambda_2 \\) parametreli Poisson (iki bağımsız trafik akışının birleşimi).</li>
          <li>Bağımsız Binom(n₁,p)+Binom(n₂,p) = Binom(n₁+n₂,p) — aynı p şart.</li>
          <li>k bağımsız Üstel(λ) → Erlang(k,λ); k bağımsız \\( N(0,1)^2 \\) → ki-kare(k); iki bağımsız \\( N(0,\\sigma^2) \\)'nin karekök-kare toplamı → Rayleigh.</li>
          <li><b>Kapalı olmayanlar:</b> iki üniform → üçgen (üniform değil); iki üstel → Erlang(2) (üstel değil).</li>
        </ul>
        <p><b>Rastgele sayıda toplam</b> \\( S=\\sum_{i=1}^NX_i \\) (N bağımsız): \\( E[S]=E[N]E[X] \\), \\( \\operatorname{Var}S=E[N]\\operatorname{Var}X+\\operatorname{Var}N\\,(E[X])^2 \\) — toplam varyans kuralından.</p>
        <p><b>Fark ve çarpım:</b> \\( X-Y \\) için \\( \\operatorname{Var}=\\operatorname{Var}X+\\operatorname{Var}Y \\) (bağımsızsa; işaret <b>eksi olmaz</b>);
        bağımsız çarpımda \\( E[XY]=E[X]E[Y] \\), \\( \\operatorname{Var}(XY)=E[X^2]E[Y^2]-(E[X]E[Y])^2 \\).</p>`
    },
    {
      baslik: "15. Moment Üreten ve Karakteristik Fonksiyonlar",
      icerik: `
        <p>Konvolüsyon zahmetlidir; Fourier'in konvolüsyonu çarpmaya çevirmesi gibi, MGF de toplamları çarpmaya çevirir.</p>
        \\[ M_X(t)=E\\big[e^{tX}\\big]=\\int e^{tx}f_X(x)\\,dx \\qquad(\\text{ayrıkta }\\sum e^{tx}p_X(x)) \\]
        <p><b>Momentleri üretir:</b> \\( e^{tX}=1+tX+\\frac{t^2X^2}{2!}+\\dots \\) açılımının beklentisi alınırsa
        \\( M_X(t)=1+tE[X]+\\frac{t^2}{2!}E[X^2]+\\dots \\); dolayısıyla</p>
        \\[ E[X^n]=\\frac{d^nM_X}{dt^n}\\Big|_{t=0}, \\qquad E[X]=M'(0),\\quad \\operatorname{Var}X=M''(0)-M'(0)^2 \\]
        <p><b>Temel MGF'ler:</b> Bernoulli \\( 1-p+pe^t \\); Binom \\( (1-p+pe^t)^n \\); Poisson \\( e^{\\lambda(e^t-1)} \\); Geometrik \\( \\frac{pe^t}{1-(1-p)e^t} \\);
        Üniform(a,b) \\( \\frac{e^{tb}-e^{ta}}{t(b-a)} \\); Üstel \\( \\frac{\\lambda}{\\lambda-t}\\;(t&lt;\\lambda) \\); Gamma(k,λ) \\( (\\frac{\\lambda}{\\lambda-t})^k \\);
        Gauss \\( e^{\\mu t+\\sigma^2t^2/2} \\). Binom'unkinin Bernoulli'ninkinin n. kuvveti olması tesadüf değil: aşağıdaki özellik.</p>
        <p><b>Bağımsız toplam → çarpım:</b></p>
        \\[ M_{X+Y}(t)=E[e^{tX}e^{tY}]=M_X(t)\\,M_Y(t), \\qquad M_{aX+b}(t)=e^{bt}M_X(at) \\]
        <p><b>Teklik:</b> MGF (var olduğu bir t aralığında) dağılımı benzersiz belirler. Bu iki özellik birlikte üreme özelliklerinin kanıtıdır:
        iki Poisson'un MGF çarpımı \\( e^{(\\lambda_1+\\lambda_2)(e^t-1)} \\) → yine Poisson. k Üstel'in çarpımı \\( (\\lambda/(\\lambda-t))^k \\) → Gamma.
        Gauss'ların toplamı: üsteller toplanır → Gauss. Merkezi Limit Teoremi'nin standart kanıtı da MGF ile yapılır.</p>
        <p><b>Chernoff sınırı:</b> \\( P(X\\ge a)\\le\\min_{t&gt;0}e^{-ta}M_X(t) \\) — Markov'un \\( e^{tX} \\)'e uygulanması; kuyruk olasılığı için
        üstel hızla küçülen sınır (kodlama teorisinde hata üstel sınırları).</p>
        <p><b>Karakteristik fonksiyon</b> — her dağılım için var olan güvenli sürüm:</p>
        \\[ \\Phi_X(\\omega)=E\\big[e^{j\\omega X}\\big]=\\int f_X(x)e^{j\\omega x}\\,dx \\]
        <p>Yoğunluğun Fourier dönüşümüdür (işaret kuralı ters). Toplam → çarpım, teklik, momentler \\( E[X^n]=(-j)^n\\Phi^{(n)}(0) \\) — aynı özellikler;
        ayrıca Cauchy gibi MGF'si olmayan dağılımlarda da tanımlıdır (\\( \\Phi=e^{-|\\omega|} \\)). Gauss: \\( e^{j\\mu\\omega-\\sigma^2\\omega^2/2} \\) — Gauss'un
        Fourier'i Gauss'tur. Ters dönüşümle \\( f_X \\) geri alınır; sayısal yöntemlerde (FFT ile toplam dağılımı) kullanılır.</p>
        <p><b>Olasılık üreten fonksiyon</b> (ayrık, tam sayı değerli): \\( G_X(z)=E[z^X]=\\sum p_kz^k=M_X(\\ln z) \\) — z-dönüşümünün olasılık karşılığı;
        \\( p_k \\) katsayı okumakla bulunur, \\( E[X]=G'(1) \\).</p>`
    },
    {
      baslik: "16. Büyük Sayılar Yasası ve Merkezi Limit Teoremi",
      icerik: `
        <p>İki teorem, "olasılık" ile "ölçülen frekans" arasındaki köprüyü kurar ve Gauss'un neden her yerde olduğunu açıklar.
        Her ikisi de i.i.d. (bağımsız, aynı dağılımlı) \\( X_1,\\dots,X_n \\) (ortalama μ, varyans σ²) ve örnek ortalaması
        \\( \\overline X_n=\\frac1n\\sum X_i \\) hakkındadır. \\( E[\\overline X_n]=\\mu \\), \\( \\operatorname{Var}(\\overline X_n)=\\sigma^2/n \\).</p>
        <p><b>Zayıf Büyük Sayılar Yasası (BSY):</b> her \\( \\epsilon&gt;0 \\) için</p>
        \\[ P\\big(|\\overline X_n-\\mu|\\ge\\epsilon\\big)\\le\\frac{\\sigma^2}{n\\epsilon^2}\\;\\longrightarrow\\;0 \\quad(n\\to\\infty) \\]
        <p>Kanıt: Chebyshev'i \\( \\overline X_n \\)'e uygula — tek satır. Anlamı: örnek ortalaması gerçek ortalamaya <b>olasılıkta yakınsar</b>; bir olayın
        göreli frekansı olasılığına gider (gösterge değişkenlerle). Monte Carlo simülasyonunun, "ortalama alarak gürültüyü azaltma"nın ve
        sigortacılığın matematiksel temeli. Güçlü BSY: yakınsama hemen hemen kesin (her gerçekleşme için).</p>
        <p><b>Merkezi Limit Teoremi (MLT):</b> dağılım <b>ne olursa olsun</b> (sonlu varyanslı), standartlaştırılmış toplam Gauss'a yaklaşır:</p>
        \\[ Z_n=\\frac{\\overline X_n-\\mu}{\\sigma/\\sqrt n}=\\frac{S_n-n\\mu}{\\sigma\\sqrt n}\\;\\xrightarrow{d}\\;N(0,1) \\]
        <p>Pratik biçimi: \\( n \\) büyükse \\( S_n\\approx N(n\\mu,\\,n\\sigma^2) \\), \\( \\overline X_n\\approx N(\\mu,\\,\\sigma^2/n) \\). BSY "nereye gider" der,
        MLT "etrafında nasıl dalgalanır" der: sapma \\( \\sigma/\\sqrt n \\) ölçeğinde ve Gauss biçimlidir.</p>
        <p><b>Ne kadar n yeter?</b> Simetrik, düzgün dağılımlarda 10–30; çok çarpık (üstel) dağılımlarda 50+; iki üniformun toplamı bile
        üçgen, üçü neredeyse çan. Kural: n≥30 çoğu ders sorusu için kabul edilir.</p>
        <p><b>Uygulama şablonu:</b> (1) toplam mı ortalama mı → ortalama ve varyansı yaz; (2) standartlaştır; (3) Φ tablosu.
        Örnek: 100 ölçüm, μ=5, σ=2 → \\( \\overline X\\sim N(5,0.04) \\), \\( P(\\overline X&gt;5.2)=1-\\Phi(1)=0.16 \\).</p>
        <ul>
          <li><b>Binom'a Gauss yaklaşımı:</b> \\( np(1-p)\\ge10 \\) ise \\( \\text{Binom}(n,p)\\approx N(np,np(1-p)) \\); ayrık→sürekli geçişte
          <b>süreklilik düzeltmesi</b> \\( P(X\\le k)\\approx\\Phi\\big(\\frac{k+0.5-np}{\\sqrt{np(1-p)}}\\big) \\).</li>
          <li><b>Poisson'a:</b> λ büyükse \\( N(\\lambda,\\lambda) \\).</li>
          <li><b>Güven aralığı:</b> \\( \\mu\\in\\overline X\\pm1.96\\,\\sigma/\\sqrt n \\) %95 — ölçüm raporlarındaki "±" buradan; hata payını yarıya
          indirmek için ölçüm sayısını <b>4 katına</b> çıkarmak gerekir.</li>
        </ul>
        <p><b>Neden Gauss her yerde:</b> Termal gürültü milyarlarca elektronun bağımsız katkısının toplamıdır → MLT → Gauss. Aynı nedenle ölçüm
        hataları, çok yollu kanalın I/Q bileşenleri, büyük toplamların hepsi Gauss'a yakınsar. <b>Sınırı:</b> sonsuz varyanslı (Cauchy, ağır kuyruklu)
        dağılımlar için MLT çalışmaz; bağımlılık güçlüyse de bozulur.</p>`
    },
    {
      baslik: "17. Rastgele Süreçlere Giriş: Durağanlık, Otokorelasyon, PSD",
      icerik: `
        <p>Gürültü gerilimi \\( n(t) \\) tek bir rastgele değişken değil, zamanla akan bir <b>rastgele değişkenler ailesidir</b>: her sabit t'de
        \\( X(t) \\) bir RD, her sonuç için \\( x(t) \\) bir <b>örnek fonksiyon</b> (gerçekleşme). Direnç gürültüsü, alınan sinyal, borsa fiyatı,
        konuşma sinyali — hepsi rastgele süreçtir. Tam tanımı tüm birleşik dağılımları ister; pratikte ilk iki moment kullanılır.</p>
        <ul>
          <li><b>Ortalama fonksiyonu:</b> \\( \\mu_X(t)=E[X(t)] \\).</li>
          <li><b>Otokorelasyon:</b> \\( R_X(t_1,t_2)=E[X(t_1)X(t_2)] \\) — sürecin iki anındaki değerlerin ne kadar "birlikte" olduğu; sinyalin ne
          kadar hızlı değiştiğinin ölçüsü. Otokovaryans \\( C_X=R_X-\\mu_X(t_1)\\mu_X(t_2) \\).</li>
        </ul>
        <p><b>Geniş anlamda durağan (WSS)</b> süreç: istatistikleri zaman kökenine bağlı değildir —</p>
        \\[ \\mu_X(t)=\\mu\\;(\\text{sabit}), \\qquad R_X(t,t+\\tau)=R_X(\\tau)\\;(\\text{yalnızca gecikmeye bağlı}) \\]
        <p>WSS otokorelasyonun özellikleri: \\( R_X(0)=E[X^2] \\) = <b>ortalama güç</b>; \\( R_X(-\\tau)=R_X(\\tau) \\) (çift); \\( |R_X(\\tau)|\\le R_X(0) \\);
        \\( \\tau\\to\\infty \\)'da \\( \\mu^2 \\)'ye gider (uzak örnekler ilişkisizleşir). Ne kadar hızlı düşerse süreç o kadar "hızlı"/geniş bantlıdır.
        Sıkı durağanlık (tüm dağılımlar değişmez) daha güçlüdür; Gauss süreçte WSS ⇒ sıkı durağan.</p>
        <p><b>Ergodiklik:</b> tek bir uzun gerçekleşmenin zaman ortalaması, topluluk ortalamasına eşitse. Laboratuvarda "topluluk" yoktur, tek kayıt vardır;
        ergodiklik varsayımı \\( R_X(\\tau)\\approx\\lim\\frac1T\\int x(t)x(t+\\tau)dt \\) ölçümünü meşrulaştırır.</p>
        <p><b>Güç spektral yoğunluğu (PSD)</b> — gücün frekansa dağılımı (W/Hz). <b>Wiener–Khinchin:</b></p>
        \\[ S_X(f)=\\int_{-\\infty}^{\\infty}R_X(\\tau)e^{-j2\\pi f\\tau}\\,d\\tau, \\qquad R_X(\\tau)=\\int S_X(f)e^{j2\\pi f\\tau}\\,df, \\qquad P=R_X(0)=\\int S_X(f)\\,df \\]
        <p>\\( S_X\\ge0 \\), gerçel süreçte çift. Yorum: zaman ilişkisi ↔ frekans içeriği — Fourier çifti. Hızlı sönen \\( R_X \\) → geniş PSD.</p>
        <ul>
          <li><b>Beyaz gürültü:</b> \\( S=N_0/2 \\) düz, \\( R_X(\\tau)=\\frac{N_0}2\\delta(\\tau) \\) — hiçbir iki an ilişkili değil; sonsuz güçlü idealizasyon.
          Termal gürültü \\( \\sim \\)THz'e kadar beyazdır: \\( N_0=kT \\) (W/Hz), 290 K'de −174 dBm/Hz. Filtrelenince <b>renkli</b> gürültü olur.</li>
          <li><b>LTI sistemden geçiş:</b> WSS giriş → WSS çıkış; \\( \\mu_Y=\\mu_XH(0) \\), \\( S_Y(f)=|H(f)|^2S_X(f) \\), \\( R_Y=R_X*h*h(-\\cdot) \\).
          Faz bilgisi kaybolur, yalnızca genlik yanıtı önemlidir. Bant genişliği B olan ideal filtreden geçen beyaz gürültünün gücü \\( N_0B \\) —
          "gürültü gücü bant genişliğiyle orantılıdır" kuralı.</li>
          <li><b>Gauss süreci:</b> her sonlu örnek kümesi birleşik Gauss; LTI çıkışı da Gauss (doğrusal kombinasyon). AWGN kanal modeli = beyaz + Gauss.</li>
          <li><b>Poisson süreci:</b> olay sayısı \\( N(t)\\sim\\text{Poisson}(\\lambda t) \\), aralar bağımsız Üstel(λ) — paket varışları, foton sayımı.
          <b>Rastgele yürüyüş / Markov zinciri:</b> ayrık zamanlı, gelecek yalnızca şimdiye bağlı; kuyruk ve kanal durum modelleri.</li>
        </ul>
        <p><b>Neden önemli:</b> SNR hesabı, eşleşmiş filtre, Wiener/Kalman filtreleri, spektrum analizörü okumaları — hepsi \\( R_X \\) ve \\( S_X \\) diliyle yazılır.
        Bu konu, olasılık dersinin haberleşme ve sinyal işleme derslerine açılan kapısıdır.</p>`
    },

    {
      baslik: "18. Poisson Süreci ve Üstel Arası Zamanlar",
      icerik: `
        <p>Poisson dağılımını "sabit bir aralıkta kaç olay" sorusu için, üstel dağılımı "bir sonraki
        olaya kadar ne kadar süre" sorusu için ayrı ayrı öğrendik. <b>Poisson süreci</b> bu ikisinin
        aynı modelin iki yüzü olduğunu gösterir ve rastgele süreçler konusunun ilk somut örneğidir.</p>
        <p>\\( \\{N(t),\\,t\\ge0\\} \\) sayma süreci şu üç koşulu sağlıyorsa \\( \\lambda \\) oranlı
        Poisson sürecidir: (1) \\( N(0)=0 \\); (2) <b>bağımsız artışlar</b> — ayrık zaman aralıklarındaki
        olay sayıları bağımsızdır; (3) <b>durağan artışlar</b> — uzunluğu \\( \\tau \\) olan herhangi bir
        aralıktaki olay sayısı yalnız \\( \\tau \\)'ya bağlıdır. Bu üç varsayımın tek sonucu şudur:</p>
        \\[ P\\{N(t+\\tau)-N(t)=k\\}=\\frac{(\\lambda\\tau)^{k}e^{-\\lambda\\tau}}{k!},\\qquad
           E[N(t)]=\\operatorname{Var}(N(t))=\\lambda t \\]
        <p><b>Arası zamanlar.</b> Ardışık olaylar arasındaki süre \\( T \\) için
        \\( P\\{T&gt;t\\}=P\\{N(t)=0\\}=e^{-\\lambda t} \\), yani</p>
        \\[ f_T(t)=\\lambda e^{-\\lambda t},\\quad t\\ge0,\\qquad E[T]=\\frac{1}{\\lambda} \\]
        <p>Arası zamanlar <b>bağımsız ve üstel</b> dağılımlıdır. \\( n \\) olayın gerçekleşme süresi
        bu üstellerin toplamıdır ve <b>Erlang (Gamma)</b> dağılımı verir:
        \\( f_{S_n}(t)=\\dfrac{\\lambda^{n}t^{n-1}e^{-\\lambda t}}{(n-1)!} \\).</p>
        <p><b>Hafızasızlık.</b> Üstel dağılımın belirleyici özelliği:</p>
        \\[ P\\{T&gt;s+t\\mid T&gt;s\\}=P\\{T&gt;t\\} \\]
        <p>"10 dakikadır çağrı gelmedi, artık gelmesi yakındır" cümlesi <b>yanlıştır</b>: beklemiş
        olmak kalan bekleme süresinin dağılımını değiştirmez. Üstel, sürekli dağılımlar arasında bu
        özelliği taşıyan tek dağılımdır (ayrıkta karşılığı geometriktir). Fiziksel anlamı, olayların
        birbirini "hatırlamadan", sabit oranla ortaya çıkmasıdır — yaşlanan/yıpranan sistemler için
        bu yüzden Weibull gibi modeller kullanılır.</p>
        <p><b>Ayrıştırma ve birleştirme.</b> İki önemli kapanış özelliği vardır:</p>
        <ul>
          <li><b>Birleştirme:</b> \\( \\lambda_1 \\) ve \\( \\lambda_2 \\) oranlı bağımsız iki Poisson
          süreci üst üste binerse sonuç \\( \\lambda_1+\\lambda_2 \\) oranlı Poisson sürecidir.</li>
          <li><b>Ayrıştırma:</b> her olay bağımsız olarak \\( p \\) olasılıkla A türüne atanırsa,
          A olayları \\( \\lambda p \\) oranlı Poisson sürecidir ve B sürecinden <b>bağımsızdır</b>.
          (Sezgiye aykırıdır ama doğrudur.)</li>
        </ul>
        <p>Ayrıca güzel bir koşullandırma sonucu: \\( (0,t) \\) aralığında tam \\( n \\) olay olduğu
        bilindiğinde, bu olayların konumları \\( (0,t) \\) üzerinde <b>bağımsız düzgün dağılımlı</b>
        noktaların sıralanmış hâli gibi davranır.</p>
        <p><b>Sık yapılan hata:</b> \\( \\lambda \\)'yı aralık uzunluğuyla ölçeklemeyi unutmak.
        \\( \\lambda \\) birim zamandaki orandır; 5 dakikalık pencere için Poisson parametresi
        \\( \\lambda\\cdot5 \\)'tir. Bir diğeri, arası zaman ile toplam süreyi karıştırmak:
        tek olay üstel, \\( n \\) olay Erlang'dır.</p>
        <p><b>EE'de nerede:</b> çağrı merkezi ve paket ağı trafiği (M/M/1 kuyruğunun temeli),
        foton sayımı ve atış gürültüsü (shot noise), radyoaktif bozunma, yarı iletken üretiminde
        kusur sayısı, sistem güvenilirliğinde arıza oranı \\( \\lambda \\) ve MTBF \\( =1/\\lambda \\).</p>`
    }
  ],
  formuller: [
    { ad: "Genel Toplam Kuralı", formul: `\\( P(A\\cup B)=P(A)+P(B)-P(A\\cap B) \\)`, aciklama: "Kesişimi bir kez say." },
    { ad: "Koşullu Olasılık", formul: `\\( P(A\\mid B)=\\dfrac{P(A\\cap B)}{P(B)} \\)`, aciklama: "B verildiğinde A olasılığı." },
    { ad: "Toplam Olasılık", formul: `\\( P(A)=\\sum_i P(A\\mid B_i)P(B_i) \\)`, aciklama: "Örnek uzayı bölerek hesap." },
    { ad: "Bayes Teoremi", formul: `\\( P(B_i\\mid A)=\\dfrac{P(A\\mid B_i)P(B_i)}{\\sum_j P(A\\mid B_j)P(B_j)} \\)`, aciklama: "Koşullu olasılığı ters çevirme." },
    { ad: "Bağımsızlık", formul: `\\( P(A\\cap B)=P(A)P(B) \\)`, aciklama: "Olaylar birbirini etkilemez." },
    { ad: "Binom PMF", formul: `\\( P(X=k)=\\binom{n}{k}p^k(1-p)^{n-k} \\)`, aciklama: "E=np, Var=np(1-p)." },
    { ad: "Poisson PMF", formul: `\\( P(X=k)=\\dfrac{\\lambda^k e^{-\\lambda}}{k!} \\)`, aciklama: "E=Var=λ." },
    { ad: "Geometrik PMF", formul: `\\( P(X=k)=(1-p)^{k-1}p \\)`, aciklama: "İlk başarı; E=1/p." },
    { ad: "Üstel PDF", formul: `\\( f_X(x)=\\lambda e^{-\\lambda x},\\; x\\ge0 \\)`, aciklama: "E=1/λ; belleksiz." },
    { ad: "Gauss (Normal) PDF", formul: `\\( f_X(x)=\\dfrac{1}{\\sigma\\sqrt{2\\pi}}e^{-(x-\\mu)^2/2\\sigma^2} \\)`, aciklama: "Gürültünün temel modeli." },
    { ad: "Üniform Ort./Var.", formul: `\\( E=\\dfrac{a+b}{2},\\; \\operatorname{Var}=\\dfrac{(b-a)^2}{12} \\)`, aciklama: "U(a,b) dağılımı." },
    { ad: "Beklenen Değer (Sürekli)", formul: `\\( E[X]=\\int_{-\\infty}^{\\infty}x f_X(x)\\,dx \\)`, aciklama: "Dağılımın ortalaması." },
    { ad: "Varyans", formul: `\\( \\operatorname{Var}(X)=E[X^2]-(E[X])^2 \\)`, aciklama: "Yayılım ölçüsü." },
    { ad: "Doğrusal Dönüşüm", formul: `\\( E[aX+b]=aE[X]+b,\\; \\operatorname{Var}(aX+b)=a^2\\operatorname{Var}(X) \\)`, aciklama: "Ölçek/kaydırma etkisi." },
    { ad: "LOTUS", formul: `\\( E[g(X)]=\\int g(x)f_X(x)\\,dx \\)`, aciklama: "Fonksiyonun beklenen değeri." },
    { ad: "Standartlaştırma", formul: `\\( Z=\\dfrac{X-\\mu}{\\sigma}\\sim N(0,1) \\)`, aciklama: "Z-tablosu (Φ) kullanımı." },
    { ad: "Chebyshev Eşitsizliği", formul: `\\( P(|X-\\mu|\\ge k\\sigma)\\le \\dfrac{1}{k^2} \\)`, aciklama: "Dağılımdan bağımsız sınır." },
    { ad: "Kovaryans", formul: `\\( \\operatorname{Cov}(X,Y)=E[XY]-E[X]E[Y] \\)`, aciklama: "Birlikte değişim." },
    { ad: "Korelasyon Katsayısı", formul: `\\( \\rho=\\dfrac{\\operatorname{Cov}(X,Y)}{\\sigma_X\\sigma_Y} \\)`, aciklama: "−1 ile 1 arası." },
    { ad: "Toplamın Varyansı", formul: `\\( \\operatorname{Var}(X+Y)=\\operatorname{Var}X+\\operatorname{Var}Y+2\\operatorname{Cov}(X,Y) \\)`, aciklama: "Bağımsızsa Cov=0." },
    { ad: "Konvolüsyon", formul: `\\( f_Z(z)=\\int f_X(x)f_Y(z-x)\\,dx \\)`, aciklama: "Bağımsız toplamın yoğunluğu." },
    { ad: "MGF", formul: `\\( M_X(t)=E[e^{tX}] \\)`, aciklama: "Momentleri üretir; toplamda çarpılır." },
    { ad: "Merkezi Limit Teoremi", formul: `\\( \\dfrac{\\overline{X}_n-\\mu}{\\sigma/\\sqrt{n}}\\to N(0,1) \\)`, aciklama: "Büyük n'de Gauss'a yakınsama." },
    { ad: "Otokorelasyon (WSS)", formul: `\\( R_X(\\tau)=E[X(t)X(t+\\tau)] \\)`, aciklama: "PSD'nin ters Fourier'i." },
    { ad: "Bernoulli", formul: `\\( P(X=1)=p,\\; E=p,\\; \\operatorname{Var}=p(1-p) \\)`, aciklama: "Tek deneme; tüm ayrık dağılımların yapı taşı." },
    { ad: "Hipergeometrik PMF", formul: `\\( P(X=k)=\\dfrac{\\binom Kk\\binom{N-K}{n-k}}{\\binom Nn} \\)`, aciklama: "Yerine koymadan çekiliş; E=nK/N." },
    { ad: "Geometrik Belleksizlik", formul: `\\( P(X&gt;m+n\\mid X&gt;m)=P(X&gt;n) \\)`, aciklama: "Üstel için de aynı; geçmiş geleceği etkilemez." },
    { ad: "Üstel CDF", formul: `\\( F_X(x)=1-e^{-\\lambda x},\\; x\\ge0 \\)`, aciklama: "P(X>x)=e^{-λx}; medyan ln2/λ." },
    { ad: "Erlang / Gamma PDF", formul: `\\( f=\\dfrac{\\lambda^kx^{k-1}e^{-\\lambda x}}{(k-1)!} \\)`, aciklama: "k üstelin toplamı; E=k/λ, Var=k/λ²." },
    { ad: "Rayleigh PDF", formul: `\\( f_R(r)=\\dfrac{r}{\\sigma^2}e^{-r^2/2\\sigma^2},\\; r\\ge0 \\)`, aciklama: "İki bağımsız N(0,σ²)'nin genliği; sönümlemeli kanal." },
    { ad: "Q Fonksiyonu", formul: `\\( Q(z)=1-\\Phi(z)=P(Z&gt;z) \\)`, aciklama: "Gauss kuyruk olasılığı; bit hata hesabında." },
    { ad: "Markov Eşitsizliği", formul: `\\( P(X\\ge a)\\le\\dfrac{E[X]}{a},\\; X\\ge0 \\)`, aciklama: "Chebyshev'in atası; yalnızca ortalama gerekir." },
    { ad: "PDF Dönüşümü", formul: `\\( f_Y(y)=\\dfrac{f_X(x)}{|g'(x)|}\\Big|_{x=g^{-1}(y)} \\)`, aciklama: "Y=g(X), g monoton; birden çok kök varsa toplanır." },
    { ad: "Marjinal / Koşullu", formul: `\\( f_X=\\int f_{X,Y}\\,dy,\\quad f_{Y\\mid X}=\\dfrac{f_{X,Y}}{f_X} \\)`, aciklama: "Bağımsız ⟺ f_{X,Y}=f_X f_Y (her x,y)." },
    { ad: "Koşullu Gauss", formul: `\\( E[Y\\mid X=x]=\\mu_Y+\\rho\\dfrac{\\sigma_Y}{\\sigma_X}(x-\\mu_X) \\)`, aciklama: "Var(Y|X)=σ_Y²(1−ρ²); bivariate Gauss." },
    { ad: "Toplam Beklenti", formul: `\\( E[Y]=E\\big[E[Y\\mid X]\\big] \\)`, aciklama: "Var Y = E[Var(Y|X)] + Var(E[Y|X])." },
    { ad: "Doğrusal MMSE", formul: `\\( \\hat Y=\\mu_Y+\\rho\\dfrac{\\sigma_Y}{\\sigma_X}(X-\\mu_X),\\; e=\\sigma_Y^2(1-\\rho^2) \\)`, aciklama: "Dikgenlik ilkesi; Gauss'ta optimal." },
    { ad: "Örnek Ortalaması", formul: `\\( E[\\overline X_n]=\\mu,\\quad \\operatorname{Var}(\\overline X_n)=\\dfrac{\\sigma^2}{n} \\)`, aciklama: "n kat ortalama → σ/√n; SNR √n kat." },
    { ad: "MGF Toplam Kuralı", formul: `\\( M_{X+Y}(t)=M_X(t)M_Y(t) \\)`, aciklama: "Bağımsız toplam; Gauss MGF: e^{μt+σ²t²/2}." },
    { ad: "Karakteristik Fonksiyon", formul: `\\( \\Phi_X(\\omega)=E[e^{j\\omega X}] \\)`, aciklama: "PDF'nin Fourier'i; her dağılım için var." },
    { ad: "Wiener–Khinchin", formul: `\\( S_X(f)=\\mathcal F\\{R_X(\\tau)\\},\\quad P=R_X(0)=\\int S_X\\,df \\)`, aciklama: "PSD ↔ otokorelasyon; LTI çıkış S_Y=|H|²S_X." },
    { ad: "Beyaz Gürültü", formul: `\\( S=\\dfrac{N_0}{2},\\; R_X(\\tau)=\\dfrac{N_0}{2}\\delta(\\tau),\\; N_0=kT \\)`, aciklama: "Bant B'den geçen güç N_0B; 290 K'de −174 dBm/Hz." },

    { ad: "Poisson Süreci Olay Sayısı", formul: "\\( P\\{N(\\tau)=k\\}=\\dfrac{(\\lambda\\tau)^{k}e^{-\\lambda\\tau}}{k!} \\)", aciklama: "λ birim zamandaki oran; pencere uzunluğuyla ölçeklenir." },
    { ad: "Poisson Süreci Ortalama ve Varyans", formul: "\\( E[N(t)]=\\operatorname{Var}(N(t))=\\lambda t \\)", aciklama: "Ortalama ile varyansın eşit olması Poisson'un imzasıdır." },
    { ad: "Üstel Arası Zaman", formul: "\\( f_T(t)=\\lambda e^{-\\lambda t},\\qquad E[T]=\\dfrac{1}{\\lambda} \\)", aciklama: "Ardışık olaylar arası süre; bağımsız ve özdeş dağılımlı." },
    { ad: "Hafızasızlık", formul: "\\( P\\{T>s+t\\mid T>s\\}=P\\{T>t\\} \\)", aciklama: "Beklemiş olmak kalan bekleme dağılımını değiştirmez." },
    { ad: "n. Olayın Zamanı (Erlang)", formul: "\\( f_{S_n}(t)=\\dfrac{\\lambda^{n}t^{n-1}e^{-\\lambda t}}{(n-1)!} \\)", aciklama: "n bağımsız üstelin toplamı; MTBF hesaplarında kullanılır." },
    { ad: "Birleştirme ve Ayrıştırma", formul: "\\( \\lambda_{top}=\\lambda_1+\\lambda_2,\\qquad \\lambda_A=p\\lambda \\)", aciklama: "Poisson süreçleri toplanır; bağımsız seyreltme yine Poisson verir." }
  ],
  galeri: [],
  dokumanlar: [],
  videolar: [
    { baslik: "MIT — Olasılık Modelleri ve Aksiyomlar (Tsitsiklis, Ders 1)", youtube: "j9WZyLZCBzs" },
    { baslik: "MIT — Sayma (Counting, Ders 4)", youtube: "6oV3pKLgW2I" },
    { baslik: "MIT RES.6-012 Introduction to Probability (Tam Kurs Playlist)", playlist: "PLUl4u3cNGP60hI9ATjSFgLZpbNJ7myAg6" }
  ],
  linkler: [
    { ad: "MIT OCW 6.041 — Applied Probability", url: "https://ocw.mit.edu/courses/6-041-probabilistic-systems-analysis-and-applied-probability-fall-2010/", aciklama: "Ders notları + çözümlü problemler" },
    { ad: "Seeing Theory", url: "https://seeing-theory.brown.edu/", aciklama: "Olasılığı görselleştiren interaktif site" },
    { ad: "StatTrek", url: "https://stattrek.com/", aciklama: "Dağılım tabloları, Z-tablosu ve hesaplayıcılar" },
    { ad: "Desmos", url: "https://www.desmos.com/calculator", aciklama: "PDF/CDF grafiklerini çiz" }
  ],
  sorular: [
    {
      tip: "vize",
      konu: 8,
      soru: `<p>Hilesiz bir zar atılıyor. \\( X \\) gelen sayı ise \\( E[X] \\) ve \\( \\operatorname{Var}(X) \\) nedir? Zar iki kez atılıp toplam alınırsa toplamın ortalaması ve varyansı ne olur?</p>`,
      cozum: `
        \\[ E[X]=\\frac{1+2+3+4+5+6}{6}=3.5, \\qquad E[X^2]=\\frac{91}{6}, \\qquad \\operatorname{Var}(X)=\\frac{91}{6}-3.5^2=\\frac{35}{12}\\approx 2.92 \\]
        <p>İki bağımsız atış: \\( E[X_1+X_2]=7 \\), \\( \\operatorname{Var}=2\\cdot\\frac{35}{12}=\\frac{35}{6}\\approx5.83 \\) (bağımsız → varyanslar toplanır).</p>`
    },
    {
      tip: "vize",
      konu: 1,
      soru: `<p>52'lik desteden yerine koymadan 5 kart çekiliyor. (a) Tam olarak 2 as, (b) en az 1 as gelme olasılığı nedir? (c) Bu hangi dağılımdır?</p>`,
      cozum: `
        <p>(a) 4 astan 2, 48 diğerden 3: \\( \\dfrac{\\binom42\\binom{48}3}{\\binom{52}5}=\\dfrac{6\\cdot17296}{2598960}\\approx0.040 \\).</p>
        <p>(b) Tümleyen: \\( 1-\\dfrac{\\binom{48}5}{\\binom{52}5}=1-\\dfrac{1712304}{2598960}\\approx1-0.659=0.341 \\).</p>
        <p>(c) <b>Hipergeometrik</b>(N=52, K=4, n=5); yerine koyarak olsaydı Binom(5, 1/13) olurdu — (b) için \\( 1-(12/13)^5=0.33 \\), yakın ama farklı.</p>`
    },
    {
      tip: "vize",
      konu: 2,
      soru: `<p>Bir hastalık nüfusun %1'inde görülüyor. Test hastaları %99 doğru saptıyor ama sağlamlarda %5 yanlış pozitif veriyor. Testi pozitif çıkan birinin gerçekten hasta olma olasılığı nedir? Sonuç neden bu kadar düşük?</p>`,
      cozum: `
        <p>\\( P(H)=0.01 \\), \\( P(+\\mid H)=0.99 \\), \\( P(+\\mid \\overline{H})=0.05 \\). Toplam olasılık:</p>
        \\[ P(+)=0.99(0.01)+0.05(0.99)=0.0099+0.0495=0.0594 \\]
        \\[ P(H\\mid+)=\\frac{0.0099}{0.0594}\\approx 0.167 \\]
        <p>Yalnızca <b>%16.7</b>. Neden: sağlamlar 99 kat daha kalabalık; onların %5'i (0.0495) hastaların %99'undan (0.0099) 5 kat fazla pozitif üretir.
        Düşük yaygınlıkta yanlış pozitifler baskındır — <b>taban oranı</b> ihmal edilemez.</p>`
    },
    {
      tip: "vize",
      konu: 3,
      soru: `<p>Üç bileşenin bağımsız çalışma olasılıkları 0.9, 0.8, 0.7. (a) Seri bağlı sistem (hepsi çalışmalı), (b) paralel bağlı sistem (biri yeter) çalışma olasılığı nedir? (c) Sistem çalışmıyorsa 3. bileşenin bozuk olma olasılığı (seri durumda)?</p>`,
      cozum: `
        <p>(a) \\( 0.9\\cdot0.8\\cdot0.7=0.504 \\).</p>
        <p>(b) \\( 1-(0.1)(0.2)(0.3)=1-0.006=0.994 \\).</p>
        <p>(c) Bayes: \\( P(\\overline C_3\\mid\\overline S)=\\dfrac{P(\\overline C_3)}{P(\\overline S)}=\\dfrac{0.3}{1-0.504}=0.605 \\)
        (3. bozuksa sistem kesin bozuk: \\( P(\\overline S\\mid\\overline C_3)=1 \\)). En zayıf halka en olası suçludur.</p>`
    },
    {
      tip: "vize",
      konu: 5,
      soru: `<p>Bir bileşen bağımsız olarak 0.1 olasılıkla arızalanıyor. 5 bileşenden (a) tam 1'inin arızalanma, (b) en az 1'inin arızalanma olasılığı nedir? (c) Arıza sayısının ortalaması ve varyansı?</p>`,
      cozum: `
        <p>\\( X\\sim \\text{Binom}(5,0.1) \\).</p>
        \\[ P(X=1)=\\binom{5}{1}(0.1)(0.9)^4=5(0.1)(0.6561)=0.328, \\qquad P(X\\ge1)=1-(0.9)^5=1-0.590=0.410 \\]
        <p>(c) \\( E=np=0.5 \\), \\( \\operatorname{Var}=np(1-p)=0.45 \\).</p>`
    },
    {
      tip: "vize",
      konu: 5,
      soru: `<p>Bir çağrı merkezine dakikada ortalama \\( \\lambda=3 \\) çağrı geliyor (Poisson). (a) Bir dakikada tam 5 çağrı, (b) 2 dakikada hiç çağrı gelmeme olasılığı nedir? (c) İki çağrı arası sürenin dağılımı ve ortalaması?</p>`,
      cozum: `
        <p>(a) \\( P(X=5)=\\dfrac{3^5 e^{-3}}{5!}=\\dfrac{243\\,(0.0498)}{120}\\approx 0.101 \\).</p>
        <p>(b) 2 dakikada \\( \\lambda t=6 \\): \\( P(N=0)=e^{-6}\\approx0.0025 \\).</p>
        <p>(c) Çağrılar arası süre <b>Üstel(3)</b>, ortalama \\( 1/3 \\) dk = 20 s; \\( P(T&gt;2)=e^{-6} \\) — (b) ile aynı olay. ✓</p>`
    },
    {
      tip: "vize",
      konu: 6,
      soru: `<p>\\( f_X(x)=cx^2 \\), \\( 0\\le x\\le1 \\) (diğer yerde 0). (a) \\( c \\)'yi bulun, (b) CDF'yi yazın, (c) \\( E[X] \\) ve \\( \\operatorname{Var}(X) \\), (d) \\( P(X&gt;0.5) \\) ve medyan.</p>`,
      cozum: `
        <p>(a) \\( \\int_0^1 cx^2 dx=\\dfrac{c}{3}=1\\Rightarrow c=3 \\).</p>
        <p>(b) \\( F(x)=0\\;(x&lt;0);\\;x^3\\;(0\\le x\\le1);\\;1\\;(x&gt;1) \\).</p>
        <p>(c) \\( E[X]=\\int_0^1 3x^3dx=\\dfrac{3}{4} \\); \\( E[X^2]=\\int_0^13x^4dx=\\dfrac35 \\); \\( \\operatorname{Var}=\\dfrac35-\\dfrac9{16}=\\dfrac{3}{80}=0.0375 \\).</p>
        <p>(d) \\( P(X&gt;0.5)=1-F(0.5)=1-0.125=0.875 \\). Medyan: \\( m^3=0.5\\Rightarrow m=0.794 \\) (ortalama 0.75'ten büyük — sola çarpık).</p>`
    },
    {
      tip: "final",
      konu: 7,
      soru: `<p>Bir cihazın ömrü \\( \\lambda=1/1000 \\) parametreli üstel dağılımlıdır (saat). (a) 1500 saatten fazla dayanma olasılığı, (b) 500 saat çalışmışken 1000 saat daha dayanma olasılığı nedir? (c) Aynı cihazdan 3 tanesi sırayla (biri bozulunca diğeri) kullanılırsa toplam ömrün dağılımı ve ortalaması?</p>`,
      cozum: `
        <p>(a) \\( P(X&gt;1500)=e^{-1.5}\\approx 0.223 \\).</p>
        <p>(b) Üstel <b>belleksizdir</b>: \\( P(X&gt;1500\\mid X&gt;500)=P(X&gt;1000)=e^{-1}\\approx 0.368 \\).</p>
        <p>(c) Üç bağımsız üstelin toplamı <b>Erlang(3, 1/1000)</b>; ortalama \\( 3/\\lambda=3000 \\) saat, varyans \\( 3\\cdot10^6 \\), sapma 1732 saat.</p>`
    },
    {
      tip: "final",
      konu: 7,
      soru: `<p>Bir sinyal gerilimi \\( X\\sim N(\\mu=100,\\;\\sigma=15) \\). (a) \\( P(X&gt;130) \\), (b) \\( P(85&lt;X&lt;115) \\), (c) hangi eşik değerini yalnızca %1 aşar? (\\( \\Phi(1)=0.8413,\\;\\Phi(2)=0.9772,\\;\\Phi(2.33)=0.99 \\))</p>`,
      cozum: `
        <p>(a) \\( Z=\\dfrac{130-100}{15}=2 \\) ⟹ \\( P=1-\\Phi(2)=0.0228 \\).</p>
        <p>(b) \\( \\pm1\\sigma \\): \\( \\Phi(1)-\\Phi(-1)=2(0.8413)-1=0.683 \\).</p>
        <p>(c) \\( \\Phi(z)=0.99\\Rightarrow z=2.33 \\) ⟹ \\( x=100+2.33\\cdot15=135 \\) V.</p>`
    },
    {
      tip: "final",
      konu: 9,
      soru: `<p>\\( X\\sim N(0,1) \\) ve \\( Y=X^2 \\). (a) \\( E[Y] \\) ve \\( \\operatorname{Var}(Y) \\)'yi LOTUS ile bulun (\\( E[X^4]=3 \\)). (b) \\( f_Y(y) \\)'yi türetin. (c) \\( Y=2X+3 \\) için \\( f_Y \\)'yi yazın.</p>`,
      cozum: `
        <p>(a) \\( E[Y]=E[X^2]=1 \\); \\( \\operatorname{Var}(Y)=E[X^4]-1=2 \\).</p>
        <p>(b) CDF yöntemi: \\( F_Y(y)=P(-\\sqrt y\\le X\\le\\sqrt y)=2\\Phi(\\sqrt y)-1 \\); türev:</p>
        \\[ f_Y(y)=\\frac{2\\,\\phi(\\sqrt y)}{2\\sqrt y}=\\frac{1}{\\sqrt{2\\pi y}}e^{-y/2},\\quad y&gt;0 \\]
        <p>— ki-kare(1) dağılımı; \\( y\\to0 \\)'da ıraksar, integrali yine 1'dir.</p>
        <p>(c) \\( f_Y(y)=\\dfrac12f_X\\!\\big(\\tfrac{y-3}{2}\\big)=\\dfrac{1}{2\\sqrt{2\\pi}}e^{-(y-3)^2/8} \\) → \\( N(3,4) \\).</p>`
    },
    {
      tip: "final",
      konu: 10,
      soru: `<p>\\( f_{X,Y}(x,y)=c \\), \\( 0&lt;x&lt;y&lt;1 \\) üçgen bölgesinde (dışında 0). (a) c, (b) marjinaller \\( f_X,f_Y \\), (c) X ve Y bağımsız mı, (d) \\( f_{Y\\mid X}(y\\mid x) \\) ve \\( E[Y\\mid X=x] \\), (e) \\( P(X+Y&lt;1) \\).</p>`,
      cozum: `
        <p>(a) Üçgenin alanı 1/2 ⟹ \\( c=2 \\).</p>
        <p>(b) \\( f_X(x)=\\int_x^12\\,dy=2(1-x),\\;0&lt;x&lt;1 \\); \\( f_Y(y)=\\int_0^y2\\,dx=2y,\\;0&lt;y&lt;1 \\).</p>
        <p>(c) \\( f_Xf_Y=4y(1-x)\\ne2 \\) → <b>bağımlı</b> (destek dikdörtgen değil: X&lt;Y kısıtı bağlar).</p>
        <p>(d) \\( f_{Y\\mid X}=\\dfrac{2}{2(1-x)}=\\dfrac{1}{1-x} \\), \\( x&lt;y&lt;1 \\) → Y | X=x, \\( U(x,1) \\); \\( E[Y\\mid X=x]=\\dfrac{1+x}{2} \\).</p>
        <p>(e) Bölge: \\( x&lt;y \\), \\( x+y&lt;1 \\), \\( y&lt;1 \\) → \\( x\\in(0,\\tfrac12) \\), \\( y\\in(x,1-x) \\): \\( \\int_0^{1/2}2(1-2x)dx=2\\big[x-x^2\\big]_0^{1/2}=\\tfrac12 \\).</p>`
    },
    {
      tip: "final",
      konu: 11,
      soru: `<p>\\( \\operatorname{Var}(X)=4 \\), \\( \\operatorname{Var}(Y)=9 \\), \\( \\operatorname{Cov}(X,Y)=3 \\). (a) korelasyon katsayısı, (b) \\( \\operatorname{Var}(X+Y) \\) ve \\( \\operatorname{Var}(X-Y) \\), (c) \\( \\operatorname{Cov}(2X+1,\\,3Y-2) \\)?</p>`,
      cozum: `
        <p>(a) \\( \\rho=\\dfrac{3}{2\\cdot3}=0.5 \\).</p>
        <p>(b) \\( \\operatorname{Var}(X+Y)=4+9+2(3)=19 \\); \\( \\operatorname{Var}(X-Y)=4+9-2(3)=7 \\) — pozitif ilişkili değişkenlerin farkı daha az dalgalanır.</p>
        <p>(c) Sabitler düşer, katsayılar çarpılır: \\( 2\\cdot3\\cdot\\operatorname{Cov}(X,Y)=18 \\).</p>`
    },
    {
      tip: "final",
      konu: 12,
      soru: `<p>Bir sensör \\( X=Y+N \\) ölçüyor; \\( Y \\) (gerçek değer) ve \\( N \\) (gürültü) bağımsız, sıfır ortalamalı, \\( \\sigma_Y^2=4 \\), \\( \\sigma_N^2=1 \\). (a) \\( \\operatorname{Cov}(X,Y) \\) ve \\( \\rho_{XY} \\), (b) doğrusal MMSE tahminci \\( \\hat Y=aX \\) ve en küçük hata, (c) \\( X=3 \\) ölçüldüğünde tahmin nedir? Ham ölçümü kullanmaya göre hata ne kadar azaldı?</p>`,
      cozum: `
        <p>(a) \\( \\operatorname{Cov}(X,Y)=\\operatorname{Cov}(Y+N,Y)=\\sigma_Y^2=4 \\); \\( \\sigma_X^2=5 \\); \\( \\rho=\\dfrac{4}{\\sqrt5\\cdot2}=0.894 \\).</p>
        <p>(b) \\( a=\\dfrac{\\operatorname{Cov}(X,Y)}{\\sigma_X^2}=\\dfrac45=0.8 \\) ⟹ \\( \\hat Y=0.8X \\); \\( e_{min}=\\sigma_Y^2(1-\\rho^2)=4(1-0.8)=0.8 \\).</p>
        <p>(c) \\( \\hat Y=2.4 \\). Ham ölçüm (\\( \\hat Y=X \\)) hatası \\( E[N^2]=1 \\); MMSE 0.8 → %20 azalma. Gürültü büyüdükçe a küçülür (tahmin sıfıra çekilir).</p>`
    },
    {
      tip: "final",
      konu: 13,
      soru: `<p>\\( X \\) ve \\( Y \\) bağımsız, \\( U(0,1) \\). \\( Z=X+Y \\)'nin PDF'sini konvolüsyonla bulun; \\( E[Z] \\) ve \\( \\operatorname{Var}(Z) \\)'yi yazın. \\( P(Z&gt;1.5) \\) nedir?</p>`,
      cozum: `
        <p>\\( f_Z(z)=\\int f_X(x)f_Y(z-x)dx \\); integrand yalnızca \\( 0&lt;x&lt;1 \\) ve \\( 0&lt;z-x&lt;1 \\) iken 1:</p>
        \\[ f_Z(z)=\\begin{cases}z,&0\\le z\\le1\\\\2-z,&1\\le z\\le2\\\\0,&\\text{diğer}\\end{cases} \\]
        <p>— <b>üçgen</b> dağılım (iki dikdörtgenin konvolüsyonu). \\( E[Z]=1 \\), \\( \\operatorname{Var}=2\\cdot\\frac1{12}=\\frac16 \\).</p>
        <p>\\( P(Z&gt;1.5)=\\int_{1.5}^2(2-z)dz=\\tfrac12(0.5)^2=0.125 \\).</p>`
    },
    {
      tip: "final",
      konu: 14,
      soru: `<p>\\( X\\sim\\text{Poisson}(\\lambda) \\) için MGF'yi türetin; ondan \\( E[X] \\) ve \\( \\operatorname{Var}(X) \\)'i bulun. Bağımsız \\( X_1\\sim\\text{Poisson}(2) \\), \\( X_2\\sim\\text{Poisson}(3) \\) toplamının dağılımını MGF ile belirleyin.</p>`,
      cozum: `
        \\[ M(t)=\\sum_{k=0}^\\infty e^{tk}\\frac{\\lambda^ke^{-\\lambda}}{k!}=e^{-\\lambda}\\sum_k\\frac{(\\lambda e^t)^k}{k!}=e^{-\\lambda}e^{\\lambda e^t}=e^{\\lambda(e^t-1)} \\]
        <p>\\( M'(t)=\\lambda e^tM(t)\\Rightarrow E[X]=M'(0)=\\lambda \\). \\( M''(t)=(\\lambda e^t+\\lambda^2e^{2t})M(t)\\Rightarrow E[X^2]=\\lambda+\\lambda^2 \\), \\( \\operatorname{Var}=\\lambda \\).</p>
        <p>Toplam: \\( M_{X_1+X_2}=e^{2(e^t-1)}e^{3(e^t-1)}=e^{5(e^t-1)} \\) → teklikten <b>Poisson(5)</b>.</p>`
    },
    {
      tip: "final",
      konu: 15,
      soru: `<p>Ortalaması 5, varyansı 4 olan bağımsız 100 ölçümün örnek ortalaması \\( \\overline{X} \\). (a) \\( P(\\overline{X}&gt;5.2) \\) yaklaşık kaçtır? (\\( \\Phi(1)=0.8413 \\)) (b) %95 güvenle \\( |\\overline X-5|&lt;0.2 \\) olması için kaç ölçüm gerekir? (c) Chebyshev aynı olasılığa hangi sınırı verir?</p>`,
      cozum: `
        <p>(a) MLT: \\( \\overline{X}\\approx N(5,\\;4/100) \\), standart hata 0.2; \\( Z=1\\Rightarrow P=1-\\Phi(1)=0.1587 \\).</p>
        <p>(b) \\( 1.96\\cdot\\dfrac{2}{\\sqrt n}\\le0.2\\Rightarrow\\sqrt n\\ge19.6\\Rightarrow n\\ge385 \\).</p>
        <p>(c) n=100 için \\( P(|\\overline X-5|\\ge0.2)\\le\\dfrac{\\sigma^2/n}{0.2^2}=\\dfrac{0.04}{0.04}=1 \\) — Chebyshev burada hiçbir şey söylemez;
        MLT ise \\( 2(0.1587)=0.32 \\) verir. Dağılım bilgisi (Gauss) sınırı çok sıkılaştırır.</p>`
    },
    {
      tip: "final",
      konu: 7,
      soru: `<p>\\( X\\sim U(2,8) \\). \\( E[X] \\), \\( \\operatorname{Var}(X) \\) ve \\( P(3\\le X\\le 5) \\) nedir? Bu değişken 1 V adımlı bir kuantalayıcıya girse kuantalama hatasının varyansı ne olur?</p>`,
      cozum: `
        <p>\\( E[X]=\\dfrac{2+8}{2}=5 \\), \\( \\operatorname{Var}(X)=\\dfrac{(8-2)^2}{12}=3 \\). Yoğunluk \\( 1/6 \\): \\( P(3\\le X\\le5)=\\dfrac{2}{6}=\\dfrac13 \\).</p>
        <p>Kuantalama hatası \\( U(-0.5,0.5) \\) → varyans \\( \\Delta^2/12=1/12\\approx0.083\\,\\text{V}^2 \\) — SNR \\( =3/(1/12)=36 \\) → 15.6 dB.</p>`
    },
    {
      tip: "final",
      konu: 8,
      soru: `<p>Ortalaması \\( \\mu \\), sapması \\( \\sigma \\) olan herhangi bir dağılımda, değerin ortalamadan \\( 2\\sigma \\)'dan fazla sapma olasılığına Chebyshev üst sınırı nedir? Gauss için gerçek değer? Yalnızca \\( X\\ge0 \\) ve \\( E[X]=\\mu \\) bilinseydi \\( P(X\\ge3\\mu) \\) için ne söylenebilirdi?</p>`,
      cozum: `
        \\[ P(|X-\\mu|\\ge 2\\sigma)\\le\\frac{1}{4}=0.25 \\]
        <p>Gauss'ta gerçek değer \\( 2(1-\\Phi(2))=0.0456 \\) — Chebyshev gevşek ama evrenseldir.</p>
        <p>Markov: \\( P(X\\ge3\\mu)\\le\\dfrac{\\mu}{3\\mu}=\\dfrac13 \\). Varyans bile bilinmeden geçerli, daha da gevşek.</p>`
    },
    {
      tip: "final",
      konu: 16,
      soru: `<p>WSS bir sürecin otokorelasyonu \\( R_X(\\tau)=4e^{-2|\\tau|}+9 \\). (a) Ortalama güç, DC gücü ve ortalama \\( \\mu_X \\), (b) AC (dalgalanma) gücü, (c) PSD \\( S_X(f) \\), (d) süreç kesimi 1 Hz olan ideal LPF'den geçerse DC bileşene ne olur?</p>`,
      cozum: `
        <p>(a) \\( P=R_X(0)=13 \\). \\( \\tau\\to\\infty \\): \\( R_X\\to9=\\mu_X^2 \\) ⟹ \\( \\mu_X=\\pm3 \\), DC gücü 9.</p>
        <p>(b) Varyans \\( =R_X(0)-\\mu^2=4 \\).</p>
        <p>(c) \\( \\mathcal F\\{4e^{-2|\\tau|}\\}=\\dfrac{4\\cdot4}{4+(2\\pi f)^2}=\\dfrac{16}{4+4\\pi^2f^2} \\); sabit 9 → \\( 9\\delta(f) \\):
        \\( S_X(f)=\\dfrac{16}{4+4\\pi^2f^2}+9\\delta(f) \\).</p>
        <p>(d) DC (\\( f=0 \\)) geçirme bandında → \\( 9\\delta(f) \\) aynen geçer; sürekli kısmın yalnızca \\( |f|&lt;1 \\) parçası kalır, AC gücü azalır.</p>`
    },

    {
      tip: "final",
      konu: 17,
      soru: `<p>Bir sunucuya istekler \\( \\lambda=4 \\) istek/dakika oranlı Poisson süreciyle geliyor.
        (a) 30 saniyede hiç istek gelmeme olasılığı? (b) Ardışık iki istek arasındaki ortalama süre?
        (c) Son istekten bu yana 2 dakika geçti; bir sonraki isteğin 15 saniye içinde gelme olasılığı?
        (d) İsteklerin %25'i yazma işlemi ise, yazma istekleri hangi süreci oluşturur?</p>`,
      cozum: `<p><b>(a)</b> \\( \\tau=0.5 \\) dk \\( \\Rightarrow \\lambda\\tau=2 \\).
        \\( P\\{N=0\\}=e^{-2}=0.135 \\).</p>
        <p><b>(b)</b> \\( E[T]=1/\\lambda=0.25 \\) dk \\( =15 \\) saniye.</p>
        <p><b>(c)</b> Hafızasızlık gereği geçen 2 dakika <b>hiçbir şey değiştirmez</b>:
        \\( P\\{T\\le0.25\\}=1-e^{-4\\cdot0.25}=1-e^{-1}=0.632 \\).
        Sık yapılan hata, "2 dakika bekledik, artık gelmesi daha olası" diye koşullu olasılığı
        büyütmeye çalışmaktır.</p>
        <p><b>(d)</b> Bağımsız seyreltme: yazma istekleri \\( \\lambda_A=0.25\\cdot4=1 \\) istek/dakika
        oranlı bir Poisson sürecidir ve okuma sürecinden (3 istek/dk) <b>bağımsızdır</b>.</p>`
    },
    {
      tip: "final",
      konu: 17,
      soru: `<p>Bir cihazın arıza oranı \\( \\lambda=1/2000 \\) saat\\(^{-1}\\) sabit.
        (a) MTBF nedir? (b) 1000 saat arızasız çalışma olasılığı? (c) Cihaz zaten 3000 saat çalışmışsa
        1000 saat daha dayanma olasılığı? (d) Yedekli olarak 3 cihazın <b>sırayla</b> devreye girdiği
        bir sistemde toplam ömrün dağılımı ve ortalaması nedir?</p>`,
      cozum: `<p><b>(a)</b> \\( \\text{MTBF}=1/\\lambda=2000 \\) saat.</p>
        <p><b>(b)</b> \\( R(1000)=e^{-1000/2000}=e^{-0.5}=0.607 \\).</p>
        <p><b>(c)</b> Hafızasızlık: \\( P\\{T>4000\\mid T>3000\\}=P\\{T>1000\\}=0.607 \\).
        Sabit arıza oranı varsayımı, cihazın <b>yıpranmadığını</b> söyler. Gerçek donanımda küvet
        eğrisinin yalnız düz orta bölümü için geçerlidir; yıpranma bölgesi Weibull ile modellenir.</p>
        <p><b>(d)</b> Üç bağımsız üstelin toplamı \\( n=3 \\), \\( \\lambda=1/2000 \\) parametreli
        <b>Erlang</b> dağılımıdır: \\( f(t)=\\dfrac{\\lambda^{3}t^{2}e^{-\\lambda t}}{2} \\).
        Ortalama \\( n/\\lambda=3\\cdot2000=6000 \\) saat, varyans \\( n/\\lambda^{2} \\).</p>`
    },

    {
      tip: "vize",
      konu: 0,
      soru: `<p>Bir zar iki kez atılıyor. \\( A \\): "ilk atış çift", \\( B \\): "toplam 7".
        (a) Örnek uzayın eleman sayısı ve \\( P(A) \\), \\( P(B) \\) nedir?
        (b) \\( P(A\\cup B) \\) nedir? (c) \\( A \\) ile \\( B \\) bağımsız mıdır, ayrık mıdır?
        (d) Aksiyomlardan \\( P(A^{c})=1-P(A) \\) olduğunu gösterin.</p>`,
      cozum: `<p><b>(a)</b> \\( |S|=36 \\). \\( A \\): ilk atış 2,4,6 → \\( 3\\cdot6=18 \\) sonuç,
        \\( P(A)=1/2 \\). \\( B \\): (1,6),(2,5),(3,4),(4,3),(5,2),(6,1) → 6 sonuç, \\( P(B)=1/6 \\).</p>
        <p><b>(b)</b> \\( A\\cap B \\): ilk atış çift <b>ve</b> toplam 7 → (2,5),(4,3),(6,1) → 3 sonuç,
        \\( P(A\\cap B)=3/36=1/12 \\).
        \\( P(A\\cup B)=\\tfrac12+\\tfrac16-\\tfrac1{12}=\\tfrac{6+2-1}{12}=\\tfrac{7}{12} \\).</p>
        <p><b>(c)</b> \\( P(A)P(B)=\\tfrac12\\cdot\\tfrac16=\\tfrac1{12}=P(A\\cap B) \\): <b>bağımsızdırlar</b>.
        Ayrık <b>değildirler</b>, çünkü \\( A\\cap B\\ne\\varnothing \\). Dikkat: bağımsızlık ile ayrıklık
        birbirinin zıddı gibidir — olasılığı sıfırdan farklı iki ayrık olay asla bağımsız olamaz.</p>
        <p><b>(d)</b> \\( A\\cup A^{c}=S \\) ve \\( A\\cap A^{c}=\\varnothing \\).
        Üçüncü aksiyom (ayrık olaylar için toplanabilirlik):
        \\( P(S)=P(A)+P(A^{c}) \\). İkinci aksiyom \\( P(S)=1 \\) der.
        Buradan \\( P(A^{c})=1-P(A) \\). \\( \\square \\)</p>`
    },
    {
      tip: "vize",
      konu: 4,
      soru: `<p>Ayrık bir rastgele değişkenin PMF'si \\( p_X(k)=c/2^{k} \\), \\( k=1,2,3,\\dots \\)
        (a) \\( c \\)'yi bulun. (b) CDF \\( F_X(x) \\)'i yazın ve \\( F_X(2.5) \\)'i bulun.
        (c) \\( P(X\\ \\text{çift}) \\) nedir? (d) PMF ile PDF arasındaki temel farkı bir cümleyle yazın.</p>`,
      cozum: `<p><b>(a)</b> \\( \\sum_{k=1}^{\\infty}c/2^{k}=c\\cdot\\dfrac{1/2}{1-1/2}=c=1 \\).
        Yani \\( c=1 \\) ve \\( p_X(k)=2^{-k} \\) (parametresi 1/2 olan geometrik dağılım).</p>
        <p><b>(b)</b> \\( F_X(x)=\\sum_{k\\le x}2^{-k}=1-2^{-\\lfloor x\\rfloor} \\) (\\( x\\ge1 \\) için).
        \\( F_X(2.5)=1-2^{-2}=0.75 \\). CDF ayrık değişkende <b>basamak fonksiyonudur</b>: her
        \\( k \\)'de \\( p_X(k) \\) kadar sıçrar, aralarda sabittir ve sağdan süreklidir.</p>
        <p><b>(c)</b> \\( P(\\text{çift})=\\sum_{m=1}^{\\infty}2^{-2m}=\\dfrac{1/4}{1-1/4}=\\dfrac{1}{3} \\).</p>
        <p><b>(d)</b> PMF bir <b>olasılığın kendisidir</b> (\\( p_X(k)=P(X=k) \\), değeri ≤ 1); PDF ise
        olasılık <b>yoğunluğudur</b> (\\( f_X(x) \\) 1'den büyük olabilir), olasılık ancak
        integrali alınınca çıkar ve sürekli değişkende \\( P(X=x)=0 \\)'dır.</p>`
    }
  ]
};
