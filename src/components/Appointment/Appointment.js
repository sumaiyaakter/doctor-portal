import React, { useState } from 'react';
import 'react-calendar/dist/Calendar.css';
import Services from './Services';
import ModalForm from '../ModalForm/ModalForm';
import DatePicker from './DatePicker';
import Navigation from '../Navigation/Navigation';

const Appointment = () => {
    const [date, setDate] = useState(new Date());
    const onChange = date => {
        setDate(date);
    }

    return (
       
        <div className="appointment">
            <Navigation></Navigation>
            <DatePicker date={date} handleDate={onChange}></DatePicker>
            <div className="container">
                <div className="row">
                    <div className="col-12">

                        <Services date={date}></Services>
                        <ModalForm date={date}></ModalForm>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Appointment;

