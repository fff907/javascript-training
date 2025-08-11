'use strict';

{
  // const d = new Date(2000, 3, 11);
  // 2000年4月11日を表示。2000/4/11 00:00:00
  const d = new Date(2000, 2, 0);
  // うるう年の日付に0を指定でうるう日を取得。2000/2/29 00:00:00
  console.log(d.toLocaleString());
}