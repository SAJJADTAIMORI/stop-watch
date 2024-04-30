let timer;
let startTime;
let running = false;

function startStop() {
  if (running) {
    clearInterval(timer);
    document.getElementById('startStop').innerText = 'Start';
    running = false;
  } else {
    startTime = new Date().getTime();
    timer = setInterval(updateDisplay, 10);
    document.getElementById('startStop').innerText = 'Stop';
    running = true;
  }
}
function updateDisplay() {
    let currentTime = new Date().getTime();
    let elapsedTime = currentTime - startTime;
    let minutes = Math.floor(elapsedTime / (1000 * 60));
    let seconds = Math.floor((elapsedTime % (1000 * 60)) / 1000);
    let milliseconds = Math.floor((elapsedTime % 1000) / 10);
  
    document.querySelector('.display').innerText = formatTime(minutes) + ':' + formatTime(seconds) + ':' + formatTime(milliseconds);
  }
  
  function formatTime(time) {
    return time < 10 ? '0' + time : time;
  }
  
  function reset() {
    clearInterval(timer);
    document.querySelector('.display').innerText = '00:00:00';
    document.getElementById('startStop').innerText = 'Start';
    running = false;
  }
  