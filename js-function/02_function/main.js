'use strict';

{
    function double(num) {
        return num * 2;        
    }

    console.log(double(10));
    console.log(double(4) * 3);
}

// 仮引数`num`は関数の中でしか使えない（スコープの例）
{
  function double(num) {
    return num * 2;
  }

  function triple(num) {
    return num * 3;
  }

  console.log(double(10));
  // console.log(num);
  console.log(triple(20));
}