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
  // 現在表示中のスライドのインデックス（最初は0）

  function updateButtons() {
    prev.classList.remove('hidden');
    next.classList.remove('hidden');
    // いったん両方のボタンを表示状態に戻す

    if (currentIndex === 0) {
      prev.classList.add('hidden');
    // 最初の画像が表示されている時
    // ＝currentIndexが0の時に「前へ」ボタンを非表示
    }
    if (currentIndex === slides.length - 1) {
     // 最後のスライドなら「次へ」ボタンを非表示にする
     // 画像枚数を関係なく動作させるため.length
     // slides.length - 1 ＝ '最後のスライド'
      next.classList.add('hidden');
    }
  }

  function moveSlides() {
    // nextとprevの両方にあったコードを関数にまとめる
    const slideWidth = slides[0].getBoundingClientRect().width;
    // 最初のスライド（li）の横幅を取得（レスポンシブ対応）
    // → 画面サイズに応じて動的に計算される
    // ※1枚目のスライドの「横幅」を調べて、
    // → それを移動距離に使うため[0]としている
    ul.style.transform = `translateX(${-1 * slideWidth * currentIndex}px)`;
    // ulを左方向にスライド1枚分（幅）だけ移動させる
    // -1倍してるのは「左に移動」だから（正だと右に動く）
  }

  updateButtons();
  // ボタンの状態（表示/非表示）を更新

  next.addEventListener('click', () => {
    currentIndex++; // 現在のスライドを1つ進める
    updateButtons(); // スライドを移動するたびにUIの状態を更新
    moveSlides(); // 関数にまとめたのでここで呼び出し
  });

  prev.addEventListener('click', () => {
    currentIndex--; // 現在のスライドを1つ戻す
    updateButtons(); // スライドを移動するたびにUIの状態を更新
    moveSlides(); // 関数にまとめたのでここで呼び出し
  });
}