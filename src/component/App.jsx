import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import '../assets/css/app.css';
import Header from './Header';
import Slider_auto from './Slider_auto';
import Caption from './Caption';
import Photo from './Photo';
import Pic from './Pic';
import Slider_container from './Slider_container';
import Photo2 from './Photo2';
import DropdownExample from './DropdownExample';
import Article from './Article';
import Products from './Products'
import Footer from './Footer'
import Subgroup from './Subgroup';
import { useState, useEffect } from 'react';
import Basket from './Basket';
import BasketManager from './BasketManager';
import Article_sub from './Article_sub'
import Each_pro from './Each_pro';


function App() {

  const [products, setProducts] = useState([])

  useEffect(() => {
    fetch('http://localhost:3001/products')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok ' + response.statusText);
        }
        return response.json();
      })
      .then(data => {
        setProducts(data);
      })
      .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
      });
  }, []);


  return (
    <Router>
      <div className='app'>
        <BasketManager>
          {({ basketOfUser, addOneToBasket, removeOneFromBasket }) => (
            <>
              <Header to={'/:group/:subgroup}'} products={products} basketOfUser={basketOfUser} />
              <Routes>
                <Route path="/" element={<Home addOneToBasket={addOneToBasket} products={products} />} />
                <Route path='/:group' element={<Products addOneToBasket={addOneToBasket} products={products} />} />
                <Route path="/:group/:subgroup" element={<Subgroup addOneToBasket={addOneToBasket} products={products} />} />
                <Route path='/basket' element={<Basket basketOfUser={basketOfUser}
                  addOneToBasket={addOneToBasket}
                  removeOneFromBasket={removeOneFromBasket} products={products} />} />
                <Route path="article/:id" element={<Article_sub />} />
                <Route path='/:group/:subgroup/:id' element={<Each_pro products={products} />} />
              </Routes>
            </>
          )}
        </BasketManager>
      </div>
    </Router>
  );
}


function Home({ products, addOneToBasket }) {

  return (
    <>
      <>
        <DropdownExample products={products} />
        <Slider_auto />
        <Caption />
        <Photo />
        <Slider_container addOneToBasket={addOneToBasket} products={products} slider_type={'nw-pr'} />   
        <Pic />
        <Slider_container addOneToBasket={addOneToBasket} products={products} slider_type={'b-sell'} />
        <Photo2 />
        <Article />
        <Footer />
      </>

    </>
  );
}

export default App;