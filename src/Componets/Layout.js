import React from "react";
import Nav from "react-bootstrap/Nav";
import { Outlet, Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Sidebar, Menu, MenuItem } from 'react-pro-sidebar';
const Layout = () => {
  return (
    <div className="text-dark">
      <Navbar bg="dark" data-bs-theme="dark" >
      <Nav className="me-auto">
      <Container>
          <Nav className="me-auto">
          <Nav.Link>
            <Link to="/">Home</Link>
          </Nav.Link>
          <Nav.Link>
            <Link to="/skills">Skills</Link>
          </Nav.Link>
          <Nav.Link>
            <Link to="/projects">Projects</Link>
          </Nav.Link>
          <Nav.Link>
            <Link to="/about">About</Link>
          </Nav.Link>
          <Nav.Link>
            <Link to="/contact">Contact</Link>
          </Nav.Link>
        </Nav>
        </Container>
      </Nav>
      </Navbar>
      <Outlet />

    </div>
  );
};

export default Layout;
