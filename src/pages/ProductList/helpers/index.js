const handleAccordions = (e) => {
  let target;

  if (!e.target.classList.contains("accordion-header")) {
    target = e.target.parentElement.nextElementSibling;
    e.target.parentElement.classList.toggle("active");
  } else {
    target = e.target.nextElementSibling;
    e.target.classList.toggle("active");
  }

  target.classList.toggle("active");
};

const handleSidebarMobile = (type) => {
  const breadcrumbs = document.querySelector(".breadcrumbs");
  const sidebar = document.querySelector(".sidebar");
  const collection = document.querySelector(".collection");
  const footer = document.querySelector("footer");

  if (type === "filter") {
    sidebar.classList.add("active");
    breadcrumbs.classList.remove("active");
    collection.classList.remove("active");
    footer.classList.remove("active");
  } else {
    sidebar.classList.remove("active");
    breadcrumbs.classList.add("active");
    collection.classList.add("active");
    footer.classList.add("active");
  }
};

export { handleAccordions, handleSidebarMobile };
