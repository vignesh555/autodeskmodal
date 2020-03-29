import React from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";

import Documentation from "./Documentation";
import DeveloperGuide from "./DeveloperGuide";
import Intro from "./Intro";
import Reference from "./Reference";

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/developer/documentation" component={Documentation} />
        <Route path="/developer/en/api/:pageTitle/intro" component={Intro} />
        <Route path="/developer/en/api/:pageTitle/guide" component={DeveloperGuide} />
        <Route path="/developer/en/api/:pageTitle/reference" component={Reference} />
        <Redirect path="/" to="/developer/documentation" />
      </Switch>
    </Router>
  );
}
