// 検索付きメニュー開閉
// Search menu open-close
const extrasMenu = document.getElementById("extras-menu");
const extrasOpen = document.getElementById("extras-open");
const extrasClose = document.getElementById("extras-close");

extrasOpen.addEventListener("click", () => {
  extrasMenu.showModal();
});

extrasClose.addEventListener("click", () => {
  extrasMenu.close();
});

// backdropクリック時クローズ
// Backdrop click-close
extrasMenu.addEventListener("click", (event) => {
  if (event.target === extrasMenu) {
    extrasMenu.close();
  }
});

// メニュー内リンク全件へのクリック処理登録
// Click handler binding for every menu link
for (const link of extrasMenu.querySelectorAll("a[href]")) {
  link.addEventListener("click", () => {
    extrasMenu.close();
  });
}
