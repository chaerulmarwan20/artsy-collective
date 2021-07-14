import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import "./assets/css/normalize.css";
import "./assets/scss/main.scss";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

import Homepage from "./pages/Homepage/Homepage";
import ProductList from "./pages/ProductList/ProductList";
import ProductDetail from "./pages/ProductDetail/ProductDetail";
import Todo from "./pages/Todo/Todo";

function App() {
  return (
    <Router>
      <Header />
      <Route exact path="/" component={Homepage} />
      <Route path="/product-list" component={ProductList} />
      <Route path="/product-detail" component={ProductDetail} />
      <Route path="/todo" component={Todo} />
      <Footer />
    </Router>
  );
}

export default App;
