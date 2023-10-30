'use strict';

export const scrollAnim31 = () => {
  const anim = new Anim31('js-scroll-anim-31');
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
    console.log('scroll anim 31 init');
  }
}
