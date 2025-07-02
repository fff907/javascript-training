'use strict';

for (let i = 1; i <= 10; i++) {
    // console.log('Hello');
  console.log(`${i}: Hello`);
// 数値を文字列として読み込んで出力
}

const rate = 1.1;

for (let price = 150; price <= 160; price++) {
  console.log(`Price: ${price}`);
  for (let amount = 120; amount <= 140; amount+=10) {
    console.log(price * amount * rate);
  }
}
// 150から160まで1ずつ増えていき、各priceに対して、
// amountが120から140まで10ずつ増えるすべての組み合わせを計算。
// それぞれの(price × amount × rate)の結果を出力している。