import React from 'react';
import Sidebar from '../Sidebar/Sidebar';
import { TableContainer, Table, TableHead, TableRow, TableCell, TableBody, Paper } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import './Prescriptions.css'

const Prescriptions = () => {
     // calendar start
     const [selectedDate, setSelectedDate] = React.useState(new Date('09/04/2020'));

     const handleDateChange = (date) => {
       setSelectedDate(date);
     };
     // calendar end
 
     // table start
           function createData(name, date, contact, prescription, ages) {
             return { name, date, contact, prescription, ages };
           }
           
           const rows = [
             createData('01', '27-02-2020', 'Karim Ahmed', '+0170000000', <button className="btn">view</button>),
             createData('01', '28-02-2020', 'Karim Ahmed', '+0170000000', <button className="btn">view</button>),
             createData('01', '29-02-2020', 'Karim Ahmed', '+0170000000', <button className="btn">view</button>),
             createData('01', '27-03-2020', 'Karim Ahmed', '+0170000000', <button className="btn">view</button>),
             createData('01', '27-04-2020', 'Karim Ahmed', '+0170000000', <button className="btn">view</button>),
           ];
     // table end
    return (
        <div className="layoutSidenav dashboard">
        <Sidebar></Sidebar>
        <div className="sidebar_content">
            <h4>Prescriptions</h4>
            {/* table start */}
            <div className="prescription">
                <div className="d-flex justify-content-between align-items-center pb-4">
                <h5>All Prescriptions</h5>
                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                        <Grid container justify="space-around">
                            <KeyboardDatePicker
                            disableToolbar
                            format="MM/dd/yyyy"
                            id="date-picker-inline"
                            value={selectedDate}
                            onChange={handleDateChange}
                            KeyboardButtonProps={{
                                'aria-label': 'change date',
                            }}/>
                        </Grid>
                    </MuiPickersUtilsProvider>
                </div>
                <TableContainer component={Paper}>
                    <Table aria-label="simple table">
                        <TableHead>
                        <TableRow>
                            <TableCell>Sr. No</TableCell>
                            <TableCell align="left">Date</TableCell>
                            <TableCell align="left">Name</TableCell>
                            <TableCell align="left">Contact</TableCell>
                            <TableCell align="left">Prescription</TableCell>
                        </TableRow>
                        </TableHead>
                        <TableBody>
                        {rows.map((row) => (
                            <TableRow>
                                <TableCell>{row.name}</TableCell>
                                <TableCell align="left">{row.date}</TableCell>
                                <TableCell align="left">{row.contact}</TableCell>
                                <TableCell align="left">{row.prescription}</TableCell>
                                <TableCell align="left">{row.ages}</TableCell>
                            </TableRow>
                        ))}
                        </TableBody>
                    </Table>
                </TableContainer>
           
            </div>
            {/* table end */}
        </div>
    </div>
        );
};

export default Prescriptions;