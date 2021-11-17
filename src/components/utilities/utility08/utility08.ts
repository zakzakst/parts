'use strict';

export const utility08 = () => {
  const utility = new Utility08();
  utility.init();
}

class Utility08 {
  el: HTMLElement;
  constructor() {
    this.el = document.getElementById('js-utility-08');
  }

  /**
   * 初期化
   */
  init(): void {
    if (!this.el) return;
    console.log('utility 08');
  }
}
