'use strict';

export const carousel03 = () => {
  const carousel = new Carousel03('js-carousel-03');
  carousel.init();
}

class Carousel03 {
  el: HTMLElement;
  itemEls: NodeListOf<HTMLElement>;
  currentIndex: number;
  slideTime: number;
  loadedImg: number;
  constructor(elId: string) {
    this.el = document.getElementById(elId);
    if (!this.el) return;
    this.itemEls = this.el.querySelectorAll('.carousel-03__item-wrapper');
    this.loadedImg = 0;
    this.currentIndex = 0;
    this.slideTime = 4000;
  }

  /**
   * 初期化
   */
  init(): void {
    if (!this.el) return;
    this.loadingHandler();
  }

  /**
   * スライド
   * @param first 初期表示であるか
   */
  slide(first: Boolean = false): void {
    [...this.itemEls].forEach(el => {
      if (el.classList.contains('is-current')) {
        el.classList.remove('is-current');
        el.classList.remove('is-next');
      }
    });
    let current;
    if (first) {
      current = this.itemEls.length - 1;
    } else {
      current = this.currentIndex;
    }
    const next = current >= this.itemEls.length - 1 ? 0 : current + 1;
    const currentEl = this.itemEls[current];
    const nextEl = this.itemEls[next];
    currentEl.classList.add('is-current');
    nextEl.classList.add('is-next');
    // 次のスライドをアニメーションさせる
    setTimeout(() => {
      this.currentIndex = next;
      this.slide();
    }, this.slideTime);
  }

  /**
   * 画像読み込み完了時の処理
   */
  loadingHandler(): void {
    [...this.itemEls].forEach(el => {
      const bgEl = <HTMLElement>el.querySelector('.carousel-03__bg');
      // 背景要素から画像URLを取得
      const url = bgEl.style.backgroundImage.replace(/^url\(["']?/, '').replace(/["']?\)$/, '');
      const img = new Image();
      img.addEventListener('load', () => {
        this.loadedImg++;
        this.startSlide();
      });
      img.src = url;
    });
  }

  /**
   * スライドの開始
   */
  startSlide(): void {
    // 全ての画像の読み込みが完了していない場合、処理を終了
    if (this.loadedImg !== this.itemEls.length) return;
    this.slide(true);
  }
}
