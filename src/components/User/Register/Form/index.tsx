import { useRef, useState } from 'react';
import axios from 'axios';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import TextField from '@mui/material/TextField';
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';
import { StyledForm, FormHeading, FormText } from '../../styled';

interface RegisterFormProps {
  closeModal: Function;
  changeModal: Function;
};

const RegisterForm = ({ closeModal, changeModal }: RegisterFormProps) => {
  const form = useRef();
  const [formError, setFormError] = useState(false);
  const [userData, setUserData] = useState({
    username: '',
    name: '',
    email: '',
    password: '',
    passwordConfirmation: '',
  });
  const [inputError, setInputError ] = useState({
    username: '',
    name: '',
    email: '',
    password: '',
    passwordConfirmation: '',
  });

  const buildFormData = () => {
    const formData = new FormData();
    formData.append('username', userData.username);
    formData.append('name', userData.name);
    formData.append('email', userData.email);
    formData.append('password', userData.password);

    return formData;
  };

  const formSubmit = (): void => {
    const formData = buildFormData();
    const url = 'http://localhost:3001/api/v1/user/create';
    const config = { headers: { 'content-type': 'multipart/form-data' } };

    axios.post(url, formData, config)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
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
      case validity['typeMismatch']:
        setInputError({ ...inputError, [e.target.name]: `Please enter a valid ${e.target.name}`});
        break;
      case validity['patternMismatch']:
        if (e.target.name === 'username') {
          setInputError({ ...inputError, [e.target.name]: 'Username can only contain letters, numbers, dashes, and underscores'});
          break;
        } else if (e.target.name === 'name') {
          setInputError({ ...inputError, [e.target.name]: 'Name can only contain letters and spaces'});
          break;
        } else if (e.target.name === 'password') {
          setInputError({ ...inputError, [e.target.name]: 'Password must be at least 6 characters long and contain an uppercase letter, number, and special character'});
          break;
        }
        setInputError({ ...inputError, [e.target.name]: 'Passwords must match'});
        break;
      default:
        setInputError({ ...inputError, [e.target.name]: ''});
    }
  };

  const handleChange = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
    setFormError(false);
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  return (
    <>
      <StyledForm ref={form.current} onSubmit={handleSubmit} noValidate>
        <FormControl error={formError}>
          <FormHeading>Welcome friend! 🐱</FormHeading>

          <TextField 
            type='text'
            id='username'
            name='username'
            label='Username'
            variant='outlined'
            size='small'
            value={userData.username}
            onChange={handleChange}
            onBlur={(e) => validateInput(e)}
            inputProps={{ minLength: 5, pattern: '[a-zA-Z0-9-_]+$' }}
            required
            error={inputError.username.length > 1}
            helperText={(inputError.username.length > 1) && inputError.username}
          />
          <TextField
            type='text'
            id='name'
            name='name'
            label='Name'
            variant='outlined'
            size='small'
            value={userData.name}
            onChange={handleChange}
            onBlur={(e) => validateInput(e)}
            inputProps={{ pattern: '[a-zA-Z ]+$'}}
            required
            error={inputError.name.length > 1}
            helperText={(inputError.name.length > 1) && inputError.name}
          />
          <TextField
            type='email'
            id='email'
            name='email'
            label='Email'
            variant='outlined'
            size='small'
            value={userData.email}
            onChange={handleChange}
            onBlur={(e) => validateInput(e)}
            required
            error={inputError.email.length > 1}
            helperText={(inputError.email.length > 1) && inputError.email}
          />
          <TextField
            type='password'
            id='password'
            name='password'
            autoComplete='off'
            label='Password'
            variant='outlined'
            size='small'
            value={userData.password}
            onChange={handleChange}
            onBlur={(e) => validateInput(e)}
            inputProps={{ pattern: '(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{6,}' }}
            required
            error={inputError.password.length > 1}
            helperText={(inputError.password.length > 1) && inputError.password}
          />
          <TextField
            type='password'
            id='passwordConfirmation'
            name='passwordConfirmation'
            autoComplete='off'
            label='Confirm Password'
            variant='outlined'
            size='small'
            value={userData.passwordConfirmation}
            onChange={handleChange}
            onBlur={(e) => validateInput(e)}
            inputProps={{ pattern: userData.password }}
            required
            error={inputError.passwordConfirmation.length > 1}
            helperText={(inputError.passwordConfirmation.length > 1) && inputError.passwordConfirmation}
          />

          <div>
            <ButtonGroup fullWidth>
              <Button type='submit' variant='contained' disableElevation>Register</Button>
              <Button onClick={() => closeModal()} variant='outlined'>Cancel</Button>
            </ButtonGroup>

            <FormHelperText>{formError && 'Please fill in required fields with valid entries'}</FormHelperText>
          </div>
        </FormControl>
      </StyledForm>

      <FormText>
        Already have an account? <Button onClick={() => changeModal()}>Log in</Button>
      </FormText>
    </>
  );
};

export default RegisterForm;
