import React, { useState } from 'react';
import logo from '../../Images/propic.jpg'
import Addbreak from '../Addbreak/Addbreak';
import './Showinfo.css'

const Showinfo = (props) => {
    // const {time}=props.cardTime
    console.log("Showinfo recive Card time :", props.cardTime)
  
   
   
    return (
        <div>
            <div className='row flex-column'>
                <div className='col mb-2'>
                    <div className='profile-part'>
                        <img src={logo} alt="pro pro" className='pro-pic'></img>
                        <h5>Syeda Jebin Jahan</h5>
                        <h6>Mern Devloper</h6>
                    </div>
                </div>
                <Addbreak cardTime={props.cardTime}
                 ></Addbreak>
            </div>
        </div>
    );
};

export default Showinfo;