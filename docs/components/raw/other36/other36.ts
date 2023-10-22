'use strict';
import lottie, { AnimationItem } from 'lottie-web';

export const other36 = () => {
  const other = new Other36();
  other.init();
};

class Other36 {
  el: HTMLElement;
  buttonEls: NodeListOf<HTMLElement>;
  animContainerEl: HTMLElement;
  lottieDataUrl: string;
  lottie: AnimationItem;
  isEmoting: boolean;

  constructor() {
    this.el = document.getElementById('js-other-36');
    this.buttonEls = document.querySelectorAll('.button');
    this.animContainerEl = document.getElementById(
      'js-other-36-anim-container'
    );
    if (location.origin === 'https://zakzakst.github.io') {
      // GitHubの場合
      this.lottieDataUrl = '/parts/img/components/others/other36/emotions.json';
    } else {
      // ローカル環境の場合
      this.lottieDataUrl = '/img/components/others/other36/emotions.json';
    }
    this.isEmoting = false;
  }

  /**
   * 初期化
   */
  init() {
    if (!this.el) return;
    this.lottieInit();
    this.buttonsInit();
  }

  /**
   * lottie 初期化
   */
  lottieInit() {
    this.lottie = lottie.loadAnimation({
      container: this.animContainerEl,
      renderer: 'svg',
      loop: false,
      autoplay: false,
      path: this.lottieDataUrl,
      initialSegment: [0, 24],
    });
    // 何倍かの数値を設定。1は通常の速度
    this.lottie.setSpeed(1.5);
    // ループ完了時の処理
    // @ts-ignore
    this.lottie.onComplete = async () => {
      if (this.isEmoting) {
        this.isEmoting = false;
      }
      this.lottieAnimLoop();
    };
    this.lottieAnimLoop();
  }

  /**
   * ループアニメーション表示
   */
  lottieAnimLoop() {
    this.lottie.playSegments([0, 24], true);
  }

  /**
   * 喜ぶアニメーション表示
   */
  lottieAnimHappy() {
    this.lottie.playSegments([24, 78], false);
  }

  /**
   * 怒るアニメーション表示
   */
  lottieAnimAngry() {
    this.lottie.playSegments([78, 132], false);
  }

  /**
   * 哀しむアニメーション表示
   */
  lottieAnimSad() {
    this.lottie.playSegments([132, 186], false);
  }

  /**
   * ボタンクリック時の処理
   */
  buttonsInit() {
    [...this.buttonEls].forEach((el) => {
      el.addEventListener('click', (e) => {
        if (this.isEmoting) return;
        this.isEmoting = true;
        const targetEl = e.target;
        // @ts-ignore
        const emotionName = targetEl.dataset.emotion;
        switch (emotionName) {
          case 'happy':
            this.lottieAnimHappy();
            break;
          case 'angry':
            this.lottieAnimAngry();
            break;
          case 'sad':
            this.lottieAnimSad();
            break;
          default:
            console.log('対応するアニメーションがありません');
        }
      });
    });
  }
}
