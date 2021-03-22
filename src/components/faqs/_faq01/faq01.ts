export function faq01() {
  const items = document.getElementsByClassName('js-faq-01-item');
  [...items].forEach(item => {
    const faq = new Faq01(<HTMLElement>item);
    faq.init();
  });
}

class Faq01 {
  itemEl: HTMLElement;
  questionEl: HTMLElement;
  answerEl: HTMLElement;
  constructor(itemEl: HTMLElement) {
    this.itemEl = itemEl;
    this.questionEl = this.itemEl.querySelector('.faq-01__question');
    this.answerEl = this.itemEl.querySelector('.faq-01__answer');
  }
  /**
   * 初期化
   */
  init() {
    this.toggleHandler();
  }
  /**
   * FAQを開閉する
   */
  toggleAnswer() {
    this.itemEl.classList.toggle('is-active');
  }
  /**
   * 開閉イベントの設定
   */
  toggleHandler() {
    this.questionEl.addEventListener('click', () => {
      this.toggleAnswer.call(this);
    });
  }
}
