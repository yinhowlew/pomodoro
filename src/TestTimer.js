import React from 'react';


/* 
when START:  say, 00:00:00 hour
set final-time = Session-Length + current time = 00:25:00
countdown-timer = final-time - current time
when 0, stop

when PAUSE:
note countdown-timer

when RESUME:
set new final-time = countdown-timer + current time
countdown-timer = new final-time - current time


The getTime() method returns the number of milliseconds between midnight of January 1, 1970 and the specified date.
*/
const TestTimer = ({ min, sec, finalTime, updateTimer, run, timerID }) => {
// 2 issues:  1 timer doesn't stop; 2 - how to trigger the start
// below:  without arrow, it will start
   const countdownUpdate = () => setInterval(function() {
    let now = new Date().getTime();  
    let countdownTime = finalTime - now;  
    let minutes = Math.floor(countdownTime / (60 * 1000));
    let seconds = Math.floor((countdownTime % (60 * 1000)) / 1000);

    updateTimer(minutes, seconds, countdownUpdate);

    // below doesn't stop??
    if (countdownTime < 0 || run === false) {  
    clearInterval(countdownUpdate);
    }
  }, 1000);

   // const stopCountdown = () => clearInterval(countdownUpdate)

   // if (run === true) {
   //  countdownUpdate();
   // } else if (run === false) {
   //  clearInterval(timerID);
   // }

// below doesn't work
   // if (run === false) {
   //  clearInterval(countdownUpdate)
   // }

    return (
          <div>
             test timer
             {min}
             {sec}
          </div>
    )
}

export default TestTimer;
