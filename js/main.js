'use strict';

{
  const open = document.getElementById('open');
  const close = document.getElementById('close');
  const modal = document.getElementById('modal');
  const mask = document.getElementById('mask');

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