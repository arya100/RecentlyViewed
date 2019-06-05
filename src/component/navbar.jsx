import React, { Component } from "react";
import menuicon from "../images/baseline_menu_white_18dp.png";

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: ''
    }
  }

  onChangeTerm = event => {
    let q = event.target.value.toLowerCase();
    this.setState({ searchTerm: q });
  };

  enterPressed =(e) => {
    let code = e.keyCode || e.which;
    if (code === 13) {
    this.props.getProductsByName(e, this.state.searchTerm)
      //13 is the enter keycode
    }
  }

  render() {
    return (
      <div>
        <div className="nav-bar container-fluid row">
          <div className="col-5 menu-bar">
            <a href="/">
              <img src={menuicon} alt="x" className="menu-icon" />
              <span className="menu-heading">Departments</span>
              <i className="icon-arrow" />
            </a>
          </div>
          <div className="col-7">
            <div className="form-inline">
              <input
                className="form-control"
                type="search"
                placeholder="Search"
                aria-label="Search"
                onKeyPress={this.enterPressed}
                value={this.state.searchTerm}
                onChange={event => this.onChangeTerm(event)}
              />

              <button onClick={(e) => this.props.getProductsByName(e, this.state.searchTerm)} className="search-inline">
                Search
              </button>
            </div>
          </div>
        </div>
        {/* <div className="serv">
          {" "}
          
        </div> */}
      </div>
    );
  }
}

export default NavBar;
