'use strict';

export const scrollAnim21 = () => {
  const anim = new Anim21('js-scroll-anim-21');
  anim.init();
}

class Anim21 {
  el: HTMLElement;
  numEl: NodeListOf<HTMLElement>;
  countTime: number;
  countInterval: number;
  constructor(elId: string) {
    this.el = document.getElementById(elId);
    if (!this.el) return;
    this.numEl = this.el.querySelectorAll('.scroll-anim-21__count');
    this.countTime = 1000;
    this.countInterval = 50;
  }

  /**
   * 初期化
   */
  init(): void {
    if (!this.el) return;
    this.scrollHandler();
  }

  /**
   * カウントアップ開始
   */
  startCountUp() {
    [...this.numEl].forEach(el => {
      let count = el.dataset.count;
      this.countUp(el, Number(count));
    });
  }

  /**
   * カウントアップ
   * @param el カウントする要素
   * @param count カウント数
   */
  countUp(el: HTMLElement, count: number) {
    let currentNumber = 0;
    let currentTime = 0;
    const timer = setInterval(() => {
      el.textContent = currentNumber.toString();
      currentTime += this.countInterval;
      currentNumber = Math.floor(count / this.countTime * currentTime);
      if(currentTime === this.countTime){
        clearInterval(timer);
        el.textContent = count.toString();
      }
    }, this.countInterval);
  }

  /**
   * スクロール連動のイベント設定
   */
  scrollHandler(): void {
    const options = {
      // @ts-ignore
      root: null,
      rootMargin: '-30% 0px',
      threshold: 0
    }
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.startCountUp();
          observer.disconnect();
        }
      });
    }, options);
    observer.observe(this.el);
  }
}
