const handleCart = (type) => {
  const cart = document.querySelector(".cart");

  if (type === "close") {
    cart.style.display = "none";
    document.body.classList.remove("overflow-cart");
  } else {
    cart.style.display = "flex";
    document.body.classList.add("overflow-cart");
  }
};

const handleAccordions = (e) => {
  let target, children;

  if (!e.target.classList.contains("accordion-header")) {
    target = e.target.parentElement.nextElementSibling;
    children = target.parentElement.children[0];
    e.target.parentElement.classList.toggle("active");
  } else {
    target = e.target.nextElementSibling;
    children = e.target.children[0];
    e.target.classList.toggle("active");
  }

  target.classList.toggle("active");
  children.classList.toggle("active");
};

const handleWindow = () => {
  const cart = document.querySelector(".cart");

  window.addEventListener("click", (e) => {
    if (e.target === cart) {
      document.body.classList.remove("overflow-cart");
      cart.style.display = "none";
    }
  });
};

export { handleCart, handleAccordions, handleWindow };
