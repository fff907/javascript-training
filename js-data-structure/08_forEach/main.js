'use strict';

{
    const scores = [
        70,
        90, 
        80, 
        85,
    ];
    let sum = 0;
    // 0で初期化しておくと、sumは数値だということが分かり、読みやすいコードになる。
    // 値の再代入しているので、ここはconstではなくて、letにする必要がある。

    scores.forEach((score, index) => {
        sum += score;
        console.log(`${index}: ${score}`);
  });

    console.log(`Sum: ${sum}`);
    console.log(`Average: ${sum / scores.length}`);
}
