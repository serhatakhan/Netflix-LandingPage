const btnLang = document.querySelector(".btn-lang");
const btnSecret = document.querySelector(".btn-secret");

btnLang.addEventListener("click", () => {
  btnSecret.classList.toggle("hide-lang");
});

// Sayfanın herhangi bir yerine tıklanınca olay dinleyicisi ekle
document.addEventListener("click", (e) => {
  const targetElement = e.target;

  // Eğer tıklanan öğe btnLang veya btnSecret içeriyorsa işlem yapma
  if (
    targetElement.closest(".btn-lang") ||
    targetElement.closest(".btn-secret")
  ) {
    return;
  }
  /*
    Burada, tıklanan öğe (targetElement), closest fonksiyonu kullanılarak kontrol 
    ediliyor. Eğer tıklanan öğe .btn-lang veya .btn-secret sınıfını içeriyorsa, 
    fonksiyonun geri kalan kısmını çalıştırmıyor ve sadece return ifadesiyle 
    sona eriyor. Yani, eğer tıklanan öğe bu butonları içeriyorsa, herhangi bir 
    işlem yapılmıyor ve fonksiyonun çağrıldığı yere geri dönülüyor.
    */

  // Aksi takdirde, btnSecret'ı gizle
  btnSecret.classList.add("hide-lang");
});

// accordion
document.addEventListener("DOMContentLoaded", function () {
  // tüm accerdion item'leri yakalayıp bu değişkene attık
  const accordionItems = document.querySelectorAll(".accordion-item");

  accordionItems.forEach(function (item) {
    // bu itemlerden classı accordion-header olanları yakala ve header değişkenine ata.
    const header = item.querySelector(".accordion-header");
    const content = item.querySelector(".accordion-content");
    const btn = header.querySelector(".accordion-btn");

    header.addEventListener("click", function () {
      // normalde show classı display none yapıyor ama headere tıklanınca display none olan clas kalkacak
      content.classList.toggle("show");
      // btn'nin text'i show classı geldiğinde x olsun. show classı yoksa + olsun
      btn.textContent = content.classList.contains("show") ? "x" : "+";

      // Diğer açık accordion'ları kapat
      accordionItems.forEach(function (otherItem) {
        if (
          otherItem !== item &&
          otherItem
            .querySelector(".accordion-content")
            .classList.contains("show")
        ) {
          otherItem
            .querySelector(".accordion-content")
            .classList.remove("show");
          otherItem.querySelector(".accordion-btn").textContent = "+";
        }
      });
    });
  });
});
