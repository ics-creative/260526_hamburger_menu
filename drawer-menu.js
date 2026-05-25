// ドロワーメニュー開閉
// Drawer menu open-close
const drawer = document.getElementById("drawer");
const drawerOpen = document.getElementById("drawer-open");
const drawerClose = document.getElementById("drawer-close");

drawerOpen.addEventListener("click", () => {
  drawer.showModal();
});

drawerClose.addEventListener("click", () => {
  drawer.close();
});

// backdropクリック時クローズ
// Backdrop click-close
drawer.addEventListener("click", (event) => {
  if (event.target === drawer) {
    drawer.close();
  }
});

// メニュー内リンク全件へのクリック処理登録
// Click handler binding for every menu link
for (const link of drawer.querySelectorAll("a[href]")) {
  link.addEventListener("click", () => {
    drawer.close();
  });
}
