const handleHeader = () => {
  const heading = document.querySelector("header");
  const collesctionsMenu = document.querySelector(".collections-menu");
  heading.classList.remove("active");
  collesctionsMenu.classList.remove("active");
};

const handleLinks = (e) => {
  const collectionsMenu = document.querySelector(".collections-menu");
  if (e.target.classList.contains("collections")) {
    collectionsMenu.classList.add("active");
  } else {
    collectionsMenu.classList.remove("active");
  }
};

const handleMenuMobile = (type) => {
  const hamburgerMenu = document.querySelector(".hamburger-menu");
  const navbarExpand = document.querySelector(".navbar-expand");
  const icon = document.querySelector(".icon");
  const close = document.querySelector(".close");

  if (type === "hamburger") {
    hamburgerMenu.classList.add("scale");
    navbarExpand.classList.add("slide");
    icon.classList.add("scale");
    close.classList.add("scale");
    document.body.classList.add("overflow-navbar");
  } else {
    close.classList.remove("scale");
    hamburgerMenu.classList.remove("scale");
    navbarExpand.classList.remove("slide");
    icon.classList.remove("scale");
    document.body.classList.remove("overflow-navbar");
  }
};

export { handleHeader, handleLinks, handleMenuMobile };
