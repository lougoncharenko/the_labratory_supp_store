import React from 'react';
import {motion} from 'framer-motion'
import { Col,} from 'reactstrap';
import { Link } from 'react-router-dom';
import Card from '@mui/material/Card';
import './Shop.css'
 import { useDispatch } from 'react-redux';
 import { cartActions } from "../../redux/slices/cartSlice";

const ShopCards = ({item, setSupplementDetail}) => {
  const dispatch = useDispatch();
  const addToCart= () => {
    dispatch(cartActions.addItem({
      id: item.ID,
      productName: item.product_name,
      price: item.cost,
      image: item.image,
    })
    );
    alert('Product added to the cart')
  };
  return (
    <Col lg='3' md='4' >
      <Card
      style={{marginBottom: "25px"}}
       sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      <div
      className="product_item">
        <div className="product_img">
        <Link to={`/shop/${item.ID}`}>
        <img 
        src={item.image} alt="" />
        </Link>
        </div>
        <div className='p-2 product_info'>
          <h3 className="product_name">{item.product_name}</h3>
        </div>
        <div className='p-2 product_info'>
          <h3 className="product_name">${item.cost}</h3>
        </div>
         
         <div className="product_card-bottom">
         <Link to={`/shop/${item.id}`}>
          <motion.button
          style={{marginBottom: "15px", marginRight: "10px", backgroundColor: "#0a1d37", color: "white", borderRadius: "50px", padding: "5px"}}
          whileHover={{scale: 1.2}}
          onClick={() => {
            setSupplementDetail(item);
          }}
          >Click here for details
          </motion.button></Link>
          <motion.button
          style={{marginBottom: "15px", backgroundColor: "green", color: "white", borderRadius: "50px", padding: "5px"}}
          whileHover={{scale: 1.2}}
          onClick={addToCart}
          >Add to cart</motion.button>
         </div>
      </div> 
      </Card >
      </Col>
  );
}

export default ShopCards;
