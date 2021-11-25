'use strict';

export const utility10 = () => {
  const utility = new Utility10();
  utility.init();
}

type Product = {
  uid: string,
  name: string,
  price: number,
  tags: string[],
  detail: string,
  imgUrl: string,
  thumbUrl: string,
}

type CartItem = {
  uid: string,
  number: number,
}

class Utility10 {
  el: HTMLElement;
  formEl: HTMLInputElement;
  formBtnEl: HTMLElement;
  itemsEl: HTMLElement;
  modalEl: HTMLElement;
  modalImgEl: HTMLElement;
  modalTitleEl: HTMLElement;
  modalDetailEl: HTMLElement;
  modalPriceEl: HTMLElement;
  modalInputEl: HTMLInputElement;
  modalBtnEl: HTMLElement;
  modalCloseEls: HTMLCollection;
  searchUrl: string;
  cartItems: CartItem[];
  constructor() {
    this.el = document.getElementById('js-utility-10');
    this.formEl = <HTMLInputElement>document.getElementById('js-utility-10-form');
    this.formBtnEl = document.getElementById('js-utility-10-form-btn');
    this.itemsEl = document.getElementById('js-utility-10-items');
    this.modalEl = document.getElementById('js-utility-10-modal');
    this.modalImgEl = document.getElementById('js-utility-10-modal-img');
    this.modalTitleEl = document.getElementById('js-utility-10-modal-title');
    this.modalDetailEl = document.getElementById('js-utility-10-modal-detail');
    this.modalPriceEl = document.getElementById('js-utility-10-modal-price');
    this.modalInputEl = <HTMLInputElement>document.getElementById('js-utility-10-modal-input');
    this.modalBtnEl = document.getElementById('js-utility-10-modal-btn');
    this.modalCloseEls = document.getElementsByClassName('js-utility-10-modal-close');
    if (location.origin === 'https://zakzakst.github.io') {
      // GitHubの場合
      this.searchUrl = '/parts/data/utility10.json';
    } else {
      // ローカル環境の場合
      this.searchUrl = '/data/utility10.json';
    }
    this.cartItems = [];
  }

  /**
   * 初期化
   */
  init(): void {
    if (!this.el) return;
    this.onClickFormBtn();
    this.onClickItems();
    this.onClickModalBtn();
    this.onClickModalClose();
  }

