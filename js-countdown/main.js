'use strict';

{
  const timer = document.querySelector('#timer');
  const btn = document.querySelector('#btn');

  // (1) 終了時刻を求める
  btn.addEventListener('click', ()=> {
    const endTime = new Date().getTime() + 3 * 1000; 
    // new Date(現在の日時を求める)
    // ＋getTime(基準日から経過ミリ秒を表す整数値に変換して計算)
    // ＋カウントダウンの時間分 * 1000(ミリ秒に単位を揃える)
  });

  // (2) 残り時間を求める
  // (3) タイマーの終了
}