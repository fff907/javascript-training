'use strict';

{
  document.querySelector('input').addEventListener('click', () => {
    const pElement = document.querySelector('p');
    const inputElement = document.querySelector('input');
    // pElement.textContent = inputElement.value;
    pElement.textContent = inputElement.value.length;
  });
}