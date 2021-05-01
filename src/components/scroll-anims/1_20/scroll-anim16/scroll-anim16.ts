'use strict';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

export const scrollAnim16 = () => {
  const anim = new Anim16('.js-scroll-anim-16');
  anim.init();
}

class Anim16 {
  els: NodeListOf<HTMLElement>;
  triggerElSelector: string;
  constructor(elsSelector: string) {
    this.els = document.querySelectorAll(elsSelector);
    this.triggerElSelector = '.scroll-anim-16__content';
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
      const triggerEl = el.querySelector(this.triggerElSelector);
      ScrollTrigger.create({
        trigger: triggerEl,
        start: 'top 70%',
        end: 'bottom 30%',
        onEnter: () => {
          el.classList.add('is-animated');
        },
        onEnterBack: () => {
          el.classList.add('is-animated');
        },
        onLeave: () => {
          el.classList.remove('is-animated');
        },
        onLeaveBack: () => {
          el.classList.remove('is-animated');
        },
      });
    });
  }
}
