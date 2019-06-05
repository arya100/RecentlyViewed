import React, { Component } from "react";
import "../App.css";
import logo from "../images/lowes-logo-transparent.png";
import personicon from "../images/baseline_person_black_18dp.png";
import carticon from "../images/baseline_shopping_cart_black_18dp.png";
class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      location: "N. Charlotte Lowe's"
    };
  }
  render() {
    return (
      <div className="header container-fluid ">
        <div className="row">
          <div className="col-6 align-center">
            <img alt="logo" className="logo" src={logo} />
            <div className="header-text align-center ">
              <span>Open Util 10pm!</span>
              <a href="/">
                {this.state.location}
                <span className="location-icon" />
              </a>
            </div>
          </div>
          <div className="col-3" />

          <div className=" align-center col-3">
            <div className="profile-section align-center">
              <img src={personicon} alt="X" className="profile-icon" />
              <div className="profile align-center">
                <span>myLowes</span>
                <a href="/">Signin</a>
              </div>
              <img src={carticon} alt="x" className="cart-icon" />
              <span className="cart-box">0</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
