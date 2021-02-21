import React from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import { Nav, Container, Navbar } from 'react-bootstrap';

const Header = () => {
  return (
    <header>
      <Navbar className='navbar-dark bg-dark ' expand='lg'>
        <Container>
          <LinkContainer to='/'>
            <Navbar.Brand>FLEXMART</Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='ml-auto'>
              <LinkContainer to='/cart'>
                <Nav.Link>
                  <i className='fas fa-shopping-cart'></i> Cart
                </Nav.Link>
              </LinkContainer>
              <LinkContainer to='/login'>
                <Nav.Link>
                  <i className='fas fa-user'></i> Sign-in
                </Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
