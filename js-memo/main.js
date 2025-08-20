'use strict';

{
  const text = document.querySelector('#text');
  const save = document.querySelector('#save');

  save.addEventListener('click', () => {
    localStorage.setItem('memo', text.value);
  });
}