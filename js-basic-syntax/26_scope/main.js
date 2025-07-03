'use strict';

let x = 10;

{
    let x = 20;
    console.log(x);
}
// {}内はローカルスコープと呼ばれる。出力は20。

console.log(x);
// {}外はグローバルスコープと呼ばれる。出力は10。