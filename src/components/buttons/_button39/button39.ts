'use strict';

export const button39 = () => {
  const button = new Button39('js-button-39');
  button.init();
}

class Button39 {
  el: HTMLElement;
  textEl: HTMLElement;
  texts: Array<string>;
  textNum: number;
  constructor(elId: string) {
    this.el = document.getElementById(elId);
    this.textEl = this.el.querySelector('.button-39__text-text');
    this.texts = [
      'ボタン39',
      'Button39',
      'Hello!!',
    ];
    this.textNum = 0;
  }

  /**
   * 初期化
   */
  init(): void {
    if (!this.el) return;
    this.onHoverHandler();
    setTimeout(() => {
      this.show();
    }, 1000);
  }

  /**
   * 要素を表示する
   */
  show(): void {
    this.el.classList.add('is-show');
  }

  /**
   * テキスト変更
   */
  changeText(): void {
    this.textEl.textContent = this.texts[this.textNum];
    this.textNum = this.texts.length - 1 === this.textNum ? 0 : this.textNum + 1;
  }

  /**
   * ホバー時の挙動
   */
  onHoverHandler(): void {
    this.el.addEventListener('mouseenter', () => {
      this.changeText();
    });
  }
}
