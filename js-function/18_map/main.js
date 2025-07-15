'use strict';

{
  const prices = [100, 150, 200];
  // // それぞれを10%の税込み価格にした配列を別途用意する
  // const pricesWithTax = [];
  // prices.forEach((price) => {
  //   pricesWithTax.push(price * 1.1);
  // }); //上記を簡潔に書くためにmap()を使う

  const pricesWithTax = prices.map((price) => {
    return price * 1.1;
  });

  console.log(pricesWithTax);
}