'use strict';

import { U_COOKIE } from './utilities';

export const utility03 = () => {
  const utility = new Utility03();
  utility.init();
}

class Utility03 {
  el: HTMLElement;
  cookieKey: string;
  cookieMaxAge: number;
  bannerLink: string;
  bannerImg: string;
  bannerCloseEls: HTMLCollection;
  constructor() {
    this.el = document.createElement('div');
    this.cookieKey = 'utility-03';
    this.cookieMaxAge = 2592000; // 30（日） * 24（時間） * 60（分） * 60（秒）
    this.bannerLink = '#';
    this.bannerImg = 'https://bulma.io/images/placeholders/256x256.png';
    this.bannerCloseEls = document.getElementsByClassName('js-utility-03-banner-close');
  }

  /**
   * 初期化
   */
  init(): void {
    // NOTE: 対応する要素がない場合、処理を終了
    // ※fractalで他のパーツとJSを共有している関係上記載。サイト全体で有効にする想定のため、本来は不要
    const el = document.getElementById('js-utility-03');
    if (!el) return;
    // クッキーが有効でない場合、処理を終了
    if (!navigator.cookieEnabled) return;
    this.onLoad();
  }

  /**
   * ロード完了時のイベント設定
   */
  onLoad(): void {
    window.onload = () => {
      const checkCookie = U_COOKIE.get(this.cookieKey);
      // 未チェックの場合、チェックフォームを表示
      if (!checkCookie) {
        this.showBanner();
      }
    };
  }

  /**
   * バナーを表示
   */
   showBanner(): void {
    // 要素の作成
    const markup = `
      <div class="modal is-active">
        <div class="js-utility-03-banner-close modal-background"></div>
        <div class="modal-content utility-03__content">
          <a class="utility-03__banner" href="${this.bannerLink}">
            <div class="image is-square">
              <img src="${this.bannerImg}" />
            </div>
          </a>
        </div>
        <button class="js-utility-03-banner-close modal-close is-large" aria-label="close"></button>
      </div>
    `;
    this.el.insertAdjacentHTML('beforeend', markup);
    // 要素の挿入
    document.body.appendChild(this.el);
    this.onClickBannerClose();
  }

  /**
   * バナーを非表示
   */
  hideBanner(): void {
    // NOTE: maxAgeの引数を設定しない場合、セッション中のみクッキーを保持
    U_COOKIE.set(this.cookieKey, 'true');
    // U_COOKIE.set(this.cookieKey, 'true', this.cookieMaxAge);
    document.body.removeChild(this.el);
  }

  /**
   * バナー非表示要素クリック時のイベント設定
   */
  onClickBannerClose():void {
    if (!this.bannerCloseEls.length) return;
    [...this.bannerCloseEls].forEach(el => {
      el.addEventListener('click', e => {
        e.preventDefault();
        this.hideBanner();
      });
    });
  }
}
