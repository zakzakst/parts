'use strict';

export const card12 = () => {
  const card = new Card12('js-card-12');
  card.init();
}

class Card12 {
  els: HTMLCollectionOf<Element>;
  circleSelector: string;
  constructor(className: string) {
    this.els = document.getElementsByClassName(className);
    this.circleSelector = '.card-12__circle';
  }

  /**
   * 初期化
   */
  init(): void {
    if (!this.els.length) return;
    this.onEnterHandler();
    this.onLeaveHandler();
  }

  /**
   * 円要素の位置設定
   * @param el マウスイン／アウトした要素
   * @param event イベントオブジェクト
   */
  setCirclePos(el: HTMLElement, event: MouseEvent): void {
    const circleEl = <HTMLElement>el.querySelector(this.circleSelector);
    const clientRect = el.getBoundingClientRect();
    // 要素内におけるカーソル位置を取得
    const x = event.pageX - (clientRect.left + window.pageXOffset);
    const y = event.pageY - (clientRect.top + window.pageYOffset);
    // 要素の位置を設定
    circleEl.style.left = x + 'px';
    circleEl.style.top = y + 'px';
  }

  /**
   * カーソル進入時の処理
   */
  onEnterHandler(): void {
    [...this.els].forEach(el => {
      el.addEventListener('mouseover', e => {
        this.setCirclePos(<HTMLElement>el, <MouseEvent>e);
      });
    });
  }

  /**
   * カーソル退出時の処理
   */
  onLeaveHandler(): void {
    [...this.els].forEach(el => {
      el.addEventListener('mouseout', e => {
        this.setCirclePos(<HTMLElement>el, <MouseEvent>e);
      });
    });
  }
}
