'use strict';

export const utility09 = () => {
  const utility = new Utility09();
  utility.init();
}

type dataKeys = 'name' | 'type' | 'price' | 'number' | 'remarks'

type headData = {
  key: dataKeys,
  label: string,
  sortable: boolean,
}

type bodyData = {
  name: string,
  type: string,
  price: number,
  number: number,
  remarks: string,
}

type tableData = {
  head: headData[],
  body: bodyData[],
}

class Utility09 {
  el: HTMLElement;
  headEl: HTMLElement;
  bodyEl: HTMLElement;
  dataUrl: string;
  data: tableData;
  dataCurrent: tableData;
  constructor() {
    this.el = document.getElementById('js-utility-09');
    this.headEl = document.getElementById('js-utility-09-head');
    this.bodyEl = document.getElementById('js-utility-09-body');
    if (location.origin === 'https://zakzakst.github.io') {
      // GitHubの場合
      this.dataUrl = '/parts/data/utility09.json';
    } else {
      // ローカル環境の場合
      this.dataUrl = '/data/utility09.json';
    }
    this.data = null;
    this.dataCurrent = null;
  }

  /**
   * 初期化
   */
   async init(): Promise<void> {
    if (!this.el) return;
    // データを取得して初期表示
    const data = await this.loadData();
    this.data = data;
    this.dataCurrent = JSON.parse(JSON.stringify(this.data));
    this.headSet();
    this.dataCurrentUpdate('name', 'asc');
    // 各種イベント設定
    this.onClickHead();
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
   * 見出しの設定
   */
  headSet(): void {
    this.headEl.innerHTML = '';
    const trEl = document.createElement('tr');
    this.dataCurrent.head.forEach(item => {
      const markup = `
        <th class="utility-09__head-th" data-key="${item.key}" data-sortable="${item.sortable}">
          ${item.label}
          <span class="utility-09__head-icon --asc"></span>
          <span class="utility-09__head-icon --desc"></span>
        </th>
      `;
      trEl.insertAdjacentHTML('beforeend', markup);
    });
    this.headEl.appendChild(trEl);
  }

  /**
   * 内容の設定
   */
  bodySet(): void {
    this.bodyEl.innerHTML = '';
    this.dataCurrent.body.forEach(item => {
      const markup = `
        <tr>
          <th data-key="name">${item.name}</th>
          <td data-key="type">${item.type}</td>
          <td data-key="price">${item.price}</td>
          <td data-key="number">${item.number}</td>
          <td data-key="remarks">${item.remarks}</td>
        </tr>
      `;
      this.bodyEl.insertAdjacentHTML('beforeend', markup);
    });
  }

  /**
   * 表示データの更新
   * @param key 並べ替え対象のデータ
   * @param order 並べ替え方法
   */
  dataCurrentUpdate(key: dataKeys, order: 'asc' | 'desc'): void {
    // TODO: dscとascの処理分岐
    const newData: tableData = JSON.parse(JSON.stringify(this.data));
    newData.body.sort((a, b) => {
      let result = 0;
      if (a[key] < b[key]) {
        result = -1;
      } else if (a[key] > b[key]) {
        result = 1;
      }
      return result;
    });
    this.dataCurrent = newData;
    this.bodySet();
    // TODO: 要素のスタイル反映
  }

  /**
   * 見出しクリック時のイベント設定
   */
  onClickHead(): void {
    this.headEl.addEventListener('click', e => {
      const target = <HTMLElement>e.target;
      const targetKey = <dataKeys>target.dataset.key;
      // TODO: その他など並び替え処理をしないものの分岐実装
      // TODO: クリックされた要素のソート情報の取得
      this.dataCurrentUpdate(targetKey, 'asc');
    });
  }
}
