function showTime() {
  let date = new Date();
  let hours = date.getHours();
  let hoursMilitary = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();

  if(hours == 0) {
    hours = 12;
  }

  if(hours > 12) {
    hours = hours - 12;
    session = "PM";
  }
  else {
    session = "AM";
  }

  hours = (hours < 10) ? "0" + hours : hours;
  minutes = (minutes < 10) ? "0" + minutes : minutes;
  seconds = (seconds < 10) ? "0" + seconds : seconds;

  var time = hours + ":" + minutes + ":" + seconds + " " + session;

  document.querySelector("#MyClockDisplay").innerText = time;

  document.querySelector("#MyClockDisplay").textContent = time;


  var timeMilitary = hoursMilitary + ":" + minutes + ":" + seconds;

  document.querySelector("#MyClockDisplayMilitary").innerText = timeMilitary;

  document.querySelector("#MyClockDisplayMilitary").textContent = timeMilitary;

  setTimeout(showTime, 1000);

}

showTime();

function toggleClock() {
var myClock = document.querySelector(".clockMilitary");

var dispalySetting = myClock.style.display;

var clockBtn = document.querySelector(".clockBtn");

if(dispalySetting == "block") {
  myClock.style.display = "none";
  clockBtn.innerText = "Show Military clock";
}
else {
  myClock.style.display = "block";
  clockBtn.innerText = "Hide Military clock";
}
}



