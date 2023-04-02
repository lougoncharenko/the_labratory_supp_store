import React from 'react';
import {motion} from 'framer-motion'
import { Col, Container, Row } from 'reactstrap';
import { Link } from 'react-router-dom';
import Data from '../../data/trending.json'
import './TrendingProducts.css'


const Cards = () => {
  return (
    <Container>
      <Row>
        {Data.map((item, index)=>
    <Col lg='3' md='4' >
      <div
      key={index} 
      className="product_item">
        <div className="product_img">
        <Link to={`/shop/${item.ID}`}>
        <motion.img 
        whileHover={{scale: 1.2}}
        src={item.image} alt="" />
        </Link>
        </div>
        <div className='p-2 product_info'>
          <h3 className="product_name">{item.product_name}</h3>
        </div>
         
         <div className="product_card-bottom">
            <span className='price'>{item.cost}</span>
            <motion.span
            whileTap={{scale: 1.3}}
            ><i id='icon' class="ri-add-circle-line"></i></motion.span>
         </div>
      </div> 
      </Col>
        )}
      </Row>
    </Container>
    
   
  );
}

export default Cards;
