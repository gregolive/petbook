import Card from '@mui/material/Card';
import styled from 'styled-components';

const StyledForm = styled.form`
  display: grid;
  gap: 0.5rem;

  button {
    color: ${(props) => props.theme.custom.background};
  }
`;

const InputRow = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 0.25rem;
`;

const ImagePreview = styled(Card)`
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

export { StyledForm, InputRow, ImagePreview };