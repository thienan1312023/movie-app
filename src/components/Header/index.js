import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';
import { Link } from 'react-router-dom';
import './styles.scss';
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className="header">
      <Navbar className="header__content" expand="md">
        <Link to="/">
        <img src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg" alt="The Movie Database (TMDb)" width="154" height="20" />
        </Link>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem className="padding-menu-item">
              <NavLink href="/components/" style={{ color: 'white', fontWeight: '600' }}>Movie</NavLink>
            </NavItem>
            <NavItem className="padding-menu-item">
              <NavLink href="https://github.com/reactstrap/reactstrap" style={{ color: 'white', fontWeight: '600' }}>TV Shows</NavLink>
            </NavItem>
            <NavItem className="padding-menu-item">
              <NavLink href="https://github.com/reactstrap/reactstrap" style={{ color: 'white', fontWeight: '600' }}>People</NavLink>
            </NavItem>
            <NavItem className="padding-menu-item">
              <NavLink href="https://github.com/reactstrap/reactstrap" style={{ color: 'white', fontWeight: '600' }}>More</NavLink>
            </NavItem>
          </Nav>
          <i className="fa fa-plus" aria-hidden="true"></i>
          <NavLink href="https://github.com/reactstrap/reactstrap" style={{ color: 'white', fontWeight: '600' }}>Login</NavLink>
          <NavLink href="https://github.com/reactstrap/reactstrap" style={{ color: 'white', fontWeight: '600' }}>Join TMDb</NavLink>
          <i className="fa fa-search" aria-hidden="true"></i>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Header;