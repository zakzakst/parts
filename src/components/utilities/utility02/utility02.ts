'use strict';

export const utility02 = () => {
  const utility = new Utility02('js-utility-02');
  utility.init();
}

class Utility02 {
  el: HTMLElement;
  constructor(elId: string) {
    this.el = document.getElementById(elId);
    if (!this.el) return;
  }

  /**
   * 初期化
   */
  init() {
    if (!this.el) return;
    console.log('utility 02');
  }
}
