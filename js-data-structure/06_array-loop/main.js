'use strict';

{
    const scores = [
        70,
        90, 
        80, 
        85,
    ];

    // 要素取得
    // console.log(scores[0]);
    // console.log(scores[1]);
    // console.log(scores[2]);
    // console.log(scores[3]);
    // ↑ この意味を成すコードを、forで書く！

    for (let i = 0; i < scores.length; i++) {
        console.log(scores[i]);        
    }
    // `.length`の部分 →　定着させるべきオススメの書き方
}