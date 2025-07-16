'use strict';

{
  const scores = [70, 90, 80, 85];
  const [first, ...others] = scores;

  console.log(first); // 70
  console.log(others); // [90, 80, 85]
}