import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Error404 from "../error/404";
import Customers from "../manage/customers/customers";
import Products from "../manage/products/products";
import Categories from "../manage/categories/categories";
import Orders from "../manage/orders/orders";
import ShoppingCards from "../manage/shopping-cards/shopping-cards";
import DashboardPage from "../dashboard/dashboard";
import Sidebar from "../../components/side-bar/side-bar";
const ADMIN = "/admin";
export default function AdminPage() {
  return (
    <Router>
      <div class="page-wrapper chiller-theme toggled">
        <Sidebar />
        <main className="page-content">
          <Switch>
            <Route exact path={ADMIN} component={DashboardPage} />
            <Route path={`${ADMIN}/customers`} component={Customers} />
            <Route path={`${ADMIN}/products`} component={Products} />
            <Route path={`${ADMIN}/categories`} component={Categories} />
            <Route path={`${ADMIN}/orders`} component={Orders} />
            <Route path={`${ADMIN}/shopping-cards`} component={ShoppingCards} />
            <Route path="*" component={Error404} />
          </Switch>
        </main>
      </div>
    </Router>
  );
}
