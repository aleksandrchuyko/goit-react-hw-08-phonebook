import { Contact } from 'components/ContactList/Contact/Contact';
import PropTypes from 'prop-types';
import { Container, ListGroup } from 'react-bootstrap';

export const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <Container>
      <ListGroup variant="flush">
        {contacts.map(contact => (
          <ListGroup.Item key={contact.id}>
            <Contact
              id={contact.id}
              name={contact.name}
              number={contact.number}
            ></Contact>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </Container>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      createdAt: PropTypes.string,
      id: PropTypes.string,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
};
