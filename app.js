let login = document.querySelector(".fa-user");
let loginPage = document.querySelector(".loginPage");
let loginForm = document.querySelector(".login-form-container");
login.addEventListener("click", () => {
  loginForm.classList.toggle("active");
});

loginPage.addEventListener("click", () => {
  loginForm.classList.toggle("active");
});

document.querySelector("#close-login-btn").onclick = () => {
  loginForm.classList.remove("active");
};

 

// // // HEAD SLIDER // // //
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
                  
                  
                  
    // // // TRENDING THIS WEEK // // //
                  
                  
let productsTrending=[ 
   {  name: "Cashmere Tank + Bag",  price: 120.00,  discount: 98.00 ,  category: "Women", pic: "./img/latest1.jpg",},
   {  name: "Cashmere Tank + Bag",  price: 120.00,  discount: 98.00 ,  category: "Women", pic: "./img/latest2.jpg",},
   {  name: "Cashmere Tank + Bag",  price: 120.00,  discount: 98.00 ,  category: "Women", pic: "./img/latest3.jpg",},
   {  name: "Cashmere Tank + Bag",  price: 120.00,  discount: 98.00 ,  category: "Women", pic: "./img/latest4.jpg",},
   {  name: "Cashmere Tank + Bag",  price: 120.00,  discount: 98.00 ,  category: "Men", pic: "./img/latest1.jpg",},
   {  name: "Cashmere Tank + Bag",  price: 120.00,  discount: 98.00 ,  category: "Men", pic: "./img/latest2.jpg",},
   {  name: "Cashmere Tank + Bag",  price: 120.00,  discount: 98.00 ,  category: "Men", pic: "./img/latest3.jpg",},
   {  name: "Cashmere Tank + Bag",  price: 120.00,  discount: 98.00 ,  category: "Men", pic: "./img/latest4.jpg",},
   {  name: "Cashmere Tank + Bag",  price: 120.00,  discount: 98.00 ,  category: "Baby", pic: "./img/latest1.jpg",},
   {  name: "Cashmere Tank + Bag",  price: 120.00,  discount: 98.00 ,  category: "Baby", pic: "./img/latest2.jpg",},
   {  name: "Cashmere Tank + Bag",  price: 120.00,  discount: 98.00 ,  category: "Baby", pic: "./img/latest3.jpg",},
   {  name: "Cashmere Tank + Bag",  price: 120.00,  discount: 98.00 ,  category: "Baby", pic: "./img/latest4.jpg",},
  ];
  let fashionProduct = document.querySelector(".fashion_products .swiper-wrapper");
  let i = 0;
  productsTrending.forEach(product => {
    fashionProduct.innerHTML+=`
    <div class="swiper-slide">
    <img src="${product.pic}" />
    <div class="slide_border">`+
    "<button onclick='addtocart("+(i++)+")'><i class='fa-solid fa-basket-shopping add_basket'></i></button>"+`
    <i class="fa-regular fa-heart"></i>
    <i class="fa-solid fa-magnifying-glass"></i>
    </div>
    <div class="slide_text">
    <p>${product.name}</p>
    <span>$${product.discount}.00 <span>$${product.price}.00</span> </span>
    </div>
</div>`
});


