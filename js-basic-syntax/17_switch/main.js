'use strict';

const color = prompt('color?')

switch (color) {
    case 'red':
        console.log('Stop!');
        break;
    case 'yellow':
        console.log('Slow down!');
        break;
    case 'blue':
    case 'green':
        console.log('Go!');
        break;
    default:
        // どれにも当てはまらない場合
        console.log('Wrong color');
        break;
}