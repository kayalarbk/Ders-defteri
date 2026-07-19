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
        <p>BJT ve MOSFET'lerin yüksek frekanstaki davranışı, gövde (jonksiyon) kapasitanslarıyla
        modellenir (hibrit-\\( \\pi \\) modeli): BJT'de \\( C_\\pi \\) ve \\( C_\\mu \\).
        Transkondüktans \\( g_m=I_C/V_T \\) (MOS'ta \\( g_m=2I_D/V_{ov} \\)).</p>
        <p><b>Geçiş frekansı \\( f_T \\)</b>, akım kazancının birime düştüğü frekanstır ve transistörün
        hız ölçüsüdür:</p>
        \\[ f_T = \\frac{g_m}{2\\pi (C_\\pi + C_\\mu)} \\]`
    },
    {
      baslik: "2. Miller Etkisi",
      icerik: `
        <p>Giriş ile çıkış arasına bağlı \\( C_\\mu \\), kazançla çarpılarak girişte çok daha büyük
        görünür — bant genişliğini sınırlayan başlıca etkendir:</p>
        \\[ C_{M}=C_\\mu\\,(1+|A_v|) \\]
        <p>Bu yüzden yüksek kazançlı ortak-emiter/ortak-kaynak katlarında yüksek frekans yanıtı düşer.
        <b>Kaskod</b> yapısı Miller etkisini bastırarak bant genişliğini artırır (ortak-beyz/geyt katı
        \\( A_v\\approx-1 \\) görür).</p>`
    },
    {
      baslik: "3. Frekans Yanıtı: Alçak Frekans",
      icerik: `
        <p>Alçak frekansta kazancı <b>kuplaj</b> ve <b>baypas</b> kapasitörleri sınırlar; büyük
        empedansları düşük frekansta sinyali zayıflatır. Her kapasitör bir alçak-frekans kutbu
        (yüksek-geçiren köşe) oluşturur:</p>
        \\[ f_L=\\frac{1}{2\\pi R C} \\]
        <p>Baskın (en yüksek) alçak-frekans kutbu, alt kesim frekansını \\( f_L \\)'yi belirler.
        Bode diyagramında kazanç bu köşeye kadar 20 dB/dekad artar.</p>`
    },
    {
      baslik: "4. Frekans Yanıtı: Yüksek Frekans ve Baskın Kutup",
      icerik: `
        <p>Yüksek frekansta gövde kapasitansları kazancı düşürür; üst kesim \\( f_H \\) oluşur.
        Bir kapasitör baskınsa <b>baskın kutup yaklaşımı</b> kullanılır:</p>
        \\[ f_H\\approx\\frac{1}{2\\pi R_{eş}C_{eş}} \\]
        <p>Orta bant kazancı \\( A_M \\) ile bant genişliği arasında değiş-tokuş vardır:
        <b>Kazanç–Bant Genişliği Çarpımı (GBW)</b> yaklaşık sabittir.</p>
        \\[ \\text{GBW}=A_M\\cdot f_H \\approx \\text{sabit} \\]`
    },
    {
      baslik: "5. Çok Katlı Kuvvetlendiriciler (Multistage)",
      icerik: `
        <p>Katların ardışık bağlanmasıyla toplam kazanç <b>çarpılır</b>:
        \\( A=A_1 A_2\\cdots A_n \\) (dB'de toplanır).
        Giriş/çıkış empedansı eşleştirmesi ve <b>katlar arası yükleme etkisi</b> tasarımın temelidir.</p>
        <ul>
          <li><b>Kaskad:</b> yüksek toplam kazanç.</li>
          <li><b>Kaskod (CE–CB / CS–CG):</b> yüksek bant genişliği + yüksek çıkış direnci.</li>
          <li><b>Darlington:</b> çok yüksek akım kazancı.</li>
          <li><b>CC (emiter izleyici):</b> tampon; empedans dönüştürür.</li>
        </ul>`
    },
    {
      baslik: "6. Fark Kuvvetlendiricisi (Diferansiyel)",
      icerik: `
        <p>İki simetrik transistör ve ortak bir akım kaynağından oluşur; op-amp'ların giriş katıdır.
        Fark sinyalini yükseltir, ortak (gürültü) sinyalini bastırır:</p>
        \\[ v_o=A_d(v_1-v_2)+A_{cm}\\frac{v_1+v_2}{2} \\]
        <p>Kalite ölçüsü <b>Ortak Mod Bastırma Oranı (CMRR)</b>:</p>
        \\[ \\mathrm{CMRR}=\\left|\\frac{A_d}{A_{cm}}\\right| \\quad(\\text{dB}=20\\log\\mathrm{CMRR}) \\]
        <p>Kuyruk akım kaynağının çıkış direnci ne kadar yüksekse \\( A_{cm} \\) o kadar küçük, CMRR o kadar iyi olur.</p>`
    },
    {
      baslik: "7. Akım Aynaları ve Aktif Yükler",
      icerik: `
        <p><b>Akım aynası</b> bir referans akımı kopyalar; entegre devrelerde polarlama (biasing) ve
        <b>aktif yük</b> olarak kullanılır. Basit aynada \\( I_{çıkış}\\approx I_{ref} \\)
        (eşleşmiş transistörler).</p>
        <p>Aktif yük, yüksek küçük-sinyal çıkış direnci (\\( r_o \\)) sunarak tek katta çok yüksek
        kazanç sağlar (\\( A_v=g_m(r_{o1}\\|r_{o2}) \\)) — dirençli yükle bu mümkün değildir.
        Wilson/kaskod aynalar çıkış direncini daha da artırır.</p>`
    },
    {
      baslik: "8. Geri Besleme (Feedback) Topolojileri",
      icerik: `
        <p>Negatif geri besleme kazancı kararlı kılar, bozulmayı azaltır ve bant genişliğini artırır.
        Kapalı çevrim kazancı:</p>
        \\[ A_f = \\frac{A}{1 + A\\beta} \\]
        <p>Bedeli kazançtır: \\( A_f \\) düşer ama \\( (1+A\\beta) \\) çarpanı kadar duyarsızlaşır.
        Aynı çarpan bant genişliğini genişletir: \\( f_{H,f}=f_H(1+A\\beta) \\).</p>
        <p>Dört topoloji, örneklenen ve karşılaştırılan büyüklüğe göre giriş/çıkış empedansını farklı
        etkiler: <b>seri-şönt</b> (gerilim amp), <b>şönt-seri</b> (akım amp), <b>seri-seri</b>
        (transkondüktans), <b>şönt-şönt</b> (transrezistans).</p>`
    },
    {
      baslik: "9. Geri Beslemede Kararlılık ve Kompanzasyon",
      icerik: `
        <p>Çok kutuplu bir sistemde geri besleme, yüksek frekansta ek faz kaybına yol açar.
        \\( |A\\beta|=1 \\) noktasında toplam faz \\( -180° \\)'ye ulaşırsa geri besleme pozitife döner ve
        sistem <b>osilasyona</b> geçer.</p>
        <p>Kararlılık ölçüleri: <b>faz payı</b> (phase margin) ve <b>kazanç payı</b> (gain margin).
        Genelde ≥45° faz payı hedeflenir.</p>
        <p><b>Kompanzasyon:</b> baskın kutup ekleyerek (örn. Miller kapasitörü) kazanç, faz döndürmeden
        önce birime iner; op-amp'ların içindeki kompanzasyon kapasitörü bu işi yapar.</p>`
    },
    {
      baslik: "10. Osilatörler",
      icerik: `
        <p>Osilatör, giriş sinyali olmadan periyodik çıkış üretir. <b>Barkhausen kriteri</b> osilasyon koşuludur:</p>
        \\[ |A\\beta|=1, \\qquad \\angle A\\beta=0° \\;(\\text{veya } 360°) \\]
        <p>Yani çevrim kazancı birim genlikte ve toplam faz sıfır olmalıdır. Türler:</p>
        <ul>
          <li><b>RC:</b> Wien köprüsü \\( f=\\dfrac{1}{2\\pi RC} \\), faz kaydırmalı — ses frekansları.</li>
          <li><b>LC:</b> Colpitts, Hartley — RF; \\( f=\\dfrac{1}{2\\pi\\sqrt{LC}} \\).</li>
          <li><b>Kristal:</b> çok yüksek kararlılık ve doğruluk (saat/mikroişlemci).</li>
        </ul>`
    },
    {
      baslik: "11. Güç Kuvvetlendiricileri",
      icerik: `
        <p>Çıkış katı, yüke yüksek güç aktarır; verim ve ısı kritik olur. Çalışma noktasına göre sınıflar:</p>
        <ul>
          <li><b>A sınıfı:</b> tüm periyot iletir; en doğrusal ama düşük verim (\\( \\eta_{max}=\\%25 \\), tampon yükte %50).</li>
          <li><b>B sınıfı:</b> her transistör yarım periyot (push-pull); \\( \\eta_{max}=\\dfrac{\\pi}{4}\\approx\\%78.5 \\).
          Ama <b>geçiş bozulması</b> (crossover) oluşur.</li>
          <li><b>AB sınıfı:</b> küçük bir polarlama ile geçiş bozulmasını giderir; pratikte en yaygın ses katı.</li>
          <li><b>C sınıfı:</b> yarım periyottan az iletir; çok yüksek verim, yüksek bozulma → ayarlı RF vericileri.</li>
        </ul>`
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
    { ad: "B Sınıfı Verim", formul: `\\( \\eta_{max}=\\dfrac{\\pi}{4}\\approx\\%78.5 \\)`, aciklama: "İdeal push-pull maksimumu." }
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