import React from 'react';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import Cart from '../components/Cart';


// 
import CategoryMenu from '../components/CategoryMenu';


function ProjectCard() {
  return (
    <Container className='container justify-content-center mt-5'>
      
      <Card className="card bg-dark text-white landing-card">
      <Link to="/shopmens">
            
        <img className="card-img" src="/images/PopArtMan.jpg" alt="Card image" />
        
        <div className="card-img-overlay">
          <h5 className="card-title">Shop Mens</h5>
          <p className="card-text"></p>
          <p className="card-text"></p>
        </div>
        </Link>
      </Card>

      <Card className="card bg-dark text-white landing-card">
      <Link to="/shopwomens">
        <img className="card-img" src="/images/PopArtWoman.jpg" alt="Card image" />
        <div className="card-img-overlay">
          <h5 className="card-title">Shop Womens</h5>
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