import React from "react";
import { Link } from "react-router-dom";

import ListMenu from "../components/module/ListMenu";

import HamburgerMenu from "../assets/icon/menu.svg";
import User from "../assets/icon/user.svg";
import Cart from "../assets/icon/cart.svg";
import Close from "../assets/icon/close.svg";
import ProductLg1 from "../assets/img/product-lg-1.jpg";
import ProductLg2 from "../assets/img/product-lg-2.jpg";
import ProductLg3 from "../assets/img/product-lg-3.jpg";
import ProductSm1 from "../assets/img/product-sm-1.png";
import ProductSm2 from "../assets/img/product-sm-2.png";
import ProductSm3 from "../assets/img/product-sm-3.png";
import ProductSm4 from "../assets/img/product-sm-4.png";
import ProductSm5 from "../assets/img/product-sm-5.png";

export default function Header() {
  const navbarMenu = [
    {
      href: "#",
      title: "Collections",
    },
    {
      href: "#",
      title: "Coco Crush",
    },
    {
      href: "#",
      title: "High Jewelry",
    },
    {
      href: "#",
      title: "Bridal",
    },
    {
      href: "#",
      title: "Care & Services",
    },
  ];

  const categoriesMenu = [
    {
      href: "#",
      title: "View All",
    },
    {
      href: "#",
      title: "Rings",
    },
    {
      href: "#",
      title: "Bracelets",
    },
    {
      href: "#",
      title: "Necklaces",
    },
    {
      href: "#",
      title: "Earrings",
    },
  ];

  const featuredMenu = [
    {
      href: "#",
      title: "Coco Crush",
    },
    {
      href: "#",
      title: "Camélia",
    },
    {
      href: "#",
      title: "Ultra",
    },
    {
      href: "#",
      title: "Comète",
    },
    {
      href: "#",
      title: "Ruban",
    },
    {
      href: "#",
      title: "Baroque",
    },
    {
      href: "#",
      title: "Soleil de Artsy",
    },
  ];

  const productMenu = [
    {
      href: "#",
      title: "Coco Crush Ring",
      img: ProductLg1,
    },
    {
      href: "#",
      title: "Camélia Bracelet",
      img: ProductLg2,
    },
    {
      href: "#",
      title: "Ruban Collection",
      img: ProductLg3,
    },
  ];

  const navbarMenuMobile = [
    {
      href: "#",
      title: "Collections",
      desc: "All Artsy’s fine jewelry",
      img: ProductSm1,
    },
    {
      href: "#",
      title: "Coco Crush",
      desc: "Special Coco Crush’s Edition",
      img: ProductSm2,
    },
    {
      href: "#",
      title: "High Jewelry",
      desc: "Artsy high jewelry signature",
      img: ProductSm3,
    },
    {
      href: "#",
      title: "Bridal",
      desc: "Wedding, Engagement Rings",
      img: ProductSm4,
    },
    {
      href: "#",
      title: "Care & Services",
      desc: "Book an Appoinment",
      img: ProductSm5,
    },
  ];

  return (
    <header className="wrapper">
      <nav className="navbar">
        <button type="button" className="hamburger-menu hover-opacity-primary">
          <img src={HamburgerMenu} className="img-block" alt="Hamburger Menu" />
        </button>
        <div className="logo">
          <Link
            to="#"
            className="hover-opacity-primary"
            title="Artsy Collective"
          >
            Artsy Collective
          </Link>
        </div>
        <ListMenu classMenu="navbar-menu" list={navbarMenu} />
        <div className="icon">
          <Link to="#" className="hover-opacity-primary" title="Your Account">
            <img src={User} className="img-block" alt="User" />
          </Link>
          <Link
            to="#"
            className="count-cart hover-opacity-primary"
            title="Your Cart"
          >
            <img src={Cart} className="img-block" alt="Cart" />
            <div className="count">1</div>
          </Link>
        </div>
        <button type="button" className="close hover-opacity-primary">
          <img src={Close} className="img-block" alt="Close" />
        </button>
      </nav>
      <div className="collections-menu">
        <div className="categories">
          <h2 className="font-bold">Shop By Categories</h2>
          <ListMenu list={categoriesMenu} classItem="hover-color-primary" />
        </div>
        <div className="features">
          <h2 className="font-bold">Featured Collections</h2>
          <ListMenu list={featuredMenu} classItem="hover-color-primary" />
        </div>
        <div className="products">
          {productMenu.map((item, index) => {
            return (
              <div className="item-product" key={index}>
                <Link
                  to={item.href}
                  title={item.title}
                  className="img-product hover-opacity-secondary"
                >
                  <img src={item.img} className="img-block" alt={item.title} />
                </Link>
                <div className="title-product">
                  <Link
                    to={item.href}
                    className="hover-color-primary"
                    title={item.title}
                  >
                    {item.title}
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <nav className="wrapper navbar-expand">
        {navbarMenuMobile.map((item, index) => {
          return (
            <Link
              to={item.href}
              className="item hover-opacity-primary"
              title={item.title}
              key={index}
            >
              <div className="desc">
                <p className="font-semi-bold">{item.title}</p>
                <span>{item.desc}</span>
              </div>
              <img src={item.img} className="img-block" alt={item.title} />
            </Link>
          );
        })}
      </nav>
    </header>
  );
}
