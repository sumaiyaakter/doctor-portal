import React from 'react';

const DashboardCard = (props) => {
    return (
        <div className="card">
            <div className="card_body d-flex">
                <h1>{props.number}</h1>
                <p>{props.text}</p>
            </div>
        </div>
    );
};

export default DashboardCard;