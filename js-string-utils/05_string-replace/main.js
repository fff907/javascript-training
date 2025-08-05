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

    // 文字列を配列化するsplitも効果的
    const items = email.split('@');
    console.log(items[0]);
    // ＝'taro''kintaro''kojiro'
  });
}