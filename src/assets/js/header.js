const header = document.querySelector("header");
const links = document.querySelectorAll(".navbar-menu a");
const collesctionsMenu = document.querySelector(".collections-menu");
const hamburgerMenu = document.querySelector(".hamburger-menu");
const navbarExpand = document.querySelector(".navbar-expand");
const icon = document.querySelector(".icon");
const close = document.querySelector(".close");

header.addEventListener("mouseleave", function () {
  this.classList.remove("active");
  collesctionsMenu.classList.remove("active");
});

links.forEach((link) => {
  link.addEventListener("mouseover", () => {
    if (link.classList.contains("collections")) {
      collesctionsMenu.classList.add("active");
    } else {
      collesctionsMenu.classList.remove("active");
    }
  });
});

hamburgerMenu.addEventListener("click", function () {
  this.classList.add("scale");
  navbarExpand.classList.add("slide");
  icon.classList.add("scale");
  close.classList.add("scale");
  document.body.classList.add("overflow-navbar");
});

close.addEventListener("click", function () {
  this.classList.remove("scale");
  hamburgerMenu.classList.remove("scale");
  navbarExpand.classList.remove("slide");
  icon.classList.remove("scale");
  document.body.classList.remove("overflow-navbar");
});
