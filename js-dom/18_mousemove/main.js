'use strict';

{
  document.addEventListener('mousemove', (e) => {
    document.querySelector('p').textContent = `X: ${e.clientX} Y: ${e.clientY}`;
    // マウスの動きを追って、X座標/Y座標の位置を表示
  });
}