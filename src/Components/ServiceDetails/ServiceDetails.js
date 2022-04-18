import React from 'react'
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './ServiceDetails.css';

const ServiceDetails = ({service}) => {
    const {title, description, price,img} = service;
   
    return (
        <div className="service bg-light p-4">
        
           <Card>
               <Card.Img variant="top" src={img} style={{width: '40%', height: '50px'}}/>
               <Card.Body>
                   <Card.Title className='text-warning'>{title}</Card.Title>
                   <Card.Text style={{height:"150px"}}>
                   <h5 className="text-info">Summary</h5>
                     <p>{description}</p>
                      
                   </Card.Text>
                   <Card.Text>
                       
                   <p className='text-light bg-dark p-2'> Amount: {price}</p>
                   </Card.Text>
               </Card.Body>
               <Card.Footer  >
                   <Link to='/confirm'>
                   <Button variant="primary">Place Order</Button>
                   </Link>
               </Card.Footer>
           </Card>
          
       
   </div>
    )
}

export default ServiceDetails;
