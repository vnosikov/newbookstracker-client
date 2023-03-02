import { FormEvent, useState } from 'react';
import { useMutation } from '@apollo/client';
import gql from 'graphql-tag';
import { css } from '@emotion/react';
import { TextField } from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton';

const REGISTER = gql`
  mutation Register($username: String!, $password: String!) {
    register(username: $username, password: $password) {
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

const Register = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');
  const [clientError, setClientError] = useState('');

  const [register, { data, loading, error }] = useMutation(REGISTER);

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    setClientError('');
    // if (username.length === 0) {
    //   setClientError('Username not specified');
    // } else if (password.length < 6) {
    //   setClientError('Password needs to have at least six symbols');
    // } else if (password !== confirm) {
    //   setClientError('Passwords do not match');
    // } else {
      const { data } = await register({ variables: { username, password } });
    // }
  };

  const displayError = clientError || (!data?.register.success && data?.register.message) || (error?.message);

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
      <TextField
        css={inputStyles}
        label="Confirm Password"
        variant="outlined"
        type="password"
        value={confirm}
        onChange={(e) => setConfirm(e.target.value)}
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


export default Register;