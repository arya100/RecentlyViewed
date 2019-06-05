import React, { Component } from "react";
import LCard from "./card";
import "./corousel.css";

class CorouselComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      product: props.product
    };
    this.prevDown = this.prevDown.bind(this);
    this.nextDown = this.nextDown.bind(this);
  }
  componentWillReceiveProps(props) {
    this.setState({ product: props.product });
  }

  prevDown() {
    if (this.state.product.index !== 0) {
      console.log(this.state.product.index);
      const newIndex = this.state.product.index - 1;
      console.log(newIndex);

      this.setState({ product: this.props.products[newIndex] });
    }
  }
  nextDown() {
    if (this.state.product.index < this.props.products.length / 2 - 1) {
      console.log(this.state.product.index);
      const newIndex = this.state.product.index + 1;
      console.log(newIndex);
      this.setState({ product: this.props.products[newIndex] });
    }
  }
  render() {
    return (
      <div id="carouselExampleCaptions">
        <ol className="carousel-indicators">
          <li
            data-target="#carouselExampleCaptions"
            data-slide-to="0"
            className="active"
          />
        </ol>
        <div id="mygallery" className="slider">
          <div
            className="slide-wrapper"
            style={{
              transform: `translateX(-${(this.state.product.index * 200) /
                this.props.products.length}%)`
            }}
          >
            {this.props.products
              ? this.props.products.map(ite => (
                  <LCard key={ite.id} item={ite} />
                ))
              : ""}
          </div>
          <div
            className="control-prev"
            role="button"
            disabled={this.state.product.index === 0}
            data-slide="prev"
            onClick={() => this.prevDown()}
          >
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="sr-only">Previous</span>
          </div>
          <div
            className="control-next"
            role="button"
            data-slide="next"
            disabled={
              this.state.product.index === this.props.products
                ? this.props.products.length - 1
                : 0
            }
            onClick={() => this.nextDown()}
          >
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="sr-only">Next</span>
          </div>
        </div>
      </div>
    );
  }
}

export default CorouselComponent;