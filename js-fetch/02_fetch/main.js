'use strict';

{
  function showHeader () {
    console.log('Header');
  }

  async function showUsers() {
    const response = await fetch('https://dotinstall.github.io/setup/fetchapi/users.json');
    const users = await response.json();
    // console.log(response);
    console.log(users);

    // fetch()のみだと⇒非同期処理が開始した直後の値
    // ＝Promise<pending>がコンソールに表示される
    // 非同期処理が終わったあとの値を取得するには
    // ⇒functionの前に'async'、fetchの前に'await'を付ける！
    // ⇒結果、responseというオブジェクトが出力されるので、
    // JSON 形式のデータを取り出すには、
    // const users = await response.json();　を書く。
  }

  function showFooter () {
    console.log('Footer');
  }

  showHeader();
  showUsers();
  showFooter();
}