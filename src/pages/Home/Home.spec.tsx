import React from 'react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';

import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { Home } from '../';
import { HomeStrings } from './constants';

describe('Home', () => {
  it('redirect to login page when click in wantLogin link', () => {
    const history = createMemoryHistory();

    render(
      <Router history={history}>
        <Home />
      </Router>
    );

    expect(
      screen.getByRole('link', { name: HomeStrings.wantLogin })
    ).toBeInTheDocument();

    userEvent.click(screen.getByRole('link', { name: HomeStrings.wantLogin }));

    expect(history.location.pathname).toBe('/login');
  });
});
