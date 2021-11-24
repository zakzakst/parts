'use strict';

export const utility10 = () => {
  const utility = new Utility10();
  utility.init();
}

class Utility10 {
  el: HTMLElement;
  constructor() {
    this.el = document.getElementById('js-utility-10');
  }

  /**
   * 初期化
   */
  init(): void {
    if (!this.el) return;
    console.log('utility 10');
  }
}
