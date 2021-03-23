import $ from 'jquery';
import 'slick-carousel';

export const carousel02 = () => {
  $(function() {
    const carousel = new Carousel02();
    carousel.init();
  });
}

class Carousel02 {
  $carousel: JQuery;
  $btnPrev: JQuery;
  $btnNext: JQuery;
  $indicator: JQuery;
  slickOpt: Object;
  slidesNum: number;
  constructor() {
    this.$carousel = $('#js-carousel-02-items ul');
    this.$btnPrev = $('#js-carousel-02-button-prev');
    this.$btnNext = $('#js-carousel-02-button-next');
    this.$indicator = $('#js-carousel-02-indicator');
    this.slidesNum = 2;
    this.slickOpt = {
      autoplaySpeed: 3000,
      arrows: false,
      dots: false,
      infinite: false,
      slidesToShow: this.slidesNum,
    };
  }

  /**
   * 初期化
   */
  init(): void {
    this.initHandler();
    this.btnHandler();
    this.changeHandler();
    // カルーセルの実行
    // @ts-ignore
    this.$carousel.slick(this.slickOpt);
  }

  /**
   * ボタンのスタイル設定
   * @param total カルーセル要素の総数
   * @param next 次のカルーセルの番号
   */
  setBtnStyle(total: number, next: number): void {
    // 前へボタンのスタイル
    if (next === 1) {
      this.$btnPrev.addClass('is-disable');
    } else {
      this.$btnPrev.removeClass('is-disable');
    }
    // 次へボタンのスタイル
    if (next === (total - this.slidesNum + 1)) {
      this.$btnNext.addClass('is-disable');
    } else {
      this.$btnNext.removeClass('is-disable');
    }
  }

  /**
   * インジケーターのスタイル設定
   * @param total カルーセル要素の総数
   * @param next 次のカルーセルの番号
   */
  setIndicatorStyle(total: number, next: number): void {
    const percent = next / (total - this.slidesNum + 1) * 100;
    this.$indicator.width(`${percent}%`);
  }

  /**
   * ボタンクリック時の挙動
   */
  btnHandler(): void {
    // 前へボタンクリック時
    this.$btnPrev.on('click', e => {
      e.preventDefault();
      // @ts-ignore
      this.$carousel.slick('slickPrev');
    });
    // 次へボタンクリック時
    this.$btnNext.on('click', e => {
      e.preventDefault();
      // @ts-ignore
      this.$carousel.slick('slickNext');
    });
  }

  /**
   * カルーセル構築時の挙動
   */
  initHandler(): void {
    this.$carousel.on('init reInit', (e, slick) => {
      const total = slick.slideCount;
      this.setBtnStyle(total, 1);
      this.setIndicatorStyle(total, 1);
    });
  }

  /**
   * カルーセル変更時の挙動
   */
  changeHandler(): void {
    this.$carousel.on('beforeChange', (e, slick, current, next) => {
      const total = slick.slideCount;
      this.setBtnStyle(total, next + 1);
      this.setIndicatorStyle(total, next + 1);
    });
  }
}
