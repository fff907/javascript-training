'use strict';

{
  let num = 10;
  const numBackup = num;
  num = 99;
  console.log(num); // 99
  console.log(numBackup); // 10
}