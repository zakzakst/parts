'use strict';

export const utility04 = () => {
  const utility = new Utility04('js-utility-04');
  utility.init();
}

const recItems = [
  {text: '明日', hiragana: 'あした'},
  {text: '朝ごはん', hiragana: 'あさごはん'},
  {text: '雨', hiragana: 'あめ'},
  {text: 'アンチテーゼ', hiragana: 'あんちてーぜ'},
  {text: '秋', hiragana: 'あき'},
  {text: 'アルフォート', hiragana: 'あるふぉーと'},
  {text: '餡蜜', hiragana: 'あんみつ'},
  {text: '空き缶', hiragana: 'あきかん'},

  {text: '今', hiragana: 'いま'},
  {text: '一生', hiragana: 'いっしょう'},
  {text: '一緒', hiragana: 'いっしょ'},
  {text: '色々', hiragana: 'いろいろ'},
  {text: '色鉛筆', hiragana: 'いろえんぴつ'}
];

type RecItem = {
  text: string,
  hiragana: string,
};

class Utility04 {
  el: HTMLElement;
  inputEl: HTMLInputElement;
  recommendEl: HTMLElement;
  recommendItems: RecItem[];
  recommendMaxNum: number;
  constructor(elId: string) {
    this.el = document.getElementById(elId);
    this.inputEl = <HTMLInputElement>document.getElementById('js-utility-04-input');
    this.recommendEl = document.getElementById('js-utility-04-recommend');
    this.recommendItems = [];
    this.recommendMaxNum = 3;
  }

  /**
   * 初期化
   */
  init(): void {
    if (!this.el) return;
    this.recommendItems = recItems;
    this.onInputFrom();
    this.onBlurFrom();
    this.onClickRecommend();
  }

  /**
   * レコメンド文言を取得
   * @param keyword キーワード
   * @returns キーワードに対応するレコメンド文言の配列
   */
  getRecommendItems(keyword: string): RecItem[] {
    const result = new Array;
    for(let item of this.recommendItems) {
      if (
        item.text.indexOf(keyword) !== -1 ||
        item.hiragana.indexOf(keyword) !== -1
      ) {
        result.push(item);
      }
      // レコメンド最大表示数を超えた場合、処理を終了
      if (result.length > this.recommendMaxNum - 1) break;
    }
    return result;
  }

  /**
   * レコメンドを表示
   * @param items レコメンド表示する文言の配列
   */
  showRecommend(items: RecItem[]): void {
    // レコメンド表示の内容を初期化
    this.recommendEl.innerHTML = '';
    items.forEach(item => {
      const markup = `<a class="js-utility-04-recommend-item panel-block" data-keyword-text="${item.text}">${item.text}</a>`;
      this.recommendEl.insertAdjacentHTML('beforeend', markup);
    });
  }

  /**
   * レコメンドを非表示
   */
  hideRecommend(): void {
    this.recommendEl.innerHTML = '';
  }

  /**
   * フォーム入力時のイベント設定
   */
  onInputFrom(): void {
    this.inputEl.addEventListener('input', e => {
      e.preventDefault();
      const keyword = this.inputEl.value;
      const currentRecItems = this.getRecommendItems(keyword);
      if (keyword && currentRecItems.length) {
        // レコメンド文言がある場合、表示
        this.showRecommend(currentRecItems);
      } else {
        // レコメンド文言がない場合、非表示
        this.hideRecommend();
      }
    });
  }

  /**
   * フォームからフォーカスアウトした時のイベント設定
   */
  onBlurFrom(): void {
    this.inputEl.addEventListener('blur', e => {
      // 検索候補クリック時の挙動を有効にするために実行タイミングを送らせる
      setTimeout(() => {
        e.preventDefault();
        this.hideRecommend();
      }, 100);
    });
  }

  /**
   * レコメンドクリック時のイベント設定
   */
  onClickRecommend(): void {
    this.recommendEl.addEventListener('click', e => {
      e.preventDefault();
      const target = <HTMLElement>e.target;
      const targetItem = <HTMLElement>target.closest('.js-utility-04-recommend-item');
      const targetText = targetItem.dataset.keywordText;
      this.inputEl.value = targetText;
      this.inputEl.focus();
    });
  }
}
