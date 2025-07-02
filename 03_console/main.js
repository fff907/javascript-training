'use strict';
/* これを書いておくと JavaScript で良くない書き方をしているときに
 エラーを出してくれる厳格モードというモードで動作するようになります。*/
 
console.log(1.2e4);
// 12000
console.log(10 ** 3);
// べき乗で1000

// 変数
let price;
// 値を変える可能性があるのでpriceはletで宣言

// 定数
const rate = 1.1;

price = 150;
console.log(price * 120 * rate);
console.log(price * 130 * rate);
console.log(price * 140 * rate);

price = 151;
console.log(price * 120 * rate);
console.log(price * 130 * rate);
console.log(price * 140 * rate);