import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home/Home";
import ProductDetails from "./Components/Pages/ProductDetails/ProductDetails";
import Products from "./Components/Pages/Products/Products";
import Navbar from "./Components/Shared/Navbar/Navbar";
import NotFound from "./Components/NotFound/NotFound";
import Login from "./Components/Login/Login";
import { createContext,useState } from "react";
import PrivateRoute from "./Components/Shared/PrivateRoute/PrivateRoute";



const userInfo = {
	name: '',
	email: '',
	password: '',
	isValidUser: false
};

export const UserContext = createContext();

function App() {
  // const [loggedInUser,setLoggedInUser] = useState({});
  const [ user, setUser ] = useState(userInfo);

  return (
    <UserContext.Provider value={ [ user, setUser ]}>
     
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
            <PrivateRoute path="/productDetails/:productKey">
            <ProductDetails />
            </PrivateRoute>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="*">
            <NotFound />
            </Route>
          </Switch>
        </div>
         
      </Router>
    </UserContext.Provider>
  );
}

export default App;
