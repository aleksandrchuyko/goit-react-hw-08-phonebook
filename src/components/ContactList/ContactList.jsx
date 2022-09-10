import { Box } from 'components/Box';
import { Contact } from 'components/ContactList/Contact/Contact';
import PropTypes from 'prop-types';

export const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <Box>
      <ul>
        {contacts.map(contact => (
          <li key={contact.id}>
            <Contact
              id={contact.id}
              name={contact.name}
              number={contact.number}
            ></Contact>
          </li>
        ))}
      </ul>
    </Box>
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
