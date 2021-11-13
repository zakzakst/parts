'use strict';

export const utility06 = () => {
  const utility = new Utility06('js-utility-06');
  utility.init();
}

class Utility06 {
  el: HTMLElement;
  constructor(elId: string) {
    this.el = document.getElementById(elId);
  }

  /**
   * 初期化
   */
  init(): void {
    if (!this.el) return;
    console.log('utility 06');
  }
}
