import React, { FC } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Home, Login } from '../pages';

const AppRouter: FC = ({ children }) => {
  return (
    <div>
      <Router>
        {children}
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>

          <Route path='/login'>
            <Login />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default AppRouter;
