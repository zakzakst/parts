'use strict';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

export const scrollAnim15 = () => {
  const anim = new Anim15('.js-scroll-anim-15');
  anim.init();
}

class Anim15 {
  els: NodeListOf<HTMLElement>;
  imgElSelector: string;
  offsetParallax: number;
  constructor(elsSelector: string) {
    this.els = document.querySelectorAll(elsSelector);
    this.imgElSelector = '.scroll-anim-15__img';
    this.offsetParallax = 72;
  }

  /**
   * 初期化
   */
  init(): void {
    if (!this.els.length) return;
    this.scrollHandler();
  }

  /**
   * スクロール連動のイベント設定
   */
  scrollHandler(): void {
    [...this.els].forEach(el => {
      const imgEl = el.querySelector(this.imgElSelector);
      gsap.to(imgEl, {
        scrollTrigger: {
          trigger: el,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1,
          // markers: true,
        },
        y: -this.offsetParallax,
      });
    });
  }
}
