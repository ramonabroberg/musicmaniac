import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import styles from '../styles/NavBar.module.css';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <Navbar className={styles.NavBar} bg="black" expand="md" fixed="top">
      <Container>
        <NavLink to="/">
          <Navbar.Brand className={styles.Logo}>musicManiac</Navbar.Brand>
        </NavLink>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto text-left">
            <NavLink exact className={styles.NavLink} activeClassName={styles.Active} to="/">
              <i className="fa-solid fa-house"></i>Home
            </NavLink>
            <NavLink className={styles.NavLink} activeClassName={styles.Active} to="/signin">
              <i className="fa-solid fa-arrow-right-to-bracket"></i>Sign in
            </NavLink>
            <NavLink className={styles.NavLink} activeClassName={styles.Active} to="signup">
              <i className="fa-solid fa-user-plus"></i>Sign up
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
