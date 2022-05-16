'use strict';

// @ts-ignore
import QRCode from 'qrcode';

export const utility11 = () => {
  const utility = new Utility11();
  utility.init();
}

class Utility11 {
  canvasEl: HTMLElement;
  inputEl: HTMLInputElement;
  buttonEl: HTMLElement;
  options: Object;
  constructor() {
    this.canvasEl = document.getElementById('js-utility-11-canvas');
    this.inputEl = <HTMLInputElement>document.getElementById('js-utility-11-input');
    this.buttonEl = document.getElementById('js-utility-11-button');
    this.options = {
      errorCorrectionLevel: 'H',
      margin: 0,
      width: 240,
      color: {
        dark: '#010599FF',
        light: '#FFBF60FF'
      },
    };
  }

  /**
   * 初期化
   */
  init(): Promise<void> {
    if (!this.canvasEl) return;
    this.onClickButton();
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

  /**
   * ボタンクリック時の挙動設定
   */
  onClickButton(): void {
    this.buttonEl.addEventListener('click', async () => {
      const inputText = this.inputEl.value;
      if (!inputText) {
        // 入力がない場合、アラートを表示して処理を終了
        alert('QRコードに変換する文字を入力してください');
        return;
      }
      await this.makeQRCode(inputText);
    });
  }
}
