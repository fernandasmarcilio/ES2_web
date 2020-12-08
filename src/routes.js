import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import Login from './pages/Login';
import Register from './pages/Register';

import Home from './pages/Home';
import CreateGame from './pages/CreateGame';
import CreateQuestion from './pages/CreateQuestion';

const isAuthenticated = true;
const isTeacher = true;

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      isAuthenticated ? (
        <Component {...props} />
      ) : (
          <Redirect to={{ pathname: "/login", state: { from: props.location } }} />
        )
    }
  />
);

const PrivateRouteToTeacher = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      isTeacher ? (
        <Component {...props} />
      ) : (
          <Redirect to={{ pathname: "/home", state: { from: props.location } }} />
        )
    }
  />
);

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/">
        {isAuthenticated ? <Redirect to="/home" /> : <Redirect to="/login" />}
      </Route>

      <Route exact path="/login" component={Login} />
      <Route path="/register" component={Register} />

      <PrivateRoute path="/home" component={Home} />

      <PrivateRouteToTeacher path="/creategame" component={CreateGame} />
      <PrivateRouteToTeacher path="/createquestion" component={CreateQuestion} />

      <Route path="*" component={() => <h1>Page not found</h1>} />
    </Switch>
  </BrowserRouter>
);

export default Routes;