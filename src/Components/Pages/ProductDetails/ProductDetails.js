import React from 'react';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import fakeData from './../../../fakeData/index';
import { useState } from 'react';

const ProductDetails = () => {
    const [productDetail,setProductDetail] = useState({});
    const {productKey} = useParams();
    
fakeData.find(data=> data.productKey === '1')
console.log(data)


    return (
        <div>
        <h1>this is product details component : {productKey} </h1> 
        <h2>name : {productDetail.name}</h2>
        
        </div>
    );
};

export default ProductDetails;