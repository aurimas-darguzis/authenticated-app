import React from 'react';
import './signin.css';
import SigninForm from './signinForm';
import facebookIcon from '../../assets/icons/facebook.svg';
import googleIcon from '../../assets/icons/google.svg';

export default function Signin() {
  return (
    <div className="login-container">
      <h1>Sign in to Managery</h1>
      <div className="icon-row">
        <img src={facebookIcon} alt="facebook icon" className="social-icon" />
        <img src={googleIcon} alt="facebook icon" className="social-icon" />
      </div>
      <p>or use your email account:</p>
      <SigninForm />
    </div>
  );
}
