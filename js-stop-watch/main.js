'use strict';
{
  const timer = document.querySelector('#timer');
  const start = document.querySelector('#start');
  const stop = document.querySelector('#stop');
  const reset = document.querySelector('#reset');

  let startTime;
  let timeoutId;
  let elapsedTime = 0;

  function countUp() {
    const d = new Date(Date.now() - startTime + elapsedTime);
    // dateのd。再開してからの時間＋それまでに記録してた時間＝通算の経過時間
    const m = String(d.getMinutes()).padStart(2, '0');
    // minuteのm。padStartで2桁表示に。文字列用の関数なのでStringで囲んでおく
    const s = String(d.getSeconds()).padStart(2, '0');
    // secondのs。padStartで2桁表示に。文字列用の関数なのでStringで囲んでおく
    const ms = String(d.getMilliseconds()).padStart(3, '0');
    // ミリ秒のms。padStartで3桁表示に。文字列用の関数なのでStringで囲んでおく
    timer.textContent = `${m}:${s}.${ms}`;
    // テンプレートリテラルで00:00:000表示にする

    timeoutId = setTimeout(() => {
      countUp();
    }, 10);
  }

  function setButtonStateInitial() { // 初期状態
    start.disabled = false;
    stop.disabled = true;
    reset.disabled = true;
  }

  function setButtonStateRunning() { // 稼働状態
    start.disabled = true;
    stop.disabled = false;
    reset.disabled = true;
  }

  function setButtonStateStopped() { // 停止状態
    start.disabled = false;
    stop.disabled = true;
    reset.disabled = false;
  }

  setButtonStateInitial();
  // ページを読み込んですぐにボタンを初期状態にする

  start.addEventListener('click', () => {
    setButtonStateRunning();
    // スタートボタン押下時にボタンを稼働状態にする
    startTime = Date.now();
    countUp();
  });

  stop.addEventListener('click', () => {
    setButtonStateStopped();
    // ストップボタン押下時にボタンを停止状態にする
    clearTimeout(timeoutId);
    elapsedTime += Date.now() - startTime;
    // スタートしてから今までの時間＋`elapsedTime`＝合計時間
  });

  reset.addEventListener('click', () => {
    setButtonStateInitial();
    // リセットボタン押下時にボタンを初期状態にする
    timer.textContent = '00:00.000';
    elapsedTime = 0;
    // リセットボタン押下時に経過時間も0にする
  });
}