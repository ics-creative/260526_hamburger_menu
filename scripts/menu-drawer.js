// ドロワーメニュー開閉
// Drawer menu open-close
const menu = document.querySelector("#drawer");
const buttonOpen = document.querySelector("#drawer-open");
const buttonClose = document.querySelector("#drawer-close");

buttonOpen.addEventListener("click", () => {
  // dialogをtop layerに出すモーダル表示
  // Modal display that places the dialog in the top layer
  menu.showModal();
});

buttonClose.addEventListener("click", () => {
  menu.close();
});

menu.addEventListener("click", (event) => {
  // dialog本体クリックだけbackdrop扱い。内側パネルのクリックは閉じない
  // Only clicks on the dialog itself count as backdrop clicks. Clicks inside the panel stay open
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
