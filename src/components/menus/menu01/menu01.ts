export function menu01() {
  const menu = new Menu01();
  menu.init();
}

class Menu01 {
  menuEl: HTMLElement;
  menuItemEls: HTMLCollection;
  buttonEls: HTMLCollection;
  isOpen: Boolean;
  isBusy: Boolean;
  animTime: number;
  constructor() {
    this.menuEl = document.getElementById('js-menu-01');
    this.menuItemEls = this.menuEl ? this.menuEl.getElementsByClassName('menu-01__item') : null;
    this.buttonEls = this.menuEl ? document.getElementsByClassName('js-menu-01-button') : null;
    this.isOpen = false;
    this.isBusy = false;
    this.animTime = 1500;
  }

  /**
   * 初期化
   */
  init() {
    if (!this.menuEl) return
    this.onClickButton();
    this.onClickMenuItem();
  }

  /**
   * メニューを開閉する
   */
  toggleMenu() {
    // 開閉アニメーション中の場合、処理を終了
    if (this.isBusy) return;
    if (this.isOpen) {
      // メニューが開いている場合
      this.closeMenu();
    } else {
      // メニューが閉じている場合
      this.openMenu();
    }
  }

  /**
   * メニューを開く
   */
  openMenu() {
    // 開閉アニメーション実行状態を「true」にする
    this.isBusy = true;
    // アニメーション開始
    this.menuEl.classList.add('is-open');
    [...this.buttonEls].forEach(el => {
      el.classList.add('is-open');
    });
    this.isOpen = true;
    // アニメーション終了後
    setTimeout(() => {
      // 開閉アニメーション実行状態を「false」にする
      this.isBusy = false;
    }, this.animTime);
  }

  /**
   * メニューを閉じる
   */
  closeMenu() {
    // 開閉アニメーション実行状態を「true」にする
    this.isBusy = true;
    // アニメーション開始
    this.menuEl.style.visibility = 'visible';
    this.menuEl.classList.remove('is-open');
    [...this.buttonEls].forEach(el => {
      el.classList.remove('is-open');
    });
    // アニメーション終了後
    setTimeout(() => {
      this.menuEl.style.visibility = null;
      this.isOpen = false;
      // 開閉アニメーション実行状態を「false」にする
      this.isBusy = false;
    }, this.animTime);
  }

  /**
   * メニュー開閉ボタンクリック時の挙動
   */
  onClickButton() {
    [...this.buttonEls].forEach(el => {
      el.addEventListener('click', e => {
        e.preventDefault();
        this.toggleMenu();
      });
    });
  }

  /**
   * メニューリンククリック時の挙動
   */
  onClickMenuItem() {
    [...this.menuItemEls].forEach(el => {
      el.addEventListener('click', e => {
        e.preventDefault();
        this.closeMenu();
        setTimeout(() => {
          // メニューが閉じた後の挙動を記載
          console.log('メニューリンククリック時の挙動');
        }, this.animTime);
      });
    });
  }
}
