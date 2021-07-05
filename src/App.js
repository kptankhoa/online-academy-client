import React, { Suspense, useReducer } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

import { publicRoute } from './pages/routes';

import Login from './pages/Login';

import AppContext from './Context/AppContext';
import reducer from './Reducer/AppReducer';

export default function App() {
  const initialState = {
    query: '',
    item: [],
  };
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <Router>
      <div>
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <UnAuthRoute path="/login" exact={true}>
              <Login />
            </UnAuthRoute>
            <AppContext.Provider value={{ state, dispatch }}>
              {publicRoute.map((ro, i) => {
                return (
                  <PublicRoute
                    key={i}
                    path={ro.path}
                    component={ro.component}
                    exact={true}
                  ></PublicRoute>
                );
              })}
            </AppContext.Provider>

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
  const accessKey = localStorage.getItem(
    process.env.REACT_APP_STORAGE_ACCESS_TOKEN
  );
  console.log('accessKey:', accessKey);
  if (accessKey) {
    console.log('accessKey', accessKey && 1);
    return <Route {...rest} component={component} />;
  } else {
    return (
      <Route
        {...rest}
        children={
          <Redirect
            to={{
              pathname: '/login',
              // state: { from: location }
            }}
          />
        }
      />
    );
  }
}

function UnAuthRoute({ children, ...rest }) {
  const accessKey = localStorage.getItem(
    process.env.REACT_APP_STORAGE_ACCESS_TOKEN
  );
  console.log('accessKey:', accessKey);
  return (
    <Route
      {...rest}
      children={
        !accessKey ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: '/',
              // state: { from: location }
            }}
          />
        )
      }
    />
  );
}

function PublicRoute({ ...rest }) {
  return <Route {...rest} />;
}
