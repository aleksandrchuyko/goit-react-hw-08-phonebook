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

// import { ContactForm } from './ContactForm/ContactForm';
// import { ContactList } from './ContactList/ContactList';
// import { Filter } from './Filter/Filter';

// import { useSelector, useDispatch } from 'react-redux';
// import { getFilter, setFilter } from 'redux/phonebookSlice';

// import {
//   useAddContactMutation,
//   useGetAllContactsQuery,
// } from 'redux/contactsApi';

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

  // const dispatch = useDispatch();

  // const filter = useSelector(getFilter);
  // const { data: contacts, isLoading } = useGetAllContactsQuery('');
  // const [addContact] = useAddContactMutation();

  // //get contacts list by filter
  // const getFilteredContacts = () => {
  //   if (filter.trim()) {
  //     return contacts.filter(contact => {
  //       return contact.name.toLowerCase().includes(filter.toLowerCase());
  //     });
  //   } else return contacts;
  // };

  // //redux actions
  // const handleAddContact = ({ name, phone }) => {
  //   addContact({ name, phone });
  // };

  // const updateFilter = e => {
  //   dispatch(setFilter(e.target.value));
  // };
  // //------------------

  // const filteredContacts = getFilteredContacts();

  // return (
  //   <Box
  //     style={{
  //       height: '100vh',
  //       display: 'flex',
  //       flexDirection: 'column',
  //       justifyContent: 'center',
  //       alignItems: 'center',
  //       // fontSize: 40,
  //       // color: '#010101',
  //     }}
  //   >
  //     <h1>Phonebook</h1>
  //     {!isLoading && (
  //       <>
  //         <ContactForm
  //           contacts={contacts}
  //           onSubmit={handleAddContact}
  //         ></ContactForm>
  //         <h2>Contacts</h2>
  //         <Filter name={filter} onChange={updateFilter}></Filter>
  //         <ContactList contacts={filteredContacts} />
  //       </>
  //     )}
  //   </Box>
  // );
};
