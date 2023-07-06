function changeBg() {
  let navbar = document.getElementsByClassName("navbar");
  let scrollValue = window.scrollY;
  console.log(navbar);
  if (scrollValue < 100) {
    navbar[0].classList.remove("navbar-active");
  } else {
    navbar[0].classList.add("navbar-active");
  }
}

window.addEventListener("scroll", changeBg);
