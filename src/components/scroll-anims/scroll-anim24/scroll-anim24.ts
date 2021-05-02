'use strict';

import 'snapsvg-cjs';
declare const Snap: any;
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

export const scrollAnim24 = () => {
  const itemEls = document.querySelectorAll('.js-scroll-anim-24');
  [...itemEls].forEach(el => {
    const anim = new Anim24(<HTMLElement>el);
    anim.init();
  });
}

class Anim24 {
  el: HTMLElement;
  svg: any;
  mask: any;
  maskBase: any;
  img: any;
  maskGroups: Array<any>;
  maskPoints: Array<Array<string>>;
  constructor(el: HTMLElement) {
    this.el = el;
    if (!this.el) return;
    this.svg = Snap(this.el.querySelector('.scroll-anim-24__img svg'));
    this.mask = this.svg.select('.scroll-anim-24__img-mask');
    this.maskBase = this.svg.select('.scroll-anim-24__img-mask-base');
    this.maskGroups = [];
    this.maskPoints = [
      ['0 150'],
      ['30 120', '30 180'],
      ['60 90', '60 150', '60 210'],
      ['90 60', '90 120', '90 180', '90 240'],
      ['120 30', '120 90', '120 150', '120 210', '120 270'],
      ['150 60', '150 120', '150 180', '150 240'],
      ['180 90', '180 150', '180 210'],
      ['210 120', '210 180'],
      ['240 150'],
    ];
  }

  /**
   * 初期化
   */
  init(): void {
    if (!this.el) return;
    this.setMasks();
    this.scrollHandler();
  }

  /**
   * マスクを作成
   */
  setMasks(): void {
    this.maskPoints.forEach(points => {
      const g = this.mask.g();
      points.forEach(point => {
        const pathVal = `M ${point} l 30 -30 l 30 30 l -30 30 l -30 -30 Z`;
        const path = g.path(pathVal);
        g.add(path);
      });
      g.attr({
        fill: '#fff',
        fillOpacity: 0,
      });
      this.mask.append(g);
      // グループを配列に追加（画像表示アニメーションに利用）
      this.maskGroups.push(g);
    });
  }

  /**
   * 画像の表示
   */
  showImg(): void {
    this.maskGroups.forEach((group, index) => {
      // 100ms間隔でグループを表示
      setTimeout(() => {
        group.animate({
          fillOpacity: 1,
        }, 500, () => {
          // 最後にベースのマスクを表示（個別のマスクのみだと境目に線が残ってしまうため）
          if (index === (this.maskGroups.length - 1)) {
            this.maskBase.animate({
              fill: '#fff'
            }, 500);
          }
        });
      }, 100 * index);
    });
  }

  /**
   * スクロール連動のイベント設定
   */
  scrollHandler(): void {
    const self = this;
    ScrollTrigger.create({
      trigger: this.el,
      start: 'top 70%',
      onEnter: self => {
        this.showImg();
        this.el.classList.add('is-animated');
        self.kill();
      }
    });
  }
}
