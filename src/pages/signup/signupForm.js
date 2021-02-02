import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { FirebaseContext } from '../../context/firebase';
import * as ROUTES from '../../constants/routes';

export default function SignupForm() {
  const { firebase } = useContext(FirebaseContext);
  const history = useHistory();
  const [userName, setUsername] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState('');
  const [agreeToTC, setAgreeToTC] = useState(false);
  const handleSignup = (event) => {
    event.preventDefault();

    console.log('sign up: email ', userEmail);
    console.log('sign up: password', password);
    return firebase
      .auth()
      .createUserWithEmailAndPassword(userEmail, password)
      .then((result) => {
        console.log('turim result? ', result);
        return result.user
          .updateProfile({
            displayName: userName,
            photoURL: Math.floor(Math.random() * 5) + 1,
          })
          .then(() => {
            console.log('ir cia pushinam kazka?');
            history.push(ROUTES.DASHBOARD);
          });
      })
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
    <form noValidate>
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
            value={userName}
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
  );
}
