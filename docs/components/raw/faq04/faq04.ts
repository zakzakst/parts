import { gsap } from "gsap";

export function faq04() {
  const items = document.getElementsByClassName('js-faq-04-question');
  [...items].forEach(item => {
    const faq = new Faq04(<HTMLElement>item);
    faq.init();
  });
}

class Faq04 {
  questionEl: HTMLElement;
  answerEl: HTMLElement;
  isOpen: Boolean;
  speed: number;
  constructor(questionEl: HTMLElement) {
    this.questionEl = questionEl;
    this.answerEl = <HTMLElement>this.questionEl.nextElementSibling;
    this.isOpen = false;
    this.speed = .5;
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
    if (!this.isOpen) {
      // 閉じている場合
      const self = this;
      this.questionEl.classList.add('is-active');
      gsap.to(this.answerEl, {
        duration: this.speed,
        height: 'auto',
        onComplete() {
          self.isOpen = true;
        }
      });
    } else {
      // 開いている場合
      const self = this;
      this.questionEl.classList.remove('is-active');
      gsap.to(this.answerEl, {
        duration: this.speed,
        height: 0,
        onComplete() {
          self.isOpen = false;
        }
      });
    }
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
