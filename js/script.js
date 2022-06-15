let swiper = new Swiper(".swiper-s1", {
  slidesPerView: 1,
  pagination: {
    el: '.swiper-pagination',
  },
  navigation: {
    nextEl: '.promo__right',
    prevEl: '.promo__left',
  },
})
let swiper2 = new Swiper(".swiper-s2", {
  slidesPerView: 3,
  navigation: {
    nextEl: '.news__arrows_right',
    prevEl: '.news__arrows_left',
  },
  breakpoints: {
    1131: {
      slidesPerView: 3,
    },
    769: {
      slidesPerView: 2,
    },
    100: {
      slidesPerView: 1,
    }
  }
})

let swiper3 = new Swiper(".swiper-s3", {
  slidesPerView: 3,
  navigation: {
    nextEl: '.links__arrows_right',
    prevEl: '.links__arrows_left',
  },
  breakpoints: {
    1131: {
      slidesPerView: 3,
    },
    769: {
      slidesPerView: 2,
    },
    100: {
      slidesPerView: 1,
    }
  }
})


let burger = document.querySelector(".header__menu_burger")

let burgerMenu = document.querySelector(".header__burger_list")

burger.addEventListener("click", function(){
  burger.classList.toggle("header__menu_burger_active")
  burgerMenu.classList.toggle("header__burger_list_active")
})


window.addEventListener("scroll", function(){
  if(scrollY>=1) {
    document.querySelector(".header__menu").classList.add("header__menu_active")
  } else {
    document.querySelector(".header__menu").classList.remove("header__menu_active")
  }
})

let logo = document.querySelector(".header__menu_logo")

logo.addEventListener("click", function(){
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  })
})

let arrow = document.querySelector(".arrow")

window.addEventListener("scroll", function(){
  if(scrollY>=100) {
    arrow.classList.add("arrow__visible")
  } else {
    arrow.classList.remove("arrow__visible")
  }
})


arrow.addEventListener("click", function(){
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  })
})

