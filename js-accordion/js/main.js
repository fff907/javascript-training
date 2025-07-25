'use strict';

{
  const dts = document.querySelectorAll('dt');
  // dt要素にクリックイベントを設定したいので、
  // 複数のdt要素という意味でdtsとして、 
  // querySelectorAll を使う   

  dts.forEach(dt => {
    dt.addEventListener('click', () => {
      dt.parentNode.classList.toggle('appear');
    // parentNode:
    // その要素の“ひとつ上の親”を取得するプロパティ
    // この .appear クラスが付いたら、
    // その中の <dd> を display: blockで表示させる
    // ＝クリックされた質問（<dt>）の答え（<dd>）を
    // 表示・非表示に切り替える

    dts.forEach(el => { // element
        if (dt !== el) { // 自分以外の項目をチェックし
        el.parentNode.classList.remove('appear');
        // 他の答えをすべて閉じる
        }
    });
    // 他のdtが属するdivからは .appear を外す（閉じる）
    // ＝1つずつしか開かないアコーディオン
   });
  });
}
