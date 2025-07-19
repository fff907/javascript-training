'use strict';

{
  document.querySelector('button').addEventListener('click', () => {
    alert(document.querySelector('input').value);
    // ↑ textContentではない!!
    // フォーム部品の値にアクセスするにはvalueを使う!!
    // 結果：OKボタンを押すと、
    // テキストフォームに入力した内容のアラートが出せる。
  });
}