//What the timer needs to remember: seconds left.
//What it needs to do: show the time, count down, pause, reset.

let secondsLeft = 1 * 60;
let timerId;


function formatTime(totalSeconds){
    const minutes = String(Math.floor(totalSeconds / 60)).padStart(2, "0");
    const seconds = String((totalSeconds % 60)).padStart(2, "0");

    return `${minutes}:${seconds}`;

}


const timeDisplay = document.getElementById
("time");
const startButton = document.getElementById("start");
startButton.addEventListener("click", function () {
    
  clearInterval(timerId);  
  timerId = setInterval(function () {
    
    secondsLeft--;
    updateDisplay();

    if (secondsLeft <= 0) {
      clearInterval(timerId);
    }
  }, 1000);
});

const resetButton = document.getElementById("reset");

resetButton.addEventListener("click", function () {
  clearInterval(timerId);
  secondsLeft = 25 * 60;
  updateDisplay();
});


const pauseButton = document.getElementById("pause");

pauseButton.addEventListener("click", function () {
  clearInterval(timerId);
});

function updateDisplay(){
    timeDisplay.textContent = formatTime(secondsLeft);
}
updateDisplay();






