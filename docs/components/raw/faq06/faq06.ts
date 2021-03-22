export function faq06() {
  const tabEls = document.getElementsByClassName('faq-06__tab-item');
  const contentEls = document.getElementsByClassName('faq-06__content');
  const faq = new Faq06(tabEls, contentEls);
  faq.init();
}

class Faq06 {
  tabEls: HTMLCollection;
  contentEls: HTMLCollection;
  constructor(tabEls: HTMLCollection, contentEls: HTMLCollection) {
    this.tabEls = tabEls;
    this.contentEls = contentEls;
  }
  /**
   * 初期化
   */
  init() {
    if (!this.tabEls.length) return;
    this.changeHandler();
    /* @ts-ignore */
    this.tabEls[0].click();
  }
  /**
   * タブ表示を変更する
   * @param tabEl アクティブ表示するタブ要素
   */
  changeTab(tabEl: HTMLElement) {
    [...this.tabEls].forEach(el => {
      el.classList.remove('is-active');
    });
    tabEl.classList.add('is-active');
  }
  /**
   * 表示コンテンツを変更する
   * @param index コンテンツ番号
   */
  changeContent(index: number) {
    // 表示コンテンツを変更
    [...this.contentEls].forEach(el => {
      el.classList.remove('is-active');
    });
    this.contentEls[index].classList.add('is-active');
  }
  /**
   * コンテンツ変更イベントの設定
   */
  changeHandler() {
    [...this.tabEls].forEach(el => {
      el.addEventListener('click', e => {
        const target = <HTMLElement>e.target;
        const targetIndex = target.dataset.targetIndex;
        this.changeTab(target);
        this.changeContent(Number(targetIndex));
      });
    });
  }
}
