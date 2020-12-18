import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';
import SignInWithGoogle from './signInWithGoogle';
import './unauth.scss';

export default function Unauthenticated({ children }) {
  let { url } = useRouteMatch();
  const isForgotPassword = url === '/forgot-password';
  const isSignIn = url === '/signin';
  const isSignUp = url === '/signup';

  return (
    <div className="unauth-container">
      {isForgotPassword ? (
        <></>
      ) : (
        <>
          <header>
            <h1>{isSignIn ? 'Welcome!' : 'Start using Bussiness Manager!'}</h1>
          </header>
          <SignInWithGoogle />
          <p className="auth-or-text">or</p>
        </>
      )}

      {children}

      {isForgotPassword ? (
        <></>
      ) : (
        <footer>
          <ul>
            <li>
              <Link to={ROUTES.FORGOT_PASSWORD}>Forgot password?</Link>
            </li>
            {isSignIn ? (
              <li>
                No account yet? <Link to={ROUTES.SIGN_UP}>Sign up</Link>
              </li>
            ) : (
              <></>
            )}
            {isSignUp ? (
              <li>
                Already have an account? <Link to={ROUTES.SIGN_IN}>Login</Link>
              </li>
            ) : (
              <></>
            )}
          </ul>
        </footer>
      )}
    </div>
  );
}
