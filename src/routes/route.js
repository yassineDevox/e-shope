import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Error404 from "../pages/error/404";
import { AuthProvider } from "../auth/context/auth-context";
import ShoppingCards from "../pages/manage/shopping-cards/shopping-cards";

export default function RouterApp() {
  return (
    <Router>
      {/*  step 5 : laison dyale les composants m3a AuthProvider*/}
      <AuthProvider>
        <Switch>
            <Route exact path="/shopping-cart" component={ShoppingCards} />
            <Route path="*" component={Error404} />
          </Switch>
      </AuthProvider>
    </Router>
  );
}
