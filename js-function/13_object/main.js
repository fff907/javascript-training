'use strict';

{
  const scores = {
    math: 80,
    english: 90,
  };
  let sum = 0; // 合計を保持するための変数をsumで宣言し、0で初期化
  scores.physics = 70;

  // 今までのやり方：1つずつ取り出して表示（数が少ないとき）
  // console.log(scores.math);
  // console.log(scores.english);

  // プロパティ（キーと値）が増えたら毎回書くのが大変！
  // → Object.entries()で [キー, 値] の配列に変換し、forEachでまとめて処理
  const entries = Object.entries(scores);

  entries.forEach((prop) => {
  // 【復習：アロー関数】元々は
  // entries.forEach(function(prop) { のところを短く見やすく。
  // (prop)＝プロパティ＝['math', 80],['english', 90],

    sum += prop[1];

    console.log(`${prop[0]}: ${prop[1]}`); // math: 80、english: 90で表示
    //prop[0] → 'math'（キー）、prop[1] → 80（値）

    console.log(`Sum: ${sum}`);
    console.log(`Average: ${sum / entries.length}`);
  });
}