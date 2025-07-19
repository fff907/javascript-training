'use strict';

{
  document.querySelector('button').addEventListener('click', () => {
    const colors = []; // 複数の値を保持するために配列を使う
    // 空の配列で初期化する
    document.querySelectorAll('input').forEach((checkbox) => {
      if (checkbox.checked === true) {
        colors.push(checkbox.value);
      }
    });
    alert(colors.join(','));
    // 反復処理が終わったら、アラートで colors の値を文字列にして表示
    // 色の名前の間にカンマ(チェックした色 → red,green と出る。)
  });
}