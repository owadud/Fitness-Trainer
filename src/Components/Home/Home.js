
import React from 'react';
import {Button, Card, CardGroup } from 'react-bootstrap';
import banner from '../../Images/Banner/banner.jpg';
import fitness from '../../Images/fitness/fitness.jpg';
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
            <CardGroup id="service">
                <Card>
                    <Card.Img variant="top" src="holder.js/100px160" />
                    <Card.Body>
                        <Card.Title>Card title</Card.Title>
                        <Card.Text>
                            This is a wider card with supporting text below as a natural lead-in to
                            additional content. This content is a little bit longer.
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Footer>
                </Card>
                <Card>
                    <Card.Img variant="top" src="holder.js/100px160" />
                    <Card.Body>
                        <Card.Title>Card title</Card.Title>
                        <Card.Text>
                            This card has supporting text below as a natural lead-in to additional
                            content.{' '}
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Footer>
                </Card>
                <Card>
                    <Card.Img variant="top" src="holder.js/100px160" />
                    <Card.Body>
                        <Card.Title>Card title</Card.Title>
                        <Card.Text>
                            This is a wider card with supporting text below as a natural lead-in to
                            additional content. This card has even longer content than the first to
                            show that equal height action.
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Footer>
                </Card>
            </CardGroup>

            <div className='details-section'>
                    <div className='details-img'>
                        <img style={{ height:'300px',width:'500px'}} src={fitness} alt="" />
                    </div>
                    <div className='details-description'>
                        <h3>why fitness is important?</h3>
                        <p>Regular exercise and physical activity promotes strong muscles and bones. It improves respiratory, cardiovascular health, and overall health. Staying active can also help you maintain a healthy weight, reduce your risk for type 2 diabetes, heart disease, and reduce your risk for some cancers.</p>
                    </div>
            </div>
        </>
    );
};

export default Home;