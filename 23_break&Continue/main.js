'use strict';

let amount = 100;

for (let year = 1; year <= 30; year++) {
    amount *= 1.05;
    console.log(`Year ${year}:${amount}`);
}