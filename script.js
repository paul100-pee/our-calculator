function calc() {
  let num1 = parseInt(document.querySelector(".num1").value);
  let num2 = parseInt(document.querySelector(".num2").value);
  //   console.log(num1);
  let opr = document.querySelector(".oper").value;
  //   console.log(opr);
  let result;
  if (opr === "add") {
    result = num1 + num2;
  } else if (opr === "subtract") {
    result = num1 - num2;
  } else if (opr === "multiplication") {
    result = num1 * num2;
  } else if (opr === "division") {
    result = num1 / num2;
  } else {
    result = "this value is not in our calculator";
  }
  document.querySelector(".our-result").innerHTML = result;
}
