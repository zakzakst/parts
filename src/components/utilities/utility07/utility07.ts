'use strict';

export const utility07 = () => {
  const utility = new Utility07();
  utility.init();
}

type Validation = {
  id: string,
  message: string,
};

class Utility07 {
  el: HTMLElement;
  nameEl: HTMLElement;
  constructor() {
    this.el = document.getElementById('js-utility-07');
    this.nameEl = document.getElementById('js-utility-07-name');
  }

  /**
   * 初期化
   */
  init(): void {
    if (!this.el) return;
    this.onInputName();
  }

  /**
   * 名前フォーム入力時のイベント設定
   */
  onInputName() {
    if (!this.nameEl) return;
    this.nameEl.addEventListener('input', e => {
      const target = <HTMLInputElement>e.target;
      const targetVal = target.value;
      const validationResults = this.getValidationResults(targetVal, 4);
      const inputEl = this.nameEl.getElementsByClassName('js-utility-07-input')[0];
      const successEl = this.nameEl.getElementsByClassName('js-utility-07-success')[0];
      const dangerEl = this.nameEl.getElementsByClassName('js-utility-07-danger')[0];
      // TODO: 住所などのエラーがある場合も引っかかってしまうため、内容修正
      if (validationResults.length) {
        // 入力内容に問題がある場合
        const messages = validationResults.map(result => {
          return result.message;
        });
        inputEl.classList.remove('is-success');
        inputEl.classList.add('is-danger');
        successEl.classList.add('is-hidden');
        dangerEl.innerHTML = messages.join('<br>');
        dangerEl.classList.remove('is-hidden');
      } else {
        // 入力内容に問題がない場合
        inputEl.classList.remove('is-danger');
        inputEl.classList.add('is-success');
        successEl.classList.remove('is-hidden');
        dangerEl.innerHTML = '';
        dangerEl.classList.add('is-hidden');
      }
      console.log(validationResults);
    });
  }

  /**
   * 文字列のバリデーション結果取得
   * @param text バリデーションする文字列
   * @param maxLength 最大文字数（任意入力）
   * @returns バリデーション結果
   */
  getValidationResults(text: string, maxLength: number = null): Validation[] {
    const result = new Array;
    // 入力されているか判定
    if (!text) {
      result.push({
        id: 'required',
        message: '入力必須項目です。',
      });
    }
    // 最大文字数以内か判定
    if (maxLength && text.length > maxLength) {
      result.push({
        id: 'maxLength',
        message: `${maxLength}文字以内で入力してください。`,
      });
    }
    // 全角か判定
    if (!text.match(/^[^\x01-\x7E\xA1-\xDF]+$/)) {
      result.push({
        id: 'zenkaku',
        message: '全角文字で入力してください。',
      });
    }
    return result;
  }
}
