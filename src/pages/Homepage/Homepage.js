import React, { useEffect } from "react";

import "./homepage.scss";

import Auth from "../Auth/Auth";

import LinkOutline from "../../components/LinkOutline";
import CardSm from "../../components/Product/CardProductSm";
import CardLg from "../../components/Product/CardProductLg";

import Banner from "../../assets/img/banner-homepage.jpg";
import Item1 from "../../assets/img/item-1.jpg";
import Item2 from "../../assets/img/item-2.jpg";
import Item3 from "../../assets/img/item-3.jpg";
import Item4 from "../../assets/img/item-4.jpg";
import ItemLg1 from "../../assets/img/item-lg-1.jpg";
import ItemLg2 from "../../assets/img/item-lg-2.jpg";

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

  useEffect(() => {
    document.title = "Artsy Collective | Homepage";
  }, []);

  return (
    <>
      <div className="homepage">
        <section className="hero wrapper relative-wrapper">
          <div className="description">
            <h1 className="font-bold section-title">Collection Camelia</h1>
            <p>
              More than a flower, the Artsy camellia is an inspiration. Its
              geometric curves lend themselves to an endless variety of styles,
              from the most naturalistic to the most abstract.
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
                <CardSm
                  classProduct="item-leaf"
                  href={item.href}
                  title={item.title}
                  classProductHref="img-leaf hover-opacity-secondary"
                  img={item.img}
                  classTitle="title-leaf"
                  classTitleHref="font-medium hover-color-primary"
                  key={index}
                />
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
                <CardLg
                  classProduct="discover-item"
                  classImg="img-discover"
                  img={item.img}
                  title={item.title}
                  classDetail="detail-discover"
                  desc={item.desc}
                  href={item.href}
                  link={item.link}
                  key={index}
                />
              );
            })}
          </div>
        </section>
      </div>
      <Auth />
    </>
  );
}
