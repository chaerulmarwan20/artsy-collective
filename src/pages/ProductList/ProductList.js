import React, { useState, useEffect } from "react";
// import { useLocation } from "react-router-dom";

import "./product-list.scss";

import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import ButtonClose from "../../components/Button/ButtonClose";
import Accordion from "../../components/Accordion/Accordion";
import InputCheckbox from "../../components/Form/InputCheckbox";
import InputRange from "../../components/Form/InputRange";
import InputColor from "../../components/Form/InputColor";
import Button from "../../components/Button/Button";
import Select from "../../components/Form/Select";
import Card from "../../components/Product/CardProductList";
import Pagination from "../../components/Pagination/Pagination";

import Ring from "../../assets/img/ring.png";
import Filter from "../../assets/icon/filter.svg";

export default function ProductList() {
  const apiUrl = process.env.REACT_APP_API;
  const apiImg = process.env.REACT_APP_API_IMG;

  // const useQuery = () => new URLSearchParams(useLocation().search);

  const [offset, setOffset] = useState(0);
  const [limit, setLimit] = useState(12);
  const [pokemon, setPokemon] = useState([]);
  const [page, setPage] = useState({
    totalData: null,
    currentPage: null,
    totalPage: null,
  });

  // const query = useQuery();

  const listBreadcrumb = [
    {
      href: "/",
      title: "Home",
      active: false,
    },
    {
      href: "/product-list",
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

  const previous = () => {
    setOffset(offset <= 0 ? 0 : offset - limit);
  };

  const next = () => {
    setOffset(
      page.currentPage === page.totalPage
        ? page.totalData - limit
        : offset + limit
    );
  };

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

  useEffect(() => {
    document.title = "Artsy Collective | Product List";

    fetch(`${apiUrl}/pokemn?offset=${offset}&limit=${limit}`)
      .then((res) => res.json())
      .then((res) => {
        setPage({
          totalData: res.count,
          currentPage: Math.ceil((offset - 1) / limit) + 1,
          totalPage: Math.ceil(res.count / limit),
        });
        setPokemon([]);
        res.results.forEach((item) => {
          const url = item.url;
          fetch(url)
            .then((res) => res.json())
            .then((res) => setPokemon((oldPokemon) => [...oldPokemon, res]))
            .catch((err) => console.log(err.message));
        });
      })
      .catch((err) => console.log(err.message));
  }, [apiUrl, offset, limit]);

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
              <ButtonClose
                className="btn-close hover-opacity-primary"
                onClick={() => handleSidebarMobile("close")}
              />
            </div>
          </div>
          <hr />
          <div className="wrapper sidebar-body">
            <div className="filter-sidebar">
              <p className="font-semi-bold">Filter</p>
              <Button
                type="button"
                className="font-medium hover-color-secondary"
                isSmall
              >
                Reset
              </Button>
            </div>
            <Accordion
              classWrapper="accordion-sidebar category-accordion"
              classHeader="accordion-header-product-list
                hover-opacity-primary
                active"
              title="Category"
              classBody="accordion-body-product-list active"
              classParagraph="font-bold"
              onClick={handleAccordions}
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
              onClick={handleAccordions}
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
              onClick={handleAccordions}
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
              onClick={handleAccordions}
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
              onClick={handleAccordions}
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
                  onClick={() => handleSidebarMobile("filter")}
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
            {pokemon.map((item, index) => {
              return (
                <Card
                  href={`/product-detail/${item.id}`}
                  title={item.name}
                  img={`${apiImg}/${item.id}.png`}
                  isDiscount={item.base_experience > 100 && true}
                  discount={"30% Off"}
                  isBest={item.base_experience > 100 && true}
                  label={"Best Pokemon"}
                  price={item.weight * 1000}
                  piece={item.height * 1000}
                  key={index}
                />
              );
            })}
          </div>
          <Pagination
            list={listPagination}
            next={next}
            previous={previous}
            offset={offset}
            limit={limit}
          />
        </section>
      </div>
    </>
  );
}
