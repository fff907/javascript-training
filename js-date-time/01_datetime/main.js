'use strict';

{
  const d = new Date();
  // new Date() = 現在の日時に関するデータをくれる  
  console.log(d); // 現在の日時表示(Wed Sun 21...出力が長くややこしい)
  console.log(d.toLocaleString());
  // toLocaleString()⇒スッキリとした表示にしてくれる yyyy/mm/dd XX:XX:XX
  console.log(d.getFullYear()); // 年を取得(fullを忘れずに)
  console.log(d.getMonth()); // 月を取得。0(1月), 1(2月), 2(3月), ...
  console.log(d.getDate()); // 日付を取得
  console.log(d.getHours()); // 時間を取得(複数形,sを忘れずに)
  console.log(d.getMinutes()); // 分を取得(複数形,sを忘れずに)
  console.log(d.getSeconds()); // 秒を取得(複数形,sを忘れずに)
  console.log(d.getMilliseconds()); // ミリ秒を取得(複数形,sを忘れずに)
  console.log(d.getDay()); // 曜日を取得。0(日曜), 1(月曜), 2(火曜), ...
}