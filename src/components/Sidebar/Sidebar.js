import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faChartLine, faCalendarCheck, faUserFriends, faFileAlt, faCog, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import './Sidebar.css'

const Sidebar = () => {
    const [activeMenu, setActiveMenu] = useState("Dashboard");

    const selectedItem =(value) =>{
        setActiveMenu(value);
    }
    useEffect(()=> {
        selectedItem('Dashboard')
    }, [])


    return (
        <div className="sidebar">
            <nav>
                <li>
                <Link to="/" className="nav-link" >
                    Go back Home page
                </Link>
                </li>

                <li  onClick={()=> selectedItem ("Dashboard") } >
                <Link to="/dashboard" className="nav-link" >
                    <span  className={`${activeMenu === "Dashboard" ? "active" : " "}`}>
                    <div className="sidebar-icon"><FontAwesomeIcon icon={faChartLine} /></div>
                    Dashboard 
                    </span>
                </Link>
                </li>

                <li  onClick={()=> selectedItem ("Appointment") } >
                <Link to="/doctorsAppointment" className="nav-link" >
                    <span  className={`${activeMenu === "Appointment" ? "active" : " "}`}>
                    <div className="sidebar-icon"><FontAwesomeIcon icon={faCalendarCheck} /></div>
                    Appointment 
                    </span>
                </Link>
                </li>

                <li  onClick={()=> selectedItem ("Patients") } >
                <Link to="/patientsList" className="nav-link" > 
                    <span  className={`${activeMenu === "Patients" ? "active" : " "}`}>
                    <div className="sidebar-icon"><FontAwesomeIcon icon={faUserFriends} /></div>
                    Patients 
                    </span>
                </Link>
                </li>

                <li  onClick={()=> selectedItem ("Prescriptions") } >
                <Link to="/prescriptions" className="nav-link" > 
                    <span  className={`${activeMenu === "Prescriptions" ? "active" : " "}`}>
                    <div className="sidebar-icon"><FontAwesomeIcon icon={faFileAlt} /></div>
                    Prescriptions 
                    </span>
                </Link>
                </li>

                <li  onClick={()=> selectedItem ("Setting") } >
                <Link to="/setting" className="nav-link" >
                    <span id="d-flex" className={`${activeMenu === "Setting" ? "active" : " "}`}>
                    <div className="sidebar-icon"><FontAwesomeIcon icon={faCog} /></div>
                    Setting 
                    </span>
                </Link>
                </li>

                <li  onClick={()=> selectedItem ("Log Out") } >
                <Link to="/logout" className="nav-link" >
                    <span id="d-flex" className={`${activeMenu === "Log Out" ? "active" : " "}`}>
                    <div className="sidebar-icon"><FontAwesomeIcon icon={faSignOutAlt} /></div>
                    Log Out 
                    </span>
                </Link>
                </li>

            </nav>
        </div>
    );
};

export default Sidebar;