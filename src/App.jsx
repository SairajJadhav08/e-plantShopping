import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import ProductList from './ProductList';
import './App.css';
import AboutUs from './AboutUs';
import store from './store';

function App() {
  
  const [showProductList, setShowProductList] = useState(false);

  const handleGetStartedClick = () => {
    setShowProductList(true);
  };

  const handleHomeClick = () => {
    setShowProductList(false);
  };

  return (
    <Provider store={store}>
      <Router basename="/e-plantShopping">
        <div className="app-container">
          <div className={`landing-page ${showProductList ? 'fade-out' : ''}`}>
            <div className="background-image"></div>
            <div className="content">
             <div className="landing_content">
             <h1>Welcome To Paradise Nursery</h1>
              <div className="divider"></div>
              <p>Where Green Meets Serenity</p>
             
              <button className="get-started-button" onClick={handleGetStartedClick}>
                Get Started
              </button>
             </div>
              <div className="aboutus_container">
              <AboutUs/>
              </div>
              </div>

          </div>
          <div className={`product-list-container ${showProductList ? 'visible' : ''}`}>
            <ProductList onHomeClick={handleHomeClick}/>
          </div>
        </div>
        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="/cart" element={<CartItem />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;



