import React from 'react';
import './Allactivity.css'

const Allactivity = (props) => {
    const { name, Time, image } = props.data;
    return (
        <div className='col'>
            <div className='card py-3'>
                <img src={image} alt="card photo" className='image-card'></img>
                <div className='card-body py-2'>
                    <h3>{name}</h3>
                    <h6>Required Time :{Time} Minute</h6>
                </div>
                <button className='btn d-block w-100 bg-primary text-white y-1'>Add To List</button>
            </div>
        </div>
    );
};

export default Allactivity;