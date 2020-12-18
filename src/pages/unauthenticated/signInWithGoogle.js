import React from 'react';
import googleGIcon from '../../assets/icons/google_g.svg';

export default function SignInWithGoogle() {
  return (
    <div className="google-button-container">
      <a href="/login">
        <img src={googleGIcon} alt="Google icon" width="18px" height="18px" />
        <span className="login">Login with Google</span>
      </a>
    </div>
  );
}
