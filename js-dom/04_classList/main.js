'use strict';

{
    document.querySelector('button').addEventListener('click', () => {
       document.querySelector('p').classList.add('pink-bg', 'red-border');
       document.querySelector('p').classList.remove('green-color');
    //  p要素を取得し、クラスを追加するためにclassList.addとする。
    // ()内:p要素に追加したいクラス名 ※先頭の.(ドット)は要らない！！
    // ,(カンマ)区切りで複数渡せる。
    // 削除したいクラスはclassList.removeとする。
    });
}