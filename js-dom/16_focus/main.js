'use strict';

{
  document.querySelector('input').addEventListener('focus', () => {
    document.querySelector('p').textContent = 'English only!';
  });
}