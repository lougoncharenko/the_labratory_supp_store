import React from 'react';
import {  Container, Row } from 'reactstrap';
import ShopCards from './ShopCard';
  import Typography from '@mui/material/Typography';
  import proteinData from '../../data/protein.json';
import preworkoutData from '../../data/preworkout.json';
import creatineData from '../../data/preworkout.json';

const ShopContainer = ({data, inputText, setSupplementDetail}) => {
  // this doesn't work yet 
//   const filteredProteinData = proteinData.filter((d) => {
//     if (inputText === '') {
//         return d;
//     }
//     else {
//         return d.product_name.toLowerCase().includes(inputText) 
//     }
// }) 

  return (
    <>
    <Container>
        <Row>
         <Typography style={{margin: "20px"}} 
         gutterBottom variant="h2" component="h2">
                    Protein Powder
                    </Typography>
        {proteinData.map((item, index)=> 
         <ShopCards setSupplementDetail= {setSupplementDetail} inputText={inputText} item={item} key={index} />  
        )}
        </Row>
    </Container>

    <Container>
        <Row>
         <Typography style={{margin: "20px"}} 
         gutterBottom variant="h2" component="h2">
                    Preworkout Powders
                    </Typography>
        {preworkoutData.map((item, index)=> 
         <ShopCards setSupplementDetail= {setSupplementDetail} inputText={inputText} item={item} key={index} />  
        )}
        </Row>
    </Container>

    <Container>
        <Row>
         <Typography style={{margin: "20px"}} 
         gutterBottom variant="h2" component="h2">
                    Creatine Supplements
                    </Typography>
        {creatineData.map((item, index)=> 
         <ShopCards setSupplementDetail= {setSupplementDetail} inputText={inputText} item={item} key={index} />  
        )}
        </Row>
    </Container>
    </>
  );
}

export default ShopContainer;
