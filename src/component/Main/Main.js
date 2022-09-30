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
                                <h4>How does react work?</h4>
                            </button>
                        </h2>
                        <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                            <div className="accordion-body">  
                                <h5> React is a declarative, efficient, and flexible JavaScript library for building user interfaces. 'V' denotes the view in MVC. ReactJS is an open-source, component-based front-end library responsible only for the view layer of the application. It is maintained by Facebook. Its aim is to allow developers to easily create fast user interfaces for websites and applications alike. The main concept of React. js is virtual DOM.ReactJS divides the UI into isolated reusable pieces of code known as components. React components work similarly to JavaScript functions as they accept arbitrary inputs called properties or props. It's possible to have as many components as necessary without cluttering your code.</h5>


                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingTwo">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                <h4>Differences between props and state?</h4>
                            </button>
                        </h2>
                        <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                <h5>State is the local state of the component which cannot be accessed and modified outside of the component. It's equivalent to local variables in a function. Props, on the other hand, make components reusable by giving components the ability to receive data from their parent component in the form of props.</h5>
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingThree">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                <h4>How many ways we can use "use-effect" except data-loading?</h4>
                            </button>
                        </h2>
                        <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                <h5>The useEffect Hook allows you to perform side effects in your components. Some examples of side effects are: fetching data, directly updating the DOM, and timers. useEffect accepts two arguments. The second argument is optional.By using this Hook, you tell React that your component needs to do something after render. React will remember the function you passed (we'll refer to it as our “effect”), and call it later after performing the DOM updates.<p></p>
                                    useEffect use cases:<br></br>
                                    1.Running once on mount: fetch API data.<br></br>
                                    2. Running on state change: validating input field.<br></br>
                                    3.Running on state change: live filtering.<br></br>
                                    4.Running on state change: trigger animation on new array value.<br></br>
                                    5.Running on props change: update paragraph list on fetched API data update.
</h5>
                            </div>
                        </div>
                    </div>
                </div>
           </div>
        </div>
    );
};

export default Main;