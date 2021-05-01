'use strict';

export const scrollAnim17 = () => {
  const anim = new Anim17('#js-scroll-anim-17');
  anim.init();
}

class Anim17 {
  el: HTMLElement;
  hidePos: Number;
  scrollPos: Number;
  hideClass: string;
  ticking: Boolean;
  constructor(elSelector: string) {
    this.el = document.querySelector(elSelector);
    this.hidePos = 72;
    this.scrollPos = 0;
    this.hideClass = 'is-hide';
    this.ticking = false;
  }

  /**
   * 初期化
   */
  init(): void {
    if (!this.el) return;
    this.scrollHandler();
  }

  /**
   * 要素の表示・非表示
   */
  toggleEl() {
    const currentPos = window.scrollY;
    if (currentPos < this.hidePos) {
      // 表示領域内の場合
      this.el.classList.remove(this.hideClass);
    } else if (currentPos < this.scrollPos) {
      // 非表示領域内でスクロール方向が上の場合
      this.el.classList.remove(this.hideClass);
    } else {
      // 非表示領域内でスクロール方向が下の場合
      this.el.classList.add(this.hideClass);
    }
    // スクロール量を更新
    this.scrollPos = currentPos;
  }

  /**
   * スクロール連動のイベント設定
   */
  scrollHandler(): void {
    window.addEventListener('scroll', () => {
      if (!this.ticking) {
        requestAnimationFrame(() => {
          this.ticking = false;
          this.toggleEl();
        });
        this.ticking = true;
      }
    }, { passive: true });
  }
}
