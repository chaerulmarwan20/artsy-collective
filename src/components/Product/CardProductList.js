import React from "react";
import { Link } from "react-router-dom";
import propTypes from "prop-types";

import "./product.scss";

import Rupiah from "../../helpers/Rupiah";

export default function CardProductList(props) {
  return (
    <div className="item-product-collection">
      <Link
        to={props.href}
        className="item-product-img hover-opacity-secondary"
        title={props.title}
      >
        <img
          className="img-block img-pokemon"
          src={props.img}
          alt={props.title}
        />
        {props.isDiscount && (
          <div className="ribbon-product font-semi-bold">{props.discount}</div>
        )}
        {props.isBest && (
          <div className="label-product font-semi-bold">{props.label}</div>
        )}
      </Link>
      <div className="item-product-detail">
        <Link
          to={props.href}
          className="font-medium hover-color-primary"
          title={props.title}
        >
          {props.title}
        </Link>
        <div className="item-price">
          <p className="font-bold">{Rupiah(props.price)}</p>
          {props.isDiscount && (
            <span className="font-medium">{Rupiah(props.piece)}</span>
          )}
        </div>
      </div>
    </div>
  );
}

CardProductList.propTypes = {
  href: propTypes.string,
  title: propTypes.string,
  img: propTypes.string,
  isDiscount: propTypes.bool,
  discount: propTypes.string,
  isBest: propTypes.bool,
  label: propTypes.string,
  price: propTypes.number,
  piece: propTypes.number,
};
