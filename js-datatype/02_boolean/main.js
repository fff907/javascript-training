'use strict';

{
  let isDevMode = true;
  const pElement = document.querySelector('p');
  const buttonElement = document.querySelector('button');
  
  buttonElement.addEventListener('click', () => {
    if (isDevMode === true) {
      pElement.textContent = 'Dev Mode is Off.';
      // ➀クリックしたらOff表示に！
      // isDevMode = !isDevMode;(クリックで真偽値反転！)
      // "!="：否定の論理演算子
      // (➀➁同じなので条件分岐の外に出しても同じ意味)
    } else {
      pElement.textContent = 'Dev Mode is On.';
      // ➁クリックしたらOn表示に！
      // isDevMode = !isDevMode;(クリックで真偽値反転！)
      // (➀➁同じなので条件分岐の外に出しても同じ意味)
    }
    isDevMode = !isDevMode; // 条件分岐の外に出したもの
  });
}