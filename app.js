// window.onscroll = () => {
//   if (window.scrollY > 80) {
//     document.querySelector(".mainHeader").classList.add("active");
//   } else {
//     document.querySelector(".mainHeader").classList.remove("active");
//   }
// };

// window.onload = () => {
//   if (window.scrollY > 80) {
//     document.querySelector(".mainHeader").classList.add("active");
//   } else {
//     document.querySelector(".mainHeader").classList.remove("active");
//   }
// };



let login = document.querySelector(".fa-user");
let loginForm = document.querySelector(".login-form-container");
login.addEventListener("click", () => {
  loginForm.classList.toggle("active");
});

document.querySelector("#close-login-btn").onclick = () => {
  loginForm.classList.remove("active");
};



let menu = document.querySelector(".menuBar");
document.querySelector(".menuBar_responsive").onclick = () => {
    menu.classList.toggle("active");
  };


