import React from 'react';
import { Typography, Stack} from '@mui/material';
import {motion} from 'framer-motion'
 import { useDispatch } from 'react-redux';
 import { cartActions } from "../redux/slices/cartSlice";
 import {  toast } from 'react-toastify';

const ProductDetails = ({supplementDetail }) => {
  const { ID, image, product_name, cost, description} = supplementDetail;
  const dispatch = useDispatch();
  const addToCart= () => {
    dispatch(cartActions.addItem({
      id: ID,
      productName: product_name,
      price: cost,
      image: image,
    })
    );
    toast.success('Product added successfully')
  };
  return (
    <Stack gap="60px" sx={{ flexDirection: { lg: 'row' }, p: '20px', alignItems: 'center' }}>
        <img src={image} alt={product_name} loading="lazy" className="detail-image" height="500px" width="500px"/>
        <Stack sx={{ gap: { lg: '35px', xs: '20px' } }}>
          <Typography sx={{ fontSize: { lg: '50px', xs: '30px' } }} fontWeight={700} textTransform="capitalize">
            {product_name}
          </Typography>
          <Typography>
            ${cost}
          </Typography>
          <motion.button
          style={{ width: "100px", marginBottom: "15px", backgroundColor: "green", color: "white", borderRadius: "50px", padding: "5px"}}
          whileHover={{scale: 1.2}}
          onClick={addToCart}
          >Add to cart</motion.button>
          <Typography sx={{ fontSize: { lg: '18px', xs: '10px' } }} color="#4F4C4C">
          {description}
          </Typography>
        </Stack>
      </Stack>
  );
}

export default ProductDetails;
