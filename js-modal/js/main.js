'use strict';

{
  const open = document.querySelector('#open');
  const close = document.querySelector('#close');
  const modal = document.querySelector('#modal');
  const mask = document.querySelector('#mask');

  open.addEventListener ('click', () => {
    modal.classList.remove('hidden');
    mask.classList.remove('hidden');
    // open:'hidden'を'remove'=モーダルを表示
  });

  close.addEventListener ('click', () => {
    modal.classList.add('hidden');
    mask.classList.add('hidden');
    // close:'hidden'を'add'=モーダルを非表示
  });

  mask.addEventListener('click', () => {
    // modal.classList.add('hidden');
    // mask.classList.add('hidden');
    close.click(); // この書き方も覚える
  });
}