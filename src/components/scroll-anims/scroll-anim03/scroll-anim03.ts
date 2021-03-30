'use strict';

import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export const scrollAnim03 = () => {
  // アニメーションさせる要素を指定
  const els = document.getElementsByClassName('js-scroll-anim-03');
  // アニメーションを設定
  [...els].forEach(el => {
    const imgAnim = new ImgAnim(<HTMLElement>el);
    imgAnim.init();
  });
}

class ImgAnim {
  el: HTMLElement;
  constructor(el: HTMLElement) {
    this.el = el;
  }

  /**
   * 初期化
   */
  init(): void {
    this.textInit();
    this.scrollHandler();
  }

  /**
   * テキストを初期化
   */
  textInit(): void {
    // アニメーション用に分割
    let markup = '';
    const text = this.el.textContent;
    text.split('').forEach(l => {
      markup += `
        <span>${l}</span>
      `;
    });
    this.el.innerHTML = markup;
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
