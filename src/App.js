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
import Setting from './components/Admin/Setting/Setting';
import Logout from './components/Admin/Logout/Logout';
import Error from './components/Error/Error';

function App() {
  return (
    <div className="App">
        <Router>
          <Switch>
            <Route path="/appointment">
              <Appointment></Appointment>
            </Route>

            <Route path="/service">
              <Appointment></Appointment>
            </Route>

            <Route path="/dashboard">
              <Dashboard></Dashboard>
            </Route>

            <Route path="/doctorsAppointment">
              <DoctorAppointments></DoctorAppointments>
            </Route>

            <Route path="/patientsList">
              <PatientsList></PatientsList>
            </Route>

            <Route path="/prescriptions">
              <Prescriptions></Prescriptions>
            </Route>

            <Route path="/setting">
              <Setting></Setting>
            </Route>

            <Route path="/logout">
              <Logout></Logout>
            </Route>
       
            <Route exact path="/">
            <Navigation></Navigation>
             <Home></Home>
            </Route>

            <Route  path="*">
             <Error></Error>
            </Route>

          </Switch>
        </Router>
        
    </div>
  );
}
export default App;
