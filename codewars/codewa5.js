'use strict';

function solution(str, ending){
  // TODO: complete
  let leng = ending.length;
  let le2ng = str.length - ending.length;
  let curEnd = '';
 
  for(let i = 0; i < leng; i++) {
    if((ending[i] === str[le2ng+i])) {
      curEnd += str[le2ng+i];
    } 
  }
    if(curEnd === ending) {
      console.log(true);
      return true;
    } else {
      return false;
    }
}

solution('end', 'nd');