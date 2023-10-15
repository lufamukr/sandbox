'use strict';

function cookingTime(eggs) {
    // TODO
    let toDo = 5;
    if(eggs <= 0) {
      return 0;
    } else {
      if(eggs <= 8) {
        return toDo;
      }
      if(eggs > 8) {
        for(let i = 8; i < eggs; i = i + 8) {
          toDo = toDo + 5;        
        }
        return toDo;
      }
    }
  }