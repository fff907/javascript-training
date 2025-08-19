'use strict';

{
  function render(quiz) {
    const main = document.querySelector('main');

    const section = document.createElement('section');
    const h2 = document.createElement('h2');
    h2.textContent = quiz[0];

    const ul = document.createElement('ul');
    const li0 = document.createElement('li');
    li0.textContent = quiz[1]; // 選択肢Aを代入
    li0.addEventListener('click', () => {
      if (quiz[4] === 0) {  // 回答が0なら
        li0.classList.add('correct'); // 正解
      } else { // それ以外は
        li0.classList.add('wrong'); // 不正解　
      }
    });
    const li1 = document.createElement('li');
    li1.textContent = quiz[2]; // 選択肢Bを代入
    li1.addEventListener('click', () => {
      if (quiz[4] === 1) {  // 回答が1なら
        li1.classList.add('correct'); // 正解
      } else { // それ以外は
        li1.classList.add('wrong'); // 不正解
      }
    });
    const li2 = document.createElement('li');
    li2.textContent = quiz[3]; // 選択肢Cを代入
    li2.addEventListener('click', () => {
      if (quiz[4] === 2) {  // 回答が2なら
        li2.classList.add('correct'); // 正解
      } else { // それ以外は
        li2.classList.add('wrong'); // 不正解
      }
    });

    ul.appendChild(li0);
    ul.appendChild(li1);
    ul.appendChild(li2);

    section.appendChild(h2);
    // ➁下記`main.appendChild(section);`で生成した
    // `<section></section>`タグ内に
    // `<h2>1の正解は？</h2>`が生成される
    section.appendChild(ul);
    // ➂下記`main.appendChild(section);`で生成した
    // `<section></section>`タグ内、
    // `<h2>1の正解は？</h2>`の次に`<ul></ul>`が生成される
    main.appendChild(section);
    // ➀HTMLの`</main>`の直前に`<section></section>`が生成される
  }

  // 問題文, 選択肢, 選択肢, 選択肢, 正解(0, 1, 2)
  const quizzes = [
    ['1の正解は？', '選択肢 A', '選択肢 B', '選択肢 C', 0],
    ['2の正解は？', '選択肢 A', '選択肢 B', '選択肢 C', 1],
    ['3の正解は？', '選択肢 A', '選択肢 B', '選択肢 C', 2],
  ];
  
  render(quizzes[0]);
  render(quizzes[1]);
  render(quizzes[2]);
}