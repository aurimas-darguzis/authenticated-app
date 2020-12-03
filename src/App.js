import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import './App.scss';
import { IsUserRedirect, ProtectedRoute } from './helpers/routes';
import * as ROUTES from './constants/routes';
import { useAuthListener } from './hooks';
import { Dashboard, Signin, Signup } from './pages';

function App() {
  const { user } = useAuthListener();
  return (
    <Router>
      <Switch>
        <IsUserRedirect
          user={user}
          loggedInPath={ROUTES.DASHBOARD}
          path={ROUTES.SIGN_IN}
        >
          <Signin />
        </IsUserRedirect>
        <IsUserRedirect
          user={user}
          loggedInPath={ROUTES.DASHBOARD}
          path={ROUTES.SIGN_UP}
        >
          <Signup />
        </IsUserRedirect>
        <ProtectedRoute user={user} path={ROUTES.HOME}>
          <Dashboard />
        </ProtectedRoute>
      </Switch>
    </Router>
  );
}

export default App;
