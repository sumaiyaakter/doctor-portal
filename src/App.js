import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './components/Home/Home';
import Appointment from './components/Appointment/Appointment';
import Navigation from './components/Navigation/Navigation';
import Dashboard from './components/Admin/Dashboard/Dashboard';
import DoctorAppointments from './components/Admin/DoctorAppointments/DoctorAppointments';
import PatientsList from './components/Admin/PatientsList/PatientsList';
import Prescriptions from './components/Admin/Prescriptions/Prescriptions';

function App() {
  return (
    <div className="App">
        {/* <Navigation></Navigation> */}
        <Router>
          <Switch>
            <Route path="/appointment">
              <Appointment></Appointment>
            </Route>

            <Route path="/doctors/dashboard">
              <Dashboard></Dashboard>
            </Route>

            <Route path="/doctors/appointment">
              <DoctorAppointments></DoctorAppointments>
            </Route>

            <Route path="/patients/list">
              <PatientsList></PatientsList>
            </Route>

            <Route path="/prescriptions">
              <Prescriptions></Prescriptions>
            </Route>
       
            <Route exact path="/">
            <Navigation></Navigation>
             <Home></Home>
            </Route>

          </Switch>
        </Router>
        
    </div>
  );
}

export default App;
