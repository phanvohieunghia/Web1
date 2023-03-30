const resultElement = document.getElementById("result");
const buttonElement = document.getElementById("button");

let result = 0;
let flag = false;
let interval = undefined;

function autoIncrease() {
  if (!flag) {
    buttonElement.innerText = "Pause";
    interval = setInterval(() => {
      result++;
      resultElement.innerText = result;
    }, 1000);
  } else {
    buttonElement.innerText = "Play";
    clearInterval(interval);
  }
  flag = !flag;
}
