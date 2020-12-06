import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Login from './pages/Login';

function Routes() {
  return (
    <div>
      < BrowserRouter >
        <Switch>
          <Route exact path="/" component={Login} />
        </Switch>
      </BrowserRouter >
    </div >
  );
}

export default Routes;