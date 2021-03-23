import $ from 'jquery';
import 'slick-carousel';

export const carousel01 = () => {
  $(function() {
    const el = $('#js-carousel-01-items ul');
    // 要素がない場合、処理を終了
    if (!el) return;
    // カルーセルの実行
    // @ts-ignore
    el.slick({
      autoplay: true,
      autoplaySpeed: 3000,
      arrows: false,
      dots: true,
      pauseOnFocus: false,
      pauseOnHover: true,
      dotsClass: 'carousel-01__pager-item',
      appendDots: $('#js-carousel-01-pager'),
      vertical: false,
    });
  });
}
