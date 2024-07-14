const mainConstainer = document.querySelector(".main-constainer");
const thanksConstainer = document.querySelector(".succes");
const sumbitButton = document.getElementById("submit");

sumbitButton.addEventListener("click", () => {
  thanksConstainer.classList.remove("hidden");
  mainConstainer.style.display = "none";
});
