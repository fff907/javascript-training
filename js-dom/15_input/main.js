'use strict';

{
  // input → text, textarea, select
  // change → radio, checkbox
  document.querySelector('input').addEventListener('input', () => {
    const pElement = document.querySelector('p');
    const inputElement = document.querySelector('input');
    // pElement.textContent = inputElement.value;
    pElement.textContent = inputElement.value.length;
  });
}