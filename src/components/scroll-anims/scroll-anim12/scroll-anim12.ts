'use strict';

import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export const scrollAnim12 = () => {
  // アニメーションさせる要素を指定
  const els = document.getElementsByClassName('js-scroll-anim-12');
  // アニメーションを設定
  [...els].forEach(el => {
    const anim = new Anim12(<HTMLElement>el);
    anim.init();
  });
}

class Anim12 {
  el: HTMLElement;
  textEl: HTMLElement;
  borderEl: HTMLElement;
  constructor(el: HTMLElement) {
    this.el = el;
    this.textEl = el.querySelector('.scroll-anim-12__text');
    this.borderEl = el.querySelector('.scroll-anim-12__border');
  }

  /**
   * 初期化
   */
  init(): void {
    this.splitText(this.textEl);
    this.scrollHandler();
  }

  /**
   * テキスト分割
   * @param textEl 分割するテキスト要素
   */
  splitText(textEl: HTMLElement): void {
    // アニメーション用に分割
    let markup = '';
    const text = textEl.textContent;
    text.split('').forEach(l => {
      markup += `
        <span>${l}</span>
      `;
    });
    textEl.innerHTML = markup;
  }

  /**
   * アニメーション
   */
  scrollAnim(): void {
    gsap.to(this.borderEl, {
      duration: 1,
      scaleX: 1,
    });
    gsap.to(this.textEl.children, {
      duration: 1,
      y: 0,
      opacity: 1,
      ease: 'back.out',
      stagger: {
        each: .1,
      },
    });
  }

  /**
   * スクロール連動のイベント設定
   */
  scrollHandler(): void {
    ScrollTrigger.create({
      trigger: this.el,
      start: "top 70%",
      onEnter: self => {
        this.scrollAnim();
        self.kill();
      }
    });
  }
}
