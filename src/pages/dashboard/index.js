import React, { useContext } from 'react';
import { FirebaseContext } from '../../context/firebase';

export default function Dashboard() {
  const { firebase } = useContext(FirebaseContext);
  return (
    <>
      This is dashboard mate
      <button onClick={() => firebase.auth().signOut()}>Sign out</button>
    </>
  );
}
