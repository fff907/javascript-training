'use strict';
{
  const timer = document.querySelector('#timer');
  const start = document.querySelector('#start');
  const stop = document.querySelector('#stop');
  const reset = document.querySelector('#reset');

  let startTime;
  let timeoutId;

  function countUp() {
    const d = new Date(Date.now() - startTime);
    // dateのd。経過ミリ秒から開始時間を引く。
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

  start.addEventListener('click', () => {
    startTime = Date.now();
    countUp();
  });

  stop.addEventListener('click', () => {
    clearTimeout(timeoutId);
  });

  reset.addEventListener('click', () => {
    timer.textContent = '00:00.000';
  });
}