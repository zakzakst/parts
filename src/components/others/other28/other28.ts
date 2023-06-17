'use strict';

import { gsap } from 'gsap';

export const other28 = () => {
  const other = new Other28('js-other-28');
  other.init();
};

class Other28 {
  el: HTMLElement;
  checked: boolean;
  constructor(id: string) {
    this.el = document.getElementById(id);
    this.checked = false;
    if (!this.el) return;
  }

  /**
   * 初期化
   */
  init(): void {
    if (!this.el) return;
    this.clickHandler();
  }

  /**
   * クリックイベント設定
   */
  clickHandler(): void {
    this.el.addEventListener('click', (e) => {
      e.preventDefault();
      if (this.checked) {
        this.checked = false;
        this.el.classList.remove('--checked');
      } else {
        this.checked = true;
        this.el.classList.add('--checked');
      }
    });
  }
}
