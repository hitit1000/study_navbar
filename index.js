const burger = document.querySelector(".navbar__burger");
const menu = document.querySelector(".navbar__menu");
const icon = document.querySelector(".navbar__icon");

const handleClick = () => {
  menu.classList.toggle("active");
  icon.classList.toggle("active");
};

burger.addEventListener("click", handleClick);
