import React, { useEffect } from 'react';
import { AuthenticationStrings } from './constants';
import { loadAuth, loginGoogle, logoutGoogle } from '../../services/googleApi';

const Authentication = () => {
  useEffect(() => {
    loadAuth();
  }, []);

  return (
    <>
      <h1>{AuthenticationStrings.signInWithGoogle}</h1>
      <button id='logout-button' onClick={loginGoogle}>
        {AuthenticationStrings.loginButton}
      </button>
      <button id='login-button' onClick={logoutGoogle}>
        {AuthenticationStrings.logoutButton}
      </button>
    </>
  );
};

export default Authentication;
