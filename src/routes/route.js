import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Error404 from "../pages/error/404";
import SigninPage from "../pages/signin/signin";
import SignupPage from "../pages/signup/signup";
import Admin from './../pages/admin/admin';

export default function RouterApp() {
  return (
    <Router>
      <Switch>
        
        <Route exact path="/" component={SigninPage} />
        <Route path="/register" component={SignupPage} />
        <Route path="/admin" component={Admin} />

        <Route path="*" component={Error404} />
      </Switch>
    </Router>
  );
}
