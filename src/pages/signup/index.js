import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';
import { Link } from 'react-router-dom';
import { FirebaseContext } from '../../context/firebase';

export default function Signup() {
  const history = useHistory();
  const [firstName, setFirstName] = useState('');
  const [emailAddress, setEmailAddress] = useState('');
  const [password, setPassword] = useState('');

  // TODO: error handler
  // const [error, setError] = useState('');

  const { firebase } = useContext(FirebaseContext);

  const handleSignup = (event) => {
    event.preventDefault();

    return firebase
      .auth()
      .createUserWithEmailAndPassword(emailAddress, password)
      .then((result) =>
        result.user
          .updateProfile({
            displayName: firstName,
            photoURL: Math.floor(Math.random() * 5) + 1,
          })
          .then(() => {
            history.push(ROUTES.DASHBOARD);
          })
      )
      .catch((error) => {
        setFirstName('');
        setEmailAddress('');
        setPassword('');
      });
  };

  return (
    <>
      <div>
        <input
          type="text"
          value={firstName}
          placeholder="First name"
          onChange={({ target }) => setFirstName(target.value)}
        />
      </div>
      <div>
        <input
          type="text"
          value={emailAddress}
          placeholder="Email"
          onChange={({ target }) => setEmailAddress(target.value)}
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
      <button onClick={handleSignup}>Sign up</button>
      <div>
        Already have an account?
        <Link to={ROUTES.SIGN_IN}>Sign in here mate</Link>
      </div>
    </>
  );
}
