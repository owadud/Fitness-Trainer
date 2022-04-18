import React from 'react';
import { Button, Card } from 'react-bootstrap';
import './Footer.css';

const Footer = () => {
    return (
        <div className='footer'>
            <Card className="text-center">
                <Card.Header><h2 className="text-success">Personal Fitness Trainer</h2></Card.Header>
                <Card.Body>
                    <Card.Title>"To enjoy the glow of good health, you must exercise."</Card.Title>
                    <Card.Text>
                        You can also follow me on the social network. 
                    </Card.Text>
                    <Button variant="secondary" ><a className='text-light text-decoration-none' href="https://www.facebook.com/">Facebook</a></Button>
                    <Button variant="secondary" ><a className='text-light text-decoration-none' href="https://www.facebook.com/">Twitter</a></Button>
                    <Button variant="secondary" ><a className='text-light text-decoration-none' href="https://facebook.com.com">Instagram</a></Button>
                </Card.Body>
                <Card.Footer className="text-muted">copyright @2022</Card.Footer>
            </Card>
        </div>
    );
};

export default Footer;