import {useState} from 'react';
import Helmet from '../components/Helmet/Helmet'
import Searchbar from '../components/Searchbar/Searchbar';
import ProductList from '../components/Products/ProductList'
import ShopContainer from '../components/Shop/ShopContainer';
import ShopBanner from '../components/ShopBanner/ShopBanner';
import { Container, Row, Col } from 'reactstrap';
import '../styles/shop.css'

const Shop = ({setSupplementDetail}) => {
  const [inputText, setInputText] = useState("");
  return (
    <Helmet title={'Shop'}>
      <ShopBanner />

      <section>
        <Container>
          <Row>
            <Col lg='3' med='3'>
              <div className="filter_widget">
                <select>
                  <option>Filter By Category</option>
                  <option value="protein">Protein</option>
                  <option value="preworkout">Pre-workout</option>
                  <option value="creatine">Creatin</option>
                </select>
              </div>
            </Col>
            <Col lg='3' med='3'>
            <div className="filter_widget">
                <select>
                  <option>Sort By</option>
                  <option value="ascending">Ascending</option>
                  <option value="descending">Descending</option>
                </select>
              </div>
            </Col>
            <Col lg='6' med='6'>
              <div className="search_box">
                <input type ="text" placeholder='Search by product name...'/>
                <span>< i class="ri-search-line"></i></span>
              </div>
            </Col>
          </Row>

        </Container>
      </section>
      {/* <Searchbar  setInputText={setInputText} inputText={inputText} /> */}
      <ShopContainer setSupplementDetail={setSupplementDetail}/>
      {/* <ProductList inputText={inputText} setSupplementDetail={setSupplementDetail}/> */}
    </Helmet>
  );
}

export default Shop;
