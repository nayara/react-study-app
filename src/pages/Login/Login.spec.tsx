import React from 'react';
import { act, render, screen } from '@testing-library/react';
import Login from './Login';
import { LoginStrings } from './constants';

describe('Login', () => {
  it('render google login button', () => {
    (global.window as any).gapi = {
      signin2: {
        render: jest.fn(),
      },
    };

    render(<Login />);

    expect(
      screen.getByRole('heading', { name: LoginStrings.signInWithGoogle })
    ).toBeInTheDocument();

    act(() => {
      global.window.dispatchEvent(new Event('google-loaded'));
    });

    expect((global.window as any).gapi.signin2.render).toHaveBeenCalled();
  });
});
