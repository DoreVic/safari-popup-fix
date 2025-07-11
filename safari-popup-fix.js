// Safari Popup Fix para FoundryVTT
// Detecta popups y fuerza altura correcta en Safari

const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
if (!isSafari) return;

Hooks.on("renderApplication", (app, html, data) => {
  const el = html[0];

  if (el.tagName === "DIALOG") {
    el.style.height = "auto";
    el.style.minHeight = "100px";
    el.style.maxHeight = "80vh";
    el.style.overflow = "auto";
  }
});
