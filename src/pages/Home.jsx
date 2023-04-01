import React from 'react';
import Helmet from '../components/Helmet/Helmet'
import Banner from '../components/Banner/Banner';
import Services from '../components/Services/Services';
import TrendingProducts from '../components/TrendingProducts/TrendingProducts';


const Home = () => {

  return (
    <Helmet title={'home'}>
     <Banner/>
     <Services />
     <TrendingProducts/>
    </Helmet>
  );
}

export default Home;
