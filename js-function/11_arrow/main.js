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
  const double = (num) => {
    return num * 2;
  };

  console.log(double(10));
}