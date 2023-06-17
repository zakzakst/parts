'use strict';

import { gsap } from 'gsap';

export const other08 = () => {
  const other = new Other08('js-other-08', 'js-other-08-close');
  other.init();
}

class Other08 {
  el: HTMLElement;
  hideEls: HTMLCollectionOf<Element>;
  constructor(elId: string, hideClass: string) {
    this.el = document.getElementById(elId);
    this.hideEls = document.getElementsByClassName(hideClass);
  }

  /**
   * 初期化
   */
  init(): void {
    if (!this.el) return;
    this.onHideElsClick();
  }

  /**
   * 要素を非表示にする
   */
  hide(): void {
    const self = this;
    gsap.to(this.el, {
      duration: 1,
      y: 30,
      opacity: 0,
      onComplete() {
        // 非表示後に要素を削除
        self.el.remove();
      },
    });
  }

  /**
   * 非表示ボタンクリック時の挙動
   */
  onHideElsClick() {
    [...this.hideEls].forEach(el => {
      el.addEventListener('click', e => {
        e.preventDefault();
        this.hide();
      });
    });
  }
}
