'use strict';

{
  const emails = [
    'taro@example.com',
    'kintaro@example.com',
    'kojiro@example.com',
  ];

  emails.forEach((email) => {
    const loc = email.indexOf('@');
    console.log(email.slice(0, loc));
    // '@'を変数に代入して,@の直前を切り出す
    // ＝'taro''kintaro''kojiro'

    // console.log(email.slice(0, 4));
    // indexが0~4の'直前'＝'taro''kint''koji'
  });
}