// メガメニューpopoverのリンク選択時クローズ
// Mega-menu popover link-close
const megaMenu = document.getElementById("mega");

// メニュー内リンク全件へのクリック処理登録
// Click handler binding for every menu link
for (const link of megaMenu.querySelectorAll("a[href]")) {
  link.addEventListener("click", () => {
    megaMenu.hidePopover();
  });
}
