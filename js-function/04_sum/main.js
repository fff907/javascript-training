'use strict';

{
    function sum(a, b) {
        return a + b;        
    }

    console.log(sum(300, 700));
}

{
  function calculateTotal(price, amount, rate = 1.1) {
    return price * amount * rate;
  }

  console.log(calculateTotal(100, 10));         // → 1100（rateは1.1）
  console.log(calculateTotal(150, 10));         // → 1650（rateは1.1）
  console.log(calculateTotal(200, 10));         // → 2200（rateは1.1）
  console.log(calculateTotal(120, 10, 1.08));   // → 1296（rateを上書き）
}