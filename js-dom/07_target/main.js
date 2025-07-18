'use strict';

{
  document.querySelector('button').addEventListener('click', () => {
    document.querySelectorAll('.target').forEach((li) => {
      // 特定のリストだけ取得したい場合、
      // その項目のHTMLにクラス名(今回は.target)を付けて、
      // js側をquerySelectorAll('.target')とする。
      // ※予備で付けたID('#second')のみ動かすことも可。
      li.textContent = 'Changed!';
    });
  });
}