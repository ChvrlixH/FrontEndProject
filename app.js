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
    $(".slider_box1").fadeToggle(1);
    $(".slider_box2").fadeToggle(1);
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




// let fashionPro = [
//   { 
//     id:1,
//     img:"./img/latest1.jpg",
//   },
//   { 
//     id:2,
//     img:"./img/latest2.jpg",
//   },
//   { 
//     id:3,
//     img:"./img/latest3.jpg",
//   },
//   { 
//     id:4,
//     img:"./img/latest4.jpg",
//   },
//   { 
//     id:1,
//     img:"./img/latest1.jpg",
//   },
//   { 
//     id:1,
//     img:"./img/latest1.jpg",
//   },  
// ]


let fashionProduct = document.querySelector(".swiper-wrapper").innerHTML+=`
<div class="swiper-slide">
<img src="./img/latest1.jpg" />
<div class="slide_border">
<a href="#"><i class="fa-solid fa-basket-shopping"></i></a>
<a href="#"><i class="fa-regular fa-heart"></i></a>
<a href="#"><i class="fa-solid fa-magnifying-glass"></i></a>
</div>
<div class="slide_text">
<p>Cashmere Tank + Bag</p>
<span>$98.00 <span>$120.00</span> </span>
</div>
</div>
<div class="swiper-slide">
<img src="./img/latest2.jpg" />
<div class="slide_border">
<a href="#"><i class="fa-solid fa-basket-shopping"></i></a>
<a href="#"><i class="fa-regular fa-heart"></i></a>
<a href="#"><i class="fa-solid fa-magnifying-glass"></i></a>
</div>
<div class="slide_text">
<p>Cashmere Tank + Bag</p>
<span>$98.00 <span>$120.00</span> </span>
</div>
</div>
<div class="swiper-slide">
<img src="./img/latest3.jpg" />
<div class="slide_border">
<a href="#"><i class="fa-solid fa-basket-shopping"></i></a>
<a href="#"><i class="fa-regular fa-heart"></i></a>
<a href="#"><i class="fa-solid fa-magnifying-glass"></i></a>
</div>
<div class="slide_text">
<p>Cashmere Tank + Bag</p>
<span>$98.00 <span>$120.00</span> </span>
</div>
</div>
<div class="swiper-slide">
<img src="./img/latest4.jpg" />
<div class="slide_border">
<a href="#"><i class="fa-solid fa-basket-shopping"></i></a>
<a href="#"><i class="fa-regular fa-heart"></i></a>
<a href="#"><i class="fa-solid fa-magnifying-glass"></i></a>
</div>
<div class="slide_text">
<p>Cashmere Tank + Bag</p>
<span>$98.00 <span>$120.00</span> </span>
</div>
</div>
<div class="swiper-slide">
<img src="./img/latest1.jpg" />
<div class="slide_border">
<a href="#"><i class="fa-solid fa-basket-shopping"></i></a>
<a href="#"><i class="fa-regular fa-heart"></i></a>
<a href="#"><i class="fa-solid fa-magnifying-glass"></i></a>
</div>
<div class="slide_text">
<p>Cashmere Tank + Bag</p>
<span>$98.00 <span>$120.00</span> </span>
</div>
</div>
<div class="swiper-slide">
<img src="./img/latest2.jpg" />
<div class="slide_border">
<a href="#"><i class="fa-solid fa-basket-shopping"></i></a>
<a href="#"><i class="fa-regular fa-heart"></i></a>
<a href="#"><i class="fa-solid fa-magnifying-glass"></i></a>
</div>
<div class="slide_text">
<p>Cashmere Tank + Bag</p>
<span>$98.00 <span>$120.00</span> </span>
</div>
</div>
<div class="swiper-slide">
<img src="./img/latest3.jpg" />
<div class="slide_border">
<a href="#"><i class="fa-solid fa-basket-shopping"></i></a>
<a href="#"><i class="fa-regular fa-heart"></i></a>
<a href="#"><i class="fa-solid fa-magnifying-glass"></i></a>
</div>
<div class="slide_text">
<p>Cashmere Tank + Bag</p>
<span>$98.00 <span>$120.00</span> </span>
</div>
</div>
<div class="swiper-slide">
<img src="./img/latest4.jpg" />
<div class="slide_border">
<a href="#"><i class="fa-solid fa-basket-shopping"></i></a>
<a href="#"><i class="fa-regular fa-heart"></i></a>
<a href="#"><i class="fa-solid fa-magnifying-glass"></i></a>
</div>
<div class="slide_text">
<p>Cashmere Tank + Bag</p>
<span>$98.00 <span>$120.00</span> </span>
</div>
</div>
`

let appendNumber = 8;
    let prependNumber = 1;
    const swiper = new Swiper('.swiper', {
      slidesPerView: 4,
      centeredSlides: false,
      spaceBetween: 30,
      autoplay: {
        delay: 3500,
        disableOnInteraction: false,
      },
      loop: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      pagination: {
        el: '.swiper-pagination',
        type: 'fraction',
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      // virtual: {
      //   slides: (function () {
      //     const slides = [];
      //     for (var i = 0; i < 18; i += 1) {
      //       slides.push({fashionProduct});
      //     }
      //     return slides;
      //   })(),
      // },
    });



