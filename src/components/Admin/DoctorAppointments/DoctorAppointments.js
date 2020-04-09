import React, { useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';
import { Table, Button } from 'react-bootstrap';

const DoctorAppointments = () => {
    const [date, setDate] = useState(new Date());
    const onChange = date => {
        setDate(date);
    }
    const options = { year: 'numeric', month: 'long', day: 'numeric' }


    return (
        <div className="layoutSidenav doctor-appointments">
            <Sidebar></Sidebar>
            <div className="sidebar_content">
                <h4>Appointments</h4>

                <div className="d-flex">
                    <div className="calendar">
                        <Calendar onChange={onChange} value={date} />
                    </div>

                    <div className="appointment_date">
                        <div className="d-flex">
                            <h4>Appointments</h4>
                            <p>Date: {date.toLocaleDateString(undefined, options)}</p>
                        </div>
                        <Table>
                            <thead>
                                <tr>
                                <th>Name</th>
                                <th>Schedule</th>
                                <th>Schedule</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Karim Ahmed</td>
                                    <td>7:00 PM</td>
                                    <td><Button>Not visited</Button></td>
                                </tr>
                              
                                <tr>
                                    <td>Karim Ahmed</td>
                                    <td>10:00 PM</td>
                                    <td><Button>Not visited</Button></td>
                                </tr>
                              
                                <tr>
                                    <td>Karim Ahmed</td>
                                    <td>6:00 PM</td>
                                    <td><Button>Not visited</Button></td>
                                </tr>
                              
                            </tbody>
                        </Table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DoctorAppointments;