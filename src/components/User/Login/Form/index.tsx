import { useRef, useState } from 'react';
import { useAuth } from '../../../Auth';
import axios from 'axios';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import TextField from '@mui/material/TextField';
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import CircularProgress from '@mui/material/CircularProgress';
import FacebookBtn from '../../AuthBtn/Facebook';
import GoogleBtn from '../../AuthBtn/Google';
import { ModalContainer, StyledForm, FormHeading, FormText } from '../../styled';

interface LoginFormProps {
  closeModal: Function;
  changeModal: Function;
};

interface ServerError {
  username?: string;
  password?: string;
};

const LoginForm = ({ closeModal, changeModal }: LoginFormProps) => {
  const { onLogin } = useAuth();
  const form = useRef();
  const [formError, setFormError] = useState(false);
  const [userData, setUserData] = useState({
    username: '',
    password: '',
  });
  const [inputError, setInputError] = useState({
    username: '',
    password: '',
  });
  const [submitError, setSubmitError] = useState<ServerError>({});
  const [loading, setLoading] = useState(false); 

  const buildFormData = () => {
    const formData = new FormData();
    formData.append('username', userData.username);
    formData.append('password', userData.password);

    return formData;
  };

  const formSubmit = (): void => {
    const formData = buildFormData();
    const url = 'http://localhost:3001/api/v1/auth/login';
    const config = { headers: { 'content-type': 'multipart/form-data' } };
  
    axios.post(url, formData, config)
      .then((res) => {
        onLogin(res.data);
      }, (err) => {
        setSubmitError(err.response.data.msg);
        setLoading(false);
      });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    const validForm = (e.target as HTMLFormElement).checkValidity();
    if (!validForm) {
      setFormError(true);
      return;
    }
    setLoading(true);
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

  const handleChange = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
    setSubmitError({});
    setFormError(false);
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  return (
    (loading) ? (
      <CircularProgress />
    ) : (
      <ModalContainer>
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
            value={userData.username}
            onChange={handleChange}
            onBlur={(e) => validateInput(e)}
            inputProps={{ minLength: 5, pattern: '[a-zA-Z0-9-_]+$' }}
            required
            error={inputError.username.length > 1 || typeof submitError.username !== 'undefined'}
            helperText={(inputError.username.length > 1 && inputError.username) || (Object.keys(submitError).length > 0 && submitError.username)}
            InputLabelProps={{ required: false }}
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
            error={inputError.password.length > 1 || typeof submitError.password !== 'undefined'}
            helperText={(inputError.password.length > 1 && inputError.password) || (Object.keys(submitError).length > 0 && submitError.password)}
            InputLabelProps={{ required: false }}
          />

          <div>
            <ButtonGroup fullWidth>
              <Button type='submit' variant='contained' disableElevation>Login</Button>
              <Button onClick={() => closeModal()} variant='outlined'>Cancel</Button>
            </ButtonGroup>
    
            <FormHelperText>{(formError && 'Please enter a valid username and password')}</FormHelperText>
          </div>
          </FormControl>
        </StyledForm>

        <Divider flexItem>OR</Divider>

        <FacebookBtn />
        <GoogleBtn />

        <FormText>
          Don't have an account? <Button onClick={() => changeModal()}>Register</Button>
        </FormText>
      </ModalContainer>
    )
  );
};

export default LoginForm;
