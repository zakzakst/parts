'use strict';

export const heading07 = () => {
  const el = document.getElementById('js-heading-07');
  if (!el) return;
  setTimeout(() => {
    el.classList.add('is-animated');
  }, 1000);
}
