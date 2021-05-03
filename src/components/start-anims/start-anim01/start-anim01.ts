'use strict';

import { gsap } from 'gsap';

export const startAnim01 = () => {
  const anim = new StartAnim01('js-start-anim-01');
  anim.init();
}

class StartAnim01 {
  el: HTMLElement;
  imgEls: NodeListOf<HTMLElement>;
  videoEls: NodeListOf<HTMLElement>;
  totalElNum: number;
  loadedElNum: number;
  loadedPercent: number;
  countEl: HTMLElement;
  progressValEl: HTMLElement;
  constructor(elId: string) {
    this.el = document.getElementById(elId);
    if (!this.el) return;
    this.imgEls = document.querySelectorAll('img:not([loading="lazy"])');
    this.videoEls = document.querySelectorAll('video');
    this.totalElNum = this.imgEls.length + this.videoEls.length;
    this.loadedElNum = 0;
    this.loadedPercent = 0;
    this.countEl = this.el.querySelector('.start-anim-01__count');
    this.progressValEl = this.el.querySelector('.start-anim-01__progress-val');
  }

  /**
   * 初期化
   */
  init(): void {
    if (!this.el) return;
    this.fixWindow();
    this.loadHandler();
  }

  /**
   * ウインドウ固定
   */
  fixWindow(): void {
    const scrollBarWidth = window.innerWidth - document.body.clientWidth;
    document.body.style.paddingRight = `${scrollBarWidth}px`;
    document.documentElement.style.overflow = 'hidden';
  }

  /**
   * ウインドウ固定を解除
   */
  clearWindow(): void {
    document.body.style.paddingRight = null;
    document.documentElement.style.overflow = null;
  }

  /**
   * 読み込み量の更新
   */
  updateLoader(): void {
    this.loadedElNum += 1;
    // 画像・動画以外の読込を考慮し、90%までの進捗表示にする
    const percent = Math.ceil(this.loadedElNum / this.totalElNum * 90);
    this.countEl.textContent = percent.toString();
    this.progressValEl.style.width = `${percent}%`;
    // 読み込み完了後、ローダーを非表示にする
    if (this.loadedElNum >= this.totalElNum) {
      setTimeout(() => {
        this.hideLoader();
      }, 500);
    }
  }

  /**
   * 要素ロード時のイベント設定
   */
  loadHandler(): void {
    // 画像のロードイベント
    [...this.imgEls].forEach(el => {
      el.addEventListener('load', () => {
        this.updateLoader();
      });
    });
    // 動画のロードイベント
    [...this.videoEls].forEach(el => {
      el.addEventListener('loadeddata', () => {
        this.updateLoader();
      });
    });
    // ページロード完了時のイベント
    window.onload = () => {
      this.loadedElNum = this.totalElNum;
      this.updateLoader();
    };
  }

  /**
   * ローダー非表示
   */
  hideLoader(): void {
    this.clearWindow();
    gsap.to(this.el, {
      duration: 1,
      opacity: 0,
      onComplete: () => {
        // ローダー要素を削除
        this.el.remove();
      }
    });
  }
}
