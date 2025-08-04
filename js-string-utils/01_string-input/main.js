'use strict';

{
  const string = prompt('Any message?');
  console.log(string); // 受け取った文字列を表示
  console.log(string.length); // 文字列の長さ(文字数)
  console.log(string[0]); // 1文字目を表示
  // string[0] = 'w'; といった書き換えはできない！
  // ＝文字列は配列と同じように扱うことはできない  
}