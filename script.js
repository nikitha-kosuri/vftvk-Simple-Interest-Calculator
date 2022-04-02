function compute() {
  //   var rateval = document.getElementById("rate").value;
  var principal = document.getElementById("principal").value;
  var rate = document.getElementById("rate").value;
  var years = document.getElementById("years").value;

  var year = new Date().getFullYear() + parseInt(years);

  var interest = (principal * years * rate) / 100;

  //   p = document.getElementById("principal").value;
  if (principal <= 0) {
    alert("Enter positive number");
    principal.focus();
  }
  var amount = interest;
  document.getElementById("result").innerHTML =
    "If you deposit " +
    principal +
    ",<br>at an interest rate of " +
    rate +
    "%<br>You will receive an amount of " +
    amount +
    ",<br>in the year " +
    year +
    "<br>";
}
function updateRate() {
  var rateval = document.getElementById("rate").value;
  document.getElementById("rate_val").innerText = rateval;
}
