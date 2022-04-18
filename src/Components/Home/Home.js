
import React from 'react';
import {Button } from 'react-bootstrap';
import banner from '../../Images/Banner/banner.jpg';
import fitness from '../../Images/fitness/fitness.jpg';
import Service from '../Service/Service';
import './Home.css';

const Home = () => {
    return (
        <>
            <div className='banner'>
                <img src={banner} alt="" />
                <div className='banner-text'>
                    <h1>Start Training Now</h1>
                    <Button variant='danger'>Enroll Now</Button>
                </div>
            </div>
           <Service></Service>

            <div className='details-section'>
                    <div className='details-img'>
                        <img style={{ height:'300px',width:'500px'}} src={fitness} alt="" />
                    </div>
                    <div className='details-description'>
                        <h3 className='text-success'>Why fitness is important?</h3>
                        <p>Regular exercise and physical activity promotes strong muscles and bones. It improves respiratory, cardiovascular health, and overall health. Staying active can also help you maintain a healthy weight, reduce your risk for type 2 diabetes, heart disease, and reduce your risk for some cancers.</p>
                    </div>
            </div>
        </>
    );
};

export default Home;