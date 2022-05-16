'use strict';

// @ts-ignore
import QRCode from 'qrcodejs/qrcode.js';

export const utility11 = () => {
  const utility = new Utility11();
  utility.init();
}

class Utility11 {
  el: HTMLElement;
  constructor() {
    this.el = document.getElementById('js-utility-11');
  }

  /**
   * 初期化
   */
  init(): void {
    if (!this.el) return;
    const qrcode = new QRCode(this.el, {
      text: "QRコードの生成",
      width: 128,
      height: 128,
      colorDark: "#000000",
      colorLight: "#ffffff",
      correctLevel: QRCode.CorrectLevel.H,
    });
  }
}
