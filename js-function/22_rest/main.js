'use strict';

{
  const moreScores = [77, 88];

  // 【スプレッド構文】配列の中身（要素）を "展開" して、別の配列に入れる
  // → moreScoresの[77, 88]をscoresの末尾に展開して入れる
  const scores = [70, 90, 80, 85, ...moreScores];

  // 【分割代入】配列の最初の1つだけをfirstに、
  // 残りすべてをothersという1つの配列にまとめて受け取る
  // → 「残り全部まとめて」受け取る構文が【レスト構文】（...others）
  const [first, ...others] = scores;

  console.log(first);   // 70（最初の1つだけ）
  console.log(others);  // [90, 80, 85, 77, 88]（残りすべてをまとめて配列に）

  // ※スプレッド構文（...moreScores）は「展開する」用途。右辺に使われる。
  // ※レスト構文（...others）は「まとめる」用途。左辺に使われる。
  // → 同じ「...」でも使い方が真逆なので注意！

  // ★まとめ：
  // レスト構文：受け取って1つにまとめる → 左辺に使う
  // スプレッド構文：広げて展開する → 右辺に使う
}