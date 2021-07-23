import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import * as Scroll from "react-scroll";
import queryString from "query-string";

import "react-toastify/dist/ReactToastify.css";
import "./product-list.scss";

import StaticData from "../../json/product-list.json";
import { handleAccordions, handleSidebarMobile } from "./helpers";

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
import SkeletonLoading from "../../components/Skeleton/SkeletonLoading";
import Empty from "../../components/Empty/Empty";

import DefaultImg from "../../assets/img/default-product.png";
import Ring from "../../assets/img/ring.png";
import Filter from "../../assets/icon/filter.svg";

export default function ProductList() {
  const apiUrl = process.env.REACT_APP_API;
  const Element = Scroll.Element;

  const parsed = queryString.parse(useLocation().search, {
    parseNumbers: true,
  });
  const queryCurrentPage = parsed.page;
  const queryDataLimit = parsed.perPage;

  const currentPage = queryCurrentPage > 0 ? queryCurrentPage : 1;
  const dataLimit =
    queryDataLimit > 0 && queryDataLimit <= 12 ? queryDataLimit : 12;
  const pageNeighbours = 1;
  const offset = (currentPage - 1) * dataLimit;

  const [pokemon, setPokemon] = useState([]);
  const [totalData, setTotalData] = useState(null);
  const [totalPage, setTotalPage] = useState(null);
  const [loading, setLoading] = useState(true);
  const [empty, setEmpty] = useState(false);
  const [error, setError] = useState(false);

  const fetchPokemonDetail = async (pokemon) => {
    for (const item of pokemon) {
      const url = item.url;
      let result = true;
      await fetch(url)
        .then((res) => {
          if (res.ok) return res.json();
          throw new Error("Something went wrong!");
        })
        .then((res) => {
          if (res && typeof res === "object") {
            setPokemon((oldPokemon) => [...oldPokemon, res]);
          } else {
            result = false;
            setEmpty(true);
          }
        })
        .catch((err) => setError(err.message));
      if (!result) {
        break;
      }
    }
  };

  const fetchPokemon = async () => {
    setLoading(true);
    await fetch(`${apiUrl}/pokemon?offset=${offset}&limit=${dataLimit}`)
      .then((res) => {
        if (res.ok) return res.json();
        throw new Error("Something went wrong!");
      })
      .then((res) => {
        const result = res.results;
        if (Array.isArray(result) && result.length > 0) {
          setPokemon([]);
          setError(false);
          setTotalData(res.count);
          setTotalPage(Math.ceil(res.count / dataLimit));
          fetchPokemonDetail(result);
        } else {
          setEmpty(true);
        }
      })
      .catch((err) => setError(err.message));
    setLoading(false);
  };

  useEffect(() => {
    document.title = "Artsy Collective | Product List";
    fetchPokemon();
  }, [offset]);

  useEffect(() => {
    const notify = () => toast.error(error);
    error && notify();
  }, [error]);

  return (
    <>
      <Breadcrumb
        className="product-list-breadcrumbs active"
        list={StaticData.listBreadcrumbs}
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
                list={StaticData.listCheckbox.category}
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
                list={StaticData.listCheckbox.featured}
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
              <InputRange value={`${totalData || 0} Produk`} />
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
                list={StaticData.listColor}
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
                list={StaticData.listCheckbox.material}
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
            <Element className="filter-header">
              <h2 className="font-bold">View All Collections</h2>
              <div className="filter-sort">
                <p>
                  {!empty && `${totalData || 0} Produk | `}
                  <span className="font-bold">Urut Berdasarkan</span>
                </p>
                <Select
                  className="select-best"
                  value="Best Selling"
                  list={StaticData.optionValue.selling}
                />
              </div>
            </Element>
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
                  list={StaticData.optionValue.sort}
                />
              </div>
              {!empty && <p className="amount">{totalData || 0} Produk</p>}
            </div>
          </div>
          {!empty && !error ? (
            loading ? (
              <SkeletonLoading amount={dataLimit} paginate={pageNeighbours} />
            ) : (
              <>
                <div className="product-collection">
                  {pokemon.map((item, index) => {
                    return (
                      <Card
                        href={`/product-detail/${item.id}`}
                        title={item.name}
                        img={item.sprites.front_default || DefaultImg}
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
                  currentPage={currentPage}
                  totalPage={totalPage}
                  dataLimit={dataLimit}
                  pageNeighbours={pageNeighbours}
                />
              </>
            )
          ) : (
            <>
              <ToastContainer position="bottom-right" />
              <Empty />
            </>
          )}
        </section>
      </div>
    </>
  );
}
