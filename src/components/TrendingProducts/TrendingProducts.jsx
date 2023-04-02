import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import Cards from './Cards';
import './TrendingProducts.css'

const TrendingProducts = () => {
  return (
    <section className="trending_products">
        <Container>
            <Row>
                <Col lg='12' className='text-center'>
                    <h2 className='section_title'>
                        Featured Products
                    </h2>
                </Col>
                <Cards />
            </Row>
        </Container>
    </section>
  );
}

export default TrendingProducts;
