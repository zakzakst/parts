'use strict';

import { gsap } from 'gsap';

export const other09 = () => {
  const other = new Other09('js-other-09');
  other.init();
}

class Other09 {
  el: HTMLElement;
  letters: Array<string>;
  word: Array<number>;
  constructor(elId: string) {
    this.el = document.getElementById(elId);
    this.letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
    this.word = [0, 0, 0, 0];
  }

  /**
   * 初期化
   */
  init(): void {
    if (!this.el) return;
    this.startAnim();
  }

  /**
   * 文言アニメーション開始
   */
  startAnim() {
    const tl = gsap.timeline({
      onUpdate: () => {
        this.update();
      }
    })
    .to(this.word, 2, { '0': 26 * 3 + 6  }, 0)
    .to(this.word, 3, { '1': 26 * 3 + 18 }, 0)
    .to(this.word, 4, { '2': 26 * 3 + 0  }, 0)
    .to(this.word, 5, { '3': 26 * 3 + 15 }, 0);
  }

  /**
   * 文言更新
   */
  update(): void {
    let text = '';
    for (var i = 0; i < this.word.length; i++) {
      text += this.letters[Math.round(this.word[i]) % 26];
    }
    this.el.textContent = text;
  }
}
