import React from 'react';
import {  Container, Row } from 'reactstrap';
import ShopCards from './ShopCard';
import Data from '../../data/trending.json'

const ShopContainer = ({setSupplementDetail}) => {
  return (
    <Container>
        <Row>
        {Data.map((item, index)=> 
            <ShopCards setSupplementDetail= {setSupplementDetail} item={item} key={index} />
        )}
        
        </Row>
    </Container>
  );
}

export default ShopContainer;
