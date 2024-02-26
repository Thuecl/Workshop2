const stopWatch = document.querySelector("#stopWatch");
const startBtn = document.querySelector("#startBtn");
const pauseBtn = document.querySelector("#pauseBtn");
const resetBtn = document.querySelector("#resetBtn");

let startTime = 0;
let elapsedTime = 0;
let currentTime = 0;
let paused = true;
let intervalId;
let mins = 0;
let secs = 0;

startBtn.addEventListener("click", () => {
    if(paused) {
        paused = false;
        startTime = 0;
        intervalId = setInterval(updateTime, 1000);
    }
});

pauseBtn.addEventListener("click", () => {
  if(!paused) {
    paused = true;
    elapsedTime = Date.now() - startTime;
    clearInterval(intervalId);
  }
});

resetBtn.addEventListener("click", () => {
  paused = true;
  clearInterval(intervalId);
  startTime = 0;
  elapsedTime = 0;
  currentTime = 0;
  //hrs = 0;
  mins = 0;
  secs = 0;
  stopWatch.textContent = "00:00";
});

function updateTime() {

  listToScreen();

  elapsedTime = elapsedTime + 1000;
  secs = Math.floor((elapsedTime / 1000) % 60);
  mins = Math.floor((elapsedTime / (1000*60)) % 60);

  minToBox = mins;
  secToBox = secs;

  secs = pad(secs);
  mins = pad(mins);

  stopWatch.textContent = `${mins}:${secs}`;

  function pad(unit) {
    return (("0") + unit).length > 2 ? unit : "0" + unit;
  }
};