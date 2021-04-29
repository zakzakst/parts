'use strict';

import { gsap } from 'gsap';

export const carousel03 = () => {
  const carousel = new Carousel03('js-carousel-03');
  carousel.init();
}

class Carousel03 {
  el: HTMLElement;
  constructor(elId: string) {
    this.el = document.getElementById(elId);
  }

  /**
   * 初期化
   */
  init(): void {
    if (!this.el) return;
    console.log('カルーセル03');
  }
}
