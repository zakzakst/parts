'use strict';

export const other25 = () => {
  const other = new Other25('js-other-25');
  other.init();
};

class Other25 {
  el: HTMLElement;
  backEl: HTMLElement;
  centerEl: HTMLElement;
  frontEl: HTMLElement;
  backOffset: number;
  centerOffset: number;
  frontOffset: number;
  constructor(id: string) {
    this.el = document.getElementById(id);
    if (!this.el) return;
    this.backEl = this.el.querySelector('.other-25__back');
    this.centerEl = this.el.querySelector('.other-25__center');
    this.frontEl = this.el.querySelector('.other-25__front');
    this.backOffset = 0.03;
    this.centerOffset = 0.04;
    this.frontOffset = 0.05;
  }

  /**
   * 初期化
   */
  init(): void {
    if (!this.el) return;
    this.onMouseMoveHandler();
  }

  /**
   * マウス移動時の処理設定
   */
  onMouseMoveHandler(): void {
    console.log('test');
    this.el.addEventListener('mousemove', (e) => {
      const elRect = this.el.getBoundingClientRect();
      const posX = e.clientX - elRect.left - elRect.width / 2;
      const posY = e.clientY - elRect.top - elRect.height / 2;

      this.backEl.style.transform = `translate(${posX * this.backOffset}px, ${
        posY * this.backOffset
      }px)`;
      this.centerEl.style.transform = `translate(${
        posX * this.centerOffset
      }px, ${posY * this.centerOffset}px)`;
      this.frontEl.style.transform = `translate(${posX * this.frontOffset}px, ${
        posY * this.frontOffset
      }px)`;
    });
  }
}
