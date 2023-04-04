import React from 'react';
import { Container } from 'reactstrap';
import "./ShopBanner.css"

const ShopBanner = ({title}) => {
  return (
    <section className="shop_banner">
        <Container className="text-center">
            <h1 className='banner-text'>{title}</h1>
        </Container>
    </section>
  );
}

export default ShopBanner;
