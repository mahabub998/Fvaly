import React from "react";
import { Link } from 'react-router-dom';


const ProductsDetails = (props) => {
  const { img, key } = props.product;

  return (
    <div className="col-md-4 d-flex justify-content-around  mt-5">
      <div className="card" style={{ width: "18rem" }}>
        <img src={img} className="card-img-top" alt="..."></img>
        <div className="card-body">
          <h6 className="card-title"> Product Code : {key}</h6>
          <Link to={`/productDetails/${key}`}  className="btn btn-primary">
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductsDetails;
