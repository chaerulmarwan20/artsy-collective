import React, { useEffect } from "react";

import "./homepage.scss";

import StaticData from "../../json/homepage.json";

import Auth from "../Auth/Auth";

import ButtonLink from "../../components/Button/ButtonLink";
import Card from "../../components/Product/CardProductHome";

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
      ...StaticData.leafProduct[0],
      img: Item1,
    },
    {
      ...StaticData.leafProduct[1],
      img: Item2,
    },
    {
      ...StaticData.leafProduct[2],
      img: Item3,
    },
    {
      ...StaticData.leafProduct[3],
      img: Item4,
    },
  ];

  const discoverProduct = [
    {
      img: ItemLg1,
      ...StaticData.discoverProduct[0],
    },
    {
      img: ItemLg2,
      ...StaticData.discoverProduct[1],
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
            <ButtonLink
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
            <ButtonLink
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
                <Card
                  classProduct="item-leaf"
                  href={item.href}
                  title={item.title}
                  classProductHref="img-leaf hover-opacity-secondary"
                  img={item.img}
                  classTitle="title-leaf"
                  classTitleHref="font-medium hover-color-primary"
                  key={index}
                  isSmall
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
                <Card
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
