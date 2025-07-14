'use strict';

{
  // const names = ['Taro', 'Jiro', 'Saburo'];
  // 要素を｜で区切って表示させたい時
  // console.log(names.join('|')); // Taro|Jiro|Saburo
  // 要素をカンマで区切って表示させたい時
  // console.log(names.join()); // Taro,Jiro,Saburo
  // |でもカンマでも区切らず繋げたい時
  // console.log(names.join('')); // TaroJiroSaburo

  // 逆に文字列から配列を作りたい時
  const names = 'Taro|Jiro|Saburo';
  console.log(names.split('|')); // ['Taro', 'Jiro', 'Saburo']
}