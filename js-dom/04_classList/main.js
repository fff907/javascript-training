'use strict';

{
    document.querySelector('button').addEventListener('click', () => {
       document.querySelector('p').classList.add('pink-bg')
    //  p要素を取得し、classList.addとする、
    // ()内:p要素に追加したいクラス名 ※先頭の.(ドット)は要らない！！
    });
}