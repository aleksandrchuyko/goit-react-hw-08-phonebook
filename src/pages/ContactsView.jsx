import { Box } from 'components/Box';

import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';

import { useSelector, useDispatch } from 'react-redux';
import { getFilter, setFilter } from 'redux/phonebookSlice';

import {
  useAddContactMutation,
  useGetAllContactsQuery,
} from 'redux/contacts/contacts-api';

const ContactsView = () => {
  const dispatch = useDispatch();

  const filter = useSelector(getFilter);
  const { data: contacts, isLoading, isSuccess } = useGetAllContactsQuery('', {
    refetchOnMountOrArgChange: true
  });
  const [addContact] = useAddContactMutation();

  //get contacts list by filter
  const getFilteredContacts = () => {
    if (filter.trim()) {
      return contacts.filter(contact => {
        return contact.name.toLowerCase().includes(filter.toLowerCase());
      });
    } else return contacts;
  };

  //redux actions
  const handleAddContact = ({ name, number }) => {
    addContact({ name, number });
  };

  const updateFilter = e => {
    dispatch(setFilter(e.target.value));
  };
  //------------------

  const filteredContacts = getFilteredContacts();

  return (
    <Box>
      <h2>Phonebook</h2>
      {!isLoading && isSuccess && (
        <>
          <ContactForm
            contacts={contacts}
            onSubmit={handleAddContact}
          ></ContactForm>
          <h3>Contacts</h3>
          <Filter name={filter} onChange={updateFilter}></Filter>
          <ContactList contacts={filteredContacts} />
        </>
      )}
    </Box>
  );
};

export default ContactsView;
