'use strict';
// Calculate Price Excluding VAT

function excludingVatPrice(price){
    // your code
    let res = price - (price * 15 / 115);
    if(price === undefined || price === null) {
        res = -1;
    } else {
        res = Math.round(res * 100) / 100;
    }
    return res;
}