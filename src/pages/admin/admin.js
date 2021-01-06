import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Sidebar from "../../components/side-bar/side-bar";
import Error404 from "../error/404";
import Customers from "../manage/customers/customers";
import Products from "../manage/products/products";
import Categories from "../manage/categories/categories";
import Orders from "../manage/orders/orders";

export default function Admin() {
  return (
    <Router>
      <div class="page-wrapper chiller-theme toggled">
        <Sidebar />
        <main className="page-content">
          <Switch>
            <Route path="/admin/customers" component={Customers} />
            <Route path="/admin/products" component={Products} />
            <Route path="/admin/categories" component={Categories} />
            <Route path="/admin/orders" component={Orders} />
            <Route path="*" component={Error404} />
          </Switch>
        </main>
      </div>
    </Router>
  );
}
