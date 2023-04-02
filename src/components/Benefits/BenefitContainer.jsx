import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import BenefitCards from './BenefitCard';
import './Benefits.css'

const BenefitContainer = () => {
  return (
    <section className="benefit_section">
        <Container>
            <Row>
                <Col lg='12' className='text-center'>
                    <h2 className='section_title'>
                    The 8 Best Muscle-Building Supplements
                    </h2>
                </Col>
                <BenefitCards />
            </Row>
        </Container>
    </section>
  );
}

export default BenefitContainer;