  /**
   * 検索結果データの取得
   * @param keyword 検索キーワード
   * @returns 検索にヒットした商品データ
   */
  getSearchResult(keyword: string): Promise<Product[] | null> {
    return new Promise(resolve => {
      fetch(this.searchUrl)
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          // 検索キーワードに一致するデータを取得
          const filteredData = data.filter((item: Product) => {
            // 型番が一致するかの判定（完全一致）
            if (item.uid === keyword) return true;
            // 商品名が一致するかの判定（部分一致）
            if (item.name.indexOf(keyword) !== -1) return true;
            // タグが一致するかの判定（部分一致）
            if (item.tags.length) {
              const filteredTags = item.tags.filter(tag => {
                return tag.indexOf(keyword) !== -1;
              });
              if (filteredTags.length) return true;
            }
            // 検索に一致しない場合
            return false;
          });
          resolve(filteredData);
        })
        .catch(error => {
          console.log(error);
          resolve(null);
        });
    });
  }

  /**
   * 検索結果の表示
   * @param data 表示する商品データ
   */
  showSearchResult(data: Product[]): void {
    // 検索結果の初期化
    this.itemsEl.innerHTML = '';
    if (data.length) {
      // 検索結果がある場合
      data.forEach(item => {
        const imgUrl = item.thumbUrl || 'https://bulma.io/images/placeholders/128x128.png';
        const markup = `
          <a class="box utility-10__item" data-uid="${item.uid}">
            <article class="media">
              <div class="media-left">
                <figure class="image is-64x64">
                  <img src="${imgUrl}" alt="${item.name} サムネイル画像">
                </figure>
              </div>
              <div class="media-content">
                <p class="is-size-4">${item.name}</p>
                <p>${item.price}円</p>
              </div>
            </article>
          </a>
        `;
        this.itemsEl.insertAdjacentHTML('beforeend', markup);
      });
    } else {
      // 検索結果がない場合
      this.itemsEl.textContent = 'キーワードに対応する商品が見つかりませんでした。';
    }
  }

  /**
   * 商品詳細の表示
   * @param uid 商品UID
   */
  async showItemDetail(uid: string): Promise<void> {
    // 商品データを反映
    const data = await this.getItemDetail(uid);
    const imgUrl = data.imgUrl || 'https://bulma.io/images/placeholders/640x320.png';
    this.modalEl.dataset.uid = data.uid;
    this.modalImgEl.setAttribute('src', imgUrl);
    this.modalTitleEl.textContent = data.name;
    this.modalDetailEl.textContent = data.detail || '詳細情報は登録されていません。';
    this.modalPriceEl.textContent = String(data.price);
    // 既にカートに入っている商品の場合、商品数を反映
    const cartTarget = this.cartItems.find(item => {
      return item.uid === data.uid;
    });
    const targetCartNumber = cartTarget ? cartTarget.number : 0;
    this.modalInputEl.value = String(targetCartNumber);
    // モーダルを表示
    this.modalEl.classList.add('is-active');
  }

  /**
   * 商品詳細の非表示
   */
  hideItemDetail(): void {
    // モーダルを非表示
    this.modalEl.classList.remove('is-active');
    // 商品データを初期化
    this.modalEl.dataset.uid = null;
    this.modalImgEl.removeAttribute('src');
    this.modalTitleEl.textContent = '';
    this.modalDetailEl.textContent = '';
    this.modalPriceEl.textContent = '';
    this.modalInputEl.value = String(0);
  }

  /**
   * 商品詳細データの取得
   * @param uid 商品UID
   * @returns 対象商品の詳細データ
   */
  getItemDetail(uid: string): Promise<Product | null> {
    return new Promise(resolve => {
      fetch(this.searchUrl)
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          // 検索キーワードに一致するデータを取得
          const targetData = data.find((item: Product) => {
            return item.uid === uid;
          });
          resolve(targetData);
        })
        .catch(error => {
          console.log(error);
          resolve(null);
        });
    });
  }

  /**
   * フォームボタンクリック時のイベント設定
   */
  onClickFormBtn(): void {
    this.formBtnEl.addEventListener('click', async () => {
      const formVal = this.formEl.value;
      const searchResult: Product[] = await this.getSearchResult(formVal);
      this.showSearchResult(searchResult);
    });
  }

  /**
   * 商品クリック時のイベント設定
   */
  onClickItems(): void {
    this.itemsEl.addEventListener('click', e => {
      e.preventDefault();
      const target = <HTMLElement>e.target;
      const targetItem = <HTMLElement>target.closest('.utility-10__item');
      // 商品以外の要素がクリックされた場合、処理を終了
      if (!targetItem) return;
      // 商品UIDを取得
      const uid = targetItem.dataset.uid;
      // 商品詳細を表示
      this.showItemDetail(uid);
    });
  }

  /**
   * カートに入れるボタンクリック時のイベント設定
   */
  onClickModalBtn(): void {
    this.modalBtnEl.addEventListener('click', () => {
      const number = Number(this.modalInputEl.value);
      const uid = this.modalEl.dataset.uid;
      this.cartItems.push({
        uid,
        number,
      });
      this.hideItemDetail();
    });
  }

  /**
   * モーダルを閉じる要素クリック時のイベント設定
   */
  onClickModalClose(): void {
    [...this.modalCloseEls].forEach(el => {
      el.addEventListener('click', e => {
        e.preventDefault();
        this.hideItemDetail();
      });
    });
  }

  // カートの表示
}
