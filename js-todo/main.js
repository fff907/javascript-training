'use strict';

{
  const todos = [
    {title: 'aaa', isCompleted: false}, // ←この1つが "todo"
    {title: 'bbb', isCompleted: true},
    {title: 'ccc', isCompleted: false},
    {title: 'ddd', isCompleted: false}
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
    button.addEventListener('click', () => {
      // 削除ボタンの処理
      // if (confirm('Sure?') === false) {
      if (!confirm('Sure?')) { // 消す前に確認
          return;
      }
      li.remove();
    });
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
      // todo = {title: 'aaa', isCompleted: false} 
      renderTodo(todo);
    });
  };
  // todos配列（初期状態で3件）を1件ずつ取り出して、
  // renderTodo()関数を呼び出して表示する

  document.querySelector('#add-form').addEventListener('submit', (e) => {
    e.preventDefault(); // ページ遷移を防ぐ
    const input = document.querySelector('#add-form input');
    const todo = {
      title: input.value,  // 入力されたテキスト
      isCompleted: false, // まだ完了していないタスク
    };
    renderTodo(todo); // タスクを画面に追加
    input.value = ''; // 入力された値を消す
    input.focus(); // フォームをフォーカスする
  });

  renderTodos();
  // ページを読み込んだ時点で、
  // 初期のTodo3件（aaa, bbb, ccc）を表示させる

  localStorage.setItem('todos', JSON.stringify(todos));
  console.log(JSON.parse(localStorage.getItem('todos')));
  // 再読み込みしても入力データが消えないよう処理
  // 配列データを渡すためJSON形式に変換
}