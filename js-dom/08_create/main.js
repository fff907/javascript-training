'use strict';

{
  document.querySelector('button').addEventListener('click', () => {
    // 新しい <li> 要素を作成する
    const liElement = document.createElement('li');

    // テキストを設定
    liElement.textContent = 'Hanako';

    // ▼ 要素の追加パターン①：末尾に追加（appendChild）
    // 実行結果：Taro → Jiro → Saburo → Hanako（←いちばん最後に追加される）
    // document.querySelector('ul').appendChild(liElement);

    // ▼ 要素の追加パターン②：指定した要素の「直前」に追加（insertBefore）
    // 実行結果：Taro → Hanako → Jiro → Saburo（←Jiroの前に割り込む）
    // 第1引数：追加したい要素（liElement）
    // 第2引数：目印となる要素（ここでは「Jiro」）
    document.querySelector('ul').insertBefore(
      liElement,
      document.querySelector('#second')
    );

    // ▼ 要素の削除（確認ダイアログでOKを押すと「Jiro」が消える）
    // if (confirm('Sure?') === true) {
    //   document.querySelector('#second').remove();
    // }
  });
}
