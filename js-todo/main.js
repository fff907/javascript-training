'use strict';

{
  const todos = [
    {title: 'aaa', isCompleted: false},
    {title: 'bbb', isCompleted: false},
    {title: 'ccc', isCompleted: false},
  ];

  const renderTodo = (todo) => {
    /*
    - li
      - label
        - input
        - span
      - button
    */
    
  };

  const renderTodos = () => {
    todos.forEach((todo) => {
      renderTodo(todo);
    });
  };

  renderTodos();
}