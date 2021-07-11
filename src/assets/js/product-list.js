const accordionHeading = document.querySelectorAll(".accordion-header");
const btnFilter = document.querySelector(".list-filter-menu button");
const breadcrumbs = document.querySelector(".breadcrumbs");
const sidebar = document.querySelector(".sidebar");
const collection = document.querySelector(".collection");
const btnClose = document.querySelector(".sidebar-header button");
const footer = document.querySelector("footer");

accordionHeading.forEach((item) => {
  item.addEventListener("click", function () {
    const sibling = this.nextElementSibling;
    this.classList.toggle("active");
    sibling.classList.toggle("active");
  });
});

btnFilter.addEventListener("click", () => {
  sidebar.classList.add("active");
  breadcrumbs.classList.remove("active");
  collection.classList.remove("active");
  footer.classList.remove("active");
});

btnClose.addEventListener("click", () => {
  sidebar.classList.remove("active");
  breadcrumbs.classList.add("active");
  collection.classList.add("active");
  footer.classList.add("active");
});
