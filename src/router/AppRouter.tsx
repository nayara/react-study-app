import React, { FC } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Home, Authentication } from '../pages';

const AppRouter: FC = ({ children }) => {
  return (
    <div>
      <Router>
        {children}
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>

          <Route path='/auth'>
            <Authentication />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default AppRouter;
