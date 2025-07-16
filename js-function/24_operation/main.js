'use strict';

{
  const moreScores = {
    shiro: 77,
    goro: 88,
  };

  const scores = {
    taro: 80,
    jiro: 70,
    saburo: 90,
    ...moreScores,
  };
  // const {taro, jiro, saburo} = scores;
  const {taro, ...others} = scores; // {}は新しい配列でなく分割代入の記法(復習)

  console.log(taro); // 80
  console.log(others); // {jiro: 70, saburo: 90, shiro: 77, goro: 88}
}