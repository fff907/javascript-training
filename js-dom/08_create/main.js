'use strict';

{
  document.querySelector('button').addEventListener('click', () => {
   const liElement = document.createElement('li');
   liElement.textContent = 'Hanako';
   // textContent = '';。たまに()書きしてしまうので注意。   
   // HTMLを編集せずDOM操作だけで要素追加 
   // 要素に対して様々な編集を加えるので、まずは定数に代入し、
   // textContentで中のテキストを設定する。

    // document.querySelector('ul').appendChild(liElement);
    // document.querySelector('ul').insertBefore(
    //   liElement, 
    //   document.querySelector('#second')
    // );
    if (confirm('Sure?') === true) {
      document.querySelector('#second').remove();
    }
  });
}