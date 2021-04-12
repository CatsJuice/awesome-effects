window.onload = () => {
  const clock = document.getElementById("_template");
  document.body.removeChild(clock);
  const displayFrame = document.getElementById("display-frame");

  // 6 number
  for (let i = 0; i < 6; i++) {
    const number = document.createElement("section");
    number.setAttribute("class", "number");
    // 3 rows
    for (let row = 0; row < 3; row++) {
      // 2 columns
      for (let col = 0; col < 2; col++) {
        const cp = clock.cloneNode(true);
        cp.setAttribute("data-row", row);
        cp.setAttribute("data-col", col);
        number.appendChild(cp);
      }
    }
    displayFrame.appendChild(number);
  }

  setTime();
  // set time
  setInterval(() => {
    setTime();
  }, 1000);
};

function setTime() {
  document.querySelectorAll(".number").forEach((number, index) => {
    const now = new Date();
    const hour = fillWithZero(now.getHours());
    const minute = fillWithZero(now.getMinutes());
    const seconds = fillWithZero(now.getSeconds());
    const time = `${hour}${minute}${seconds}`;
    number.setAttribute("data-value", time.substr(index, 1));
  });
}

function fillWithZero(number) {
  number = `${number}`;
  if (number.length < 2) number = `0${number}`;
  return number;
}
