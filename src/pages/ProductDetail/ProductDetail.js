import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import "./product-detail.scss";

import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import Carousel from "../../components/Carousel/Carousel";
import Accordion from "../../components/Accordion/Accordion";
import Button from "../../components/Button/Button";
import InputColor from "../../components/Form/InputColor";
import LinkOutline from "../../components/LinkOutline";
import ButtonClose from "../../components/Button/ButtonClose";

import Rupiah from "../../helpers/Rupiah";

import ProductDetail1 from "../../assets/img/product-detail-1.png";
import ProductDetail2 from "../../assets/img/product-detail-2.jpg";
import ProductDetail3 from "../../assets/img/product-detail-3.png";
import Star from "../../assets/icon/star.svg";
import Minus from "../../assets/icon/minus.svg";
import Plus from "../../assets/icon/plus.svg";
import Award from "../../assets/icon/award.svg";
import Info from "../../assets/icon/info.svg";
import ModalProduct from "../../assets/img/modal-product.jpg";

export default function ProductDetail() {
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
      title: "Pave Threader Earrings",
      active: true,
    },
  ];

  const listCarousel = [
    {
      img: ProductDetail1,
      title: "Product Detail 1",
    },
    {
      img: ProductDetail2,
      title: "Product Detail 2",
    },
    {
      img: ProductDetail3,
      title: "Product Detail 3",
    },
  ];

  const listColor = [
    {
      name: "color",
      id: "gold",
      isChecked: true,
    },
    {
      name: "color",
      id: "silver",
      isChecked: false,
    },
  ];

  useEffect(() => {
    document.title = "Artsy Collective | Product Detail";

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
      document.body.classList.add("overflow-cart");
    });

    closeCart.addEventListener("click", () => {
      cart.style.display = "none";
      document.body.classList.remove("overflow-cart");
    });

    window.addEventListener("click", (e) => {
      if (e.target === cart) {
        document.body.classList.remove("overflow-cart");
        cart.style.display = "none";
      }
    });
  }, []);

  return (
    <>
      <Breadcrumb
        className="product-detail-breadcrumbs"
        list={listBreadcrumb}
      />
      <div className="wrapper detail-product">
        <section className="gallery-product">
          <Carousel list={listCarousel} />
          <div className="slick-nav"></div>
        </section>
        <section className="description-product">
          <div className="header-desc">
            <p className="font-semi-bold name">Pave Threader Earrings</p>
            <div className="star">
              {Array.from(Array(5).keys()).map((item, index) => {
                return (
                  <img
                    src={Star}
                    className="img-block"
                    alt="Star"
                    key={index}
                  />
                );
              })}
            </div>
            <p className="font-bold price">{Rupiah(104300)}</p>
            <div className="font-medium promo">
              <div className="font-semi-bold discount">30% Off</div>
              <span>{Rupiah(135590)}</span>
            </div>
          </div>
          <div className="body-desc">
            <Accordion
              classWrapper="accordion-container"
              classHeader="accordion-header-product-detail
                hover-opacity-primary"
              title="Description"
            >
              <p>
                Elevate your everyday look with these threader earrings designed
                with pave crystals.
              </p>
              <p className="earring">
                Earring Drop Length: 1.32" <br />
                Earring Width: 0.11"
              </p>
            </Accordion>
            <Accordion
              classWrapper="accordion-container"
              classHeader="accordion-header-product-detail
                hover-opacity-primary"
              title="Material"
            >
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
            </Accordion>
            <Accordion
              classWrapper="accordion-container"
              classHeader="accordion-header-product-detail
                hover-opacity-primary"
              title="Shipping & Returns"
            >
              <ul>
                <li className="font-medium">Standard Delivery</li>
                <li className="font-medium">Express Delivery</li>
              </ul>
              <ul>
                <li className="font-medium">Within 6 - 9 working days</li>
                <li className="font-medium">Within 3 - 5 working days</li>
              </ul>
              <p>
                Find out more about our{" "}
                <Link
                  to="#"
                  className="hover-color-primary"
                  title="Returns & Exchanges"
                >
                  Returns & Exchanges
                </Link>
                . All orders are currently shipped out from Indonesia
              </p>
            </Accordion>
          </div>
        </section>
        <section className="info-product">
          <form className="info-product-content">
            <div className="qty">
              <p className="font-medium">Set Your Qty:</p>
              <div className="btn-count">
                <Button
                  type="button"
                  className="btn-minus hover-opacity-primary"
                >
                  <img src={Minus} alt="Minus" className="img-minus" />
                </Button>
                <input
                  type="text"
                  className="font-medium qty-value"
                  defaultValue={1}
                  maxLength="4"
                />
                <Button
                  type="button"
                  className="btn-plus hover-opacity-primary"
                >
                  <img src={Plus} alt="Plus" className="img-plus" />
                </Button>
              </div>
            </div>
            <div className="color">
              <p className="font-medium">
                Pick Your Color: <span className="color-value">Gold</span>
              </p>
              <div className="radio-wrapper">
                <InputColor
                  classColor="radio-color-item"
                  type="radio"
                  list={listColor}
                />
              </div>
            </div>
            <div className="sub-total">
              <p className="font-medium">Subtotal:</p>
              <span className="font-bold">{Rupiah(104300)}</span>
            </div>
            <div className="btn-wrapper">
              <Button
                type="button"
                className="btn-cart hover-opacity-secondary"
                isPrimary
              >
                Add To Cart
              </Button>
              <LinkOutline
                href="#"
                className="btn-order hover-opacity-secondary"
                title="Order Now"
              />
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
            <ButtonClose className="btn-close hover-opacity-primary"></ButtonClose>
          </div>
          <div className="body-cart">
            <div className="img-cart">
              <img src={ModalProduct} className="img-block" alt="Modal" />
            </div>
            <div className="detail-cart">
              <h2 className="font-medium">Pave threader Earrings</h2>
              <span>x1</span>
              <p className="font-bold">{Rupiah(104300)}</p>
            </div>
          </div>
          <div className="footer-cart">
            <Button
              type="button"
              className="btn-modal hover-opacity-primary"
              isPrimary
            >
              View My Cart
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
