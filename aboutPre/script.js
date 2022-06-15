let tab = document.querySelectorAll(".company__item_tabs_tab")

let test = document.querySelectorAll(".company__item")

tab.forEach(function(e){
  e.addEventListener("click", function(){
    let tabs = e.getAttribute("data-tab")
    let currentTab = document.querySelector(tabs)
    tab.forEach(function(e){
        e.classList.remove('company__item_tabs_tab_active')
    })
    test.forEach(function(e){
        e.classList.remove("company__item_active")
    })
    e.classList.add("company__item_tabs_tab_active")
    currentTab.classList.add("company__item_active")
  })
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


let lin = document.querySelectorAll('.header__menu_item a').forEach(function(e){
  e.preventDefault()
})