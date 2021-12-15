import React, {useEffect, useContext} from "react";
import {useApiRequest} from './hooks';
import {UserContext} from './context';
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
  // SearchResultsScreen,
  // ServiceDetailScreen,
  // MyProfile,
  // MyServices,
  // FaqsScreen,
  // Categories,
  // HistoryScreen,
  // MissionVision,
  // AboutUs,
} from "./components/screens";
import "./App.css";

function App() {
  const { postRequest } = useApiRequest();
  const { setUserData } = useContext(UserContext);

      
  useEffect(() => {
    const getAuth = async () => {
      const authUser = Object.keys(window.sessionStorage)
        .filter(item => item.startsWith('firebase:authUser'))[0];
      const user = sessionStorage[authUser];
      if (user) {
        const result = await postRequest("user/auth", user)
        result?.user && setUserData(result?.user);
      }
    };
    getAuth();
  }, []);
  return (
    <div className="App">
      <Router>
        <Switch>
          {/* <Route path="/loginGoogle" component={LoginGoogle} />
          <Route path="/login" component={SignInSide} />
          <Route path="/faqs" component={FaqsScreen} />
          <Route path="/about-us" component={AboutUs} />
          <Route path="/results/:query" component={SearchResultsScreen} />
          <Route path="/service-detail/:id" component={ServiceDetailScreen} />
          <Route path="/categories" component={Categories} />
          <Route path="/history" component={HistoryScreen} />
          <Route
            path="/my-profile/my-services/:serviceId"
            component={MyServices}
          />
          <Route path="/my-profile" component={MyProfile} />
          <Route path="/register" component={Register} />
          <Route path="/agenda" component={AgendaSummary} />
          <Route path="/mission-vision" component={MissionVision} />
          <Route path="/time-table" component={TimeTable} />
          <Route path="/resume-booking" component={ResumeBooking} />
          <Route path="/profesional-register" component={ProfesionalRegister} />
          <Route path="/history" component={History} /> */}
          <Route path="/" component={Home} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
