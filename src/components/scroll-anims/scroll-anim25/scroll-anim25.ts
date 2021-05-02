'use strict';

import {
  Chart,
  ArcElement,
  DoughnutController,
  LinearScale,
} from 'chart.js';
Chart.register(
  ArcElement,
  DoughnutController,
  LinearScale,
);
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

export const scrollAnim25 = () => {
  const itemEls = document.querySelectorAll('.js-scroll-anim-25');
  [...itemEls].forEach(el => {
    const anim = new Anim25(<HTMLElement>el);
    anim.init();
  });
}

class Anim25 {
  el: HTMLElement;
  ctx: CanvasRenderingContext2D;
  chart: any;
  animTime: number;
  chartColor: string;
  countEl: HTMLElement;
  constructor(el: HTMLElement) {
    this.el = el;
    if (!this.el) return;
    const canvas = <HTMLCanvasElement>this.el.querySelector('.scroll-anim-25__chart')
    this.ctx = canvas.getContext('2d');
    this.chart = null;
    this.animTime = 2000;
    this.chartColor = '#ff3333';
    this.countEl = this.el.querySelector('.scroll-anim-25__count');
  }

  /**
   * 初期化
   */
  init(): void {
    if (!this.el) return;
    this.scrollHandler();
  }

  /**
   * チャートアニメーション
   * @param values グラフの値
   */
  animChart(values: Array<number>): void {
    const self = this;
    this.chart = new Chart(this.ctx, {
      type: 'doughnut',
      data: {
        datasets: [
          {
            data: values,
            backgroundColor: [this.chartColor, 'transparent'],
            hoverBackgroundColor: [this.chartColor, 'transparent'],
            borderWidth: 0,
          },
        ],
      },
      options: {
        animation: {
          duration: self.animTime,
          // easing: 'linear',
        },
        cutout: '80%',
        maintainAspectRatio: true,
        responsive: false,
        plugins: {
          legend: {
            display: false,
          },
          tooltip: {
            enabled: false,
          },
        },
      },
    });
  }

  /**
   * カウントアップ
   * @param newVal カウントの値
   */
  animCount(newVal: number): void {
    const count = {
      val: 0,
    };
    gsap.to(count, {
      duration: this.animTime / 1000,
      val: newVal,
      roundProps: 'val',
      onUpdate: () => {
        this.countEl.textContent = count.val.toString();
      }
    });
  }

  /**
   * アニメーション開始
   */
  animStart(): void {
    const percent = Number(this.el.dataset.percent);
    this.animChart([percent, 100 - percent]);
    this.animCount(percent);
  }

  /**
   * スクロール連動のイベント設定
   */
  scrollHandler(): void {
    ScrollTrigger.create({
      trigger: this.el,
      start: 'top 70%',
      onEnter: self => {
        this.animStart();
        self.kill();
      }
    });
  }
}
