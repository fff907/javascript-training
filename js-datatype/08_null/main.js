'use strict';

{
  // null
  // 最初からどんな科目があるか明示したいが、
  // 値が確定でない場合にnullを割り当てる

  const score = {
    math: 80, 
    english: 90,
    physics: null,
  };
  if (score.physics === null) {
    console.log('Physics score is null!');
  }
}