import React from 'react';
import Helmet from '../components/Helmet/Helmet'
import Banner from '../components/Banner/Banner';
import Services from '../components/Services/Services';



const Home = () => {

  return (
    <Helmet title={'home'}>
     <Banner/>
     <Services />
    </Helmet>
  );
}

export default Home;
