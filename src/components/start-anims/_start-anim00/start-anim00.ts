'use strict';

export const startAnim00 = () => {
  const anim = new StartAnim00('js-start-anim-00');
  anim.init();
}

class StartAnim00 {
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
    console.log('anim 00');
  }
}
