import React from "react";
import Header from "../component/header";
import Navbar from "../component/navbar";
import Footer from "../component/footer";
import PreviouslyViewed from "../component/carousel/previouslyviewed";
import "./productDetail.css";

const ProductDetailPage = props => {
  if (props.selectedProduct) {
    return (
      <div className="root-layout">
        <Header />
        <Navbar />
        <div className="product-filter">
          <div className="name">{props.selectedProduct.name}</div>

          <img src={props.selectedProduct.image_url} alt="img" />
          {/* <div dangerouslySetInnerHTML={{_html: props.selectedProduct.description}} /> */}
          <div className="one">
            <h1>
              Price: ${props.selectedProduct.price}
              <button
                className="productbutton"
                style-prop-obj="vertical-align:middle"
              >
                <span>Add to cart </span>
              </button>
            </h1>
          </div>

          <div className="description">
            <h2>Description</h2>

            {props.selectedProduct.description}
          </div>
        </div>
        <PreviouslyViewed />
        <Footer />
      </div>
    );
  } else {
    return <hr />;
  }
};

export default ProductDetailPage;
