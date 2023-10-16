'use strict';

// Two players - "black" and "white" are playing a game. The game consists of several rounds. If a player wins in a round, he is to move again during the next round. If a player loses a round, it's the other player who moves on the next round. Given whose turn it was on the previous round and whether he won, determine whose turn it is on the next round.

function whoseMove(lastPlayer, win) {
    //coding and coding..
    
    if(win === true) {
      console.log(lastPlayer);
    } 
    if(win === false && lastPlayer === 'black') {
        console.log('white');
    }
    if(win === false && lastPlayer === 'white') {
        console.log('black');
    }
}

whoseMove('black', true);


//   best solution

function whoseMoveBS(lastPlayer, win) {
    return win?lastPlayer:lastPlayer=="white"?"black":"white"
}

whoseMoveBS("white", false);