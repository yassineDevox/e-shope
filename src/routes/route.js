import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Error404 from "../pages/error/404";
import HomePage from "../pages/home/home-page";
import { ShoppingCardProvider } from "../shared/shopping-card-context";

export default function RouterApp() {
  return (
    <Router>
      <ShoppingCardProvider>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="*" component={Error404} />
        </Switch>
      </ShoppingCardProvider>
    </Router>
  );
}
