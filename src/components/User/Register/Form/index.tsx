import TextField from '@mui/material/TextField';
import { StyledForm } from '../../styled';

const RegisterForm = () => {
  return (
    <StyledForm>
      <TextField id='outlined-basic' label='Username' variant='outlined' size='small' />
    </StyledForm>
  );
};

export default RegisterForm;
