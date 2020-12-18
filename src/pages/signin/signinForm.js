import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { FirebaseContext } from '../../context/firebase';
import * as ROUTES from '../../constants/routes';

export default function SigninForm() {
  const history = useHistory();
  const { firebase } = useContext(FirebaseContext);

  const [userEmail, setUserEmail] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState('');

  // TODO: error and feedback handler
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
        setUserEmail('');
        setPassword('');
      });
  };

  const onShowPasswordClick = () => {
    setShowPassword(!showPassword);
  };

  return (
    <form noValidate>
      <div className="input-wrapper">
        <div className="input-area">
          <input
            type="text"
            name="handle"
            placeholder="Username / email"
            maxLength={256}
            required
            autoCapitalize="none"
            autoFocus
            autoComplete="off"
            value={userEmail}
            onChange={({ target }) => setUserEmail(target.value)}
          />
          <label htmlFor="handle" className="input-label">
            Username / email
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
      <button onClick={handleSignin}>Login</button>
    </form>
  );
}
