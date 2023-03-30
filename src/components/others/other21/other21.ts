'use strict';

export const other21 = () => {
  const other = new Other21();
  other.init();
};

class Other21 {
  boxEl: HTMLElement;
  boxAnim: Animation;
  loadedAnim: Animation;
  isLoaded: boolean;
  startEl: HTMLButtonElement;
  resetEl: HTMLButtonElement;
  timer: number;
  constructor() {
    this.boxEl = document.getElementById('js-other-21-box');
    this.startEl = document.getElementById(
      'js-other-21-start'
    ) as HTMLButtonElement;
    this.resetEl = document.getElementById(
      'js-other-21-reset'
    ) as HTMLButtonElement;
  }

  /**
   * 初期化
   */
  init() {
    if (!this.boxEl) return;
    this.setBoxAnim();
    this.initOnClickStart();
    this.initOnClickReset();
  }

  /**
   * ボックスアニメーション設定
   */
  setBoxAnim() {
    const keyframes = [
      {
        transform: 'rotate(0)',
        backgroundColor: '#000',
      },
      {
        backgroundColor: '#f00',
        offset: 0.3,
      },
      {
        backgroundColor: '#0f0',
        offset: 0.5,
      },
      {
        transform: 'rotate(360deg)',
        backgroundColor: '#000',
      },
    ];

    // https://developer.mozilla.org/en-US/docs/Web/API/KeyframeEffect/KeyframeEffect
    const timing = {
      duration: 2000,
      // iterations: Infinity,
      easing: 'ease',
    };

    this.boxAnim = this.boxEl.animate(keyframes, timing);
    this.boxAnim.pause();

    this.boxAnim.onfinish = () => {
      if (this.isLoaded) {
        // animateを二つ設定するとtransformが上書きされてしまうため、ロード完了まで回転アニメーションを上書きしないようにする
        this.setLoadedAnim();
        this.loadedAnim.play();
      } else {
        this.boxAnim.play();
      }
    };
  }

  /**
   * ロード完了アニメーション設定
   */
  setLoadedAnim() {
    const keyframes = [
      {
        transform: 'translate(0, 0)',
        opacity: 1,
      },
      {
        transform: 'translate(40px, -40px)',
        opacity: 0,
      },
    ];

    const timing = {
      duration: 500,
      fill: 'forwards' as FillMode,
      easing: 'ease-out',
    };

    this.loadedAnim = this.boxEl.animate(keyframes, timing);
    this.loadedAnim.pause();
  }

  /**
   * ランダムな数字取得
   */
  getRandomMinMax(min: number, max: number) {
    return Math.floor(Math.random() * (max - min) + min);
  }

  /**
   * スタートボタンクリック時の挙動設定
   */
  initOnClickStart() {
    this.startEl.addEventListener('click', () => {
      this.boxAnim.play();

      // 非同期処理の挙動想定
      const loadTime = this.getRandomMinMax(5000, 10000);
      this.timer = window.setTimeout(() => {
        this.isLoaded = true;
      }, loadTime);
    });
  }

  /**
   * リセットボタンクリック時の挙動設定
   */
  initOnClickReset() {
    this.resetEl.addEventListener('click', () => {
      this.boxAnim.cancel();
      this.loadedAnim?.cancel();
      clearTimeout(this.timer);
      this.isLoaded = false;
    });
  }
}
