import React, { useState } from 'react';
import './Addbreak.css'

const Addbreak = (props) => {
    console.log(props)
    const [BreakTimes, setBreakTimes] = useState(0)
    const takesTime = (e) => {
        const getTimes = e.target.innerText;
        setBreakTimes(getTimes.slice(0,2))
    }
    console.log(BreakTimes)
    return (
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
    );
};

export default Addbreak;