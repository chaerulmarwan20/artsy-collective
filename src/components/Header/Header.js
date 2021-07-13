import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import "./header.scss";

import ListMenu from "../ListMenu";
import ButtonClose from "../Button/ButtonClose";
import Card from "../Product/CardProductHome";

import HamburgerMenu from "../../assets/icon/menu.svg";
import User from "../../assets/icon/user.svg";
import Cart from "../../assets/icon/cart.svg";
import ProductLg1 from "../../assets/img/product-lg-1.jpg";
import ProductLg2 from "../../assets/img/product-lg-2.jpg";
import ProductLg3 from "../../assets/img/product-lg-3.jpg";
import ProductSm1 from "../../assets/img/product-sm-1.png";
import ProductSm2 from "../../assets/img/product-sm-2.png";
import ProductSm3 from "../../assets/img/product-sm-3.png";
import ProductSm4 from "../../assets/img/product-sm-4.png";
import ProductSm5 from "../../assets/img/product-sm-5.png";

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

  useEffect(() => {
    const heading = document.querySelector("header");
    const links = document.querySelectorAll(".navbar-menu a");
    const collesctionsMenu = document.querySelector(".collections-menu");
    const hamburgerMenu = document.querySelector(".hamburger-menu");
    const navbarExpand = document.querySelector(".navbar-expand");
    const icon = document.querySelector(".icon");
    const close = document.querySelector(".close");

    heading.addEventListener("mouseleave", function () {
      this.classList.remove("active");
      collesctionsMenu.classList.remove("active");
    });

    links.forEach((link) => {
      link.addEventListener("mouseover", () => {
        if (link.classList.contains("collections")) {
          collesctionsMenu.classList.add("active");
        } else {
          collesctionsMenu.classList.remove("active");
        }
      });
    });

    hamburgerMenu.addEventListener("click", function () {
      this.classList.add("scale");
      navbarExpand.classList.add("slide");
      icon.classList.add("scale");
      close.classList.add("scale");
      document.body.classList.add("overflow-navbar");
    });

    close.addEventListener("click", function () {
      this.classList.remove("scale");
      hamburgerMenu.classList.remove("scale");
      navbarExpand.classList.remove("slide");
      icon.classList.remove("scale");
      document.body.classList.remove("overflow-navbar");
    });
  }, []);

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
        <ButtonClose className="close hover-opacity-primary" />
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
              <Card
                classProduct="item-product"
                href={item.href}
                title={item.title}
                classProductHref="img-product hover-opacity-secondary"
                img={item.img}
                classTitle="title-product"
                classTitleHref="hover-color-primary"
                key={index}
                isSmall
              />
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
