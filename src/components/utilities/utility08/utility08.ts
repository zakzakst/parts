'use strict';

import flatpickr from 'flatpickr';
import { Japanese } from 'flatpickr/dist/l10n/ja.js';

export const utility08 = () => {
  const utility = new Utility08();
  utility.init();
}

class Utility08 {
  el: HTMLElement;
  inputEl: HTMLInputElement;
  startEl: HTMLElement;
  stopEl: HTMLElement;
  targetDate: Date;
  constructor() {
    this.el = document.getElementById('js-utility-08');
    this.inputEl = <HTMLInputElement>document.getElementById('js-utility-08-input');
    this.startEl = document.getElementById('js-utility-08-start');
    this.stopEl = document.getElementById('js-utility-08-stop');
    this.targetDate = null;
  }

  /**
   * 初期化
   */
  init(): void {
    if (!this.el) return;
    this.inputInit();
    this.onClickStart();
    this.onClickStop();
  }

  /**
   * 日時入力の初期化
   */
  inputInit(): void {
    const now = new Date();
    flatpickr(this.inputEl, {
      locale : Japanese,
      dateFormat : 'Y年m月d日（D）H:i',
      defaultDate : now,
      minDate: now,
      enableTime: true,
    });
  }

  /**
   * カウントダウン開始
   */
  countDown(): void {
    const now = new Date();
    // 現在日時と目標日時の秒数差分を計算
    const diff = this.targetDate.getTime() - now.getTime();
    // 目標日時を過ぎている場合、カウントダウン完了
    if (diff <= 0) {
      this.countDownFinish();
      return;
    }
    // 差分から残り日時の数値を計算
    const d = Math.floor(diff / (24 * 60 * 60 * 1000));
    const h = Math.floor(diff % (24 * 60 * 60 * 1000) / (60 * 60 * 1000));
    const m = Math.floor(diff % (60 * 60 * 1000) / (60 * 1000));
    const s = Math.floor(diff % (60 * 1000) / 1000);
    // カウントダウン文字列を設定
    this.countDownSetText(d, h, m, s);
    // 1秒後にカウントダウンを実行
    setTimeout(() => {
      this.countDown();
    }, 1000);
  }

  /**
   * カウントダウン文字列を設定
   * @param day 残りの日
   * @param hour 残りの時間
   * @param minute 残りの分
   * @param second 残りの秒
   */
  countDownSetText(day: number, hour: number, minute: number, second: number): void {
    console.log(day, hour, minute, second);
  }

  /**
   * カウントダウンを完了
   */
  countDownFinish(): void {
    console.log('カウントダウン完了');
  }

  /**
   * カウントダウンを中止
   */
  countDownStop(): void {
    console.log('カウントダウン中止');
  }

  /**
   * 開始ボタンクリック時のイベント設定
   */
  onClickStart(): void {
    this.startEl.addEventListener('click', () => {
      // 入力されている日時から目標日時を設定
      const inputVal = this.inputEl.value;
      const year = Number(inputVal.substring(0, 4));
      const month = Number(inputVal.substring(5, 7)) - 1;
      const day = Number(inputVal.substring(8, 10));
      const hour = Number(inputVal.substring(14, 16));
      const minute = Number(inputVal.substring(17, 19));
      this.targetDate = new Date(
        year,
        month,
        day,
        hour,
        minute
      );
      const now = new Date();
      if (this.targetDate.getTime() > now.getTime()) {
        // 未来の日付が設定されている場合、カウントダウンを開始
        this.countDown();
      } else {
        // 未来の日付が設定されていない場合、処理を終了
        alert('カウントダウンの目標日時は未来の時間を設定してください。');
        return;
      }
    });
  }

  /**
   * 中止ボタンクリック時のイベント設定
   */
  onClickStop(): void {
    this.stopEl.addEventListener('click', () => {
      this.countDownStop();
    });
  }
}
