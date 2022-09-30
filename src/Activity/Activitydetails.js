import React, { useEffect, useState } from 'react';

import './Activitydetails.css'

const Activitydetails = (props) => {
    
    console.log("Card Time props ",props.cardTime)
    let totalTime = 0;
    for (let i = 0; i < props.cardTime.length; i++) {
        totalTime += parseInt(props.cardTime[i]);
    }
    console.log(totalTime)
    
    return (
        <div className='col'>
            <h3 className='my-3'>Activity Details</h3>
            <div className='actives-time card flex-row py-3 px-2'>
                <h4 className='fw-bold'>Activity Time</h4>
                <h6>{totalTime} Minutes</h6>
            </div>
            <div className='actives-time card flex-row py-3 px-2 mt-3'>
                <h4 className='fw-bold'>Break Time</h4>
                <h6>{props.BreakTimes} Minutes</h6>
            </div>
        </div>
    );
};

export default Activitydetails;