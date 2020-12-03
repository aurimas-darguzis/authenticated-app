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
  const [error, setError] = useState('');

  const isInvalid = password === '' || userEmail === '';

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
        setError(error.message);
      });
  };
  return (
    <>
      <div className="signin_form_input_container">
        <input
          type="text"
          value={userEmail}
          placeholder="Email"
          onChange={({ target }) => setUserEmail(target.value)}
        />
      </div>
      <div className="signin_form_input_container">
        <input
          type="password"
          value={password}
          placeholder="Password"
          onChange={({ target }) => setPassword(target.value)}
        />
      </div>
      <div className="signin_form_input_container">
        Don't have an account? &nbsp;
        <Link to={ROUTES.SIGN_UP}>Register here</Link>
      </div>
      <div className="signin_form_input_container">
        <button onClick={handleSignin}>Sign in</button>
      </div>
    </>
  );
}
