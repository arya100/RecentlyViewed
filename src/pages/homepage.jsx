import React, { Component } from "react";
import Header from "../component/header";
import Navbar from "../component/navbar";
import Footer from "../component/footer";
import PreviouslyViewed from "../component/carousel/previouslyviewed";
import ProductList from "../component/products/productList";
class HomePage extends Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <div className="root-layout">
        <Header />
        <Navbar {...this.props}/>        
        {this.props.productList.length > 0 && <ProductList productList={this.props.productList} selectProduct={this.props.selectProduct}/>}       
        <PreviouslyViewed />
        <Footer />
      </div>
    );
  }
}

export default HomePage;
