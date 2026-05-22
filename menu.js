document.addEventListener("click", (event) => {
  const target = event.target;

  if (!(target instanceof Element)) {
    return;
  }

  const link = target.closest("dialog a[href], [popover] a[href]");

  if (!link) {
    return;
  }

  // Anchor clicks navigate first, then close the active menu.
  const menu = link.closest("dialog, [popover]");

  if (menu instanceof HTMLDialogElement) {
    menu.close();
    return;
  }

  menu?.hidePopover();
});
