'use strict';

{
  const open = document.querySelector('.works__thumbnail-link');
  const close = document.querySelector('.close-btn');
  const modal = document.querySelector('#popup');
  const mask = document.querySelector('.popup-overlay');

  open.addEventListener ('click', (e) => {
    e.preventDefault();
    modal.classList.remove('hidden');
    mask.classList.remove('hidden');
    // モーダルを開いたときに背景スクロールを止める
    // ※body(背景全体)にoverflow: hiddenを指定
    document.body.style.overflow = 'hidden';
  });

  close.addEventListener ('click', () => {
    modal.classList.add('hidden');
    mask.classList.add('hidden');
    // モーダルを閉じたときにスクロールを元に戻す
    // ※空文字 '' で元のスタイルに戻る
    document.body.style.overflow = '';
  });

  mask.addEventListener('click', () => {
    close.click();
  });
}