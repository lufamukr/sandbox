'use strict';
// Your task is to make a function hotpo that takes a positive n as input and returns the number of times you need to perform this algorithm to get n = 1


let hotpo = function(n) {
    let res = '';
    for( let i = n; n !== 1; i--) {
        if(n % 2 == 0) {
            n = n / 2;
            res = res + '+';
        }   else {
            n = (n * 3) + 1;
            res = res + '+';
        }

    }
    console.log('res = ' + res.length);
}
   
hotpo(1);



// best solution

const hotpoBS = n => n == 1 ? 0 : 1 + hotpoBS(n % 2 ? (n * 3 + 1) : n / 2);
let result = hotpoBS(5);
console.log(result);