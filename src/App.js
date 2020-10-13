import React from 'react';
import {BrowserRouter as Router, Switch} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import { IsUserRedirect, ProtectedRoute } from './helpers/routes';
import * as ROUTES from './constants/routes';
import useAuthListener from './hooks/use-auth-listener';
import { Dashboard, Signin, Signup } from './pages';

function App() {
  const { user } = useAuthListener();
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Router>
          <Switch>
            <IsUserRedirect user={user} loggedInPath={ROUTES.DASHBOARD} path={ROUTES.SIGN_IN}>
              <Signin />
            </IsUserRedirect>
            <IsUserRedirect user={user} loggedInPath={ROUTES.DASHBOARD} path={ROUTES.SIGN_UP}>
              <Signup />
            </IsUserRedirect>
            <ProtectedRoute user={user} path={ROUTES.DASHBOARD}>
              <Dashboard />
            </ProtectedRoute>
          </Switch>
        </Router>
      </header>
    </div>
  );
}

export default App;
