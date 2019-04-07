import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Navigation from "./components/ui/Navigation";
import Home from "./components/routes/Home";
import ClassBased from "./components/routes/ClassBased";

const App = () => (
  <BrowserRouter>
    <Navigation />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/class" component={ClassBased} />
    </Switch>
  </BrowserRouter>
);

export default App;
