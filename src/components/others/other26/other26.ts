'use strict';

export const other26 = () => {
  const other = new Other26('js-other-26');
  other.init();
};

class Other26 {
  el: HTMLElement;
  bgEl: HTMLElement;
  itemEls: NodeListOf<HTMLElement>;
  constructor(id: string) {
    this.el = document.getElementById(id);
    if (!this.el) return;
    this.bgEl = this.el.querySelector('.other-26__bg');
    this.itemEls = this.el.querySelectorAll('.other-26__item');
  }

  /**
   * 初期化
   */
  init(): void {
    if (!this.el) return;
    this.onHoverItemHandler();
  }

  /**
   * 項目ホバー時の処理
   */
  onHoverItemHandler() {
    const self = this;
    [...this.itemEls].forEach((el) => {
      el.addEventListener('mouseenter', (e) => {
        const targetEl = <HTMLElement>e.target;
        const targetImg = targetEl.querySelector('img').getAttribute('src');
        self.el.classList.add('--hover');
        self.bgEl.style.backgroundImage = `url(${targetImg})`;
      });
      el.addEventListener('mouseleave', () => {
        self.el.classList.remove('--hover');
      });
    });
  }
}
