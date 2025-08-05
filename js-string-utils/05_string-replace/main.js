'use strict';

{
  const emails = [
    'taro@example.com',
    'kintaro@example.com',
    'kojiro@example.com',
  ];

  emails.forEach((email) => {
    // console.log(email.replace('@example.com', ''));
    // '@example.com'を''(空文字)に置換＝@以降を削除
    // ＝'taro''kintaro''kojiro'

    const items = email.split('@');
    console.log(items[0]);
    // 文字列を配列化するsplitも効果的
    // "@"を境界線として文字列を2つに分ける
    // "taro@example.com" → ["taro", "example.com"]
    // そのうちの items[0]（＝最初の要素）を表示
    // → forEachでループしているため全要素表示
    // ＝'taro''kintaro''kojiro'
  });
}