function timerGame(callback) {
    console.log('Ready....go!');
    setTimeout(() => {
      console.log('Times up -- stop!');
      callback && callback();
    }, 3000);
  }
  
  module.exports = timerGame;
