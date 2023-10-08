'use strict';

function numWilson(num) {
    for(let i = 0; i < 5; i++) {
        i = ((i * (i-1)) + 1) / (i * i);
        return i;
    }
}

numWilson();