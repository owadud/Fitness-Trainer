import React from 'react'
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './ServiceDetails.css';

const ServiceDetails = ({service}) => {
    const {title, description, price,img} = service;
   
    return (
        <div className="service">
        
           <Card>
               <Card.Img variant="top" src={img} style={{width: '40%', height: '50px'}}/>
               <Card.Body>
                   <Card.Title>{title}</Card.Title>
                   <Card.Text>
                     <p> Summary: {description}</p>
                      
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
