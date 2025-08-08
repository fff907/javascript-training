'use strict';

{
  const name = prompt('Your name?');
  // ユーザーに名前を入力してもらい表示

  // if (name !== '') {
  // 空文字の式を書かなくても動く   
  if (name) {
    console.log(`Hi, ${name}`);
  } else {
    console.log('Hi, nobody!');
  }
}