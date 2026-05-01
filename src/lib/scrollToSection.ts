export function scrollToSection(hashOrId: string) {
  const id = hashOrId.startsWith("#") ? hashOrId.slice(1) : hashOrId;
  const el = document.getElementById(id);
  if (!el) return;

  const prefersReduced =
    typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // Keep the URL in sync for shareability + back/forward navigation.
  if (typeof window !== "undefined") {
    const nextHash = `#${id}`;
    if (window.location.hash !== nextHash) window.history.pushState(null, "", nextHash);
  }

  el.scrollIntoView({ behavior: prefersReduced ? "auto" : "smooth", block: "start" });
}
