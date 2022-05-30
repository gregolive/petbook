import TextField from '@mui/material/TextField';
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';
import { StyledForm, FormHeading, FormText } from '../../styled';

interface LoginFormProps {
  closeModal: Function;
  changeModal: Function;
};

const LoginForm = ({ closeModal, changeModal }: LoginFormProps) => {
  return (
    <>
      <StyledForm>
        <FormHeading>Hello again! 🐶</FormHeading>

        <TextField id='username' label='Username' variant='outlined' size='small' fullWidth/>
        <TextField id='password' label='Password' variant='outlined' size='small'/>

        <ButtonGroup fullWidth>
          <Button variant='contained' disableElevation>Login</Button>
          <Button onClick={() => closeModal()} variant='outlined'>Cancel</Button>
        </ButtonGroup>
      </StyledForm>

      <FormText>
        Don't have an account? <Button onClick={() => changeModal()}>Register</Button>
      </FormText>
    </>
  );
};

export default LoginForm;
