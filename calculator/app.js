const items = document.querySelectorAll(".item");
const result = document.querySelector(".result");

let n1;
let n2;
let sign;
let select;
let reslut;
let calc;

function Calculator(sign, n1, n2) {
  calc = n1;
  if (sign === "+") {
    calc += n2;
  } else if (sign === "-") {
    calc -= n2;
  } else if (sign === "*") {
    calc *= n2;
  } else if (sign === "%") {
    calc %= n2;
  } else if (sign === "/") {
    calc /= n2;
  }
  result.innerHTML = calc;
}

function setCalc(e) {
  select = e.target.dataset.calc;
  switch (select) {
    case "+":
      sign = "+";
      break;

    case "-":
      sign = "-";
      break;

    case "*":
      sign = "*";
      break;

    case "%":
      sign = "%";
      break;

    case "/":
      sign = "/";
      break;

    case "reset":
      n1 = 0;
      n2 = 0;
      result.innerHTML = n2;
      break;

    case "=":
      Calculator(sign, n1, n2);
      break;

    case "minus":
      if (n1 && n2) {
        n2 *= -1;
        result.innerHTML = n2;
      } else {
        n1 *= -1;
        result.innerHTML = n1;
      }

      break;

    default:
      if (n1) {
        n2 = e.target.innerHTML * 1;
        result.innerHTML = n2;
      } else {
        n1 = e.target.innerHTML * 1;
        result.innerHTML = n1;
      }
      break;
  }
}

items.forEach((i) => {
  i.addEventListener("click", (e) => {
    setCalc(e);
  });
});
