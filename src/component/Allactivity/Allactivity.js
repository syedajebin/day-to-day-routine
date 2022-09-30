/* eslint-disable no-unused-expressions */
import React from 'react';
import './Allactivity.css'

const Allactivity = (props) => {
    const { name, Time, image } =props.data;
    return (
        <div className='col'>
            <div className='card'>
                <img src={image} alt="card photo" className='image-card'></img>
                <div className='card-body py-2'>
                    <h3>{name}</h3>
                    <h6>Required Time :{Time} Minute</h6>
                </div>
                <div className='card-btn p-3'>
                    <button className='btn d-block w-100 bg-primary text-white y-1'
                        onClick={() => { props.getTheCardData(props.data.Time) }}
                    >Add To List</button>
                </div>
              
            </div>
           
        </div>
    );
};

export default Allactivity;