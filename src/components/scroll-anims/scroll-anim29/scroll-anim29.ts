'use strict';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

export const scrollAnim29 = () => {
  const anim = new Anim29('js-scroll-anim-29');
  anim.init();
};

class Anim29 {
  el: HTMLElement;
  bgEl: HTMLElement;
  mainEl: HTMLElement;
  constructor(elId: string) {
    this.el = document.getElementById(elId);
    if (!this.el) return;
    this.bgEl = this.el.querySelector('.scroll-anim-29__bg');
    this.mainEl = this.el.querySelector('.scroll-anim-29__main');
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
    // 背景のアニメーション
    gsap.to(this.bgEl, {
      scrollTrigger: {
        trigger: this.el,
        start: 'top bottom',
        end: 'bottom top',
        scrub: 0.3,
      },
      scale: 0.5,
    });
    // メインのアニメーション
    gsap.to(this.mainEl, {
      scrollTrigger: {
        trigger: this.el,
        start: 'top bottom',
        end: 'bottom top',
        scrub: 0.3,
      },
      scale: 1,
    });
  }
}
