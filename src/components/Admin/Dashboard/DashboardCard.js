import React from 'react';
import './DashboardCard.css'

const DashboardCard = (props) => {
    return (
        <div className="col-12 col-md-6 col-xl-3">
            <div className="card">
                <div className="card_body d-lg-flex">
                    <h1>{props.number}</h1>
                    <div>
                        <p>{props.text1}</p>
                        <p>{props.text2}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DashboardCard;