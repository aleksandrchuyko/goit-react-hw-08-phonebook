import { Box } from 'components/Box';
import { useDispatch, useSelector } from "react-redux";
import { authOperations } from 'redux/auth';


const UserMenu = () => {
    const dispatch = useDispatch();
    const handleLogout = () => {
        dispatch(authOperations.logOut())
    }
    return (<Box>
        <button type="button" onClick={handleLogout}>Log Out</button>
    </Box>);
}

export default UserMenu;