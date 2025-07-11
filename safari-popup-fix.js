// Aplica estilos a todos los dialogs visibles en Foundry (como lo hace el bookmarklet)

function fixAllDialogs() {
  const dialogs = document.querySelectorAll("dialog.application.dialog");
  dialogs.forEach((e) => {
    e.style.height = "auto";
    e.style.minHeight = "100px";
    e.style.maxHeight = "80vh";
    e.style.overflow = "auto";
  });
}

// Corre al inicio por si hay diálogos abiertos ya
Hooks.once("ready", () => {
  fixAllDialogs();
});

// Corre cada vez que se renderiza una app
Hooks.on("renderApplication", () => {
  fixAllDialogs();
});
