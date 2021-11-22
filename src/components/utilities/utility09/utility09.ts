'use strict';

export const utility00 = () => {
  const utility = new Utility00();
  utility.init();
}

class Utility00 {
  el: HTMLElement;
  constructor() {
    this.el = document.getElementById('js-utility-00');
  }

  /**
   * 初期化
   */
  init(): void {
    if (!this.el) return;
    console.log('utility 00');
  }
}
