import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { motion } from "framer-motion"
import data from '../../data/services.json'

import './Services.css'

const Services = () => {
  return (
    <section className="services">
        <Container>
            <Row>
                <Col lg='3' md='4'>
                {data.map((data) => (
                    <div className="service_item">
                        <span><i class={data.icon}></i></span>
                        <div>
                            <h3>{data.title}</h3>
                            <p>{data.subtitle}</p>
                        </div>
                    </div>
                      ))}
                </Col>
            </Row>
        </Container>
    </section>
  );
}

export default Services;
