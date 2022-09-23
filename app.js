window.onload = function () {
  const btn = document.getElementById("btnId");

  btn.addEventListener("mouseover", (event) => {
    const x = event.pageX - btn.offsetLeft;
    const y = event.pageY - btn.offsetTop;
    btn.style.setProperty("--xPos", x + "px");
    btn.style.setProperty("--yPos", y + "px");
  });
};
