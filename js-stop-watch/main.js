'use strict';
{
  const timer = document.querySelector('#timer');
  const start = document.querySelector('#start');
  const stop = document.querySelector('#stop');
  const reset = document.querySelector('#reset');

  let startTime;

  function countUp() {
    const d = new Date(Date.now() - startTime);
    const m = String(d.getMinutes()).padStart(2, '0');
    const s = String(d.getSeconds()).padStart(2, '0');
    const ms = String(d.getMilliseconds()).padStart(3, '0');
    timer.textContent = `${m}:${s}.${ms}`;

    setTimeout(() => {
      countUp();
    }, 10);
  }

  start.addEventListener('click', () => {
    startTime = Date.now();
    countUp();
  });

}