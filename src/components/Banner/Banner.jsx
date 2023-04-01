import React from 'react';
import {Link } from 'react-router-dom'
import { motion } from "framer-motion"
import { Container, Row, Col } from 'reactstrap';
import bundle from '../../assets/images/new_bundle.png'
import './Banner.css'

const Banner = () => {
  const year = new Date().getFullYear();
  return (
    <section className="hero_section">
    <Container>
      <Row>
        <Col lg='6' md='6' className='left'>
          <div className="hero_content">
            <p className="hero_subtitle">Trending Product in {year}</p>
            <h2>The utlimate fitness bundle</h2>
            <p> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus 
              tempora minima consequatur, autem inventore reiciendis aliquid nisi 
              odit itaque consectetur veniam saepe velit, dicta dolore aliquam cum 
              dolorum necessitatibus! Dignissimos!</p>
              
              <motion.button  whileHover={{scale:1.2}}
              className='buy_btn'>
                <Link to='/shop'>SHOP NOW</Link>
                </motion.button>
          </div>
        </Col>

        <Col lg='6' md='6'>
          <div className="hero_img">
            <img src={bundle} alt="fitness-bundle" />
          </div>
        </Col>
      </Row>
    </Container>

  </section>
  );
}

export default Banner;
