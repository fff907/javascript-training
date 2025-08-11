'use strict';

{
  const d = new Date(2000, 3, 11);
  const dBackup = new Date(d.getTime());
  // 更新前時点の日付のバックアップを取る
  d.setDate(23);

  console.log(d.toLocaleString()); // 23
  console.log(dBackup.toLocaleString()); // 11
}