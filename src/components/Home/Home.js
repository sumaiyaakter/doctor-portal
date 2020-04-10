import React from 'react';
import { Link } from 'react-router-dom';
import Banner from '../../images/hero.png';
import './Home.css'

const Home = () => {
    return (
        <div className="hero">
            <div className="container">
                <div className="row">
                    <div className="col-12 col-lg-6">
                        <h1>Your New Smile Starts Here</h1>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the</p>
                        <Link to="Appointment">
                            <button  className="btn"><span className="btn_text">Get appointment</span></button>
                        </Link>
                    </div>

                    <div className="col-12 col-lg-6">
                         <img src={Banner} alt="" className="img-fluid"/>
                     </div>
                </div>
            </div>
        </div>
    );
};

export default Home; 