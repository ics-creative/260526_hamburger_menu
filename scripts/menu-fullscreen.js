// フルスクリーンメニュー開閉
// Full-screen menu open-close
const menu = document.querySelector("#menu");
const buttonOpen = document.querySelector("#fullscreen-open");
const buttonClose = document.querySelector("#fullscreen-close");

buttonOpen.addEventListener("click", () => {
  menu.showModal();
});

buttonClose.addEventListener("click", () => {
  menu.close();
});

// backdropクリック時クローズ
// Backdrop click-close
menu.addEventListener("click", (event) => {
  // クリック対象がdialog本体ならbackdropクリック扱い
  // Treat a click on the dialog element itself as a backdrop click
  if (event.target === menu) {
    menu.close();
  }
});

// メニュー内リンク全件へのクリック処理登録
// Click handler binding for every menu link
for (const link of menu.querySelectorAll("a[href]")) {
  link.addEventListener("click", () => {
    menu.close();
  });
}
