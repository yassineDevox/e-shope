import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Error404 from "../pages/error/404";
import Sidebar from "../components/side-bar/side-bar";


export default function RouterApp() {
  return (
    <Router>
        <div class="page-wrapper chiller-theme toggled">
            <Sidebar/>
            <main className="page-content">
                <Switch>
                    <Route path='*' component={Error404}/>
                </Switch>
            </main>   
        </div>
    </Router>
  );
}