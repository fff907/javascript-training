'use strict';

{
  const text = document.querySelector('#text');
  const save = document.querySelector('#save');

  save.addEventListener('click', () => {
    alert(text.value);
  });
}