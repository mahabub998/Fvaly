import React from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import fakeData from "./../../../fakeData/index";
import { useState } from "react";
import swal from "sweetalert";
import Header from "../../Shared/Header/Header";
import Footer from "../../Shared/Footer/Footer";

const ProductDetails = () => {
  const [productDetail, setProductDetail] = useState([]);
  const { productKey } = useParams();

  useEffect(() => {
    setProductDetail(fakeData);
  }, []);
  const details = productDetail.find((dt) => dt.key == productKey);

  const handleOrder = () => {
    swal(
      "Thank you ,your Order submitted!",
      "You clicked the button!",
      "success"
    );
  };

  return (
    <div>
      <Header />
      <div className="row w-100 " style={{ height: "100%" }}>
        <div className="col-md-6 col-sm-12 justify-content-end mt-5 ">
          <img className="ms-5" src={details?.img}></img>
        </div>
        <div className="col-md-6 col-sm-12 justify-content-start mt-5 ">
          <h3>Regular Price : {details?.price}</h3>
          <h5>Whole price : {details?.wholePrice}</h5>
          <h4>Name: {details?.name}</h4>
          <h4>Stock : {details?.stock}</h4>

          <div>
            <button className=" btn btn-primary mt-5" onClick={handleOrder}>
              Order Now
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProductDetails;
