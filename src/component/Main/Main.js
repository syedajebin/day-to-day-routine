import React, { useEffect, useState } from 'react';

const Main = () => {
   
    const [maindata, setMaindata] = useState([]);
    const [load, setLoad] = useState(true);
    const LoadMsg = "LOADING.....";

    useEffect(() => {
        
        fetch('Alldata.json')
            .then((res) => {
                if (!res.ok) {
                    throw Error("Failed to load data");
                }
                else {
                    return res.json();
                }
            })

            .then((data) => {
                setMaindata(data);

                setLoad(false);
                console.log(data);

            })
    }, [])

    
    console.log(maindata)
    return (
        <div className='container-fluid'>
            <div className='row'>
                <div className='left side col-lg-8 col-md-8 col-sm-12'>
                    <div className='row'>
                        Right Side
                   </div>
                </div>
                <div className='Right-side col-lg-4 col-md-4 col-sm-12'>
                    this is right
                </div>
            </div>
        </div>
    );
};

export default Main;