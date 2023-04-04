import {useState} from 'react';
import Helmet from '../components/Helmet/Helmet'
import ShopBanner from '../components/ShopBanner/ShopBanner';
import { Container, Row, Col } from 'reactstrap';
import '../styles/shop.css'
import products from '../data/products.json'
import ShopCardList from '../components/Shop/ShopCardList';

const Shop = ({setSupplementDetail}) => {
  const [productsData, setProductsData] = useState(products)

  const handleFilter = e => {
    const filterValue = e.target.value
    if (filterValue === 'protein') {
      const filteredData = products.filter(item => item.type === 'protein')
      setProductsData(filteredData);
    }
    else if (filterValue === 'preworkout') {
      const filteredData = products.filter(item => item.type === 'pre-workout')
      setProductsData(filteredData);
    }
    else if (filterValue === 'creatine') {
      const filteredData = products.filter(item => item.type === 'creatine')
      setProductsData(filteredData);
    }
    else {
      setProductsData(products)
    }
  };

  const handleSort = e => {
    const filterValue = e.target.value;
    if (filterValue === 'ascending') {
      console.log(filterValue)
      const filteredData = products.sort(function(a, b){
       return a.cost - b.cost;
      });
      setProductsData(filteredData);
    } else if (filterValue === 'descending') {
      console.log(filterValue)
      const filteredData = products.sort(function(a, b){
       return b.cost - a.cost;
      });
      setProductsData(filteredData);
    } else {
      setProductsData(products);
    }

  }

  const handleSearch = e => {
    const searchTerm = e.target.value;
    const searchedProducts = products.filter(item => item.product_name.toLowerCase().includes(searchTerm.toLowerCase()));
    setProductsData(searchedProducts)
  }
  return (
    <Helmet title={'Shop'}>
      <ShopBanner />
      <section>
        <Container>
          <Row>
            <Col lg='3' med='3'>
              <div className="filter_widget">
                <select onChange={handleFilter}>
                  <option>Filter By Category</option>
                  <option value="protein">Protein</option>
                  <option value="preworkout">Pre-workout</option>
                  <option value="creatine">Creatine</option>
                </select>
              </div>
            </Col>
            <Col lg='3' med='3'>
            <div className="filter_widget">
                <select onChange={handleSort}>
                  <option>Sort By</option>
                  <option value="ascending">Ascending</option>
                  <option value="descending">Descending</option>
                </select>
              </div>
            </Col>
            <Col lg='6' med='6'>
              <div className="search_box">
                <input type ="text" placeholder='Search by product name...' onChange={handleSearch}/>
                <span>< i class="ri-search-line"></i></span>
              </div>
            </Col>
          </Row>
        </Container>

        <section>
          <Container>
            <Row>
              {productsData.length === 0 ? (<h1 className='nothing-found'>No products are found!</h1>) :
                (<ShopCardList setSupplementDetail={setSupplementDetail} data={productsData}/>)
              }
            </Row>
          </Container>
        </section>
      </section>
    </Helmet>
  );
}

export default Shop;
