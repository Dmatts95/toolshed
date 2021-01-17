import React from 'react';
import {Link} from 'react-router-dom';
import {Container, Row, Col, Card, CardDeck} from 'react-bootstrap';
import homeConfig from '../config/homeConfig.json';

const Home = () => {
    const {featured} = homeConfig; 
    return(
        <Container>
            <Row>
                <Col>
                    <h1 className='text-secondary'>Home</h1>
                </Col>
            </Row>
            <Row className='mb-4'>
                <Col className='border-bottom'>
                    <h2>Featured</h2>
                </Col>
            </Row>
            <Row>
                <CardDeck>
                    {featured.map(entry => (
                            <Card as={Link} to={entry.path} border="primary" style={{ textDecoration: 'none', borderWidth: 'medium' }}>
                                <Card.Img variant='top' src={entry.image} />
                                <Card.Body>
                                    <Card.Title>{entry.name}</Card.Title>
                                    <Card.Text>
                                        {entry.desc}
                                    </Card.Text>
                                </Card.Body>
                            </Card>                     
                    ))}
                </CardDeck>
            </Row>
        </Container>
    );  
}
export default Home;