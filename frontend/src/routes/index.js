import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LandingPage from "../pages/LandingPage";
import { Home } from "../components/Home/home.js";
import UserProfile from "../components/UserProfile/userProfile";
import { SignUp } from "../components/SignUp/SignUp";

export const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route path='/signup' component={SignUp} exact />
        <Route path="/" component={LandingPage} exact />
        <Route path="/home" component={Home} />
        <Route exact path="/user-profile" component={UserProfile} />
      </Switch>
    </Router>
  );
};
