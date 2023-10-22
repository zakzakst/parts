'use strict';
import lottie, { AnimationItem } from 'lottie-web';

export const other35 = () => {
  const other = new Other35();
  other.init();
};

class Other35 {
  el: HTMLElement;
  loaderEl: HTMLElement;
  buttonEl: HTMLElement;
  modalEl: HTMLElement;
  closeEl: HTMLElement;
  lottieDataUrl: string;
  lottie: AnimationItem;
  // lottie: any;
  isLoading: boolean;
  isLoadingAnim: boolean;

  constructor() {
    this.el = document.getElementById('js-other-35');
    this.loaderEl = document.getElementById('js-other-35-loader');
    this.buttonEl = document.getElementById('js-other-35-button');
    this.modalEl = document.getElementById('js-other-35-modal');
    this.closeEl = document.getElementById('js-other-35-close');
    if (location.origin === 'https://zakzakst.github.io') {
      // GitHubの場合
      this.lottieDataUrl =
        '/parts/img/components/others/other35/present-2.json';
    } else {
      // ローカル環境の場合
      this.lottieDataUrl = '/img/components/others/other35/present-2.json';
    }
    this.isLoading = false;
    this.isLoadingAnim = true;
  }
  /**
   * 初期化
   */
  init() {
    if (!this.el) return;
    this.lottieInit();
    this.onClickButton();
    this.onClickClose();
  }

  /**
   * lottie 初期化
   */
  lottieInit() {
    this.lottie = lottie.loadAnimation({
      container: this.loaderEl,
      renderer: 'svg',
      loop: false,
      autoplay: false,
      path: this.lottieDataUrl,
    });
    // 何倍かの数値を設定。1は通常の速度
    this.lottie.setSpeed(1.5);
    // ループ完了時の処理
    // @ts-ignore
    this.lottie.onComplete = async () => {
      if (!this.isLoading) {
        // ロード完了している場合
        if (this.isLoadingAnim) {
          console.log('ループアニメーション終了');
          // 一度完了アニメーションを表示
          this.lottieFinishAnim();
          this.isLoadingAnim = false;
        } else {
          console.log('完了アニメーション終了');
          await this.delay(300);
          this.setModalLoading(false);
        }
      } else {
        this.lottieLoopAnim();
      }
    };
  }

  /**
   * 開始アニメーション表示
   */
  lottieStartAnim() {
    this.lottie.playSegments([0, 20], true);
  }

  /**
   * ループアニメーション表示
   */
  lottieLoopAnim() {
    this.lottie.playSegments([21, 90], false);
  }

  /**
   * 完了アニメーション表示
   */
  lottieFinishAnim() {
    this.lottie.playSegments([91, 150], false);
  }

  /**
   * 取得ボタンクリック時の挙動
   */
  onClickButton() {
    this.buttonEl.addEventListener('click', async () => {
      if (this.isLoading) return;
      this.isLoading = true;
      this.isLoadingAnim = true;
      this.setModalLoading(true);
      this.showModal();
      this.lottieStartAnim();
      console.log('ロード開始');
      await this.randomDelay(5000, 10000);
      console.log('ロード完了');
      this.isLoading = false;
    });
  }

  /**
   * 閉じるボタンボタンクリック時の挙動
   */
  onClickClose() {
    this.closeEl.addEventListener('click', async () => {
      this.hideModal();
    });
  }

  /**
   * 指定の秒数待つ
   * @param ms 待つミリ秒
   * @returns Promiseインスタンス
   */
  delay(ms: number = 1000) {
    return new Promise((resolve) => {
      return setTimeout(resolve, ms);
    });
  }

  /**
   * ランダムな秒数待つ
   * @param minMs 待つミリ秒（最小値）
   * @param maxMs 待つミリ秒（最大値）
   * @returns Promiseインスタンス
   */
  randomDelay(minMs: number = 1000, maxMs: number = 1000) {
    const defaultDelay = 1000;
    const delay =
      minMs > maxMs
        ? defaultDelay
        : Math.random() * (maxMs + 1 - minMs) + minMs;
    console.log(`ランダムな秒数待つ：${delay}ms`);
    return new Promise((resolve) => {
      return setTimeout(resolve, delay);
    });
  }

  /**
   * モーダルを表示
   */
  showModal() {
    this.modalEl.classList.add('is-active');
  }

  /**
   * モーダルを非表示
   */
  hideModal() {
    this.modalEl.classList.remove('is-active');
  }

  /**
   * モーダルのロード状態を設定する
   * @param loading ロード中かどうか（trueでロード中）
   */
  setModalLoading(loading: boolean) {
    if (loading) {
      this.modalEl.classList.add('is-loading');
    } else {
      this.modalEl.classList.remove('is-loading');
    }
  }
}
