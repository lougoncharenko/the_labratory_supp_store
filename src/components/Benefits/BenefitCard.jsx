import React from 'react';
import {motion} from 'framer-motion'
import { Col, Container, Row } from 'reactstrap';
import Data from '../../data/benefits.json'
import './Benefits.css'


const BenefitCards = () => {
  return (
    
    <Container>
      <Row>
        {Data.map((item, index)=>
    <Col lg='3' md='4' >
      <div
      key={index} 
      className="product_item">
        <div className="product_img">
        <motion.img 
        whileHover={{scale: 1.2}}
        src={item.image} alt="" />
        </div>
        <div className='p-2 product_info'>
          <h3 className="product_name">{item.heading}</h3>
        </div>
        <div className='p-2 product_info'>
          <h3 className="product_name">{item.description}</h3>
        </div>
      </div> 
      </Col>
        )}
      </Row>
    </Container>

   
  );
}

export default BenefitCards;