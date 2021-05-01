'use strict';

export function button12() {
  splitCloneText('js-button-12', 'button-12__char');
}

/**
 * 指定したクラス名要素のテキストを分割してspanタグでくくり、複製する
 * @param className 要素のクラス名
 * @param splitClassName 分割した要素に付与するクラス名
 */
function splitCloneText(className: string, splitClassName: string) {
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
      result += `
        <span class="${splitClassName}">
          <span>${c}</span>
          <span>${c}</span>
        </span>
      `;
    });
    return result;
  }
}
