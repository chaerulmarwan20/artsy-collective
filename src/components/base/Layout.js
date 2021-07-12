import React, { useEffect } from "react";
import propTypes from "prop-types";

import Header from "../../parts/Header";
import Footer from "../../parts/Footer";

export default function Layout(props) {
  useEffect(() => {
    document.title = `Artsy Collective | ${props.title}`;
  }, [props.title]);

  if (props.isHomepage)
    return (
      <div className="homepage-wrapper">
        <Header />
        {props.children}
        <Footer />
      </div>
    );

  return (
    <>
      <Header />
      {props.children}
      <Footer />
    </>
  );
}

Layout.propTypes = {
  title: propTypes.string,
  isHomepage: propTypes.bool,
};
