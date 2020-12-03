import React from 'react';
import './signin.scss';
import SigninForm from './signinForm';
import facebookIcon from '../../assets/icons/facebook.svg';
import googleIcon from '../../assets/icons/google.svg';

export default function Signin() {
  const onFacebookLoginClick = () => {
    console.log('facebook login click!');
  };

  const onGoogleLoginClick = () => {
    console.log('Google login click!');
  };

  return (
    <div className="login-container">
      <h1>Sign in to Managery</h1>
      <div className="icon-row">
        <img
          src={facebookIcon}
          alt="facebook icon"
          className="social-icon"
          onClick={onFacebookLoginClick}
        />
        <img
          src={googleIcon}
          alt="facebook icon"
          className="social-icon"
          onClick={onGoogleLoginClick}
        />
      </div>
      <p>or use your email account:</p>
      <SigninForm />
    </div>
  );
}
