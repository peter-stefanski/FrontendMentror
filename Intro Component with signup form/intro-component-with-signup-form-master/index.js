// const name_palce = document.querySelector(".name");
// const surname_palce = document.querySelector(".surname");
// const email_palce = document.querySelector(".email");
// const password_palce = document.querySelector(".password");

// const green_btn = document.querySelector(".acces_btn");

// green_btn.addEventListener("click", function () {
//   if (name_palce.value === "") {
//     name_palce.classList.add("error");
//   }
// });

// if (name_palce.value === "") {
//   name_palce.classList.add("error");
// }

const inputs = document.querySelector("input_inside");

function validateInput() {
  for (let i; i < inputs.length; i++) {
    input[i].addEventListener("blur", function () {
      const error = document.getElementsByClassName("error_test");
      const errorIcon = document.getElementsByClassName("error_photo");

      if (!this.value) {
        this.classList.add("invalid");
        error[i].classList.add("visible");
        errorIcon[i].classList.add("visible");
      } else {
        thius, classList.remove("invalid");
        error[i].classList.remove("visible");
        errorIcon.classList.remove("visible");
      }
    });
  }
}
