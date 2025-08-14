'use strict';

{
  function check () {
    // 残り時間 = 終了時刻 - 現在時刻
    const countdown = endTime - new Date().getTime();
    // new Date()：一定時間ごとに残り時間をチェックする時刻
    // ※下のnew Date()と用途が異なるため注意！
    // getTime()で単位をミリ秒に揃える
    timer.textContent = countdown;
  }

  const timer = document.querySelector('#timer');
  const btn = document.querySelector('#btn');
  let endTime; // 値が変動するため定義はlet

  // (1) 終了時刻を求める
  btn.addEventListener('click', ()=> {
    const endTime = new Date().getTime() + 3 * 1000; 
    // new Date(現在の日時を求める
    // ※ここではスタートボタンを押した時の時刻)
    // ＋getTime(基準日から経過ミリ秒を表す整数値に変換して計算)
    // ＋カウントダウンの時間分 * 1000(ミリ秒に単位を揃える)

    // (2) 残り時間を求める  
    // →残り時間を計算する関数を作り、
    // その関数を一定時間ごとに繰り返し呼び出す
    setInterval(check, 100);
    // まずはコードの1番上で関数(check)定義
    // (setInterval() で繰り返し実行したい関数)
    // 第1引数には繰り返し実行したい関数そのもの(check)
    // 第2引数には第1引数の関数をどれくらいの間隔で繰り返すか
    // ミリ秒で指定(上記の場合100ミリ秒ごとに呼び出す)
  });

  // (3) タイマーの終了
}