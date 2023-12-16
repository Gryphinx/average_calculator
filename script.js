function calculate() {
  // Animation Part
  const body = document.querySelector("body");
  const form = document.querySelector("form");
  const btnCalc = document.querySelector(".btn__calc");
  const p = document.querySelector("p");
  const btnRefresh = document.querySelector(".btn__refresh");
  const progressBar = document.querySelector(".progress-bar");
  const svg = document.querySelector("svg");
  const img = document.querySelector("img");
  body.style.backgroundColor = "#121212";
  form.style.display = "none";
  btnCalc.style.opacity = 0;
  p.style.visibility = "visible";
  p.style.opacity = 1;
  btnRefresh.style.visibility = "visible";
  btnRefresh.style.opacity = 1;
  btnRefresh.style.cursor = "pointer";
  btnRefresh.addEventListener("click", () => {
    window.location.reload();
  });
  progressBar.style.opacity = 0;
  svg.style.opacity = 0;
  img.style.width = "82px";
  img.style.height = "82px";
  img.style.transform = "translateY(-350px)";

  // Calculation part
  const num = document.querySelector("form").childElementCount;
  n = 0;
  let arr = [];
  while (n < num) {
    let a = document.querySelector("form").children[n].value;
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
  return n;
}

let form__input__id = 1;

const add_textbox = () => {
  const form = document.querySelector("form");
  const newInput = document.createElement("input");
  form__input__id += 1;
  newInput.id = form__input__id;
  newInput.placeholder = "과목" + form__input__id + " 점수";
  form.appendChild(newInput);
  location.href = `#${form__input__id}`;
};

const remove_textbox = () => {
  if (form__input__id > 2) {
    const form = document.querySelector("form").lastChild;
    form.remove();
    form__input__id -= 1;
  }
};

//Animation Part (from https://codepen.io/andrewmillen/pen/MoKLob)
var basicTimeline = anime.timeline({
  autoplay: false,
});

var pathEls = $(".check");
for (var i = 0; i < pathEls.length; i++) {
  var pathEl = pathEls[i];
  var offset = anime.setDashoffset(pathEl);
  pathEl.setAttribute("stroke-dashoffset", offset);
}

basicTimeline
  .add({
    targets: ".button",
    duration: 1300,
    height: 10,
    width: 300,
    backgroundColor: "#2B2D2F",
    border: "0",
    borderRadius: 100,
  })
  .add({
    targets: ".progress-bar",
    duration: 2000,
    width: 300,
    easing: "linear",
  })
  .add({
    targets: ".button",
    width: 0,
    duration: 1,
  })
  .add({
    targets: ".progress-bar",
    width: 80,
    height: 80,
    delay: 500,
    duration: 750,
    borderRadius: 80,
    backgroundColor: "#71DFBE", // 71DFBE
  })
  .add({
    targets: pathEl,
    strokeDashoffset: [offset, 0],
    duration: 200,
    easing: "easeInOutSine",
  });

$(".button").click(function () {
  basicTimeline.play();
});
