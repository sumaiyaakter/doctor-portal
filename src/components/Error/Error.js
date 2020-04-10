import React from 'react';
import Navigation from '../Navigation/Navigation';
import './Error.css'

const Error = () => {
    return (
        <div className="error">
            <Navigation></Navigation>
            <div className="container">
                <div className="row">
                    <div className="col-12 text-center">
                        <h1>404</h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Error;