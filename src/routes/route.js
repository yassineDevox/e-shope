import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Error404 from "../pages/error/404";
import Customers from "../pages/manage/customers/customers";
import Products from "../pages/manage/products/products";
import Categories from "../pages/manage/categories/categories";
import Orders from "../pages/manage/orders/orders";
import ShoppingCards from "../pages/manage/shopping-cards/shopping-cards";
import AuthPage from "../auth/auth";


export default function RouterApp() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={AuthPage} />
        <Route exact path="/admin/customers" component={Customers} />
        <Route path="/admin/products" component={Products} />
        <Route path="/admin/categories" component={Categories} />
        <Route path="/admin/orders" component={Orders} />
        <Route path="/admin/shopping-cards" component={ShoppingCards} />
        <Route path="*" component={Error404} />
      </Switch>
    </Router>
  );
}
