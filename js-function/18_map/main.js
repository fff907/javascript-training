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
  // ある配列の各要素を処理して新しい配列を作る場合、
  // map() のほうが簡潔に書けるのでこちらを好む人も多い
}