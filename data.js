/* ============================================================
   DERS DEFTERİ — VERİ DOSYASI
   ------------------------------------------------------------
   BURASI SENİN KONTROL PANELİN.
   Yeni ders / konu / soru / video / dosya eklemek için
   SADECE bu dosyayı düzenle. HTML'e dokunma.

   Yapı:
   DERSLER = {
     "DERS_KODU": {
       ad, donem, renk, ozet,
       konular: [ { baslik, icerik(HTML) } ],
       galeri:  [ { src, baslik } ],
       dokumanlar: [ { ad, dosya, tur } ],
       videolar:[ { baslik, youtube } ],   // youtube = sadece video ID'si
       sorular: [ { soru(HTML), cozum(HTML), tip } ]  // tip: 'vize' | 'final'
     }
   }

   LaTeX yazmak için:  satır içi  \( ... \)   |   blok  \[ ... \]  veya  $$ ... $$
   ============================================================ */

const DERSLER = {

  /* ===================== EE3061 (ÖRNEK — DOLU) ===================== */
  "EE3061": {
    ad: "Sinyaller ve Sistemler",
    donem: "3. Sınıf · 1. Dönem",
    renk: "#4FD1C5",
    ozet: "Sürekli ve ayrık zaman sinyalleri, LTI sistemler, konvolüsyon ve Fourier dönüşümü.",

    konular: [
      {
        baslik: "1. Sinyallerin Temelleri",
        icerik: `
          <p>Bir <b>sinyal</b>, bir veya daha fazla bağımsız değişkenin fonksiyonu olarak
          bilgi taşıyan bir niceliktir. Sürekli zaman \\( x(t) \\) ve ayrık zaman
          \\( x[n] \\) olmak üzere iki temel sınıfı vardır.</p>
          <ul>
            <li><b>Periyodik sinyal:</b> \\( x(t) = x(t + T) \\) koşulunu sağlar.</li>
            <li><b>Tek/Çift bileşen:</b> Her sinyal tek ve çift bileşenlerine ayrılabilir.</li>
          </ul>`
      },
      {
        baslik: "2. LTI Sistemler ve Konvolüsyon",
        icerik: `
          <p>Doğrusal ve Zamanla Değişmeyen (LTI) sistemlerin çıkışı, giriş ile dürtü
          yanıtının konvolüsyonudur:</p>
          \\[ y(t) = x(t) * h(t) = \\int_{-\\infty}^{\\infty} x(\\tau)\\, h(t-\\tau)\\, d\\tau \\]
          <p>Bu işlem sistemin davranışını tamamen tanımlar.</p>`
      },
      {
        baslik: "3. Fourier Dönüşümü",
        icerik: `
          <p>Fourier dönüşümü, bir zaman sinyalini frekans bileşenlerine ayrıştırır.
          Sürekli zaman Fourier dönüşümü (CTFT) şöyle tanımlanır:</p>
          \\[ X(j\\omega) = \\int_{-\\infty}^{\\infty} x(t) e^{-j\\omega t} \\, dt \\]
          <p>Ters dönüşüm ise sinyali frekanstan zamana geri taşır:</p>
          \\[ x(t) = \\frac{1}{2\\pi} \\int_{-\\infty}^{\\infty} X(j\\omega) e^{j\\omega t} \\, d\\omega \\]`
      }
    ],

    galeri: [
      { src: "assets/img/ee3061-tahta1.jpg", baslik: "Konvolüsyon tahta çözümü" },
      { src: "assets/img/ee3061-spektrum.jpg", baslik: "Frekans spektrumu çizimi" },
      { src: "assets/img/ee3061-lab.jpg", baslik: "Lab — sinyal jeneratörü" }
    ],

    dokumanlar: [
      { ad: "Hafta 1-4 Ders Notları", dosya: "assets/pdf/ee3061-notlar.pdf", tur: "Not" },
      { ad: "Fourier Formül Özeti",   dosya: "assets/pdf/ee3061-formul.pdf", tur: "Özet" },
      { ad: "Geçmiş Yıl Vize",        dosya: "assets/pdf/ee3061-vize2023.pdf", tur: "Sınav" }
    ],

    videolar: [
      { baslik: "Konvolüsyon Sezgisi (3Blue1Brown)", youtube: "KuXjwB4LzSA" },
      { baslik: "Fourier Dönüşümü Nedir?",            youtube: "spUNpyF58BY" }
    ],

    sorular: [
      {
        tip: "vize",
        soru: `<p>\\( x(t) = e^{-2t}u(t) \\) sinyalinin Fourier dönüşümü \\( X(j\\omega) \\)
               nedir?</p>`,
        cozum: `
          <p>Tanımdan integral alınır:</p>
          \\[ X(j\\omega) = \\int_{0}^{\\infty} e^{-2t} e^{-j\\omega t} dt
             = \\int_{0}^{\\infty} e^{-(2+j\\omega)t} dt \\]
          \\[ = \\left[ \\frac{-1}{2+j\\omega} e^{-(2+j\\omega)t} \\right]_0^{\\infty}
             = \\frac{1}{2 + j\\omega} \\]
          <p><b>Sonuç:</b> \\( X(j\\omega) = \\dfrac{1}{2+j\\omega} \\)</p>`
      },
      {
        tip: "final",
        soru: `<p>Bir LTI sistemin dürtü yanıtı \\( h(t)=u(t)-u(t-2) \\) ise, sistem
               <b>kararlı (BIBO)</b> mıdır? Gösteriniz.</p>`,
        cozum: `
          <p>BIBO kararlılık için dürtü yanıtının mutlak integrali sonlu olmalıdır:</p>
          \\[ \\int_{-\\infty}^{\\infty} |h(t)|\\,dt = \\int_{0}^{2} 1 \\, dt = 2 < \\infty \\]
          <p>İntegral sonlu olduğundan sistem <b>kararlıdır</b>.</p>`
      }
    ]
  },

  /* ===================== DİĞER DERSLER (İSKELET — SEN DOLDUR) ===================== */
  "EE3012": {
    ad: "Elektromanyetik Alanlar",
    donem: "3. Sınıf · 1. Dönem",
    renk: "#F0A868",
    ozet: "Vektör analizi, elektrostatik, manyetostatik ve Maxwell denklemleri.",
    konular: [
      { baslik: "1. Giriş", icerik: `<p>Bu dersin içeriğini <code>data.js</code> içinden düzenleyebilirsin.</p>` }
    ],
    galeri: [], dokumanlar: [], videolar: [], sorular: []
  },

  "EE3014": {
    ad: "Kontrol Sistemleri",
    donem: "3. Sınıf · 1. Dönem",
    renk: "#A78BFA",
    ozet: "Transfer fonksiyonları, geri besleme, kararlılık ve PID denetleyiciler.",
    konular: [
      { baslik: "1. Giriş", icerik: `<p>İçerik yakında. <code>data.js</code> → EE3014 bloğunu düzenle.</p>` }
    ],
    galeri: [], dokumanlar: [], videolar: [], sorular: []
  },

  "EE3016": {
    ad: "Haberleşme Sistemleri",
    donem: "3. Sınıf · 1. Dönem",
    renk: "#60A5FA",
    ozet: "Modülasyon teknikleri, gürültü analizi ve sayısal haberleşmeye giriş.",
    konular: [
      { baslik: "1. Giriş", icerik: `<p>İçerik yakında. <code>data.js</code> → EE3016 bloğunu düzenle.</p>` }
    ],
    galeri: [], dokumanlar: [], videolar: [], sorular: []
  },

  "STAT2056": {
    ad: "Olasılık ve İstatistik",
    donem: "3. Sınıf · 1. Dönem",
    renk: "#F472B6",
    ozet: "Olasılık aksiyomları, rastgele değişkenler, dağılımlar ve hipotez testleri.",
    konular: [
      { baslik: "1. Giriş", icerik: `<p>İçerik yakında. <code>data.js</code> → STAT2056 bloğunu düzenle.</p>` }
    ],
    galeri: [], dokumanlar: [], videolar: [], sorular: []
  }

};

/* Ana sayfadaki kart sırası (istediğin gibi değiştir) */
const DERS_SIRASI = ["EE3061", "EE3012", "EE3014", "EE3016", "STAT2056"];
