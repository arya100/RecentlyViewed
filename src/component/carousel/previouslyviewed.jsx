import CorouselComponent from "./corousel";
import React, { Component } from "react";
import axios from "axios";
import Item from "../../model/Item";
class PreviouslyViewed extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [{}],
      product: {}
    };
  }
  componentDidMount() {
    this.getPreviouslyViewedProducts();
  }
  getPreviouslyViewedProducts = () => {
    axios
      //.get("http://10.61.141.63:8083/api/customers/test1/previously-viewed")
     .get("https://api.myjson.com/bins/13vk34") 
      .then(response => {
        console.log(`your response`, response);

        let productList = [];
        response.data.forEach((dataItem, index) => {
          let item = new Item();
          item.id = dataItem.id;
          item.name = dataItem.name;
          item.image_url = dataItem.image_url;
          item.price = "price: $" + dataItem.price;
          item.index = index;

          productList.push(item);
        });
        this.setState({
          product: productList[0],
          products: productList
        });
      });
  };
  render() {
    return (
      <div>
        <h2 className="text-center">
          <b> PREVIOUSLY VIEWED</b>
        </h2>
        <CorouselComponent
          products={this.state.products}
          product={this.state.product}
        />
      </div>
    );
  }
}

export default PreviouslyViewed;
