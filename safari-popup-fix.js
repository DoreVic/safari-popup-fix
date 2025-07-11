// Safari Popup Fix para FoundryVTT
// Fuerza altura adecuada en todos los diálogos de aplicación

Hooks.on("renderApplication", (app, html, data) => {
  const dialog = html.closest("dialog")[0] ?? html[0];

  if (!dialog || !(dialog instanceof HTMLElement)) return;

  dialog.style.height = "auto";
  dialog.style.minHeight = "100px";
  dialog.style.maxHeight = "80vh";
  dialog.style.overflow = "auto";
});
