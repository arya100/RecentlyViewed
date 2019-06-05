import React, { Component } from "react";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
// import { createBrowserHistory } from 'history';
import axios from "axios";
import HomePage from "./pages/homepage";
import ProductDetail from "./pages/productDetailPage";

import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productList: [],
      selectedProduct: null
    };
  }

  selectProduct = (evt, product) => {
    this.setState({ selectedProduct: product });
  };

  getProductsByName = (evt, searchTerm) => {
    axios
      .get(
        `http://10.61.141.63:8082/api/products/search?searchTerm=${searchTerm}`
      )
      //.get('https://api.myjson.com/bins/eb0a3')
      .then(response => {
        console.log(`your response`, response);
        this.setState({ productList: response.data });
      });
  };

  render() {
    return (
      <>
        <Router>
          <Switch>
            <Route
              exact
              path="/"
              render={props => (
                <HomePage
                  productList={this.state.productList}
                  selectProduct={this.selectProduct}
                  getProductsByName={this.getProductsByName}
                  {...props}
                />
              )}
            />
            <Route
              path="/product/:id"
              render={props => (
                <ProductDetail
                  selectedProduct={this.state.selectedProduct}
                  {...props}
                />
              )}
            />
          </Switch>
        </Router>
      </>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default App;
