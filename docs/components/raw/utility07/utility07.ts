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
  yomiganaEl: HTMLElement;
  mailEl: HTMLElement;
  contactEl: HTMLElement;
  constructor() {
    this.el = document.getElementById('js-utility-07');
    this.nameEl = document.getElementById('js-utility-07-name');
    this.yomiganaEl = document.getElementById('js-utility-07-yomigana');
    this.mailEl = document.getElementById('js-utility-07-mail');
    this.contactEl = document.getElementById('js-utility-07-contact');
  }

  /**
   * 初期化
   */
  init(): void {
    if (!this.el) return;
    this.onInputName();
    this.onInputYomigana();
    this.onInputMail();
    this.onInputContact();
  }

  /**
   * フォームのスタイル設定
   * @param el 対象のHTML要素
   * @param style 設定するスタイル
   */
  setFormStyle(el: HTMLElement, style: string) {
    const inputEl = el.getElementsByClassName('js-utility-07-input')[0];
    const successEl = el.getElementsByClassName('js-utility-07-success')[0];
    const dangerEl = el.getElementsByClassName('js-utility-07-danger')[0];
    if (style === 'success') {
      inputEl.classList.remove('is-danger');
      inputEl.classList.add('is-success');
      successEl.classList.remove('is-hidden');
      dangerEl.classList.add('is-hidden');
    }
    if (style === 'danger') {
      inputEl.classList.remove('is-success');
      inputEl.classList.add('is-danger');
      successEl.classList.add('is-hidden');
      dangerEl.classList.remove('is-hidden');
    }
  }

  /**
   * 名前フォーム入力時のイベント設定
   */
  onInputName() {
    if (!this.nameEl) return;
    this.nameEl.addEventListener('input', e => {
      const target = <HTMLInputElement>e.target;
      const targetVal = target.value;
      const validationResults = this.getValidationResults(
        targetVal,
        ['required', 'zenkaku'],
        20
      );
      const dangerEl = this.nameEl.getElementsByClassName('js-utility-07-danger')[0];
      if (validationResults.length) {
        // 入力内容に問題がある場合
        const messages = validationResults.map(result => {
          return result.message;
        });
        dangerEl.innerHTML = messages.join('<br>');
        this.setFormStyle(this.nameEl, 'danger');
      } else {
        // 入力内容に問題がない場合
        dangerEl.innerHTML = '';
        this.setFormStyle(this.nameEl, 'success');
      }
    });
  }

  /**
   * ヨミガナフォーム入力時のイベント設定
   */
  onInputYomigana() {
    if (!this.yomiganaEl) return;
    this.yomiganaEl.addEventListener('input', e => {
      const target = <HTMLInputElement>e.target;
      const targetVal = target.value;
      const validationResults = this.getValidationResults(
        targetVal,
        ['required', 'zenkana'],
        20
      );
      const dangerEl = this.yomiganaEl.getElementsByClassName('js-utility-07-danger')[0];
      if (validationResults.length) {
        // 入力内容に問題がある場合
        const messages = validationResults.map(result => {
          return result.message;
        });
        dangerEl.innerHTML = messages.join('<br>');
        this.setFormStyle(this.yomiganaEl, 'danger');
      } else {
        // 入力内容に問題がない場合
        dangerEl.innerHTML = '';
        this.setFormStyle(this.yomiganaEl, 'success');
      }
    });
  }

  /**
   * メールフォーム入力時のイベント設定
   */
  onInputMail() {
    if (!this.mailEl) return;
    this.mailEl.addEventListener('input', e => {
      const target = <HTMLInputElement>e.target;
      const targetVal = target.value;
      const validationResults = this.getValidationResults(
        targetVal,
        ['required', 'mail']
      );
      const dangerEl = this.mailEl.getElementsByClassName('js-utility-07-danger')[0];
      if (validationResults.length) {
        // 入力内容に問題がある場合
        const messages = validationResults.map(result => {
          return result.message;
        });
        dangerEl.innerHTML = messages.join('<br>');
        this.setFormStyle(this.mailEl, 'danger');
      } else {
        // 入力内容に問題がない場合
        dangerEl.innerHTML = '';
        this.setFormStyle(this.mailEl, 'success');
      }
    });
  }

  /**
   * お問い合わせ内容フォーム入力時のイベント設定
   */
  onInputContact() {
    if (!this.contactEl) return;
    // 入力文字数の初期表示
    const maxLength = 100;
    const currentEl = document.getElementById('js-utility-07-contact-current');
    const maxEl = document.getElementById('js-utility-07-contact-max');
    currentEl.textContent = '0';
    maxEl.textContent = maxLength.toString();
    // 入力イベント設定
    this.contactEl.addEventListener('input', e => {
      const target = <HTMLInputElement>e.target;
      const targetVal = target.value;
      // 入力文字数の更新
      currentEl.textContent = targetVal.length.toString();
      const validationResults = this.getValidationResults(
        targetVal,
        [],
        maxLength
      );
      const dangerEl = this.contactEl.getElementsByClassName('js-utility-07-danger')[0];
      if (validationResults.length) {
        // 入力内容に問題がある場合
        const messages = validationResults.map(result => {
          return result.message;
        });
        dangerEl.innerHTML = messages.join('<br>');
        this.setFormStyle(this.contactEl, 'danger');
      } else {
        // 入力内容に問題がない場合
        dangerEl.innerHTML = '';
        this.setFormStyle(this.contactEl, 'success');
      }
    });
  }

  /**
   * 文字列のバリデーション結果取得
   * @param text バリデーションする文字列
   * @param maxLength 最大文字数（任意入力）
   * @returns バリデーション結果
   */
  getValidationResults(text: string, checkTypes: string[], maxLength: number = null): Validation[] {
    const result = new Array;
    // 入力されているか判定
    if (
      checkTypes.indexOf('required') !== -1 &&
      !text
    ) {
      result.push({
        id: 'required',
        message: '入力必須項目です。',
      });
    }
    // 最大文字数以内か判定
    if (
      maxLength &&
      text.length > maxLength
    ) {
      result.push({
        id: 'maxLength',
        message: `${maxLength}文字以内で入力してください。`,
      });
    }
    // 全角か判定
    if (
      checkTypes.indexOf('zenkaku') !== -1 &&
      text &&
      !text.match(/^[^\x01-\x7E\xA1-\xDF]+$/)
    ) {
      result.push({
        id: 'zenkaku',
        message: '全角文字で入力してください。',
      });
    }
    // 全角カタカナか判定
    if (
      checkTypes.indexOf('zenkana') !== -1 &&
      text &&
      !text.match(/^[ァ-ヶー　]+$/)
    ) {
      result.push({
        id: 'zenkana',
        message: '全角カタカナで入力してください。',
      });
    }
    // メールアドレスの書式か判定
    if (
      checkTypes.indexOf('mail') !== -1 &&
      text &&
      !text.match(/^[A-Za-z0-9]{1}[A-Za-z0-9_.-]*@{1}[A-Za-z0-9_.-]{1,}.[A-Za-z0-9]{1,}$/)
    ) {
      result.push({
        id: 'mail',
        message: 'メールアドレスを入力してください。',
      });
    }
    return result;
  }
}
