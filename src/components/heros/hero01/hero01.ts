'use strict';

export const hero01 = () => {
  const anim = new Anim31('js-hero-01');
  anim.init();
};

class Anim31 {
  el: HTMLElement;

  constructor(elId: string) {
    this.el = document.getElementById(elId);
  }

  /**
   * 初期化
   */
  init(): void {
    if (!this.el) return;
    console.log('hero 01 init');
  }
}
