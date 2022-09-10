import PropTypes from 'prop-types';
import { useRemoveContactMutation } from 'redux/contacts/contacts-api';

export const Contact = ({ id, name, number, onDeleteContact }) => {
  const [removeContact, { isLoading: isDeleting }] = useRemoveContactMutation();
  return (
    <div>
      <p>
        {name}: {number}
      </p>
      <button
        type="button"
        disabled={isDeleting}
        onClick={() => {
          removeContact(id);
        }}
      >
        Delete
      </button>
    </div>
  );
};

Contact.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
