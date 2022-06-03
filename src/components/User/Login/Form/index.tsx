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
  email?: string;
  password?: string;
};

const LoginForm = ({ closeModal, changeModal }: LoginFormProps) => {
  const { onLogin } = useAuth();
  const form = useRef();
  const [formError, setFormError] = useState(false);
  const [userData, setUserData] = useState({
    email: '',
    password: '',
  });
  const [inputError, setInputError] = useState({
    email: '',
    password: '',
  });
  const [submitError, setSubmitError] = useState<ServerError>({});
  const [loading, setLoading] = useState(false); 

  const buildFormData = () => {
    const formData = new FormData();
    formData.append('email', userData.email);
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
      case validity['typeMismatch']:
        setInputError({ ...inputError, [e.target.name]: 'Please enter a valid email'});
        break;
      case validity['patternMismatch']:
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
            type='email'
            id='email'
            name='email'
            label='Email'
            variant='outlined'
            size='small'
            value={userData.email}
            onChange={handleChange}
            onBlur={(e) => validateInput(e)}
            inputProps={{ }}
            required
            error={inputError.email.length > 1 || typeof submitError.email !== 'undefined'}
            helperText={(inputError.email.length > 1 && inputError.email) || (Object.keys(submitError).length > 0 && submitError.email)}
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
    
            <FormHelperText>{(formError && 'Please enter a valid email and password')}</FormHelperText>
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
