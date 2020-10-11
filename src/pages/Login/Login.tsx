import React, { useEffect } from 'react';
import { LoginStrings } from './constants';

interface GoogleError {
  error: string;
  idpId: string;
  type: string;
}

const loginSuccess = (googleUser: any) => {
  const userProfile = googleUser.getBasicProfile();

  console.log('userProfile :>> ', userProfile);
};

const loginFailed = (error: GoogleError) => console.log(error);

const renderGoogleLoginButton = () => {
  (window as any).gapi.signin2.render('login-button', {
    width: 250,
    height: 40,
    theme: 'light',
    onsuccess: loginSuccess,
    onfailure: loginFailed,
  });
};

const Login = () => {
  useEffect(() => {
    window.addEventListener('google-loaded', () => renderGoogleLoginButton());
  }, []);

  return (
    <>
      <h1>{LoginStrings.signInWithGoogle}</h1>
      <div id='login-button'></div>
    </>
  );
};

export default Login;
