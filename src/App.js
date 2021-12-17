import React, {useEffect, useContext} from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { LoginGoogle } from "./components/atoms/";
import {
  SignInSide,
  Register,
  AgendaSummary,
  History,
  ProfesionalRegister,
  TimeTable,
  ResumeBooking,
} from "./components/organisms";
import {
  Home,
  SearchResultsScreen,
  ServiceDetailScreen,
  MyProfile,
  MyServices,
  FaqsScreen,
  Categories,
  HistoryScreen,
  MissionVision,
  AboutUs,
} from "./components/screens";
import "./App.css";

function App() {  
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" component={Home} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
