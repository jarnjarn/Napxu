var coin1 = document.getElementById("btn-coin");
var coin2 = document.getElementById("btn-coin1");
var coin3 = document.getElementById("btn-coin2");
var coin4 = document.getElementById("btn-coin3");
var coin5 = document.getElementById("btn-coin4");
var coin6 = document.getElementById("btn-coin5");
var coin7 = document.getElementById("btn-coin6");

var button2 = document.getElementById("btn-buy");
var result = document.getElementById("result");
var resultload = document.getElementById("resultload");
var goback = document.getElementById("btn-back");
var timeout;

function changeColor1() {
  button2.classList.add("active");
  coin1.classList.add("discoloration");
  coin2.classList.remove("discoloration");
  coin3.classList.remove("discoloration");
  coin4.classList.remove("discoloration");
  coin5.classList.remove("discoloration");
  coin6.classList.remove("discoloration");
  coin7.classList.remove("discoloration");
}
function changeColor2() {
  button2.classList.add("active");
  coin2.classList.add("discoloration");
  coin1.classList.remove("discoloration");
  coin3.classList.remove("discoloration");
  coin4.classList.remove("discoloration");
  coin5.classList.remove("discoloration");
  coin6.classList.remove("discoloration");
  coin7.classList.remove("discoloration");
}
function changeColor3() {
  button2.classList.add("active");
  coin3.classList.add("discoloration");
  coin1.classList.remove("discoloration");
  coin2.classList.remove("discoloration");
  coin4.classList.remove("discoloration");
  coin5.classList.remove("discoloration");
  coin6.classList.remove("discoloration");
  coin7.classList.remove("discoloration");
}
function changeColor4() {
  button2.classList.add("active");
  coin4.classList.add("discoloration");
  coin1.classList.remove("discoloration");
  coin2.classList.remove("discoloration");
  coin3.classList.remove("discoloration");
  coin5.classList.remove("discoloration");
  coin6.classList.remove("discoloration");
  coin7.classList.remove("discoloration");

}
function changeColor5() {
  button2.classList.add("active");
  coin5.classList.add("discoloration");
  coin1.classList.remove("discoloration");
  coin2.classList.remove("discoloration");
  coin3.classList.remove("discoloration");
  coin4.classList.remove("discoloration");
  coin6.classList.remove("discoloration");
  coin7.classList.remove("discoloration");
}
function changeColor6() {
  button2.classList.add("active");
  coin6.classList.add("discoloration");
  coin1.classList.remove("discoloration");
  coin2.classList.remove("discoloration");
  coin3.classList.remove("discoloration");
  coin4.classList.remove("discoloration");
  coin5.classList.remove("discoloration");
  coin7.classList.remove("discoloration");

}
function changeColor7() {
  button2.classList.add("active");
  coin7.classList.add("discoloration");
  coin1.classList.remove("discoloration");
  coin2.classList.remove("discoloration");
  coin3.classList.remove("discoloration");
  coin4.classList.remove("discoloration");
  coin5.classList.remove("discoloration");
  coin6.classList.remove("discoloration");
  
}
coin1.addEventListener("click", changeColor1);
coin2.addEventListener("click", changeColor2);
coin3.addEventListener("click", changeColor3);
coin4.addEventListener("click", changeColor4);
coin5.addEventListener("click", changeColor5);
coin6.addEventListener("click", changeColor6);
coin7.addEventListener("click", changeColor7);

function showPopup1() {
  resultload.classList.add("active1");

  timeout1 = setTimeout(function () {
    resultload.classList.remove("active1");
  }, 2000);
}

function showPopup2() {
  result.classList.add("active1");
}

function LoadPay() {
  showPopup1();

  setTimeout(function () {

    result.classList.remove("active");
    showPopup2();
  }, 2000);
}
button2.addEventListener("click", LoadPay);

function Fgoback() {
  setTimeout(function () {
    result.classList.remove("active1");
  },1000);
}
goback.addEventListener("click", Fgoback);

function resultColor3() {
  result.classList.add("active");

}

coin1.addEventListener("click", resultColor3);
coin2.addEventListener("click", resultColor3);
coin3.addEventListener("click", resultColor3);
coin4.addEventListener("click", resultColor3);
coin5.addEventListener("click", resultColor3);
coin6.addEventListener("click", resultColor3);
coin7.addEventListener("click", resultColor3);


var icon = document.getElementById("icon");

function startRotation() {
  icon.classList.add("spin");
}

function stopRotation() {
  icon.classList.remove("spin");
}

