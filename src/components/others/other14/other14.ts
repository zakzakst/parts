'use strict';
import lottie from 'lottie-web';

export const other14 = () => {
  const other = new Other14();
  other.init();
}

class Other14 {
  // TODO: ちゃんと型の指定する
  el: HTMLElement;
  controlEls: any;
  lottieDataUrl: string;
  lottie: any;
  constructor() {
    this.el = document.getElementById('js-other-14');
    this.controlEls = document.querySelectorAll('.js-other-14-button');
    this.lottieDataUrl = 'https://assets10.lottiefiles.com/packages/lf20_gSMVZV7ZdZ.json';
  }

  /**
   * 初期化
   */
  async init(): Promise<void> {
    if (!this.el) return;
    this.lottieInit();
    this.onClickControlButton();
    // const data = await this.lottieGetData();
    // console.log(data);
  }

  /**
   * lottie データ読み込み（不要）
   */
  lottieGetData(): Promise<Object | null> {
    return new Promise(resolve => {
      fetch(this.lottieDataUrl)
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          resolve(data);
        })
        .catch(error => {
          console.log(error);
          resolve(null);
        });
    });
  }

  /**
   * lottie 初期化
   */
  lottieInit(): void {
    this.lottie = lottie.loadAnimation({
      container: this.el, // the dom element that will contain the animation
      renderer: 'svg',
      loop: false,
      // loop: true,
      autoplay: false,
      path: this.lottieDataUrl // the path to the animation json
    });
    // loop: falseの時動くっぽい
    this.lottie.onComplete = (e: any) => {
      console.log('onComplete', e);
      alert('アニメーション完了');
    };
    // loop: trueの時動くっぽい
    this.lottie.onLoopComplete = (e: any) => {
      console.log('onLoopComplete', e);
    };
  }

  /**
   * 操作ボタンクリック時の挙動
   */
  onClickControlButton(): void {
    // TODO: ちゃんと型の指定する
    this.controlEls.forEach((el: any) => {
      el.addEventListener('click', (e: any) => {
        e.preventDefault();
        const controlName = el.dataset['control'];
        switch (controlName) {
          case 'play':
            this.lottie.play();
            break;
          case 'stop':
            this.lottie.stop();
            break;
          case 'pause':
            this.lottie.pause();
            break;
          // マーカーを設定すれば指定位置から開始も可能っぽい
          // https://lottiefiles.com/blog/tips-and-tutorials/how-to-setup-named-markers-in-lottie-animations
          // case 'goToAndPlay':
          //   this.lottie.goToAndPlay();
          //   break;

          default:
            break;
        }
      });
    });
  }
}
