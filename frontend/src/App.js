import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import { Container } from 'react-bootstrap';
import HomeScreen from './sceens/HomeScreen';
import ProductScreen from './sceens/ProductScreen';
import CartScreen from './sceens/CartScreen';
import LoginScreen from './sceens/LoginScreen';
import RegisterScreen from './sceens/RegisterScreen';
import ProfileScreen from './sceens/ProfileScreen';
import ShippingScreen from './sceens/ShippingScreen';

function App() {
  return (
    <Router>
      <Header />
      <main className='py-3'>
        <Container>
          <Route path='/login' component={LoginScreen} />
          <Route path='/register' component={RegisterScreen} />
          <Route path='/profile' component={ProfileScreen} />
          <Route path='/product/:id' component={ProductScreen} />
          <Route path='/cart/:id?' component={CartScreen} />
          <Route path='/' exact component={HomeScreen} />
          <Route path='/shipping' exact component={ShippingScreen} />
        </Container>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
