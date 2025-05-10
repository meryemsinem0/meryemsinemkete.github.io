// Rastgele yemek önerisi
function yemekOner() {
  const yemekler = ["Izgara Köfte", "Tavuk Şiş", "Sebzeli Makarna", "Balık Tava", "Etli Nohut"];
  const secilen = yemekler[Math.floor(Math.random() * yemekler.length)];
  document.getElementById("yemek").innerText = "Bugünkü önerimiz: " + secilen;
}

// Form verilerini localStorage'a kaydet
if (document.getElementById("rezForm")) {
  document.getElementById("rezForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const ad = document.getElementById("ad").value;
    const tarih = document.getElementById("tarih").value;
    const kisi = document.getElementById("kisi").value;

    localStorage.setItem("ad", ad);
    localStorage.setItem("tarih", tarih);
    localStorage.setItem("kisi", kisi);

    window.location.href = "form-sonuc.html";
  });
}

// form-sonuc.html sayfasında verileri tabloya yaz
if (window.location.pathname.includes("form-sonuc.html")) {
  document.getElementById("tdAd").innerText = localStorage.getItem("ad");
  document.getElementById("tdTarih").innerText = localStorage.getItem("tarih");
  document.getElementById("tdKisi").innerText = localStorage.getItem("kisi");
}
// Sipariş formunu işle
if (document.getElementById("siparisForm")) {
  document.getElementById("siparisForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const ad = document.getElementById("ad").value;
    const yemek = document.getElementById("yemek").value;
    const adet = document.getElementById("adet").value;
    const not = document.getElementById("not").value;

    localStorage.setItem("siparisAd", ad);
    localStorage.setItem("siparisYemek", yemek);
    localStorage.setItem("siparisAdet", adet);
    localStorage.setItem("siparisNot", not);

    window.location.href = "siparis-sonuc.html";
  });
}

// Sipariş sonucu göster
if (window.location.pathname.includes("siparis-sonuc.html")) {
  document.getElementById("sonucAd").innerText = localStorage.getItem("siparisAd");
  document.getElementById("sonucYemek").innerText = localStorage.getItem("siparisYemek");
  document.getElementById("sonucAdet").innerText = localStorage.getItem("siparisAdet");
  document.getElementById("sonucNot").innerText = localStorage.getItem("siparisNot");
}
// Yorum ekleme formu işlemi
if (document.getElementById("yorumForm")) {
  document.getElementById("yorumForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const ad = document.getElementById("yorumAd").value.trim();
    const yorum = document.getElementById("yorumMetin").value.trim();

    if (ad && yorum) {
      const yeniYorum = document.createElement("blockquote");
      yeniYorum.innerHTML = `<p>"${yorum}"</p><cite>– ${ad}</cite>`;

      document.getElementById("yorumListesi").appendChild(yeniYorum);

      // Formu temizle
      document.getElementById("yorumForm").reset();
    }
  });
}
// Değerlendirme formunu işle
if (document.getElementById("puanForm")) {
  document.getElementById("puanForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const puan = document.querySelector('input[name="puan"]:checked').value;
    const yorum = document.getElementById("yorum").value.trim();

    let mesaj = `<p><strong>Değerlendirmeniz:</strong> ${puan}</p>`;
    if (yorum) {
      mesaj += `<p><strong>Yorumunuz:</strong> ${yorum}</p>`;
    }

    document.getElementById("sonuc").innerHTML = mesaj;
    document.getElementById("puanForm").reset();
  });
}
