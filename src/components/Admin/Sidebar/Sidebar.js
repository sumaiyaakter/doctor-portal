import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faChartLine, faCalendarCheck, faUserFriends, faFileAlt, faCog } from '@fortawesome/free-solid-svg-icons';
import './Sidebar.css'

const Sidebar = () => {
    return (
        <div className="sidebar">
            <nav>
            <a className="nav-link" href="/doctors/dashboard">
                <div className="sb-nav-link-icon"><FontAwesomeIcon icon={faChartLine} /></div>Dashboard
            </a>
            <a className="nav-link" href="/doctors/appointment">
                <div className="sb-nav-link-icon"><FontAwesomeIcon icon={faCalendarCheck} /></div>Appointment
            </a>
            <a className="nav-link" href="/patients/list">
                <div className="sb-nav-link-icon"><FontAwesomeIcon icon={faUserFriends} /></div>Patients
            </a>
            <a className="nav-link" href="/prescriptions">
                <div className="sb-nav-link-icon"><FontAwesomeIcon icon={faFileAlt} /></div>Prescriptions
            </a>
            <a className="nav-link" href="/doctorsDashboard">
                <div className="sb-nav-link-icon"><FontAwesomeIcon icon={faCog} /></div>Setting
            </a>
            </nav>
        </div>
    );
};

export default Sidebar;