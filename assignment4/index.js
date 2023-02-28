const hoursInput = document.getElementById("hours");
const minutesInput = document.getElementById("minutes");
const secondsInput = document.getElementById("seconds");
const startBtn = document.getElementById("start");
const dialog = document.getElementById("dialog");
const audio = document.getElementById("audio");

let timer;
hoursInput.value = "00";
minutesInput.value = "00";
secondsInput.value = "00";


function setDisabled(value) {
  hoursInput.disabled = value;
  minutesInput.disabled = value;
  secondsInput.disabled = value;
  startBtn.disabled = value;
}

function startTimer() {
  let hours = parseInt(hoursInput.value);
  let minutes = parseInt(minutesInput.value);
  let seconds = parseInt(secondsInput.value);

  let totalSeconds = hours * 3600 + minutes * 60 + seconds;

  setDisabled(true);

  timer = setInterval(function () {
    
    let hoursLeft = Math.floor(totalSeconds / 3600);
    let minutesLeft = Math.floor((totalSeconds %  3600) / 60);
    let secondsLeft = totalSeconds % 60;

    hoursLeft = hoursLeft < 10 ?     "0" + hoursLeft : hoursLeft;
    minutesLeft = minutesLeft < 10 ? "0" + minutesLeft : minutesLeft;
    secondsLeft = secondsLeft < 10 ? "0" + secondsLeft : secondsLeft;


    hoursInput.value = hoursLeft;
    minutesInput.value = minutesLeft;
    secondsInput.value = secondsLeft;

    if (totalSeconds === 0) {
      clearInterval(timer);
      setDisabled(false);
      dialog.style.display = "block";
      audio.play();
    } else {
      totalSeconds--;
    }
  }, 1000);
}

function stopTimer() {
  clearInterval(timer);
  setDisabled(false);
}


function resetTimer() {
  clearInterval(timer);
  hoursInput.value = "00";
  minutesInput.value = "00";
  secondsInput.value = "00";
  setDisabled(false);
}

function closeDialog() {
  dialog.style.display = "none";
  audio.pause();
}
