function calculate() {
  const num = document.getElementsByClassName("form")[0].childElementCount;
  n = 0;
  let arr = [];
  while (n < num) {
    let a = document.getElementsByClassName("form")[0].children[n].value;
    arr.push(a);
    n += 1;
  }

  let sum = 0;
  let newArr = arr.map(Number);

  newArr.forEach(function (item) {
    sum += item;
  });

  result = sum / newArr.length;
  let x = document.getElementsByClassName("result")[0];
  x.innerText = result;
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

const remove_textbox = () => {
  if (number > 2) {
    const form = document.getElementsByClassName("form")[0].lastChild;
    form.remove();
    number -= 1;
  }
};
