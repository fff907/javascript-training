'use strict';

{
  const prices = [100, 150, 200];
  // それぞれを10%の税込み価格にした配列を別途用意する
  const pricesWithTax = [];
  prices.forEach((prise) => {
    pricesWithTax.push(price * 1.1);
  });

  console.log(pricesWithTax);
}