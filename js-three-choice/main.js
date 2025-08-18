'use strict';

{
  function render(quiz) {
    const main = document.querySelector('main');
    const section = document.createElement('section');
    main.appendChild(section);
  }

  // 問題文, 選択肢, 選択肢, 選択肢, 正解(0, 1, 2)
  const quiz = ['1の正解は？', '選択肢 A', '選択肢 B', '選択肢 C', 0];

  render(quiz);
}