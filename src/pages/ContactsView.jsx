import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';

import { useSelector, useDispatch } from 'react-redux';
import { getFilter, setFilter } from 'redux/phonebookSlice';

import {
  useAddContactMutation,
  useGetAllContactsQuery,
} from 'redux/contacts/contacts-api';
import { Card, CardGroup, Container } from 'react-bootstrap';

const ContactsView = () => {
  const dispatch = useDispatch();

  const filter = useSelector(getFilter);
  const {
    data: contacts,
    isLoading,
    isSuccess,
  } = useGetAllContactsQuery('', {
    refetchOnMountOrArgChange: true,
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
    <Container className="mt-2">
      {!isLoading && isSuccess && (
        <CardGroup>
          <Card>
            <Card.Body>
              <Card.Title>New contact</Card.Title>
              <ContactForm
                contacts={contacts}
                onSubmit={handleAddContact}
              ></ContactForm>
            </Card.Body>
          </Card>
          <Card>
            <Card.Body>
              <Card.Title>Your contacts</Card.Title>
              <Filter name={filter} onChange={updateFilter}></Filter>
              <ContactList contacts={filteredContacts} />
            </Card.Body>
          </Card>
        </CardGroup>
      )}
    </Container>
  );
};

export default ContactsView;
