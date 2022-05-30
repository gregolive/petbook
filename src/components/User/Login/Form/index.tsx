import { useRef, useState } from 'react';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import TextField from '@mui/material/TextField';
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';
import { StyledForm, FormHeading, FormText } from '../../styled';

interface LoginFormProps {
  closeModal: Function;
  changeModal: Function;
};

const LoginForm = ({ closeModal, changeModal }: LoginFormProps) => {
  const form = useRef();
  const [formError, setFormError] = useState(false);
  const [inputError, setInputError ] = useState({
    username: '',
    password: '',
  });

  const formSubmit = (): void => {

  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    const validForm = (e.target as HTMLFormElement).checkValidity();
    if (!validForm) {
      setFormError(true);
      return;
    }
    formSubmit();
  };

  const validateInput = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
    const { validity } = e.target;

    switch (true) {
      case validity['tooShort']:
        setInputError({ ...inputError, [e.target.name]: `Entered ${e.target.name} must be at least 5 characters long`});
        break;
      case validity['patternMismatch']:
        if (e.target.name === 'username') {
          setInputError({ ...inputError, [e.target.name]: 'Username can only contain letters, numbers, dashes, and underscores'});
          break;
        }
        setInputError({ ...inputError, [e.target.name]: 'Password must be at least 6 characters long and contain an uppercase letter, number, and special character'});
          break;
      default:
        setInputError({ ...inputError, [e.target.name]: ''});
    }
  };

  return (
    <>
      <StyledForm ref={form.current} onSubmit={handleSubmit} noValidate>
        <FormControl error={formError}>
        <FormHeading>Hello again! 🐶</FormHeading>

        <TextField 
          type='text'
          id='username'
          name='username'
          label='Username'
          variant='outlined'
          size='small'
          onChange={() => setFormError(false)}
          onBlur={(e) => validateInput(e)}
          inputProps={{ minLength: 5, pattern: '[a-zA-Z0-9-_]+$' }}
          required
          error={inputError.username.length > 1}
          helperText={(inputError.username.length > 1) && inputError.username}
        />
        <TextField
          type='password'
          id='password'
          name='password'
          autoComplete='off'
          label='Password'
          variant='outlined'
          size='small'
          onBlur={(e) => validateInput(e)}
          inputProps={{ pattern: '(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{6,}' }}
          required
          error={inputError.password.length > 1}
          helperText={(inputError.password.length > 1) && inputError.password}
        />
        <div>
          <ButtonGroup fullWidth>
            <Button type='submit' variant='contained' disableElevation>Login</Button>
            <Button onClick={() => closeModal()} variant='outlined'>Cancel</Button>
          </ButtonGroup>
  
          <FormHelperText>{formError && 'Please enter a valid username and password'}</FormHelperText>
        </div>
        </FormControl>
      </StyledForm>

      <FormText>
        Don't have an account? <Button onClick={() => changeModal()}>Register</Button>
      </FormText>
    </>
  );
};

export default LoginForm;
