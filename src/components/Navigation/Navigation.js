import React from 'react';
import "./Navigation.css";
import { Link } from 'react-router-dom';

const Navigation = () => {
    return (

        <div className="navigation navbar navbar-expand-lg navbar-light bg-light fixed-top">
            <div className="container">
                <div className="row w-100">
                    <div className="col-12">
                        <nav>
                            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="navbar-nav ml-auto">
                                    <li className="nav-item">
                                        <a className="nav-link" href="/">Home</a>
                                    </li>
                                    <Link to="dashboard">

                                        <li className="nav-item">
                                            <a className="nav-link" href="/">Dashboard</a>
                                        </li>
                                    </Link>
                                </ul>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navigation;