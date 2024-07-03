'use strict';

export const other23 = () => {
  const other = new Other23('js-other-23');
  other.init();
};

class Other23 {
  el: HTMLElement;
  circleSelector: string;
  constructor(id: string) {
    this.el = document.getElementById(id);
    this.circleSelector = '.other-23__circle';
  }

  /**
   * 初期化
   */
  init(): void {
    if (!this.el) return;
    this.onEnterHandler();
    this.onLeaveHandler();
  }

  /**
   * 円要素の位置設定
   * @param event イベントオブジェクト
   */
  setCirclePos(event: MouseEvent): void {
    const circleEl = <HTMLElement>this.el.querySelector(this.circleSelector);
    const clientRect = this.el.getBoundingClientRect();
    // 要素内におけるカーソル位置を取得
    const x = event.pageX - (clientRect.left + window.pageXOffset);
    const y = event.pageY - (clientRect.top + window.pageYOffset);
    // 要素の位置を設定
    // TODO: イージング処理できるようになりたい
    circleEl.style.transform = `translate(${x - 50}px, ${y - 50}px)`;
  }

  /**
   * カーソル進入時の処理
   */
  onEnterHandler(): void {
    this.el.addEventListener('mouseover', () => {
      this.el.classList.add('-on');
      this.el.addEventListener('mousemove', (e) => {
        this.setCirclePos(e);
      });
    });
  }

  /**
   * カーソル退出時の処理
   */
  onLeaveHandler(): void {
    this.el.addEventListener('mouseout', () => {
      this.el.classList.remove('-on');
      this.el.removeEventListener('mousemove', (e) => {
        this.setCirclePos(e);
      });
    });
  }
}
