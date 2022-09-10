import { Box } from 'components/Box';
import UserMenu from 'components/UserMenu/UserMenu';
import { useSelector } from 'react-redux';
import { authSelectors } from 'redux/auth';
import { HeaderLink } from './SiteHeader.styled';

const SiteHeader = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <Box as="header">
      <Box display="flex" justifyContent="space-between">
        <nav>
          {!isLoggedIn ? (
            <>
              <HeaderLink to="/" key="register">
                Register
              </HeaderLink>
              <HeaderLink to="login" key="login">
                Login
              </HeaderLink>
            </>
          ) : (
            <HeaderLink to="contacts" key="movies">
              Contacts
            </HeaderLink>
          )}
        </nav>
        {isLoggedIn && <UserMenu />}
      </Box>
      <hr />
    </Box>
  );
};
export default SiteHeader;
