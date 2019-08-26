import React, { Component } from "react";
import Home from "./components/Home";
import Classes from "./components/Classes";
import Contact from "./components/Contact";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/Contact" component={Contact} />
          <Route path="/Classes" component={Classes} />
          <Route component={Error} />
        </Switch>
      </BrowserRouter>
    );
  }
}
export default App;
