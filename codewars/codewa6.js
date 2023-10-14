function isIsogram(str){
  //...
  let cntr = 0;
  let nStr = str.toLowerCase();
  for(let i = 0; i < nStr.length; i++) {
    for(let k = 0; k < nStr.length; k++) {
      if(nStr[i] === nStr[k] && i !== k) {
      } else {
        cntr = cntr + 1;
      }
    }
  }

    if(cntr === ((str.length) * str.length)) {
      return true;
    } else {
      return false;
    }

}