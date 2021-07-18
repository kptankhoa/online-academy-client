import React, { Suspense, useReducer } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect, useLocation
} from 'react-router-dom';
import { publicRoute } from './pages/routes';
import Login from './pages/loginv2';
import UserPage from './pages/Account';
import AppContext from './Context/AppContext';
import reducer from './Reducer/AppReducer';

export default function App() {
  const initialState = {
    query: '',
    item: []
  };
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <AppContext.Provider value={{ state, dispatch }}>
          <Switch>
            <UnAuthRoute path='/login' exact={true}>
              <Login />
            </UnAuthRoute>
            <PrivateRoute path='/user'>
              <UserPage />
            </PrivateRoute>
            {publicRoute.map((ro, i) => {
              return (
                <PublicRoute
                  key={i}
                  path={ro.path}
                  component={ro.component}
                  exact={true}
                />
              );
            })}
            <Route path='*'>
              <NoMatch />
            </Route>
          </Switch>
        </AppContext.Provider>

      </Suspense>
    </Router>
  );
}

function NoMatch() {
  let location = useLocation();

  return (
    <div>
      <h3>
        No match for <code>{location.pathname}</code>
      </h3>
    </div>
  );
}

function PrivateRoute({ children, ...rest }) {
  const accessKey = localStorage.getItem(
    process.env.REACT_APP_STORAGE_ACCESS_TOKEN
  );

  if (accessKey) {
    return <Route {...rest} >{children}</Route>;
  } else {
    return (
      <Route
        {...rest}
        children={
          <Redirect
            to={{
              pathname: '/login'
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
  // console.log('accessKey:', accessKey);
  return (
    <Route
      {...rest}
      children={
        !accessKey ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: '/'
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
