'use strict';

{
  const open = document.querySelector('.works__thumbnail-link');
  const close = document.querySelector('.close-btn');
  const modal = document.querySelector('#popup');
  const mask = document.querySelector('.popup-overlay');

  open.addEventListener ('click', () => {
    modal.classList.remove('hidden');
    mask.classList.remove('hidden');
  });

  close.addEventListener ('click', () => {
    modal.classList.add('hidden');
    mask.classList.add('hidden');
  });

  mask.addEventListener('click', () => {
    close.click();
  });
}