import { Button } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { useRemoveContactMutation } from 'redux/contacts/contacts-api';

export const Contact = ({ id, name, number, onDeleteContact }) => {
  const [removeContact, { isLoading: isDeleting }] = useRemoveContactMutation();
  return (
    <div>
      <p className="mb-2">
        <b>{name}:</b> {number}
      </p>
      <Button
        variant="outline-secondary"
        size="sm"
        type="button"
        disabled={isDeleting}
        onClick={() => {
          removeContact(id);
        }}
      >
        Delete
      </Button>
    </div>
  );
};

Contact.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
