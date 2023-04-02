import React from 'react';
import { Container, Row, Col, ListGroup} from 'reactstrap';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/lab.png'
import './Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg="4">
          <div className="logo">
              <img id="logo" src={logo} alt="logo" />
              <div>
                <h1 className="text-white">The Labratory</h1>
              </div>
            </div>
            <p className="footer_text mt-4">
              Exercise harder than last time and recover even quicker with our products. 
              The Labratory is an online supplement store for all your fitness needs. 
            </p>
          </Col>
          <Col lg="3">
            <div className="footer_quick-links">
              <h4 className="quick_links-title">Top Categories</h4>
              <ListGroup >
              <div className='link_list_item'>
                  <Link to='#'>Pre-workout</Link>
                </div>
                <div className='link_list_item'>
                  <Link to='#'>Pre-workout</Link>
                </div>
                <div className='link_list_item'>
                  <Link to='#'>Creatine</Link>
                </div>
              </ListGroup>
            </div>
          </Col>
          <Col lg="2">
          <div className="footer_quick-links">
              <h4 className="quick_links-title">Useful Links</h4>
              <ListGroup >
                <div className='link_list_item'>
                  <Link to='/shop'>Shop</Link>
                </div>
                <div className='link_list_item'>
                  <Link to='/cart'>Cart</Link>
                </div>
                <div className='link_list_item'>
                  <Link to='/login'>Login</Link>
                </div>
                <div className='link_list_item'>
                  <Link to='/privacy'>Privacy</Link>
                </div>
              </ListGroup>
            </div>
          </Col>
          <Col lg="3">
          <div className="footer_quick-links">
              <h4 className="quick_links-title">Contact Us</h4>
              <ListGroup >
                <div className='link_list_item'>
                  <span className='icons'><i class="ri-map-pin-line"></i></span>
                  <p> 345 14th street, Tampa Fl 34562</p>
                </div>
                <div className='link_list_item'>
                  <span className='icons'><i class="ri-phone-line"></i></span>
                  <p>+9415761848</p>
                </div>
                <div className='link_list_item'>
                  <span className='icons'><i class="ri-mail-line"></i></span>
                  <p>thelabratory@gmail.com</p> 
                </div>
              </ListGroup>
            </div>
          </Col>

          <Col lg='12'>
            <p className="footer_copyright">
              Copyright 2011 developed by GoncharDevelops. All rights reserved.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
