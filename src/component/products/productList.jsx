import React, { Component } from "react";
import Product from "./product";
import { Link } from 'react-router-dom';
import axios from "axios";


class ProductList extends Component {
  constructor(props) {
    super(props);
  }

  // componentDidMount() {
  //   this.trackProduct();
  // }

  trackProduct = (id) => {
    axios({
      method: 'post',
      url: `http://10.61.141.63:8083/api/customers/increment-product-view`,

      data: {
        "customerLoginId": "test1",
        "productId": id
      },
      // },
      config: { headers: { 'Content-Type': 'multipart/form-data' } }
    })
      .then(function (response) {
        //handle success
        console.log('post call 1', response);
      })
      .catch(function (response) {
        //handle error
        console.log(response);
      });
  }

  render() {
    return (
      <ul className="serv">
        {this.props.productList.map(product => {
          return (
            <li onClick={(e) => { this.props.selectProduct(e, product); this.trackProduct(product.id) }}>
              <Link to={"/product/" + product.id}>
                <Product
                  key={product.id}
                  name={product.name}
                  image={product.image_url}
                  price={product.price}
                />
              </Link>
            </li>
          );
        })}
      </ul>
    )

  }

}





export default ProductList;
