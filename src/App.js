import React from "react";
import './App.css';
import {BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./component/home";
import Page from "./component/page";

class App extends React.Component {
  render(){
    return (
      <BrowserRouter>
      <Switch>
          <Route exact path ="/" >
            <Home/>
          </Route>
          <Route exact path ="/page">
            <Page/>
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
 
}

export default App;
