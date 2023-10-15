'use strict';
// Your task is to make a function hotpo that takes a positive n as input and returns the number of times you need to perform this algorithm to get n = 1


let hotpo = function(n) {
    let res = '';
    if(n == 0) return 0; 
    for(let i = 1; i <= 5; i++) {
        if(n % 2 === 1) {
            n = (n * 3) + 1;
        }   else {
            n = n / 2;
        }
        res = res + i;
    }
    console.log(res.length);
    return res.length;
}
   

hotpo(8);

