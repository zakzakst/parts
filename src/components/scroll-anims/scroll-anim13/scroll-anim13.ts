'use strict';

import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export const scrollAnim13 = () => {
  const anim = new Anim13('js-scroll-anim-13');
  anim.init();
}

class Anim13 {
  el: HTMLElement;
  headingEl: HTMLElement;
  constructor(elId: string) {
    this.el = document.getElementById(elId);
    this.headingEl = this.el.querySelector('.scroll-anim-13__heading');
  }

  /**
   * 初期化
   */
  init(): void {
    this.scrollHandler();
  }

  /**
   * スクロール連動のイベント設定
   */
  scrollHandler(): void {
    gsap.to(this.headingEl, {
      scrollTrigger: {
        trigger: this.el,
        start: 'top bottom',
        end: 'bottom 50%',
        scrub: .3,
      },
      xPercent: -100,
    });
  }
}
