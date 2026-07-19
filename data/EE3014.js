/* ============================================================
   EE3014 — Energy Conversion
   ------------------------------------------------------------
   Bu dosya SADECE bu derse aittir. İçerik eklemek için burayı düzenle.
   Alan açıklamaları için data/EE3061.js başlığına bak.
   ============================================================ */

window.DERSLER = window.DERSLER || {};

window.DERSLER["EE3014"] = {
  ad: "Energy Conversion",
  donem: "3. Sınıf · 1. Dönem",
  renk: "#A78BFA",
  ozet: "Manyetik devreler, transformatörler, elektromekanik enerji dönüşümü, DC makineler ve AC makine temelleri.",
  konular: [
    {
      baslik: "1. Manyetik Devreler ve Malzemeler",
      icerik: `
        <p>Manyetik devrelerde elektrik devresine benzer bağıntılar kullanılır.
        Manyetomotor kuvvet \\( \\mathcal{F}=NI \\), relüktans \\( \\mathcal{R}=\\dfrac{l}{\\mu A} \\):</p>
        \\[ \\phi = \\frac{\\mathcal{F}}{\\mathcal{R}} = \\frac{NI}{l/(\\mu A)} \\]`
    },
    {
      baslik: "2. İdeal ve Pratik Transformatörler",
      icerik: `
        <p>İdeal transformatörde gerilim ve akım, sarım oranı \\( a=N_1/N_2 \\) ile ölçeklenir:</p>
        \\[ \\frac{V_1}{V_2}=\\frac{N_1}{N_2}=a, \\qquad \\frac{I_1}{I_2}=\\frac{N_2}{N_1} \\]
        <p>Pratik modelde sargı dirençleri, kaçak reaktansları ve çekirdek kayıpları eklenir.</p>`
    },
    {
      baslik: "3. Elektromekanik Enerji Dönüşümü",
      icerik: `<p>Enerji dengesi: elektriksel giriş = mekanik çıkış + depolanan alan enerjisi + kayıplar.
        Kuvvet/moment, koenerjinin konuma göre türevinden bulunur.</p>`
    },
    {
      baslik: "4. DC Makineler (Motor & Jeneratör)",
      icerik: `
        <p>Zıt emk \\( E_a=K\\phi\\omega \\), moment \\( T=K\\phi I_a \\). Terminal denklemi:</p>
        \\[ V_t = E_a + I_a R_a \\]`
    },
    {
      baslik: "5. 3 Fazlı Sistemler ve AC Makineler",
      icerik: `<p>Dengeli 3 fazda \\( V_{hat}=\\sqrt{3}\\,V_{faz} \\). Döner manyetik alan, senkron hız
        \\( n_s = \\dfrac{120 f}{p} \\) ile döner; asenkron makinede kayma \\( s \\) tanımlanır.</p>`
    }
  ],
  formuller: [
    { ad: "Manyetik Akı", formul: `\\( \\phi=\\dfrac{NI}{l/(\\mu A)} \\)`, aciklama: "Manyetik devrede akı = mmk / relüktans." },
    { ad: "Transformatör Oranı", formul: `\\( \\dfrac{V_1}{V_2}=\\dfrac{N_1}{N_2}=a \\)`, aciklama: "İdeal transformatör gerilim oranı." },
    { ad: "DC Zıt EMK", formul: `\\( E_a=K\\phi\\omega \\)`, aciklama: "Dönen DC makinede üretilen emk." },
    { ad: "Senkron Hız", formul: `\\( n_s=\\dfrac{120f}{p} \\)`, aciklama: "AC makinede döner alan hızı (d/dk)." },
    { ad: "DC Terminal Denklemi", formul: `\\( V_t=E_a+I_aR_a \\)`, aciklama: "Motor terminal gerilimi." }
  ],
  galeri: [],
  dokumanlar: [],
  videolar: [
    { baslik: "Electrical Machines (Tam Kurs Playlist)", playlist: "PLuUdFsbOK_8qVROrfl2M2WSV2xAz-ABVU" }
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
    }
  ]
};
