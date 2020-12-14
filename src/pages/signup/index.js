import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';
import { Link } from 'react-router-dom';
import { FirebaseContext } from '../../context/firebase';
import googleGIcon from '../../assets/icons/google_g.svg';
import './signup.scss';

export default function Signup() {
  const history = useHistory();
  const [userName, setUsername] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState('');
  const [agreeToTC, setAgreeToTC] = useState(false);

  // TODO: error handler
  // const [error, setError] = useState('');

  const { firebase } = useContext(FirebaseContext);

  const handleSignup = (event) => {
    event.preventDefault();

    return firebase
      .auth()
      .createUserWithEmailAndPassword(userEmail, password)
      .then((result) =>
        result.user
          .updateProfile({
            displayName: userName,
            photoURL: Math.floor(Math.random() * 5) + 1,
          })
          .then(() => {
            history.push(ROUTES.DASHBOARD);
          })
      )
      .catch((error) => {
        setUsername('');
        setUserEmail('');
        setPassword('');
      });
  };

  const onShowPasswordClick = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="login-container">
      <header>
        <h1>Start using Me!</h1>
      </header>
      <div className="google-button-container">
        <a href="/login">
          <img src={googleGIcon} alt="Google icon" width="18px" height="18px" />
          <span className="login">Login with Google</span>
        </a>
      </div>
      <p className="login-options-or-text">or</p>
      <form id="loginForm" noValidate>
        <div className="input-wrapper">
          <div className="input-area">
            <input
              type="text"
              name="handle"
              placeholder="Email"
              maxLength={256}
              required
              autoCapitalize="none"
              autoFocus
              autoComplete="off"
              value={userEmail}
              onChange={({ target }) => setUserEmail(target.value)}
            />
            <label htmlFor="handle" className="input-label">
              Email
            </label>
            <div className="input-underline"></div>
          </div>
          <div className="extra-info"></div>
        </div>
        <div className="input-wrapper">
          <div className="input-area">
            <input
              type="text"
              name="handle"
              placeholder="Username"
              maxLength={256}
              required
              autoCapitalize="none"
              autoFocus
              autoComplete="off"
              value={userEmail}
              onChange={({ target }) => setUsername(target.value)}
            />
            <label htmlFor="handle" className="input-label">
              Username
            </label>
            <div className="input-underline"></div>
          </div>
          <div className="extra-info"></div>
        </div>
        <div className="input-wrapper password" title="Password">
          <div className="input-area">
            <input
              type={showPassword ? 'text' : 'password'}
              name="passowrd"
              id="password"
              maxLength={100}
              required
              autoComplete="off"
              value={password}
              placeholder="Password"
              onChange={({ target }) => setPassword(target.value)}
            />
            <label htmlFor="password" className="input-label">
              Password
            </label>
            <label onClick={onShowPasswordClick} className="show-password">
              <span
                className={`checkbox ${
                  showPassword ? 'checkbox-on' : 'checkbox-off'
                }`}
              ></span>

              <span className="checkbox-label">Show</span>
            </label>
            <div className="input-underline"></div>
          </div>
          <div className="extra-info"></div>
        </div>
        <label
          className="termsOfService"
          onClick={() => setAgreeToTC(!agreeToTC)}
        >
          <span
            className={`checkbox ${agreeToTC ? 'checkbox-on' : 'checkbox-off'}`}
          ></span>
          <span>I agree to Terms of Service</span>
        </label>
        <button onClick={handleSignup}>Sign up for free</button>
      </form>
      <footer>
        <ul>
          <li>
            <Link to={ROUTES.FORGOT_PASSWORD}>Forgot password?</Link>
          </li>
          <li>
            Already have an account? <Link to={ROUTES.SIGN_IN}>Login</Link>
          </li>
        </ul>
      </footer>
    </div>
  );
}
