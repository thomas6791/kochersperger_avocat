const elementoFixed = document.getElementById("nav");
const logo = elementoFixed.querySelector(".logo");
window.addEventListener("scroll", (event) => {
  if (window.pageYOffset >= 5) {
    elementoFixed.classList.add("fixed");
    elementoFixed.style.fontSize = "0.9em";
    logo.style.width = "45px";
  } else {
    elementoFixed.classList.remove("fixed");
    elementoFixed.style.fontSize = "1em";
    logo.style.width = "50px";
  }
});
