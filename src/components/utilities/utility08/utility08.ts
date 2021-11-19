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
  targetDate: Date;
  constructor() {
    this.el = document.getElementById('js-utility-08');
    this.inputEl = <HTMLInputElement>document.getElementById('js-utility-08-input');
    this.startEl = document.getElementById('js-utility-08-start');
    this.targetDate = null;
  }

  /**
   * 初期化
   */
  init(): void {
    if (!this.el) return;
    this.inputInit();
    this.onClickStart();
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
  countDownStart(): void {
    const now = new Date();
    if (this.targetDate.getTime() > now.getTime()) {
      // 未来の日付が設定されている場合、カウントダウンを開始
      console.log(this.targetDate);
    } else {
      // 未来の日付が設定されていない場合、処理を終了
      alert('カウントダウンの目標日時は未来の時間を設定してください。');
      return;
    }
  }

  /**
   * 開始ボタンクリック時のイベント設定
   */
  onClickStart(): void {
    this.startEl.addEventListener('click', () => {
      // 入力されている日時から目標日時を設定
      const inputVal = this.inputEl.value;
      const year = Number(inputVal.substring(0, 4));
      const month = Number(inputVal.substring(5, 7));
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
      // カウントダウン開始
      this.countDownStart();
    });
  }

  // カウントダウン先の日時を設定（現在時刻以降の時間のみ設定できるようにする）
  // クッキーにカウントダウン先の日時を保存
  // カウントダウンを開始
  // カウントダウン先の日時と比較して残りの時間を計算
  // カウントダウンの文字を表示
  // カウントダウンをやめる
}
