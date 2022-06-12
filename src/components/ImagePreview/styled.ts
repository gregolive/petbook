import Card from '@mui/material/Card';
import styled from 'styled-components';

const StyledImagePreview = styled(Card)`
  display: flex;
  justify-content: center;
  position: relative;

  img {
    width: 50%;
    height: auto;
  }
  
  button {
    position: absolute;
    top: 0.25rem;
    right: 0.25rem;
  }
`;

export { StyledImagePreview };
