'use strict';

{
  const prices = [100, 150, 200];
  // 150円以上の価格だけを抽出し、これとは別の新しい配列を作りたい時
  // const pricesOver150 = [];
  // prices.forEach((price) => {
  //   if (price >= 150) {
  //     pricesOver150.push(price);
  //   }
  // }); //上記を簡潔に書くためにfilter()を使う

  const pricesOver150 = prices.filter((price) => {
    return price >= 150;
  });

  console.log(pricesOver150);
}