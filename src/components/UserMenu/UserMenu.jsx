import { Box } from 'components/Box';
import { useDispatch, useSelector } from 'react-redux';
import { authOperations, authSelectors } from 'redux/auth';

const UserMenu = () => {
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(authOperations.logOut());
  };
  const user = useSelector(authSelectors.getUser);

  return (
    <Box>
      <span>{user.email}</span>
      <button type="button" onClick={handleLogout}>
        Log Out
      </button>
    </Box>
  );
};

export default UserMenu;
