import React from 'react';
import logo from '../../Images/propic.jpg'
import './Showinfo.css'

const Showinfo = () => {
    return (
        <div>
            <div className='row'>
                <div className='col'>
                    <div className='profile-part'>
                        <img src={logo} alt="pro pro" className='pro-pic'></img>
                        <h5>Syeda Jebin Jahan</h5>
                        <h6>Mern Devloper</h6>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Showinfo;