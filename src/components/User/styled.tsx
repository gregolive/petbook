import styled from 'styled-components';

const StyledForm = styled.form`
  width: 100%;
  display: grid;
  gap: 1rem;

  button:first-of-type {
    color: ${(props) => props.theme.custom.background};
  }
`;

const FormHeading = styled.h3`
  font-size: 2.25rem;
  font-weight: 500;
`;

const FormText = styled.p`
  margin: 0.5rem 0 0;
  align-self: start;
  display: flex;
  align-items: center;
`;

export { StyledForm, FormHeading, FormText };
