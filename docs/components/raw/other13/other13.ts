'use strict';

export const other13 = () => {
  const other = new Other13();
  other.init();
}

class Other13 {
  el: HTMLElement;
  constructor() {
    this.el = document.getElementById('js-other-13');
  }

  /**
   * 初期化
   */
  init(): void {
    if (!this.el) return;
    setTimeout(() => {
      this.el.classList.add('--loaded');
    }, 3000);
  }
}
