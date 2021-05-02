'use strict';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

export const scrollAnim23 = () => {
  const anim = new Anim23('js-scroll-anim-23');
  anim.init();
}

class Anim23 {
  el: HTMLElement;
  bgImgEls: NodeListOf<HTMLElement>;
  itemEls: NodeListOf<HTMLElement>;
  constructor(elId: string) {
    this.el = document.getElementById(elId);
    if (!this.el) return;
    this.bgImgEls = this.el.querySelectorAll('.scroll-anim-23__bg-img');
    this.itemEls = this.el.querySelectorAll('.scroll-anim-23__item');
  }

  /**
   * 初期化
   */
  init(): void {
    if (!this.el) return;
    this.scrollHandler();
  }

  /**
   * 表示画像の切り替え
   * @param index 画像の番号
   */
  changeImg(index: number) {
    [...this.bgImgEls].forEach(el => {
      el.classList.remove('is-active');
    });
    this.bgImgEls[index].classList.add('is-active');
  }

  /**
   * スクロール連動のイベント設定
   */
  scrollHandler(): void {
    const self = this;
    [...this.itemEls].forEach((el, index) => {
      ScrollTrigger.create({
        trigger: el,
        start: 'top 70%',
        onEnter() {
          self.changeImg(index);
        },
        onEnterBack() {
          self.changeImg(index);
        },
      });
    });
  }
}
