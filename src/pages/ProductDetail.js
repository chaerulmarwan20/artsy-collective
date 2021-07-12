import React from "react";
import { Link } from "react-router-dom";

import Layout from "../components/base/Layout";

import ProductDetail1 from "../assets/img/product-detail-1.png";
import ProductDetail2 from "../assets/img/product-detail-2.jpg";
import ProductDetail3 from "../assets/img/product-detail-3.png";
import Star from "../assets/icon/star.svg";
import ChevronDown from "../assets/icon/chevron-down.svg";
import Minus from "../assets/icon/minus.svg";
import Plus from "../assets/icon/plus.svg";
import Award from "../assets/icon/award.svg";
import Info from "../assets/icon/info.svg";
import Close from "../assets/icon/close.svg";
import ModalProduct from "../assets/img/modal-product.jpg";

export default function ProductDetail() {
  return (
    <Layout title="Product Detail">
      <nav className="wrapper breadcrumbs product-detail-breadcrumbs">
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
              title="Pave Threader Earrings"
              className="font-medium hover-color-primary active"
            >
              Pave Threader Earrings
            </Link>
          </li>
        </ul>
      </nav>
      <div className="wrapper detail-product">
        <section className="gallery-product">
          <div className="carousel">
            <div className="carousel-item">
              <img
                src={ProductDetail1}
                className="img-block"
                alt="Product Detail 1"
              />
            </div>
            <div className="carousel-item">
              <img
                src={ProductDetail2}
                className="img-block"
                alt="Product Detail 2"
              />
            </div>
            <div className="carousel-item">
              <img
                src={ProductDetail3}
                className="img-block"
                alt="Product Detail 3"
              />
            </div>
          </div>
          <div className="slick-nav"></div>
        </section>
        <section className="description-product">
          <div className="header-desc">
            <p className="font-semi-bold name">Pave Threader Earrings</p>
            <div className="star">
              <img src={Star} className="img-block" alt="Star" />
              <img src={Star} className="img-block" alt="Star" />
              <img src={Star} className="img-block" alt="Star" />
              <img src={Star} className="img-block" alt="Star" />
              <img src={Star} className="img-block" alt="Star" />
            </div>
            <p className="font-bold price">Rp. 104.300</p>
            <div className="font-medium promo">
              <div className="font-semi-bold discount">30% Off</div>
              <span>Rp. 135.590</span>
            </div>
          </div>
          <div className="body-desc">
            <div className="accordion-container">
              <div
                className="
                accordion-header accordion-header-product-detail
                hover-opacity-primary
              "
                role="button"
              >
                <p>Description</p>
                <img
                  src={ChevronDown}
                  className="img-block"
                  alt="Chevron Down"
                />
              </div>
              <div className="accordion-body">
                <p>
                  Elevate your everyday look with these threader earrings
                  designed with pave crystals.
                </p>
                <p className="earring">
                  Earring Drop Length: 1.32" <br />
                  Earring Width: 0.11"
                </p>
              </div>
            </div>
            <div className="accordion-container">
              <div
                className="
                accordion-header accordion-header-product-detail
                hover-opacity-primary
              "
                role="button"
              >
                <p>Material</p>
                <img
                  src={ChevronDown}
                  className="img-block"
                  alt="Chevron Down"
                />
              </div>
              <div className="accordion-body">
                <ul>
                  <li className="font-medium">Fabric</li>
                  <li className="font-medium">Lining</li>
                  <li className="font-medium">Silhouette</li>
                </ul>
                <ul>
                  <li className="font-medium">Metal 100%</li>
                  <li className="font-medium">Partial</li>
                  <li className="font-medium">Drop</li>
                </ul>
              </div>
            </div>
            <div className="accordion-container">
              <div
                className="
                accordion-header accordion-header-product-detail
                hover-opacity-primary
              "
                role="button"
              >
                <p>Shipping & Returns</p>
                <img
                  src={ChevronDown}
                  className="img-block"
                  alt="Chevron Down"
                />
              </div>
              <div className="accordion-body">
                <ul>
                  <li className="font-medium">Standard Delivery</li>
                  <li className="font-medium">Express Delivery</li>
                </ul>
                <ul>
                  <li className="font-medium">Within 6 - 9 working days</li>
                  <li className="font-medium">Within 3 - 5 working days</li>
                </ul>
                <p>
                  Find out more about our
                  <Link
                    to="#"
                    className="hover-color-primary"
                    title="Returns & Exchanges"
                  >
                    Returns & Exchanges
                  </Link>
                  . All orders are currently shipped out from Indonesia
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="info-product">
          <form className="info-product-content">
            <div className="qty">
              <p className="font-medium">Set Your Qty:</p>
              <div className="btn-count">
                <button
                  type="button"
                  className="btn-minus hover-opacity-primary"
                >
                  <img src={Minus} alt="Minus" className="img-minus" />
                </button>
                <input
                  type="text"
                  className="font-medium qty-value"
                  defaultValue={1}
                  maxLength="4"
                />
                <button
                  type="button"
                  className="btn-plus hover-opacity-primary"
                >
                  <img src={Plus} alt="Plus" className="img-plus" />
                </button>
              </div>
            </div>
            <div className="color">
              <p className="font-medium">
                Pick Your Color: <span className="color-value">Gold</span>
              </p>
              <div className="radio-wrapper">
                <div className="radio-color-item">
                  <input
                    type="radio"
                    name="gender"
                    id="gold"
                    className="custom-radio"
                    defaultChecked
                  />
                  <label
                    htmlFor="gold"
                    className="radio-label hover-opacity-primary"
                    data-color="gold"
                  ></label>
                </div>
                <div className="radio-color-item">
                  <input
                    type="radio"
                    name="gender"
                    id="silver"
                    className="custom-radio"
                  />
                  <label
                    htmlFor="silver"
                    className="radio-label hover-opacity-primary"
                    data-color="silver"
                  ></label>
                </div>
              </div>
            </div>
            <div className="sub-total">
              <p className="font-medium">Subtotal:</p>
              <span className="font-bold">Rp. 104.300</span>
            </div>
            <div className="btn-wrapper">
              <button
                type="button"
                className="btn btn-primary btn-cart hover-opacity-secondary"
              >
                Add To Cart
              </button>
              <Link
                to="#"
                className="btn btn-outline btn-order hover-opacity-secondary"
                title="Order Now"
              >
                Order Now
              </Link>
            </div>
            <div className="original">
              <img src={Award} alt="Award" />
              <p className="font-semi-bold">100% Original Product</p>
              <img src={Info} alt="Info" />
            </div>
          </form>
          <div className="helps">
            <p className="font-semi-bold">Need help?</p>
            <span>
              Please go to the link here, <br />
              <Link to="#" className="hover-color-primary" title="Need help?">
                https://support.artsycollective.co.id/
              </Link>
            </span>
          </div>
        </section>
      </div>
      <div className="wrapper modal cart">
        <div className="content-cart">
          <div className="header-cart">
            <p className="font-semi-bold">Item Added to Cart</p>
            <button type="button" className="btn-close hover-opacity-primary">
              <img src={Close} className="img-block" alt="Close" />
            </button>
          </div>
          <div className="body-cart">
            <div className="img-cart">
              <img src={ModalProduct} className="img-block" alt="Modal" />
            </div>
            <div className="detail-cart">
              <h2 className="font-medium">Pave threader Earrings</h2>
              <span>x1</span>
              <p className="font-bold">Rp. 104.300</p>
            </div>
          </div>
          <div className="footer-cart">
            <button
              type="button"
              className="btn btn-primary btn-modal hover-opacity-primary"
            >
              View My Cart
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
}
