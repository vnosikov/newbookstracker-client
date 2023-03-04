import { FormEvent, useState } from 'react';
import { useMutation } from '@apollo/client';
import gql from 'graphql-tag';
import { css } from '@emotion/react';
import { TextField } from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton';

const LOGIN = gql`
  mutation Login($username: String!, $password: String!) {
    login(username: $username, password: $password) {
      code
      success
      message
    }
  }
`;

const formStyles = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px;
`;

const inputStyles = css`
  margin: 8px;
`;

const buttonStyles = css`
  margin-top: 16px;
`;

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [clientError, setClientError] = useState('');

  const [login, { data, loading, error }] = useMutation(LOGIN);

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    setClientError('');
    const { data } = await login({ variables: { username, password } });
    localStorage.setItem('token', data.login.message);
  };

  const displayError = clientError || (!data?.login.success && data?.login.message) || (error?.message);

  return (
    <form css={formStyles} onSubmit={handleSubmit}>
      <TextField
        css={inputStyles}
        label="Username"
        variant="outlined"
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <TextField
        css={inputStyles}
        label="Password"
        variant="outlined"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <div>{displayError}</div>
      <LoadingButton
        css={buttonStyles}
        variant="contained"
        color="primary"
        type="submit"
        loading={loading}
      >
        Register
      </LoadingButton>
    </form>
  );
};


export default Login;