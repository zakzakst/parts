'use strict';

import { U_COOKIE } from './utilities';

export const utility03 = () => {
  const utility = new Utility03('js-utility-03');
  utility.init();
}

class Utility03 {
  el: HTMLElement;
  constructor(elId: string) {
    this.el = document.getElementById(elId);
  }

  /**
   * 初期化
   */
  init() {
    if (!this.el) return;
    console.log(U_COOKIE.getAll());
    U_COOKIE.clear('test');
  }
}
