'use strict';

{
  const next = document.querySelector('.next');
  // 「次へ」ボタンを取得
  const prev = document.querySelector('.prev');
  // 「前へ」ボタンを取得
  const ul = document.querySelector('ul');
  // スライド全体（ul）を取得
  const slides = ul.children;
  // ul内のli要素たちを配列っぽく取得（HTMLCollection）
  let currentIndex = 0;

  function updateButtons() {
    prev.classList.remove('hidden');
    next.classList.remove('hidden');

    if (currentIndex === 0) {
      prev.classList.add('hidden');
    // 最初の画像が表示されている時
    // ＝currentIndexが0の時にprevのボタンを消す
    }
    if (currentIndex === slides.length - 1) {
     // 画像枚数を関係なく動作させるため.length
      next.classList.add('hidden');
    }
  }

  next.addEventListener('click', () => {
    currentIndex++;
    const slideWidth = slides[0].getBoundingClientRect().width;
    // 最初のスライド（li）の横幅を取得。
    // 画面サイズに応じて動的に計算される
    ul.style.transform = `translateX(${-1 * slideWidth *currentIndex}px)`;
    // ulを左方向にスライド1枚分（幅）だけ移動させる
    // -1倍してるのは「左に移動」だから（正だと右に動く）
  });

  prev.addEventListener('click', () => {
    currentIndex--;
    const slideWidth = slides[0].getBoundingClientRect().width;
    ul.style.transform = `translateX(${-1 * slideWidth *currentIndex}px)`;
  });
}