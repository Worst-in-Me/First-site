const burger = document.querySelector(".burger");
const header = document.querySelector(".header");

const onBurgerClick = () => { 
    header.classList.toggle("header_active");
    burger.classList.toggle("burger_active");
};

burger.addEventListener("click", onBurgerClick);