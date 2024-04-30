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