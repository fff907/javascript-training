'use strict';

{
  let isDevMode = true;
  const pElement = document.querySelector('p');
  const buttonElement = document.querySelector('button');
  
  buttonElement.addEventListener('click', () => {
     if (!confirm('Are you sure?')) {
      return;
    }
    // ifの中にifがあると見づらい！という時に：早期リターン
    // false⇒何もしない/true⇒次の処理に移る

    if (isDevMode) {
      pElement.textContent = 'Dev Mode is Off.';
    } else {
      pElement.textContent = 'Dev Mode is On.';
    }
    isDevMode = !isDevMode;
  });
}