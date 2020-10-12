import { waitFor } from '@testing-library/react';
import { sign } from 'crypto';
import { loadAuth, loginGoogle, logoutGoogle } from './googleApi';

describe('Google api', () => {
  it('load gapi', () => {
    (global.window as any).gapi = {
      load: jest.fn(),
    };

    loadAuth();

    window.dispatchEvent(new Event('google-loaded'));

    expect((global.window as any).gapi.load).toHaveBeenCalled();
  });

  it('login', async () => {
    (window as any).gapi.auth2 = {
      getAuthInstance: jest.fn(() => ({
        signIn: jest.fn(async () => ({}))
      })),
    }

    loginGoogle();

    expect(
      (window as any).gapi.auth2.getAuthInstance
    ).toHaveBeenCalled();
  });

  it('logout', async () => {
    (window as any).gapi.auth2 = {
      getAuthInstance: jest.fn(() => ({
        signOut: jest.fn(async () => ({}))
      })),
    }

    logoutGoogle();

    expect(
      (window as any).gapi.auth2.getAuthInstance
    ).toHaveBeenCalled();
  });
});
