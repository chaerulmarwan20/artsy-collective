import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Homepage from "../../pages/Homepage";
import ProductList from "../../pages/ProductList";
import ProductDetail from "../../pages/ProductDetail";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/product-list" component={ProductList} />
        <Route path="/product-detail" component={ProductDetail} />
      </Switch>
    </Router>
  );
}

export default App;
