import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Signup from './pages/Signup';
import Login from './pages/Login';
import OrderHistory from './pages/OrderHistory';
import Nav from './components/Nav';
import Home from './pages/Home';
import ProductDetail from './pages/ProductDetail';
import ShopMens from './pages/ShopMens';
import ShopWomens from './pages/ShopWomens';
import { StoreProvider } from "./utils/GlobalState";

function App() {
  return (
    <div>
      <div>
        <Router>
          <div>
            <StoreProvider>
              <Nav />
            <Routes>
              <Route 
                path="/" 
                element={<Home />} 
              />
              <Route 
                path="/login" 
                element={<Login />} 
              />
              <Route 
                path="/signup" 
                element={<Signup />} 
              />
              <Route 
                path="/orderHistory" 
                element={<OrderHistory />} 
              />
                <Route
                  path="/"
                  element={<Home />}
                />
                <Route
                  path="/shopmens"
                  element={<ShopMens />}
                />
                <Route
                  path="/shopwomens"
                  element={<ShopWomens />}
                />
                <Route
                  path="/product/:id"
                  element={<ProductDetail />}
                />
              </Routes>
            </StoreProvider>
          </div>
        </Router>
      </div>
    </div>
  );
}

export default App;
