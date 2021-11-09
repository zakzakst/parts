'use strict';

export const utility01 = () => {
  const utility = new Utility01();
  utility.init();
}

class Utility01 {
  el: HTMLElement;
  cookieKey: String;
  cookieMaxAge: number;
  animSpeed: number;
  constructor() {
    this.el = document.createElement('div');
    this.cookieKey = 'cookie-check';
    this.cookieMaxAge = 180; // 30（日） * 24（時間） * 60（分） * 60（秒）
    this.animSpeed = 300; // ミリ秒
  }

  /**
   * 初期化
   */
  init(): void {
    // クッキーが有効でない場合、処理を終了
    if (!navigator.cookieEnabled) return;
    this.onLoad();
  }

  /**
   * ロード完了時のイベント設定
   */
  onLoad(): void {
    window.onload = () => {
      const checkState = this.getCheckState();
      // 未チェックの場合、チェックフォームを表示
      if (!checkState) {
        this.showForm();
      }
    };
  }

  /**
   * チェック状態の取得
   * @returns チェック状態
   */
  getCheckState(): Boolean {
    let result = false;
    const cookies = document.cookie;
    const cookiesArr = cookies.split(';');
    cookiesArr.forEach(cookie => {
      const cookieKey = cookie.split('=')[0];
      const cookieVal = cookie.split('=')[1];
      // 対応するクッキーに値が設定されている場合
      if (cookieKey === this.cookieKey && cookieVal) {
        result = true;
      }
    });
    return result;
  }

  /**
   * チェック状態の設定
   */
  setCheckState(val: Boolean): void {
    if (val) {
      // trueの場合、値と期限を設定
      document.cookie = `${this.cookieKey}=true; max-age=${this.cookieMaxAge}`;
    } else {
      // trueの場合、値と期限を削除
      document.cookie = `${this.cookieKey}=; expires=0`;
    }
  }

  /**
   * 確認フォームを表示
   */
  showForm(): void {
    // 要素の作成
    const markup = `
      <div class="utility-01">
        <p class="utility-01__text">テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。<p>
        <div class="utility-01__buttons">
          <button class="utility-01__button --is-agree">同意します</button>
          <button class="utility-01__button --is-disagree">同意しません</button>
        </div>
      <div>
    `;
    this.el.insertAdjacentHTML('beforeend', markup);
    this.el.style.transition = `${this.animSpeed}ms`;
    this.onClickForm();
    // 要素の挿入
    document.body.appendChild(this.el);
    setTimeout(() => {
      this.el.classList.add('is-animated');
    }, 40);
  }

  /**
   * 確認フォームを非表示
   */
  hideForm(): void {
    this.el.classList.remove('is-animated');
    setTimeout(() => {
      document.body.removeChild(this.el);
    }, this.animSpeed);
  }

  /**
   * 確認フォームクリック時のイベント設定
   */
  onClickForm(): void {
    this.el.addEventListener('click', e => {
      const targetEl = <HTMLElement>e.target;
      // 同意するボタンがクリックされた場合
      if (targetEl.classList.contains('--is-agree')) {
        this.setCheckState(true);
        this.hideForm();
      }
      // 同意しないボタンがクリックされた場合
      if (targetEl.classList.contains('--is-disagree')) {
        this.setCheckState(false);
        alert('同意しない場合の処理を実行（ページ遷移など）');
      }
    });
  }
}
