let tens = 0;
let secs = 0;
let mins = 0;
let append_tens = document.getElementById("tens");
let append_secs = document.getElementById("second");
let append_mins = document.getElementById("mins");
let start = document.getElementById("Start");
let stop = document.getElementById("Stop");
let reset = document.getElementById("Reset");
let myInterval;
start.onclick = function () {
  //clearInterval(myInterval);
  myInterval = setInterval(timer, 1);
};

stop.onclick = function () {
  clearInterval(myInterval);
};

reset.onclick = function () {
  console.log(mins, secs, tens);
  tens = "00";
  secs = "00";
  mins = "00";
  append_tens.innerHTML = tens;
  append_secs.innerHTML = secs;
  append_mins.innerHTML = mins;
  clearInterval(myInterval);
};

function timer() {
  tens++;

  if (tens <= 9) {
    append_tens.innerHTML = `0` + tens;
  }
  if (tens >= 10) {
    append_tens.innerHTML = tens;
  }
  if (tens > 99) {
    secs++;
    append_secs.innerHTML = `0` + secs;
    tens = 0;
    append_tens.innerHTML = `0` + tens;
  }
  if (secs > 9) {
    append_secs.innerHTML = secs;
  }

  if (secs > 59) {
    mins++;
    append_mins.innerHTML = "0" + mins;
    secs = 0;
    append_secs.innerHTML = "0" + secs;
  }

  if (mins > 9) {
    append_mins.innerHTML = mins;
  }
}
