import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { FirebaseContext } from '../../context/firebase';
import * as ROUTES from '../../constants/routes';
import { Link } from 'react-router-dom';

export default function SigninForm() {
  const history = useHistory();
  const { firebase } = useContext(FirebaseContext);

  const [userEmail, setUserEmail] = useState('');
  const [password, setPassword] = useState('');
  // const [error, setError] = useState('');

  // const isInvalid = password === '' || userEmail === '';

  const handleSignin = (event) => {
    event.preventDefault();

    return firebase
      .auth()
      .signInWithEmailAndPassword(userEmail, password)
      .then(() => {
        history.push(ROUTES.DASHBOARD);
      })
      .catch((error) => {
        console.log('theres an errrra : ', error);
        setUserEmail('');
        setPassword('');
        // setError(error.message);
      });
  };
  return (
    <form id="loginForm" novalidate>
      <div className="input-wrapper">
        <div className="input-area">
          <input
            type="text"
            name="handle"
            placeholder="Username / email"
            id="handle"
            maxLength={256}
            required
            autocapitalize="none"
            autoFocus
            autocomplete="off"
            // title="Username / email"
            value={userEmail}
            onChange={({ target }) => setUserEmail(target.value)}
          />
          <label for="handle" className="input-label">
            Username / email
          </label>
          <div className="input-underline"></div>
        </div>
        <div className="extra-info"></div>
      </div>

      <div className="input-wrapper password" title="Password">
        <div className="input-area">
          <input
            type="password"
            name="passowrd"
            id="password"
            maxLength={100}
            required
            autocomplete="off"
            value={password}
            placeholder="Password"
            onChange={({ target }) => setPassword(target.value)}
          />
          <label for="password" class="input-label">
            Password
          </label>
          <label class="show-password">
            <input
              type="checkbox"
              name="show-password-checkbox"
              class="show-password-checkbox"
            />
            <span class="checkbox"></span>
            <span class="checkbox-label">Show</span>
          </label>
          <div className="input-underline"></div>
        </div>
        <div className="extra-info"></div>
      </div>

      {/* <div className="signin_form_input_container">
        Don't have an account? &nbsp;
        <Link to={ROUTES.SIGN_UP}>Register here</Link>
      </div> */}
      {/* <div> */}
      <button onClick={handleSignin}>Login</button>
      {/* </div> */}
    </form>
  );
}
