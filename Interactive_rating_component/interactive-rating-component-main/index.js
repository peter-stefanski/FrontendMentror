const mainContainer = document.querySelector(".main_container");
const thanksConstainer = document.querySelector(".succes");
const submitButton = document.getElementById("submit");

submitButton.addEventListener("click", () => {
  thanksConstainer.classList.remove("hidden");
  mainContainer.style.display = "none";
});
