import React, { useContext } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import UserContext from './context/UserContext';

import Login from './pages/Login';
import Register from './pages/Register';

import Home from './pages/Home';
import CreateGame from './pages/CreateGame';
import CreateQuestion from './pages/CreateQuestion';
import TriviaGame from './pages/TriviaGame';
import GameScore from './pages/GameScore';


const PrivateRoute = ({ component: Component, signed, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      signed ? (
        <Component {...props} />
      ) : (
          <Redirect to={{ pathname: "/login", state: { from: props.location } }} />
        )
    }
  />
);

const PrivateRouteToTeacher = ({ component: Component, signed, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      signed ? (
        <Component {...props} />
      ) : (
          <Redirect to={{ pathname: "/home", state: { from: props.location } }} />
        )
    }
  />
);

const Routes = () => {
  const { signed } = useContext(UserContext);

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          {signed ? <Redirect to="/home" /> : <Redirect to="/login" />}
        </Route>

        <Route exact path="/login" component={Login} />
        <Route path="/register" component={Register} />

        <PrivateRoute path="/home" component={Home} signed={signed} />
        <PrivateRoute path="/trivia" component={TriviaGame} signed={signed} />
        <PrivateRoute path="/score" component={GameScore} signed={signed} />

        <PrivateRouteToTeacher path="/creategame" component={CreateGame} signed={signed} />
        <PrivateRouteToTeacher path="/createquestion" component={CreateQuestion} signed={signed} />

        <Route path="*" component={() => <h1>Page not found</h1>} />
      </Switch>
    </BrowserRouter>
  )
};

export default Routes;