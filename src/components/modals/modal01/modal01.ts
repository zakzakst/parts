'use strict';

export const modal01 = () => {
  const modalEls = document.querySelectorAll('.js-modal-01');
  [...modalEls].forEach(el => {
    const modal = new Modal01(<HTMLElement>el);
    modal.init();
  });
}

class Modal01 {
  el: HTMLElement;
  modalEl: HTMLElement;
  bgEl: HTMLElement;
  closeEl: HTMLElement;
  constructor(el: HTMLElement) {
    this.el = el;
    if (!this.el) return;
    const targetId = this.el.dataset.target;
    this.modalEl = document.getElementById(targetId);
    this.bgEl = this.modalEl.querySelector('.modal-01__bg');
    this.closeEl = this.modalEl.querySelector('.modal-01__close');
  }

  /**
   * 初期化
   */
  init(): void {
    if (!this.el) return;
    this.onClickOpenHandler();
    this.onClickCloseHandler();
    this.onClickBgHandler();
  }

  /**
   * ウインドウ固定
   */
  fixWindow(): void {
    const scrollBarWidth = window.innerWidth - document.body.clientWidth;
    document.body.style.paddingRight = `${scrollBarWidth}px`;
    document.documentElement.style.overflow = 'hidden';
  }

  /**
   * ウインドウ固定を解除
   */
  clearWindow(): void {
    document.body.style.paddingRight = null;
    document.documentElement.style.overflow = null;
  }

  /**
   * モーダルを開く
   */
  open(): void {
    this.fixWindow();
    this.modalEl.classList.add('is-active');
  }

  /**
   * モーダルを閉じる
   */
  close(): void {
    this.modalEl.classList.remove('is-active');
    this.clearWindow();
  }

  /**
   * 開く要素クリック時の挙動
   */
  onClickOpenHandler(): void {
    this.el.addEventListener('click', e => {
      e.preventDefault();
      this.open();
    });
  }

  /**
   * 閉じるボタンクリック時の挙動
   */
  onClickCloseHandler(): void {
    this.closeEl.addEventListener('click', e => {
      e.preventDefault();
      this.close();
    });
  }

  /**
   * 背景クリック時の挙動
   */
  onClickBgHandler(): void {
    this.bgEl.addEventListener('click', e => {
      e.preventDefault();
      this.close();
    });
  }
}
