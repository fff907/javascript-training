'use strict';

{
  // undefinedが出るコード
  // （関数にreturnを書かなかった時の返り値以外の例）

  // let x;
  // console.log(x);　宣言されただけの変数の値

  // const scores = [70, 90, 80];
  // console.log(scores[100]);
  // 配列で存在しないインデックスの値にアクセスした時

  const score = {math: 80, english: 90};
  // console.log(score.history);
  // オブジェクトで存在しないプロパティにアクセスした時
  if (score.history === undefined) {
    console.log('History score not defined!');
  }
  // undefinedは値が定義されているかどうかのチェックによく使われる
}