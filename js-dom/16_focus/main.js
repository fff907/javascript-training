'use strict';

{
  document.querySelector('input').addEventListener('focus', () => {
    // フォーカスを当てた時の動作
    document.querySelector('p').textContent = 'English only!'; // メッセージ表示
  });

  document.querySelector('input').addEventListener('blur', () => {
    // フォーカスを外した時の動作
    document.querySelector('p').textContent = ''; // テキストフォームの文字を消す
  });

  // ページを読み込んだと同時にフォーカスを当てておく動作
  document.querySelector('input').focus();
}