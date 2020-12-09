import React from 'react';
import './forgot-password.scss';

export default function ForgtoPassword() {
  return (
    <>
      <header>
        <h1>Forgot your password?</h1>
        <h2>We'll send you an email with instructions.</h2>
      </header>
      <form>
        <div className="input-wrapper">
          <div className="input-area">
            <input
              type="text"
              name="handle"
              placeholder="Username / email"
              id="handle"
              maxLength={256}
              required
              autoCapitalize="none"
              autocomplete="username"
              autoFocus
            />
            <label for="handle" className="input-label">
              Username / email
            </label>
            <div className="input-underline"></div>
          </div>
          <div className="extra-info"></div>
        </div>
        <button>Reset password</button>
      </form>
    </>
  );
}
