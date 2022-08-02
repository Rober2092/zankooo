import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import ShopMens from './pages/ShopMens';
import ShopWomens from './pages/ShopWomens';

function App() {
  return (
    <div>
      <div>
        <Router>
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
            </Routes>
            </Router>
      </div>
    </div>
  );
}

export default App;
