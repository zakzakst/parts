'use strict';

// @ts-ignore
import QRCode from 'qrcode';

export const utility11 = () => {
  const utility = new Utility11();
  utility.init();
}

class Utility11 {
  canvasEl: HTMLElement;
  options: Object;
  constructor() {
    this.canvasEl = document.getElementById('js-utility-11');
    this.options = {
      errorCorrectionLevel: 'H',
      margin: 0,
      color: {
        dark: "#010599FF",
        light: "#FFBF60FF"
      },
    };
  }

  /**
   * 初期化
   */
  async init(): Promise<void> {
    if (!this.canvasEl) return;
    await this.makeQRCode('test QRコード');
  }

  /**
   * QRコード生成
   * @param text QRコードにする文字列
   */
  makeQRCode(text: string) {
    return new Promise((resolve, reject) => {
      QRCode.toCanvas(this.canvasEl, text, this.options, (error: Error) => {
        if (error) console.error(error);
      });
    });
  }
}
