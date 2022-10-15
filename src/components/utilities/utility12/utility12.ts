'use strict';

import { newsItem, categoryItem, categoryItems } from './utility12-data'

export const utility12 = () => {
  const utility = new Utility12();
  utility.init();
}

class Utility12 {
  el: HTMLElement;
  page: number;
  itemNumPerPage: number;
  newsItems: newsItem[];
  categoryItems: categoryItem[];
  newsItemsUrl: string;
  constructor() {
    this.el = document.getElementById('js-utility-12');
    this.page = 0;
    this.itemNumPerPage = 20;
    this.categoryItems = categoryItems;
    if (location.origin === 'https://zakzakst.github.io') {
      // GitHubの場合
      this.newsItemsUrl = '/parts/data/utility12.json';
    } else {
      // ローカル環境の場合
      this.newsItemsUrl = '/data/utility12.json';
    }
  }

  /**
   * 初期化
   */
  async init(): Promise<void> {
    if (!this.el) return;
    this.page = this.getPageQuery();
    await this.setNewsItems();
    console.log(this.newsItems);
  }

  /**
   * クエリ情報のページ番号取得
   */
  getPageQuery(): number {
    // URLを取得
    const url = new URL(window.location.href);
    // URLSearchParamsオブジェクトを取得
    const params = url.searchParams;
    // ページ番号を取得
    const page = Number(params.get('page'));
    // ページ番号を返す
    return page ? page : 1;
  }

  /**
   * ニュース項目設定
   */
  async setNewsItems(): Promise<void> {
    const data = await this.getNewsItems();
    console.log(data.length);
    this.newsItems = [
      {
        date: {
          year: 2022,
          month: 1,
          day: 1,
        },
        categoryId: 'news',
        title: 'タイトルが入ります',
      },
    ];
  }

  /**
   * ニュース項目取得
   */
  getNewsItems(): Promise<newsItem[] | null> {
    return new Promise(resolve => {
      fetch(this.newsItemsUrl)
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          // // 検索キーワードに一致するデータを取得
          // const filteredData = data.filter((item: Product) => {
          //   // 型番が一致するかの判定（完全一致）
          //   if (item.uid === keyword) return true;
          //   // 商品名が一致するかの判定（部分一致）
          //   if (item.name.indexOf(keyword) !== -1) return true;
          //   // タグが一致するかの判定（部分一致）
          //   if (item.tags.length) {
          //     const filteredTags = item.tags.filter(tag => {
          //       return tag.indexOf(keyword) !== -1;
          //     });
          //     if (filteredTags.length) return true;
          //   }
          //   // 検索に一致しない場合
          //   return false;
          // });
          console.log(data);
          resolve(data);
        })
        .catch(error => {
          console.log(error);
          resolve(null);
        });
    });
  }
}
