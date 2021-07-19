import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { animateScroll as scroll } from "react-scroll";

import "./product-detail.scss";

import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import Carousel from "../../components/Carousel/Carousel";
import Accordion from "../../components/Accordion/Accordion";
import Button from "../../components/Button/Button";
import Input from "../../components/Form/Input";
import InputColor from "../../components/Form/InputColor";
import ButtonLink from "../../components/Button/ButtonLink";
import ButtonClose from "../../components/Button/ButtonClose";
import Modal from "../../components/Modal/Modal";

import Rupiah from "../../helpers/Rupiah";

import Star from "../../assets/icon/star.svg";
import Minus from "../../assets/icon/minus.svg";
import Plus from "../../assets/icon/plus.svg";
import Award from "../../assets/icon/award.svg";
import Info from "../../assets/icon/info.svg";

export default function ProductDetail() {
  const apiUrl = process.env.REACT_APP_API;
  // const apiImg = process.env.REACT_APP_API_IMG;

  const [pokemon, setPokemon] = useState([]);
  const [imgPokemon, setImgPokemon] = useState([]);
  const [ability, setAbility] = useState([]);
  const [stats, setStats] = useState([]);
  const [types, setTypes] = useState([]);
  const [star, setStar] = useState(null);
  const [breadcrumbs, setBreadcrumbs] = useState([]);
  const [qty, setQty] = useState(1);
  const [color, setColor] = useState("Gold");

  const { id } = useParams();

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

  const handleQty = (e) => {
    if (e.target.value !== "") {
      e.target.validity.valid ? setQty(e.target.value) : setQty(qty);
    }
  };

  const handleCount = (type) => {
    if (type === "plus") {
      setQty(Number(qty) + 1);
    } else {
      qty > 1 && setQty(Number(qty) - 1);
    }
  };

  const handleCart = (type) => {
    const cart = document.querySelector(".cart");

    if (type === "close") {
      cart.style.display = "none";
      document.body.classList.remove("overflow-cart");
    } else {
      cart.style.display = "flex";
      document.body.classList.add("overflow-cart");
    }
  };

  const handleAccordions = (e) => {
    let target, children;

    if (!e.target.classList.contains("accordion-header")) {
      target = e.target.parentElement.nextElementSibling;
      children = target.parentElement.children[0];
      e.target.parentElement.classList.toggle("active");
    } else {
      target = e.target.nextElementSibling;
      children = e.target.children[0];
      e.target.classList.toggle("active");
    }

    target.classList.toggle("active");
    children.classList.toggle("active");
  };

  const handleWindow = () => {
    const cart = document.querySelector(".cart");

    window.addEventListener("click", (e) => {
      if (e.target === cart) {
        document.body.classList.remove("overflow-cart");
        cart.style.display = "none";
      }
    });
  };

  const fetchPokemonDetail = () => {
    fetch(`${apiUrl}/pokemon/${id}/`)
      .then((res) => res.json())
      .then((res) => {
        setPokemon(res);
        setAbility(
          res.abilities.map((item) => {
            return item.ability.name;
          })
        );
        setStats(
          res.stats.map((item) => {
            return item.stat.name;
          })
        );
        setTypes(
          res.types.map((item) => {
            return item.type.name;
          })
        );
        const pokeStar = Math.ceil(res.moves.length / 20);
        setStar(pokeStar > 5 ? 5 : pokeStar);
        setImgPokemon([
          {
            img: res.sprites.front_default,
            title: res.name,
          },
          {
            img: res.sprites.back_default,
            title: res.name,
          },
          {
            img: res.sprites.front_shiny,
            title: res.name,
          },
        ]);
        setBreadcrumbs([
          {
            href: "/",
            title: "Home",
            active: false,
          },
          {
            href: "/product-list",
            title: "Collections",
            active: false,
          },
          {
            href: `/product-detail/${id}`,
            title: res.name,
            active: true,
          },
        ]);
      });
  };

  useEffect(() => {
    document.title = "Artsy Collective | Product Detail";
    scroll.scrollToTop();
    handleWindow();
    fetchPokemonDetail();
  }, []);

  return (
    <>
      <Breadcrumb className="product-detail-breadcrumbs" list={breadcrumbs} />
      <div className="wrapper detail-product">
        <section className="gallery-product">
          <Carousel list={imgPokemon} />
          <div className="slick-nav"></div>
        </section>
        <section className="description-product">
          <div className="header-desc">
            <p className="font-semi-bold name">{pokemon.name}</p>
            <div className="star">
              {Array.from(Array(star).keys()).map((item, index) => {
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
            <p className="font-bold price">{Rupiah(pokemon.weight * 1000)}</p>
            <div className="font-medium promo">
              {pokemon.base_experience > 100 && (
                <>
                  <div className="font-semi-bold discount">30% Off</div>
                  <span>{Rupiah(pokemon.height * 1000)}</span>
                </>
              )}
            </div>
          </div>
          <div className="body-desc">
            <Accordion
              classWrapper="accordion-container"
              classHeader="accordion-header-product-detail
                hover-opacity-primary"
              title="Abilities"
              onClick={handleAccordions}
            >
              {ability.map((item, index) => {
                return <p key={index}>{item}</p>;
              })}
            </Accordion>
            <Accordion
              classWrapper="accordion-container"
              classHeader="accordion-header-product-detail
                hover-opacity-primary"
              title="Stats"
              onClick={handleAccordions}
            >
              <ul>
                {stats.map((item, index) => {
                  return (
                    <li className="font-medium" key={index}>
                      {item}
                    </li>
                  );
                })}
              </ul>
            </Accordion>
            <Accordion
              classWrapper="accordion-container"
              classHeader="accordion-header-product-detail
                hover-opacity-primary"
              title="Types"
              onClick={handleAccordions}
            >
              <ul>
                {types.map((item, index) => {
                  return (
                    <li className="font-medium" key={index}>
                      {item}
                    </li>
                  );
                })}
              </ul>
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
                  onClick={() => handleCount("minus")}
                >
                  <img src={Minus} alt="Minus" className="img-minus" />
                </Button>
                <Input
                  type="text"
                  classInput="font-medium qty-value"
                  name="qty"
                  value={String(qty)}
                  max={4}
                  onChange={handleQty}
                  pattern="[0-9]*"
                  isSingle
                />
                <Button
                  type="button"
                  className="btn-plus hover-opacity-primary"
                  onClick={() => handleCount("plus")}
                >
                  <img src={Plus} alt="Plus" className="img-plus" />
                </Button>
              </div>
            </div>
            <div className="color">
              <p className="font-medium">
                Pick Your Color: <span className="color-value">{color}</span>
              </p>
              <div className="radio-wrapper">
                <InputColor
                  classColor="radio-color-item"
                  type="radio"
                  list={listColor}
                  onChange={(color) => setColor(color)}
                  isRadio
                />
              </div>
            </div>
            <div className="sub-total">
              <p className="font-medium">Subtotal:</p>
              <span className="font-bold">
                {Rupiah(pokemon.weight * 1000 * qty)}
              </span>
            </div>
            <div className="btn-wrapper">
              <Button
                type="button"
                className="btn-cart hover-opacity-secondary"
                onClick={() => handleCart("show")}
                isPrimary
              >
                Add To Cart
              </Button>
              <ButtonLink
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
      <Modal className="wrapper cart">
        <div className="content-cart">
          <div className="header-cart">
            <p className="font-semi-bold">Item Added to Cart</p>
            <ButtonClose
              className="btn-close hover-opacity-primary"
              onClick={() => handleCart("close")}
            ></ButtonClose>
          </div>
          <div className="body-cart">
            <div className="img-cart">
              <img
                // src={`${apiImg}/${id}.png`}
                src={pokemon.sprites && pokemon.sprites.front_default}
                className="img-block"
                alt={pokemon.name}
              />
            </div>
            <div className="detail-cart">
              <h2 className="font-medium">{pokemon.name}</h2>
              <span>x{qty}</span>
              <p className="font-bold">{Rupiah(pokemon.weight * 1000 * qty)}</p>
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
      </Modal>
    </>
  );
}
