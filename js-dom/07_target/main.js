'use strict';

{
  document.querySelector('button').addEventListener('click', () => {
    document.querySelectorAll('.target').forEach((li) => {
      // 特定のリストだけ取得したい場合、その項目にクラス名(今回は.target)を付けて、
      // querySelectorAll('.target')とする。
      li.textContent = 'Changed!';
    });
  });
}