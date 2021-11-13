'use strict';

export const utility05 = () => {
  const utility = new Utility05('js-utility-05');
  utility.init();
}

const items = {
  '01': {
    'id': '01',
    'label': '東京',
    'dists': {
      '01': {
        'id': '01',
        'label': '練馬区',
        'towns': {
          '01': {'id': '01', 'label': '氷川台'},
          '02': {'id': '02', 'label': '平和台'},
        }
      },
      '02': {
        'id': '02',
        'label': '板橋区',
        'towns': {},
      },
    }
  },
  '02': {
    'id': '02',
    'label': '埼玉県',
    'dists': {},
  },
};

class Utility05 {
  el: HTMLElement;
  prefectureEl: HTMLSelectElement;
  districtEl: HTMLSelectElement;
  townEl: HTMLSelectElement;
  prefectureId: string;
  districtId: string;
  townId: string;
  dataUrl: string;
  data: any;
  constructor(elId: string) {
    this.el = document.getElementById(elId);
    this.prefectureEl = <HTMLSelectElement>document.getElementById('js-utility-05-prefecture');
    this.districtEl = <HTMLSelectElement>document.getElementById('js-utility-05-district');
    this.townEl = <HTMLSelectElement>document.getElementById('js-utility-05-town');
    this.prefectureId = '';
    this.districtId = '';
    this.townId = '';
    if (location.origin === 'https://zakzakst.github.io/') {
      // GitHubの場合
      this.dataUrl = '/parts/data/utility05.json';
    } else {
      // ローカル環境の場合
      this.dataUrl = '/data/utility05.json';
    }
    this.data = null;
  }

  /**
   * 初期化
   */
   async init(): Promise<void> {
    if (!this.el) return;
    this.data = await this.loadData();
    if (!Object.keys(this.data).length) return;
    this.setPrefecture();
    this.onChangePrefecture();
    this.onChangeDistrict();
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
   * 都道府県を設定
   */
  setPrefecture(): void {
    const selectItems = [
      {
        id: '',
        label: '選択してください',
      },
    ];
    for(let item in this.data) {
      const { id, label } = this.data[item];
      selectItems.push({
        id,
        label,
      });
    }
    // HTMLを初期化
    this.prefectureEl.innerHTML = '';
    // 要素を挿入
    let markup = '';
    selectItems.forEach(selectItem => {
      markup += `<option value="${selectItem.id}">${selectItem.label}</option>`;
    });
    this.prefectureEl.insertAdjacentHTML('beforeend', markup);
    // 選択を有効にする
    this.prefectureEl.disabled = null;
  }

  /**
   * 区を設定
   */
  setDistrict(): void {
    const districtData = this.data[this.prefectureId]?.dists || null;
    // データが空のオブジェクトの場合、処理を終了
    if (!Object.keys(districtData).length) return;
    const selectItems = [
      {
        id: '',
        label: '選択してください',
      },
    ];
    for(let item in districtData) {
      const { id, label } = districtData[item];
      selectItems.push({
        id,
        label,
      });
    }
    // HTMLを初期化
    this.districtEl.innerHTML = '';
    // 要素を挿入
    let markup = '';
    selectItems.forEach(selectItem => {
      markup += `<option value="${selectItem.id}">${selectItem.label}</option>`;
    });
    this.districtEl.insertAdjacentHTML('beforeend', markup);
    // 選択を有効にする
    this.districtEl.disabled = null;
  }

  /**
   * 町を設定
   */
  setTown(): void {
    const townData = this.data[this.prefectureId]?.dists[this.districtId]?.towns || null;
    // データが空のオブジェクトの場合、処理を終了
    if (!Object.keys(townData).length) return;
    const selectItems = [
      {
        id: '',
        label: '選択してください',
      },
    ];
    for(let item in townData) {
      const { id, label } = townData[item];
      selectItems.push({
        id,
        label,
      });
    }
    // HTMLを初期化
    this.townEl.innerHTML = '';
    // 要素を挿入
    let markup = '';
    selectItems.forEach(selectItem => {
      markup += `<option value="${selectItem.id}">${selectItem.label}</option>`;
    });
    this.townEl.insertAdjacentHTML('beforeend', markup);
    // 選択を有効にする
    this.townEl.disabled = null;
  }

  /**
   * 区をクリア
   */
  clearDistrict(): void {
    // 町をクリア
    this.clearTown();
    // HTMLを初期化
    this.districtEl.innerHTML = '';
    // 選択を無効にする
    this.districtEl.disabled = true;
    // IDを初期化
    this.districtId = '';
  }

  /**
   * 町をクリア
   */
  clearTown(): void {
    // HTMLを初期化
    this.townEl.innerHTML = '';
    // 選択を無効にする
    this.townEl.disabled = true;
    // IDを初期化
    this.townId = '';
  }

  /**
   * 都道府県変更時のイベント設定
   */
  onChangePrefecture(): void {
    this.prefectureEl.addEventListener('change', () => {
      this.prefectureId = this.prefectureEl.value;
      if (this.prefectureId) {
        // IDが設定されている項目の場合、区を設定
        this.setDistrict();
      } else {
        // IDが設定されていない項目の場合、区をクリア
        this.clearDistrict();
      }
    });
  }

  /**
   * 区変更時のイベント設定
   */
  onChangeDistrict(): void {
    this.districtEl.addEventListener('change', () => {
      this.districtId = this.districtEl.value;
      if (this.districtId) {
        // IDが設定されている項目の場合、町を設定
        this.setTown();
      } else {
        // IDが設定されていない項目の場合、町をクリア
        this.clearTown();
      }
    });
  }
}
