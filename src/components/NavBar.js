import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import styles from '../styles/NavBar.module.css';

const NavBar = () => {
  return (
    <Navbar className={styles.NavBar} bg="black" expand="md" fixed="top">
      <Container>
        <Navbar.Brand className={styles.Logo}>musicManiac</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto text-left">
            <Nav.Link><i class="fa-solid fa-house"></i>Home</Nav.Link>
            <Nav.Link><i class="fa-solid fa-arrow-right-to-bracket"></i>Sign in</Nav.Link>
            <Nav.Link><i class="fa-solid fa-user-plus"></i>Sign up</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
