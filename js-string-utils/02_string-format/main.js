'use strict';

{
  const string = prompt('Name?');
  if (string.toUpperCase().trim() === 'TARO') {
  // 大文字小文字を区別せずに文字列判定
  // → 受け取った文字列をすべて大文字に変換してから'TARO'と比較
  // ⇔ 小文字＝toLowerCase()の場合は比較対象を小文字にする('taro')
  // ＝どちらで書いても、'大文字小文字を区別せずに文字列判定'できる！
  // .trim()＝前後の空白を除去
  // (入力時うっかりスペースキーを押しても判定可能)
    console.log('Correct!');
  } else {
    console.log('Wrong!');
  }
}