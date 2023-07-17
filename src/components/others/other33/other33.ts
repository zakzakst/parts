export const other33 = () => {
  const other = new Other33();
  other.init();
};

type toastData = {
  message: string;
  type: 'success' | 'error';
};

class Other33 {
  el: HTMLDivElement;
  buttonEl: HTMLButtonElement;
  constructor() {
    this.el = document.getElementById('js-other-33') as HTMLDivElement;
    this.buttonEl = document.getElementById(
      'js-other-33-button'
    ) as HTMLButtonElement;
  }

  /**
   * 初期化
   */
  init() {
    if (!this.el) return;
    this.initOnClickButton();
  }

  /**
   * トーストを追加する
   * @param data {toastData}
   */
  setupToast(data: toastData) {
    const toastEl = this.createToastEl(data);
    this.el.appendChild(toastEl);
  }

  /**
   * トースト要素を作成する
   * @param data {toastData}
   * @return {HTMLDivElement}
   */
  createToastEl(data: toastData): HTMLDivElement {
    const toastEl = document.createElement('div');

    // クラスの付与
    toastEl.classList.add('notification');
    if (data.type === 'success') {
      toastEl.classList.add('is-primary');
    } else if (data.type === 'error') {
      toastEl.classList.add('is-warning');
    }

    // メッセージ設定
    toastEl.insertAdjacentHTML('afterbegin', data.message);

    // 閉じるボタン設定
    const closeButtonEl = document.createElement('button');
    closeButtonEl.classList.add('delete');
    closeButtonEl.addEventListener('click', () => this.removeToast(toastEl));
    toastEl.appendChild(closeButtonEl);

    return toastEl;
  }

  /**
   * トーストを削除する
   * @param {HTMLDivElement}
   */
  removeToast(el: HTMLDivElement) {
    console.log(el);
  }

  /**
   * ボタンクリック時の処理初期化
   */
  initOnClickButton() {
    this.buttonEl.addEventListener('click', () => {
      // ランダムに表示させる内容を作る
      const data: toastData =
        Math.random() > 0.5
          ? { message: 'Success!', type: 'success' }
          : { message: 'Error!', type: 'error' };
      this.setupToast(data);
    });
  }
}
