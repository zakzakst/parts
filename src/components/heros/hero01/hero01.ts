'use strict';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

export const hero01 = () => {
  const anim = new Anim31('js-hero-01');
  anim.init();
};

class Anim31 {
  el: HTMLElement;
  contentEl: HTMLElement;

  constructor(elId: string) {
    this.el = document.getElementById(elId);
    this.contentEl = this.el.querySelector('.hero-01__content');
  }

  /**
   * 初期化
   */
  init(): void {
    if (!this.el || !this.contentEl) return;
    this.scrollHandler();
  }

  /**
   * スクロール連動のイベント設定
   */
  scrollHandler(): void {
    ScrollTrigger.create({
      trigger: this.contentEl,
      start: 'top bottom',
      end: '+=400',
      onUpdate: (e) => {
        this.el.style.setProperty('--anim-progress', e.progress.toString());
      },
    });
  }
}
