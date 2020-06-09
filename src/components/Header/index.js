import React from 'react';
import { useDispatch } from 'react-redux';
import { Navbar, Nav } from 'react-bootstrap';

import { signOut } from '~/store/modules/auth/actions';

export default function Header() {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(signOut());
  };

  return (
    <>
      <Navbar bg="light" expand="lg" sticky="top">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/dashboard">Dashboard</Nav.Link>
            <Nav.Link onClick={handleLogout}>Logout</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}
