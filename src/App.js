import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home/Home";
import ProductDetails from "./Components/Pages/ProductDetails/ProductDetails";
import Products from "./Components/Pages/Products/Products";
import Navbar from "./Components/Shared/Navbar/Navbar";
import Footer from './Components/Shared/Footer/Footer';
import NotFound from "./Components/NotFound/NotFound";
import Login from "./Components/Login/Login";
import { createContext,useState } from "react";
import PrivateRoute from "./Components/Shared/PrivateRoute/PrivateRoute";

export const UserContext = createContext();

function App() {
  const [loggedInUser,setLoggedInUser] = useState({});

  return (
    <UserContext.Provider value={[loggedInUser,setLoggedInUser]}>
     <p>name : {loggedInUser.name}</p> 
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
            <Route path="/login">
              <Login />
            </Route>
            <Route path="*">
            <NotFound />
            </Route>
          </Switch>
        </div>
      <Footer />
      </Router>
    </UserContext.Provider>
  );
}

export default App;
