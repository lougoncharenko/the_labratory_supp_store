import React from 'react';
import Helmet from '../components/Helmet/Helmet'
import Banner from '../components/Banner/Banner';
import Services from '../components/Services/Services';
import TrendingProducts from '../components/TrendingProducts/TrendingProducts';
import Benefits from '../components/Benefits/Benefits';

const Home = ({setSupplementDetail}) => {

  return (
    <Helmet title={'home'}>
     <Banner/>
     <Services />
     <TrendingProducts setSupplementDetail={setSupplementDetail}/>
     <Benefits />
    </Helmet>
  );
}

export default Home;
