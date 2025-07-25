'use strict';

{
  const dts = document.querySelectorAll('dt');
  // dt要素にクリックイベントを設定したいので、
  // 複数のdt要素という意味でdtsとして、 
  // querySelectorAll を使う   

  dts.forEach(dt => {
    dt.addEventListener('click', () => {
      dt.parentNode.classList.toggle('appear');
    });
  });
}