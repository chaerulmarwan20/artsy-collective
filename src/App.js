import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./assets/css/normalize.css";
import "./assets/scss/main.scss";

import Header from "./components/Header/Header";
import NotFound from "./components/NotFound/NotFound";
import Skeleton from "./components/Skeleton/SkeletonLoading";
import Footer from "./components/Footer/Footer";

import Homepage from "./pages/Homepage/Homepage";
import ProductList from "./pages/ProductList/ProductList";
import ProductDetail from "./pages/ProductDetail/ProductDetail";
import Todo from "./pages/Todo/Todo";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/product-list" component={ProductList} />
        <Route path="/product-detail/:id" component={ProductDetail} />
        <Route path="/todo" component={Todo} />
        <Route path="/skeleton" component={Skeleton} />
        <Route path="*" component={NotFound} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
