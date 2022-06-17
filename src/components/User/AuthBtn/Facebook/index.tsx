import Button from '@mui/material/Button';
import FacebookIcon from '@mui/icons-material/Facebook';
import styled from 'styled-components';

const StyledFacebookBtn = styled(Button)`
  && {
    background: #1D78F2;
    color: #fff;
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

const FacebookBtn = () => {
  const handleClick = () => window.open(`${process.env.REACT_APP_SERVER_URL}/api/v1/auth/facebook`, '_self');

  return (
    <StyledFacebookBtn variant='contained' onClick={handleClick}>
      <FacebookIcon />
      Continue with Facebook
    </StyledFacebookBtn>
  );
};

export default FacebookBtn;
