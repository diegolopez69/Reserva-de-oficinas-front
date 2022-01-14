import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {
  Home,
  Floor,
  FloorTwo,
  Availability,
  LoginMovil
} from "./components/screens";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/floor" component={ Floor } />
          <Route path="/floorTwo" component={ FloorTwo }/>
          <Route path="/floorTwoClass" component={ Availability }/>          
          <Route path="/login" component={ LoginMovil } />
          <Route path="/" component={ Home } />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
