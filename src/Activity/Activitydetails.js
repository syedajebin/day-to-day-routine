import React from 'react';

import './Activitydetails.css'

const Activitydetails = (props) => {
    return (
        <div className='col'>
            <h3 className='my-3'>Activity Details</h3>
            <div className='actives-time card flex-row py-3 px-2'>
                <h4>Activity Time</h4>
                <h6>Minutes</h6>
            </div>
            <div className='actives-time card flex-row py-3 px-2 mt-3'>
                <h4>Break Time</h4>
                <h6>{props.BreakTimes}Minutes</h6>
            </div>
        </div>
    );
};

export default Activitydetails;