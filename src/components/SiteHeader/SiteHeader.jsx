import { Box } from 'components/Box';
import UserMenu from 'components/UserMenu/UserMenu';
import { HeaderLink } from './SiteHeader.styled';

const SiteHeader = () => {
  return (
    <Box as="header">
      <nav>
        <HeaderLink to="/" key="register">
          Register
        </HeaderLink>
        <HeaderLink to="login" key="login">
          Login
        </HeaderLink>
        <HeaderLink to="contacts" key="movies">
          Contacts
        </HeaderLink>
      </nav>
      <UserMenu/>
      <hr />
    </Box>
  );
};
export default SiteHeader;
