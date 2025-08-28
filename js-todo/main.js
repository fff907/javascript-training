'use strict';

{
  const todos = [
    {title: 'aaa', isCompleted: false},
    {title: 'bbb', isCompleted: false},
    {title: 'ccc', isCompleted: false},
  ];

  const renderTodo = (todo) => {
    // todoオブジェクトを引数にとる関数
    // HTML内に「1つ分のTodo項目」を追加する
    /*
    - li
      - label
        - input
        - span
      - button
    */
   
    const input = document.createElement('input');
    // <input>要素（チェックボックス）を作成
    input.type = 'checkbox';
    // <input>のタイプをチェックボックスに指定
    input.checked = todo.isCompleted;
    // Todoの完了状態（true/false）に応じてチェック状態にする
    const span = document.createElement('span');
    // タスクタイトル（例："aaa"）を表示するためのテキスト用の<span>を作成
    span.textContent = todo.title;
    // todo.title（例："aaa"）をテキストとして表示
    const label = document.createElement('label');
    // <label>要素（inputとspanをまとめるための親要素）を作成
    label.appendChild(input);
    label.appendChild(span);
    // チェックボックス（input）とタイトル（span）をラベルの中に追加
    const button = document.createElement('button');
    // 削除用の<button>要素を作成
    button.textContent = 'x';
    // ボタンの中に「x」という文字を表示
    const li = document.createElement('li');
    // labelとbuttonをまとめる<li>を作成
    li.appendChild(label);
    li.appendChild(button);
    // <li>の中にチェック付きタイトル（label）と削除ボタン（button）を追加
    document.querySelector('#todos').appendChild(li);
    // HTMLの<ul id="todos">内に、<li>要素を追加する。
    // ＝ 画面上にTodo1件分が表示される
  };

  const renderTodos = () => {
    todos.forEach((todo) => {
      renderTodo(todo);
    });
  };
  // todos配列（初期状態で3件）を1件ずつ取り出して、
  // renderTodo()関数を呼び出して表示する

  renderTodos();
  // ページを読み込んだ時点で、
  // 初期のTodo3件（aaa, bbb, ccc）を表示させる
}
