'use strict';

{
  const scores = [70, 90, 80, 85];
  // これらの値をこの後のコードでよく使うことになったので、
  // それぞれに分かりやすい定数名を付けたくなったとする。
  // const first = scores[0];
  // const second = scores[1];
  // const third = scores[2];
  // const fourth = scores[3];
  // ↑これを一気にスッキリ書ける！！
  const [first, second, third, fourth] = scores;
  // 新しく配列を作るコードではない。これは分割代入！混同注意！
  console.log(first);
  console.log(second);
  console.log(third);
  console.log(fourth);
}