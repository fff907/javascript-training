'use strict';

{
  const next = document.querySelector('.next');
  // 「次へ」ボタンを取得
  const ul = document.querySelector('ul');
  // スライド全体（ul）を取得
  const slides = ul.children;
  // ul内のli要素たちを配列っぽく取得（HTMLCollection）

  next.addEventListener('click', () => {
    const slideWidth = slides[0].getBoundingClientRect().width;
    // 最初のスライド（li）の横幅を取得。
    // 画面サイズに応じて動的に計算される
    ul.style.transform = `translateX(${-1 * slideWidth}px)`;
    // ulを左方向にスライド1枚分（幅）だけ移動させる
    // -1倍してるのは「左に移動」だから（正だと右に動く）
  });
}