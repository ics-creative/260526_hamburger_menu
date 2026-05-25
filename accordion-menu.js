// アコーディオンメニュー開閉
// Accordion menu open-close
const accordionMenu = document.getElementById("accordion");
const accordionOpen = document.getElementById("accordion-open");
const accordionClose = document.getElementById("accordion-close");

accordionOpen.addEventListener("click", () => {
  accordionMenu.showModal();
});

accordionClose.addEventListener("click", () => {
  accordionMenu.close();
});

// backdropクリック時クローズ
// Backdrop click-close
accordionMenu.addEventListener("click", (event) => {
  if (event.target === accordionMenu) {
    accordionMenu.close();
  }
});

// メニュー内リンク全件へのクリック処理登録
// Click handler binding for every menu link
for (const link of accordionMenu.querySelectorAll("a[href]")) {
  link.addEventListener("click", () => {
    accordionMenu.close();
  });
}
