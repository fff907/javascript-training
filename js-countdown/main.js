'use strict';

{
  function check () {
    // 残り時間 = 終了時刻 - 現在時刻
    let countdown = endTime - new Date().getTime();
    // タイマー終了後に時間を戻す際に再代入するためletで宣言
    // new Date()：一定時間ごとに残り時間をチェックする時刻
    // ※下のnew Date()と用途が異なるため注意！
    // getTime()で単位をミリ秒に揃える

    // (3) タイマーの終了
    if (countdown < 0) {
      clearInterval(intervalId);
      // clearInterval：setIntervalを停止
      // intervalId：setInterval()を識別するための識別子
      countdown = 3 * 1000;
      // タイマー終了後に時間を戻す

      // （5）タイマーが終了した時に再びボタンを押せるようにする
      btn.disabled = false;
    }

    // ミリ秒では見づらいので、分と秒表示に変換
    const totalSeconds = Math.floor(countdown / 1000);
    // 小数点以下の値を切り捨てるためにMath.floor()で囲み、
    // ミリ秒であるcountdownを1000で割れば秒になる
    // ↓ 計算方法
    // 80秒 → 1分20秒
    // 80 ÷ 60 = 1 余り 20
    // 80 / 60 = 1.33333.... → 1
    // 80 % 60 = 20　(復習：%で余りを出せる)
    const minutes = Math.floor(totalSeconds / 60); // 分
    const seconds = totalSeconds % 60; // 秒

    // 分と秒を2桁表示にする
    // ＝minutesとsecondsを整形し直した文字列を作る
    const minutesFormatted = String(minutes).padStart(2, '0');
    const secondsFormatted = String(seconds).padStart(2, '0');
    // padStart()：2桁で表示してその桁に満たなかったら、
    // 文字列の前を0で埋める
    // padStart()は文字列にしか使えないので、String()で変数を囲む

    timer.textContent = `${minutesFormatted}:${secondsFormatted}`;
    // ブラウザにカウントダウンを表示させる
    // '：'があるのでテンプレートリテラル使用
  }

  const timer = document.querySelector('#timer');
  const btn = document.querySelector('#btn');
  let endTime; // 値が変動するため定義はlet
  let intervalId; // 値が変動するため定義はlet
  // 上記然り,check関数で使うものは他関数の中から外へ出しておく

  // (1) 終了時刻を求める
  btn.addEventListener('click', ()=> {
    endTime = new Date().getTime() + 3 * 1000; 
    // new Date(現在の日時を求める
    // ※ここではスタートボタンを押した時の時刻)
    // ＋getTime(基準日から経過ミリ秒を表す整数値に変換して計算)
    // ＋カウントダウンの時間分 * 1000(ミリ秒に単位を揃える)

    //（4）一度ボタンをクリックしたら、
    // タイマーが終了するまでボタンを押せないようにする
    btn.disabled = true;

    // (2) 残り時間を求める  
    // →残り時間を計算する関数を作り、
    // その関数を一定時間ごとに繰り返し呼び出す
    intervalId = setInterval(check, 100);
    // まずはコードの1番上で関数(check)定義
    // (setInterval() で繰り返し実行したい関数)
    // intervalId：setInterval()を識別するための識別子
    // 第1引数には繰り返し実行したい関数そのもの(check)
    // 第2引数には第1引数の関数をどれくらいの間隔で繰り返すか
    // ミリ秒で指定(上記の場合100ミリ秒ごとに呼び出す)
  });
}