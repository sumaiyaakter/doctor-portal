import React from 'react';
import Sidebar from '../Sidebar/Sidebar';
import { TableContainer, Table, TableHead, TableRow, TableCell, TableBody, Paper } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';


const PatientsList = () => {
    // calendar start
    const [selectedDate, setSelectedDate] = React.useState(new Date('09/04/2020'));

    const handleDateChange = (date) => {
      setSelectedDate(date);
    };
    // calendar end

    // table start
          function createData(name, gender, age, weight, contact, address, ages) {
            return { name, gender, age, weight, contact, address, ages };
          }
          
          const rows = [
            createData('01','Karim Ahmed', 'Male', 20, 50, '0123456789', 'South Gazirchar, Savar, Dhaka'),
            createData('02','Karim Ahmed', 'Male', 20, 50, '0123456789', 'South Gazirchar, Savar, Dhaka'),
            createData('03','Karim Ahmed', 'Male', 20, 50, '0123456789', 'South Gazirchar, Savar, Dhaka'),
            createData('04','Karim Ahmed', 'Male', 20, 50, '0123456789', 'South Gazirchar, Savar, Dhaka'),
            createData('05','Karim Ahmed', 'Male', 20, 50, '0123456789', 'South Gazirchar, Savar, Dhaka'),
            createData('06','Karim Ahmed', 'Male', 20, 50, '0123456789', 'South Gazirchar, Savar, Dhaka'),
          ];
    // table end

    return (
        <div className="layoutSidenav dashboard">
            <Sidebar></Sidebar>
            <div className="sidebar_content">
                <h4>Patients</h4>
                {/* table start */}
                <div className="">
                    <div className="d-flex">
                    <h5>All Patients</h5>
                            {/* calendar start */}
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
                        {/* calendar end */}
                        </div>
                    <TableContainer component={Paper}>
                        <Table aria-label="simple table">
                            <TableHead>
                            <TableRow>
                                <TableCell>Sr. No</TableCell>
                                <TableCell align="left">Name</TableCell>
                                <TableCell align="left">Gender</TableCell>
                                <TableCell align="left">Age</TableCell>
                                <TableCell align="left">weight&nbsp;(g)</TableCell>
                                <TableCell align="left">Contact</TableCell>
                                <TableCell align="left">Address</TableCell>
                            </TableRow>
                            </TableHead>
                            <TableBody>
                            {rows.map((row) => (
                                <TableRow>
                                    <TableCell>{row.name}</TableCell>
                                    <TableCell align="left">{row.gender}</TableCell>
                                    <TableCell align="left">{row.age}</TableCell>
                                    <TableCell align="left">{row.weight}</TableCell>
                                    <TableCell align="left">{row.contact}</TableCell>
                                    <TableCell align="left">{row.address}</TableCell>
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

export default PatientsList;