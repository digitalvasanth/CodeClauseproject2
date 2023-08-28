const timerElement = document.getElementById('timer');
const stopwatchElement = document.getElementById('stopwatch');

let timerInterval;
let stopwatchInterval;
let timerSeconds = 0;
let stopwatchSeconds = 0;

function updateTimer() {
  const hours = Math.floor(timerSeconds / 3600);
  const minutes = Math.floor((timerSeconds % 3600) / 60);
  const seconds = timerSeconds % 60;
  timerElement.textContent = `${formatTime(hours)}:${formatTime(minutes)}:${formatTime(seconds)}`;
  timerSeconds--;
  if (timerSeconds < 0) {
    clearInterval(timerInterval);
    timerElement.textContent = 'Time\'s up!';
  }
}

function updateStopwatch() {
  const hours = Math.floor(stopwatchSeconds / 3600);
  const minutes = Math.floor((stopwatchSeconds % 3600) / 60);
  const seconds = stopwatchSeconds % 60;
  stopwatchElement.textContent = `${formatTime(hours)}:${formatTime(minutes)}:${formatTime(seconds)}`;
  stopwatchSeconds++;
}

function formatTime(time) {
  return time < 10 ? `0${time}` : time;
}

document.getElementById('startTimer').addEventListener('click', () => {
  clearInterval(timerInterval);
  const hoursInput = parseInt(prompt("Enter hours:")) || 0;
  const minutesInput = parseInt(prompt("Enter minutes:")) || 0;
  const secondsInput = parseInt(prompt("Enter seconds:")) || 0;
  timerSeconds = hoursInput * 3600 + minutesInput * 60 + secondsInput;
  timerInterval = setInterval(updateTimer, 1000);
});

document.getElementById('pauseTimer').addEventListener('click', () => {
  clearInterval(timerInterval);
});

document.getElementById('resetTimer').addEventListener('click', () => {
  clearInterval(timerInterval);
  timerSeconds = 0;
  timerElement.textContent = '00:00:00';
});

document.getElementById('startStopwatch').addEventListener('click', () => {
  clearInterval(stopwatchInterval);
  stopwatchInterval = setInterval(updateStopwatch, 1000);
});

document.getElementById('pauseStopwatch').addEventListener('click', () => {
  clearInterval(stopwatchInterval);
});

document.getElementById('resetStopwatch').addEventListener('click', () => {
  clearInterval(stopwatchInterval);
  stopwatchSeconds = 0;
  stopwatchElement.textContent = '00:00:00';
});
