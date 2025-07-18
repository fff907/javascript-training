'use strict';

{
  document.querySelector('button').addEventListener('click', () => {
    document.querySelectorAll('li').forEach((li) => {
      // 複数の要素を処理する場合(この場合はリストの3項目)、
      // querySelectorAll()とforEach(反復処理)を組み合わせる必要がある
      li.textContent = 'Changed!';
    });
  });
}