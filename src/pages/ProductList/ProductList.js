import React, { useEffect } from "react";

import "./product-list.scss";

import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import ButtonClose from "../../components/Button/ButtonClose";
import Accordion from "../../components/Accordion/Accordion";
import InputCheckbox from "../../components/Form/InputCheckbox";
import InputRange from "../../components/Form/InputRange";
import InputColor from "../../components/Form/InputColor";
import Button from "../../components/Button/Button";
import Select from "../../components/Form/Select";
import Card from "../../components/Product/CardProductMd";
import Pagination from "../../components/Pagination/Pagination";

import Ring from "../../assets/img/ring.png";
import Filter from "../../assets/icon/filter.svg";
import Product1 from "../../assets/img/product-1.jpg";
import Product2 from "../../assets/img/product-2.jpg";
import Product3 from "../../assets/img/product-3.jpg";
import Product4 from "../../assets/img/product-4.jpg";
import Product5 from "../../assets/img/product-5.jpg";
import Product6 from "../../assets/img/product-6.jpg";

export default function ProductList() {
  const listBreadcrumb = [
    {
      href: "#",
      title: "Home",
      active: false,
    },
    {
      href: "#",
      title: "Collections",
      active: false,
    },
    {
      href: "#",
      title: "View All",
      active: true,
    },
  ];

  const listCheckboxCategory = [
    {
      name: "view-all",
      label: "View All",
      class: "",
    },
    {
      name: "rings",
      label: "Rings",
      class: "transform-check",
    },
    {
      name: "bracelets",
      label: "Bracelets",
      class: "",
    },
    {
      name: "necklaces",
      label: "Necklaces",
      class: "",
    },
    {
      name: "earrings",
      label: "Earrings",
      class: "transform-check",
    },
  ];

  const listCheckboxFeatured = [
    {
      name: "coco-crush",
      label: "Coco Crush",
      class: "",
    },
    {
      name: "camélia",
      label: "Camélia",
      class: "transform-check",
    },
    {
      name: "comète",
      label: "Comète",
      class: "",
    },
    {
      name: "ruban",
      label: "Ruban",
      class: "",
    },
    {
      name: "baroque",
      label: "Baroque",
      class: "transform-check",
    },
    {
      name: "soleil-de-artsy",
      label: "Soleil de Artsy",
      class: "",
    },
  ];

  const listCheckboxMaterial = [
    {
      name: "anti-rust",
      label: "Anti-Rust",
      class: "",
    },
    {
      name: "mixed",
      label: "Mixed",
      class: "transform-check",
    },
    {
      name: "gold",
      label: "Gold",
      class: "",
    },
    {
      name: "silver",
      label: "Silver",
      class: "",
    },
    {
      name: "metallic",
      label: "Metallic",
      class: "transform-check",
    },
    {
      name: "diamond",
      label: "Diamond",
      class: "transform-check",
    },
  ];

  const listColor = [
    {
      name: "one",
      id: "one",
    },
    {
      name: "two",
      id: "two",
    },
    {
      name: "three",
      id: "three",
    },
    {
      name: "four",
      id: "four",
    },
    {
      name: "five",
      id: "five",
    },
    {
      name: "six",
      id: "six",
    },
    {
      name: "seven",
      id: "seven",
    },
    {
      name: "eight",
      id: "eight",
    },
    {
      name: "nine",
      id: "nine",
    },
    {
      name: "ten",
      id: "ten",
    },
    {
      name: "eleven",
      id: "eleven",
    },
    {
      name: "twelve",
      id: "twelve",
    },
    {
      name: "thirteen",
      id: "thirteen",
    },
  ];

  const optionValueSelling = ["Best Selling", "Price"];
  const optionValueSort = ["Sort", ...optionValueSelling];

  const listProduct = [
    {
      href: "#",
      title: "Circular Link Drop Earrings - Gold",
      img: Product1,
      isDiscount: true,
      discount: "30% Off",
      isBest: true,
      label: "Best Seller",
      price: 104300,
      piece: 135590,
    },
    {
      href: "#",
      title: "Multi-Ring Necklace",
      img: Product2,
      isDiscount: false,
      discount: "",
      isBest: false,
      label: "",
      price: 2699000,
      piece: 0,
    },
    {
      href: "#",
      title: "Black Accent Collar Necklace",
      img: Product3,
      isDiscount: true,
      discount: "30% Off",
      isBest: true,
      label: "New Arrival",
      price: 1799000,
      piece: 2338700,
    },
    {
      href: "#",
      title: "Silver-Tone Hoop Clip Earrings",
      img: Product4,
      isDiscount: false,
      discount: "",
      isBest: false,
      label: "",
      price: 4098300,
      piece: 0,
    },
    {
      href: "#",
      title: "Pearl And Crystal Gold-Tone Clip",
      img: Product5,
      isDiscount: false,
      discount: "",
      isBest: true,
      label: "Best Seller",
      price: 4449000,
      piece: 0,
    },
    {
      href: "#",
      title: "Gold-Tone Tubular Hoop Earrings",
      img: Product6,
      isDiscount: true,
      discount: "30% Off",
      isBest: true,
      label: "New Arrival",
      price: 1463000,
      piece: 2090000,
    },
  ];

  const listPagination = [
    {
      href: "#",
      number: 1,
      isActive: true,
    },
    {
      href: "#",
      number: 2,
      isActive: false,
    },
    {
      href: "#",
      number: 3,
      isActive: false,
    },
  ];

  useEffect(() => {
    document.title = "Artsy Collective | Product List";

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
  }, []);

  return (
    <>
      <Breadcrumb
        className="product-list-breadcrumbs active"
        list={listBreadcrumb}
      />
      <div className="wrapper list">
        <section className="sidebar">
          <div className="wrapper relative-wrapper sidebar-header">
            <div className="relative-header">
              <p className="font-semi-bold">Filter</p>
              <ButtonClose className="btn-close hover-opacity-primary" />
            </div>
          </div>
          <hr />
          <div className="wrapper sidebar-body">
            <div className="filter-sidebar">
              <p className="font-semi-bold">Filter</p>
              <button
                type="button"
                className="font-medium hover-color-secondary"
              >
                Reset
              </button>
            </div>
            <Accordion
              classWrapper="accordion-sidebar category-accordion"
              classHeader="accordion-header-product-list
                hover-opacity-primary
                active"
              title="Category"
              classBody="accordion-body-product-list active"
              classParagraph="font-bold"
            >
              <InputCheckbox
                list={listCheckboxCategory}
                classCheckbox="accordion-check"
                classLabel="t-shadow m-right"
              />
            </Accordion>
            <Accordion
              classWrapper="accordion-sidebar"
              classHeader="accordion-header-product-list
                hover-opacity-primary
                active"
              title="Featured"
              classBody="accordion-body-product-list active"
              classParagraph="font-bold"
            >
              <InputCheckbox
                list={listCheckboxFeatured}
                classCheckbox="accordion-check"
                classLabel="t-shadow m-right"
              />
            </Accordion>
            <Accordion
              classWrapper="accordion-sidebar"
              classHeader="accordion-header-product-list
                hover-opacity-primary
                active"
              title="Price Range (Rp)"
              classBody="price-accordion accordion-body-product-list active"
              classParagraph="font-bold"
            >
              <InputRange value="234097 Produk" />
            </Accordion>
            <Accordion
              classWrapper="accordion-sidebar"
              classHeader="accordion-header-product-list
                hover-opacity-primary
                active"
              title="Color"
              classBody="color-accordion accordion-body-product-list active"
              classParagraph="font-bold"
            >
              <InputColor
                list={listColor}
                classColor="color-item"
                type="checkbox"
              />
            </Accordion>
            <Accordion
              classWrapper="accordion-sidebar"
              classHeader="accordion-header-product-list
                hover-opacity-primary
                active"
              title="Material"
              classBody="accordion-body-product-list active"
              classParagraph="font-bold"
            >
              <InputCheckbox
                list={listCheckboxMaterial}
                classCheckbox="accordion-check"
                classLabel="t-shadow m-right"
              />
            </Accordion>
          </div>
          <hr />
          <div className="wrapper sidebar-footer">
            <Button
              type="button"
              className="btn-reset hover-opacity-primary"
              isOutline
            >
              Reset
            </Button>
            <Button
              type="submit"
              className="btn-apply hover-opacity-primary"
              isPrimary
            >
              Apply
            </Button>
          </div>
        </section>
        <section className="collection active">
          <div className="banner-collection">
            <h1 className="font-extra-bold">All Artsy Collection</h1>
            <img src={Ring} className="img-block" alt="Ring" />
          </div>
          <div className="filter-collection">
            <div className="filter-header">
              <h2 className="font-bold">View All Collections</h2>
              <div className="filter-sort">
                <p>
                  234097 Produk |{" "}
                  <span className="font-bold">Urut Berdasarkan</span>
                </p>
                <Select
                  className="select-best"
                  value="Best Selling"
                  list={optionValueSelling}
                />
              </div>
            </div>
            <div className="filter-menu">
              <div className="list-filter-menu">
                <Button
                  type="button"
                  className="btn-filter hover-opacity-primary"
                  isOutline
                >
                  <span>Filter</span>
                  <img src={Filter} className="img-block" alt="Filter" />
                </Button>
                <Select
                  className="select-sort"
                  value="Sort"
                  list={optionValueSort}
                />
              </div>
              <p className="amount">234097 Produk</p>
            </div>
          </div>
          <div className="product-collection">
            {listProduct.map((item, index) => {
              return (
                <Card
                  href={item.href}
                  title={item.title}
                  img={item.img}
                  isDiscount={item.isDiscount}
                  discount={item.discount}
                  isBest={item.isBest}
                  label={item.label}
                  price={item.price}
                  piece={item.piece}
                  key={index}
                />
              );
            })}
          </div>
          <Pagination list={listPagination} />
        </section>
      </div>
    </>
  );
}
