document.querySelector(".button_01").addEventListener("click", function () {
  const cloudElement = document.querySelector(".cloud");

  if (
    cloudElement.style.display === "none" ||
    cloudElement.style.display === ""
  ) {
    cloudElement.style.display = "flex";
  } else {
    cloudElement.style.display = "none";
  }
});
