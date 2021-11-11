'use strict';

/**
 * クッキーの設定・取得関数
 */
export const U_COOKIE = {
  /**
   * 取得
   * @param key 取得するキー
   * @returns string | null キーに対応する値
   */
  get: (key: string = ''): string | null => {
    let result = null;
    const cookies = document.cookie;
    const cookiesArr = cookies.split(';');
    cookiesArr.forEach(cookie => {
      const cookieKey = cookie.split('=')[0];
      const cookieVal = cookie.split('=')[1];
      // 対応するキーが存在する場合
      if (cookieKey === key) {
        result = cookieVal;
      }
    });
    return result;
  },

  /**
   * 全て取得
   * @returns Array 全てのキーと値の配列
   */
  getAll: (): {key: string, val: string}[] => {
    const result = new Array();
    const cookies = document.cookie;
    const cookiesArr = cookies.split('; ');
    cookiesArr.forEach(cookie => {
      result.push({
        key: cookie.split('=')[0],
        val: cookie.split('=')[1],
      });
    });
    return result;
  },

  /**
   * 設定
   * @param key 設定するキー
   * @param val 設定する値
   * @param maxAge クッキーを保持する期間（秒）
   */
  set: (key: string = '', val: string = '', maxAge: number | null = null): void => {
    if (!key) return;
    if (maxAge) {
      document.cookie = `${key}=${val}; max-age=${maxAge}`;
    } else {
      document.cookie = `${key}=${val}`;
    }
  },

  /**
   * クリア
   * @param key クリアするキー
   */
  clear: (key: string = ''): void => {
    if (!key) return;
    const cookies = document.cookie;
    const cookiesArr = cookies.split('; ');
    cookiesArr.forEach(cookie => {
      const cookieKey = cookie.split('=')[0];
      // 対応するキーが存在する場合
      if (cookieKey === key) {
        document.cookie = `${key}=; expires=0`;
      }
    });
  }
}
