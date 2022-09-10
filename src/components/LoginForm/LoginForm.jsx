import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Box } from 'components/Box';
import { authOperations } from 'redux/auth';

export const LoginForm = ({ contacts, onSubmit }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleChange = ({ currentTarget: { name, value } }) => {
    switch (name) {
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();

    dispatch(authOperations.logIn({ email, password }));
    setEmail('');
    setPassword('');
  };

  return (
    <Box>
      <form onSubmit={handleSubmit}>
        
        <div>
          <label htmlFor="email">E-mail</label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit">Log in</button>
      </form>
    </Box>
  );
};