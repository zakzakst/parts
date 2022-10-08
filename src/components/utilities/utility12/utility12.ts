'use strict';

import { newsItem, categoryItem, categoryItems } from './utility12-data'

export const utility12 = () => {
  const utility = new Utility12();
  utility.init();
}

class Utility12 {
  el: HTMLElement;
  page: number;
  newsItems: newsItem[];
  categoryItems: categoryItem[];
  constructor() {
    this.el = document.getElementById('js-utility-12');
    this.page = 0;
    this.categoryItems = categoryItems;
  }

  /**
   * 初期化
   */
  init(): void {
    if (!this.el) return;
    const page = this.getPageQuery();
    this.getNewsItems();
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
   * ニュース項目取得
   */
  getNewsItems(): void {
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
}
