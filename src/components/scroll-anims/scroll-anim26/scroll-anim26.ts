'use strict';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

export const scrollAnim26 = () => {
  // アニメーションさせる要素を指定
  const els = document.getElementsByClassName('js-scroll-anim-26');
  if (!els.length) return;
  // アニメーションを設定
  [...els].forEach(el => {
    const anim = new Anim26(<HTMLElement>el);
    anim.init();
  });
}

class Anim26 {
  el: HTMLElement;
  constructor(el: HTMLElement) {
    this.el = el;
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
      start: 'top 70%',
      onEnter: self => {
        // 「is-animated」クラスを付与
        this.el.classList.add('is-animated');
        self.kill();
      }
    });
  }
}
