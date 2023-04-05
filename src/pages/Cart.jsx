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
              {
                cartItems.map((item, index) => (
                  <tr>
                  <th><img className= "cart-item-image"src={item.image} alt={item.product_name} /></th>
                  <th>{item.productName}</th>
                  <th>${item.price}</th>
                  <th>{item.quantity}</th>
                  <motion.th
                  whileTap={{scale: 1.2}} 
                  >< i class="ri-delete-bin-line ri-lg"></i></motion.th>
                </tr>
                ))
              }
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
