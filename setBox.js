const setBox = document.querySelector("#setBox");
const setBoxtBtn = document.querySelector("#setBoxBtn");
const resetBoxBtn = document.querySelector("#resetBoxBtn");

let stoppedMinBox = 0;
let stoppedSecBox = 0;

setBoxBtn.addEventListener("click", () => {
    stoppedMinBox = minToBox;
    stoppedSecBox = secToBox;
    updateStoppedBox();
});

resetBoxBtn.addEventListener("click", () => {
    minsBox = 0;
    secsBox = 0;
    setBox.textContent = "00:00";
  });

function updateStoppedBox() {

    stoppedMinBox = pad(stoppedMinBox);
    stoppedSecBox = pad(stoppedSecBox);

    setBox.textContent = `${stoppedMinBox}:${stoppedSecBox}`;
  
    function pad(unit) {
      return (("0") + unit).length > 2 ? unit : "0" + unit;
    }
  };

