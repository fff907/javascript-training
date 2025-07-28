'use strict';

{
  const menuItems = document.querySelectorAll('.menu li a');

  menuItems.forEach(clickedItem => {
    clickedItem.addEventListener('click', e => {
      e.preventDefault();

      menuItems.forEach(item => {
        item.classList.remove('active');
        // クリックしたメニュー項目のactiveクラスを外す 
        // 選択中のアイテムと混同しないよう'item'にする 
      });
      clickedItem.classList.add('active');
      // クリックしたメニュー項目にactiveクラスをつける
      // 選択中のアイテムと混同しないよう
      // 'clickedItem'にする   
    });
  });
}