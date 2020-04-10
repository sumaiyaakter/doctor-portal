import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faChartLine, faCalendarCheck, faUserFriends, faFileAlt, faCog, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
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
                <a href="/" className="nav-link" >
                    Go back Home page
                </a>
                </li>

                <li  onClick={()=> selectedItem ("Dashboard") } >
                <a href="/dashboard" className="nav-link" >
                    <span  className={`${activeMenu === "Dashboard" ? "active" : " "}`}>
                    <div className="sidebar-icon"><FontAwesomeIcon icon={faChartLine} /></div>
                    Dashboard 
                    </span>
                </a>
                </li>

                <li  onClick={()=> selectedItem ("Appointment") } >
                <a href="/doctorsAppointment" className="nav-link" >
                    <span  className={`${activeMenu === "Appointment" ? "active" : " "}`}>
                    <div className="sidebar-icon"><FontAwesomeIcon icon={faCalendarCheck} /></div>
                    Appointment 
                    </span>
                </a>
                </li>

                <li  onClick={()=> selectedItem ("Patients") } >
                <a href="/patientsList" className="nav-link" > 
                    <span  className={`${activeMenu === "Patients" ? "active" : " "}`}>
                    <div className="sidebar-icon"><FontAwesomeIcon icon={faUserFriends} /></div>
                    Patients 
                    </span>
                </a>
                </li>

                <li  onClick={()=> selectedItem ("Prescriptions") } >
                <a href="/prescriptions" className="nav-link" > 
                    <span  className={`${activeMenu === "Prescriptions" ? "active" : " "}`}>
                    <div className="sidebar-icon"><FontAwesomeIcon icon={faFileAlt} /></div>
                    Prescriptions 
                    </span>
                </a>
                </li>

                <li  onClick={()=> selectedItem ("Setting") } >
                <a href="/setting" className="nav-link" >
                    <span id="d-flex" className={`${activeMenu === "Setting" ? "active" : " "}`}>
                    <div className="sidebar-icon"><FontAwesomeIcon icon={faCog} /></div>
                    Setting 
                    </span>
                </a>
                </li>

                <li  onClick={()=> selectedItem ("Log Out") } >
                <a href="/logout" className="nav-link" >
                    <span id="d-flex" className={`${activeMenu === "Log Out" ? "active" : " "}`}>
                    <div className="sidebar-icon"><FontAwesomeIcon icon={faSignOutAlt} /></div>
                    Log Out 
                    </span>
                </a>
                </li>

            </nav>
        </div>
    );
};

export default Sidebar;