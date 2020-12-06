import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Login from './pages/Login';
import Register from './pages/Register';

function Routes() {
  return (
    <div>
      < BrowserRouter >
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/register" component={Register} />
        </Switch>
      </BrowserRouter >
    </div >
  );
}

export default Routes;