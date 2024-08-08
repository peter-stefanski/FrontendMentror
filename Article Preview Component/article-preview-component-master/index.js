document
  .getElementsByClassName(".button_01")
  .addEventListener("click", function () {
    document.querySelector(".share").getElementsByClassName.display = "flex";
    document.getElementById("buttonClose").style.display = "inline-block";
    document.getElementById(".button_01").style.display = "none";
  });

function init() {
  document.querySelector(".share").style.display = "flex";
  document.getElementById("button").style.display = "inline-block";
  document.getElementById("buttonClose").style.display = "none";
}

document.getElementById("buttonClose").addEventListener("click", init);
document.getElementById("buttonCloseOne").addEventListener("click", init);