let filter = document.querySelectorAll(".filter_trending");
filter.forEach((filterMen=>{
  filterMen.addEventListener("click",()=>{
    let filterTrending = [...productsTrending];
    if(filterMen.innerHTML !="Fashion"){
      fashionProduct.innerHTML="";
      filterTrending=filterTrending.filter(
        (filterOBJ)=>filterOBJ.category==filterMen.innerHTML
        ); 
        let f=0;
        filterTrending.forEach(products=>{
          fashionProduct.innerHTML+=`
          <div class="swiper-slide">
          <img src="${products.pic}" />
          <div class="slide_border">`+
          "<button onclick='addtocart("+(f++)+")'><i class='fa-solid fa-basket-shopping add_basket'></i></button>"+`
          <i class="fa-regular fa-heart"></i>
          <i class="fa-solid fa-magnifying-glass"></i>
          </div>
          <div class="slide_text">
          <p>${products.name}</p>
          <span>$${products.discount}.00 <span>$${products.price}.00</span> </span>
          </div>
          </div>
          `
        })
        console.log({filterTrending});
      }
      
      else{
        productsTrending.forEach(product => {
          fashionProduct.innerHTML+=`
          <div class="swiper-slide">
          <img src="${product.pic}" />
          <div class="slide_border">`+
          "<button onclick='addtocart("+(i++)+")'><i class='fa-solid fa-basket-shopping add_basket'></i></button>"+`
            <i class="fa-regular fa-heart"></i>
            <i class="fa-solid fa-magnifying-glass"></i>
            </div>
            <div class="slide_text">
            <p>${product.name}</p>
            <span>$${product.discount}.00 <span>$${product.price}.00</span> </span>
            </div>
            </div>`});
          }
        })
      }))
      
      let basket=[]
      let basketButtons=document.querySelectorAll(".add_basket");
      basketButtons.forEach((button,index) => {
        button.addEventListener("click",()=>{
          if (!basket.includes(products[index])) {
            basket.push(products[index])
            
          }
        })
        
      });
      
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
          
          
          
  // // //  CUSTOMER // // // 
  
  
  
  
  $(".prew_button").click(() => {
    $(".customer_slider_item").fadeToggle(300);
    $(".customer_slider_item").fadeToggle(800);
  });
  $(".next_button").click(() => {
    $(".customer_slider_item").fadeToggle(300);
    $(".customer_slider_item").fadeToggle(800);
  });
  
  
  
  
  
  //  // // YOU MAY LIKE // // //
  
  
  
  youMayLike_Products=[
    {  name: "Cashmere Tank + Bag",  price: 120.00,  discount: 98.00 , pic: "./img/latest5.jpg",},
    {  name: "Cashmere Tank + Bag",  price: 120.00,  discount: 98.00 , pic: "./img/latest6.jpg",},
    {  name: "Cashmere Tank + Bag",  price: 120.00,  discount: 98.00 , pic: "./img/latest7.jpg",},
    {  name: "Cashmere Tank + Bag",  price: 120.00,  discount: 98.00 , pic: "./img/latest8.jpg",},
    {  name: "Cashmere Tank + Bag",  price: 120.00,  discount: 98.00 , pic: "./img/latest5.jpg",},
    {  name: "Cashmere Tank + Bag",  price: 120.00,  discount: 98.00 , pic: "./img/latest6.jpg",},
    {  name: "Cashmere Tank + Bag",  price: 120.00,  discount: 98.00 , pic: "./img/latest7.jpg",},
    {  name: "Cashmere Tank + Bag",  price: 120.00,  discount: 98.00 , pic: "./img/latest8.jpg",},
    {  name: "Cashmere Tank + Bag",  price: 120.00,  discount: 98.00 , pic: "./img/latest5.jpg",},
    {  name: "Cashmere Tank + Bag",  price: 120.00,  discount: 98.00 , pic: "./img/latest6.jpg",},
    {  name: "Cashmere Tank + Bag",  price: 120.00,  discount: 98.00 , pic: "./img/latest7.jpg",},
    {  name: "Cashmere Tank + Bag",  price: 120.00,  discount: 98.00 , pic: "./img/latest8.jpg",},
  ]
  let y=0;
  let youMayLike = document.querySelector(".you_may_like_products .swiper-wrapper");
  youMayLike_Products.forEach(product => {
    youMayLike.innerHTML+=`
    <div class="swiper-slide">
    <img src="${product.pic}" />
    <div class="slide_border">`+
    "<button onclick='addtocart_mayLike("+(y++)+")'><i class='fa-solid fa-basket-shopping add_basket'></i></button>"+`
    <i class="fa-regular fa-heart"></i>
    <i class="fa-solid fa-magnifying-glass"></i>
    </div>
    <div class="slide_text">
    <p>${product.name}</p>
    <span>$${product.discount}.00 <span>$${product.price}.00</span> </span>
    </div>
    </div>`
    
  });
  
  let appendNumber1 = 8;
  let prependNumber2 = 1;
  const swiper1 = new Swiper('.swiper', {
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
          
          
          // // // SCROLL // // // 
          
          
          let scroll_btn = document.querySelector(".scroll_btn");
          
          scroll_btn.addEventListener("click", () => {
            $("html, body").animate({ scrollTop: "0" });
          });

          window.addEventListener("scroll", () => {
  if (
    document.body.scrollTop > 250 ||
    document.documentElement.scrollTop > 250
    ) {
      scroll_btn.style.display = "flex";
    } else {
      scroll_btn.style.display = "none";
    }
  });
  
  
  // // // BASKET // // //
  
  
  let basketContainer = document.querySelector(".basket-container");
  let basketIcon = document.querySelector(".fa-cart-shopping");
  let cartPage = document.querySelector(".cartPage");

  basketIcon.addEventListener("click",()=>{
  basketContainer.classList.toggle("active");
  });

  cartPage.addEventListener("click",()=>{
    basketContainer.classList.toggle("active");
  });
  
  document.querySelector(".basketXicon").onclick = () => {
  basketContainer.classList.remove("active");
  };
  
  let menu = document.querySelector(".menuBar");
  document.querySelector(".menuBar_responsive").onclick = () => {
  menu.classList.toggle("active");
  };
  
  let cart = [];

  function addtocart(a){
    cart.push({...productsTrending[a]});
    displayCart();
  }
  
  function addtocart_mayLike(a){
    cart.push({...youMayLike_Products[a]});
    displayCart();
  }

  function delElement(a){
    cart.splice(a,1);
    displayCart();
  }

  function displayCart(a) {
    let j=0, total=0;
  document.getElementById("count").innerHTML=cart.length;
  if(cart.length==0){
    document.getElementById('basketItem').innerHTML="Your cart is empty";
    document.getElementById("count").style.display="none";
    document.getElementById("money").innerHTML="$ "+0+".00";
  }
  else{
    document.getElementById('basketItem').innerHTML = cart.map((items)=>{
      let {pic,name,discount} = items;
      total=total+discount;
      document.getElementById("money").innerHTML="$ "+total+".00";
      return(
        `<div class='cart-item'>
        <div class='row-img'>
        <img class='rowimg' src=${pic}>
        </div>
        <p style='font-size:12px;'>${name}</p>
        <h2 style='font-size:15px;'>$${discount}.00</h2>` + 
        "<i class= 'fa-solid fa-trash' onclick='delElement("+(j++)+")'></i></div>"
        );
      }).join('');
      document.getElementById("count").style.display="block";
    }
  }



  