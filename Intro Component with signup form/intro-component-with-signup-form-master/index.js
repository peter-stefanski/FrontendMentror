const name_palce = document.querySelector(".name");
const surname_palce = document.querySelector(".surname");
const email_palce = document.querySelector(".email");
const password_palce = document.querySelector(".password");

const green_btn = document.querySelector(".acces_btn");

green_btn.addEventListener("click", function () {
  if (name_palce.value === "") {
    name_palce.classList.add("error");
  }
});

// if (name_palce.value === "") {
//   name_palce.classList.add("error");
// }
