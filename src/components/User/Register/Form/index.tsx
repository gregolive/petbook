import TextField from '@mui/material/TextField';
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';
import { StyledForm, FormHeading, FormText } from '../../styled';

interface RegisterFormProps {
  closeModal: Function;
  changeModal: Function;
};

const RegisterForm = ({ closeModal, changeModal }: RegisterFormProps) => {
  return (
    <>
      <StyledForm>
        <FormHeading>Welcome friend! 🐱</FormHeading>

        <TextField id='username' name='username' label='Username' variant='outlined' size='small' />
        <TextField id='name' name='name' label='Name' variant='outlined' size='small' />
        <TextField id='email' name='email' label='Email' variant='outlined' size='small' />
        <TextField id='password' name='password' label='Password' variant='outlined' size='small' />
        <TextField id='password-confirmation' name='password-confirmation' label='Confirm Password' variant='outlined' size='small' />

        <ButtonGroup fullWidth>
          <Button variant='contained' disableElevation>Register</Button>
          <Button onClick={() => closeModal()} variant='outlined'>Cancel</Button>
        </ButtonGroup>
      </StyledForm>

      <FormText>
        Already have an account? <Button onClick={() => changeModal()}>Log in</Button>
      </FormText>
    </>
  );
};

export default RegisterForm;
