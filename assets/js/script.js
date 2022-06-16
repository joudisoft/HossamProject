let navBar = document.querySelector("nav");
// -- Start to up moving section -- //
let toUp = document.getElementById("toUp");
window.onscroll = function () {
  this.scrollY >= 250
    ? navBar.classList.add("nav-bar-light")
    : navBar.classList.remove("nav-bar-light");
  this.scrollY >= 850
    ? toUp.classList.add("toUp-Show")
    : toUp.classList.remove("toUp-Show");
};
toUp.onclick = function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};
// -- End to up moving section -- //


