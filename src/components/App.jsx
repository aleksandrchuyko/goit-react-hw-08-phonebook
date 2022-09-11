import { Box } from './Box';
import { Routes, Route, Navigate } from 'react-router-dom';
import { lazy } from 'react';

import Layout from 'components/Layout';
import { useDispatch, useSelector } from 'react-redux';
import { authOperations, authSelectors } from 'redux/auth';
import { useEffect } from 'react';
import PublicRoute from './PublicRoute';
import PrivateRoute from './PrivateRoute';
const RegisterView = lazy(() => import('pages/RegisterView'));
const LoginView = lazy(() => import('pages/LoginView'));
const ContactsView = lazy(() => import('pages/ContactsView'));

export const App = () => {
  const isRefreshingUser = useSelector(authSelectors.getIsRefreshingUser);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);
  return (
    <Box
      as="main"
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        // justifyContent: 'center',
        // alignItems: 'center',
        // fontSize: 40,
        // color: '#010101',
      }}
    >
      {!isRefreshingUser && (
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route
              index
              element={
                <PublicRoute
                  restricted
                  redirectTo="/contacts"
                  component={<RegisterView />}
                />
              }
            />
            <Route
              path="register"
              element={
                <PublicRoute
                  restricted
                  redirectTo="/contacts"
                  component={<RegisterView />}
                />
              }
            />
            <Route
              path="login"
              element={
                <PublicRoute
                  restricted
                  redirectTo="/contacts"
                  component={<LoginView />}
                />
              }
            />
            <Route
              path="contacts"
              element={
                <PrivateRoute
                  redirectTo="/login"
                  component={<ContactsView />}
                />
              }
            />
            <Route path="*" element={<Navigate to="/" />} />
          </Route>
        </Routes>
      )}
    </Box>
  );
};
