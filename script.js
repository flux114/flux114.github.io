"use strict";

(() => {
  const html = document.documentElement;
  const btn = document.getElementById("toggleTheme");

  const savedTheme = localStorage.getItem("theme");
  if (savedTheme) html.setAttribute("data-theme", savedTheme);

  btn.textContent =
    html.getAttribute("data-theme") === "dark"
      ? "Switch to light"
      : "Switch to dark";

  btn.addEventListener("click", () => {
    const next =
      html.getAttribute("data-theme") === "dark" ? "light" : "dark";
    html.setAttribute("data-theme", next);
    localStorage.setItem("theme", next);
    btn.textContent =
      next === "dark" ? "Switch to light" : "Switch to dark";
  });
})();
