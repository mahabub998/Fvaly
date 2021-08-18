import React, { useEffect, useState } from "react";
import ProductShow from "../ProductsShow/ProductsShow";
import fakeData from "./../../../fakeData/index";

const Products = () => {
  const first20 = fakeData.slice(0,20)
  const [products, setProducts] = useState(first20);

  
  // useEffect(() => {
  //   setProducts(fakeData);
  // }, []);

  return (
    <div className="row w-100 bg-gray">
      
      {
          products.map((product) => ( <ProductShow product={product}></ProductShow>))
       
    }
    </div>
  );
};

export default Products;
