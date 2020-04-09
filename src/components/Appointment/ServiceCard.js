import React from 'react';

const ServiceCard = (props) => {


    return (
        <div className="card card__v1 text-center">
            <div className="card-body">
                <h3 className="cart-title">{props.title}</h3>
                <h4 className="time">{props.time}</h4>
                <p className="cart-text">{props.shortContent}</p>
                <button className="btn" 
                    onClick={()=>props.openModal(props.title)}>Book Appointment
                </button>
            </div>
        </div>
    );
};

export default ServiceCard;