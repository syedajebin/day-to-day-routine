import React, { useEffect, useState } from 'react';
import Activitydetails from '../../Activity/Activitydetails';
import { addToDb } from '../../utilities/database';
import './Addbreak.css'

const Addbreak = (props) => {
    console.log(props)
    const [BreakTimes, setBreakTimes] = useState(0)
    const takesTime = (e) => {
        const getTimes = e.target.innerText;
        setBreakTimes(getTimes.slice(0, 2))
        addToDb(BreakTimes)
    }
    
    useEffect(() => {

        let getTheData = localStorage.getItem('Time');
        getTheData = JSON.parse(getTheData);
       
        setBreakTimes(getTheData);
    }, [])

    console.log(BreakTimes)
    return (
        <div className='col'>
            <div className='row flex-column'>
                <div className='col'>
                    <h3 className='fw-bold'>Add A Break</h3>
                    <div className='times-circle'>
                        <button onClick={takesTime} className=" mx-1 btn-circless">10 M</button>
                        <button onClick={takesTime} className=" mx-1 btn-circless">20 M</button>
                        <button onClick={takesTime} className=" mx-1 btn-circless">30 M</button>
                        <button onClick={takesTime} className=" mx-1 btn-circless">40 M</button>
                        <button onClick={takesTime} className=" mx-1 btn-circless">50 M</button>
                    </div>
                </div>
                <div className='col'>
                    <Activitydetails
                        BreakTimes={BreakTimes}
                    ></Activitydetails>
                </div>

            </div>
       </div>
    );
};

export default Addbreak;