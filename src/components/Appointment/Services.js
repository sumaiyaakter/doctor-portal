import React, { useState }  from 'react';
import ServiceCard from './ServiceCard';
import ModalForm from '../ModalForm/ModalForm';
import './Service.css'


const Services = (props) => {
    
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [appointmentInfo, setAppointmentInfo] = useState({});

    const openModal = (title) => {
        setAppointmentInfo({title})
        setModalIsOpen(true)
    }
    
    const closeModal = () => {
        setModalIsOpen(false)
    }

    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }

    const services = [
        {
            title: 'Teeth Orthodontics',
            time: '8:00 AM - 9:00 AM',
            shortContent: '10 SPACES AVAILABLE',
        },
        {
            title: 'Cosmetic Dentistry',
            time: '10:05 am – 11:30 am',
            shortContent: '10 SPACES AVAILABLE',
        },
        {
            title: 'Teeth Cleaning',
            time: '5:00 PM - 6:30 PM',
            shortContent: '10 SPACES AVAILABLE',
        },
        {
            title: 'Cavity Protection',
            time: '7:00 PM - 8:30 PM',
            shortContent: '10 SPACES AVAILABLE',
        },
        {
            title: 'Teeth Orthodontics',
            time: '8:00 PM - 9:00 PM',
            shortContent: '10 SPACES AVAILABLE',
        },
        {
            title: 'Teeth Orthodontics',
            time: '9:00 PM - 10:00 PM',
            shortContent: '10 SPACES AVAILABLE',
        },
        
    ]

    return (
        <div className="services section-padding">
            <div className="container">
                <div className="row">
                    <div className="col-12 text-center">
                        <h2 className="title">Available Appointments on {props.date.toLocaleDateString(undefined, options)}</h2>
                    </div>
                    
                    {
                        services.map(service =>  
                            <div className="col-12 col-md-6 col-lg-4">
                            <ServiceCard
                                title = {service.title}
                                time = {service.time}
                                shortContent = {service.shortContent}
                                openModal={openModal}
                            ></ServiceCard>
                        </div>)
                    }
                <ModalForm
                    modalIsOpen={modalIsOpen}
                    closeModal={closeModal}
                    appointmentInfo={appointmentInfo}>
                </ModalForm>

                </div>
            </div>

        </div>
    );
};

export default Services;