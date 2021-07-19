import React from "react";

import "./loader.scss";

export default function Loader() {
  return (
    <div className="loader-wrapper">
      <div className="loader-item"></div>
      <h2 className="font-bold">Preparing data...</h2>
    </div>
  );
}
