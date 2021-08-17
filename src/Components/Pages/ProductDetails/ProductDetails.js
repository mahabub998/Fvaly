import React from 'react';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import fakeData from './../../../fakeData/index';
import { useState } from 'react';

const ProductDetails = () => {
    const [productDetail,setProductDetail] = useState([]);
    const {productKey} = useParams();

    useEffect(() => {
        setProductDetail(fakeData);
      }, []);
      const details = productDetail.find((dt) =>dt.key ==productKey );
      


    return (
       
        <div className="row w-100">
        <div className="col-md-6 col-sm-12 justify-content-end mt-5 ">
        <img className="ms-5" src={details?.img}></img>
        </div>
        <div className="col-md-6 col-sm-12 justify-content-start ">
        <h2>{details?.name}</h2>
        </div>
        
        </div>
      
    );
};

export default ProductDetails;