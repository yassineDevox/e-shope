import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./../pages/home/home";
import ProductDetails from "./../pages/product-details/product-details";
import Dashboard from "./../pages/dashboard/dashboard";
import Header from "../shared/Header/header";
import Footer from "../shared/footer/footer";

export default function RouterApp() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/home">
          <Home />
        </Route>
        <Route path="/product-details/:id">
          <ProductDetails />
        </Route>
        <Route path="/dashboard">
          <Dashboard />
        </Route>
        <Route path="/dashboard">
          <Dashboard />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}
