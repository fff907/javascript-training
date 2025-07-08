'use strict';

{
    const scores = [
        70,
        90, 
        80, 
        85,
        // 値を追加することもあるので、最後の値はカンマがあってもいい。
    ];

    console.log(scores[2]); //80
    console.log(scores.length); //個数。出力結果は4。
    scores[1] = 95;
    scores.push(65,72);
    console.log(scores); // [70, 95, 80, 85, 65, 72]
}