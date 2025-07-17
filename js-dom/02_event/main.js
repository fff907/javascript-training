'use strict';

{
    document.querySelector('button').addEventListener('click', () => {
        console.log('Clicked');
    });
    // querySelector('')の中に
    // 取得したい要素を選択するための
    // CSSセレクターを文字列で渡す

    // addEventListener()の中に
    // ➀'イベントの種類',
    // ➁アロー関数でクリックした時に処理したい内容
    // () => {処理内容。console.log('')};
    // 2種類を入れる

    // ここまで書くと、ボタンを押し、
    // コンソールに「Clicked」と表示される仕組みが完成する
}