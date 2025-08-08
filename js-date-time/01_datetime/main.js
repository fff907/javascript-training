'use strict';

{
  const d = new Date();
  // new Date() = 現在の日時に関するデータをくれる  
  console.log(d); // 現在の日時表示(Wed Sun 21...出力が長くややこしい)
  console.log(d.toLocaleString());
  // toLocaleString()⇒スッキリとした表示にしてくれる yyyy/mm/dd XX:XX:xx  
}