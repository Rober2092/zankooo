import React from 'react';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import Cart from '../components/Cart';


// 
import CategoryMenu from '../components/CategoryMenu';


function ProjectCard() {
  return (
    <Container className='container justify-content-center mt-5 card-container'>
      
      <Card className="card bg-dark text-white landing-card">
      <Link to="/shopmens">
            
        <img className="card-img" src="/images/BlackRedFashionMan.jpg" alt="Card image" />
        
        <div className="card-img-overlay">
          <h5 className="card-title card-text">Shop Mens</h5>
          <p className="card-text"></p>
          <p className="card-text"></p>
        </div>
        </Link>
      </Card>

      <Card className="card bg-dark text-white landing-card">
      <Link to="/shopwomens">
        <img className="card-img" src="/images/BlackRedFashionWoman.jpg" alt="Card image" />
        <div className="card-img-overlay">
          <h5 className="card-title card-text">Shop Womens</h5>
          <p className="card-text"></p>
          <p className="card-text"></p>
        </div>
        </Link>
      </Card>
    </Container>
  );

}





const Home = () => {
  return (
    <main>
        <Cart />
        <ProjectCard />


    </main>
  );
};

export default Home;