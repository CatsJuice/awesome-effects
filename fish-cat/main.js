window.onload = () => {
  const meow = document.getElementById("meow");
  const pool = document.getElementById("pool");
  const parallax = document.getElementById("parallax");
  const fishCursor = document.getElementById("fish-cursor");

  const eyeL = document.querySelector("svg#cat .eye_l");
  const eyeR = document.querySelector("svg#cat .eye_r");
  const eyeballL = document.querySelector("svg#cat .eyeball_l");
  const eyeballR = document.querySelector("svg#cat .eyeball_r");

  let clientX = innerWidth / 2;
  let clientY = innerHeight * 0.8;

  window.addEventListener("scroll", (e) => {
    const top = window.scrollY;
    const ratio = 1.6;
    parallax.style.top = `-${Math.min(500, top / ratio)}px`;
    meow.setAttribute("style", `top: ${50 - top / 30}%`);

    let bg = top > 500 ? "#FFFFFF80" : "#F4E5FF80";
    document.body.setAttribute("style", "--header-bg: " + bg);
    moveEyeballs();
  });

  window.addEventListener("mousemove", (e) => {
    clientX = e.clientX;
    clientY = e.clientY;
    moveEyeballs();
  });

  const moveEyeballs = () => {
    moveEyeball(eyeL, eyeballL);
    moveEyeball(eyeR, eyeballR);
  };

  const moveEyeball = (eye, eyeball) => {
    const rect = eye.getBoundingClientRect();
    const r = rect.width / 2;
    const { x, y } = rect;
    const d = r * 0.3;
    const a = clientX;
    const b = clientY;
    const _y = b - (y + r);
    const _x = x + r - a;
    const _z = Math.sqrt(_x * _x + _y * _y);
    const ofx = parseInt((d / _z) * _x);
    const ofy = parseInt((d / _z) * _y);
    eyeball.setAttribute("style", `transform: translate(${-ofx}px, ${ofy}px)`);

    fishCursor.style.left = `${a}px`;
    fishCursor.style.top = `${b}px`;
  };

  const injectFishes = () => {
    const fragment = document.createDocumentFragment();
    const colors = [
      "#A9CCE3",
      "#2603C4",
      "#038DC4",
      "#F590D1",
      "#F1C40F",
      "#D5DBDB",
      "#EC7063",
    ];
    for (let i = 0; i < 500; i++) {
      const randomColor = colors[Math.floor(Math.random() * colors.length)];
      const li = document.createElement("li");
      li.style.color = randomColor;
      li.innerHTML = '<i class="fas fa-fish"></i>';
      fragment.appendChild(li);
    }
    pool.appendChild(fragment);
  };

  moveEyeballs();
  injectFishes();
};
