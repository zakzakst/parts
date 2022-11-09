'use strict';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

export const scrollAnim27 = () => {
  const anim = new Anim27('js-scroll-anim-27');
  anim.init();
}

class Anim27 {
  el: HTMLElement;
  constructor(elId: string) {
    this.el = document.getElementById(elId);
  }

  /**
   * 初期化
   */
  init(): void {
    if (!this.el) return;
    this.setElements();
    this.scrollHandler();
  }

  /**
   * 要素設定
   */
  setElements() {
    // メインテキストを複製
    const textEl = this.el.querySelector('.scroll-anim-27__text');
    const textElChild = textEl.children[0];
    for (let i = 0; i < 3; i++) {
      const cloneEl = textElChild.cloneNode(true);
      textEl.appendChild(cloneEl);
    }
    // 装飾要素を挿入
    const decorationEl = this.el.querySelector('.scroll-anim-27__decoration');
    for (let i = 0; i < 4; i++) {
      const el = document.createElement('div');
      decorationEl.appendChild(el);
    }
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
        this.el.classList.add('--animated');
        self.kill();
      }
    });
  }
}
