'use strict';

{
  const text = document.querySelector('#text');
  const save = document.querySelector('#save');
  const message = document.querySelector('#message');

  save.addEventListener('click', () => {
    localStorage.setItem('memo', text.value);
  });
}