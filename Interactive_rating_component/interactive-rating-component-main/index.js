const mainContainer = document.querySelector(".main_container");
const thanksConstainer = document.querySelector(".succes");
const submitButton = document.getElementById("submit");
const rating = document.getElementById("rating");
const rates = document.querySelectorAll(".rate_btn");

submitButton.addEventListener("click", () => {
  thanksConstainer.classList.remove("hidden");
  mainContainer.style.display = "none";
});

rates.forEach((rate) => {
  rate.addEventListener("click", () => {
    rating.innerHTML = rate.innerHTML;
  });
});
