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


  $(".button").click(function () {
    $(".slider_box1").fadeToggle();
    $(".slider_box2").fadeToggle();
  });
//   let twoPic = document.querySelector(".twoPic");
// let prev = document.querySelector(".prev");
// let next = document.querySelector(".next");
// let index = 0;

// const info = [
//   {
//     id: 1,
//     img: "h1_hero1.jpg",
//   },

//   {
//     id: 2,
//     img: "h1_hero2.jpg",
//   },

// ];

// next.addEventListener("click", () => {
//   if (index == info.length - 1) {
//     index = 0;
//   } else {
//     index++;
//   }
//   let infoImg = info[index].img;
//   twoPic.innerHTML = ` <div class="image"><img src="/${infoImg}" /></div>`;
// });

// prev.addEventListener("click", () => {
//   if (index == 0) {
//     index = info.length - 1;
//   } else {
//     index--;
//   }
//   let infoImg = info[index].img;
//   twoPic.innerHTML = ` <div class="image"><img src="/${infoImg}" /></div>`;
// });
