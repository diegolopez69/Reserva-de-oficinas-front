import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {
  Home,
  Floor,
  FloorTwo,
  Availability,
  BookingMovil,
  BookingFinished,
  BookingHome
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
          <Route path="/bookingMovil" component={ BookingMovil } />
          <Route path="/bookingFinished" component={ BookingFinished } />
          <Route path="/login" component={ BookingHome } />
          <Route path="/" component={ Home } />
          
        </Switch>
      </Router>
    </div>
  );
}

export default App;
