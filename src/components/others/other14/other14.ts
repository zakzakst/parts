'use strict';

export const other14 = () => {
  const other = new Other14();
  other.init();
}

class Other14 {
  el: HTMLElement;
  constructor() {
    this.el = document.getElementById('js-other-14');
  }

  /**
   * 初期化
   */
  init(): void {
    if (!this.el) return;
    console.log('other 14 init');
  }
}
