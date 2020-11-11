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
    <div>
      <div>
        <input
          type="text"
          value={userEmail}
          placeholder="Email"
          onChange={({ target }) => setUserEmail(target.value)}
        />
      </div>
      <div>
        <input
          type="password"
          value={password}
          placeholder="Password"
          onChange={({ target }) => setPassword(target.value)}
        />
      </div>
      <div>
        Don't have an account? <Link to={ROUTES.SIGN_UP}>Register mate</Link>
      </div>
      <button onClick={handleSignin}>Sign in</button>
    </div>
  );
}
