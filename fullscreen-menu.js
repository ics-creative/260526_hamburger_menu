// フルスクリーンメニュー開閉
// Full-screen menu open-close
const fullscreenMenu = document.getElementById("menu");
const fullscreenOpen = document.getElementById("fullscreen-open");
const fullscreenClose = document.getElementById("fullscreen-close");

fullscreenOpen.addEventListener("click", () => {
  fullscreenMenu.showModal();
});

fullscreenClose.addEventListener("click", () => {
  fullscreenMenu.close();
});

// backdropクリック時クローズ
// Backdrop click-close
fullscreenMenu.addEventListener("click", (event) => {
  if (event.target === fullscreenMenu) {
    fullscreenMenu.close();
  }
});

// メニュー内リンク全件へのクリック処理登録
// Click handler binding for every menu link
for (const link of fullscreenMenu.querySelectorAll("a[href]")) {
  link.addEventListener("click", () => {
    fullscreenMenu.close();
  });
}
