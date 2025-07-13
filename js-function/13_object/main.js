// プロパティが増えた場合、配列の反復処理を使いたいところだが、
// オブジェクトに対して直接forEach()を使うことはできない　
// →　一旦オブジェクトを配列に変換してから forEach()を使うというテクニックがある 
// →　Object.entries(scores);とすると、それぞれのプロパティを配列にして、
// さらにそれらをまとめた配列を取得する事ができる。(詳細は以下)

'use strict';

{
  const scores = {
    math: 80,
    english: 90,
  };

  const entries = Object.entries(scores); //Oは必ず大文字！
//   console.log(entries);
//   結果は「(2) [Array(2), Array(2)]」
// →　0: (2) ['math', 80]、1: (2) ['english', 90]、length: 2、と表示され、
// 配列の中に2つ配列が入り、それぞれがキーと値の配列になる。
// →　この外側の配列に対して forEach() を使えば配列を取り出せるので、
// entries に対して forEach() として、アロー関数式を渡す。
// そうすると、entries の中にあった配列を1つずつ引数にセットしてくれる。

  entries.forEach((prop) => { //←プロパティの略で「prop」
    console.log(prop);
    // 結果は「 ['math', 80] math: 80、['english', 90] english: 90」となり、
    // キーと値の配列を取り出す事ができる。

    // そして、キーはこの配列の 0 番目、値は 1 番目の要素なので、
    // それらを一覧にしたかったら、テンプレートリテラルを使って、
    // キーはpropの0番目、値はpropの1番目とする。
    console.log(`${prop[0]}: ${prop[1]}`);
    // 結果は、math: 80、english: 90となり、キーと値の一覧が表示できる。
  });
}