

let sinceLastBox = 0;
let intervalId;
let secsInLastBox




    fetch('message.txt')

    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.text();
    })

    .then( text => {

        secsSinceLast = 0;
        minsSinceLast = 0;

        sinceLastBox.textContent = "00:00";

    }
    );

    function updateLastTime() {
        elapsedTime = elapsedTime + 1000;
        secsInLastBox = secs - secsSinceLast;
        minsInLastBox = mins - minsSinceLast;

        minsInLastBox = Math.floor((elapsedTime / 1000) % 60);
        secsInLastBox = Math.floor((elapsedTime / (1000*60)) % 60);
      
        minToLastBox = minsInSinceLast;
        secToLastBox = secsInSinceLast;
      
        secToLastBox = pad(secToLastBox);
        minToLastBox = pad(minToLastBox);
      
        sinceLastBox.textContent = `${minToLastBox}:${secToLastBox}`;
      
        function pad(unit) {
          return (("0") + unit).length > 2 ? unit : "0" + unit;
        }
      };

      intervalId = setInterval(updateLastTime, 1000);