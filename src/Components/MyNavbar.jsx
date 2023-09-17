import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom/dist';

const MyNavbar = () => {
  return (

    <div>

    <Navbar fixed='top' bg="dark" data-bs-theme="dark">
      <Navbar.Brand as={Link} className='myNavbar ms-4' to="/">Url Shorter</Navbar.Brand>
      <Nav className="ms-auto me-4" >
        <Nav.Link as={Link} to="about">About Me And Website</Nav.Link>
      </Nav>
    </Navbar>

    </div>

    
  );
};

export default MyNavbar;
