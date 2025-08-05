'use strict';

{
  const counts = [6, 12, 8, 15];

  counts.forEach((count) => {
    // let bar = '';　//  barを空文字で初期化
    // for (let i = 0; i < count; i++) {
    // iが0からcountに満たない間、
    // iを1ずつ増やしながら次の処理をする
    // bar = bar + '*'; }
    // * を連結しグラフにする(配列内の数だけ * が出力される)
    // 上記処理を短く書くと、.repeat();
    const bar = '*'.repeat(count);
    console.log(`${label}: ${bar}`);
  });
}