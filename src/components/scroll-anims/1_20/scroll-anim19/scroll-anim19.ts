'use strict';

import $ from 'jquery';
import 'lightbox2';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

export const scrollAnim19 = () => {
  const anim = new Anim19('js-scroll-anim-19');
  anim.init();
}

class Anim19 {
  el: HTMLElement;
  constructor(elId: string) {
    this.el = document.getElementById(elId);
    if (!this.el) return;
  }

  /**
   * 初期化
   */
  init(): void {
    if (!this.el) return;
    this.scrollHandler();
  }

  /**
   * ギャラリー表示
   */
  animate(): void {
    const elWidth = this.el.clientWidth;
    const itemWidth = this.el.children[0].clientWidth - 1;
    const colNum = Math.floor(elWidth / itemWidth);
    const rowNum = Math.ceil(this.el.children.length / colNum);
    gsap.to(this.el.children, {
      duration: 2,
      opacity: 1,
      stagger: {
        grid: [rowNum, colNum],
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
      start: 'top 70%',
      onEnter: self => {
        this.animate();
        self.kill();
      },
    });
  }
}
