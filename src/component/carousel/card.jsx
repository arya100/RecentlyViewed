import React from "react";

const LCard = props => {
  return (
    <div className="card-width">
      <img src={props.item.image_url} className="card-img-top" alt="..." />
      <div className="card-body">
        <p maxLength="20" className="card-title">
          <center>{props.item.name}</center>
        </p>
        <p className="card-text">
          <center>
            <span>{props.item.price}</span>
          </center>
        </p>
        <center>
          <button className="btn btn-primary">
            <center>Add to cart</center>
          </button>
        </center>
      </div>
    </div>
  );
};

export default LCard;
