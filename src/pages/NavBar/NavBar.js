import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';

import PropTypes from 'prop-types';
import { NavLink as RRNavLink } from 'react-router-dom';
// import firebase from 'firebase/app';
import 'firebase/auth';

import Auth from '../Auth/Auth';

import './NavBar.scss';

class NavBar extends React.Component {
  state = {
    isOpen: false,
  }

  static propTypes = {
    authed: PropTypes.bool,
  }

  toggle = () => {
    const { isOpen } = this.state;
    this.setState({ isOpen: !isOpen });
  }

  render() {
    const { isOpen } = this.state;
    const { authed } = this.props;
    return (
      <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">always.be.hoarding</NavbarBrand>
        <NavbarToggler onClick={this.toggle} />
        <Collapse isOpen={isOpen} navbar>
        <Nav className="mr-auto" navbar>
          <NavItem>
            <NavLink tag={RRNavLink} to='/home'>Home</NavLink>
          </NavItem>
          <NavItem>
            <NavLink tag={RRNavLink} to='/new'>Items</NavLink>
          </NavItem>
            < Auth authed={authed}/>
        </Nav>
        </Collapse>
      </Navbar>
    </div>
    );
  }
}

export default NavBar;
