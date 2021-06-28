import React, { Suspense } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

import routes from './pages/routes';

import Login from './pages/Login';

export default function App() {
  return (
    <Router>
      <div>
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <UnAuthRoute path="/login">
              <Login />
            </UnAuthRoute>
            {routes.map((ro, i) => {
              return (
                <PrivateRoute
                  key={i}
                  path={ro.path}
                  component={ro.component}
                ></PrivateRoute>
              );
            })}
            <Route path="*">
              <Redirect to="/login"></Redirect>
            </Route>
          </Switch>
        </Suspense>
      </div>
    </Router>
  );
}

function PrivateRoute({ children, component, ...rest }) {
  const accessKey = localStorage.getItem(process.env.REACT_APP_STORAGE_ACCESS_TOKEN);
  console.log('accessKey:', accessKey);
  if (!accessKey) {
    return (
      <Route
        {...rest}
        children = {(
            <Redirect
              to={{
                pathname: '/login',
                // state: { from: location }
              }}
            />
        )}
      />
    );
  } else {
    return (
      <Route
        {...rest}
        component = {(
            component
        )}
      />
    );
  }
  
}

function UnAuthRoute({ children, ...rest }) {
  const accessKey = localStorage.getItem(process.env.REACT_APP_STORAGE_ACCESS_TOKEN);
  console.log('accessKey:', accessKey);
  return (
    <Route
      {...rest}
      children ={
        !accessKey ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: '/home',
              // state: { from: location }
            }}
          />
        )
      }
    />
  );
}