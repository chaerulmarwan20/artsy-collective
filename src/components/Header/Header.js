import React from "react";
import { Link } from "react-router-dom";

import "./header.scss";

import StaticData from "../../json/header.json";

import { handleHeader, handleLinks, handleMenuMobile } from "./helpers";

import ListMenu from "../ListMenu/ListMenu";
import Button from "../Button/Button";
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
  const productMenu = [
    {
      ...StaticData.productMenu[0],
      img: ProductLg1,
    },
    {
      ...StaticData.productMenu[1],
      img: ProductLg2,
    },
    {
      ...StaticData.productMenu[2],
      img: ProductLg3,
    },
  ];

  const navbarMenuMobile = [
    {
      ...StaticData.navbarMenuMobile[0],
      img: ProductSm1,
    },
    {
      ...StaticData.navbarMenuMobile[1],
      img: ProductSm2,
    },
    {
      ...StaticData.navbarMenuMobile[2],
      img: ProductSm3,
    },
    {
      ...StaticData.navbarMenuMobile[3],
      img: ProductSm4,
    },
    {
      ...StaticData.navbarMenuMobile[4],
      img: ProductSm5,
    },
  ];

  return (
    <header className="wrapper" onMouseLeave={handleHeader}>
      <nav className="navbar">
        <Button
          type="button"
          className="hamburger-menu hover-opacity-primary"
          onClick={() => handleMenuMobile("hamburger")}
        >
          <img src={HamburgerMenu} className="img-block" alt="Hamburger Menu" />
        </Button>
        <div className="logo">
          <Link
            to="#"
            className="hover-opacity-primary"
            title="Artsy Collective"
          >
            Artsy Collective
          </Link>
        </div>
        <ListMenu
          classMenu="navbar-menu"
          list={StaticData.navbarMenu}
          onMouseOver={handleLinks}
          isNavbar
        />
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
        <ButtonClose
          className="close hover-opacity-primary"
          onClick={() => handleMenuMobile("close")}
        />
      </nav>
      <div className="collections-menu">
        <div className="categories">
          <h2 className="font-bold">Shop By Categories</h2>
          <ListMenu
            list={StaticData.categoriesMenu}
            classItem="hover-color-primary"
          />
        </div>
        <div className="features">
          <h2 className="font-bold">Featured Collections</h2>
          <ListMenu
            list={StaticData.featuredMenu}
            classItem="hover-color-primary"
          />
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
