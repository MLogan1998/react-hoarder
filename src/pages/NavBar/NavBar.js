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
import firebase from 'firebase/app';
import 'firebase/auth';

import './NavBar.scss';

class NavBar extends React.Component {
  state = {
    isOpen: false,
  }

  static propTypes = {
    authed: PropTypes.bool,
  }

  signOut = (e) => {
    e.preventDefault();
    firebase.auth().signOut();
  }

  signIn = (e) => {
    e.preventDefault();
    const googleProvider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(googleProvider);
  }

  toggle = () => {
    const { isOpen } = this.state;
    this.setState({ isOpen: !isOpen });
  }

  render() {
    const { isOpen } = this.state;
    const { authed } = this.props;
    const buildNav = () => {
      if (authed) {
        return (
          <Nav className="mr-auto" navbar>
          <NavItem>
            <NavLink tag={RRNavLink} to='/home'>Home</NavLink>
          </NavItem>
          <NavItem>
            <NavLink tag={RRNavLink} to='/new'>New</NavLink>
          </NavItem>
          <NavItem>
            <NavLink tag={RRNavLink} to='/mystuff'>My Stuff</NavLink>
          </NavItem>
          <NavItem>
            <NavLink onClick={this.signOut}>Log Me Out</NavLink>
          </NavItem>
        </Nav>
        );
      }
      return <Nav className="ml-auto" navbar>
               <NavItem>
                 <NavLink onClick={this.signIn}>Log Me In</NavLink>
               </NavItem>
             </Nav>;
    };

    return (
      <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">always.be.hoarding</NavbarBrand>
        <NavbarToggler onClick={this.toggle} />
        <Collapse isOpen={isOpen} navbar>
        <Nav className="mr-auto" navbar>
          {buildNav()}
        </Nav>
        </Collapse>
      </Navbar>
    </div>
    );
  }
}

export default NavBar;
