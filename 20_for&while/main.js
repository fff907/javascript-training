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

let command;
do {
  command = Number(prompt('Menu 1, 2, 3 or 0 to exit'));
  // do＝初期メッセージとして必ず1度は表示させる
  if (command === 0) {
    console.log('終了します');
    // 0を押すことで卓上メニュー端末の動作を終了
  } else {
    console.log(`メニュー${command}を処理中...`);
    // お客様が1~3の中で食べたいものを選択中
  }
} while (command !== 0);
// while：command が 0 でない限り、do の処理を繰り返す
// → 「0以外の数字（1～3）が入力されたらメニュー処理を継続」

// do...while文：最初の1回は必ず実行されるループ
// ユーザーにメニュー番号を入力させ、0が入力されるまで繰り返す