import Button from '@mui/material/Button';
import GoogleIcon from '@mui/icons-material/Google';
import styled from 'styled-components';

const StyledGoogleBtn = styled(Button)`
  && {
    background: #fff;
    color: #4285F4;
    font-size: 1rem;
    padding: 4px 0;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
  }

  &&:hover {
    background: #1D78F2;
  }
`;

const GoogleBtn = () => {//${process.env.REACT_APP_SERVER_URL}
  const handleClick = () => window.open(`${process.env.REACT_APP_SERVER_URL}/api/v1/auth/google`, '_self');

  return (
    <StyledGoogleBtn variant='contained' onClick={handleClick}>
      <GoogleIcon />
      Continue with Google
    </StyledGoogleBtn>
  );
};

export default GoogleBtn;
