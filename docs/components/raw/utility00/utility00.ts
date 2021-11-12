'use strict';

export const utility00 = () => {
  const utility = new Utility00('js-utility-00');
  utility.init();
}

class Utility00 {
  el: HTMLElement;
  constructor(elId: string) {
    this.el = document.getElementById(elId);
  }

  /**
   * 初期化
   */
  init(): void {
    if (!this.el) return;
    console.log('utility 00');
  }
}
