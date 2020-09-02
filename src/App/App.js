import React from 'react';
import {
  BrowserRouter,
  Redirect,
  Route,
  // Switch,
} from 'react-router-dom';
import firebase from 'firebase/app';
import 'firebase/auth';

import authData from '../helpers/data/authData';
import connection from '../helpers/data/connection';

import NavBar from '../pages/NavBar/NavBar';

import './App.scss';

connection();

const PublicRoute = ({ component: Component, authed, ...rest }) => {
  const routeChecker = (props) => (authed === false
    ? (<Component {...props} />)
    : (<Redirect to={{ pathname: '/home', state: { from: props.location } }} />));
  return <Route {...rest} render={(props) => routeChecker(props)} />;
};
const PrivateRoute = ({ component: Component, authed, ...rest }) => {
  const routeChecker = (props) => (authed === true
    ? (<Component {...props} />)
    : (<Redirect to={{ pathname: '/auth', state: { from: props.location } }} />));
  return <Route {...rest} render={(props) => routeChecker(props)} />;
};

class App extends React.Component {
  state ={
    authed: false,
  }

  componentDidMount() {
    this.removeListener = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ authed: true });
      } else {
        this.setState({ authed: false });
      }
    });
  }

  componentWillUnmount() {
    this.removeListener();
  }

  render() {
    const { authed } = this.state;
    return (
      <div className="App">
        <BrowserRouter>
          <React.Fragment>
            <NavBar authed={authed}/>
          </React.Fragment>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
