import React from 'react';
import Helmet from '../components/Helmet/Helmet';
import ShopBanner from '../components/ShopBanner/ShopBanner';
import { Container, Row, Col } from 'reactstrap';
import '../styles/cart.css';
import { motion } from 'framer-motion';
import {cartActions} from '../redux/slices/cartSlice';
import { useSelector, useDispatch} from 'react-redux';


const Cart = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  return (
    <Helmet title={'cart'}>
      <ShopBanner />
     <section>
      <Container>
        <Row>
          <Col lg='9'>
            {
              cartItems.length === 0 ? (<h2 className='fs-4 text-center'>No items in the cart</h2>):
              <table className='table bordered'>
              <thead>
                <tr>
                  <th>Image</th>
                  <th>Product</th>
                  <th>Cost</th>
                  <th>Quantity</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th><img className= "cart-item-image"src="https://www.gnc.com/dw/image/v2/BBLB_PRD/on/demandware.static/-/Sites-master-catalog-gnc/default/dw1cbe123d/hi-res/527922_web_GHOST_Whey%20PB%20Cereal%20Milk_Front.jpg?sw=1500&sh=1500&sm=fit" alt="product" /></th>
                  <th>WHEY Protein Powder</th>
                  <th>44.99</th>
                  <th>1</th>
                  <th>< i class="ri-delete-bin-line ri-lg"></i></th>
                </tr>
              </tbody>
            </table>
            }
      
          </Col>
          <Col lg='3'></Col>
        </Row>
      </Container>
     </section>

    </Helmet>
  );
}

export default Cart;
