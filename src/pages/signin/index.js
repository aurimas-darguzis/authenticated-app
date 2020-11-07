import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { FirebaseContext } from '../../context/firebase';
import * as ROUTES from '../../constants/routes';

export default function Signin() {
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
        console.log('oh my goooshshssh, its a success!');
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
      <div>
        <label>username</label>
        <input
          type="text"
          value={userEmail}
          onChange={({ target }) => setUserEmail(target.value)}
        />
      </div>
      <div>
        <label>password</label>
        <input
          type="password"
          value={password}
          onChange={({ target }) => setPassword(target.value)}
        />
      </div>
      <button onClick={handleSignin}>Sign in</button>
    </>
  );
}
