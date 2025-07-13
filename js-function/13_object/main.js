'use strict';

{
  const scores = {
    math: 80,
    english: 90,
  };

  // 今までのやり方：1つずつ取り出して表示（数が少ないとき）
  // console.log(scores.math);
  // console.log(scores.english);

  // プロパティ（キーと値）が増えたら毎回書くのが大変！
  // → Object.entries()で [キー, 値] の配列に変換し、forEachでまとめて処理
  const entries = Object.entries(scores);

  entries.forEach((prop) => {
  // 【復習：アロー関数】元々は entries.forEach(function(prop) { のところを短く見やすく。
    console.log(`${prop[0]}: ${prop[1]}`); // math: 80 など
  });
}
