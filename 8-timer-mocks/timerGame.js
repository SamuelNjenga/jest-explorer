// timerGame.js
'use strict';

function timerGame(callback) {
  console.log('Here I kick favorite game this off!');
  setTimeout(() => {
    console.log("Time's up -- stop!");
    callback && callback();
  }, 2000);
}

module.exports = timerGame;