'use strict';

import { gsap } from 'gsap';

export const menu02 = ()=> {
  const menu = new Menu02('js-menu-02');
  menu.init();
}

class Menu02 {
  el: HTMLElement;
  btnEl: HTMLElement;
  bgEls: NodeListOf<HTMLElement>;
  contentEl: HTMLElement;
  linkEls: NodeListOf<HTMLElement>;
  constructor(elId: string) {
    this.el = document.getElementById(elId);
    if (!this.el) return;
    this.btnEl = this.el.querySelector('.menu-02__btn');
    this.bgEls = this.el.querySelectorAll('.menu-02__bg-item');
    this.contentEl = this.el.querySelector('.menu-02__content');
    this.linkEls = this.el.querySelectorAll('.menu-02__link');
  }

  /**
   * 初期化
   */
  init(): void {
    if (!this.el) return;
    this.onClickHandler();
  }

  /**
   * メニューを開く
   */
  open(): void {
    this.btnEl.classList.add('is-active');
    const tl = gsap.timeline();
    tl.set(this.contentEl, {
      display: 'block'
    })
    .to(this.bgEls, {
      duration: .2,
      width: '26%',
      stagger: {
        each: 0.1
      }
    })
    .to(this.linkEls, {
      delay: .2,
      duration: .3,
      x: 0,
      opacity: 1
    });
  }

  /**
   * メニューを閉じる
   */
  close(): void {
    this.btnEl.classList.remove('is-active');
    const tl = gsap.timeline();
    tl.set(this.bgEls, {
      width: '25%'
    })
    .to(this.linkEls, {
      duration: .3,
      x: 20,
      opacity: 0
    })
    .to(this.bgEls, {
      delay: .2,
      duration: .2,
      scaleX: 0,
      stagger: {
        each: 0.1
      }
    })
    .set([this.contentEl, this.bgEls, this.linkEls], {
      clearProps: 'all'
    });
  }

  /**
   * ボタンクリック時の挙動設定
   */
  onClickHandler(): void {
    this.btnEl.addEventListener('click', e => {
      e.preventDefault();
      if (this.btnEl.classList.contains('is-active')) {
        this.close();
      } else {
        this.open();
      }
    });
  }
}
