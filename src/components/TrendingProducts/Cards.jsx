import React from 'react';
import {motion} from 'framer-motion'
import { Col} from 'reactstrap';
import { Link } from 'react-router-dom';
import './TrendingProducts.css'
import { useDispatch } from 'react-redux';
import { cartActions } from "../../redux/slices/cartSlice";
import {  toast } from 'react-toastify';


const Cards = ({item, setSupplementDetail}) => {
  const dispatch = useDispatch();
  const addToCart= () => {
    dispatch(cartActions.addItem({
      id: item.ID,
      productName: item.product_name,
      price: item.cost,
      image: item.image,
    })
    );
    toast.success('Product added successfully')
  };
  return (
    <Col lg='3' md='4' >
      <div 
      className="product_item">
        <div className="product_img">
        <Link to={`/shop/${item.ID}`}>
        <motion.img 
        whileHover={{scale: 1.2}}
        src={item.image} alt="" 
         onClick={() => {
            setSupplementDetail(item);
          }}/>
        </Link>
        </div>
        <div className='p-2 product_info'>
          <h3 className="product_name">{item.product_name}</h3>
        </div>
         
         <div className="product_card-bottom">
            <span className='price'>{item.cost}</span>
            <motion.span
            whileTap={{scale: 1.3}}
            onClick={addToCart}
            ><i id='icon' class="ri-add-circle-line"></i></motion.span>
         </div>
      </div> 
      </Col>
  );
}

export default Cards;
