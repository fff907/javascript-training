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
  const dots = [];
  // ボタンを格納するための配列を宣言（pushされたものはここへ）
  // ※丸いボタンを動的に生成する準備
  let currentIndex = 0;
  // 現在表示中のスライドのインデックス（最初は0）
  // 0番目（＝1枚目のスライド）

  function updateButtons() {
    // 「前へ」「次へ」ボタンの表示・非表示を制御
    prev.classList.remove('hidden');
    next.classList.remove('hidden');
    // いったん両方のボタンを表示状態に戻す
    // これをしておくことで条件分岐がうまく働く

    if (currentIndex === 0) {
      prev.classList.add('hidden');
    // 現在のスライドが最初（index 0）であれば、
    // 「前へ」ボタンは不要なので、
    // .hidden を追加して非表示にする
    }
    if (currentIndex === slides.length - 1) {
     // 最後のスライドなら「次へ」ボタンを非表示にする
     // slides.length - 1 ＝ '最後のスライド'
      next.classList.add('hidden');
    }
  }

  function moveSlides() {
    // スライドの位置を変更
    const slideWidth = slides[0].getBoundingClientRect().width;
    // 最初のスライド（li）の横幅を取得（レスポンシブ対応）
    // → 画面サイズに応じて動的に計算される
    // ※1枚目のスライドの「横幅」を調べて、
    // → それを移動距離に使うため[0]としている
    // getBoundingClientRect() = 要素の表示サイズや位置を取得
    ul.style.transform = `translateX(${-1 * slideWidth * currentIndex}px)`;
    // ulを左方向にスライド1枚分（幅）だけ移動させる
    // -1倍してるのは「左に移動」だから（正だと右に動く）
  }

  function setupDots() {
    // 丸ボタンの生成とクリックイベント登録
    for(let i = 0; i < slides.length; i++) {
      // 画像の数だけボタンを作るためループを回す
      // （画像の数＝slides.length）
      const button = document.createElement('button');
      // <button>要素をJavaScriptで生成（DOM生成）
      button.addEventListener('click', () => {
        // 丸ボタンをクリックした際の処理
        currentIndex = i;
        // i番目の画像を表示
        updateDots();
        // 関数の巻き上げ。丸ボタンの状態を更新
        updateButtons();
        // ボタンの状態（表示/非表示）を更新
        moveSlides();
        // スライドを移動させる
      });
      dots.push(button);
      // 作成したボタンを配列dotsの末尾に追加
      document.querySelector('nav').appendChild(button);
      // <nav> 要素の末尾にこのボタンを追加してHTML上に表示
      // appendChild = 指定の親要素の子要素として末尾に追加
      dots[0].classList.add('current');
      // 最初の丸ボタンにcurrentクラスを付けて現在のスライドを明示
    }
  }

  function updateDots () {
    // 丸ボタンの見た目を更新
    dots.forEach(dot => {
        dot.classList.remove('current');
      });
      // dotsの全ての要素に対してcurrentクラスを削除
      dots[currentIndex].classList.add('current');
      // 今クリックされたボタンにだけcurrentクラスを付ける
  }

  // 初期化処理：ページ読み込み時に一度だけ実行
  updateButtons();
  // ボタンの状態（表示/非表示）を更新
  setupDots();
  // ページが読み込んだ時に丸ボタンの動作を実行

  next.addEventListener('click', () => {
    // 「次へ」ボタンのクリックイベント
    currentIndex++; // 現在のスライドを1つ進める
    updateButtons(); // スライドを移動するたびにUIの状態を更新
    updateDots(); // スライドを移動するたびに丸ボタンも更新
    moveSlides(); // 実際にulのスライド位置を動かす
  });

  prev.addEventListener('click', () => {
    // 「前へ」ボタンのクリックイベント
    currentIndex--; // 現在のスライドを1つ戻す
    updateButtons(); // スライドを移動するたびにUIの状態を更新
    updateDots(); // スライドを移動するたびに丸ボタンも更新
    moveSlides(); // // 実際にulのスライド位置を動かす
  });

  window.addEventListener('resize', () => {
    // リサイズ時の調整（レスポンシブ対応）
    moveSlides();
    // 画面幅が変わったらリサイズする
  });
}