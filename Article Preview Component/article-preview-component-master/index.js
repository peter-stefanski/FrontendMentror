document.querySelector(".button_01").addEventListener("click", function () {
  const cloudElement = document.querySelector(".cloud");

  if (
    cloudElement.style.display === "none" ||
    cloudElement.style.display === ""
  ) {
    cloudElement.style.display = "flex";
    cloudElement.appendChild(button);
    button.style.position = "relative";
  } else {
    cloudElement.style.display = "none";
    document.body.appendChild(button);
    button.style.position = "absolute";
  }
});
