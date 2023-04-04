import React from 'react';
import {  Container, Row } from 'reactstrap';
import ShopCards from './ShopCard';

const ShopCardList = ({data, setSupplementDetail}) => {

  return (
    <>
    <Container>
        <Row>
        {data.map((item, index)=> 
         <ShopCards setSupplementDetail= {setSupplementDetail} item={item} key={index} />  
        )}
        </Row>
    </Container>
    </>
  );
}

export default ShopCardList;