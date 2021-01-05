import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Error404 from "../pages/error/404";

export default function RouterApp() {
  return (
    <Router>
            <Switch>
              <Route path="*" component={Error404} />
            </Switch>
    </Router>
  );
}
