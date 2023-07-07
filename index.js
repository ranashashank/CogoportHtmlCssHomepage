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

let togleMenu = 0;
function toggleMenu() {
  let navbar_mobile = document.getElementById("navbar-mobile");
  togleMenu = !togleMenu;
  if (togleMenu) {
    navbar_mobile.style.display = "block";
  } else {
    navbar_mobile.style.display = "none";
  }
  console.log(window.innerWidth);
}

function tocheckTogglemenu() {
  if (togleMenu && window.innerWidth > 800) {
    let navbar_mobile = document.getElementById("navbar-mobile");
    navbar_mobile.style.display = "none";
    togleMenu = false;
  }
}
window.addEventListener("resize", tocheckTogglemenu);
