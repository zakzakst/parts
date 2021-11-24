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

class Utility10 {
  el: HTMLElement;
  formEl: HTMLInputElement;
  formBtnEl: HTMLElement;
  itemsEl: HTMLElement;
  searchUrl: string;
  constructor() {
    this.el = document.getElementById('js-utility-10');
    this.formEl = <HTMLInputElement>document.getElementById('js-utility-10-form');
    this.formBtnEl = document.getElementById('js-utility-10-form-btn');
    this.itemsEl = document.getElementById('js-utility-10-items');
    if (location.origin === 'https://zakzakst.github.io') {
      // GitHubの場合
      this.searchUrl = '/parts/data/utility10.json';
    } else {
      // ローカル環境の場合
      this.searchUrl = '/data/utility10.json';
    }
  }

  /**
   * 初期化
   */
  init(): void {
    if (!this.el) return;
    this.onClickFormBtn();
    this.onClickItems();
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
  showItemDetail(uid: string): void {
    // TODO: 詳細表示の実装
    console.log(uid);
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

  // TODO:
  // 商品をカートに入れる処理
  // 現在選択している商品のデータ保持と表示
}
