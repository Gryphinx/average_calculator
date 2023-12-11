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
  newInput.placeholder = "과목" + number + " 점수";
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


//Animation Part
var basicTimeline = anime.timeline({
  autoplay: false
});

var pathEls = $(".check");
for (var i = 0; i < pathEls.length; i++) {
  var pathEl = pathEls[i];
  var offset = anime.setDashoffset(pathEl);
  pathEl.setAttribute("stroke-dashoffset", offset);
}

basicTimeline
  .add({
    targets: ".text",
    duration: 1,
    opacity: "0"
  })
  .add({
    targets: ".button",
    duration: 1300,
    height: 10,
    width: 300,
    backgroundColor: "#2B2D2F",
    border: "0",
    borderRadius: 100
  })
  .add({
    targets: ".progress-bar",
    duration: 2000,
    width: 300,
    easing: "linear"
  })
  .add({
    targets: ".button",
    width: 0,
    duration: 1
  })
  .add({
    targets: ".progress-bar",
    width: 80,
    height: 80,
    delay: 500,
    duration: 750,
    borderRadius: 80,
    backgroundColor: "#71DFBE"
  })
  .add({
    targets: pathEl,
    strokeDashoffset: [offset, 0],
    duration: 200,
    easing: "easeInOutSine"
  });

$(".button").click(function() {
  basicTimeline.play();
});

$(".text").click(function() {
  basicTimeline.play();
});