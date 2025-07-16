'use strict';

{
  // let num = 10;
  // const numBackup = num;
  // num = 99;
  // console.log(num); // 99
  // console.log(numBackup); // 10

  // 上記処理を配列で行うと...
  const nums = [10, 20, 30];
  const numsBackup = nums;
  nums[0] = 99;
  console.log(nums);// [99, 20, 30]
  console.log(numsBackup); // [10, 20, 30]
}