import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

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
              <Routes>
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
                  path="/products/:name"
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
