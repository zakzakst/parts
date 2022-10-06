'use strict';

export const utility12 = () => {
  const utility = new Utility12();
  utility.init();
}

class Utility12 {
  el: HTMLElement;
  page: number;
  constructor() {
    this.el = document.getElementById('js-utility-12');
    this.page = 0;
  }

  /**
   * 初期化
   */
  init(): void {
    if (!this.el) return;
    const page = this.getPageQuery();
    console.log(page);
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
}
