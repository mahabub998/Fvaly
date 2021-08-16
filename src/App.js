import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home/Home";
import ProductDetails from "./Components/Pages/ProductDetails/ProductDetails";
import Products from "./Components/Pages/Products/Products";
import Navbar from "./Components/Shared/Navbar/Navbar";



function App() {
  return (
    <div>
      <Router>
      <Navbar />
        <div>
          <Switch>
            <Route path="/home">
             <Home />
            </Route>
            <Route exact path="/">
             <Home />
            </Route>
            <Route path="/product">
            <Products />
            </Route>
            <Route path="/productDetails/:productKey">
            <ProductDetails />
            </Route>
          </Switch>
        </div>
      
      </Router>
    </div>
  );
}

export default App;
