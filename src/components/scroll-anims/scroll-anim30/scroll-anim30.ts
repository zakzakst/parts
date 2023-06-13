'use strict';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

export const scrollAnim30 = () => {
  const anim = new Anim30('js-scroll-anim-30');
  anim.init();
};

class Anim30 {
  el: HTMLElement;
  itemsEl: HTMLElement;
  constructor(elId: string) {
    this.el = document.getElementById(elId);
    if (!this.el) return;
    this.itemsEl = this.el.querySelector('.scroll-anim-30__items');
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
    ScrollTrigger.create({
      trigger: this.el,
      start: 'top 50%',
      onEnter: (self) => {
        [...this.itemsEl.children].forEach((el, index) => {
          const columnNum = 4;
          const delayUnit = 50;
          const row = Math.floor(index / columnNum);
          const column = index < columnNum - 3 ? index : index % 4;
          const delay = (row + column) * delayUnit;
          setTimeout(() => {
            el.classList.add('--animated');
          }, delay);
        });
        self.kill();
      },
    });
  }
}
