import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export default function Header() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Nav className="me-auto">
            <Nav>Home</Nav>
            <Nav>Features</Nav>
            <Nav>Pricing</Nav>
          </Nav>
        </Container>
      </Navbar>
    </>
  )
}
