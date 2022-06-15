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
