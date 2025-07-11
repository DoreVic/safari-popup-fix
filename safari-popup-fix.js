// Aplica estilos automáticamente a todos los diálogos nuevos que aparezcan en Foundry

function fixDialog(dialog) {
  if (!(dialog instanceof HTMLElement)) return;
  if (!dialog.classList.contains("application")) return;

  dialog.style.height = "auto";
  dialog.style.minHeight = "300px";
  dialog.style.maxHeight = "80vh";
  dialog.style.overflow = "auto";
}

function scanAndFixDialogs() {
  document.querySelectorAll("dialog.application.dialog").forEach(fixDialog);
}

// Escucha cambios en el DOM
function observeDialogs() {
  const observer = new MutationObserver((mutations) => {
    for (const mutation of mutations) {
      for (const node of mutation.addedNodes) {
        if (node.nodeType === Node.ELEMENT_NODE) {
          const el = node;
          if (el.tagName === "DIALOG") fixDialog(el);
          else el.querySelectorAll?.("dialog.application.dialog")?.forEach(fixDialog);
        }
      }
    }
  });

  observer.observe(document.body, { childList: true, subtree: true });
}

// Inicia el proceso cuando Foundry está listo
Hooks.once("ready", () => {
  scanAndFixDialogs();
  observeDialogs();
});
