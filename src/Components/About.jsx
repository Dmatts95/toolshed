import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
const About = () => {
    return (
        <Container>
            <Row>
                <Col>
                    <h1 className='text-secondary'>About</h1>
                </Col>
            </Row>
            <Row>
                <Col>
                    <p>A *cough*robust*end-cough* set of tools that hopefully make life on the web a little easier (or at least more fun😊)</p>
                </Col>
            </Row>
        </Container>
    );
}

export default About; 