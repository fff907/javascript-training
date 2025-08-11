'use strict';

{
  const d = new Date(2000, 3, 11);
  // d.setDate(23);
  d.setDate(d.getDate() + 100);
  // +100で100日後を取得

  console.log(d.toLocaleString());
}