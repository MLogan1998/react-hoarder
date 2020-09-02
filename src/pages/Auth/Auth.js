import React from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import { NavLink, NavItem } from 'reactstrap';

import './Auth.scss';

class Auth extends React.Component {
  signOut = (e) => {
    e.preventDefault();
    firebase.auth().signOut();
  }

  signIn = (e) => {
    e.preventDefault();
    const googleProvider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(googleProvider);
  }

  render() {
    const { authed } = this.props;
    return (
      <NavItem>
        {
          authed ? (<NavLink className="inOrOut ml-0" onClick={this.signOut}>Sign Out</NavLink>) : (<NavLink className="inOrOut ml-0" onClick={this.signIn}>Sign In</NavLink>)
        }
      </NavItem>
    );
  }
}

export default Auth;
