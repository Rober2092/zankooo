import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

import Signup from './pages/Signup';
import Login from './pages/Login';
import OrderHistory from './pages/OrderHistory';
import Nav from './components/Nav';
import Home from './pages/Home';
import ProductDetail from './pages/ProductDetail';
import ShopMens from './pages/ShopMens';
import ShopMensTops from './pages/ShopMensTops';
import ShopMensPants from './pages/ShopMensPants';
import ShopWomens from './pages/ShopWomens';
import { StoreProvider } from "./utils/GlobalState";
import ShopMensShoes from './pages/ShopMensShoes';
import ShopMensAccessories from './pages/ShopMensAccessories';
import ShopWomensTops from './pages/ShopWomensTops';
import ShopWomensDresses from './pages/ShopWomensDresses';
import ShopWomensPants from './pages/ShopWomensPants';
import ShopWomensSkirts from './pages/ShopWomensSkirts';
import ShopWomensSwimwear from './pages/ShopWomensSwimwear';
import ShopWomensAccessories from './pages/ShopWomensAccessories';
import ShopWomensShoes from './pages/ShopWomensShoes';
import ProductDetailInfo from './pages/ProductDetail';
import Success from './pages/Success';


const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
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
                  path="/shopmens/tops"
                  element={<ShopMensTops />}
                />
                  <Route
                    path="/shopmens/pants"
                    element={<ShopMensPants />}
                  />
                  <Route
                    path="/shopmens/shoes"
                    element={<ShopMensShoes />}
                  />
                  <Route
                    path="/shopmens/accessories"
                    element={<ShopMensAccessories />}
                  />
                <Route
                  path="/shopwomens"
                  element={<ShopWomens />}
                />
                <Route
                  path="/shopwomens/tops"
                  element={<ShopWomensTops />}
                />
                  <Route
                    path="/shopwomens/dresses"
                    element={<ShopWomensDresses />}
                  />
                  <Route
                    path="/shopwomens/pants"
                    element={<ShopWomensPants />}
                  />
                  <Route
                    path="/shopwomens/skirts"
                    element={<ShopWomensSkirts />}
                  />
                  <Route
                    path="/shopwomens/shoes"
                    element={<ShopWomensShoes />}
                  />
                  <Route
                    path="/shopwomens/swimwear"
                    element={<ShopWomensSwimwear />}
                  />

                  <Route
                    path="/shopwomens/accessories"
                    element={<ShopWomensAccessories />}
                  />
                
                <Route
                  path="/:id"
                  element={<ProductDetailInfo />}
                />
                <Route
                  path="/success"
                  element={<Success />}
                />
              </Routes>
            </StoreProvider>
          </div>
        </Router>
      </div>
    </div>
    </ApolloProvider>
  );
}

export default App;
