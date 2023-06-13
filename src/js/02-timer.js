import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

const startBtn = document.querySelector('button[data-start]');
const values = document.querySelectorAll('.value');

startBtn.disabled = true;

const dateToCal = [];

const getTime = () => {
    const date = new Date();
    const timeNow = date.getTime();
    return timeNow;
};
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
      console.log(selectedDates[0]);
      if (selectedDates[0].getTime() <= getTime()) {
          startBtn.disabled = true;
          return alert("Please choose a date in the future");
      }
      startBtn.disabled = false;
      dateToCal.push(selectedDates[0])
  },
};

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;


  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
};



const calTime = () => {
const countToDate = setInterval(() => {
        values[0].textContent = convertMs(dateToCal[0] - getTime()).days;
        values[1].textContent = convertMs(dateToCal[0] - getTime()).hours;
        values[2].textContent = convertMs(dateToCal[0] - getTime()).minutes;
        values[3].textContent = convertMs(dateToCal[0] - getTime()).seconds;
        checkTime(countToDate)
    }, 1000);
};

const checkTime = (interval) => {
    if ( ) {
        clearInterval(interval)
    }
    
}
flatpickr("#datetime-picker", options)
startBtn.addEventListener('click', calTime)
