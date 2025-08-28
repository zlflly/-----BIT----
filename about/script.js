let text = document.getElementById("text");
let girl = document.getElementById("girl");
let moon = document.getElementById("moon");
let birds = document.getElementById("birds");
let whale = document.getElementById("whale");

window.addEventListener("scroll", () => {
  let value = window.scrollY;
  text.style.marginTop = value * -0.5 + "px";
  girl.style.left = value * -1.5 + "px";
  moon.style.left = value * 1.5 + "px";
  birds.style.marginTop = value * -1.5 + "px";
  whale.style.left = value * -2.5 + "px";
});
