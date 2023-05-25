'use strict';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

export const scrollAnim28 = () => {
  const anim = new Anim28('js-scroll-anim-28');
  anim.init();
};

class Anim28 {
  el: HTMLElement;
  mainEls: NodeListOf<HTMLElement>;
  subEls: NodeListOf<HTMLElement>;
  constructor(elId: string) {
    this.el = document.getElementById(elId);
    if (!this.el) return;
    this.mainEls = this.el.querySelectorAll('.scroll-anim-28__main span');
    this.subEls = this.el.querySelectorAll('.scroll-anim-28__sub span');
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
    const self = this;
    gsap.to(this.mainEls, {
      display: 'inline-block',
      delay: 0.2,
      stagger: {
        each: 0.1,
      },
      scrollTrigger: {
        trigger: this.el,
        start: 'top center',
        // markers: true,
      },
      onStart() {
        self.el.classList.add('--anim-start');
        gsap.to(self.subEls, {
          display: 'inline-block',
          stagger: {
            each: 0.1,
          },
        });
      },
    });
  }
}
