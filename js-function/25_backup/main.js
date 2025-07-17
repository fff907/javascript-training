'use strict';

{
  // プリミティブ型
  // let num = 10;
  // const numBackup = num; // ← 中身「10」をそのままコピー
  // num = 99;
  // console.log(num);       // 99（上書きしたから）
  // console.log(numBackup); // 10（コピー元とは別物！）

  // 上記処理を配列で行うと...
  const nums = [10, 20, 30];
  const numsBackup = nums; //← 中身じゃなく、「場所」をコピー
  nums[0] = 99;
  console.log(nums);// [99, 20, 30]
  console.log(numsBackup); // [99, 20, 30]。← あれ、変わっちゃってる！

  // コピーしたいときはスプレッド構文！
  // const nums = [10, 20, 30];
  // const numsBackup = [...nums]; // ← これで中身をコピーできる！
  // nums[0] = 99;
  // console.log(nums);       // [99, 20, 30]
  // console.log(numsBackup); // [10, 20, 30] ← ちゃんと別物！
}
