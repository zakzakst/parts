'use strict';

import 'snapsvg-cjs';
declare const Snap: any;
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

export const scrollAnim20 = () => {
  const items = document.querySelectorAll('.scroll-anim-20__item');
  [...items].forEach(item => {
    const anim = new Anim20(<HTMLElement>item);
    anim.init();
  });
}

class Anim20 {
  el: HTMLElement;
  svg: any;
  path: any;
  icon: any;
  heading: any;
  text: HTMLElement;
  pathAnimSpeed: number;
  headingAnimSpeed: number;
  constructor(el: HTMLElement) {
    this.el = el;
    if (!this.el) return;
    // @ts-ignore
    this.svg = Snap(<SVGElement>this.el.querySelector('.scroll-anim-20__img'));
    this.path = this.svg.select('.scroll-anim-20__img-path');
    this.icon = this.svg.select('.scroll-anim-20__img-icon');
    this.heading = this.svg.select('.scroll-anim-20__heading');
    this.text = this.el.querySelector('.scroll-anim-20__text');
    this.pathAnimSpeed = 600;
    this.headingAnimSpeed = 400;
  }

  /**
   * 初期化
   */
  init(): void {
    if (!this.el) return;
    this.scrollHandler();
  }

  /**
   * SVGのパスアニメーション
   */
  animPath(): void {
    const pathLength = this.path.getTotalLength();
    this.path.attr({
      strokeOpacity: 1,
      strokeDasharray: `${pathLength} ${pathLength}`,
      strokeDashoffset: pathLength,
    });
    this.path.animate({
      strokeDashoffset: pathLength * 2,
    }, this.pathAnimSpeed, mina.easeout, () => {
      this.animHeading();
      this.animIcon();
      this.animText();
    });
  }

  /**
   * SVGの見出しアニメーション
   */
  animHeading(): void {
    this.heading.attr({
      startOffset: '50px'
    });
    this.heading.animate({
      fillOpacity: 1,
      startOffset: 0,
    }, this.headingAnimSpeed, mina.backout);
  }

  /**
   * SVGのアイコンアニメーション
   */
  animIcon(): void {
    this.icon.animate({
      fillOpacity: 1,
    }, this.headingAnimSpeed, mina.easeout);
  }

  /**
   * テキストアニメーション
   */
  animText(): void {
    this.text.classList.add('is-animated');
  }

  /**
   * スクロール連動のイベント設定
   */
  scrollHandler(): void {
    ScrollTrigger.create({
      trigger: this.el,
      start: 'top 50%',
      onEnter: self => {
        this.animPath();
        self.kill();
      }
    });
  }
}
