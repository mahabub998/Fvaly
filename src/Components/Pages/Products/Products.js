import React, { useEffect, useState } from "react";
import ProductShow from "../ProductsShow/ProductsShow";
import fakeData from "./../../../fakeData/index";

const Products = () => {
  console.log(fakeData);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(fakeData);
  }, []);

  return (
    <div className="row w-100">
   
      {
          products.map((product) => ( <ProductShow product={product}></ProductShow>))
       
    }
    </div>
  );
};

export default Products;
