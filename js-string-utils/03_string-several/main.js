'use strict';

{
  const emails = [
    'taro@example.com',
    'kintaro@example.com',
    'kojiro@example.com',
    // これらのアドレスを順に調べて、
    // taro という文字列が含まれていたら表示する
  ];

  // 配列のためforEachで書く
  emails.forEach((email) => {
    // .includes()：特定の文字列が含まれるか調べる 
    // if (email.includes('taro') === true) {
    //   console.log(email);
    // }
    // taroが含まれていたらtrue、含まれていなかったらfalse
    // console.log()で該当アドレスを表示(この場合'Taro@...'と'kintaro@...')

    // .indexOf()：この文字列が最初に出現する位置のインデックスを表示
    // if (email.indexOf('taro') === 0) {
    //   console.log(email);
    // }
    // →taro から始まるアドレスだけ抜き出せる

    // startsWith()：特定の文字列で始まるかどうか判定
    if (email.startsWith('taro') === true) {
      console.log(email);
    }
  });
}