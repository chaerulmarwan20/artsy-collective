import React from "react";
import { Link } from "react-router-dom";

import "./footer.scss";

import StaticData from "../../json/footer.json";

import ListMenu from "../ListMenu/ListMenu";

import Message from "../../assets/icon/message.svg";
import Chat from "../../assets/icon/chat.svg";
import Mail from "../../assets/icon/mail.svg";
import Phone from "../../assets/icon/phone.svg";
import Visa from "../../assets/img/visa.png";
import MasterCard from "../../assets/img/master-card.png";
import Cirrus from "../../assets/img/cirrus.png";
import AmericanExpress from "../../assets/img/american-express.png";
import Jcb from "../../assets/img/jcb.png";
import Paypal from "../../assets/img/paypal.png";

export default function Footer() {
  const listContact = [
    {
      ...StaticData.listContact[0],
      img: Message,
    },
    {
      ...StaticData.listContact[1],
      img: Chat,
    },
    {
      ...StaticData.listContact[2],
      img: Mail,
    },
    {
      ...StaticData.listContact[3],
      img: Phone,
    },
  ];

  const arrSponsor = [
    {
      ...StaticData.arrSponsor[0],
      img: Visa,
    },
    {
      ...StaticData.arrSponsor[1],
      img: Cirrus,
    },
    {
      ...StaticData.arrSponsor[2],
      img: MasterCard,
    },
    {
      ...StaticData.arrSponsor[3],
      img: AmericanExpress,
    },
    {
      ...StaticData.arrSponsor[4],
      img: Jcb,
    },
    {
      ...StaticData.arrSponsor[5],
      img: Paypal,
    },
  ];

  return (
    <footer className="active">
      <div className="content-footer">
        <div className="wrapper">
          <div className="title">
            <Link
              to="#"
              className="hover-opacity-primary"
              title="Artsy Collective"
            >
              Artsy Collective
            </Link>
          </div>
          <div className="service">
            <div className="menu">
              {StaticData.arrMenu.map((item, index) => {
                return (
                  <ListMenu
                    list={item.menu}
                    classItem="hover-opacity-primary"
                    heading={item.heading}
                    isFooter
                    key={index}
                  />
                );
              })}
            </div>
            <div className="contact">
              <div className="member">
                <h3 className="font-bold footer-title">Become A Member</h3>
                <p className="footer-paragraph">
                  Join now and get 10% off your next purchase!
                </p>
              </div>
              <div className="desc">
                <h3 className="font-bold footer-title">Need A Hand?</h3>
                <p className="footer-paragraph">
                  We’re available by phone{" "}
                  <Link
                    to="tel:+8884927297"
                    className="footer-text hover-opacity-primary"
                    title="(888.492.7297)"
                  >
                    (888.492.7297)
                  </Link>{" "}
                  and chat everyday from 9 a.m.–10 p.m. GMT+7.
                </p>
                <div className="list-contact">
                  {listContact.map((item, index) => {
                    return (
                      <Link
                        to={item.href}
                        className="hover-opacity-primary"
                        title={item.title}
                        key={index}
                      >
                        <img
                          src={item.img}
                          className="img-block"
                          alt={item.title}
                        />
                        <span>{item.title}</span>
                      </Link>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
          <div className="location">
            <p>
              <span>Indonesia</span> - Rp (Rupiah)
            </p>
            <ListMenu
              list={StaticData.arrLocation}
              classItem="hover-opacity-primary"
            />
          </div>
        </div>
      </div>
      <div className="copyright">
        <div className="wrapper flex-wrapper">
          <div className="country">
            <p className="footer-text">©2021 Artsy Collective</p>
            <ListMenu
              list={StaticData.arrCountry}
              classItem="footer-text hover-color-primary"
            />
          </div>
          <div className="sponsor">
            {arrSponsor.map((item, index) => {
              return (
                <Link
                  to={item.href}
                  className="hover-opacity-primary"
                  title={item.title}
                  key={index}
                >
                  <img src={item.img} className="img-block" alt={item.title} />
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
}
