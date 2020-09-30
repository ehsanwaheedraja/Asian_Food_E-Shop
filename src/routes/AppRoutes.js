import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Home from "../pages/Home";
import ProductDetailed from "../pages/ProductDetailed";
import About from "../pages/About";
import FAQ from "../pages/FAQ";
import Contact from "../pages/Contact";
import Register from "../pages/Register";
import Login from "../pages/Login";
import Desserts from "../pages/Desserts";
import AsianTraditionalFood from "../pages/Asian-Traditional-Food";
import Spices from "../pages/Spices";
import Lentils from "../pages/lentils-rices-flours";
import Dashboard from "../pages/Dashboard";
import ShoppingCart from "../pages/ShoppingCart";
import DetailedProduct from "../pages/DetailedProductPage";
import Checkout from "../pages/Checkout";
import Search from "../pages/Search";

import ConfirmationPage from "../pages/ConfirmationOrder"

import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";

toast.configure();


export const AppRouter = () => {
  const checkAuthenticated = async () => {
    try {
      const res = await fetch("http://localhost:5000/authentication/verify", {
        method: "POST",
        headers: { jwt_token: localStorage.token },
      });

      const parseRes = await res.json();

      parseRes === true ? setIsAuthenticated(true) : setIsAuthenticated(false);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    checkAuthenticated();
  }, []);

  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const setAuth = (boolean) => {
    setIsAuthenticated(boolean);
  };
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/product-detail" component={ProductDetailed} />
        <Route exact path="/About" component={About} />
        <Route exact path="/FAQ" component={FAQ} />
        <Route exact path="/Contact" component={Contact} />
        <Route exact path="/categories/Desserts" component={Desserts} />
        <Route
          exact
          path="/categories/Traditional-Food"
          component={AsianTraditionalFood}
        />
        <Route exact path="/categories/Spices" component={Spices} />
        <Route
          exact
          path="/categories/Lentils-Rice-Flour"
          component={Lentils}
        />
        <Route exact path="/ShoppingCart" component={ShoppingCart} />
        <Route exact path="/DetailedProduct/:id" component={DetailedProduct} />
        <Route exact path="/checkout" component={Checkout} />
        <Route exact path="/ConfirmationOrder" component={ConfirmationPage}/>
        <Route exact path="/Search" component={Home} />
        <Route exact path="/Search/:product" component={Search} />
        <Route
          exact
          path="/register"
          render={(props) =>
            !isAuthenticated ? (
              <Register {...props} setAuth={setAuth} />
            ) : (
              <Redirect to="/dashboard" />
            )
          }
        />
        <Route
          exact
          path="/login"
          render={(props) =>
            !isAuthenticated ? (
              <Login {...props} setAuth={setAuth} />
            ) : (
              <Redirect to="/dashboard" />
            )
          }
        />
        <Route
          exact
          path="/dashboard"
          render={(props) =>
            isAuthenticated ? (
              <Dashboard {...props} setAuth={setAuth} />
            ) : (
              <Redirect to="/login" />
            )
          }
        />
      </Switch>
    </Router>
  );
};
