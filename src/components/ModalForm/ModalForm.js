import React from 'react';
import  Modal  from 'react-modal';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import { Form } from 'react-bootstrap';
import './ModalForm.css'
import { Link } from 'react-router-dom';


const currencies = [
    {
      value: 'a',
      label: '8:00 AM - 9:00 AM',
    },
    {
      value: 'b',
      label: '10:05 am – 11:30 am',
    },
    {
      value: 'c',
      label: '5:00 PM - 6:30 PM',
    },
    {
      value: 'd',
      label: '7:00 PM - 8:30 PM',
    },
    {
      value: 'e',
      label: '8:00 PM - 9:00 PM',
    },
    {
      value: 'f',
      label: '9:00 PM - 10:00 PM',
    },
];
  

const ModalForm = (props) => {

const [currency, setCurrency] = React.useState('a');

const handleChange = (event) => {
    setCurrency(event.target.value);
};

    return (
        <div>
            <Modal
                 isOpen={props.modalIsOpen} 
                 onRequestClose={props.closeModal}>

                <button className="close-btn" 
                    onClick={()=>props.closeModal(props.closeModal)}>×
                </button>
                <form  noValidate autoComplete="off" className="w-100">
                    <div className="select-time">
                        <TextField
                        id="standard-select-currency"
                        select
                        value={currency}
                        onChange={handleChange}
                        >
                        {currencies.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                            {option.label}
                            </MenuItem>
                        ))}
                        </TextField>
                    
                    </div>
                    <Form.Group controlId="formGroupName">
                        <Form.Control type="name" placeholder="your name" />
                    </Form.Group>
                    <Form.Group controlId="formGroupEmail">
                        <Form.Control type="email" placeholder="email" />
                    </Form.Group>
                    <Form.Group controlId="formGroupPassword">
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Form.Group controlId="formGroupPhone">
                        <Form.Control type="text" placeholder="phone number" />
                    </Form.Group>
                    <Link to="/">
                        <div className="text-right">
                            <button type="submit" className="btn submit-btn">send</button>
                        </div>
                    </Link>
                    </form>
            </Modal>
        </div>
    );
};

export default ModalForm;


