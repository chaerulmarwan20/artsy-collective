import React from "react";
import { Link } from "react-router-dom";

import Layout from "../components/base/Layout";

import Close from "../assets/icon/close.svg";
import ChevronDown from "../assets/icon/chevron-down.svg";
import Ring from "../assets/img/ring.png";
import Filter from "../assets/icon/filter.svg";
import Product1 from "../assets/img/product-1.jpg";
import Product2 from "../assets/img/product-2.jpg";
import Product3 from "../assets/img/product-3.jpg";
import Product4 from "../assets/img/product-4.jpg";
import Product5 from "../assets/img/product-5.jpg";
import Product6 from "../assets/img/product-6.jpg";
import ChevronLeft from "../assets/icon/chevron-left.svg";
import ChevronRight from "../assets/icon/chevron-right.svg";

export default function ProductList() {
  return (
    <Layout title="Product List">
      <nav className="wrapper breadcrumbs product-list-breadcrumbs active">
        <ul>
          <li>
            <Link
              to="#"
              title="Home"
              className="font-medium hover-color-primary"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="#"
              title="Collections"
              className="font-medium hover-color-primary"
            >
              Collections
            </Link>
          </li>
          <li>
            <Link
              to="#"
              title="View All"
              className="font-medium hover-color-primary active"
            >
              View All
            </Link>
          </li>
        </ul>
      </nav>
      <div className="wrapper list">
        <section className="sidebar">
          <div className="wrapper relative-wrapper sidebar-header">
            <div className="relative-header">
              <p className="font-semi-bold">Filter</p>
              <button type="button" className="btn-close hover-opacity-primary">
                <img src={Close} className="img-block" alt="Close" />
              </button>
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
            <div className="accordion-sidebar category-accordion">
              <div
                className="
                accordion-header accordion-header-product-list
                hover-opacity-primary
                active
              "
                role="button"
              >
                <p className="font-bold">Category</p>
                <img
                  src={ChevronDown}
                  alt="Chevron Down"
                  className="img-block"
                />
              </div>
              <div className="accordion-body accordion-body-product-list active">
                <div className="accordion-check">
                  <input
                    className="custom-check"
                    type="checkbox"
                    id="view-all"
                  />
                  <label
                    className="label-check t-shadow m-right"
                    htmlFor="view-all"
                  >
                    <span>View All</span>
                  </label>
                </div>
                <div className="accordion-check">
                  <input className="custom-check" type="checkbox" id="rings" />
                  <label
                    className="label-check t-shadow m-right transform-check"
                    htmlFor="rings"
                  >
                    <span>Rings</span>
                  </label>
                </div>
                <div className="accordion-check">
                  <input
                    className="custom-check"
                    type="checkbox"
                    id="bracelets"
                  />
                  <label
                    className="label-check t-shadow m-right"
                    htmlFor="bracelets"
                  >
                    <span>Bracelets</span>
                  </label>
                </div>
                <div className="accordion-check">
                  <input
                    className="custom-check"
                    type="checkbox"
                    id="necklaces"
                  />
                  <label
                    className="label-check t-shadow m-right"
                    htmlFor="necklaces"
                  >
                    <span>Necklaces</span>
                  </label>
                </div>
                <div className="accordion-check">
                  <input
                    className="custom-check"
                    type="checkbox"
                    id="earrings"
                  />
                  <label
                    className="label-check t-shadow m-right transform-check"
                    htmlFor="earrings"
                  >
                    <span>Earrings</span>
                  </label>
                </div>
              </div>
            </div>
            <div className="accordion-sidebar">
              <div
                className="
                accordion-header accordion-header-product-list
                hover-opacity-primary
                active
              "
                role="button"
              >
                <p className="font-bold">Featured</p>
                <img
                  src={ChevronDown}
                  alt="Chevron Down"
                  className="img-block"
                />
              </div>
              <div className="accordion-body accordion-body-product-list active">
                <div className="accordion-check">
                  <input
                    className="custom-check"
                    type="checkbox"
                    id="coco-crush"
                  />
                  <label
                    className="label-check t-shadow m-right"
                    htmlFor="coco-crush"
                  >
                    <span>Coco Crush</span>
                  </label>
                </div>
                <div className="accordion-check">
                  <input
                    className="custom-check"
                    type="checkbox"
                    id="camélia"
                  />
                  <label
                    className="label-check t-shadow m-right transform-check"
                    htmlFor="camélia"
                  >
                    <span>Camélia</span>
                  </label>
                </div>
                <div className="accordion-check">
                  <input className="custom-check" type="checkbox" id="comète" />
                  <label
                    className="label-check t-shadow m-right"
                    htmlFor="comète"
                  >
                    <span>Comète</span>
                  </label>
                </div>
                <div className="accordion-check">
                  <input className="custom-check" type="checkbox" id="ruban" />
                  <label
                    className="label-check t-shadow m-right"
                    htmlFor="ruban"
                  >
                    <span>Ruban</span>
                  </label>
                </div>
                <div className="accordion-check">
                  <input
                    className="custom-check"
                    type="checkbox"
                    id="baroque"
                  />
                  <label
                    className="label-check t-shadow m-right transform-check"
                    htmlFor="baroque"
                  >
                    <span>Baroque</span>
                  </label>
                </div>
                <div className="accordion-check">
                  <input
                    className="custom-check"
                    type="checkbox"
                    id="soleil-de-artsy"
                  />
                  <label
                    className="label-check t-shadow m-right"
                    htmlFor="soleil-de-artsy"
                  >
                    <span>Soleil de Artsy</span>
                  </label>
                </div>
              </div>
            </div>
            <div className="accordion-sidebar">
              <div
                className="
                accordion-header accordion-header-product-list
                hover-opacity-primary
                active
              "
                role="button"
              >
                <p className="font-bold">Price Range (Rp)</p>
                <img
                  src={ChevronDown}
                  alt="Chevron Down"
                  className="img-block"
                />
              </div>
              <div
                className="
                accordion-body accordion-body-product-list
                price-accordion
                active
              "
              >
                <div className="total-price">
                  <span
                    className="font-semi-bold"
                    id="slider-range-value1"
                  ></span>
                  <span
                    className="font-semi-bold"
                    id="slider-range-value2"
                  ></span>
                </div>
                <div className="range-price">
                  <div id="slider-range"></div>
                  <input type="hidden" name="min-value" />
                  <input type="hidden" name="max-value" />
                  <p>234097 Produk</p>
                </div>
              </div>
            </div>
            <div className="accordion-sidebar">
              <div
                className="
                accordion-header accordion-header-product-list
                hover-opacity-primary
                active
              "
                role="button"
              >
                <p className="font-bold">Color</p>
                <img
                  src={ChevronDown}
                  alt="Chevron Down"
                  className="img-block"
                />
              </div>
              <div
                className="
                accordion-body accordion-body-product-list
                color-accordion
                active
              "
              >
                <div className="color-item">
                  <input type="checkbox" className="custom-radio" id="one" />
                  <label
                    htmlFor="one"
                    className="radio-label hover-opacity-primary"
                  ></label>
                </div>
                <div className="color-item">
                  <input type="checkbox" className="custom-radio" id="two" />
                  <label
                    htmlFor="two"
                    className="radio-label hover-opacity-primary"
                  ></label>
                </div>
                <div className="color-item">
                  <input type="checkbox" className="custom-radio" id="three" />
                  <label
                    htmlFor="three"
                    className="radio-label hover-opacity-primary"
                  ></label>
                </div>
                <div className="color-item">
                  <input type="checkbox" className="custom-radio" id="four" />
                  <label
                    htmlFor="four"
                    className="radio-label hover-opacity-primary"
                  ></label>
                </div>
                <div className="color-item">
                  <input type="checkbox" className="custom-radio" id="five" />
                  <label
                    htmlFor="five"
                    className="radio-label hover-opacity-primary"
                  ></label>
                </div>
                <div className="color-item">
                  <input type="checkbox" className="custom-radio" id="six" />
                  <label
                    htmlFor="six"
                    className="radio-label hover-opacity-primary"
                  ></label>
                </div>
                <div className="color-item">
                  <input type="checkbox" className="custom-radio" id="seven" />
                  <label
                    htmlFor="seven"
                    className="radio-label hover-opacity-primary"
                  ></label>
                </div>
                <div className="color-item">
                  <input type="checkbox" className="custom-radio" id="eight" />
                  <label
                    htmlFor="eight"
                    className="radio-label hover-opacity-primary"
                  ></label>
                </div>
                <div className="color-item">
                  <input type="checkbox" className="custom-radio" id="nine" />
                  <label
                    htmlFor="nine"
                    className="radio-label hover-opacity-primary"
                  ></label>
                </div>
                <div className="color-item">
                  <input type="checkbox" className="custom-radio" id="ten" />
                  <label
                    htmlFor="ten"
                    className="radio-label hover-opacity-primary"
                  ></label>
                </div>
                <div className="color-item">
                  <input type="checkbox" className="custom-radio" id="eleven" />
                  <label
                    htmlFor="eleven"
                    className="radio-label hover-opacity-primary"
                  ></label>
                </div>
                <div className="color-item">
                  <input type="checkbox" className="custom-radio" id="twelve" />
                  <label
                    htmlFor="twelve"
                    className="radio-label hover-opacity-primary"
                  ></label>
                </div>
                <div className="color-item">
                  <input
                    type="checkbox"
                    className="custom-radio"
                    id="thirteen"
                  />
                  <label
                    htmlFor="thirteen"
                    className="radio-label hover-opacity-primary"
                  ></label>
                </div>
              </div>
            </div>
            <div className="accordion-sidebar">
              <div
                className="
                accordion-header accordion-header-product-list
                hover-opacity-primary
                active
              "
                role="button"
              >
                <p className="font-bold">Material</p>
                <img
                  src={ChevronDown}
                  alt="Chevron Down"
                  className="img-block"
                />
              </div>
              <div className="accordion-body accordion-body-product-list active">
                <div className="accordion-check">
                  <input
                    className="custom-check"
                    type="checkbox"
                    id="anti-rust"
                  />
                  <label
                    className="label-check t-shadow m-right"
                    htmlFor="anti-rust"
                  >
                    <span>Anti-Rust</span>
                  </label>
                </div>
                <div className="accordion-check">
                  <input className="custom-check" type="checkbox" id="mixed" />
                  <label
                    className="label-check t-shadow m-right transform-check"
                    htmlFor="mixed"
                  >
                    <span>Mixed</span>
                  </label>
                </div>
                <div className="accordion-check">
                  <input className="custom-check" type="checkbox" id="gold" />
                  <label
                    className="label-check t-shadow m-right"
                    htmlFor="gold"
                  >
                    <span>Gold</span>
                  </label>
                </div>
                <div className="accordion-check">
                  <input className="custom-check" type="checkbox" id="silver" />
                  <label
                    className="label-check t-shadow m-right"
                    htmlFor="silver"
                  >
                    <span>Silver</span>
                  </label>
                </div>
                <div className="accordion-check">
                  <input
                    className="custom-check"
                    type="checkbox"
                    id="metallic"
                  />
                  <label
                    className="label-check t-shadow m-right transform-check"
                    htmlFor="metallic"
                  >
                    <span>Metallic</span>
                  </label>
                </div>
                <div className="accordion-check">
                  <input
                    className="custom-check"
                    type="checkbox"
                    id="diamond"
                  />
                  <label
                    className="label-check t-shadow m-right"
                    htmlFor="diamond"
                  >
                    <span>Diamond</span>
                  </label>
                </div>
              </div>
            </div>
          </div>
          <hr />
          <div className="wrapper sidebar-footer">
            <button
              type="button"
              className="btn btn-outline btn-reset hover-opacity-primary"
            >
              Reset
            </button>
            <button
              type="button"
              className="btn btn-primary btn-apply hover-opacity-primary"
            >
              Apply
            </button>
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
                <select
                  className="custom-select select-best hover-opacity-primary"
                  defaultValue={"Best Selling"}
                >
                  <option value="Best Selling">Best Selling</option>
                </select>
              </div>
            </div>
            <div className="filter-menu">
              <div className="list-filter-menu">
                <button
                  type="button"
                  className="btn btn-outline btn-filter hover-opacity-primary"
                >
                  <span>Filter</span>
                  <img src={Filter} className="img-block" alt="Filter" />
                </button>
                <select
                  className="custom-select select-sort hover-opacity-primary"
                  defaultValue={"Sort"}
                >
                  <option value="Sort">Sort</option>
                </select>
              </div>
              <p className="amount">234097 Produk</p>
            </div>
          </div>
          <div className="product-collection">
            <div className="item-product-collection">
              <Link
                to="#"
                className="item-product-img hover-opacity-secondary"
                title="Circular Link Drop Earrings - Gold"
              >
                <img
                  className="img-block"
                  src={Product1}
                  alt="Circular Link Drop Earrings - Gold"
                />
                <div className="ribbon-product font-semi-bold">30% Off</div>
                <div className="label-product font-semi-bold">Best Seller</div>
              </Link>
              <div className="item-product-detail">
                <Link
                  to="#"
                  className="font-medium hover-color-primary"
                  title="Circular Link Drop Earrings - Gold"
                >
                  Circular Link Drop Earrings - Gold
                </Link>
                <div className="item-price">
                  <p className="font-bold">Rp. 104.300</p>
                  <span className="font-medium">Rp. 135.590</span>
                </div>
              </div>
            </div>
            <div className="item-product-collection">
              <Link
                to="#"
                className="item-product-img hover-opacity-secondary"
                title="Multi-Ring Necklace"
              >
                <img
                  className="img-block"
                  src={Product2}
                  alt="Multi-Ring Necklace"
                />
              </Link>
              <div className="item-product-detail">
                <Link
                  to="#"
                  className="font-medium hover-color-primary"
                  title="Multi-Ring Necklace"
                >
                  Multi-Ring Necklace
                </Link>
                <div className="item-price">
                  <p className="font-bold">Rp. 2.699.000</p>
                </div>
              </div>
            </div>
            <div className="item-product-collection">
              <Link
                to="#"
                className="item-product-img hover-opacity-secondary"
                title="Black Accent Collar Necklace"
              >
                <img
                  className="img-block"
                  src={Product3}
                  alt="Black Accent Collar Necklace"
                />
                <div className="ribbon-product font-semi-bold">30% Off</div>
                <div className="label-product font-semi-bold">New Arrival</div>
              </Link>
              <div className="item-product-detail">
                <Link
                  to="#"
                  className="font-medium hover-color-primary"
                  title="Black Accent Collar Necklace"
                >
                  Black Accent Collar Necklace
                </Link>
                <div className="item-price">
                  <p className="font-bold">Rp. 1.799.000</p>
                  <span className="font-medium">Rp. 2.338.700</span>
                </div>
              </div>
            </div>
            <div className="item-product-collection">
              <Link
                to="#"
                className="item-product-img hover-opacity-secondary"
                title="Silver-Tone Hoop Clip Earrings"
              >
                <img
                  className="img-block"
                  src={Product4}
                  alt="Silver-Tone Hoop Clip Earrings"
                />
              </Link>
              <div className="item-product-detail">
                <Link
                  className="font-medium hover-color-primary"
                  to="#"
                  title="Silver-Tone Hoop Clip Earrings"
                >
                  Silver-Tone Hoop Clip Earrings
                </Link>
                <div className="item-price">
                  <p className="font-bold">Rp. 4.098.300</p>
                </div>
              </div>
            </div>
            <div className="item-product-collection">
              <Link
                to="#"
                className="item-product-img hover-opacity-secondary"
                title="Pearl And Crystal Gold-Tone Clip"
              >
                <img
                  className="img-block"
                  src={Product5}
                  alt="Pearl And Crystal Gold-Tone Clip"
                />
                <div className="label-product font-semi-bold">Best Seller</div>
              </Link>
              <div className="item-product-detail">
                <Link
                  className="font-medium hover-color-primary"
                  to="#"
                  title="Pearl And Crystal Gold-Tone Clip"
                >
                  Pearl And Crystal Gold-Tone Clip
                </Link>
                <div className="item-price">
                  <p className="font-bold">Rp. 4.449.000</p>
                </div>
              </div>
            </div>
            <div className="item-product-collection">
              <Link
                to="#"
                className="item-product-img hover-opacity-secondary"
                title="Gold-Tone Tubular Hoop Earrings"
              >
                <img
                  className="img-block"
                  src={Product6}
                  alt="Gold-Tone Tubular Hoop Earrings"
                />
                <div className="ribbon-product font-semi-bold">30% Off</div>
                <div className="label-product font-semi-bold">New Arrival</div>
              </Link>
              <div className="item-product-detail">
                <Link
                  to="#"
                  className="font-medium hover-color-primary"
                  title="Gold-Tone Tubular Hoop Earrings"
                >
                  Gold-Tone Tubular Hoop Earrings
                </Link>
                <div className="item-price">
                  <p className="font-bold">Rp. 1.463.000</p>
                  <span className="font-medium">Rp. 2.090.000</span>
                </div>
              </div>
            </div>
          </div>
          <nav className="pagination">
            <ul>
              <li className="chevron hover-opacity-primary">
                <Link to="#" className="font-medium">
                  <img
                    src={ChevronLeft}
                    className="img-block"
                    alt="Chevron Left"
                  />
                </Link>
              </li>
              <li className="active hover-opacity-primary">
                <Link to="#" className="font-medium active">
                  1
                </Link>
              </li>
              <li className="hover-opacity-primary">
                <Link to="#" className="font-medium">
                  2
                </Link>
              </li>
              <li className="hover-opacity-primary">
                <Link to="#" className="font-medium">
                  3
                </Link>
              </li>
              <li className="chevron hover-opacity-primary">
                <Link to="#" className="font-medium">
                  <img
                    src={ChevronRight}
                    className="img-block"
                    alt="Chevron Right"
                  />
                </Link>
              </li>
            </ul>
          </nav>
        </section>
      </div>
    </Layout>
  );
}
