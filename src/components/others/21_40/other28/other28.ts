'use strict';

// import { gsap } from 'gsap';

export const other28 = () => {
  const other = new Other28('.js-other-28');
  other.init();
};

class Other28 {
  els: NodeListOf<HTMLElement>;
  constructor(selector: string) {
    this.els = document.querySelectorAll(selector);
    if (!this.els.length) return;
  }

  /**
   * 初期化
   */
  init(): void {
    if (!this.els.length) return;
    this.clickHandler();
  }

  /**
   * クリックイベント設定
   */
  clickHandler(): void {
    [...this.els].forEach((el) => {
      el.addEventListener('click', (e) => {
        e.preventDefault();
        const isChecked = el.classList.contains('--checked');
        if (isChecked) {
          el.classList.remove('--checked', '--anim');
        } else {
          el.classList.add('--checked', '--anim');
        }
      });
    });
  }
}
