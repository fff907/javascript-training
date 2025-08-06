'use strict';

{
  // 関数宣言A(巻き上げ可能)
  function showHeader () {
    console.log('Header');
  }

  // 関数式B(巻き上げ不可)
  const showUsers = async() => {
    // 関数式の場合のasyncの位置は()の前。
    // 関数宣言を使うか関数式を使うかは、
    // プロジェクトの方針や自身の好みで決めればいいが、
    // 関数式で書く場合、asyncの位置を間違いやすいので注意

    try {
      // fetchのリンク先データに""を忘れている等、
      // 予期せぬエラーに備えてtry{} catch(err) {}を使う。
      // ⇒エラーメッセージを表示して、ユーザーに知らせる。

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
    } catch (err) { // err＝適当な引数名
      console.log('Something went wrong getting user data');
      console.log('Error log: ' + err); // 開発中用のエラー出力
    }
  };

  // 関数宣言C(巻き上げ可能)
  function showFooter () {
    console.log('Footer');
  }

  showHeader(); // 関数呼び出しA
  showUsers(); // 関数呼び出しB
  showFooter(); // 関数呼び出しC

}