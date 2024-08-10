// document
//   .querySelector(".button_01") // Użycie querySelector zamiast getElementsByClassName dla pojedynczego elementu
//   .addEventListener("click", function () {
//     document.querySelector(".cloud").style.display = "flex";
//   });

document
.querySelector(".button_01")
.addEventListener("click", function () {
  const cloudElement = document.querySelector(".cloud");
  if (cloudElement.style.display === "none" || cloudElement.style.display === "") {
    cloudElement.style.display = "flex";
  } else {
    cloudElement.style.display = "none";
  }};