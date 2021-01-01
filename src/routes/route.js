import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./../pages/home/home";
import ProductDetails from "./../pages/product-details/product-details";
import Dashboard from "./../pages/dashboard/dashboard";
import Header from "../shared/Header/header";
import Footer from "../shared/footer/footer";
import Error404 from "../pages/error/404";
import ShoppingCard from "../pages/shoping-card/shopping-card";

export default function RouterApp() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/admin" component={Dashboard} />
        <Route path="/shopping-card" component={ShoppingCard} />
        <Route path="/product-details/:id" component={ProductDetails} />
        <Route path='*' component={Error404}/>
      </Switch>
      <Footer />
    </Router>
  );
}
