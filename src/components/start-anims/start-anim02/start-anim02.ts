'use strict';
import { gsap } from 'gsap';

export const startAnim02 = () => {
  const anim = new StartAnim02('js-start-anim-02');
  anim.init();
}

class StartAnim02 {
  el: HTMLElement;
  bgEl: HTMLElement;
  contentEl: HTMLElement;
  constructor(elId: string) {
    this.el = document.getElementById(elId);
    if (!this.el) return;
    this.bgEl = this.el.querySelector('.start-anim-02__bg');
    this.contentEl = this.el.querySelector('.start-anim-02__content');
  }

  /**
   * 初期化
   */
  init() {
    if (!this.el) return;
    this.onLoadHandler();
  }

  /**
   * 開始アニメーション
   */
  open() {
    const tl = gsap.timeline({
      onComplete: () => {
        this.el.remove();
      },
    });
    tl
      .to(this.contentEl, {
        duration: 0.3,
        opacity: 0,
      })
      .to(this.bgEl.children, {
        delay: 0.7,
        duration: 0.3,
        width: 0,
        stagger: {
          each: 0.1,
        }
      });
  }

  /**
   * ページロード完了時の挙動設定
   */
  onLoadHandler() {
    window.onload = () => {
      this.open();
    };
  }
}





import $ from 'jquery';

export function pageLoader() {
  $(window).on('load', () => {
    openAnim();
  });
}

function openAnim() {
  const tl = gsap.timeline({
    onComplete() {
      $('#js-page-loader').remove();
      setTimeout(() => {
        $('.hero__ttl, .hero__subttl').addClass('is-animated');
      }, 400);
    }
  });
  tl.to('.page-loader__content', {
    duration: .3,
    opacity: 0
  })
  .to('.page-loader__bg-item', {
    delay: .7,
    duration: .3,
    width: 0,
    stagger: {
      each: .1
    }
  });
}
