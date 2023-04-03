import {useState} from 'react';
import Helmet from '../components/Helmet/Helmet'
import Searchbar from '../components/Searchbar/Searchbar';
import ProductList from '../components/Products/ProductList'
import ShopContainer from '../components/Shop/ShopContainer';

const Shop = ({setSupplementDetail}) => {
  const [inputText, setInputText] = useState("");
  return (
    <Helmet title={'Shop'}>
      <Searchbar  setInputText={setInputText} inputText={inputText} />
      <ShopContainer setSupplementDetail={setSupplementDetail}/>
      {/* <ProductList inputText={inputText} setSupplementDetail={setSupplementDetail}/> */}
    </Helmet>
  );
}

export default Shop;
