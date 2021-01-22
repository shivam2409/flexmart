import React from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import { Container } from 'react-bootstrap';

function App() {
  return (
    <div className='App'>
      <Header />
      <main>
        <Container>
          <h1>Welcome to Flex Mart</h1>
        </Container>
      </main>
      <Footer />
    </div>
  );
}

export default App;
