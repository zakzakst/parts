'use strict';

export const carousel04 = () => {
  const carousel = new Carousel04('js-carousel-04');
  carousel.init();
}

class Carousel04 {
  el: HTMLElement;
  constructor(elId: string) {
    this.el = document.getElementById(elId);
    if (!this.el) return;
  }

  /**
   * 初期化
   */
  init(): void {
    if (!this.el) return;
    console.log('carousel 04');
  }
}
