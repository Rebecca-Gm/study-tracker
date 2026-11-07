//What the timer needs to remember: seconds left.
//What it needs to do: show the time, count down, pause, reset.

let secondsLeft = 25 * 60;
function formatTime(totalSeconds){
    const minutes = String(Math.floor(totalSeconds / 60)).padStart(2, "0");
    const seconds = String((totalSeconds % 60)).padStart(2, "0");

    return `${minutes}:${seconds}`;

}


const timeDisplay = document.getElementById("time");

function updateDisplay(){
    timeDisplay.textContent = formatTime(secondsLeft);
}
updateDisplay();






