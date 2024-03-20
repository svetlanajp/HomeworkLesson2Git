// Создайте простой таймер на веб-странице, который будет отсчитывать время назад от 60 секунд.
// При достижении 0 секунд таймер должен остановиться.
// Стилизуйте его

const timerCard = document.querySelector(".card-timer");
let time = 60; 

const showTimer = () => {

  timerCard.textContent = time;
  if (time < 0) {
    //alert("Time is up");
    timerCard.textContent="Time is up";
    clearInterval(timerInterval);
  } else {
    time--;
  }
};
const timerInterval = setInterval(showTimer, 1000);

