import React from 'react';

import { Link } from "react-router-dom";

const Home = () => {
  return (
    <main>
      <ul className="flex-row">
          <li className="mx-1">
            <Link to="/shopmens">
              Shop Mens
            </Link>
          </li>
          <li className="mx-1">
            <Link to="/shopwomens">
              Shop Womens
            </Link>
          </li>
        </ul>
    </main>
  );
};

export default Home;