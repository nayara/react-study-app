import React from 'react';
import { render, screen } from '@testing-library/react';
import Login from './Login';
import { LoginStrings } from './constants';

describe('Login', () => {
  it('render page with google login button', () => {
    render(<Login />);

    expect(
      screen.getByRole('heading', { name: LoginStrings.signInWithGoogle })
    );
  });
});
