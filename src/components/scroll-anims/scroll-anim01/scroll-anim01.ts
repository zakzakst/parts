'use strict';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

export const scrollAnim01 = () => {
  // アニメーションさせる要素を指定
  const els = document.getElementsByClassName('js-scroll-anim-01');
  // アニメーションを設定
  [...els].forEach(el => {
    const textAnim = new TextAnim(<HTMLElement>el);
    textAnim.init();
  });
}

class TextAnim {
  el: HTMLElement;
  constructor(el: HTMLElement) {
    this.el = el;
  }

  /**
   * 初期化
   */
  init() {
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
   * テキストアニメーション
   */
  animText() {
    const tl = gsap.timeline();
    tl
      .set(this.el, {
        opacity: 1
      })
      .to(this.el.children, {
        opacity: 1,
        scale: 1,
        duration: .5,
        ease: 'power2.out',
        stagger: {
          each: .1,
          ease: 'power1.in',
        }
      });
  }

  /**
   * スクロール連動のイベント設定
   */
  scrollHandler() {
    ScrollTrigger.create({
      trigger: this.el,
      start: 'top 70%',
      onEnter: self => {
        this.animText();
        self.kill();
      }
    });
  }
}
