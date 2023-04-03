import React from 'react';
import { Container, Row } from 'reactstrap';
import Cards from './Cards';
import Data from '../../data/trending.json'
import Typography from '@mui/material/Typography';
import './TrendingProducts.css'

const TrendingProducts = ({setSupplementDetail}) => {
  return (
    <Container>
        <Row>
         <Typography style={{margin: "20px", textAlign: "center"}} 
         gutterBottom variant="h2" component="h2">
                    Trending Products
                    </Typography>
        {Data.map((item, index)=> 
         <Cards item={item}  key={index} setSupplementDetail={setSupplementDetail}/>  
        )}
        </Row>
    </Container>
  );
}

export default TrendingProducts;
