import React from "react";
import { Link } from "react-router-dom";

import Layout from "../components/base/Layout";
import Auth from "../parts/Auth";

import LinkOutline from "../components/module/LinkOutline";

import Banner from "../assets/img/banner-homepage.jpg";
import Item1 from "../assets/img/item-1.jpg";
import Item2 from "../assets/img/item-2.jpg";
import Item3 from "../assets/img/item-3.jpg";
import Item4 from "../assets/img/item-4.jpg";
import ItemLg1 from "../assets/img/item-lg-1.jpg";
import ItemLg2 from "../assets/img/item-lg-2.jpg";

export default function Homepage() {
  const leafProduct = [
    {
      href: "#",
      title: "Leaf Stud Earrings",
      img: Item1,
    },
    {
      href: "#",
      title: "Leaf Pendant Bead Necklace",
      img: Item2,
    },
    {
      href: "#",
      title: "Leaf Band Ring",
      img: Item3,
    },
    {
      href: "#",
      title: "Leaf Bead Bracelet",
      img: Item4,
    },
  ];

  const discoverProduct = [
    {
      img: ItemLg1,
      title: "SUMMER 2021 : THE WEDDING",
      desc: "Celebrate wedding in style with our elegant and eye-catching Jewel",
      href: "#",
      link: "Shop Wedding Collection",
    },
    {
      img: ItemLg2,
      title: "LITTLE COLLECTION 2021",
      desc: "Mini trendsetters Mia and Tatiana step out with our striking pendant and adorable quilted jewel.",
      href: "#",
      link: "Shop Little Collection",
    },
  ];

  return (
    <>
      <Layout title="Homepage" isHomepage>
        <div className="homepage">
          <section className="hero wrapper relative-wrapper">
            <div className="description">
              <h1 className="font-bold section-title">Collection Camelia</h1>
              <p>
                More than a flower, the Artsy camellia is an inspiration. Its
                geometric curves lend themselves to an endless variety of
                styles, from the most naturalistic to the most abstract.
              </p>
              <LinkOutline
                href="#"
                title="See Camelia Collection"
                className="btn-see hover-opacity-primary"
              />
            </div>
            <div className="img-hero">
              <img src={Banner} className="img-block" alt="Banner" />
            </div>
          </section>
          <div className="img-hero-mobile">
            <img src={Banner} className="img-block" alt="Banner" />
          </div>
          <section className="leaf wrapper">
            <div className="header-leaf">
              <h2 className="font-bold section-title">
                Leaf Pendant Collections
              </h2>
              <p>Style your modest wear with our understated picks</p>
              <LinkOutline
                href="#"
                title="Shop Now"
                className="btn-shop hover-opacity-primary"
                isLink
                isOutline
              />
            </div>
            <div className="product-leaf">
              {leafProduct.map((item, index) => {
                return (
                  <div className="item-leaf" key={index}>
                    <Link
                      to={item.href}
                      title={item.title}
                      className="img-leaf hover-opacity-secondary"
                    >
                      <img
                        src={item.img}
                        className="img-block"
                        alt={item.title}
                      />
                    </Link>
                    <div className="title-leaf">
                      <Link
                        to={item.href}
                        className="font-medium hover-color-primary"
                        title={item.title}
                      >
                        {item.title}
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>
          <section className="discover wrapper">
            <h2 className="font-bold section-title title-discover">
              Discover More
            </h2>
            <div className="discover-product">
              {discoverProduct.map((item, index) => {
                return (
                  <div className="discover-item" key={index}>
                    <div className="img-discover">
                      <img
                        src={item.img}
                        className="img-block"
                        alt={item.title}
                      />
                    </div>
                    <div className="detail-discover">
                      <p className="font-bold">{item.title}</p>
                      <span>{item.desc}</span>
                      <Link
                        to="#"
                        className="font-semi-bold hover-color-secondary"
                        title={item.title}
                      >
                        {item.link}
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>
        </div>
      </Layout>
      <Auth />
    </>
  );
}
