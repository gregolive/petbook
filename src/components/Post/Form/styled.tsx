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

export { StyledForm, InputRow };