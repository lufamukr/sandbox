'use strict';

function solution(str, ending){
    // TODO: complete
    let leng = ending.length;
    let le2ng = str.length - ending.length;
    console.log(leng);
    for(let i = 0; i <= leng; i++) {
      console.log(ending[i] == str[le2ng+i]);
  }
}
solution('ask', 'sk');