import React from 'react';
import './signin.scss';
import SigninForm from './signinForm';
import googleGIcon from '../../assets/icons/google_g.svg';

export default function Signin() {
  const onGoogleLoginClick = () => {
    console.log('Google login click!');
  };

  return (
    <div className="login-container">
      <header>
        <h1>Welcome</h1>
      </header>
      <div className="google-button-container">
        <a href="/login">
          <img src={googleGIcon} alt="Google icon" width="18px" height="18px" />
          <span className="login">Login with Google</span>
        </a>
      </div>
      <p className="login-options-or-text">or</p>
      <SigninForm />
    </div>
  );
}
