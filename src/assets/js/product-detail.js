const accordionHeading = document.querySelectorAll(".accordion-header");
const btnPlus = document.querySelector(".btn-plus");
const imgPlus = document.querySelector(".img-plus");
const btnMinus = document.querySelector(".btn-minus");
const imgMinus = document.querySelector(".img-minus");
const qtyValue = document.querySelector(".qty-value");
const radioColor = document.querySelectorAll(".radio-color-item label");
const colorValue = document.querySelector(".color-value");
const cart = document.querySelector(".cart");
const btnCart = document.querySelector(".btn-cart");
const closeCart = document.querySelector(".header-cart button");

let qty = 1;

accordionHeading.forEach((item) => {
  item.addEventListener("click", function () {
    const sibling = this.nextElementSibling;
    const children = this.children[0];
    this.classList.toggle("active");
    sibling.classList.toggle("active");
    children.classList.toggle("active");
  });
});

window.addEventListener("click", (e) => {
  if (e.target === btnPlus || e.target === imgPlus) {
    qty++;
    qtyValue.value = qty;
  } else if (e.target === btnMinus || e.target === imgMinus) {
    if (qty !== 1) {
      qty--;
      qtyValue.value = qty;
    }
  }
});

radioColor.forEach((item) => {
  item.addEventListener("click", function () {
    colorValue.textContent = this.dataset.color;
  });
});

btnCart.addEventListener("click", () => {
  cart.style.display = "flex";
  document.body.classList.add("overflow-modal");
});

closeCart.addEventListener("click", () => {
  cart.style.display = "none";
  document.body.classList.remove("overflow-modal");
});

window.addEventListener("click", (e) => {
  if (e.target === cart) {
    document.body.classList.remove("overflow-modal");
    cart.style.display = "none";
  }
});
