'use strict';

{
  const menuItems = document.querySelectorAll('.menu li a');
  const contents = document.querySelectorAll('.content');

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

     contents.forEach(content => {
        content.classList.remove('active');
      });
      // クリックしたメニューに応じてコンテンツの文面も変える
      // いったん全てのcontentに対して activeクラスを削除し,
      // クリックしたメニュー項目に応じて、
      // 対応したcontentにだけ activeクラスを付ける
      // HTMLにid="about","service","contact"を付与(sectionタグ内)
      // data-id="about""service","contact"も付与(ulタグ内)
      document.getElementById(clickedItem.dataset.id).classList.add('active');
    });
  });
}