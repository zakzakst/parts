'use strict';

export const utility02 = () => {
  const utility = new Utility02('js-utility-02');
  utility.init();
}

class Utility02 {
  el: HTMLElement;
  checkboxEl: HTMLElement;
  buttonEl: HTMLButtonElement;
  modalEl: HTMLElement;
  modalOpenEls: HTMLCollection;
  modalCloseEls: HTMLCollection;
  constructor(elId: string) {
    this.el = document.getElementById(elId);
    this.checkboxEl = document.getElementById('js-utility-02-checkbox');
    this.buttonEl = <HTMLButtonElement>document.getElementById('js-utility-02-button');
    this.modalEl = document.getElementById('js-utility-02-modal');
    this.modalOpenEls = document.getElementsByClassName('js-utility-02-modal-open');
    this.modalCloseEls = document.getElementsByClassName('js-utility-02-modal-close');
  }

  /**
   * 初期化
   */
  init() {
    if (!this.el) return;
    this.onChangeCheckbox();
    this.onClickButton();
    this.onClickModalOpen();
    this.onClickModalClose();
  }

  /**
   * チェックボックス変更時のイベント設定
   */
  onChangeCheckbox():void {
    this.checkboxEl.addEventListener('change', e => {
      e.preventDefault();
      const target = <HTMLInputElement>e.target;
      if (target.checked) {
        this.buttonEl.disabled = false;
      } else {
        this.buttonEl.disabled = true;
      }
    });
  }

  /**
   * ボタンクリック時のイベント設定
   */
  onClickButton():void {
    this.buttonEl.addEventListener('click', e => {
      e.preventDefault();
      alert('ボタンクリック時の処理');
    });
  }

  /**
   * モーダル表示要素クリック時のイベント設定
   */
  onClickModalOpen():void {
    if (!this.modalOpenEls.length) return;
    [...this.modalOpenEls].forEach(el => {
      el.addEventListener('click', e => {
        e.preventDefault();
        this.modalOpen();
      });
    });
  }

  /**
   * モーダル非表示要素クリック時のイベント設定
   */
  onClickModalClose():void {
    if (!this.modalCloseEls.length) return;
    [...this.modalCloseEls].forEach(el => {
      el.addEventListener('click', e => {
        e.preventDefault();
        this.modalClose();
      });
    });
  }

  /**
   * モーダルを表示
   */
  modalOpen():void {
    this.modalEl.classList.add('is-active');
  }

  /**
   * モーダルを非表示
   */
  modalClose():void {
    this.modalEl.classList.remove('is-active');
  }
}
