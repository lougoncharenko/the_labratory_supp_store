import {useState} from 'react';
import Helmet from '../components/Helmet/Helmet'
import Searchbar from '../components/Searchbar/Searchbar';
import ProductList from '../components/Products/ProductList';

const Shop = ({setSupplementDetail}) => {
  const [inputText, setInputText] = useState("");
  const [type, setType] = useState('');
  return (
    <Helmet title={'Shop'}>
      <Searchbar setType={setType} type={type} setInputText={setInputText}/>
      <ProductList type={type} inputText={inputText} setSupplementDetail={setSupplementDetail}/>
    </Helmet>
  );
}

export default Shop;
