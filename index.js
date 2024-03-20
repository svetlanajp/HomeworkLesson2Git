// Создайте простой таймер на веб-странице, который будет отсчитывать время назад от 60 секунд.
// При достижении 0 секунд таймер должен остановиться.
// Стилизуйте его

// const timerCard = document.querySelector(".card-timer");
// let time = 60; 

// const showTimer = () => {

//   timerCard.textContent = time;
//   if (time < 0) {
//     //alert("Time is up");
//     timerCard.textContent="Time is up";
//     clearInterval(timerInterval);
//   } else {
//     time--;
//   }
// };
// const timerInterval = setInterval(showTimer, 1000);
//Вариант 2
const timer = document.querySelector("#timer");
const startButton=document.querySelector(".timer-button");

const startTimer = () => {
  let seconds = 60;

  const updateTimer = () => {
    timer.textContent = seconds;
    seconds--;

    if (seconds < 0) {
      clearTimeout(timerId);
      startButton.removeAttribute("disabled");//этим мы восстановим кнопку
    }
  };
  const timerId = setInterval(updateTimer, 1000);

  if(timer.textContent!==60){
    startButton.setAttribute("disabled","");//этим мы остановили кнопку при выполнении функции
  }
};

startButton.addEventListener("click",startTimer);
