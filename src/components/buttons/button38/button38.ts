'use strict';

import { gsap } from 'gsap';

export const button38 = () => {
  const button = new Button38('js-button-38');
  button.init();
}

class Button38 {
  els: HTMLCollectionOf<Element>;
  circleSelector: string;
  hover: Boolean;
  clicked: Boolean;
  constructor(className: string) {
    this.els = document.getElementsByClassName(className);
    this.circleSelector = '.button-38__circle';
    this.hover = false;
    this.clicked = false;
  }

  /**
   * 初期化
   */
  init(): void {
    if (!this.els.length) return;
    this.onEnterHandler();
    this.onLeaveHandler();
    this.onMoveHandler();
    this.onClickHandler();
  }

  /**
   * 円要素の位置設定
   * @param el マウスイン／アウトした要素
   * @param event イベントオブジェクト
   * @param smooth スムーズに移動させる
   */
  setCirclePos(el: HTMLElement, event: MouseEvent, smooth: Boolean = false): void {
    // クリック済の場合、処理を終了
    if (this.clicked) return;
    const circleEl = <HTMLElement>el.querySelector(this.circleSelector);
    const clientRect = el.getBoundingClientRect();
    // 要素内におけるカーソル位置を取得
    const x = event.pageX - (clientRect.left + window.pageXOffset);
    const y = event.pageY - (clientRect.top + window.pageYOffset);
    // 要素の位置を設定
    if (smooth) {
      gsap.to(circleEl, {
        duration: 1,
        left: x,
        top: y,
      });
    } else {
      circleEl.style.left = x + 'px';
      circleEl.style.top = y + 'px';
    }
  }

  /**
   * カーソル進入時の処理
   */
  onEnterHandler(): void {
    [...this.els].forEach(el => {
      el.addEventListener('mouseenter', e => {
        this.setCirclePos(<HTMLElement>el, <MouseEvent>e);
        el.classList.add('is-hover');
      });
    });
  }

  /**
   * カーソル退出時の処理
   */
  onLeaveHandler(): void {
    [...this.els].forEach(el => {
      el.addEventListener('mouseleave', e => {
        console.log('test');
        this.setCirclePos(<HTMLElement>el, <MouseEvent>e);
        el.classList.remove('is-hover', 'is-clicked');
        // クリック済フラグを初期化
        this.clicked = false;
      });
    });
  }

  /**
   * カーソル移動時の処理
   */
  onMoveHandler(): void {
    [...this.els].forEach(el => {
      el.addEventListener('mousemove', e => {
        this.setCirclePos(<HTMLElement>el, <MouseEvent>e, true);
      });
    });
  }

  /**
   * クリック時の処理
   */
  onClickHandler(): void {
    [...this.els].forEach(el => {
      el.addEventListener('click', e => {
        el.classList.add('is-clicked');
        this.clicked = true;
      });
    });
  }
}
