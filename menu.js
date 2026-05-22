// ページ内のどこをクリックしたかをまとめて監視します。
// 各メニューのリンクに個別で処理を書く代わりに、ここで一括して扱います。
document.addEventListener("click", (event) => {
  const target = event.target;

  // event.target は Element 以外になる場合があります。
  // closest() は Element のメソッドなので、使う前に型を確認します。
  if (!(target instanceof Element)) {
    return;
  }

  // クリックされた要素自身、またはその親が「メニュー内のリンク」かを探します。
  // アイコンや文字などリンクの内側をクリックしても、親の a[href] を見つけられます。
  const link = target.closest("dialog a[href], [popover] a[href]");

  // メニュー内のリンクではないクリックなら、このファイルでは何もしません。
  if (!link) {
    return;
  }

  // 見つけたリンクが入っているメニュー本体を探します。
  // dialog 版のメニューと popover 版のメニューを同じ処理で扱うためです。
  const menu = link.closest("dialog, [popover]");

  // dialog 要素は close() で閉じます。
  // リンクの移動処理はブラウザに任せ、そのあと開いているメニューだけ閉じます。
  if (menu instanceof HTMLDialogElement) {
    menu.close();
    return;
  }

  // popover 要素は hidePopover() で閉じます。
  // menu が見つからなかった場合に備えて ?. を使っています。
  menu?.hidePopover();
});
