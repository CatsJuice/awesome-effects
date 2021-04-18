window.onload = () => {
  document.addEventListener("keydown", (e) => {
    applyStatus(e, true);
  });

  document.addEventListener("keyup", (e) => {
    applyStatus(e, false);
  });

  console.log(document.querySelector("input"))
  document.querySelector("input").value = "Leopold FC750R PD";
};

function applyStatus(e, pressed = false) {
  // e.preventDefault();
  const { keyCode } = e;
  // console.log(keyCode);
  const keys = document.querySelectorAll(`div.key[data-keyCode="${keyCode}"]`);
  if (keys) {
    keys.forEach((key) => {
      if (pressed) {
        key.classList.add("pressed");
      } else {
        key.classList.remove("pressed");
      }
    });
  }
}
