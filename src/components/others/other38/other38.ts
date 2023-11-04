'use strict';

export const other38 = () => {
  const other = new Other38();
  other.init();
};

class Other38 {
  el: HTMLElement;

  constructor() {
    this.el = document.getElementById('js-other-38');
  }

  /**
   * 初期化
   */
  init() {
    if (!this.el) return;
    this.setStyle1();
  }

  setStyle1() {
    const second = 16;
    const styleStr = `--filter-transition-duration: ${second}s; --hus-value: 360deg; --grayscale: 0;`;
    this.el.setAttribute('style', styleStr);
    setTimeout(() => {
      this.setStyle2();
    }, second * 1000);
  }

  setStyle2() {
    // 一度--hus-valueをクリア
    const styleStrClear = `--filter-transition-duration: 0s; --hus-value: 0deg; --grayscale: 0;`;
    this.el.setAttribute('style', styleStrClear);
    // dom更新されてから次のスタイルをセット
    setTimeout(() => {
      const second = 1;
      const styleStr = `--filter-transition-duration: ${second}s; --hus-value: 0deg; --grayscale: 1;`;
      this.el.setAttribute('style', styleStr);
      setTimeout(() => {
        this.setStyle1();
      }, second * 1000);
    }, 100);
  }
}
