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
import AuthProvider from "./provider/authProvider";
import jwt_decode from "jwt-decode";
import LecturerDashboard from "./pages/Lecturer/LecturerDashboard";
import CreateCourse from "./pages/Lecturer/createCourse/CreateCourse";
import LecturerPage from "./pages/Lecturer/LecturerPage";

export default function App() {
  const initialState = {
    query: '',
    item: []
  };
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AuthProvider>
      <Router>
        <Suspense fallback={<div>Loading...</div>}>
          <AppContext.Provider value={{state, dispatch}}>
            <Switch>

              <UnAuthRoute path="/login" exact={true}>
                <Login/>
              </UnAuthRoute>

              <PrivateRoute path="/user">
                <UserPage/>
              </PrivateRoute>

              <LecturerRoute path="/lecturer">
                <LecturerPage/>
              </LecturerRoute>

              {/*<LecturerRoute path="/lecturer/create-course" exact={true}>*/}
              {/*  <CreateCourse/>*/}
              {/*</LecturerRoute>*/}

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

              <Route path="*">
                <NoMatch/>
              </Route>

            </Switch>
          </AppContext.Provider>
        </Suspense>
      </Router>
    </AuthProvider>
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

function PrivateRoute({children, ...rest}) {
  const token = localStorage.getItem(process.env.REACT_APP_STORAGE_ACCESS_TOKEN);

  if (token) {
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

function LecturerRoute({children, ...rest}) {
  const token = localStorage.getItem(process.env.REACT_APP_STORAGE_ACCESS_TOKEN);
  const decoded = jwt_decode(token);

  if (!token) {
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
  } else if (decoded.type === "lecturer") {
    return <Route {...rest} >{children}</Route>;
  } else {
    return <Route {...rest} children={
      <Redirect
        to={{
          pathname: '/',
          // state: { from: location }
        }}
      />
    }/>
  }
}

function UnAuthRoute({children, ...rest}) {
  const token = localStorage.getItem(process.env.REACT_APP_STORAGE_ACCESS_TOKEN);
  return (
    <Route
      {...rest}
      children={
        !token ? (
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
