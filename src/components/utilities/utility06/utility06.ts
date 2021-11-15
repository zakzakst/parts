'use strict';

export const utility06 = () => {
  const utility = new Utility06();
  utility.init();
}

type Menu = {
  id: string,
  label: string,
  price: number,
};

type Topping = {
  id: string,
  label: string,
  price: number,
};

type Order = {
  menu: Menu,
  toppings: Topping[],
};

class Utility06 {
  el: HTMLElement;
  orders: Order[];
  ordersEl: HTMLElement;
  orderAddEls: HTMLCollection;
  orderSubmitEls: HTMLCollection;
  modalEl: HTMLElement;
  modalTargetIndex: number;
  modalBodyEl: HTMLElement;
  modalSubmitEl: HTMLElement;
  modalCloseEls: HTMLCollection;
  dataUrl: string;
  data: {menus: Menu[], toppings: Topping[]};
  constructor() {
    this.el = document.getElementById('js-utility-06');
    this.orders = [];
    this.ordersEl = document.getElementById('js-utility-06-orders');
    this.orderAddEls = document.getElementsByClassName('js-utility-06-order-add');
    this.orderSubmitEls = document.getElementsByClassName('js-utility-06-order-submit');
    this.modalEl = document.getElementById('js-utility-06-modal');
    this.modalTargetIndex = null;
    this.modalBodyEl = document.getElementById('js-utility-06-modal-body');
    this.modalSubmitEl = document.getElementById('js-utility-06-modal-submit');
    this.modalCloseEls = document.getElementsByClassName('js-utility-06-modal-close');
    if (location.origin === 'https://zakzakst.github.io') {
      // GitHubの場合
      this.dataUrl = '/parts/data/utility06.json';
    } else {
      // ローカル環境の場合
      this.dataUrl = '/data/utility06.json';
    }
    this.data = {
      menus: null,
      toppings: null,
    };
  }

  /**
   * 初期化
   */
  async init(): Promise<void> {
    if (!this.el) return;
    const data = await this.loadData();
    this.data.menus = data.menus;
    this.data.toppings = data.toppings;
    this.modalInit();
    // 注文関連のイベント設定
    this.onClickOrderAdd();
    this.onClickOrderSubmit();
    this.onClickOrders();
    this.onChangeOrderMenu();
    // モーダル関連のイベント設定
    this.onClickModalSubmit();
    this.onClickModalClose();
    // 初期表示のため、注文を追加
    this.orderAdd();
  }

