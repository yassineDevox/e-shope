import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './../pages/home/home'
import ProductDetails from './../pages/product-details/product-details'
import Dashboard from './../pages/dashboard/dashboard'

export default function RouterApp() {
  return (
    <Router>
      <Switch>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/product-details/:id">
          <ProductDetails />
        </Route>
        <Route path="/dashboard">
          <Dashboard />
        </Route>
        <Route path="*">
          <h1>ERROR 404 DEFAULT </h1>
        </Route>
      </Switch>
    </Router>
  );
}
