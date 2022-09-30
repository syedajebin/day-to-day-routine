import React, { useEffect, useState } from 'react';
import Allactivity from '../Allactivity/Allactivity';
import Showinfo from '../Showinfo/Showinfo';
import './Main.css'

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
    const [cardTime,setCardTime]=useState([])
    const getTheCardData = (data) => {
        const timeArray = [...cardTime, data]
        setCardTime(timeArray)
       
    }
    // console.log("Card Time from mainjs",cardTime);
   
    return (
        <div className='container-fluid'>
            <div className='row py-4'>
                <h1 className='fw-bold'>
                    <span className='title-clock'><i class="fa-solid fa-user-clock"></i></span>
                    DAILY ROUTINE</h1>
                <h3 className='my-2'>Select Your Activities</h3>
            </div>
            <div className='row'>
                <div className='left side col-lg-8 col-md-8 col-sm-12'>
                    <div className='row row-cols-lg-3 row-cols-md-2 row-cols-sm-1 row-cols-1 g-3'> 
                        {load && LoadMsg }
                        {
                            maindata.map((data) => {
                                return (
                                    <Allactivity
                                        data={data} key={data.id}
                                        getTheCardData={getTheCardData}
                                    ></Allactivity>
                                )
                            })
                       }
                   </div>
                </div>
                <div className='Right-side col-lg-4 col-md-4 col-sm-12 border border-dark'>
                    <Showinfo cardTime={cardTime}>
                       
                    </Showinfo>
                    <button className='btn btn-primary w-100 mt-3'>Activity Complete</button>
                </div>
            </div>

            <div className='container py-5'>
                <div className="accordion" id="accordionExample">
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingOne">
                            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                Accordion Item #1
                            </button>
                        </h2>
                        <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingTwo">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                Accordion Item #2
                            </button>
                        </h2>
                        <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingThree">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                Accordion Item #3
                            </button>
                        </h2>
                        <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                            </div>
                        </div>
                    </div>
                </div>
           </div>
        </div>
    );
};

export default Main;