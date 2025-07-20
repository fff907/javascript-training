'use strict';

{
  document.addEventListener('keydown', (e) => {
  // 文章全体に対してイベントリスナーを設定したい場合、
  // `document`に対して直接 `addEventListener` する。
  // 引数名は何でもよいが、一般的にイベントの`e`が使われる。
    document.querySelector('p').textContent = e.key;
    // `p`要素を取得してから、その `textContent`に`e.key`とすれば
    // 入力されたキーの値を表示できる。
  });
}