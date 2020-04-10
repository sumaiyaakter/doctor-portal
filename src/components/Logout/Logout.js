import React from 'react';
import { Form } from 'react-bootstrap';
import './Logout.css'
import Navigation from '../Navigation/Navigation';

const Logout = () => {
    return (
        <div className="logout">
            <Navigation></Navigation>
            <div className="container">
                <div className="row">
                    <div className="col-12 col-lg-6 mx-auto">
                        <form  className="w-100 logout_form">
                            <Form.Group controlId="formGroupName">
                                <Form.Control type="name" placeholder="user name" />
                            </Form.Group>
                            <Form.Group controlId="formGroupPassword">
                                <Form.Control type="password" placeholder="Password" />
                            </Form.Group>
                            <div className="text-right w-100">
                                <button type="submit" className="btn submit-btn w-100">sign in</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Logout;