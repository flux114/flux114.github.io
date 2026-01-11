"use strict";

(() => {
  const htmlTag = document.documentElement;
  const btn = document.getElementById('toggleTheme');

  // Apply stored theme or leave default
  const stored = localStorage.getItem('theme');
  if (stored) htmlTag.setAttribute('data-theme', stored);

  function toggleTheme() {
    const current = htmlTag.getAttribute('data-theme') || 'dark';
    const next = current === 'dark' ? 'light' : 'dark';
    htmlTag.setAttribute('data-theme', next);
    localStorage.setItem('theme', next);
    // update button label (optional)
    if (btn) btn.textContent = next === 'dark' ? 'Switch to light' : 'Switch to dark';
  }

  if (btn) {
    // initialize button label
    const cur = htmlTag.getAttribute('data-theme') || 'dark';
    btn.textContent = cur === 'dark' ? 'Switch to light' : 'Switch to dark';
    btn.addEventListener('click', toggleTheme);
  }
})();