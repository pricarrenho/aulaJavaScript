const btnStart = document.querySelector(".btnStart");
const btnPause = document.querySelector(".btnPause");
const btnReset = document.querySelector(".btnReset");
const timer = document.querySelector(".timer");

let seconds = 0;
let handleTimer;

function getTimeForSeconds(seconds) {
  const data = new Date(seconds * 1000);
  return data.toLocaleTimeString("pt-BR", { timeZone: "UTC" });
}

function handleTimerStart() {
  timer.classList.remove("pausado");

  handleTimer = setInterval(() => {
    seconds++;
    timer.innerHTML = getTimeForSeconds(seconds);
  }, 1000);
}

function handleTimerPause() {
  clearInterval(handleTimer);

  timer.classList.add("pausado");
}

function handleTimerReset() {
  clearInterval(handleTimer);
  timer.innerHTML = "00:00:00";
  seconds = 0;
  timer.classList.remove("pausado");
}

[
  { element: btnStart, action: handleTimerStart },
  { element: btnPause, action: handleTimerPause },
  { element: btnReset, action: handleTimerReset },
].forEach((item) => item.element.addEventListener("click", item.action)); //forma 1 de fazer

///////////////////////////////////////////////////////////

// btnStart.addEventListener("click", handleTimerStart);
// btnPause.addEventListener("click", handleTimerPause);
// btnReset.addEventListener("click", handleTimerReset);
//forma 2 de fazer

///////////////////////////////////////////////////////////

// const elementsAction = [
//   { element: btnStart, action: handleTimerStart },
//   { element: btnPause, action: handleTimerPause },
//   { element: btnReset, action: handleTimerReset },
// ];

// elementsAction.forEach((item) =>
//   item.element.addEventListener("click", item.action)
// );
//forma 3 de fazer
