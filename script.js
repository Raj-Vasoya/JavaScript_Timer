var hr = 0;
var min = 0;
var sec = 0;
var hour, minute, second, times;

function timer() {
  sec = sec + 1;
  if (sec == 60) {
    sec = 0;
    min = min + 1;
  }
  if (min == 60) {
    min = 0;
    sec = 0;
    hr = hr + 1;
  }

  second = (sec < 10) ? second = '0' + sec : sec;
  document.getElementById("sec").innerHTML = second;

  minute = (min < 10) ? minute = '0' + min : min;
  document.getElementById("min").innerHTML = minute;

  hour = (hr < 10) ? hour = '0' + hr : hr;
  document.getElementById("hr").innerHTML = hour;
}

function startTimer() {
  times = setInterval(timer, 1000);
  document.getElementById("start").style.cssText = "display:none";
  document.getElementById("stop").style.cssText = "display:inline-block";
}

function stopTimer() {
  clearInterval(times);
  document.getElementById("stop").style.cssText = "display:none";
  document.getElementById("start").style.cssText = "display:inline-block";
}

function resetTimer() {
  hr = 0;
  min = 0;
  sec = 0;
  clearInterval(times);
  document.getElementById('sec').innerHTML = '00';
  document.getElementById('min').innerHTML = '00';
  document.getElementById('hr').innerHTML = '00';
  document.getElementById("laps").innerHTML = '';
  document.getElementById("stop").style.cssText = "display:none";
  document.getElementById("start").style.cssText = "display:inline-block";
}

function lap() {
  var li = document.createElement("li");
  var a = document.getElementById("timer").innerText;
  var tx = document.createTextNode(a);
  li.appendChild(tx);
  document.getElementById("laps").appendChild(li);

  var button = document.createElement("button");
  button.innerHTML = "delete";
  button.className = "del";
  li.appendChild(button);

  var del = document.getElementsByClassName("del");
  for (var i = 0; i < del.length; i++) {
    del[i].onclick = function () {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
}