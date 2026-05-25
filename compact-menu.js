// コンパクトpopoverのリンク選択時クローズ
// Compact popover link-close
const compactMenu = document.getElementById("compact");

// メニュー内リンク全件へのクリック処理登録
// Click handler binding for every menu link
for (const link of compactMenu.querySelectorAll("a[href]")) {
  link.addEventListener("click", () => {
    compactMenu.hidePopover();
  });
}
