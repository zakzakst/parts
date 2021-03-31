'use strict';

import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export const scrollAnim08 = () => {
  // アニメーションさせる要素を指定
  const els = document.getElementsByClassName('js-scroll-anim-08');
  // アニメーションを設定
  [...els].forEach(el => {
    const imgAnim = new Anim08(<HTMLElement>el);
    imgAnim.init();
  });
}

class Anim08 {
  el: HTMLElement;
  constructor(el: HTMLElement) {
    this.el = el;
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
    ScrollTrigger.create({
      trigger: this.el,
      start: "top 70%",
      onEnter: self => {
        // 「is-animated」クラスを付与
        this.el.classList.add('is-animated');
        self.kill();
      }
    });
  }
}
