'use strict';

{
  // const todos = [
  //   {title: 'aaa', isCompleted: false},  ←この1つが "todo"
  //   {title: 'bbb', isCompleted: true},
  //   {title: 'ccc', isCompleted: false},
  //   {title: 'ddd', isCompleted: false}
  // ]; ↓配列データをlocalStorage仕様に書き替える↓

  let todos;
  // todosという変数だけを先に用意
  // あとで保存済みのデータを代入するためlet

  if (localStorage.getItem('todos') === null) {
    todos = [];
    // localStorageにtodosという保存データが
    // まだ存在していなければ、空の配列を代入
  } else {
    todos = JSON.parse(localStorage.getItem('todos'));
    // localStorageに保存されていたデータがあれば、
    // それを元の配列に戻して代入する
  }

  const saveTodos = () => {
    localStorage.setItem('todos', JSON.stringify(todos));
  };

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
    input.addEventListener('change', () => {
      // チェックボックスの状態（ON/OFF）が変わったときに実行
      todos.forEach((item) => {
        // todos配列の中の各タスク（item）を1つずつ取り出す
        if (item.id === todo.id) {
          // 表示中のtodo（引数）と一致するidを持つitemを探す
          item.isCompleted = !item.isCompleted;
          // isCompletedの状態を反転（true⇔false）させる
          // チェックを入れる or 外すの切り替えを反映
        }
      });
      saveTodos();
      // localStorage.setItem('todos', JSON.stringify(todos));
      // todos配列全体をlocalStorageに保存しなおす（変更を永続化）
    });
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
      todos = todos.filter((item) => {
        return item.id !== todo.id;
        // todos配列から「クリックされたタスク以外」を抽出して再構築
        // item.id（既存データ）とtodo.id（削除対象）を比較
      });
      saveTodos();
      // localStorage.setItem('todos', JSON.stringify(todos));
      // 再構築されたtodos配列をlocalStorageに上書き保存
      // 削除後の最新状態のtodosをlocalStorageに保存しなおすため
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
      id: Date.now(), // UNIXタイムスタンプを追加
      title: input.value,  // 入力されたテキスト
      isCompleted: false, // まだ完了していないタスク
    };
    renderTodo(todo); // タスクを画面に追加
    todos.push(todo);
    // ユーザーがフォームに入力したタスク`todo`を、
    // 現在のタスクリスト(`todos`配列)の末尾に追加 
    console.table(todos); // 表形式でコンソールを出す
    saveTodos();
    // localStorage.setItem('todos', JSON.stringify(todos));
    // `todos`配列をJSON文字列に変換して
    // ブラウザの中（localStorage）に保存(新しいタスクを追加した時用)
    input.value = ''; // 入力された値を消す
    input.focus(); // フォームをフォーカスする
  });

  document.querySelector('#purge').addEventListener('click', () => {
    if (!confirm('Sure?')) { // 消す前に確認
      return;
    }
    todos = todos.filter((todo) => {
      // todos配列の中から「完了していない
      // （isCompleted === false）」ものだけを抽出して上書きする
      return todo.isCompleted === false;
      // チェックがついていないものだけを残す（trueは削除される）
    });
    saveTodos();
    // localStorage.setItem('todos', JSON.stringify(todos));
    // 残ったtodosをlocalStorageに保存（削除を反映させる）
    document.querySelectorAll('#todos li').forEach((li) => {
      li.remove();
      // 現在画面に表示されているすべての<li>（タスク表示）を一旦全削除
    });
    renderTodos();
    // localStorageから再取得 → 未完了タスクだけを画面に再表示する
  });

  renderTodos();
  // ページを読み込んだ時点で、
  // localStorage に保存されている Todo をすべて画面に表示する
}