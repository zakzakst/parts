'use strict';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

export const other27 = () => {
  const other = new Other27('js-other-27');
  other.init();
};

class Other27 {
  el: HTMLElement;
  imgEl: HTMLElement;
  constructor(id: string) {
    this.el = document.getElementById(id);
    if (!this.el) return;
    this.imgEl = this.el.querySelector('.other-27__img');
  }

  /**
   * 初期化
   */
  init(): void {
    if (!this.el) return;
    this.scrollHandler();
  }

  /**
   * スクロール連動のイベント設定
   */
  scrollHandler(): void {
    gsap.fromTo(
      this.imgEl,
      {
        rotation: -20,
      },
      {
        rotation: 20,
        scrollTrigger: {
          trigger: this.imgEl,
          start: 'top 70%',
          end: 'bottom top',
          scrub: 0.3,
        },
      }
    );
  }
}
