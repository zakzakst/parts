'use strict';

export function button10() {
  splitText('js-button-04-text');
  splitText('js-button-04-hover-text');
}

/**
 * 指定したクラス名要素のテキストを分割してspanタグでくくる
 * @param className 要素のクラス名
 */
function splitText(className: string) {
  // ボタン要素を指定
  const btnElArr = document.getElementsByClassName(className);

  // 要素がない場合、処理を止める
  if (!btnElArr.length) return;

  // 各要素のテキストを分割してspanタグでくくる
  [...btnElArr].forEach(el => {
    const text = el.textContent;
    const newText = getSplitText(text);
    el.innerHTML = newText;
  });

  /**
   * テキストを分割してspanタグでくくる
   * @param text 分割したいテキスト
   * @returns 分割後のテキスト
   */
  function getSplitText(text: string) {
    let result: string = '';
    text.split('').forEach(c => {
      result += `<span>${c}</span>`;
    });
    return result;
  }
}
