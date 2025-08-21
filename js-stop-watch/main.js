'use strict';
{
  const timer = document.querySelector('#timer');
  const start = document.querySelector('#start');
  const stop = document.querySelector('#stop');
  const reset = document.querySelector('#reset');

  let startTime;

  function countUp() {
    console.log(Date.now() - startTime);
    setTimeout(() => {
      countUp();
    }, 10);
  }

  start.addEventListener('click', () => {
    startTime = Date.now();
    countUp();
  });

}