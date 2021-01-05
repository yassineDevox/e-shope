import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Sidebar from "../../components/side-bar/side-bar";
import Error404 from "../error/404";

export default function Admin() {
  return (
    <Router>
      <div class="page-wrapper chiller-theme toggled">
        <Sidebar />
        <main className="page-content">
          <Switch>
            <Route path="*" component={Error404} />
          </Switch>
        </main>
      </div>
    </Router>
  );
}
