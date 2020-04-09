import React from 'react';
import Sidebar from '../Sidebar/Sidebar';
import DashboardCard from './DashboardCard';
import MaterialTable from 'material-table';
import './Dashboard.css'

const Dashboard = () => {
    const cards = [
        {
            number: '10',
            text: 'Pending Appointments',
        },
        {
            number: '19',
            text: 'Today’s  Appointments',
        },
        {
            number: '34',
            text: 'total Appointments',
        },
        {
            number: '78',
            text: 'Total  Patients',
        },
     
        
    ]

    // Table
    const [state, setState] = React.useState({
        columns: [
            { title: 'no', field: 'no' },
            { title: 'date', field: 'date' },
            { title: 'time', field: 'time' },
            { title: 'name', field: 'name' },
            { title: 'contact', field: 'contact' },
    
        ],

        data: [
            { 
                no: '01',
                date: '15-04-2020',
                time: '3:00 PM', name: 'Karim Ahmed',
                contact: '+0170000000', 
            },
            { 
                no: '02',
                date: '29-04-2020',
                time: '5:00 PM', name: 'aa',
                contact: '+0170000000', 
            },
        ],
      });

    return (
        <div className="layoutSidenav dashboard">
            <Sidebar></Sidebar>
            <div className="sidebar_content">
                <h4>Dashboard</h4>

                
                <div className="card__v2 d-flex">
                {
                    cards.map(card =>  
                    <DashboardCard
                    number = {card.number}
                    text = {card.text}
                    ></DashboardCard>)
                }
                </div>
               
               {/* start */}
               <MaterialTable
                    title="Editable Example"
                    columns={state.columns}
                    data={state.data}
                    editable={{
                        onRowAdd: (newData) =>
                        new Promise((resolve) => {
                            setTimeout(() => {
                            resolve();
                            setState((prevState) => {
                                const data = [...prevState.data];
                                data.push(newData);
                                return { ...prevState, data };
                            });
                            }, 100);
                        }),
                        onRowUpdate: (newData, oldData) =>
                        new Promise((resolve) => {
                            setTimeout(() => {
                            resolve();
                            if (oldData) {
                                setState((prevState) => {
                                const data = [...prevState.data];
                                data[data.indexOf(oldData)] = newData;
                                return { ...prevState, data };
                                });
                            }
                            }, 600);
                        }),
                        onRowDelete: (oldData) =>
                        new Promise((resolve) => {
                            setTimeout(() => {
                            resolve();
                            setState((prevState) => {
                                const data = [...prevState.data];
                                data.splice(data.indexOf(oldData), 1);
                                return { ...prevState, data };
                            });
                            }, 600);
                        }),
                    }}
                />
               {/* end */}

            </div>
        </div>
    );
};

export default Dashboard;