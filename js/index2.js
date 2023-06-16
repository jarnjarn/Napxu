

var button2 = document.getElementById("btn-buy");
var result = document.getElementById("result");
var resultload = document.getElementById("resultload");
var goback = document.getElementById("btn-back");
var icon = document.getElementById("icon");
var coinCustom = document.getElementById("btn-coin7");
var customSpan = document.getElementById("custom");
var inputDiv = document.querySelector(".input-coin");
var money = document.getElementById("money");
var moneymenu = document.querySelector(".money-menu");
var resultElement = document.getElementById("text-money-result")
var login = document.getElementById("login");
var logout = document.getElementById("logout");
btnLogout = document.getElementById("logout-btn");
var timeout;
for (let i = 0; i < 8; i++) {
  document.getElementById("btn-coin" + i).addEventListener("click", function (e) {
    for (let j = 0; j < 8; j++) {
      document.getElementById("btn-coin" + j).classList.remove("discoloration");
    }
    document.getElementById("btn-coin" + i).classList.add("discoloration");
    button2.classList.add("active");
    result.classList.add("active");
    let countPoint = document.querySelector("#btn-coin" + i + " .coin").innerHTML
    let conntMoney = document.querySelector("#btn-coin" + i + " .money").innerHTML
    document.getElementById("text-coin-result").innerHTML = countPoint.toString().replace(/,/g, '')
    document.getElementById("text-money-result").innerHTML = conntMoney.toString().replace(/,/g, '')
    if(i == 7){
      inputDiv.addEventListener("input", function() {
        var inputValue = inputCustom.value;
        if (isNaN(inputValue)) {
          return;
        }
        var result = parseInt(inputValue);
        document.getElementById("text-coin-result").innerHTML = result;
        
      });
    }
  })
  
}

function startRotation() {
  icon.classList.add("spin");
}

function stopRotation() {
  icon.classList.remove("spin");
}
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
  }, 1000);
  customSpan.style.display = "block";
  inputDiv.style.display = "none";
  money.style.display = "none";
  moneymenu.style.display = "block";
  inputCustom.value = "";
  resultElement.textContent = "";
  var moneyElement = document.getElementById("money");
  moneyElement.textContent = 0;

}
goback.addEventListener("click", Fgoback);



coinCustom.addEventListener("click", function() {
  customSpan.style.display = "none";
  inputDiv.style.display = "block";
  money.style.display = "block";
  moneymenu.style.display = "none";
});

inputDiv.addEventListener("input", function() {
  var inputValue = inputCustom.value;
  if (isNaN(inputValue)) {
    alert("Vui lòng chỉ nhập số!");
    return;
  }
  var result = parseInt(inputValue) * 30;
  var moneyElement = document.getElementById("money");
  moneyElement.textContent = result;
  resultElement.textContent = result;
 
});

function login1() {
  login.style.display = "none";
  showPopup1();
  setTimeout(function () {
    logout.style.display = "block";
  }, 1000);

}
function logout1() {
  logout.style.display = "none";
  showPopup1();showPopup1();
  setTimeout(function () {
    login.style.display = "block";
  }, 1000);
}

login.addEventListener("click", login1);
btnLogout.addEventListener("click", logout1);



