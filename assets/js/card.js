console.log("koh lanta");

let cards = document.querySelectorAll(".card");
cards.forEach((card) => {
  card.addEventListener("mouseover", (event) => {
    document.querySelectorAll(".card").forEach((item) =>{
      item.classList.remove("active");
    });
    event.currentTarget.classList.add("active");
  });
});
