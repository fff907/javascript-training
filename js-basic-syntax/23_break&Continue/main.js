'use strict';

let amount = 100;

for (let year = 1; year <= 30; year++) {
    amount *= 1.05;
    if (amount < 200) {
        continue;
    }
    // 200より小さい出力をカット
    // continue：反復処理の途中でそれ以降の処理をスキップして、次の反復処理に移る

    if (amount > 300) {
        break;
    }
    // 300より大きい出力をカット
    console.log(`Year ${year}:${amount}`);
}