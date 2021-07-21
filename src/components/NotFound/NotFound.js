import React from "react";

import "./not-found.scss";

import NotFoundImg from "../../assets/img/not-found.png";

export default function NotFound() {
  return (
    <div className="wrapper not-found-wrapper">
      <div className="not-found-img">
        <img src={NotFoundImg} className="img-block" alt="Not Found" />
      </div>
      <div className="not-found-desc font-medium">
        <h2>Oops! Page Not Found</h2>
        <p>
          We could not find the page you requested, we recommend that you check
          if the page you requested is correct and try again.
        </p>
      </div>
    </div>
  );
}
