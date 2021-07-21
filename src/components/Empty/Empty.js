import React from "react";
import propTypes from "prop-types";

import "./empty.scss";

import EmptyImg from "../../assets/img/empty-state.png";

export default function Empty(props) {
  return (
    <div className={`empty-wrapper ${props.isDetail && "empty-detail"}`}>
      <div className="empty-img">
        <img src={EmptyImg} className="img-block" alt="Empty State" />
      </div>
      <div className="empty-desc font-medium">
        <h2>Oops! It's Empty</h2>
        <p>
          There are no {`${props.isDetail ? "product detail" : "products"}`} yet
        </p>
      </div>
    </div>
  );
}

Empty.propTypes = {
  isDetail: propTypes.bool,
};
