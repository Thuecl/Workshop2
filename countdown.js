const countDown = document.querySelector("#countDown");
const startBtnCD = document.querySelector("#startBtn");
const pauseBtnCD = document.querySelector("#pauseBtn");
const resetBtnCD = document.querySelector("#resetBtn");

const startingMinutes = 70;
let time = (startingMinutes * 60) - 1; // 60 seconds in a minute, minus 1 second to account for the delay in setInterval

let minutes = 0;
let seconds = 0;
let pausedCD = true;

startBtnCD.addEventListener("click", () => {
  if(pausedCD) {
      pausedCD = false;
      intervalIdCD = setInterval(updateCountdown, 1000);
  }
});

pauseBtnCD.addEventListener("click", () => {
  if(!pausedCD) {
    pausedCD = true;
    clearInterval(intervalIdCD);
  }
});

resetBtnCD.addEventListener("click", () => {
  pausedCD = true;
  clearInterval(intervalIdCD);
  time = startingMinutes * 60;
  minutes = 0;
  seconds = 0
  updateCountdown();
});

function updateCountdown() {

    seconds = Math.floor(time % 60);
    minutes = Math.floor(time / 60);

    seconds = padding(seconds);
    minutes = padding(minutes);

    countDown.textContent = `${minutes}:${seconds}`;
  
    time = time - 1;
    if(time < 0) {
      pausedCD = true;
      clearInterval(intervalIdCD);
      time = startingMinutes * 60;
      minutes = 0;
      seconds = 0
      updateCountdown();
    }

    function padding(unit) {
      return (("0") + unit).length > 2 ? unit : "0" + unit;
    }
}
