'use strict';
import { gsap } from 'gsap';

export const other17 = () => {
  const other = new Other17();
  other.init();
}

class Other17 {
  el: HTMLElement;
  constructor() {
    this.el = document.getElementById('js-other-17');
  }

  /**
   * 初期化
   */
  init(): void {
    if (!this.el) return;
    this.textAnim(this.el);
  }

  /**
   * 文字アニメーション
   */
  textAnim(el: HTMLElement): void {
    const tl = gsap.timeline();
    // tl
    //   .to(el.children, {
    //     display: 'inline',
    //     stagger: {
    //       each: 0.15,
    //     },
    //   })
    //   .to(el.children, {
    //     display: 'none',
    //     stagger: {
    //       each: 0.05,
    //     },
    //   }, '+=0.5');
    tl
      .to(el.children[0].children, {
        display: 'inline',
        stagger: {
          each: 0.15,
        },
      })
      .to(el.children[0].children, {
        display: 'none',
        stagger: {
          each: 0.05,
          from: 'end',
        },
      }, '+=0.5')
      .to(el.children[1].children, {
        display: 'inline',
        stagger: {
          each: 0.15,
        },
      }, '+=1')
      .to(el.children[1].children, {
        display: 'none',
        stagger: {
          each: 0.05,
          from: 'end',
        },
      }, '+=0.5')
      .to(el.children[2].children, {
        display: 'inline',
        stagger: {
          each: 0.15,
        },
      }, '+=1');
  }
}
