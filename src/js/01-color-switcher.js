const startBtn = document.querySelector('[data-start]');
const stopBtn = document.querySelector('[data-stop]');
const body = document.querySelector('body');

let intervalId = null;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
};

const colorChange = () => {
    intervalId = setInterval(() => {
        body.style.backgroundColor = getRandomHexColor();
    }, 1000);
    startBtn.disabled = true;
    stopBtn.disabled = false;
};

const stopChange = () => {
    stopBtn.disabled = true;
    clearInterval(intervalId);
    startBtn.disabled = false;
}
startBtn.addEventListener('click', colorChange);
stopBtn.addEventListener('click', stopChange);
stopBtn.disabled = true;

