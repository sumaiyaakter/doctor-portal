import React from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import Banner from '../../images/hero.png';
import './DatePicker.css';

const DatePicker = (props
    ) => {
    return (
        <div className="hero">
             <div className="container">
                 <div className="row">
                     <div className="col-12">
                         <h1 className="title mb-5">Appointment</h1>
                     </div>
                     <div className="col-12 col-lg-6 mb-4 mb-lg-0">
                        <Calendar
                            onChange={d => props.handleDate(d)}
                            value={props.date}
                            minDate={new Date()}
                            maxDate={new Date(2020,11,31)}
                            minDetail={'year'}/>
                     </div>

                     <div className="col-12 col-lg-6">
                         <img src={Banner} alt="" className="img-fluid"/>
                     </div>
                 </div>
             </div>
        </div>
    );
};

export default DatePicker;