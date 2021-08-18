import React from "react";
import Products from "../Pages/Products/Products";
import Footer from "../Shared/Footer/Footer";
import Header from './../Shared/Header/Header';


const Home = () => {
  return (
    <div className="">
    <Header />
      <Products />
      <Footer />
    </div>
  );
};

export default Home;
