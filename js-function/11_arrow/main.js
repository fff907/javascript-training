'use strict';

{
  // 関数宣言
  // function double(num) {
  //   return num * 2;
  // }

  // 関数式
  // const double = function(num) {
  //   return num * 2;
  // }; 

  // アロー関数式（こちらが主流）   
  // const double = (num) => {
  //   return num * 2;
  // };

  // 応用：関数を引数にとる関数
  const calc = (num, func) => {
    return func(num);
  };

  console.log(calc(20, double));
}