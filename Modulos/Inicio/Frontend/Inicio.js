"use strict";
document.addEventListener("DOMContentLoaded", () => {
  const app = window.FIXELAR_APP;
  const grid = document.querySelector("#application-grid");
  if (app?.applications && grid) {
    grid.innerHTML =
      app.applications
        .map(
          (item) =>
            `<article class="app-card" style="--product-accent:${item.accent}"><div class="app-icon"><i class="fa-solid ${item.icon}" aria-hidden="true"></i></div><p class="eyebrow">${item.category}</p><h3>${item.name}</h3><p>${item.description}</p><a href="#contacto" aria-label="Conocer más sobre ${item.name}">Conocer más <i class="fa-solid fa-arrow-right"></i></a></article>`,
        )
        .join("") +
      `<article class="app-card future"><div class="app-icon"><i class="fa-solid fa-plus" aria-hidden="true"></i></div><p class="eyebrow">En exploración</p><h3>Futuras aplicaciones</h3><p>Nuevas soluciones para más formas de trabajar y avanzar.</p><a href="#contacto">Cuéntanos tu idea <i class="fa-solid fa-arrow-right"></i></a></article>`;
  }
  const toggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".site-nav");
  toggle?.addEventListener("click", () => {
    const open = toggle.getAttribute("aria-expanded") === "true";
    toggle.setAttribute("aria-expanded", String(!open));
    nav.classList.toggle("open", !open);
  });
  nav?.querySelectorAll("a").forEach((link) =>
    link.addEventListener("click", () => {
      toggle?.setAttribute("aria-expanded", "false");
      nav.classList.remove("open");
    }),
  );
});
