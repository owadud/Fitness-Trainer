import React, { useEffect, useState } from 'react';
import ServiceDetails from '../ServiceDetails/ServiceDetails';
import "./Service.css";


const Service = () => {
    const [services, setServices] = useState([]);

    useEffect( ()=>{
        fetch('generated.json')
        .then(res => res.json())
        .then(data => setServices(data));
    }, [])
    
    return (
        <div id="services" className='container mb-4'>
        <div className="row">
        <h1 className='text-primary text-center mt-5'>Choose Your Plan </h1>
        <div className="services-container d-flex justify-content-center mt-5 ">
        {
            services.map(service => <ServiceDetails
                key={service.id}
                service={service}
            >
            </ServiceDetails>)
        }
        </div>
        </div>
    </div>

        
       
    );
};

export default Service;