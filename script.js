function calculate() {
  const arr = [];
  const a = document.getElementById("1").value;
  const b = document.getElementById("2").value;
  const c = document.getElementById("3").value;
  const d = document.getElementById("4").value;
  const e = document.getElementById("5").value;
  const f = document.getElementById("6").value;
  const g = document.getElementById("7").value;
  arr.push(a, b, c, d, e, f, g);
  const modifiedArr = arr.filter((v) => v.length > 0).map(Number);

  let sum = 0;
  modifiedArr.forEach(function (item) {
    sum += item;
  });

  result = sum / modifiedArr.length;
  p = document.querySelector("p");

  console.log(p);
}

let number = 2;
const add_textbox = () => {
  const form = document.getElementsByClassName("form")[0];
  const newInput = document.createElement("input");
  newInput.id = number;
  newInput.placeholder = "과목" + number;
  form.appendChild(newInput);
  number += 1;
};
const remove = (obj) => {
  document.getElementById("box").removeChild(obj.parentNode);
};
