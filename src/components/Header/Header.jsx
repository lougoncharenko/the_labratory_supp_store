import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css'
import {Container, Row} from 'reactstrap'
import { useSelector } from 'react-redux';
import logo from '../../assets/images/lab.png'

const Header = () => {
  const totalQuantity = useSelector(state => state.cart.totalQuantity)
  return (
    <header className='header'>
      <Container>
        <Row>
          <div className="nav_wrapper">
            <div className="logo">
              <img src={logo} alt="logo" />
              <div className='logo_headers'>
                <h1>The Labratory</h1>
                <p>Since 2011</p>
              </div>
            </div>
              <div className="navigation">
                <ul className="menu">
                  <li className="nav_item">
                    <NavLink to='home'>Home</NavLink>
                  </li>
                  <li className="nav_item">
                    <NavLink to='shop'>Shop</NavLink>
                  </li>
                  <li className="nav_item">
                    <NavLink to='cart'>Cart</NavLink>
                  </li>
                </ul>
              </div>
              <div className="nav_icons">
                <span className="cart_icon">
                <i class="ri-shopping-cart-line ri-lg"></i>
                   <span className="badge">{totalQuantity}</span>
                </span>
              </div>
          </div>
        </Row>
      </Container>
    </header>
  );
}

export default Header;
