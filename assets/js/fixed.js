const elementoFixed = document.getElementById("nav");
window.addEventListener("scroll", (event) => {
  if (window.pageYOffset >= 5) {
    elementoFixed.classList.add("fixed");
  } else {
    elementoFixed.classList.remove("fixed");
  }
});
