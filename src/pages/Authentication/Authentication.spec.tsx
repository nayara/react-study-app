import React from 'react';
import { render, screen } from '@testing-library/react';
import Authentication from './Authentication';
import { AuthenticationStrings } from './constants';
import userEvent from '@testing-library/user-event';
import { loadAuth, loginGoogle, logoutGoogle } from '../../services/googleApi';

jest.mock('../../services/googleApi', () => ({
  __esModule: true,
  loadAuth: jest.fn(),
  loginGoogle: jest.fn(),
  logoutGoogle: jest.fn()
}));

describe('Authentication', () => {
  it('log with google when click in login button', () => {
    render(<Authentication />);
    window.dispatchEvent(new Event('google-loaded'));

    expect(loadAuth).toHaveBeenCalled();

    userEvent.click(
      screen.getByRole('button', { name: AuthenticationStrings.loginButton })
    );

    expect(loginGoogle).toHaveBeenCalled();
  });

  it('logout when click in logout button', () => {
    render(<Authentication />);

    userEvent.click(
      screen.getByRole('button', { name: AuthenticationStrings.logoutButton })
    );

    expect(logoutGoogle).toHaveBeenCalled();
  });
});
