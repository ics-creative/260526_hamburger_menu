// ページ全体のクリック監視。メニューリンク処理の集約
// Page-wide click listener. Centralized menu-link handling
document.addEventListener("click", (event) => {
  const target = event.target;

  // Element以外のevent.target対策。closest()使用前の型確認
  // Guard for non-Element event.target. Type check before closest()
  if (!(target instanceof Element)) {
    return;
  }

  // クリック位置からのメニューリンク探索。アイコンや文字から親リンクへ探す
  // Menu-link lookup from the clicked target. Parent-link lookup from icons or text
  const link = target.closest("dialog a[href], [popover] a[href]");

  // メニューリンク以外のクリック除外
  // Ignore clicks outside menu links
  if (!link) {
    return;
  }

  // リンクを含むメニュー本体の取得。dialogとpopoverの共通処理
  // Menu container lookup for the matched link. Shared handling for dialog and popover
  const menu = link.closest("dialog, [popover]");

  // dialog用のclose()
  // close() for dialog
  if (menu instanceof HTMLDialogElement) {
    menu.close();
    return;
  }

  // popover用のhidePopover()
  // hidePopover() for popover
  menu?.hidePopover();
});