  /**
   * データを読み込み
   */
  loadData(): Promise<any> {
    return new Promise(resolve => {
      fetch(this.dataUrl)
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          resolve(data);
        })
        .catch(error => {
          console.log(error);
          resolve({});
        });
    });
  }

  /**
   * 注文を追加
   */
  orderAdd(): void {
    let menuSelects = '';
    this.data.menus.forEach(menu => {
      menuSelects += `<option value="${menu.id}">${menu.label}</option>`;
    });
    const markup = `
      <div class="utility-06__order card">
        <div class="card-content">
          <div class="content">
            <div class="field is-horizontal">
              <div class="field-label is-normal">
                <label class="label">メニュー</label>
              </div>
              <div class="field-body">
                <div class="control">
                  <div class="select">
                    <select>${menuSelects}</select>
                  </div>
                </div>
              </div>
            </div>
            <div class="field is-horizontal">
              <div class="field-label">
                <label class="label">トッピング</label>
              </div>
              <div class="field-body is-narrow">
                <div class="control">
                  <p class="js-utility-06-order-topping-text">なし</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <footer class="card-footer">
          <a href="#" class="card-footer-item --add">トッピング追加</a>
          <a href="#" class="card-footer-item --delete">削除</a>
        </footer>
      </div>
    `;
    this.ordersEl.insertAdjacentHTML('beforeend', markup);
    this.orders.push({
      menu: this.data.menus[0],
      toppings: [],
    });
  }

  /**
   * 注文を削除
   * @param targetIndex 削除する注文のインデックス
   */
  orderDelete(targetIndex: number): void {
    // 対象のHTML・配列要素を削除
    this.orders.splice(targetIndex, 1);
    this.ordersEl.children[targetIndex].remove();
    if (!this.orders.length) {
      this.orderAdd();
    }
  }

  /**
   * モーダル初期化
   */
  modalInit(): void {
    this.data.toppings.forEach((topping: Topping) => {
      const markup = `<label class="checkbox mr-4"><input type="checkbox" value="${topping.id}">${topping.label}</label>`;
      this.modalBodyEl.insertAdjacentHTML('beforeend', markup);
    });
  }

  /**
   * モーダルを表示
   * @param targetIndex モーダルを表示する注文のインデックス
   */
  modalOpen(targetIndex: number): void {
    this.modalTargetIndex = targetIndex;
    // 対応する注文のトッピング情報を反映
    const targetToppings = this.orders[this.modalTargetIndex].toppings;
    targetToppings.forEach(topping => {
      const toppingEl = <HTMLInputElement>this.modalBodyEl.querySelector(`input[value='${topping.id}']`);
      toppingEl.checked = true;
    });
    this.modalEl.classList.add('is-active');
  }

  /**
   * モーダルを非表示
   */
  modalClose(): void {
    this.modalEl.classList.remove('is-active');
    // チェックボックスをクリア
    const checkboxEls = this.modalBodyEl.getElementsByTagName('input');
    [...checkboxEls].forEach(el => {
      el.checked = false;
    });
    this.modalTargetIndex = null;
  }

  /**
   * モーダルで選択されているトッピングを取得
   * @returns 選択されているトッピングの情報
   */
  getModalSelectToppings(): {text: string, items: Topping[]} {
    const selectVals: string[] = [];
    const checkboxEls = this.modalBodyEl.getElementsByTagName('input');
    [...checkboxEls].forEach(el => {
      if (el.checked) {
        selectVals.push(el.value);
      }
    });
    const selectItems = this.data.toppings.filter(topping => {
      return selectVals.indexOf(topping.id) !== -1
    });
    const selectLabels = selectItems.map(item => {
      return item.label;
    });
    return {
      text: selectLabels.join(' ／ '),
      items: selectItems,
    };
  }

  /**
   * 注文を追加ボタンクリック時のイベント設定
   */
  onClickOrderAdd(): void {
    [...this.orderAddEls].forEach(el => {
      el.addEventListener('click', e => {
        e.preventDefault();
        this.orderAdd();
      });
    });
  }

  /**
   * 注文するボタンクリック時のイベント設定
   */
  onClickOrderSubmit(): void {
    [...this.orderSubmitEls].forEach(el => {
      el.addEventListener('click', e => {
        e.preventDefault();
        let ordersPrice = 0;
        this.orders.forEach(order => {
          let orderPrice = order.menu.price;
          order.toppings.forEach(topping => {
            orderPrice += topping.price;
          });
          ordersPrice += orderPrice;
        });
        alert(`合計料金は${ordersPrice}円です。`);
      });
    });
  }

  /**
   * 注文カードクリック時のイベント設定
   */
  onClickOrders(): void {
    this.ordersEl.addEventListener('click', e => {
      const target = <HTMLElement>e.target;
      const targetOrderEl = target.closest('.utility-06__order');
      const targetOrderIndex = [...this.ordersEl.children].indexOf(targetOrderEl);
      if (target.classList.contains('--add')) {
        this.modalOpen(targetOrderIndex);
      }
      if (target.classList.contains('--delete')) {
        this.orderDelete(targetOrderIndex);
      }
    });
  }

  /**
   * 注文メニュー変更時のイベント設定
   */
  onChangeOrderMenu(): void {
    this.ordersEl.addEventListener('change', e => {
      const target = <HTMLInputElement>e.target;
      const targetOrderEl = target.closest('.utility-06__order');
      const targetOrderIndex = [...this.ordersEl.children].indexOf(targetOrderEl);
      const menuId = target.value;
      const menuItem = this.data.menus.find(menu => {
        return menu.id === menuId;
      });
      this.orders[targetOrderIndex].menu = menuItem;
    });
  }

  /**
   * モーダル決定ボタンクリック時のイベント設定
   */
  onClickModalSubmit(): void {
    this.modalSubmitEl.addEventListener('click', e => {
      e.preventDefault();
      const selectToppings = this.getModalSelectToppings();
      const targetOrderEl = this.ordersEl.children[this.modalTargetIndex];
      const targetToppingTextEl = targetOrderEl.getElementsByClassName('js-utility-06-order-topping-text');
      targetToppingTextEl[0].textContent = selectToppings.text;
      this.orders[this.modalTargetIndex].toppings = selectToppings.items;
      this.modalClose();
    });
  }

  /**
   * モーダルを閉じる要素クリック時のイベント設定
   */
  onClickModalClose(): void {
    [...this.modalCloseEls].forEach(el => {
      el.addEventListener('click', e => {
        e.preventDefault();
        this.modalClose();
      });
    });
  }
}
