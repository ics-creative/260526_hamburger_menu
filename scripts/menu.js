// ダイアログメニュー開閉
// Dialog menu open-close
const menu = document.querySelector("#menu");
const buttonOpen = document.querySelector("#button-open");
const buttonClose = document.querySelector("#button-close");

buttonOpen.addEventListener("click", () => {
  // dialogをtop layerへ表示
  // Dialog display in the top layer
  menu.showModal();
});

buttonClose.addEventListener("click", () => {
  menu.close();
});

menu.addEventListener("click", (event) => {
  // dialog本体クリックだけbackdrop扱い
  // Dialog element click as backdrop click
  if (event.target === menu) {
    menu.close();
  }
});

// メニュー内リンクを押したら閉じる
// Close after menu link click
for (const link of menu.querySelectorAll("a[href]")) {
  link.addEventListener("click", () => {
    menu.close();
  });
}
