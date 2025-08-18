'use strict';

{
  function render(quiz) {
    const main = document.querySelector('main');

    const section = document.createElement('section');
    const h2 = document.createElement('h2');
    h2.textContent = quiz[0];

    section.appendChild(h2);
    // HTMLの`<section>`タグ内に`<h2>1の正解は？</h2>`が生成される
    main.appendChild(section);
    // HTMLの`</main>`の直前に`<section></section>`が生成される
  }

  // 問題文, 選択肢, 選択肢, 選択肢, 正解(0, 1, 2)
  const quiz = ['1の正解は？', '選択肢 A', '選択肢 B', '選択肢 C', 0];

  render(quiz);
}