import React from 'react';
import Helmet from '../components/Helmet/Helmet'
import Banner from '../components/Banner/Banner';



const Home = () => {

  return (
    <Helmet title={'home'}>
     <Banner/>
    </Helmet>
  );
}

export default Home;
